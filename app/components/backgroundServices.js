import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums";
import * as application from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";
import * as Toast from "nativescript-toast";
import { beep } from "./beep";

const appSettings = require("tns-core-modules/application-settings");
const audioplayer = require("nativescript-audioplay");

var counter = 0;
////////////////////////////// make sound if not empty

const locationSettings = {
  minimumUpdateTime: 5000,
  updateTime: 5000, ///
  updateDistanceInMetters: 0.1,
  samePlaceInKm: 0.01,
  pointCanPlaceDistanceKm: 0.5,
  featurePointDistanceKm: 0.9
};

let prevLocation = { lat: null, lng: null };
let audio = new BackgroundAudio();

if (application.android) {
  const { sdkVersion } = platform.device;
  if (sdkVersion * 1 < 26) {
    android.app.Service.extend(
      "com.ciriscr.geotest.location.BackgroundService",
      {
        onStartCommand: function(intent, flags, startId) {
          this.super.onStartCommand(intent, flags, startId);
          return android.app.Service.START_STICKY;
        },
        onCreate: function() {
          watchLocation(this);
        },
        onBind: function(intent) {
          console.log("on Bind Services");
        },
        onUnbind: function(intent) {
          console.log("UnBind Service");
        },
        onDestroy: function() {
          console.log("service onDestroy");
          geolocation.clearWatch(this.id);
        }
      }
    );
  } else {
    android.app.job.JobService.extend(
      "com.ciriscr.geotest.location.BackgroundService26",
      {
        onStartJob(params) {
          console.log("Starting job...");
          watchLocation(this);
          this.jobFinished(params, true);
          return false;
        },

        onStopJob() {
          console.log("Stopping job ...");
          return true;
        }
      }
    );
  }
}

function watchLocation(comp) {
  console.log("Watch location");
  geolocation.enableLocationRequest().then(
    function() {
      comp.id = geolocation.watchLocation(
        function(loc) {
          if (loc) {
            // we thinka bout later
            let toast = Toast.makeText(counter + " counter ");
            toast.setDuration(1000 * 30);
            toast.show();

            console.log(
              counter +
                "Background Location: " +
                loc.latitude +
                " " +
                loc.longitude
            );

            fetch("https://audio.tricypolitain.com/ping?text=newtest" + counter)
              .then(e => {})
              .catch(e => {});

            // beep();
          }
        },
        function(e) {
          console.log("Background watchLocation error: " + (e.message || e));
        },
        {
          desiredAccuracy: Accuracy.high,
          updateDistance: locationSettings.updateDistanceInMetters,
          updateTime: locationSettings.updateTime,
          minimumUpdateTime: locationSettings.minimumUpdateTime
        }
      );
    },
    function(e) {
      console.log(
        "Background enableLocationRequest error: " + (e.message || e)
      );
    }
  );
}

/**
 * mother of funciton
 */
function sortPoints(currentLat, currentLng) {
  if (
    prevLocation.lat != null &&
    this.distanceInKmBetweenEarthCoordinates(
      prevLocation.lat,
      tprevLocationhis.lng,
      currentLat,
      currentLng
    ) < locationSettings.samePlaceInKm
  ) {
    console.log("we are same place");
    return;
  }

  let points = appSettings.getString("points");
  if (points) {
    points = JSON.parse(points);
  } else {
    console.log("points not exist");
    return;
  }

  for (let ind in points) {
    points[ind].distance = this.distanceInKmBetweenEarthCoordinates(
      currentLat,
      currentLng,
      points[ind].lat,
      points[ind].lng
    );
  }

  let clear = points
    .filter(
      x =>
        x.distance < locationSettings.featurePointDistanceKm && x.active == true
    )
    .sort((a, b) => {
      if (a.distance > b.distance) {
        return 1;
      }
      if (a.distance < b.distance) {
        return -1;
      }

      return 0;
    });

  if (clear.length > 0) {
    if (clear[0].distance < locationSettings.pointCanPlaceDistanceKm) {
      audio.point = clear[0];
    }
  }
  this.feautrePoints = clear.length > 0 ? clear : null;
}

//                /mother of funciton above

/**
 * @point {object}
 */
const BackgroundAudio = {
  point: null,
  player: null,
  interval: null,
  /**
   * Play Audio and save data to setttings
   */
  set point(point) {
    if (this.point != null) {
      this.point = point;
      appSettings.setString("current", point);
      this.play();
    } else {
      //call beep
      beep();
      // local notification
    }
  },

  play() {
    // if not null lets do
    if (this.point != null) {
      appSettings.setString("current", this.point);
    }

    this.player = new audioplayer.TNSPlayer();
    let playerOptions = {
      audioFile: point.mp3,
      loop: false,
      completeCallback() {
        console.log("finished playing");
      },
      errorCallback(errorObject) {
        console.log(JSON.stringify(errorObject));
      },
      infoCallback(args) {
        console.log(JSON.stringify(args));
      }
    };

    this.player
      .playFromUrl(playerOptions)
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log("something went wrong...", err);
      });

    this.interval = setInterval(() => {
      this.player.getAudioTrackDuration().then(duration => {
        // iOS: duration is in seconds
        // Android: duration is in milliseconds
        let current = this.player.currentTime;
        if (isIOS) {
          current *= 1000;
        }

        appSettings.setNumber("player_duration", current);
      });
    }, 1000);
  },

  /**
   * Please clear all
   */
  clear() {
    if (this.player != null) {
      this.player.pause();
    }
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.point = null;
    this.player = null;

    appSettings.remove("point");
    appSettings.remove("player_duration");
  }
};

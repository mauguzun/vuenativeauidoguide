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
            toast.setDuration(1000 * 20);
            toast.show();

            sortPoints(loc.latitude, loc.longitude);

            // fetch("https://audio.tricypolitain.com/ping?text=newtest" + counter)
            //   .then(e => {})
            //   .catch(e => {});

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
    distanceInKmBetweenEarthCoordinates(
      prevLocation.lat,
      prevLocation.lng,
      currentLat,
      currentLng
    ) < locationSettings.samePlaceInKm
  ) {
    console.log("we are same place");
    return;
  }

  let points = appSettings.getString("points");
  if (points) {
    console.log("pointssss");
    points = JSON.parse(points);
  } else {
    console.log("points not exist");
    return;
  }

  for (let ind in points) {
    points[ind].distance = distanceInKmBetweenEarthCoordinates(
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
      BackgroundAudio.point = clear[0];
    }
  }
  // feautrePoints = clear.length > 0 ? clear : null;
}

//                /mother of funciton above

/**
 *
 */
const BackgroundAudio = {
  _point: null,
  player: null,
  interval: null,
  /**
   * Play Audio and save data to setttings
   */
  set point(point) {
    if (this.point == null) {
      this._point = point;
      appSettings.setString("current", JSON.stringify(point));
      this.play();
    } else {
    }
  },
  get point() {
    return this._point;
  },

  play() {
    const sound =
      "https://notificationsounds.com/soundfiles/4e4b5fbbbb602b6d35bea8460aa8f8e5/file-sounds-1096-light.mp3";

    let player = new audioplayer.TNSPlayer();
    let playerOptions = {
      audioFile: this._point.mp3,
      loop: false,
      completeCallback: function() {
        console.log("finished playing");
      },
      errorCallback: function(errorObject) {
        console.log(JSON.stringify(errorObject));
      },
      infoCallback: function(args) {
        console.log(JSON.stringify(args));
      }
    };

    player
      .playFromUrl(playerOptions)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("something went wrong...", err);
      });
    // alert("in da play");

    // this.player = new audioplayer.TNSPlayer();
    // let playerOptions = {
    //   audioFile: "https://notificationsounds.com/soundfiles/4e4b5fbbbb602b6d35bea8460aa8f8e5/file-sounds-1096-light.mp3",
    //   loop: false,
    //   completeCallback() {
    //     console.log("finished playing");
    //   },
    //   errorCallback(errorObject) {
    //     console.log(JSON.stringify(errorObject));
    //   },
    //   infoCallback(args) {
    //     console.log(JSON.stringify(args));
    //   }
    // };

    // this.player
    //   .playFromUrl(playerOptions)
    //   .then(function(res) {
    //     console.log(res);
    //   })
    //   .catch(function(err) {
    //     console.log("something went wrong...", err);
    //   });

    // this.interval = setInterval(() => {
    //   this.player.getAudioTrackDuration().then(duration => {
    //     // iOS: duration is in seconds
    //     // Android: duration is in milliseconds
    //     let current = this.player.currentTime;
    //     if (isIOS) {
    //       current *= 1000;
    //     }

    //     appSettings.setNumber("player_duration", current);
    //   });
    // }, 1000);
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

/**
 *
 * @param {number} lat1
 * @param {number} lon1
 * @param {number} lat2
 * @param {number} lon2
 */
function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
  var earthRadiusKm = 6371;

  var dLat = degreesToRadians(lat2 - lat1);
  var dLon = degreesToRadians(lon2 - lon1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2);
  Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums";
import * as application from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";
import * as Toast from "nativescript-toast";
import { beep } from "./beep";

import { Sorting } from "./Sorting";


import { Singleton } from "./Singleton.js";
import { locationSettings } from "./locationSettings";

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
            let toast = Toast.makeText(loc.latitude + "  " + loc.longitude);
            toast.setDuration(1000 * 20);
            toast.show();
                
           
             Sorting.sortPoints(loc.latitude, loc.longitude);
   
            // fetch("https://audio.tricypolitain.com/ping?text=newtest" + counter)
            //   .then(e => {})
            //   .catch(e => {});
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
      console.log("Background enableLocationRequest error: " + (e.message || e));
    }
  );
}  
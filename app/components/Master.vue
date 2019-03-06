<!--<template>
  <Page class="page">
    <GridLayout rows="auto, auto, auto, *, auto">
      <GridLayout row="0" columns="*, *, *, *">
        <Button :text="counter" col="0" textWrap="true" @tap="enableLocationTap"/>
        <Button text="Get Current Location" col="1" textWrap="true" @tap="buttonGetLocationTap"/>
        <Button text="Start Monitoring" col="2" textWrap="true" @tap="buttonStartTap"/>
        <Button text="Stop Monitoring" col="3" textWrap="true" @tap="buttonStopTap"/>
      </GridLayout>
      <GridLayout row="1" columns="*, *">
        <Button
          text="Start Background thread monitoring"
          col="0"
          ios:visibility="collapsed"
          textWrap="true"
          @tap="startBackgroundTap"
        />
        <Button
          text="Stop Background thread monitoring"
          col="1"
          ios:visibility="collapsed"
          textWrap="true"
          @tap="stopBackgroundTap"
        />
      </GridLayout>

      <Label row="2" :text="watchId"></Label>
      <ListView row="3" for="loc in model.locations">
        <v-template>
          <Label :text="`${$index}, ${loc.latitude}, ${loc.longitude}, ${loc.altitude}`"/>
        </v-template>
      </ListView>

      <Button text="Clear" row="4" @tap="buttonClearTap"/>
    </GridLayout>
  </Page>
</template> -->

<template>
  <Page class="page">
    <ActionBar title="Hello World">
      <StackLayout
        orientation="horizontal"
        height="38"
        alignItems="left"
        class="actionBarContainer"
      >
        <StackLayout class="HLeft" style="margin-top:10;" @tap="toggleDrawer()">
          <Label
            :text="drawerToggle ? drawer2: drawer1"
            style="font-size:27;color:#333;"
            class="font-awesome"
          />
        </StackLayout>
        <StackLayout class="HMid"></StackLayout>
        <StackLayout class="HRight">
          <Label :text="play ? '⏸' : '▶'" style="font-size:27;color:#333;" @tap="playStop"/>
        </StackLayout>
      </StackLayout>
    </ActionBar>

    <RadSideDrawer ref="drawer" @drawerOpened="onDrawerOpened()" @drawerClosed="onDrawerClosed()">
      <StackLayout ~drawerContent backgroundColor="#eee">
        <StackLayout height="15%"></StackLayout>
        <StackLayout class>
          <Label
            :text="'' + translate.menu.settings"
            @tap="go('settings')"
            paddingLeft="30%"
            color="black"
            class="drawerItemText font-awesome"
            margin="10"
          />
          <Label
            :text="'' + translate.menu.about"
            @tap="go('about')"
            paddingLeft="30%"
            color="black"
            class="drawerItemText font-awesome"
            margin="10"
          />

          <Label
            :text="'' + translate.menu.map"
            @tap="go('map')"
            paddingLeft="30%"
            color="black"
            class="drawerItemText font-awesome"
            margin="10"
          />
        </StackLayout>
      </StackLayout>

      <StackLayout ~mainContent>
        <DockLayout>
          <StackLayout dock="top" width="100%">
            <StackLayout width="100%" dock="top">
              <audioplayer v-if="current != null" ref="audio" :point="current"></audioplayer>
              <ScrollView>
                <component @settingSaved="settingsDone" :translate="translate" :is="currentComp"></component>
              </ScrollView>
            </StackLayout>

            <ScrollView>
              <StackLayout width="100%" v-show="showmap" dock="top" height="85%">
                <MapView
                  width="100%"
                  height="100%"
                  @mapReady="MAP_mapReady"
                  dock="top"
                  ref="map"
                  :zoom="map.zoom"
                  :latitude="map.latitude"
                  :longitude="map.longitude"
                  bearing="180"
                  tilt="35"
                />
              </StackLayout>
            </ScrollView>
            <StackLayout v-if="feturePoints != null" dock="top" height="100%" width="100%" style>
              <ScrollView>
                <ListView
                  for="item in feturePoints"
                  :key="index"
                  height="100%"
                  separatorColor="transparent"
                  id="listView"
                >
                  <v-template>
                    <StackLayout
                      orientation="horizontal"
                      style="border-bottom-width:1;border-bottom-color:#E4E4E4;"
                      padding="10"
                      @tap="playFeature(item)"
                    >
                      <StackLayout width="20%">
                        <Image :src="item.img" stretch="aspectFill" class="conImg"/>
                      </StackLayout>
                      <StackLayout marginLeft="10" paddingTop="3" width="50%">
                        <Label :text="item.title"/>
                        <Label :text="item.text"/>
                      </StackLayout>
                    </StackLayout>
                  </v-template>
                </ListView>
              </ScrollView>
            </StackLayout>

            <!-- points near -->
          </StackLayout>
        </DockLayout>
      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>

<script>

  import * as geolocation from "nativescript-geolocation";
  import * as platform from "tns-core-modules/platform";
  import { Accuracy } from "ui/enums";
  const utils = require("tns-core-modules/utils/utils");
  import * as application from "tns-core-modules/application";
  let locationService = require('./backgroundServices');



import Settings from "./pages/Settings";
import About from "./pages/About";
import PageMap from "./pages/PageMap.vue";
import Player from "./pages/Player";
import { Image } from "tns-core-modules/ui/image";

import { beep } from "./beep.js";
import { apiCall } from "./api.js";
import { getString } from "tns-core-modules/application-settings/application-settings";

let mapsModule = require("nativescript-google-maps-sdk");
const appSettings = require("tns-core-modules/application-settings");
let translate = require("./../translate.json");
///

export default {
  mounted() {
    console.log("mounted");
    /////////////////
    if (appSettings.getString("points")) {
      this.points = JSON.parse(appSettings.getString("points"));
    }
    if (appSettings.getString("lang")) {
      this.translate = translate[appSettings.getString("lang")];
      console.log(this.translate.menu.map);
    }
    ///////////////////

    this.counter = appSettings.getNumber("cou", 0);
    // setInterval(e => {
    //   this.counter = appSettings.getNumber("cou", 0);
    // }, 10000);
    ///////////
    //////////////
  },

  watch: {
    current(value) {
      this.current = this.points.find(x => x.id == value.id);
      this.points.find(x => x.id == value.id).active = false;

      // lets do this green ;)
      if (
        this.map.view != null &&
        this.map.markers.find(x => x.userData.id == value.id)
      ) {
        this.map.markers.find(x => x.userData.id == value.id).color = "green";
      }
    }
  },
  components: {
    settings: Settings,
    about: About,
    audioplayer: Player
  },

  data() {
    return {
      current: null,
      feturePoints: null,
      points: null,
      drawerToggle: false,
      currentComp: null,
      drawer1: "",
      drawer2: "",
      showmap: true,
      debug: true,
      translate: translate.en,
      play: false,
      map: {
        longitude: 7.1827772,
        latitude: 43.7031691,
        zoom: 17,
        markers: [],
        currentLocation: null,
        view: null
      },

      ///
      model: {
        locations: []
      },
      counter: appSettings.getNumber("cou", 0),
      watchId: null,
      BGids: []
      ///
    };
  },
  methods: {
    ////////

    startBackgroundTap,
    stopBackgroundTap,
    enableLocationTap,
    buttonGetLocationTap,
    buttonStartTap,
    buttonStopTap,
    buttonClearTap,
    // map
    MAP_mapReady(args) {
      this.map.view = args.object;

      //   this.pointsMarkers.push(marker);
      this.map.view.latitude = 43.7031691;
      this.map.view.longitude = 7.1827772;
      this.MAP_markerSetPoints();
    },

    MAP_markerSetPoints() {
      if ((this.points == null) | (this.map.view == null)) {
        return;
      }

      this.map.view.removeAllMarkers();
      this.map.markers = [];

      for (var x = 0; this.points[x]; x++) {
        let marker = new mapsModule.Marker();
        marker.position = new mapsModule.Position.positionFromLatLng(
          this.points[x].lat,
          this.points[x].lng
        );

        marker.title = this.points[x].title;
        marker.userData = { id: this.points[x].id };

        this.map.view.addMarker(marker);
        this.map.markers.push(marker);

        this.map.view.latitude = this.points[x].lat;
        this.map.view.longitude = this.points[x].lng;
      }
      if(this.debug){
        this.startBackgroundTap();
      }
    },

    MAP_setCurrentLocation(lat, lng) {
      if (this.map.currentLocation == null) {
        this.map.currentLocation = new mapsModule.Marker();
        this.map.currentLocation.position = new mapsModule.Position.positionFromLatLng(
          lat,
          lng
        );
        this.map.currentLocation.color = "blue";
        this.map.currentLocation.title = "You are here";
        this.map.view.addMarker(this.map.currentLocation);
      } else {
        this.map.currentLocation.position = new mapsModule.Position.positionFromLatLng(
          lat,
          lng
        );
      }
      this.map.view.latitude = lat;
      this.map.view.longitude = lng;
    },
    /**
     * call from settings api
     */
    settingsDone(data) {
      let temp = {
        city: appSettings.getString("city", this.sendCity),
        lang: appSettings.getString("lang", this.sendCity)
      };

      appSettings.setString("city", data.city);
      appSettings.setString("lang", data.lang);

      // check if city is same ?
      if (data.city != temp.city) {
        this.laodPointsFromApi();
      } else {
        this.MAP_markerSetPoints();
      }
      if (data.lang != temp.lang) {
        this.setLang();
      }

      this.showmap = true;
      this.currentComp = null;
    },
    /**
     * here we set lang for whole application
     */
    setLang() {
      this.translate = translate[appSettings.getString("lang")];
    },
    laodPointsFromApi() {
      apiCall("points", {
        city: appSettings.getString("city", "5"),
        lang: appSettings.getString("lang", "en")
      })
        .then(res => {
          return res.json();
        })
        .then(res => {
          if (res.action == true) {
            // this.current = this.points[0];

            for (var x = 0; res.points[x]; x++) {
              res.points[x].lat = parseFloat(res.points[x].lat);
              res.points[x].lng = parseFloat(res.points[x].lng);
              res.active = true;
            }

            this.points = res.points;
            appSettings.setString("points", JSON.stringify(this.points));
            this.MAP_markerSetPoints();
          }
        });
    },
    //
    onDrawerClosed() {
      this.drawerToggle = false;
    },
    onDrawerOpened() {
      this.drawerToggle = true;
    },
    toggleDrawer() {
      this.$refs.drawer.nativeView.toggleDrawerState();
    },

    go(page) {
      this.showmap = page != "map" ? false : true;
      this.currentComp = page != "map" ? page : null;
      this.toggleDrawer();
    },
    playFeature(point) {
      if (this.$refs.audio != null) {
        this.$refs.audio.stop();
        this.$refs.audio.points = null;
      }

      this.current = this.points.find(x => x.id == point.id);
    },
    /**
     * start background server or stop
     */
    playStop() {
      alert(379);
      startBackgroundTap();
    },

    /**
     * @lat number lattitude
     * @lng number longitude
     * call this funciton from backround
     */

    currentLocation(lat, lng) {},
    /**
     * @id = "string"
     */
    play(id) {
      // check

      let playPoint = this.points.find(x => x.id == id);

      if (!playPoint | (playPoint.active == false)) {
        return;
      }

      // we cant play
      if (this.$refs.audio) {
        if (this.$refs.audio.progress > 0 && this.$refs.audio.progress < 100) {
          this.openModal(playPoint);
          return;
        }
      }

      this.current = this.points.find(x => x.id == id);
    },
    test() {
      this.MAP_setCurrentLocation(43.7031691, 7.1827772);
    },
    openModal(point) {
      beep();
      confirm({
        title: point.title,
        message: point.title,
        okButtonText: "Ok",
        cancelButtonText: "Skip"
      }).then(result => {
        if (result == true) {
          if (this.$refs.audio) {
            this.$refs.audio.stop();
            this.$refs.audio.points = null;
            this.current = this.points.find(x => x.id == point.id);
          }
          // we stop player !!! and send to play again
        } else {
          this.$refs.audio.play();
        }
      });
    }
  }

  ////////
};
///////

function startBackgroundTap() {
  if (application.android) {
    const { sdkVersion } = platform.device;
    const context = utils.ad.getApplicationContext();
    if (sdkVersion * 1 < 26) {
      const intent = new android.content.Intent(
        context,
        com.ciriscr.geotest.location.BackgroundService.class
      );
      console.log("startService");
      context.startService(intent);
    } else {
      const component = new android.content.ComponentName(
        context,
        com.ciriscr.geotest.location.BackgroundService26.class
      );
      const builder = new android.app.job.JobInfo.Builder(1, component);
      builder.setRequiredNetworkType(android.app.job.JobInfo.NETWORK_TYPE_ANY);
      builder.setPeriodic(15 * 60 * 1000);
      const jobScheduler = context.getSystemService(
        android.content.Context.JOB_SCHEDULER_SERVICE
      );
      const service = jobScheduler.schedule(builder.build());
      this.BGids.push(service);
      console.log(`Job Scheduled: ${jobScheduler.schedule(builder.build())}`);
    }
  }
  /*if (application.android) {
          let context = utils.ad.getApplicationContext();
          let intent = new android.content.Intent(context, com.nativescript.location.BackgroundService.class);
          context.startService(intent);
      }*/
}

function stopBackgroundTap() {
  if (application.android) {
    const { sdkVersion } = platform.device;
    const context = utils.ad.getApplicationContext();
    if (sdkVersion * 1 < 26) {
      const intent = new android.content.Intent(
        context,
        com.ciriscr.geotest.location.BackgroundService.class
      );
      console.log("stopService");
      context.stopService(intent);
    } else {
      if (this.BGids.length > 0) {
        const jobScheduler = context.getSystemService(
          android.content.Context.JOB_SCHEDULER_SERVICE
        );
        const service = this.BGids.pop();
        jobScheduler.cancel(service);
        console.log(`Job Canceled: ${service}`);
      }
    }
  }
  /*if (application.android) {
          let context = utils.ad.getApplicationContext();
          let intent = new android.content.Intent(context, com.nativescript.location.BackgroundService.class);
          context.stopService(intent);
      }*/
}

function enableLocationTap() {
  geolocation.isEnabled().then(
    function(isEnabled) {
      console.log(isEnabled);
      if (!isEnabled) {
        geolocation.enableLocationRequest().then(
          function() {},
          function(e) {
            console.log("Error: " + (e.message || e));
          }
        );
      }
    },
    function(e) {
      console.log("Error: " + (e.message || e));
    }
  );
}

function buttonGetLocationTap() {
  const comp = this;
  geolocation.isEnabled().then(isEnabled => {
    if (isEnabled) {
      let location = geolocation
        .getCurrentLocation({
          desiredAccuracy: Accuracy.high,
          maximumAge: 5000,
          timeout: 10000,
          iosAllowsBackgroundLocationUpdates: true,
          updateDistance: 0.1,
          timeout: 20000
        })
        .then(
          function(loc) {
            if (!!loc) {
              comp.model.locations.push(loc);
            }
          },
          function(e) {
            console.log("Error: " + (e.message || e));
          }
        );
    }
  });
}

function buttonStartTap() {
  try {
    const comp = this;
    geolocation.isEnabled().then(isEnabled => {
      if (isEnabled) {
        comp.watchId = geolocation.watchLocation(
          function(loc) {
            console.log(loc);
            if (loc) {
              comp.model.locations.push(loc);
            }
          },
          function(e) {
            console.log("Error: " + e.message);
          },
          {
            desiredAccuracy: Accuracy.high,
            maximumAge: 5000,
            timeout: 20000,
            updateDistance: 1,
            updateTime: 3000,
            iosAllowsBackgroundLocationUpdates: true,
            iosPausesLocationUpdatesAutomatically: false
          }
        );
      }
    });
  } catch (ex) {
    console.log("Error: " + ex.message);
  }
}

function buttonStopTap() {
  if (this.watchId != null) {
    geolocation.clearWatch(this.watchId);
    this.watchId = null;
  }
}

function buttonClearTap() {
  this.model.locations.splice(0, this.model.locations.length);
}
</script>

<style scoped>
.hello-world {
  margin: 20;
}

label {
  color: red;
}
</style>

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
          <Label text="☰" style="font-size:27;color:#333;" class="font-awesome"/>
        </StackLayout>
        <StackLayout class="HMid">
          <Label :text="cityTitle + play +'ss2'"/>
        </StackLayout>
        <StackLayout @tap="switchPlay" class="HRight">
          <Label :text="play ?  iconPlay : iconStop " style="font-size:27;color:#333;"/>\
        </StackLayout>
      </StackLayout>
    </ActionBar>

    <GridLayout>
      <GridLayout>
        <RadSideDrawer
          ref="drawer"
          @drawerOpened="onDrawerOpened()"
          @drawerClosed="onDrawerClosed()"
        >
          <StackLayout ~drawerContent backgroundColor="#eee">
            <StackLayout height="15%"></StackLayout>
            <StackLayout class>
              <Label
                :text="translate.menu.settings"
                @tap="go('settings')"
                paddingLeft="30%"
                color="black"
                class="drawerItemText font-awesome"
                margin="10"
              />

              <Label
                text="Set all active"
                @tap="setAllAsActive"
                paddingLeft="30%"
                color="black"
                class="drawerItemText font-awesome"
                margin="10"
              />

              <Label
                :text=" translate.menu.map"
                @tap="go('map')"
                paddingLeft="30%"
                color="black"
                class="drawerItemText font-awesome"
                margin="10"
              />

              <Label
                :text="translate.menu.about"
                @tap="go('about')"
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
                  <!-- <audioplayer v-if="showPlayer != null" ref="audio" :point="showPlayer"></audioplayer> -->
                  <ScrollView>
                    <component
                      @settingSaved="settingsDone"
                      :translate="translate"
                      :is="currentComp"
                    ></component>
                  </ScrollView>
                </StackLayout>

                <ScrollView>
                  <StackLayout
                    width="100%"
                    v-show="showmap"
                    dock="top"
                    ref="mapContainer"
                    height="100%"
                  >
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
                <StackLayout
                  v-if="featurePoints != null"
                  dock="top"
                  height="100%"
                  width="100%"
                  style
                >
                  <ScrollView>
                    <ListView
                      for="item in featurePoints"
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
                            <Image :src="item.img[0]" stretch="aspectFill" class="conImg"/>
                          </StackLayout>
                          <StackLayout marginLeft="10" paddingTop="3" width="50%">
                            <Label :text="item.title"/>
                            <Label :text="item.distance"/>
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
      </GridLayout>
<Wikitude>
             
             
    </Wikitude>
    
     <detail  v-if="showPlayer != null" ref="audio" :point="showPlayer" ></detail>   
      <loader v-if="showLoader"></loader>   
    </GridLayout>
  </Page>
</template>

<script>
import { Singleton } from "./Singleton.js";

import * as geolocation from "nativescript-geolocation";
import * as platform from "tns-core-modules/platform";
import { Accuracy } from "ui/enums";
const utils = require("tns-core-modules/utils/utils");
import * as application from "tns-core-modules/application";
let locationService = require("./backgroundServices");

import Settings from "./pages/Settings";
import About from "./pages/About";
// import Player from "./pages/Player";
import Loader from "./pages/Loader";
import Detail from "./pages/Detail";

import { Image } from "tns-core-modules/ui/image";
import { Sorting } from "./Sorting";

import { beep } from "./beep.js";
import { apiCall } from "./api.js";
import { getString } from "tns-core-modules/application-settings/application-settings";
import { locationSettings } from "./locationSettings";
import { convertString } from "tns-core-modules/utils/utils";

let mapsModule = require("nativescript-google-maps-sdk");
const appSettings = require("tns-core-modules/application-settings");
let translate = require("./../translate.json");
///

export default {
  destroyed() {},

  mounted() {
    Singleton.vueinst = this;

    if (appSettings.getString("points")) {
      Singleton.points = JSON.parse(appSettings.getString("points"));
      Singleton.printData();
    }

    this.translate = translate[appSettings.getString("lang", "en")];

    if (appSettings.getBoolean("play") == true) {
      this.featurePoints = Singleton.featurePoints;
      this.showPlayer = Singleton.current;
      this.startPlay();
    }

    this.cityTitle = appSettings.getString(
      "cityTitle",
      this.translate.global.title
    );

    // lets continue work
  },

  watch: {
    showPlayer(value) {
      this.showPlayer = value;

      if (value == null) return;

      if (Singleton.points == null) {
        Singleton.points.find(x => x.id == value.id).active = false;
        Singleton.savePoints();
      }

      // lets do this green ;)
      if (
        this.map.view != null &&
        this.map.markers.find(x => x.userData.id == value.id)
      ) {
        this.map.markers.find(x => x.userData.id == value.id).color =
          locationSettings.color.visited;
      }
    },

    play(value) {
      if (value === true) {
        this.showLoader = true;
      }

      this.play = value;
      this.$forceUpdate();
    },

    featurePoints(value) {
      if (value == null) {
        this.$refs.mapContainer.nativeView.height = "100%";
      } else {
        this.$refs.mapContainer.nativeView.height = "80%";
      }
      this.featurePoints = value;
    }
  },
  components: {
    settings: Settings,
    about: About,
    // audioplayer: Player,
    loader: Loader,
    detail: Detail
  },

  data() {
    return {
      iconPlay: "▶",
      iconStop: "◼",

      showLoader: false,
      circle: null,
      cityTitle: null,
      isBackground: false,
      frontLocation: null,
      showPlayer: null,
      featurePoints: null,
      points: null,
      modal: null,
      play: false,
      drawerToggle: false,
      currentComp: null,
      showmap: true,
      debug: true,
      translate: translate.en,
      map: {
        longitude: 7.1827772,
        latitude: 43.7031691,
        zoom: 17,
        markers: [],
        currentLocation: null,
        view: null
      },

      watchId: null,
      BGids: []
      ///
    };
  },
  methods: {
    ////////

    setAllAsActive() {
      for (let x in Singleton.points) {
        Singleton.points[x].active = true;
      }
      Singleton.savePoints();
      Singleton.beebeepDone = [];
      this.MAP_markerSetPoints();
    },

    startBackgroundTap,
    stopBackgroundTap,
    enableLocationTap,

    buttonClearTap,
    // map
    MAP_mapReady(args) {
      this.map.view = args.object;

      //   this.pointsMarkers.push(marker);
      this.map.view.latitude = 43.7031691;
      this.map.view.longitude = 7.1827772;
      this.MAP_markerSetPoints();

      ////
      geolocation.getCurrentLocation(res => {
        let lat = res.latitude;
        let lng = res.longitude;
        this.MAP_setCurrentLocation(lat, lng);
      });

      ///
    },

    MAP_markerSetPoints() {
      if ((Singleton.points == null) | (this.map.view == null)) {
        return;
      }

      this.map.view.removeAllMarkers();
      this.map.markers = [];

      for (var x = 0; Singleton.points[x]; x++) {
        let marker = new mapsModule.Marker();
        marker.position = new mapsModule.Position.positionFromLatLng(
          Singleton.points[x].lat,
          Singleton.points[x].lng
        );

        marker.title = Singleton.points[x].title;
        marker.userData = { id: Singleton.points[x].id };

        marker.color = Singleton.points[x].active
          ? locationSettings.color.active
          : locationSettings.color.visited;

        this.map.view.addMarker(marker);
        this.map.markers.push(marker);

        this.map.view.latitude = Singleton.points[x].lat;
        this.map.view.longitude = Singleton.points[x].lng;
      }
      // if (this.debug) {
      //   this.startBackgroundTap();
      // }
    },

    MAP_setCurrentLocation(lat, lng) {
      this.showLoader = false;
      if (this.map.view == null) {
        return;
      }

      if (this.map.currentLocation == null) {
        this.map.currentLocation = new mapsModule.Marker();
        this.map.currentLocation.position = new mapsModule.Position.positionFromLatLng(
          lat,
          lng
        );
        this.map.currentLocation.color = locationSettings.color.user;
        this.map.currentLocation.title = "You are here";
        this.map.view.addMarker(this.map.currentLocation);
      } else {
        this.map.currentLocation.position = new mapsModule.Position.positionFromLatLng(
          lat,
          lng
        );
      }

      if (this.circle == null) {
        this.circle = new mapsModule.Circle();
        this.circle.center = new mapsModule.Position.positionFromLatLng(
          lat,
          lng
        );
        this.circle.radius = locationSettings.pointCanPlaceDistanceKm * 1000;
        this.circle.strokeWidth = 3;
        //  this.circle.strokeColor = "#ff0000"

        try {
          this.map.view.addCircle(this.circle);
        } catch (e) {}
      } else {
        this.circle.center = new mapsModule.Position.positionFromLatLng(
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
      appSettings.setString("cityTitle", data.cityTitle);

      // check if city is same ?
      if ((data.city != temp.city) | (Singleton.points == null)) {
        this.laodPointsFromApi();
      } else {
        this.MAP_markerSetPoints();
      }
      if (data.lang != temp.lang) {
        this.setLang();
        this.laodPointsFromApi();
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

            Singleton.points = res.points;
            Singleton.savePoints();
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
      this.showLoader = false;
      this.$refs.drawer.nativeView.toggleDrawerState();
    },

    go(page) {
      this.showmap = page != "map" ? false : true;
      this.currentComp = page != "map" ? page : null;
      this.toggleDrawer();
    },
    playFeature(point) {
      Singleton._current = Singleton.points.find(x => x.id == point.id);
      try {
        Singleton.player.dispose();
      } catch (e) {}

      this.showPlayer = Singleton.current;
      Singleton.setup();
    },
    /**
     * start background server or stop
     */
    switchPlay() {
      if (appSettings.getBoolean("play") == true) {
        this.stopPlay();
      } else {
        this.startPlay();
      }
    },
    stopPlay() {
      appSettings.setBoolean("play", false);
      this.play = false;

      stopBackgroundTap();

      Singleton._current = null;
      try {
        Singleton.clear();
      } catch (e) {}

      Singleton.featurePoints = null;

      this.featurePoints = null;
      this.showPlayer = null;

      this.$forceUpdate();
    },
    /**
     * this is start service
     */
    startPlay() {
      if (Singleton.points == null) {
        this.stopPlay();
        return;
      }

      this.play = true;

      appSettings.setBoolean("play", true);
      this.$forceUpdate();
      // check did this exist ?
      stopBackgroundTap();
      startBackgroundTap();

      Singleton.vueinst = this;
    },

    openModal(point) {
      confirm({
        title: point.title,
        message: point.title,
        okButtonText: "Ok",
        cancelButtonText: "Skip"
      }).then(result => {
        if (result == true) {
          if (Singleton.current != null) {
            Singleton.player.stop();
            Singleton.current = Singleton.points.find(x => x.id == point.id);
            this.showPlayer = Singleton.current;
          }
        } else {
          if (Singleton.current != null) Singleton.play();
        }
      });
    }
  }

  ////////
};

function startBackgroundTap() {
  if (application.android) {
    const { sdkVersion } = platform.device;
    const context = utils.ad.getApplicationContext();
    if (sdkVersion * 1 < 26) {
      const intent = new android.content.Intent(
        context,
        com.ciriscr.geotest.location.BackgroundService.class
      );

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
  Singleton.clear();
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

function buttonStopTap() {
  if (this.watchId != null) {
    this.stopBackgroundTap();
    this.watchId = null;
  }
}

function buttonClearTap() {
  this.model.locations.splice(0, this.model.locations.length);
}
</script>
  
<style>
.btn {
  font-size: 18;
}

.actionBarContainer {
  width: 100%;
  float: left;
}

.convFriendName {
  font-weight: bold;
  font-size: 19;
}

.convDateOut {
  font-size: 15;
  text-align: center;
}

.convTextOut {
  font-size: 15;
  margin-top: 8;
}

.notRead {
  color: #000;
  font-weight: bold;
}

.read {
  color: #6c6c6c;
}

.conImg {
  width: 60;
  height: 60;
  border-radius: 30;
}

.header {
  background: #1aa3ff;
}

.aboutRow {
  margin-top: 10;
}

.postTitle {
  font-size: 17;
  height: 20;
  color: #000;
}

.drawerItemText {
  font-size: 19;
  color: #000;
  height: 22;
}

.sideDrawerContainer {
  background: #fff;
}

.profilePic {
  width: 150;
  height: 150;
  border-radius: 100;
  margin: 20;
  border-color: #4db8ff;
  border-width: 1;
}

.postContainer {
  margin-top: 10;
  background: #fff;
}

.aboutContainer {
  width: 85%;
  border-radius: 15;
  background: #eeeeee;
  margin-top: 20;
  padding-top: 20;
  padding-bottom: 20;
  padding-left: 20;
  padding-right: 20;
}

.postDateSmall {
  font-size: 14;
  margin-left: 10;
  color: #858585;
}

.postAuthotName {
  font-size: 17;
  color: #000;
  margin-left: 10;
  margin-top: 2;
}

.postImageSmall {
  width: 40;
  height: 40;
  border-radius: 40;
  border-width: 0.5;
  border-color: #c4c4c4;
}

.listImage {
  border-width: 1;
  border-color: #fff;
}

.notification {
  background: red;
  width: 25;
  height: 25;
  margin-top: 8%;
  margin-left: 25;
  border-radius: 30;
  z-index: 100;
  color: #fff;
  font-size: 13;
}

.notificationAndroid {
  background: red;
  width: 22;
  height: 22;
  margin-top: 12%;
  margin-left: 25;
  border-radius: 30;
  z-index: 100;
  color: #fff;
  font-size: 13;
  padding-top: 1;
}

.navItem {
  width: 24%;
  text-align: center;
}

.followersTxt {
  text-align: center;
  font-size: 14;
  height: 20;
}

.followersTxtValue {
  text-align: center;
  margin-top: 10;
  height: 25;
  font-size: 22;
  font-weight: bold;
  color: #000;
}

.followersContainer {
  width: 90%;
}

.HLeft {
  width: 10%;
  float: left;
  border: 1px solid red;
  margin-left: 5.5%;
}
.HMid {
  width: 70%;
}
.HRight {
  width: 19%;
}

.searchField {
  border-bottom-width: 1;
  border-bottom-color: #fff;
  height: 40;
  text-decoration: none;
}

.font-awesome {
  font-family: "FontAwesome";
}
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}

.mainTab {
  font-size: 30;
}
</style>
 

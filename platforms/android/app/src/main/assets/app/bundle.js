module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Master.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/pages/About.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/pages/Loader.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/pages/Settings.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../node_modules/vue-loader/lib/index.js?!./components/Master.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Singleton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Singleton.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/enums/enums.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ui_enums__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/pages/Settings.vue");
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/pages/About.vue");
/* harmony import */ var _pages_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./components/pages/Loader.vue");
/* harmony import */ var _pages_Detail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./components/pages/Detail.vue");
/* harmony import */ var tns_core_modules_ui_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/tns-core-modules/ui/image/image.js");
/* harmony import */ var tns_core_modules_ui_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Sorting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./components/Sorting.js");
/* harmony import */ var _beep_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./components/beep.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./components/api.js");
/* harmony import */ var tns_core_modules_application_settings_application_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings_application_settings__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings_application_settings__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _locationSettings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./components/locationSettings.js");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../node_modules/tns-core-modules/utils/utils.js");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var nativescript_exit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../node_modules/nativescript-exit/index.js");
/* harmony import */ var nativescript_exit__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(nativescript_exit__WEBPACK_IMPORTED_MODULE_16__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const utils = __webpack_require__("../node_modules/tns-core-modules/utils/utils.js");

let locationService = __webpack_require__("./components/backgroundServices.js");
















let mapsModule = __webpack_require__("../node_modules/nativescript-google-maps-sdk/map-view.js");
const appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
let translate = __webpack_require__("./translate.json");
///

/* harmony default export */ __webpack_exports__["default"] = ({
  destroyed() {},

  mounted() {
    _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].vueinst = this;

    if (appSettings.getString("points")) {
      _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points = JSON.parse(appSettings.getString("points"));
      _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].printData();
    }

    this.translate = translate[appSettings.getString("lang", "en")];

    if (appSettings.getBoolean("play") == true) {
      this.featurePoints = _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].featurePoints;
      this.showPlayer = _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].current;
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

      if (_Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points == null) {
        _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points.find(x => x.id == value.id).active = false;
        _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].savePoints();
      }

      // lets do this green ;)
      if (
        this.map.view != null &&
        this.map.markers.find(x => x.userData.id == value.id)
      ) {
        this.map.markers.find(x => x.userData.id == value.id).color =
          _locationSettings__WEBPACK_IMPORTED_MODULE_14__["locationSettings"].color.visited;
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
    settings: _pages_Settings__WEBPACK_IMPORTED_MODULE_5__["default"],
    about: _pages_About__WEBPACK_IMPORTED_MODULE_6__["default"],
    loader: _pages_Loader__WEBPACK_IMPORTED_MODULE_7__["default"],
    detail: _pages_Detail__WEBPACK_IMPORTED_MODULE_8__["default"]
  },

  data() {
    return {
      iconPlay: "▶",
      iconStop: "◼",
      hideWiki: true,
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
      wiki: null,
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
    openDetail() {
      this.$refs.audio.open();
    },

    switchWiki() {
      this.hideWiki = !this.hideWiki;
      this.showLoader = true;
      setTimeout(() => {
        this.showLoader = false;
      }, 2000);
    },

    exit() {
      this.stopPlay();

      Object(nativescript_exit__WEBPACK_IMPORTED_MODULE_16__["exit"])();
    },

    wikiLoaded($event) {
      this.wiki = $event.object;
      this.wiki.captureScreen();
      // wiki.enableLocationProvider()
      this.wiki.captureScreen();
    },

    wikiError() {
      alert("error");
    },
    wikiJson() {
      alert("sjon ");
    },

    setAllAsActive() {
      for (let x in _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points) {
        _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points[x].active = true;
      }
      _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].savePoints();
      _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].beebeepDone = [];
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
      nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["getCurrentLocation"](res => {
        let lat = res.latitude;
        let lng = res.longitude;
        this.MAP_setCurrentLocation(lat, lng);
      });

      ///
    },

    MAP_markerSetPoints() {
      if ((_Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points == null) | (this.map.view == null)) {
        return;
      }

      this.map.view.removeAllMarkers();
      this.map.markers = [];

      for (var x = 0; _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points[x]; x++) {
        let marker = new mapsModule.Marker();
        marker.position = new mapsModule.Position.positionFromLatLng(
          _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points[x].lat,
          _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points[x].lng
        );

        marker.title = _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points[x].title;
        marker.userData = { id: _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points[x].id };

        marker.color = _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points[x].active
          ? _locationSettings__WEBPACK_IMPORTED_MODULE_14__["locationSettings"].color.active
          : _locationSettings__WEBPACK_IMPORTED_MODULE_14__["locationSettings"].color.visited;

        this.map.view.addMarker(marker);
        this.map.markers.push(marker);

        this.map.view.latitude = _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points[x].lat;
        this.map.view.longitude = _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points[x].lng;
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
      if (this.wiki != null) {
        this.wiki.setLocation(lat, lng, 10, 1);
      }

      if (this.map.currentLocation == null) {
        this.map.currentLocation = new mapsModule.Marker();
        this.map.currentLocation.position = new mapsModule.Position.positionFromLatLng(
          lat,
          lng
        );
        this.map.currentLocation.color = _locationSettings__WEBPACK_IMPORTED_MODULE_14__["locationSettings"].color.user;
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
        this.circle.radius = _locationSettings__WEBPACK_IMPORTED_MODULE_14__["locationSettings"].pointCanPlaceDistanceKm * 1000;
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
      if ((data.city != temp.city) | (_Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points == null)) {
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
      Object(_api_js__WEBPACK_IMPORTED_MODULE_12__["apiCall"])("points", {
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

            _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points = res.points;
            _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].savePoints();
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
      _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"]._current = _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points.find(x => x.id == point.id);
      try {
        _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].player.dispose();
      } catch (e) {}

      this.showPlayer = _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].current;
      _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].setup();
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

      _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"]._current = null;
      try {
        _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].clear();
      } catch (e) {}

      _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].featurePoints = null;

      this.featurePoints = null;
      this.showPlayer = null;

      this.$forceUpdate();
    },
    /**
     * this is start service
     */
    startPlay() {
      if (_Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points == null) {
        this.stopPlay();
        return;
      }

      this.play = true;

      appSettings.setBoolean("play", true);
      this.$forceUpdate();
      // check did this exist ?
      stopBackgroundTap();
      startBackgroundTap();

      _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].vueinst = this;
    },

    openModal(point) {
      confirm({
        title: point.title,
        message: point.title,
        okButtonText: "Ok",
        cancelButtonText: "Skip"
      }).then(result => {
        if (result == true) {
          if (_Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].current != null) {
            _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].player.stop();
            _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].current = _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points.find(x => x.id == point.id);
            this.showPlayer = _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].current;
          }
        } else {
          if (_Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].current != null) _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].play();
        }
      });
    }
  }

  ////////
});

function startBackgroundTap() {
  if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__["android"]) {
    const { sdkVersion } = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__["device"];
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
  _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].clear();
  if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__["android"]) {
    const { sdkVersion } = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__["device"];
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
  nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["isEnabled"]().then(
    function(isEnabled) {
      console.log(isEnabled);
      if (!isEnabled) {
        nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["enableLocationRequest"]().then(
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


/***/ }),

/***/ "../node_modules/vue-loader/lib/index.js?!./components/pages/About.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/api.js");
//
//
//
//


const appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      code: "<div><h1 </h1></div>"
    };
  },
  mounted() {
    Object(_api_js__WEBPACK_IMPORTED_MODULE_0__["apiCall"])("code", {
      page_name: "about",
      lang: appSettings.getString("lang", "en")
    }).then(res => {
      return res.json().then(e => {
        this.code = e.code;
      });
    });
  }
});


/***/ }),

/***/ "../node_modules/vue-loader/lib/index.js?!./components/pages/Detail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-audio/audio.js");
/* harmony import */ var nativescript_audio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_audio__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Singleton.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["point"],
  watch: {
    point(val) {
      this.point = val;
      this.setup();
    }
  },
  data() {
    return {
      progress: 0,
      isPlaying: false
    };
  },
  mounted() {
    this.setup();
  },
  destroyed() {
    clearInterval(this._checkInterval);
  },
  methods: {
    onScroll() {
      //access to the native event
      const scrollView = this.$refs.scrollView.nativeView;
      const topView = this.$refs.topView.nativeView;

      // if the offset is less than the height of the header.
      if (scrollView.verticalOffset < 250) {
        const offset = scrollView.verticalOffset / 1.65; // you can adjust this number to make the parallax more subtle or dramatic
        if (scrollView.ios) {
          // iOS adjust the position with an animation to create a smother scrolling effect.
          topView
            .animate({ translate: { x: 0, y: offset } })
            .then(() => {}, () => {});
        } else {
          // Android, animations are jerky so instead just adjust the position without animation.
          topView.translateY = Math.floor(offset);
        }
      }
    },
    open() {
      this.$refs.main.nativeView.height = "100%";
    },
    setup() { 
       this.open();
      this.isPlaying = true;
    
      this._checkInterval = setInterval(() => {
        this.progress = _Singleton__WEBPACK_IMPORTED_MODULE_2__["Singleton"].progress;
      }, 200);
    },
    playPause() {
      if (_Singleton__WEBPACK_IMPORTED_MODULE_2__["Singleton"].player && _Singleton__WEBPACK_IMPORTED_MODULE_2__["Singleton"].player.isAudioPlaying()) {
        _Singleton__WEBPACK_IMPORTED_MODULE_2__["Singleton"].player.pause();
      } else if (_Singleton__WEBPACK_IMPORTED_MODULE_2__["Singleton"].player) {
        _Singleton__WEBPACK_IMPORTED_MODULE_2__["Singleton"].player.play();
      }
    },
    play() {
      try {
        _Singleton__WEBPACK_IMPORTED_MODULE_2__["Singleton"].player.play();
      } catch (e) {}
    },
    stop() {
      try {
        _Singleton__WEBPACK_IMPORTED_MODULE_2__["Singleton"].player.pause();
      } catch (e) {}
    },
    hide() {
      this.$refs.main.nativeView.height = "0";
    }
  }
});


/***/ }),

/***/ "../node_modules/vue-loader/lib/index.js?!./components/pages/Loader.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  }
});


/***/ }),

/***/ "../node_modules/vue-loader/lib/index.js?!./components/pages/Settings.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/api.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["translate"],
  mounted() {
    Object(_api_js__WEBPACK_IMPORTED_MODULE_0__["apiCall"])("cities", { lang: appSettings.getString("lang", "en") })
       .catch(e=>{
         console.log(e);
       })
      .then(res => {

        return res.json();  
      })
      .then(res => {
          
        if (res.action == true) {
          this.cities = res.code;
          this.indexCity = this.cities.findIndex(
            p => p.id == appSettings.getString("city", "1")
          );
          this.indexLang = Object(_api_js__WEBPACK_IMPORTED_MODULE_0__["langList"])().findIndex(
            p => p.id == appSettings.getString("lang", "en")
          );
        }
      });
  },
  data() {
    return {
      indexLang: 1,
      indexCity: 1,
      sendLang: null,
      sendCity: null,
      cities: [],
      lang: Object(_api_js__WEBPACK_IMPORTED_MODULE_0__["langList"])()
    };
  },

  methods: {
    onButtonTap() {
      this.$emit("settingSaved", { city: this.sendCity, lang: this.sendLang ,cityTitle : this.cities[this.indexCity].title });
    },
    changeLang(args) {
      this.sendCity = this.cities[this.indexCity].id;
      this.sendLang = this.lang[this.indexLang].id;

    }

  }
});


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Master.vue?vue&type=template&id=2b32067d&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c(
        "ActionBar",
        { attrs: { title: "Hello World" } },
        [
          _c(
            "StackLayout",
            {
              staticClass: "actionBarContainer",
              attrs: {
                orientation: "horizontal",
                height: "38",
                alignItems: "left"
              }
            },
            [
              _c(
                "StackLayout",
                {
                  staticClass: "HLeft",
                  staticStyle: { marginTop: "10" },
                  on: {
                    tap: function($event) {
                      _vm.toggleDrawer()
                    }
                  }
                },
                [
                  _c("Label", {
                    staticClass: "font-awesome",
                    staticStyle: { fontSize: "27", color: "#333" },
                    attrs: { text: "☰" }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                { staticClass: "HMid" },
                [
                  _c("Label", {
                    attrs: { text: _vm.cityTitle + _vm.play },
                    on: {
                      tap: function($event) {
                        _vm.switchWiki()
                      }
                    }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                { staticClass: "HRight", on: { tap: _vm.switchPlay } },
                [
                  _c("Label", {
                    staticStyle: { fontSize: "27", color: "#333" },
                    attrs: { text: _vm.play ? _vm.iconPlay : _vm.iconStop }
                  }),
                  _vm._v("\\\n      ")
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "GridLayout",
        [
          _c(
            "GridLayout",
            [
              _c(
                "RadSideDrawer",
                {
                  ref: "drawer",
                  on: {
                    drawerOpened: function($event) {
                      _vm.onDrawerOpened()
                    },
                    drawerClosed: function($event) {
                      _vm.onDrawerClosed()
                    }
                  }
                },
                [
                  _c(
                    "StackLayout",
                    {
                      directives: [
                        {
                          name: "view",
                          rawName: "v-view:drawerContent",
                          arg: "drawerContent",
                          modifiers: {}
                        }
                      ],
                      attrs: { backgroundColor: "#eee" }
                    },
                    [
                      _c("StackLayout", { attrs: { height: "15%" } }),
                      _c(
                        "StackLayout",
                        {},
                        [
                          _c("Label", {
                            staticClass: "drawerItemText font-awesome",
                            attrs: {
                              text: _vm.translate.menu.settings,
                              paddingLeft: "30%",
                              color: "black",
                              margin: "10"
                            },
                            on: {
                              tap: function($event) {
                                _vm.go("settings")
                              }
                            }
                          }),
                          _c("Label", {
                            staticClass: "drawerItemText font-awesome",
                            attrs: {
                              text: "Set all active",
                              paddingLeft: "30%",
                              color: "black",
                              margin: "10"
                            },
                            on: { tap: _vm.setAllAsActive }
                          }),
                          _c("Label", {
                            staticClass: "drawerItemText font-awesome",
                            attrs: {
                              text: _vm.translate.menu.map,
                              paddingLeft: "30%",
                              color: "black",
                              margin: "10"
                            },
                            on: {
                              tap: function($event) {
                                _vm.go("map")
                              }
                            }
                          }),
                          _c("Label", {
                            staticClass: "drawerItemText font-awesome",
                            attrs: {
                              text: _vm.translate.menu.about,
                              paddingLeft: "30%",
                              color: "black",
                              margin: "10"
                            },
                            on: {
                              tap: function($event) {
                                _vm.go("about")
                              }
                            }
                          }),
                          _c("Label", {
                            staticClass: "drawerItemText font-awesome",
                            attrs: {
                              text: "Exit",
                              paddingLeft: "30%",
                              color: "black",
                              margin: "10"
                            },
                            on: {
                              tap: function($event) {
                                _vm.exit()
                              }
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    {
                      directives: [
                        {
                          name: "view",
                          rawName: "v-view:mainContent",
                          arg: "mainContent",
                          modifiers: {}
                        }
                      ]
                    },
                    [
                      _c(
                        "DockLayout",
                        [
                          _c(
                            "StackLayout",
                            { attrs: { dock: "top", width: "100%" } },
                            [
                              _c(
                                "StackLayout",
                                { attrs: { width: "100%", dock: "top" } },
                                [
                                  _c(
                                    "ScrollView",
                                    [
                                      _c(_vm.currentComp, {
                                        tag: "component",
                                        attrs: { translate: _vm.translate },
                                        on: { settingSaved: _vm.settingsDone }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _c(
                                "ScrollView",
                                [
                                  _c(
                                    "StackLayout",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.showmap,
                                          expression: "showmap"
                                        }
                                      ],
                                      ref: "mapContainer",
                                      attrs: {
                                        width: "100%",
                                        dock: "top",
                                        height: "100%"
                                      }
                                    },
                                    [
                                      _c("MapView", {
                                        ref: "map",
                                        attrs: {
                                          width: "100%",
                                          height: "100%",
                                          dock: "top",
                                          zoom: _vm.map.zoom,
                                          latitude: _vm.map.latitude,
                                          longitude: _vm.map.longitude,
                                          bearing: "180",
                                          tilt: "35"
                                        },
                                        on: { mapReady: _vm.MAP_mapReady }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm.featurePoints != null
                                ? _c(
                                    "StackLayout",
                                    {
                                      attrs: {
                                        dock: "top",
                                        height: "100%",
                                        width: "100%"
                                      }
                                    },
                                    [
                                      _c(
                                        "ScrollView",
                                        [
                                          _c(
                                            "ListView",
                                            {
                                              attrs: {
                                                height: "100%",
                                                separatorColor: "transparent",
                                                id: "listView",
                                                items: _vm.featurePoints,
                                                "+alias": "item"
                                              }
                                            },
                                            [
                                              _c("v-template", {
                                                scopedSlots: _vm._u([
                                                  {
                                                    key: "default",
                                                    fn: function(ref) {
                                                      var item = ref.item
                                                      var $index = ref.$index
                                                      var $even = ref.$even
                                                      var $odd = ref.$odd
                                                      return _c(
                                                        "StackLayout",
                                                        {
                                                          staticStyle: {
                                                            borderBottomWidth:
                                                              "1",
                                                            borderBottomColor:
                                                              "#E4E4E4"
                                                          },
                                                          attrs: {
                                                            orientation:
                                                              "horizontal",
                                                            padding: "10"
                                                          },
                                                          on: {
                                                            tap: function(
                                                              $event
                                                            ) {
                                                              _vm.playFeature(
                                                                item
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "StackLayout",
                                                            {
                                                              attrs: {
                                                                width: "20%"
                                                              }
                                                            },
                                                            [
                                                              _c("Image", {
                                                                staticClass:
                                                                  "conImg",
                                                                attrs: {
                                                                  src:
                                                                    item.img[0],
                                                                  stretch:
                                                                    "aspectFill"
                                                                }
                                                              })
                                                            ],
                                                            1
                                                          ),
                                                          _c(
                                                            "StackLayout",
                                                            {
                                                              attrs: {
                                                                marginLeft:
                                                                  "10",
                                                                paddingTop: "3",
                                                                width: "50%"
                                                              }
                                                            },
                                                            [
                                                              _c("Label", {
                                                                attrs: {
                                                                  text:
                                                                    item.title
                                                                }
                                                              }),
                                                              _c("Label", {
                                                                attrs: {
                                                                  text:
                                                                    item.distance
                                                                }
                                                              })
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    }
                                                  }
                                                ])
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          !_vm.hideWiki
            ? _c("Wikitude", {
                ref: "wiki",
                attrs: { url: "~/assets/wi/test.html" },
                on: {
                  ScreenCaptureFail: function($event) {
                    _vm.wikiError()
                  },
                  WorldLoadFail: function($event) {
                    _vm.wikiError()
                  },
                  JSONReceived: function($event) {
                    _vm.wikiJson()
                  },
                  WorldLoadSuccess: function($event) {
                    _vm.wikiLoaded($event)
                  }
                }
              })
            : _vm._e(),
          _vm.showPlayer != null
            ? _c(
                "AbsoluteLayout",
                {
                  attrs: { marginTop: "80%", marginLeft: "80%" },
                  on: {
                    tap: function($event) {
                      _vm.openDetail()
                    }
                  }
                },
                [
                  _c(
                    "StackLayout",
                    { staticClass: "fab-item" },
                    [
                      _c("Image", {
                        staticClass: "conImg",
                        attrs: {
                          src: _vm.showPlayer.img[0],
                          stretch: "aspectFill"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm.showPlayer != null
            ? _c("detail", { ref: "audio", attrs: { point: _vm.showPlayer } })
            : _vm._e(),
          _vm.showLoader ? _c("loader") : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/pages/About.vue?vue&type=template&id=89ed2312&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("HtmlView", {
    staticStyle: { padding: "10" },
    attrs: { html: _vm.code }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/pages/Detail.vue?vue&type=template&id=15baedd7&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AbsoluteLayout",
    [
      _c(
        "StackLayout",
        {
          ref: "main",
          staticClass: "dialog",
          attrs: { width: "100%", height: "100%", backgroundColor: "white" }
        },
        [
          _c(
            "ScrollView",
            { ref: "scrollView", on: { scroll: _vm.onScroll } },
            [
              _c(
                "StackLayout",
                [
                  _c(
                    "StackLayout",
                    {
                      ref: "topView",
                      staticStyle: {
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                      },
                      attrs: {
                        backgroundImage: _vm.point.img[0],
                        height: "250"
                      }
                    },
                    [
                      _c("Label", {
                        attrs: {
                          text: " x ",
                          color: "white",
                          textAlignment: "center",
                          fontSize: "30",
                          marginTop: "40"
                        },
                        on: {
                          tap: function($event) {
                            _vm.hide()
                          }
                        }
                      }),
                      _c("Label", {
                        attrs: {
                          text: _vm.point.title,
                          color: "white",
                          textAlignment: "center",
                          fontSize: "30",
                          marginTop: "40"
                        }
                      }),
                      _c("Progress", {
                        attrs: {
                          color: "#8C489F",
                          backgroundColor: "#FFFF66",
                          value: _vm.progress
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    {
                      attrs: {
                        width: "100%",
                        backgroundColor: "white",
                        padding: "10"
                      }
                    },
                    [
                      _c("Label", {
                        staticClass: "h2 description-label",
                        attrs: { textWrap: "true", text: _vm.point.title }
                      }),
                      _c("Label", {
                        staticClass: "p-10",
                        attrs: {
                          textWrap: "true",
                          text:
                            "Incididunt laboris et cupidatat irure qui ea id laboris cupidatat ullamco. Id ut est anim irure elit enim consectetur. Sit pariatur est velit non nisi fugiat officia id velit ex ad sunt quis.\n\nVeniam ullamco qui occaecat duis eiusmod voluptate dolor incididunt velit laborum excepteur velit. Duis ipsum adipisicing nostrud sit sit in consectetur ea velit eu aliqua duis. Do in occaecat consequat reprehenderit qui officia minim. Tempor laboris in deserunt dolore. Reprehenderit do laborum dolore mollit proident voluptate nostrud in labore. Irure ut minim culpa deserunt officia officia in dolor id et velit duis aute. Sit laboris amet adipisicing esse aliqua dolor excepteur reprehenderit amet magna ea elit exercitation.\n\nEnim dolore anim laborum incididunt ad Lorem amet. Ullamco do duis sunt deserunt Lorem exercitation deserunt. Ut id enim dolore sit id. Laboris nisi sit ex irure adipisicing ullamco incididunt commodo ad.\n\nEnim tempor esse nostrud cillum irure incididunt et id aliqua labore ullamco nostrud laboris. Officia culpa irure aliquip et. Sit consectetur voluptate cupidatat dolore. Fugiat adipisicing velit amet cillum minim excepteur enim sit anim officia nostrud reprehenderit occaecat cillum. Anim dolore incididunt occaecat in proident deserunt proident voluptate duis excepteur ullamco sunt.\n\nEu nulla officia eiusmod occaecat enim est ut. Commodo deserunt officia aute excepteur elit. Exercitation enim sint excepteur sunt veniam tempor. Dolor minim officia eu elit elit velit aliquip voluptate nulla ipsum et aliqua voluptate. Est exercitation minim proident minim incididunt reprehenderit id sunt exercitation. Consectetur non sunt Lorem et ad sunt aliqua cillum.\n\nIn irure magna proident adipisicing nisi fugiat et dolor ipsum laborum tempor. Consequat fugiat amet ullamco esse id culpa pariatur labore aute nisi sunt. Dolore nisi nostrud nostrud reprehenderit in magna nulla. Deserunt voluptate eu amet aute tempor labore adipisicing quis ea cupidatat. Aliquip reprehenderit non nisi magna excepteur eu fugiat eiusmod qui. Sunt qui ut laboris qui nulla et cillum reprehenderit esse officia. Adipisicing velit nulla et et nisi laboris ipsum.\n\nSit est cillum consectetur quis consectetur est et sunt veniam laborum sunt ipsum nostrud. Ea adipisicing amet qui mollit adipisicing esse ad ea. Sint ea ipsum Lorem aliqua exercitation quis et voluptate. Aliqua in reprehenderit pariatur aliqua non non consectetur eu exercitation quis et pariatur laborum. Proident adipisicing deserunt quis voluptate cillum non officia duis. Proident officia exercitation do elit do sint culpa. Laboris incididunt sunt voluptate consectetur aute dolore fugiat aliqua quis sint sunt non.\n\nEu adipisicing magna aliqua non proident ipsum id exercitation ex aute non. Labore ullamco reprehenderit irure consequat adipisicing minim deserunt laborum velit sint. Et ea ullamco exercitation ullamco Lorem proident minim incididunt dolore aute dolor voluptate labore et.\n\nNulla ipsum do ipsum do voluptate ut dolor veniam esse. Minim non do veniam duis cillum consequat. Ut amet aute ad elit ipsum amet pariatur excepteur officia fugiat qui reprehenderit voluptate eiusmod. Quis excepteur duis eiusmod deserunt proident id labore ex consequat occaecat mollit nisi."
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/pages/Loader.vue?vue&type=template&id=65305499&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AbsoluteLayout",
    [
      _c(
        "StackLayout",
        {
          staticClass: "dialog",
          attrs: { width: "100%", height: "100%", backgroundColor: "white" }
        },
        [
          _c("ActivityIndicator", {
            attrs: { busy: "true", width: "80%", height: "80%" }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/pages/Settings.vue?vue&type=template&id=5c0b95ae&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "StackLayout",
    {
      attrs: {
        width: "100%",
        horizontalAlignment: "center",
        verticalAlignment: "top"
      }
    },
    [
      _c("Label", { attrs: { text: _vm.translate.labels.city } }),
      _c("ListPicker", {
        attrs: {
          items: _vm.cities,
          textField: "title",
          valueField: "id",
          selectedIndex: _vm.indexCity
        },
        on: {
          selectedIndexChange: [
            function($event) {
              _vm.indexCity = $event.value
            },
            _vm.changeLang
          ]
        }
      }),
      _c("Label", { attrs: { text: _vm.translate.labels.lang } }),
      _c("ListPicker", {
        attrs: {
          items: _vm.lang,
          textField: "title",
          valueField: "id",
          selectedIndex: _vm.indexLang
        },
        on: {
          selectedIndexChange: [
            function($event) {
              _vm.indexLang = $event.value
            },
            _vm.changeLang
          ]
        }
      }),
      _c("Button", {
        staticClass: "btn btn-primary",
        attrs: { text: "lsit xxaasaass" },
        on: { tap: _vm.onButtonTap }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$";

/***/ }),

/***/ "./components/Master.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Master_vue_vue_type_template_id_2b32067d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Master.vue?vue&type=template&id=2b32067d&");
/* harmony import */ var _Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Master.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Master_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Master.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Master_vue_vue_type_template_id_2b32067d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Master_vue_vue_type_template_id_2b32067d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Master.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Master.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/index.js?!./components/Master.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Master.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Master.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Master.vue?vue&type=template&id=2b32067d&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_template_id_2b32067d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Master.vue?vue&type=template&id=2b32067d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_template_id_2b32067d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_template_id_2b32067d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Singleton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Singleton", function() { return Singleton; });
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-audio/audio.js");
/* harmony import */ var nativescript_audio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_audio__WEBPACK_IMPORTED_MODULE_1__);


const appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");

const Singleton = {

  vueinst : null,
  points: null,
  _featurePoints: null,

  get featurePoints() {
    return this._featurePoints;
  },
  set featurePoints(value) {
    this._featurePoints = value;

    if (this.vueinst) {
      this.vueinst.featurePoints = this._featurePoints;
    }
    
    this.savePoints();
  },
  /**
   * oe  ?  beebep stop loop :)
   */
  beebeepDone: [],
  progress: 0,
  isPlaying: false,

  player: null,

  _current: null,
  get current() {
    return this._current;
  },

  set current(value) {
    
    this._current = null;  
    
    
    this.points.find(x => x.id == value.id).active = false;
    this.savePoints();


    this._current = value;

    if (this.vueinst) {
      this.vueinst.showPlayer = this._current;
    }
   
  },

  printData() {
    if (this.points == null) {
      return;
    }
    console.log(
      "active true -----------------------> " +
        this.points.filter(x => x.active == true).length
    );
    console.log(
      "active false ----------------------------------------------> " +
        this.points.filter(x => x.active == false).length
    );
  },
  savePoints() {
    appSettings.setString("points", JSON.stringify(this.points));
  },
  /**
   * play new song > ? why setup -> coz
   */
  setup() {
    try {
      this.player.audioFile = null;

    } catch (e) {
      
    }
    this.player = null;
    this.player = new nativescript_audio__WEBPACK_IMPORTED_MODULE_1__["TNSPlayer"]();

    const playerOptions = {
      audioFile: this.current.mp3,
      loop: false,
      completeCallback: function() {}
    };
  
    this.player
      .playFromUrl(playerOptions)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("something went wrong...", err);
      });

    this._checkInterval = setInterval(() => {
      if (!this.player) return;

      this.player.getAudioTrackDuration().then(duration => {
        // iOS: duration is in seconds
        // Android: duration is in milliseconds
        let current = this.player.currentTime;
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__["isIOS"]) {
          duration *= 1000;
          current *= 1000;
        }

        this.progress = Math.ceil((current / duration) * 100);
        this.isPlaying = this.player.isAudioPlaying();
      });
    }, 200);
  },
  play() {
    this.player.play();
  },
  clear() {
    try {
      clearInterval(this._checkInterval);
    } catch (e) {
      console.log(e.message);
    }
    try {
      this.player.pause();
      this.player.audioFile == null ;
    } catch (e) {
      console.log(e.message);
    }
    this._current = null;
    this.player = null;
    this.savePoints();
  },
  playPause() {
    if (this.player.isAudioPlaying()) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }
};


/***/ }),

/***/ "./components/Sorting.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sorting", function() { return Sorting; });
/* harmony import */ var _Singleton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Singleton.js");
/* harmony import */ var _locationSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/locationSettings.js");
/* harmony import */ var _beep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/beep.js");
/* harmony import */ var nativescript_local_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-local-notifications/local-notifications.js");
/* harmony import */ var nativescript_local_notifications__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_local_notifications__WEBPACK_IMPORTED_MODULE_3__);





const Sorting = {
  prevLocation: {
    lat: null,
    lng: null
  },
  /**
   *
   * @param {number} currentLat
   * @param {number} currentLng
   */
  sortPoints(currentLat, currentLng) {
   
    console.log(currentLat, currentLng);
    if (
      this.prevLocation.lat != null &&
      this.distanceInKmBetweenEarthCoordinates(
        this.prevLocation.lat,
        this.prevLocation.lng,
        currentLat,
        currentLng
      ) < _locationSettings_js__WEBPACK_IMPORTED_MODULE_1__["locationSettings"].samePlaceInKm
    ) {
      console.log("not moved :( ");
      return;
    }

    if (_Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].vueinst) {
      _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].vueinst.MAP_setCurrentLocation(currentLat, currentLng);
    }

    if (_Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points == null) {
      alert("Please load  points");
      return;
    }

    //  only active
    let points = _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].points.filter(x => x.active == true);
    if (!points) {
      console.log("points all done ");
      return;
    }

    for (let ind in points) {
      points[ind].distance = this.getDistanceFromLatLonInKm(
        currentLat,
        currentLng,
        points[ind].lat,
        points[ind].lng
      );
      console.log(
        points[ind].active +
          " - " +
          points[ind].distance +
          " km " +
          points[ind].title
      );
    }

    let clear = points
      .filter(
        x =>
          x.distance < _locationSettings_js__WEBPACK_IMPORTED_MODULE_1__["locationSettings"].featurePointDistanceKm &&
          x.active == true
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

    for (let a in clear) {
      console.log(`${a}->${clear[a].title} in ${clear[a].distance}`);
    }
   

    if (clear.length > 0) {
      if (clear[0].distance < _locationSettings_js__WEBPACK_IMPORTED_MODULE_1__["locationSettings"].pointCanPlaceDistanceKm) {
        _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].printData();
        if (_Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].player != null) {
          if (
            _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].isPlaying &&
            !_Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].beebeepDone.includes(_Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].current.id)
          ) {
            _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].player.pause();
            this.showNotify(clear[0])
            _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].beebeepDone.push(_Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].current.id);
            // Singleton.player.resume();
            Object(_beep__WEBPACK_IMPORTED_MODULE_2__["beep"])();
            setTimeout(e => {
              try {
                _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].player.resume();
              } catch (e) {}
            }, 2000);
          } else if (
            !_Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].isPlaying && // is not played && stoped 
             _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].progress == 100
          ) {
            _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].current = clear[0];
            _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].setup();
          }
        } else {
          _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].current = clear[0];
          _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].setup();
        }
      }
    }

    _Singleton_js__WEBPACK_IMPORTED_MODULE_0__["Singleton"].featurePoints = clear.length > 0 ? clear : null;

    //   this.prevLocation.lat = currentLat;
    //   this.prevLocation.lng = currentLng;
  },


  showNotify(point) {
    nativescript_local_notifications__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"].schedule([{
      id: Number.parseInt( point.id),
      title: point.title   ,
      body: point.distance,
      ticker: point.title,
      color: "red",
      badge: 1,
      groupSummary:point.title, //android only
      ongoing: true, // makes the notification ongoing (Android only)
      icon: 'res://heart',
      image: point.image,
      thumbnail: true,
      forceShowWhenInForeground:true,
      interval: 'minute',
      channel: 'My Channel', // default: 'Channel'
      sound: "customsound-ios.wav", // falls back to the default sound on Android
      at: new Date(new Date().getTime() + ( 500)) // 10 seconds from now
    }]).then(
        function() {
          // Singleton.vueinst.openModal(point)
        },
        function(error) {
          console.log("scheduling error: " + error);
        }
    )
  },


  /**
   *
   * @param {number} lat1
   * @param {number} lon1
   * @param {number} lat2
   * @param {number} lon2
   */
  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  },

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
};


/***/ }),

/***/ "./components/api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCall", function() { return apiCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "address", function() { return address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "langList", function() { return langList; });
const apiAddress = "https://audio.tricypolitain.com/api/";
function apiCall(arg ,data={}) {

  let postData = Object.entries(data).map(([key, val]) => `${key}=${val}`).join('&');
  return fetch(apiAddress + arg, {
    method: "POST",
    body: postData,
      headers:  { "Content-Type": "application/x-www-form-urlencoded" }
  });
}
const address = apiAddress;

function langList() {
  return [
    { id: "lv", title: "latvian" },
    { id: "ru", title: "russian" },
    { id: "fr", title: "frechn" },
    { id: "en", title: "english" }  ];
}


/***/ }),

/***/ "./components/backgroundServices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/ui/enums/enums.js");
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-toast/toast.js");
/* harmony import */ var nativescript_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Sorting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/Sorting.js");
/* harmony import */ var _locationSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/locationSettings.js");







const appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");


if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__["android"]) {
  const { sdkVersion } = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_3__["device"];
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
          nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["clearWatch"](this.id);
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
  nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["enableLocationRequest"]().then(
    function() {
      comp.id = nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["watchLocation"](
        function(loc) {
          if (loc) {
            // we thinka bout later
            // let toast = Toast.makeText(loc.latitude + "  " + loc.longitude);
            let toast = nativescript_toast__WEBPACK_IMPORTED_MODULE_4__["makeText"](appSettings.getString("cityTitle"));
            toast.setDuration(1000);
            toast.show();
                
        
            _Sorting__WEBPACK_IMPORTED_MODULE_5__["Sorting"].sortPoints(loc.latitude, loc.longitude);
   
            // fetch("https://audio.tricypolitain.com/ping?text=newtest" + counter)
            //   .then(e => {})
            //   .catch(e => {});
          }
        },
        function(e) {
          console.log("Background watchLocation error: " + (e.message || e));
        },
        {
          desiredAccuracy: tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_1__["Accuracy"].high,
          updateDistance: _locationSettings__WEBPACK_IMPORTED_MODULE_6__["locationSettings"].updateDistanceInMetters,
          updateTime: _locationSettings__WEBPACK_IMPORTED_MODULE_6__["locationSettings"].updateTime,
          minimumUpdateTime: _locationSettings__WEBPACK_IMPORTED_MODULE_6__["locationSettings"].minimumUpdateTime
        }
      );
    },  
    function(e) {
      console.log("Background enableLocationRequest error: " + (e.message || e));
    }
  );
}  

/***/ }),

/***/ "./components/beep.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beep", function() { return beep; });
const audio = __webpack_require__("../node_modules/nativescript-audioplay/audio.js");

function beep() {
  const sound =
    "https://notificationsounds.com/soundfiles/1728efbda81692282ba642aafd57be3a/file-sounds-1101-plucky.mp3";

  let player = new audio.TNSPlayer();
  let playerOptions = {
    audioFile: sound,
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
}


/***/ }),

/***/ "./components/locationSettings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationSettings", function() { return locationSettings; });
const locationSettings = {
  minimumUpdateTime: 5000,//  5 sec
  updateTime: 10000, //  5 sec
  updateDistanceInMetters: 0.1,
  samePlaceInKm: 0.001, // 10 me
  pointCanPlaceDistanceKm: 0.04, // 50 metter
  featurePointDistanceKm: 0.6,
  maximumAge: 50000, 
  color: {
    user: "blue",
    visited: "green", 
    active :"red"
  }
};
  

/***/ }),

/***/ "./components/pages/About.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_89ed2312___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/pages/About.vue?vue&type=template&id=89ed2312&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/pages/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _About_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/pages/About.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_89ed2312___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_89ed2312___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/pages/About.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/pages/About.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/index.js?!./components/pages/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/pages/About.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/pages/About.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/pages/About.vue?vue&type=template&id=89ed2312&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_89ed2312___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/pages/About.vue?vue&type=template&id=89ed2312&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_89ed2312___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_89ed2312___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/pages/Detail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_vue_vue_type_template_id_15baedd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/pages/Detail.vue?vue&type=template&id=15baedd7&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/pages/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_15baedd7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_vue_vue_type_template_id_15baedd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/pages/Detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/pages/Detail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/index.js?!./components/pages/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/pages/Detail.vue?vue&type=template&id=15baedd7&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_15baedd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/pages/Detail.vue?vue&type=template&id=15baedd7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_15baedd7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_15baedd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/pages/Loader.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader_vue_vue_type_template_id_65305499___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/pages/Loader.vue?vue&type=template&id=65305499&");
/* harmony import */ var _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/pages/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Loader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/pages/Loader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loader_vue_vue_type_template_id_65305499___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loader_vue_vue_type_template_id_65305499___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/pages/Loader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/pages/Loader.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/index.js?!./components/pages/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/pages/Loader.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/pages/Loader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/pages/Loader.vue?vue&type=template&id=65305499&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_65305499___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/pages/Loader.vue?vue&type=template&id=65305499&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_65305499___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_65305499___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/pages/Settings.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_5c0b95ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/pages/Settings.vue?vue&type=template&id=5c0b95ae&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/pages/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/pages/Settings.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_5c0b95ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_5c0b95ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/pages/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/pages/Settings.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/index.js?!./components/pages/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/pages/Settings.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/pages/Settings.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/pages/Settings.vue?vue&type=template&id=5c0b95ae&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_5c0b95ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/pages/Settings.vue?vue&type=template&id=5c0b95ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_5c0b95ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_5c0b95ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Master__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Master.vue");
/* harmony import */ var nativescript_wikitude__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-wikitude/wikitude.js");
/* harmony import */ var nativescript_wikitude__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_wikitude__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-camera/camera.js");
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_camera__WEBPACK_IMPORTED_MODULE_4__);

        if (!global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            const context = __webpack_require__("./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$");
            global.registerWebpackModules(context);
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        






nativescript_camera__WEBPACK_IMPORTED_MODULE_4__["requestPermissions"]();
// import { Wikitude } from 'nativescript-wikitude';
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement(
  "RadSideDrawer",
  () => __webpack_require__("../node_modules/nativescript-ui-sidedrawer/ui-sidedrawer.js").RadSideDrawer
);
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement(
  "MapView",
  () => __webpack_require__("../node_modules/nativescript-google-maps-sdk/map-view.js").MapView
);  
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement(
  "Wikitude",
  () =>nativescript_wikitude__WEBPACK_IMPORTED_MODULE_2__["Wikitude"]
);    
      

// Prints Vue logs when --env.production is *NOT* set while building
// Vue.config.silent = (TNS_ENV === 'production');
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.silent = true;
// Vue.config.silent = true;

new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h("frame", [h(_components_Master__WEBPACK_IMPORTED_MODULE_1__["default"])])
}).$start();


    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc"},"main":"main","name":"geolocation","version":"1.0.0"};

/***/ }),

/***/ "./styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./translate.json":
/***/ (function(module) {

module.exports = {"en":{"menu":{"settings":"settings","map":"view map","about":"about"},"labels":{"lang":"Choose lang","city":"Choose city"},"global":{"title":"Audio Guide","desc":"Guide for nice "}},"lv":{"menu":{"settings":"lv settings","map":"lv view map","about":"lv about"},"labels":{"lang":"lv Choose lang","city":"lv Choose city"},"global":{"title":"Audio Guide","desc":"Guide for nice "}},"ru":{"menu":{"settings":"nastroiki","map":"vie map","about":"about"},"labels":{"lang":"ru Choose lang","city":"ru Choose city"},"global":{"title":"Audio Guide","desc":"Guide for nice "}},"fr":{"menu":{"settings":"la settings","map":"le map","about":"la about"},"labels":{"lang":"fr Choose lang","city":"fr Choose city"},"global":{"title":"Audio Guide","desc":"Guide for nice "}}};

/***/ })

/******/ });
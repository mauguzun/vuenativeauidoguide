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

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Master.vue?vue&type=style&index=0&id=2b32067d&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../node_modules/vue-loader/lib/index.js?!./components/Master.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/enums/enums.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ui_enums__WEBPACK_IMPORTED_MODULE_3__);
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

const appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");







const utils = __webpack_require__("../node_modules/tns-core-modules/utils/utils.js");

let locationService = __webpack_require__("./components/backgroundServices.js");

var comp;

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
   tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["denis"] = this;
    console.log("mounted");

    this.counter = appSettings.getNumber("cou", 0);
    setInterval(e => {
      this.counter = appSettings.getNumber("cou", 0);
    }, 10000);
  },

  data() {
    return {
      model: {
        locations: []
      },
      counter: appSettings.getNumber("cou", 0),
      watchId: null,
      BGids: []
    };
  },
  methods: {


    
    startBackgroundTap,
    stopBackgroundTap,
    enableLocationTap,
    buttonGetLocationTap,
    buttonStartTap,
    buttonStopTap,
    buttonClearTap,
  }
});





function startBackgroundTap() {
  if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["android"]) {
    const { sdkVersion } = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__["device"];
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
  if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["android"]) {
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

function buttonGetLocationTap() {
  const comp = this;
  nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["isEnabled"]().then(isEnabled => {
    if (isEnabled) {
      let location = nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["getCurrentLocation"]({
          desiredAccuracy: ui_enums__WEBPACK_IMPORTED_MODULE_3__["Accuracy"].high,
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
    nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["isEnabled"]().then(isEnabled => {
      if (isEnabled) {
        comp.watchId = nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["watchLocation"](
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
            desiredAccuracy: ui_enums__WEBPACK_IMPORTED_MODULE_3__["Accuracy"].high,
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
    nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["clearWatch"](this.watchId);
    this.watchId = null;
  }
}

function buttonClearTap() {
  this.model.locations.splice(0, this.model.locations.length);
}


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Master.vue?vue&type=template&id=2b32067d&scoped=true&":
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
        "GridLayout",
        { attrs: { rows: "auto, auto, auto, *, auto" } },
        [
          _c(
            "GridLayout",
            { attrs: { row: "0", columns: "*, *, *, *" } },
            [
              _c("Button", {
                attrs: { text: _vm.counter, col: "0", textWrap: "true" },
                on: { tap: _vm.enableLocationTap }
              }),
              _c("Button", {
                attrs: {
                  text: "Get Current Location",
                  col: "1",
                  textWrap: "true"
                },
                on: { tap: _vm.buttonGetLocationTap }
              }),
              _c("Button", {
                attrs: { text: "Start Monitoring", col: "2", textWrap: "true" },
                on: { tap: _vm.buttonStartTap }
              }),
              _c("Button", {
                attrs: { text: "Stop Monitoring", col: "3", textWrap: "true" },
                on: { tap: _vm.buttonStopTap }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            { attrs: { row: "1", columns: "*, *" } },
            [
              _c("Button", {
                attrs: {
                  text: "Start Background thread monitoring",
                  col: "0",
                  "ios:visibility": "collapsed",
                  textWrap: "true"
                },
                on: { tap: _vm.startBackgroundTap }
              }),
              _c("Button", {
                attrs: {
                  text: "Stop Background thread monitoring",
                  col: "1",
                  "ios:visibility": "collapsed",
                  textWrap: "true"
                },
                on: { tap: _vm.stopBackgroundTap }
              })
            ],
            1
          ),
          _c("Label", { attrs: { row: "2", text: _vm.watchId } }),
          _c(
            "ListView",
            {
              attrs: { row: "3", items: _vm.model.locations, "+alias": "loc" }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var loc = ref.loc
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c("Label", {
                        attrs: {
                          text:
                            $index +
                            ", " +
                            loc.latitude +
                            ", " +
                            loc.longitude +
                            ", " +
                            loc.altitude
                        }
                      })
                    }
                  }
                ])
              })
            ],
            1
          ),
          _c("Button", {
            attrs: { text: "Clear", row: "4" },
            on: { tap: _vm.buttonClearTap }
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
/* harmony import */ var _Master_vue_vue_type_template_id_2b32067d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Master.vue?vue&type=template&id=2b32067d&scoped=true&");
/* harmony import */ var _Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Master.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Master_vue_vue_type_style_index_0_id_2b32067d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Master.vue?vue&type=style&index=0&id=2b32067d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Master_vue_vue_type_template_id_2b32067d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Master_vue_vue_type_template_id_2b32067d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2b32067d",
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

/***/ "./components/Master.vue?vue&type=style&index=0&id=2b32067d&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_id_2b32067d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Master.vue?vue&type=style&index=0&id=2b32067d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_id_2b32067d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_id_2b32067d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_id_2b32067d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_id_2b32067d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_id_2b32067d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Master.vue?vue&type=template&id=2b32067d&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_template_id_2b32067d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Master.vue?vue&type=template&id=2b32067d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_template_id_2b32067d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_template_id_2b32067d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _beep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/beep.js");







const appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
const audioplayer = __webpack_require__("../node_modules/nativescript-audioplay/audio.js");

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
            let toast = nativescript_toast__WEBPACK_IMPORTED_MODULE_4__["makeText"](counter + " counter ");
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
          desiredAccuracy: tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_1__["Accuracy"].high,
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
      Object(_beep__WEBPACK_IMPORTED_MODULE_5__["beep"])();
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


/***/ }),

/***/ "./components/beep.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beep", function() { return beep; });
const audio = __webpack_require__("../node_modules/nativescript-audioplay/audio.js");

function beep() {
  const sound =
    "https://notificationsounds.com/soundfiles/4e4b5fbbbb602b6d35bea8460aa8f8e5/file-sounds-1096-light.mp3";

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

/***/ "./main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Master__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Master.vue");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);

        if (!global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            const context = __webpack_require__("./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$");
            global.registerWebpackModules(context);
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        





  
  
// Prints Vue logs when --env.production is *NOT* set while building
// Vue.config.silent = (TNS_ENV === 'production');
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.silent = true;



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

/***/ })

/******/ });
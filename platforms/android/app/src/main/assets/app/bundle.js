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

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/pages/About.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/pages/PageMap.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/pages/Settings.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../node_modules/moment/locale/af.js",
	"./af.js": "../node_modules/moment/locale/af.js",
	"./ar": "../node_modules/moment/locale/ar.js",
	"./ar-dz": "../node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../node_modules/moment/locale/ar.js",
	"./az": "../node_modules/moment/locale/az.js",
	"./az.js": "../node_modules/moment/locale/az.js",
	"./be": "../node_modules/moment/locale/be.js",
	"./be.js": "../node_modules/moment/locale/be.js",
	"./bg": "../node_modules/moment/locale/bg.js",
	"./bg.js": "../node_modules/moment/locale/bg.js",
	"./bm": "../node_modules/moment/locale/bm.js",
	"./bm.js": "../node_modules/moment/locale/bm.js",
	"./bn": "../node_modules/moment/locale/bn.js",
	"./bn.js": "../node_modules/moment/locale/bn.js",
	"./bo": "../node_modules/moment/locale/bo.js",
	"./bo.js": "../node_modules/moment/locale/bo.js",
	"./br": "../node_modules/moment/locale/br.js",
	"./br.js": "../node_modules/moment/locale/br.js",
	"./bs": "../node_modules/moment/locale/bs.js",
	"./bs.js": "../node_modules/moment/locale/bs.js",
	"./ca": "../node_modules/moment/locale/ca.js",
	"./ca.js": "../node_modules/moment/locale/ca.js",
	"./cs": "../node_modules/moment/locale/cs.js",
	"./cs.js": "../node_modules/moment/locale/cs.js",
	"./cv": "../node_modules/moment/locale/cv.js",
	"./cv.js": "../node_modules/moment/locale/cv.js",
	"./cy": "../node_modules/moment/locale/cy.js",
	"./cy.js": "../node_modules/moment/locale/cy.js",
	"./da": "../node_modules/moment/locale/da.js",
	"./da.js": "../node_modules/moment/locale/da.js",
	"./de": "../node_modules/moment/locale/de.js",
	"./de-at": "../node_modules/moment/locale/de-at.js",
	"./de-at.js": "../node_modules/moment/locale/de-at.js",
	"./de-ch": "../node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../node_modules/moment/locale/de-ch.js",
	"./de.js": "../node_modules/moment/locale/de.js",
	"./dv": "../node_modules/moment/locale/dv.js",
	"./dv.js": "../node_modules/moment/locale/dv.js",
	"./el": "../node_modules/moment/locale/el.js",
	"./el.js": "../node_modules/moment/locale/el.js",
	"./en-au": "../node_modules/moment/locale/en-au.js",
	"./en-au.js": "../node_modules/moment/locale/en-au.js",
	"./en-ca": "../node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../node_modules/moment/locale/en-ca.js",
	"./en-gb": "../node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../node_modules/moment/locale/en-gb.js",
	"./en-ie": "../node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../node_modules/moment/locale/en-ie.js",
	"./en-il": "../node_modules/moment/locale/en-il.js",
	"./en-il.js": "../node_modules/moment/locale/en-il.js",
	"./en-nz": "../node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../node_modules/moment/locale/en-nz.js",
	"./eo": "../node_modules/moment/locale/eo.js",
	"./eo.js": "../node_modules/moment/locale/eo.js",
	"./es": "../node_modules/moment/locale/es.js",
	"./es-do": "../node_modules/moment/locale/es-do.js",
	"./es-do.js": "../node_modules/moment/locale/es-do.js",
	"./es-us": "../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../node_modules/moment/locale/es-us.js",
	"./es.js": "../node_modules/moment/locale/es.js",
	"./et": "../node_modules/moment/locale/et.js",
	"./et.js": "../node_modules/moment/locale/et.js",
	"./eu": "../node_modules/moment/locale/eu.js",
	"./eu.js": "../node_modules/moment/locale/eu.js",
	"./fa": "../node_modules/moment/locale/fa.js",
	"./fa.js": "../node_modules/moment/locale/fa.js",
	"./fi": "../node_modules/moment/locale/fi.js",
	"./fi.js": "../node_modules/moment/locale/fi.js",
	"./fo": "../node_modules/moment/locale/fo.js",
	"./fo.js": "../node_modules/moment/locale/fo.js",
	"./fr": "../node_modules/moment/locale/fr.js",
	"./fr-ca": "../node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../node_modules/moment/locale/fr.js",
	"./fy": "../node_modules/moment/locale/fy.js",
	"./fy.js": "../node_modules/moment/locale/fy.js",
	"./gd": "../node_modules/moment/locale/gd.js",
	"./gd.js": "../node_modules/moment/locale/gd.js",
	"./gl": "../node_modules/moment/locale/gl.js",
	"./gl.js": "../node_modules/moment/locale/gl.js",
	"./gom-latn": "../node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../node_modules/moment/locale/gom-latn.js",
	"./gu": "../node_modules/moment/locale/gu.js",
	"./gu.js": "../node_modules/moment/locale/gu.js",
	"./he": "../node_modules/moment/locale/he.js",
	"./he.js": "../node_modules/moment/locale/he.js",
	"./hi": "../node_modules/moment/locale/hi.js",
	"./hi.js": "../node_modules/moment/locale/hi.js",
	"./hr": "../node_modules/moment/locale/hr.js",
	"./hr.js": "../node_modules/moment/locale/hr.js",
	"./hu": "../node_modules/moment/locale/hu.js",
	"./hu.js": "../node_modules/moment/locale/hu.js",
	"./hy-am": "../node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../node_modules/moment/locale/hy-am.js",
	"./id": "../node_modules/moment/locale/id.js",
	"./id.js": "../node_modules/moment/locale/id.js",
	"./is": "../node_modules/moment/locale/is.js",
	"./is.js": "../node_modules/moment/locale/is.js",
	"./it": "../node_modules/moment/locale/it.js",
	"./it.js": "../node_modules/moment/locale/it.js",
	"./ja": "../node_modules/moment/locale/ja.js",
	"./ja.js": "../node_modules/moment/locale/ja.js",
	"./jv": "../node_modules/moment/locale/jv.js",
	"./jv.js": "../node_modules/moment/locale/jv.js",
	"./ka": "../node_modules/moment/locale/ka.js",
	"./ka.js": "../node_modules/moment/locale/ka.js",
	"./kk": "../node_modules/moment/locale/kk.js",
	"./kk.js": "../node_modules/moment/locale/kk.js",
	"./km": "../node_modules/moment/locale/km.js",
	"./km.js": "../node_modules/moment/locale/km.js",
	"./kn": "../node_modules/moment/locale/kn.js",
	"./kn.js": "../node_modules/moment/locale/kn.js",
	"./ko": "../node_modules/moment/locale/ko.js",
	"./ko.js": "../node_modules/moment/locale/ko.js",
	"./ky": "../node_modules/moment/locale/ky.js",
	"./ky.js": "../node_modules/moment/locale/ky.js",
	"./lb": "../node_modules/moment/locale/lb.js",
	"./lb.js": "../node_modules/moment/locale/lb.js",
	"./lo": "../node_modules/moment/locale/lo.js",
	"./lo.js": "../node_modules/moment/locale/lo.js",
	"./lt": "../node_modules/moment/locale/lt.js",
	"./lt.js": "../node_modules/moment/locale/lt.js",
	"./lv": "../node_modules/moment/locale/lv.js",
	"./lv.js": "../node_modules/moment/locale/lv.js",
	"./me": "../node_modules/moment/locale/me.js",
	"./me.js": "../node_modules/moment/locale/me.js",
	"./mi": "../node_modules/moment/locale/mi.js",
	"./mi.js": "../node_modules/moment/locale/mi.js",
	"./mk": "../node_modules/moment/locale/mk.js",
	"./mk.js": "../node_modules/moment/locale/mk.js",
	"./ml": "../node_modules/moment/locale/ml.js",
	"./ml.js": "../node_modules/moment/locale/ml.js",
	"./mn": "../node_modules/moment/locale/mn.js",
	"./mn.js": "../node_modules/moment/locale/mn.js",
	"./mr": "../node_modules/moment/locale/mr.js",
	"./mr.js": "../node_modules/moment/locale/mr.js",
	"./ms": "../node_modules/moment/locale/ms.js",
	"./ms-my": "../node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../node_modules/moment/locale/ms-my.js",
	"./ms.js": "../node_modules/moment/locale/ms.js",
	"./mt": "../node_modules/moment/locale/mt.js",
	"./mt.js": "../node_modules/moment/locale/mt.js",
	"./my": "../node_modules/moment/locale/my.js",
	"./my.js": "../node_modules/moment/locale/my.js",
	"./nb": "../node_modules/moment/locale/nb.js",
	"./nb.js": "../node_modules/moment/locale/nb.js",
	"./ne": "../node_modules/moment/locale/ne.js",
	"./ne.js": "../node_modules/moment/locale/ne.js",
	"./nl": "../node_modules/moment/locale/nl.js",
	"./nl-be": "../node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../node_modules/moment/locale/nl-be.js",
	"./nl.js": "../node_modules/moment/locale/nl.js",
	"./nn": "../node_modules/moment/locale/nn.js",
	"./nn.js": "../node_modules/moment/locale/nn.js",
	"./pa-in": "../node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../node_modules/moment/locale/pa-in.js",
	"./pl": "../node_modules/moment/locale/pl.js",
	"./pl.js": "../node_modules/moment/locale/pl.js",
	"./pt": "../node_modules/moment/locale/pt.js",
	"./pt-br": "../node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../node_modules/moment/locale/pt-br.js",
	"./pt.js": "../node_modules/moment/locale/pt.js",
	"./ro": "../node_modules/moment/locale/ro.js",
	"./ro.js": "../node_modules/moment/locale/ro.js",
	"./ru": "../node_modules/moment/locale/ru.js",
	"./ru.js": "../node_modules/moment/locale/ru.js",
	"./sd": "../node_modules/moment/locale/sd.js",
	"./sd.js": "../node_modules/moment/locale/sd.js",
	"./se": "../node_modules/moment/locale/se.js",
	"./se.js": "../node_modules/moment/locale/se.js",
	"./si": "../node_modules/moment/locale/si.js",
	"./si.js": "../node_modules/moment/locale/si.js",
	"./sk": "../node_modules/moment/locale/sk.js",
	"./sk.js": "../node_modules/moment/locale/sk.js",
	"./sl": "../node_modules/moment/locale/sl.js",
	"./sl.js": "../node_modules/moment/locale/sl.js",
	"./sq": "../node_modules/moment/locale/sq.js",
	"./sq.js": "../node_modules/moment/locale/sq.js",
	"./sr": "../node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../node_modules/moment/locale/sr.js",
	"./ss": "../node_modules/moment/locale/ss.js",
	"./ss.js": "../node_modules/moment/locale/ss.js",
	"./sv": "../node_modules/moment/locale/sv.js",
	"./sv.js": "../node_modules/moment/locale/sv.js",
	"./sw": "../node_modules/moment/locale/sw.js",
	"./sw.js": "../node_modules/moment/locale/sw.js",
	"./ta": "../node_modules/moment/locale/ta.js",
	"./ta.js": "../node_modules/moment/locale/ta.js",
	"./te": "../node_modules/moment/locale/te.js",
	"./te.js": "../node_modules/moment/locale/te.js",
	"./tet": "../node_modules/moment/locale/tet.js",
	"./tet.js": "../node_modules/moment/locale/tet.js",
	"./tg": "../node_modules/moment/locale/tg.js",
	"./tg.js": "../node_modules/moment/locale/tg.js",
	"./th": "../node_modules/moment/locale/th.js",
	"./th.js": "../node_modules/moment/locale/th.js",
	"./tl-ph": "../node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../node_modules/moment/locale/tl-ph.js",
	"./tlh": "../node_modules/moment/locale/tlh.js",
	"./tlh.js": "../node_modules/moment/locale/tlh.js",
	"./tr": "../node_modules/moment/locale/tr.js",
	"./tr.js": "../node_modules/moment/locale/tr.js",
	"./tzl": "../node_modules/moment/locale/tzl.js",
	"./tzl.js": "../node_modules/moment/locale/tzl.js",
	"./tzm": "../node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../node_modules/moment/locale/tzm.js",
	"./ug-cn": "../node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../node_modules/moment/locale/ug-cn.js",
	"./uk": "../node_modules/moment/locale/uk.js",
	"./uk.js": "../node_modules/moment/locale/uk.js",
	"./ur": "../node_modules/moment/locale/ur.js",
	"./ur.js": "../node_modules/moment/locale/ur.js",
	"./uz": "../node_modules/moment/locale/uz.js",
	"./uz-latn": "../node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../node_modules/moment/locale/uz.js",
	"./vi": "../node_modules/moment/locale/vi.js",
	"./vi.js": "../node_modules/moment/locale/vi.js",
	"./x-pseudo": "../node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../node_modules/moment/locale/x-pseudo.js",
	"./yo": "../node_modules/moment/locale/yo.js",
	"./yo.js": "../node_modules/moment/locale/yo.js",
	"./zh-cn": "../node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../node_modules/vue-loader/lib/index.js?!./components/Master.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/enums/enums.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ui_enums__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/pages/Settings.vue");
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/pages/About.vue");
/* harmony import */ var _pages_PageMap_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/pages/PageMap.vue");
/* harmony import */ var _pages_Player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./components/pages/Player.vue");
/* harmony import */ var tns_core_modules_ui_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/tns-core-modules/ui/image/image.js");
/* harmony import */ var tns_core_modules_ui_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _beep_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./components/beep.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./components/api.js");
/* harmony import */ var tns_core_modules_application_settings_application_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings_application_settings__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings_application_settings__WEBPACK_IMPORTED_MODULE_11__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    settings: _pages_Settings__WEBPACK_IMPORTED_MODULE_4__["default"],
    about: _pages_About__WEBPACK_IMPORTED_MODULE_5__["default"],
    audioplayer: _pages_Player__WEBPACK_IMPORTED_MODULE_7__["default"]
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
      Object(_api_js__WEBPACK_IMPORTED_MODULE_10__["apiCall"])("points", {
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
      Object(_beep_js__WEBPACK_IMPORTED_MODULE_9__["beep"])();
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
});
///////

function startBackgroundTap() {
  if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3__["android"]) {
    const { sdkVersion } = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__["device"];
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
  if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3__["android"]) {
    const { sdkVersion } = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__["device"];
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
  nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["isEnabled"]().then(
    function(isEnabled) {
      console.log(isEnabled);
      if (!isEnabled) {
        nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["enableLocationRequest"]().then(
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
  nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["isEnabled"]().then(isEnabled => {
    if (isEnabled) {
      let location = nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["getCurrentLocation"]({
          desiredAccuracy: ui_enums__WEBPACK_IMPORTED_MODULE_2__["Accuracy"].high,
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
    nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["isEnabled"]().then(isEnabled => {
      if (isEnabled) {
        comp.watchId = nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["watchLocation"](
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
            desiredAccuracy: ui_enums__WEBPACK_IMPORTED_MODULE_2__["Accuracy"].high,
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
    nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["clearWatch"](this.watchId);
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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

});


/***/ }),

/***/ "../node_modules/vue-loader/lib/index.js?!./components/pages/PageMap.vue?vue&type=script&lang=js&":
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
//
//
//
//
//
//
//
//
//

let mapsModule = __webpack_require__("../node_modules/nativescript-google-maps-sdk/map-view.js");
//import { MapViewBase } from 'nativescript-google-maps-sdk/map-view-common';

/* harmony default export */ __webpack_exports__["default"] = ({
  //  props: ["points"],
  watch: {
    points(value) {
      this.points = value;
      this.drawPoints();
    }
  },
  mounted() {},
  data() {
    return {
      longitude: 7.1827772,
      latitude: 43.7031691,
      zoom: 17,
      points: null,
      currenLocation: null,
      map: null
    };
  },

  methods: {
    mapReady(args) {
      this.map = args.object;
      mapsModule.myMap = args.object;

      //   this.pointsMarkers.push(marker);
      this.map.latitude = 43.7031691;
      this.map.longitude = 7.1827772;
      this.markerSetPoints();
    },

    markerSetPoints() {
      for (var x = 0; this.points[x]; x++) {
        let marker = new mapsModule.Marker();
        marker.position = new mapsModule.Position.positionFromLatLng(
          this.points[x].lat,
          this.points[x].lng
        );
        // marker.icon = 'sadf';
        marker.title = this.points[x].title;
        marker.userData = { id: this.points[x].id };
        this.map.addMarker(marker);
        this.map.latitude = this.points[x].lat;
        this.map.longitude = this.points[x].lng;
      }
    },

    setCurrentLocation(lat, lng) {
      if (this.currenLocation == null) {
        this.currenLocation = new mapsModule.Marker();
        this.currenLocation.position = new mapsModule.Position.positionFromLatLng(
          lat,
          lng
        );
        this.currenLocation.title = "You are here";

        mapsModule.myMap.addMarker(this.currenLocation);
      } else {
        this.currenLocation.position = new mapsModule.Position.positionFromLatLng(
          lat,
          lng
        );
      }
      this.map.latitude = lat;
      this.map.longitude = lng;
      alert("map");
    }
  }
});


/***/ }),

/***/ "../node_modules/vue-loader/lib/index.js?!./components/pages/Player.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-audio/audio.js");
/* harmony import */ var nativescript_audio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_audio__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
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
    setup() {
      this._player = null;
      this._player = new nativescript_audio__WEBPACK_IMPORTED_MODULE_1__["TNSPlayer"]();

      const playerOptions = {
        audioFile: this.point.mp3,
        loop: false,
        completeCallback: function() {}
      };

      this._player
        .playFromUrl(playerOptions)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log("something went wrong...", err);
        });

      this._checkInterval = setInterval(() => {
        this._player.getAudioTrackDuration().then(duration => {
          // iOS: duration is in seconds
          // Android: duration is in milliseconds
          let current = this._player.currentTime;
          if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__["isIOS"]) {
            duration *= 1000;
            current *= 1000;
          }

          this.progress = Math.ceil((current / duration) * 100);

          this.isPlaying = this._player.isAudioPlaying();
        });
      }, 200);
    },
    playPause() {
      if (this._player.isAudioPlaying()) {
        this._player.pause();
      } else {
        this._player.play();
      }
    },
    play() {
      try {
        this._player.play();
      } catch (e) {}
    },
    stop() {
      try {
        this._player.pause();
      } catch (e) {}
    }
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
      this.$emit("settingSaved", { city: this.sendCity, lang: this.sendLang });
    },
    changeLang(args) {
      this.sendCity = this.cities[this.indexCity].id;
      this.sendLang = this.lang[this.indexLang].id;
    }
  }
});


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
                    attrs: {
                      text: _vm.drawerToggle ? _vm.drawer2 : _vm.drawer1
                    }
                  })
                ],
                1
              ),
              _c("StackLayout", { staticClass: "HMid" }),
              _c(
                "StackLayout",
                { staticClass: "HRight" },
                [
                  _c("Label", {
                    staticStyle: { fontSize: "27", color: "#333" },
                    attrs: { text: _vm.play ? "⏸" : "▶" },
                    on: { tap: _vm.playStop }
                  })
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
                      text: "" + _vm.translate.menu.settings,
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
                      text: "" + _vm.translate.menu.about,
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
                      text: "" + _vm.translate.menu.map,
                      paddingLeft: "30%",
                      color: "black",
                      margin: "10"
                    },
                    on: {
                      tap: function($event) {
                        _vm.go("map")
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
                          _vm.current != null
                            ? _c("audioplayer", {
                                ref: "audio",
                                attrs: { point: _vm.current }
                              })
                            : _vm._e(),
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
                              attrs: {
                                width: "100%",
                                dock: "top",
                                height: "85%"
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
                      _vm.feturePoints != null
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
                                      key: _vm.index,
                                      attrs: {
                                        height: "100%",
                                        separatorColor: "transparent",
                                        id: "listView",
                                        items: _vm.feturePoints,
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
                                                    borderBottomWidth: "1",
                                                    borderBottomColor: "#E4E4E4"
                                                  },
                                                  attrs: {
                                                    orientation: "horizontal",
                                                    padding: "10"
                                                  },
                                                  on: {
                                                    tap: function($event) {
                                                      _vm.playFeature(item)
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "StackLayout",
                                                    { attrs: { width: "20%" } },
                                                    [
                                                      _c("Image", {
                                                        staticClass: "conImg",
                                                        attrs: {
                                                          src: item.img,
                                                          stretch: "aspectFill"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _c(
                                                    "StackLayout",
                                                    {
                                                      attrs: {
                                                        marginLeft: "10",
                                                        paddingTop: "3",
                                                        width: "50%"
                                                      }
                                                    },
                                                    [
                                                      _c("Label", {
                                                        attrs: {
                                                          text: item.title
                                                        }
                                                      }),
                                                      _c("Label", {
                                                        attrs: {
                                                          text: item.text
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
  return _c("HtmlView", { attrs: { html: "<div><h1>HtmlView</h1></div>" } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/pages/PageMap.vue?vue&type=template&id=0ace0ab7&":
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
    { attrs: { horizontalAlignment: "center", verticalAlignment: "top" } },
    [
      _c("MapView", {
        ref: "map",
        attrs: {
          width: "100%",
          height: "70%",
          dock: "top",
          zoom: _vm.zoom,
          latitude: _vm.latitude,
          longitude: _vm.longitude,
          bearing: "180",
          tilt: "35"
        },
        on: { mapReady: _vm.mapReady }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/pages/Player.vue?vue&type=template&id=5f28af32&":
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
      _c(
        "StackLayout",
        [
          _c(
            "StackLayout",
            {
              attrs: { orientation: "horizontal", padding: "1" },
              on: { tap: _vm.playPause }
            },
            [
              _c("Image", {
                staticClass: "postImageSmall",
                attrs: { src: _vm.point.img, stretch: "aspectFill" }
              }),
              _c(
                "StackLayout",
                [
                  _c("Label", {
                    staticClass: "postDateSmall",
                    attrs: { text: _vm.point.title }
                  }),
                  _c("Progress", {
                    staticClass: "postDateSmall",
                    attrs: { value: _vm.progress }
                  }),
                  _c("Label", {
                    staticClass: "postDateSmall",
                    attrs: { text: _vm.isPlaying ? "⏸" : "▶" }
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);







if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__["android"]) {
  const { sdkVersion } = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_3__["device"];
  if (sdkVersion * 1 < 26) {
    android.app.Service.extend("com.ciriscr.geotest.location.BackgroundService", {
      onStartCommand: function (intent, flags, startId) {
          this.super.onStartCommand(intent, flags, startId);
          return android.app.Service.START_STICKY;
      },
      onCreate: function () {
          watchLocation(this);
      },
      onBind: function (intent) {
          console.log("on Bind Services");
      },
      onUnbind: function (intent) {
          console.log('UnBind Service');
      },
      onDestroy: function () {
          console.log('service onDestroy');
          nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["clearWatch"](this.id);
      }
    });
  } else {
    android.app.job.JobService.extend("com.ciriscr.geotest.location.BackgroundService26", {
      onStartJob(params) {
        console.log("Starting job...");
        watchLocation(this);
        this.jobFinished(params, true);
        return false;
      },

      onStopJob() {
        console.log("Stopping job ...");
        return true;
      },
    });
  }

}

function watchLocation(comp) {
  console.log("Watch location");
  nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["enableLocationRequest"]().then(function () {
      comp.id = nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["watchLocation"](
          function (loc) {
              if (loc) {
                  let toast = nativescript_toast__WEBPACK_IMPORTED_MODULE_4__["makeText"]('Background Location: ' + loc.latitude + ' ' + loc.longitude);
                  toast.show();
                  console.log('Background Location: ' + loc.latitude + ' ' + loc.longitude);
                  console.log(moment__WEBPACK_IMPORTED_MODULE_5___default()().format());
              }
          },
          function (e) {
              console.log("Background watchLocation error: " + (e.message || e));
          },
          {
              desiredAccuracy: tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_1__["Accuracy"].high,
              updateDistance: 0.1,
              updateTime: 3000,
              minimumUpdateTime: 100
          });
  }, function (e) {
      console.log("Background enableLocationRequest error: " + (e.message || e));
  });
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

/***/ "./components/pages/PageMap.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageMap_vue_vue_type_template_id_0ace0ab7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/pages/PageMap.vue?vue&type=template&id=0ace0ab7&");
/* harmony import */ var _PageMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/pages/PageMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PageMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/pages/PageMap.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PageMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageMap_vue_vue_type_template_id_0ace0ab7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageMap_vue_vue_type_template_id_0ace0ab7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/pages/PageMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/pages/PageMap.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_PageMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/index.js?!./components/pages/PageMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_PageMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/pages/PageMap.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PageMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/pages/PageMap.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PageMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PageMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PageMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PageMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PageMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/pages/PageMap.vue?vue&type=template&id=0ace0ab7&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageMap_vue_vue_type_template_id_0ace0ab7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/pages/PageMap.vue?vue&type=template&id=0ace0ab7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageMap_vue_vue_type_template_id_0ace0ab7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageMap_vue_vue_type_template_id_0ace0ab7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/pages/Player.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player_vue_vue_type_template_id_5f28af32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/pages/Player.vue?vue&type=template&id=5f28af32&");
/* harmony import */ var _Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/pages/Player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Player_vue_vue_type_template_id_5f28af32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Player_vue_vue_type_template_id_5f28af32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/pages/Player.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/pages/Player.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/index.js?!./components/pages/Player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/pages/Player.vue?vue&type=template&id=5f28af32&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_5f28af32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/pages/Player.vue?vue&type=template&id=5f28af32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_5f28af32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_5f28af32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
        



nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement(
  "RadSideDrawer",
  () => __webpack_require__("../node_modules/nativescript-ui-sidedrawer/ui-sidedrawer.js").RadSideDrawer
);
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement(
  "MapView",
  () => __webpack_require__("../node_modules/nativescript-google-maps-sdk/map-view.js").MapView
);  
  
    
  
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

/***/ }),

/***/ "./translate.json":
/***/ (function(module) {

module.exports = {"en":{"menu":{"settings":"settings","map":"view map","about":"about"},"labels":{"lang":"Choose lang","city":"Choose city"}},"lv":{"menu":{"settings":"lv settings","map":"lv view map","about":"lv about"},"labels":{"lang":"lv Choose lang","city":"lv Choose city"}},"ru":{"menu":{"settings":"nastroiki","map":"vie map","about":"about"},"labels":{"lang":"ru Choose lang","city":"ru Choose city"}},"fr":{"menu":{"settings":"la settings","map":"le map","about":"la about"},"labels":{"lang":"fr Choose lang","city":"fr Choose city"}}};

/***/ })

/******/ });
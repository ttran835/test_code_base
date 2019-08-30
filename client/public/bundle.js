/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/data/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/data/scripts.js":
/*!************************************!*\
  !*** ./client/src/data/scripts.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* \n    Need to fsreadJSON data \n    Once data is done, build the html divs with JavaScript \n    Get the server working first, then once this is done, focus \n    on styling and make sure that everything is responsive\n    and function correctly. \n  */\n\nvar _this = this;\n\nvar FakeDataToRender = function FakeDataToRender() {\n  _this.storage = [{\n    header: 'Fit Guide',\n    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas congue quisque egestas diam. Risus feugiat in ante metus dictum at tempor. Ut lectus arcu bibendum at varius vel pharetra vel. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Sit amet tellus cras adipiscing enim eu turpis egestas. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Vel quam elementum pulvinar etiam non quam. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Nulla at volutpat diam ut venenatis tellus. Felis eget velit aliquet sagittis id consectetur purus ut. Egestas diam in arcu cursus euismod. Duis at consectetur lorem donec. Malesuada bibendum arcu vitae elementum curabitur vitae. Lectus sit amet est placerat in egestas erat imperdiet.'\n  }, {\n    header: 'Care',\n    description: 'Aenean vel felis eu ipsum pharetra finibus. Proin accumsan eleifend dui, in convallis mauris varius sed. Nam luctus justo ut placerat efficitur. Morbi aliquet, lacus a dictum luctus, neque neque fermentum risus, rhoncus accumsan ex sapien ut nisi. Aenean sit amet mattis turpis. Nullam diam erat, sagittis sed laoreet sed, porta a nulla. Mauris luctus aliquet est, sit amet maximus dolor tincidunt vitae. Vestibulum porttitor maximus arcu, et bibendum urna semper id. Integer id sagittis urna. Curabitur nisl sapien, pharetra placerat quam a, tempus dignissim dui. Nunc fermentum dui nec ex blandit, vitae lacinia ante laoreet.'\n  }, {\n    header: 'Material',\n    type: [{\n      Cashmere: '50%',\n      Wool: '46%',\n      Modal: '4%'\n    }],\n    description: 'Aenean vel felis eu ipsum pharetra finibus. Proin accumsan eleifend dui, in convallis mauris varius sed. Nam luctus justo ut placerat efficitur. Morbi aliquet, lacus a dictum luctus, neque neque fermentum risus, rhoncus accumsan ex sapien ut nisi. Aenean sit amet mattis turpis. Nullam diam erat, sagittis sed laoreet sed, porta a nulla. Mauris luctus aliquet est, sit amet maximus dolor tincidunt vitae. Vestibulum porttitor maximus arcu, et bibendum urna semper id. Integer id sagittis urna. Curabitur nisl sapien, pharetra placerat quam a, tempus dignissim dui. Nunc fermentum dui nec ex blandit, vitae lacinia ante laoreet.'\n  }];\n};\n\nFakeDataToRender.prototype.getData = function () {\n  return _this.storage;\n};\n\nvar data = new FakeDataToRender();\nvar fakeData = data.getData();\nconsole.log({\n  fakeData: fakeData\n});\n\n//# sourceURL=webpack:///./client/src/data/scripts.js?");

/***/ })

/******/ });
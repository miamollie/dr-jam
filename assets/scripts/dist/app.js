/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var toggleMenuDeSelect = function toggleMenuDeSelect() {
	  var siblings = document.querySelectorAll("#menu *");
	  siblings.forEach(function (s) {
	    s.classList.remove("selected");
	  });
	};

	var toggleResumeItem = function toggleResumeItem(event) {
	  var resumeItems = document.querySelectorAll("[data-resume-item]");
	  var targetId = event.target.id;
	  resumeItems.forEach(function (r) {
	    if (r.dataset.resumeItem === targetId) {
	      show(r);
	    } else {
	      hide(r);
	    }
	  });
	};

	var toggle = function toggle(event) {

	  toggleMenuDeSelect();

	  toggleResumeItem(event);

	  event.target.classList.add("selected");
	};

	var show = function show(el) {
	  el.classList.remove("hide");
	  el.classList.add("flex");
	};

	var hide = function hide(el) {
	  el.classList.add("hide");
	  el.classList.remove("flex");
	};

	var hideAll = function hideAll() {
	  toggleMenuDeSelect();
	  var resumeItems = document.querySelectorAll("[data-resume-item]");
	  resumeItems.forEach(function (item) {
	    hide(item);
	  });
	};

	var setUpMenu = function setUpMenu() {
	  var menuItems = document.querySelectorAll("#menu button");
	  menuItems.forEach(function (menuItem) {
	    menuItem.addEventListener("click", toggle);
	  });

	  var title = document.querySelector("#menu h1");
	  title.addEventListener("click", hideAll);
	};

	document.addEventListener('DOMContentLoaded', function () {
	  setUpMenu();
	});

	// spinner until loaded
	//and then remove that class and let the menu softly fade
	// and animate in from the right

/***/ }
/******/ ]);
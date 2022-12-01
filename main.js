/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/section_bg2.jpg */ "./src/images/section_bg2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/section_bg4.jpg */ "./src/images/section_bg4.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/section_bg1.jpg */ "./src/images/section_bg1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/section_bg5.jpg */ "./src/images/section_bg5.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/section_bg.jpg */ "./src/images/section_bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans&family=Vollkorn&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.hide {\n  display: none;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  background: rgba(250, 250, 250, 0.9);\n  backdrop-filter: blur(5px);\n  width: 100%;\n  height: 100vh;\n  padding: 20px;\n  z-index: 99;\n  visibility: hidden;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  nav {\n    visibility: visible;\n    height: 50px;\n  }\n}\n@media (min-width: 901px) {\n  nav {\n    visibility: visible;\n    height: 50px;\n  }\n}\nnav ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 50px;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  nav ul {\n    flex-direction: row;\n  }\n}\n@media (min-width: 901px) {\n  nav ul {\n    flex-direction: row;\n    gap: 100px;\n  }\n}\nnav ul li {\n  list-style: none;\n  font-size: 1.4rem;\n  font-weight: 600;\n}\nnav ul li:hover {\n  color: rgb(253, 102, 2);\n  cursor: pointer;\n}\n\ni.fa-bars, i.fa-times {\n  position: absolute;\n  top: 3%;\n  right: 6%;\n  font-size: 2rem;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  i.fa-bars, i.fa-times {\n    display: none;\n  }\n}\n@media (min-width: 901px) {\n  i.fa-bars, i.fa-times {\n    display: none;\n  }\n}\n\ni.fa-times {\n  font-size: 1.8rem;\n  color: rgb(253, 102, 2);\n  z-index: 99;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  i.fa-times {\n    display: none;\n  }\n}\n@media (min-width: 901px) {\n  i.fa-times {\n    display: none;\n  }\n}\n\n#content {\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  overflow-y: auto;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  #content {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    background-position: right;\n  }\n}\n@media (min-width: 901px) {\n  #content {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: bottom;\n  }\n}\n\nsection#home-page {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: left;\n  height: 100%;\n  padding: 25px;\n}\n@media (min-width: 901px) {\n  section#home-page {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n}\nsection#home-page h1 {\n  position: absolute;\n  top: 20%;\n  font-size: 2.8rem;\n  color: #f47830;\n  text-shadow: 5px 0 5px #fff;\n  font-family: \"Vollkorn\", serif;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  section#home-page h1 {\n    font-size: 4rem;\n  }\n}\n@media (min-width: 901px) {\n  section#home-page h1 {\n    font-size: 6rem;\n  }\n}\nsection#home-page p#welcome {\n  position: absolute;\n  top: 30%;\n  font-size: 1.2rem;\n  font-style: italic;\n  width: 90%;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  section#home-page p#welcome {\n    font-size: 1.6rem;\n  }\n}\n@media (min-width: 901px) {\n  section#home-page p#welcome {\n    font-size: 2rem;\n    width: 45%;\n    top: 35%;\n  }\n}\n\nsection#menu-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 100px 0;\n}\nsection#menu-section h2 {\n  font-size: 2.2rem;\n  font-family: \"Vollkorn\", serif;\n  font-weight: normal;\n}\nsection#menu-section #selection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 50px;\n}\nsection#menu-section #selection select {\n  background-color: white;\n  border: thin solid rgb(253, 102, 2);\n  border-radius: 4px;\n  display: inline-block;\n  font: inherit;\n  line-height: 1.5em;\n  padding: 0.5em 3.5em 0.5em 1em;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: linear-gradient(45deg, transparent 50%, #fff 50%), linear-gradient(135deg, #fff 50%, transparent 50%), linear-gradient(to right, rgb(253, 102, 2), rgb(253, 102, 2));\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), 100% 0;\n  background-size: 5px 5px, 5px 5px, 2.5em 2.5em;\n  background-repeat: no-repeat;\n}\nsection#menu-section #selection select:focus {\n  background-image: linear-gradient(45deg, white 50%, transparent 50%), linear-gradient(135deg, transparent 50%, white 50%), linear-gradient(to right, gray, gray);\n  background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, 100% 0;\n  background-size: 5px 5px, 5px 5px, 2.5em 2.5em;\n  background-repeat: no-repeat;\n  border-color: grey;\n  outline: 0;\n}\nsection#menu-section #menu-items {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 25px;\n  margin-top: 50px;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  section#menu-section #menu-items {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 901px) {\n  section#menu-section #menu-items {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    position: absolute;\n    right: 1%;\n    top: 25%;\n  }\n}\nsection#menu-section #menu-items .meals {\n  width: 280px;\n  height: 280px;\n  position: relative;\n  border-radius: 20px;\n}\nsection#menu-section #menu-items .meals .blur-div {\n  visibility: hidden;\n}\nsection#menu-section #menu-items .meals .meal-name {\n  visibility: hidden;\n  font-size: 1.8rem;\n}\nsection#menu-section #menu-items .meals .rating {\n  visibility: hidden;\n}\nsection#menu-section #menu-items .meals:hover .meal-name {\n  visibility: visible;\n  position: absolute;\n  z-index: 99;\n  top: 10%;\n  width: 100%;\n  padding: 0 3px;\n  text-align: center;\n}\nsection#menu-section #menu-items .meals:hover .rating {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row-reverse;\n  visibility: visible;\n  width: 100%;\n  margin: 0 auto 1em;\n  font-size: 35px;\n  overflow: hidden;\n  float: right;\n  position: absolute;\n  top: 50%;\n  z-index: 99;\n}\nsection#menu-section #menu-items .meals:hover .rating a[href*=intent] {\n  display: inline-block;\n  margin-top: 0.4em;\n}\nsection#menu-section #menu-items .meals:hover .rating a {\n  float: right;\n  color: #fff;\n  text-decoration: none;\n  -webkit-transition: color 0.4s;\n  -moz-transition: color 0.4s;\n  -o-transition: color 0.4s;\n  transition: color 0.4s;\n}\nsection#menu-section #menu-items .meals:hover .rating a:hover,\nsection#menu-section #menu-items .meals:hover .rating a:focus,\nsection#menu-section #menu-items .meals:hover .rating a:hover ~ a,\nsection#menu-section #menu-items .meals:hover .rating a:focus ~ a {\n  color: rgb(253, 236, 0);\n  cursor: pointer;\n}\nsection#menu-section #menu-items .meals:hover .blur-div {\n  visibility: visible;\n  position: absolute;\n  top: 0;\n  background: rgba(175, 168, 157, 0.8);\n  height: 100%;\n  width: 100%;\n  border-radius: 20px;\n}\n\nsection#contact-page {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 80px;\n  padding: 100px 0 50px 0;\n}\nsection#contact-page h2 {\n  font-family: \"Vollkorn\", serif;\n  font-size: 2.2rem;\n  font-weight: normal;\n}\n@media (min-width: 901px) {\n  section#contact-page h2 {\n    font-size: 3rem;\n    margin-bottom: 20px;\n  }\n}\nsection#contact-page ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\nsection#contact-page li {\n  list-style: none;\n  margin-bottom: 20px;\n  font-size: 1.2rem;\n}\n@media (min-width: 901px) {\n  section#contact-page li {\n    font-size: 1.5rem;\n  }\n}\nsection#contact-page li span {\n  color: rgb(253, 102, 2);\n  font-weight: 700;\n  text-decoration: underline;\n}\nsection#contact-page div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\nsection#contact-page input {\n  padding: 10px;\n  border-radius: 20px;\n  border: none;\n  outline: thin solid rgb(253, 102, 2);\n  margin: 30px 0;\n  width: 70%;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  section#contact-page input {\n    width: 50%;\n  }\n}\n@media (min-width: 901px) {\n  section#contact-page input {\n    width: 20%;\n    font-size: 1.2rem;\n  }\n}\nsection#contact-page button {\n  border: none;\n  background: rgb(253, 102, 2);\n  padding: 10px;\n  border-radius: 5px;\n  color: #fff;\n  font-weight: 700;\n}\n@media (min-width: 901px) {\n  section#contact-page button {\n    font-size: 1.2rem;\n  }\n}\nsection#contact-page button:hover {\n  cursor: pointer;\n  background: rgb(230, 184, 146);\n  outline: none;\n}\nsection#contact-page footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border-top: thin solid rgb(133, 132, 132);\n  width: 100%;\n  padding-top: 15px;\n}\nsection#contact-page #slogan h2 {\n  color: rgb(253, 102, 2);\n  font-size: 2.6rem;\n}\n@media (min-width: 901px) {\n  section#contact-page #slogan h2 {\n    font-size: 3.5rem;\n  }\n}\nsection#contact-page #slogan p {\n  font-style: italic;\n}\n@media (min-width: 901px) {\n  section#contact-page #slogan p {\n    font-size: 1.5rem;\n    margin-bottom: 100px;\n  }\n}\nsection#contact-page ul#social-icons {\n  flex-direction: row;\n  justify-content: space-between;\n  width: 50%;\n  padding-top: 20px;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  section#contact-page ul#social-icons {\n    width: 30%;\n  }\n}\n@media (min-width: 901px) {\n  section#contact-page ul#social-icons {\n    width: 20%;\n  }\n}\nsection#contact-page ul#social-icons li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  border: thin solid rgb(253, 102, 2);\n  width: 40px;\n  height: 40px;\n}\nsection#contact-page ul#social-icons li i {\n  color: rgb(253, 102, 2);\n}\nsection#contact-page ul#social-icons li i:hover {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/_base.scss","webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Vollkorn&display=swap');\n\n$base_color1: rgb(253, 102, 2);\n$font1: 'Open Sans', sans-serif;\n$font2: 'Vollkorn', serif;\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: $font1;\n}\n\n@mixin center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin media-md {\n  @media (min-width: 600px) and (max-width: 900px) {\n    @content;\n  }\n}\n\n@mixin media-lg {\n  @media (min-width: 901px) {\n    @content;\n  }\n}\n\n@mixin section-bg {\n  background: url('../images/section_bg2.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n\n  @include media-md {\n    background: url('../images/section_bg4.jpg');\n    background-size: cover;\n    background-position: right;\n    \n  }\n}\n","@import 'base';\n\n.hide {\n  display: none;\n}\n\nnav {\n  @include center;\n\n  position: absolute;\n  background: rgba(250, 250, 250, 0.9);\n  backdrop-filter: blur(5px);\n  width: 100%;\n  height: 100vh;\n  padding: 20px;\n  z-index: 99;\n  visibility: hidden;\n\n  @include media-md {\n    visibility: visible;\n    height: 50px;\n  }\n\n  @include media-lg {\n    visibility: visible;\n    height: 50px;\n  }\n\n  ul {\n    @include center;\n\n    flex-direction: column;\n    gap: 50px;\n\n    @include media-md {\n      flex-direction: row;\n    }\n\n    @include media-lg {\n      flex-direction: row;\n      gap: 100px;\n    }\n\n    li {\n      list-style: none;\n      font-size: 1.4rem;\n      font-weight: 600;\n\n      &:hover {\n        color: $base_color1;\n        cursor: pointer;\n      }\n    }\n  }\n}\n\ni.fa-bars {\n  position: absolute;\n  top: 3%;\n  right: 6%;\n  font-size: 2rem;\n\n  @include media-md {\n    display: none;\n  }\n\n  @include media-lg {\n    display: none;\n  }\n}\n\ni.fa-times {\n  @extend .fa-bars;\n\n  font-size: 1.8rem;\n  color: $base_color1;\n  z-index: 99;\n\n  @include media-md {\n    display: none;\n  }\n\n  @include media-lg {\n    display: none;\n  }\n}\n\n#content {\n  height: 100vh;\n\n  @include section-bg;\n \n  overflow-y: auto;\n\n  @include media-lg {\n    background: url('../images/section_bg1.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: bottom;\n  }\n}\n\nsection#home-page {\n  background: url('../images/section_bg5.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: left;\n  height: 100%;\n  padding: 25px;\n\n  @include media-lg {\n    background: url('../images/section_bg.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n\n  h1 {\n    position: absolute;\n    top: 20%;\n    font-size: 2.8rem;\n    color: #f47830;\n    text-shadow: 5px 0 5px #fff;\n    font-family: $font2;\n\n    @include media-md {\n      font-size: 4rem;\n    }\n\n    @include media-lg {\n      font-size: 6rem;\n    }\n  }\n\n  p#welcome {\n    position: absolute;\n    top: 30%;\n    font-size: 1.2rem;\n    font-style: italic;\n    width: 90%;\n\n    @include media-md {\n      font-size: 1.6rem;\n    }\n\n    @include media-lg {\n      font-size: 2rem;\n      width: 45%;\n      top: 35%;\n    }\n  }\n}\n\nsection#menu-section {\n  @include center;\n\n  flex-direction: column;\n  padding: 100px 0;\n\n  h2 {\n    font-size: 2.2rem;\n    font-family: $font2;\n    font-weight: normal;\n  }\n\n  #selection {\n    @include center;\n\n    flex-direction: column;\n    margin-top: 50px;\n\n    select {\n      background-color: white;\n      border: thin solid $base_color1;\n      border-radius: 4px;\n      display: inline-block;\n      font: inherit;\n      line-height: 1.5em;\n      padding: 0.5em 3.5em 0.5em 1em;\n      -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      background-image:\n        linear-gradient(45deg, transparent 50%, #fff 50%),\n        linear-gradient(135deg, #fff 50%, transparent 50%),\n        linear-gradient(to right, $base_color1, $base_color1);\n      background-position:\n        calc(100% - 20px) calc(1em + 2px),\n        calc(100% - 15px) calc(1em + 2px),\n        100% 0;\n      background-size:\n        5px 5px,\n        5px 5px,\n        2.5em 2.5em;\n      background-repeat: no-repeat;\n    }\n\n    select:focus {\n      background-image:\n        linear-gradient(45deg, white 50%, transparent 50%),\n        linear-gradient(135deg, transparent 50%, white 50%),\n        linear-gradient(to right, gray, gray);\n      background-position:\n        calc(100% - 15px) 1em,\n        calc(100% - 20px) 1em,\n        100% 0;\n      background-size:\n        5px 5px,\n        5px 5px,\n        2.5em 2.5em;\n      background-repeat: no-repeat;\n      border-color: grey;\n      outline: 0;\n    }\n  }\n\n  #menu-items {\n    @include center;\n\n    flex-direction: column;\n    gap: 25px;\n    margin-top: 50px;\n\n    @include media-md {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    @include media-lg {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      position: absolute;\n      right: 1%;\n      top: 25%;\n    }\n\n    .meals {\n      width: 280px;\n      height: 280px;\n      position: relative;\n      border-radius: 20px;\n\n      .blur-div {\n        visibility: hidden;\n      }\n\n      .meal-name {\n        visibility: hidden;\n        font-size: 1.8rem;\n      }\n\n      .rating {\n        visibility: hidden;\n      }\n\n      &:hover {\n        .meal-name {\n          visibility: visible;\n          position: absolute;\n          z-index: 99;\n          top: 10%;\n          width: 100%;\n          padding: 0 3px;\n          text-align: center;\n        }\n\n        .rating {\n          @include center;\n\n          flex-direction: row-reverse;\n          visibility: visible;\n          width: 100%;\n          margin: 0 auto 1em;\n          font-size: 35px;\n          overflow: hidden;\n          float: right;\n          position: absolute;\n          top: 50%;\n          z-index: 99;\n\n          a[href*=\"intent\"] {\n            display: inline-block;\n            margin-top: 0.4em;\n          }\n\n          a {\n            float: right;\n            color: #fff;\n            text-decoration: none;\n            -webkit-transition: color 0.4s;\n            -moz-transition: color 0.4s;\n            -o-transition: color 0.4s;\n            transition: color 0.4s;\n          }\n\n          a:hover,\n          a:focus,\n          a:hover ~ a,\n          a:focus ~ a {\n            color: rgb(253, 236, 0);\n            cursor: pointer;\n          }\n        }\n\n        .blur-div {\n          visibility: visible;\n          position: absolute;\n          top: 0;\n          background: rgba(175, 168, 157, 0.8);\n          height: 100%;\n          width: 100%;\n          border-radius: 20px;\n        }\n      }\n    }\n  }\n}\n\nsection#contact-page {\n  @include center;\n\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 80px;\n  padding: 100px 0 50px 0;\n\n  h2 {\n    font-family: $font2;\n    font-size: 2.2rem;\n    font-weight: normal;\n\n    @include media-lg {\n      font-size: 3rem;\n      margin-bottom: 20px;\n    }\n  }\n\n  ul {\n    @include center;\n\n    flex-direction: column;\n  }\n\n  li {\n    list-style: none;\n    margin-bottom: 20px;\n    font-size: 1.2rem;\n\n    @include media-lg {\n      font-size: 1.5rem;\n    }\n\n    span {\n      color: $base_color1;\n      font-weight: 700;\n      text-decoration: underline;\n    }\n  }\n\n  div {\n    @include center;\n\n    flex-direction: column;\n    width: 100%;\n  }\n\n  input {\n    padding: 10px;\n    border-radius: 20px;\n    border: none;\n    outline: thin solid $base_color1;\n    margin: 30px 0;\n    width: 70%;\n\n    @include media-md {\n      width: 50%;\n    }\n\n    @include media-lg {\n      width: 20%;\n      font-size: 1.2rem;\n    }\n  }\n\n  button {\n    border: none;\n    background: $base_color1;\n    padding: 10px;\n    border-radius: 5px;\n    color: #fff;\n    font-weight: 700;\n\n    @include media-lg {\n      font-size: 1.2rem;\n    }\n\n    &:hover {\n      cursor: pointer;\n      background: rgb(230, 184, 146);\n      outline: none;\n    }\n  }\n\n  footer {\n    @include center;\n\n    flex-direction: column;\n    border-top: thin solid rgb(133, 132, 132);\n    width: 100%;\n    padding-top: 15px;\n  }\n\n  #slogan {\n    h2 {\n      color: $base_color1;\n      font-size: 2.6rem;\n\n      @include media-lg {\n        font-size: 3.5rem;\n      }\n    }\n\n    p {\n      font-style: italic;\n\n      @include media-lg {\n        font-size: 1.5rem;\n        margin-bottom: 100px;\n      }\n    }\n  }\n\n  ul#social-icons {\n    flex-direction: row;\n    justify-content: space-between;\n    width: 50%;\n    padding-top: 20px;\n\n    @include media-md {\n      width: 30%;\n    }\n\n    @include media-lg {\n      width: 20%;\n    }\n\n    li {\n      @include center;\n\n      border-radius: 50%;\n      border: thin solid $base_color1;\n      width: 40px;\n      height: 40px;\n\n      i {\n        color: $base_color1;\n\n        &:hover {\n          cursor: pointer;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createContactPage = () => {
  const contactPage = document.createElement('section');
  contactPage.setAttribute('id', 'contact-page');
  contactPage.innerHTML = `<div id="slogan"><h2>Fresh Cuisine</h2>
  <p>Fresh food. Fresh ideas.</p></div>
  <div id="opening-hours">
    <h2>Open Hours</h2>
    <ul>
      <li>Mon-Fri: 9 AM - 6 PM</li>
      <li>Saturday: 9 AM - 4 PM</li>
      <li>Sunday: 9 AM - 2 PM</li>
    </ul>
  </div>
  <div id="contact-us">
    <h2>Contact Us</h2>
    <ul>
      <li>123 Sample street, New York, 10014</li>
      <li>Email: <span>sample@example.com</span></li>
      <li>Telephone: <span>+1(500)123-456</span></li>
    </ul>
  </div>
  <div id="subscribe">
    <h2>Subscribe</h2>
    <h2>Newsletter</h2>
    <input type="email" placeholder="Email">
    <button id="submit">Subscribe</button>
  </div>
  <footer>
    <p>2022 <i class="fa fa-copyright"></i> Fresh Cuisine | Powered by Fresh Life</p>
    <ul id="social-icons">
      <li><i class="fa fa-facebook"></i></li>
      <li><i class="fa fa-twitter"></i></li>
      <li><i class="fa fa-linkedin"></i></li>
      <li><i class="fa fa-instagram"></i></li>
    </ul>
  </footer>
  `;
  document.getElementById('content').appendChild(contactPage);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);


/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createHomePage = () => {
  const homePage = document.createElement('section');
  homePage.setAttribute('id', 'home-page');
  homePage.innerHTML = `<h1>Fresh Cuisine</h1>
  <p id="welcome">Discover our delicious menu made with fresh ingredients from our local Farmer's Market.</p>
  `;
  document.getElementById('content').appendChild(homePage);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);


/***/ }),

/***/ "./src/modules/menuSection.js":
/*!************************************!*\
  !*** ./src/modules/menuSection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuSection": () => (/* binding */ createMenuSection),
/* harmony export */   "getMenu": () => (/* binding */ getMenu)
/* harmony export */ });
const getMenu = (category) => {
  fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.meals.length > 8) {
        data.meals = data.meals.splice(0, 8);
      }

      const menuItemsContainer = document.getElementById('menu-items');

      data.meals.forEach((item) => {
        const meal = document.createElement('div');
        meal.classList.add('meals');
        meal.innerHTML = `<h2 class="meal-name">${item.strMeal}</h2>
          <div class="rating">
          <a href="#5" title="Give 5 stars">★</a>
          <a href="#4" title="Give 4 stars">★</a>
          <a href="#3" title="Give 3 stars">★</a>
          <a href="#2" title="Give 2 stars">★</a>
          <a href="#1" title="Give 1 star">★</a>
          </div>
          <div class="blur-div"></div>
        `;
        meal.style.background = `url(${item.strMealThumb})`;
        meal.style.backgroundPosition = 'center';
        meal.style.backgroundSize = 'cover';
        menuItemsContainer.appendChild(meal);
      });
    });
};

const selection = (category) => {
  const menuItemsContainer = document.getElementById('menu-items');
  const selectionItems = document.querySelector('select');
  selectionItems.addEventListener('change', (e) => {
    switch (e.target.value) {
      case 'vegan':
        menuItemsContainer.innerHTML = '';
        category = 'Vegan';
        getMenu(category);
        break;
      case 'pasta':
        menuItemsContainer.innerHTML = '';
        category = 'Pasta';
        getMenu(category);
        break;
      case 'seafood':
        menuItemsContainer.innerHTML = '';
        category = 'Seafood';
        getMenu(category);
        break;
      case 'chicken':
        menuItemsContainer.innerHTML = '';
        category = 'Chicken';
        getMenu(category);
        break;
      case 'breakfast':
        menuItemsContainer.innerHTML = '';
        category = 'Breakfast';
        getMenu(category);
        break;
      case 'starter':
        menuItemsContainer.innerHTML = '';
        category = 'Starter';
        getMenu(category);
        break;
      case 'side':
        menuItemsContainer.innerHTML = '';
        category = 'Side';
        getMenu(category);
        break;
      case 'vegetarian':
        menuItemsContainer.innerHTML = '';
        category = 'Vegetarian';
        getMenu(category);
        break;
      case 'dessert':
        menuItemsContainer.innerHTML = '';
        category = 'Dessert';
        getMenu(category);
        break;
      default:
        menuItemsContainer.innerHTML = '';
        category = 'Vegan';
        getMenu(category);
        break;
    }
  });
};

const createMenuSection = () => {
  let category;
  const menuSection = document.createElement('section');
  menuSection.setAttribute('id', 'menu-section');
  menuSection.innerHTML = `<h2>Menu</h2>
  <div id="selection">
  <select>
    <option value="vegan">Vegan</option>
    <option value="starter">Starter</option>
    <option value="side">Side</option>
    <option value="pasta">Pasta</option>
    <option value="seafood">Seafood</option>
    <option value="chicken">Chicken</option>
    <option value="breakfast">Breakfast</option>
    <option value="vegetarian">Vegetarian</option>
    <option value="dessert">Dessert</option>
  </select>
  <div id="menu-items"></div>
</div>
  `;
  document.getElementById('content').appendChild(menuSection);
  selection(category);
};




/***/ }),

/***/ "./src/modules/navBar.js":
/*!*******************************!*\
  !*** ./src/modules/navBar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createNavBar = () => {
  const nav = document.createElement('nav');
  nav.innerHTML = `<ul>
  <li id="home">Home</li>
  <li id="menu">Menu</li>
  <li id="contact">Contact</li>
</ul>`;

  document.body.insertBefore(nav, document.getElementById('content'));

  const mobileMenu = document.createElement('i');
  mobileMenu.setAttribute('class', 'fas fa-bars');
  document.body.insertBefore(mobileMenu, document.getElementById('content'));

  const exitBtn = document.createElement('i');
  exitBtn.setAttribute('class', 'fas fa-times');
  exitBtn.classList.add('hide');
  document.body.insertBefore(exitBtn, document.getElementById('content'));

  exitBtn.addEventListener('click', () => {
    nav.style.visibility = 'hidden';
    mobileMenu.classList.remove('hide');
    exitBtn.classList.add('hide');
  });

  mobileMenu.addEventListener('click', () => {
    nav.style.visibility = 'visible';
    mobileMenu.classList.add('hide');
    exitBtn.classList.remove('hide');
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavBar);


/***/ }),

/***/ "./src/modules/navigation.js":
/*!***********************************!*\
  !*** ./src/modules/navigation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menuSection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuSection.js */ "./src/modules/menuSection.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/modules/contact.js");



const navbarVisibility = (navBar) => {
  if (window.innerWidth > 600) {
    navBar.style.visibility = 'visible';
  }
};

const toggleElements = (navBar, exitBtn, hamburgerMenu) => {
  navBar.style.visibility = 'hidden';
  exitBtn.classList.add('hide');
  hamburgerMenu.classList.remove('hide');
};

const navigate = () => {
  const homePage = document.getElementById('home-page');
  const navBar = document.querySelector('nav');
  const exitBtn = document.querySelector('.fa-times');
  const hamburgerMenu = document.querySelector('.fa-bars');
  const navList = [...document.querySelectorAll('li')];

  navList.forEach((item) => item.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'home':
        homePage.classList.remove('hide');
        toggleElements(navBar, exitBtn, hamburgerMenu);
        if (document.getElementById('contact-page')) {
          document.getElementById('contact-page').remove();
        } else if (document.getElementById('menu-section')) {
          document.getElementById('menu-section').remove();
        }
        navbarVisibility(navBar);
        break;
      case 'menu':
        (0,_menuSection_js__WEBPACK_IMPORTED_MODULE_0__.createMenuSection)();
        toggleElements(navBar, exitBtn, hamburgerMenu);
        (0,_menuSection_js__WEBPACK_IMPORTED_MODULE_0__.getMenu)('Vegan');
        homePage.classList.add('hide');
        if (document.getElementById('contact-page')) {
          document.getElementById('contact-page').remove();
        }
        navbarVisibility(navBar);
        break;
      case 'contact':
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        toggleElements(navBar, exitBtn, hamburgerMenu);
        homePage.classList.add('hide');
        if (document.getElementById('menu-section')) {
          document.getElementById('menu-section').remove();
        }
        navbarVisibility(navBar);
        break;
      default:
        break;
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigate);


/***/ }),

/***/ "./src/modules/startApp.js":
/*!*********************************!*\
  !*** ./src/modules/startApp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ "./src/modules/homepage.js");
/* harmony import */ var _navBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar.js */ "./src/modules/navBar.js");
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.js */ "./src/modules/navigation.js");




const startApp = () => {
  (0,_navBar_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_navigation_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startApp);


/***/ }),

/***/ "./src/images/section_bg.jpg":
/*!***********************************!*\
  !*** ./src/images/section_bg.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f97eb559331b0e1cbf82.jpg";

/***/ }),

/***/ "./src/images/section_bg1.jpg":
/*!************************************!*\
  !*** ./src/images/section_bg1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "243e5e699993471ccd4e.jpg";

/***/ }),

/***/ "./src/images/section_bg2.jpg":
/*!************************************!*\
  !*** ./src/images/section_bg2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a02a06032d0dfbfd651.jpg";

/***/ }),

/***/ "./src/images/section_bg4.jpg":
/*!************************************!*\
  !*** ./src/images/section_bg4.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9e1207d3edd40031322.jpg";

/***/ }),

/***/ "./src/images/section_bg5.jpg":
/*!************************************!*\
  !*** ./src/images/section_bg5.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c959af9af29e19142bb9.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _modules_startApp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/startApp.js */ "./src/modules/startApp.js");



window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_startApp_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxNQUFNLEtBQUssV0FBVyxZQUFZLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxXQUFXLEtBQUssS0FBSyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssUUFBUSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFlBQVksWUFBWSxXQUFXLEtBQUssTUFBTSxNQUFNLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssS0FBSyxLQUFLLFlBQVksWUFBWSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLE1BQU0sTUFBTSxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssWUFBWSxZQUFZLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcs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V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ2dCOztBQUU3QztBQUNBLEVBQUUsZ0VBQVE7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/ZTVkOCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL21vZHVsZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL21vZHVsZXMvbWVudVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL21vZHVsZXMvbmF2QmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL21vZHVsZXMvc3RhcnRBcHAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zZWN0aW9uX2JnMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc2VjdGlvbl9iZzQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3NlY3Rpb25fYmcxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zZWN0aW9uX2JnNS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc2VjdGlvbl9iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZmYW1pbHk9Vm9sbGtvcm4mZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjkpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgei1pbmRleDogOTk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICBuYXYge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgbmF2IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgfVxcbn1cXG5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDUwcHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICBuYXYgdWwge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gIG5hdiB1bCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTAwcHg7XFxuICB9XFxufVxcbm5hdiB1bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5uYXYgdWwgbGk6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyNTMsIDEwMiwgMik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmkuZmEtYmFycywgaS5mYS10aW1lcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMlO1xcbiAgcmlnaHQ6IDYlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgaS5mYS1iYXJzLCBpLmZhLXRpbWVzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICBpLmZhLWJhcnMsIGkuZmEtdGltZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5pLmZhLXRpbWVzIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgY29sb3I6IHJnYigyNTMsIDEwMiwgMik7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIGkuZmEtdGltZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gIGkuZmEtdGltZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAjY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gICNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbiAgfVxcbn1cXG5cXG5zZWN0aW9uI2hvbWUtcGFnZSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMjVweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICBzZWN0aW9uI2hvbWUtcGFnZSB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICB9XFxufVxcbnNlY3Rpb24jaG9tZS1wYWdlIGgxIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjAlO1xcbiAgZm9udC1zaXplOiAyLjhyZW07XFxuICBjb2xvcjogI2Y0NzgzMDtcXG4gIHRleHQtc2hhZG93OiA1cHggMCA1cHggI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVm9sbGtvcm5cXFwiLCBzZXJpZjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIHNlY3Rpb24jaG9tZS1wYWdlIGgxIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gIHNlY3Rpb24jaG9tZS1wYWdlIGgxIHtcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgfVxcbn1cXG5zZWN0aW9uI2hvbWUtcGFnZSBwI3dlbGNvbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMCU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHdpZHRoOiA5MCU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICBzZWN0aW9uI2hvbWUtcGFnZSBwI3dlbGNvbWUge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICBzZWN0aW9uI2hvbWUtcGFnZSBwI3dlbGNvbWUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIHRvcDogMzUlO1xcbiAgfVxcbn1cXG5cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwMHB4IDA7XFxufVxcbnNlY3Rpb24jbWVudS1zZWN0aW9uIGgyIHtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJWb2xsa29yblxcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI3NlbGVjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbnNlY3Rpb24jbWVudS1zZWN0aW9uICNzZWxlY3Rpb24gc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkIHJnYigyNTMsIDEwMiwgMik7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgcGFkZGluZzogMC41ZW0gMy41ZW0gMC41ZW0gMWVtO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgNTAlLCAjZmZmIDUwJSksIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUpLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTMsIDEwMiwgMiksIHJnYigyNTMsIDEwMiwgMikpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksIDEwMCUgMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogNXB4IDVweCwgNXB4IDVweCwgMi41ZW0gMi41ZW07XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjc2VsZWN0aW9uIHNlbGVjdDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHdoaXRlIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdHJhbnNwYXJlbnQgNTAlLCB3aGl0ZSA1MCUpLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGdyYXksIGdyYXkpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMTVweCkgMWVtLCBjYWxjKDEwMCUgLSAyMHB4KSAxZW0sIDEwMCUgMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogNXB4IDVweCwgNXB4IDVweCwgMi41ZW0gMi41ZW07XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbiAgb3V0bGluZTogMDtcXG59XFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI1cHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gIHNlY3Rpb24jbWVudS1zZWN0aW9uICNtZW51LWl0ZW1zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMSU7XFxuICAgIHRvcDogMjUlO1xcbiAgfVxcbn1cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHMge1xcbiAgd2lkdGg6IDI4MHB4O1xcbiAgaGVpZ2h0OiAyODBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbnNlY3Rpb24jbWVudS1zZWN0aW9uICNtZW51LWl0ZW1zIC5tZWFscyAuYmx1ci1kaXYge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHMgLm1lYWwtbmFtZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMgLm1lYWxzIC5yYXRpbmcge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHM6aG92ZXIgLm1lYWwtbmFtZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk7XFxuICB0b3A6IDEwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAzcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbnNlY3Rpb24jbWVudS1zZWN0aW9uICNtZW51LWl0ZW1zIC5tZWFsczpob3ZlciAucmF0aW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0byAxZW07XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMgLm1lYWxzOmhvdmVyIC5yYXRpbmcgYVtocmVmKj1pbnRlbnRdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xcbn1cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHM6aG92ZXIgLnJhdGluZyBhIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcbiAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC40cztcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XFxufVxcbnNlY3Rpb24jbWVudS1zZWN0aW9uICNtZW51LWl0ZW1zIC5tZWFsczpob3ZlciAucmF0aW5nIGE6aG92ZXIsXFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMgLm1lYWxzOmhvdmVyIC5yYXRpbmcgYTpmb2N1cyxcXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHM6aG92ZXIgLnJhdGluZyBhOmhvdmVyIH4gYSxcXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHM6aG92ZXIgLnJhdGluZyBhOmZvY3VzIH4gYSB7XFxuICBjb2xvcjogcmdiKDI1MywgMjM2LCAwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMgLm1lYWxzOmhvdmVyIC5ibHVyLWRpdiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNzUsIDE2OCwgMTU3LCAwLjgpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogODBweDtcXG4gIHBhZGRpbmc6IDEwMHB4IDAgNTBweCAwO1xcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSBoMiB7XFxuICBmb250LWZhbWlseTogXFxcIlZvbGxrb3JuXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgc2VjdGlvbiNjb250YWN0LXBhZ2UgaDIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gIHNlY3Rpb24jY29udGFjdC1wYWdlIGxpIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlIGxpIHNwYW4ge1xcbiAgY29sb3I6IHJnYigyNTMsIDEwMiwgMik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSBpbnB1dCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IHRoaW4gc29saWQgcmdiKDI1MywgMTAyLCAyKTtcXG4gIG1hcmdpbjogMzBweCAwO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIHNlY3Rpb24jY29udGFjdC1wYWdlIGlucHV0IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICBzZWN0aW9uI2NvbnRhY3QtcGFnZSBpbnB1dCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiKDI1MywgMTAyLCAyKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgc2VjdGlvbiNjb250YWN0LXBhZ2UgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjMwLCAxODQsIDE0Nik7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSBmb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItdG9wOiB0aGluIHNvbGlkIHJnYigxMzMsIDEzMiwgMTMyKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlICNzbG9nYW4gaDIge1xcbiAgY29sb3I6IHJnYigyNTMsIDEwMiwgMik7XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICBzZWN0aW9uI2NvbnRhY3QtcGFnZSAjc2xvZ2FuIGgyIHtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICB9XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlICNzbG9nYW4gcCB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgc2VjdGlvbiNjb250YWN0LXBhZ2UgI3Nsb2dhbiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgfVxcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSB1bCNzb2NpYWwtaWNvbnMge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIHNlY3Rpb24jY29udGFjdC1wYWdlIHVsI3NvY2lhbC1pY29ucyB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgc2VjdGlvbiNjb250YWN0LXBhZ2UgdWwjc29jaWFsLWljb25zIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gIH1cXG59XFxuc2VjdGlvbiNjb250YWN0LXBhZ2UgdWwjc29jaWFsLWljb25zIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IHRoaW4gc29saWQgcmdiKDI1MywgMTAyLCAyKTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSB1bCNzb2NpYWwtaWNvbnMgbGkgaSB7XFxuICBjb2xvcjogcmdiKDI1MywgMTAyLCAyKTtcXG59XFxuc2VjdGlvbiNjb250YWN0LXBhZ2UgdWwjc29jaWFsLWljb25zIGxpIGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTs7O0VBR0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0pGOztBRE9BO0VBQ0Usb0NBWk07QUNRUjs7QUFUQTtFQUNFLGFBQUE7QUFZRjs7QUFUQTtFRGFFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VDWkEsa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBYUY7QURKRTtFQ25CRjtJQWFJLG1CQUFBO0lBQ0EsWUFBQTtFQWNGO0FBQ0Y7QURKRTtFQ3pCRjtJQWtCSSxtQkFBQTtJQUNBLFlBQUE7RUFlRjtBQUNGO0FBYkU7RURUQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQ1VFLHNCQUFBO0VBQ0EsU0FBQTtBQWdCSjtBRHZCRTtFQ0dBO0lBT0ksbUJBQUE7RUFpQko7QUFDRjtBRHRCRTtFQ0hBO0lBV0ksbUJBQUE7SUFDQSxVQUFBO0VBa0JKO0FBQ0Y7QUFoQkk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFrQk47QUFoQk07RUFDRSx1QkQvQ007RUNnRE4sZUFBQTtBQWtCUjs7QUFaQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxl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O0lBU0ksaUJBQUE7RUFFSjtBQUNGO0FBQUk7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBRU47QUFFRTtFRGpZQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQ2tZRSxzQkFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0o7QUFHSTtFQUNFLHVCRDdaUTtFQzhaUixpQkFBQTtBQUROO0FEaFlFO0VDK1hFO0lBS0ksaUJBQUE7RUFBTjtBQUNGO0FBR0k7RUFDRSxrQkFBQTtBQUROO0FEeFlFO0VDd1lFO0lBSUksaUJBQUE7SUFDQSxvQkFBQTtFQUFOO0FBQ0Y7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFGSjtBRDFaRTtFQ3daQTtJQU9JLFVBQUE7RUFESjtBQUNGO0FEelpFO0VDa1pBO0lBV0ksVUFBQTtFQUFKO0FBQ0Y7QUFFSTtFRDVhRixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQzZhSSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDTjtBQUNNO0VBQ0UsdUJEdGNNO0FDdWNkO0FBQ1E7RUFDRSxlQUFBO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmZhbWlseT1Wb2xsa29ybiZkaXNwbGF5PXN3YXAnKTtcXG5cXG4kYmFzZV9jb2xvcjE6IHJnYigyNTMsIDEwMiwgMik7XFxuJGZvbnQxOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4kZm9udDI6ICdWb2xsa29ybicsIHNlcmlmO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udDE7XFxufVxcblxcbkBtaXhpbiBjZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1peGluIG1lZGlhLW1kIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gbWVkaWEtbGcge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gc2VjdGlvbi1iZyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9zZWN0aW9uX2JnMi5qcGcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG5cXG4gIEBpbmNsdWRlIG1lZGlhLW1kIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvc2VjdGlvbl9iZzQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbiAgICBcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICdiYXNlJztcXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5uYXYge1xcbiAgQGluY2x1ZGUgY2VudGVyO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjkpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgei1pbmRleDogOTk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFxuICBAaW5jbHVkZSBtZWRpYS1tZCB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gIH1cXG5cXG4gIEBpbmNsdWRlIG1lZGlhLWxnIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgfVxcblxcbiAgdWwge1xcbiAgICBAaW5jbHVkZSBjZW50ZXI7XFxuXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNTBweDtcXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbWQge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgZ2FwOiAxMDBweDtcXG4gICAgfVxcblxcbiAgICBsaSB7XFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICRiYXNlX2NvbG9yMTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuaS5mYS1iYXJzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMyU7XFxuICByaWdodDogNiU7XFxuICBmb250LXNpemU6IDJyZW07XFxuXFxuICBAaW5jbHVkZSBtZWRpYS1tZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbmkuZmEtdGltZXMge1xcbiAgQGV4dGVuZCAuZmEtYmFycztcXG5cXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgY29sb3I6ICRiYXNlX2NvbG9yMTtcXG4gIHotaW5kZXg6IDk5O1xcblxcbiAgQGluY2x1ZGUgbWVkaWEtbWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgQGluY2x1ZGUgc2VjdGlvbi1iZztcXG4gXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcblxcbiAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9zZWN0aW9uX2JnMS5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbiAgfVxcbn1cXG5cXG5zZWN0aW9uI2hvbWUtcGFnZSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9zZWN0aW9uX2JnNS5qcGcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuXFxuICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3NlY3Rpb25fYmcuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICBjb2xvcjogI2Y0NzgzMDtcXG4gICAgdGV4dC1zaGFkb3c6IDVweCAwIDVweCAjZmZmO1xcbiAgICBmb250LWZhbWlseTogJGZvbnQyO1xcblxcbiAgICBAaW5jbHVkZSBtZWRpYS1tZCB7XFxuICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhLWxnIHtcXG4gICAgICBmb250LXNpemU6IDZyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIHAjd2VsY29tZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHdpZHRoOiA5MCU7XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhLW1kIHtcXG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgdG9wOiAzNSU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuc2VjdGlvbiNtZW51LXNlY3Rpb24ge1xcbiAgQGluY2x1ZGUgY2VudGVyO1xcblxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwMHB4IDA7XFxuXFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICBmb250LWZhbWlseTogJGZvbnQyO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgfVxcblxcbiAgI3NlbGVjdGlvbiB7XFxuICAgIEBpbmNsdWRlIGNlbnRlcjtcXG5cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG5cXG4gICAgc2VsZWN0IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBib3JkZXI6IHRoaW4gc29saWQgJGJhc2VfY29sb3IxO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgZm9udDogaW5oZXJpdDtcXG4gICAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgICAgcGFkZGluZzogMC41ZW0gMy41ZW0gMC41ZW0gMWVtO1xcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgI2ZmZiA1MCUpLFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSksXFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRiYXNlX2NvbG9yMSwgJGJhc2VfY29sb3IxKTtcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOlxcbiAgICAgICAgY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLFxcbiAgICAgICAgY2FsYygxMDAlIC0gMTVweCkgY2FsYygxZW0gKyAycHgpLFxcbiAgICAgICAgMTAwJSAwO1xcbiAgICAgIGJhY2tncm91bmQtc2l6ZTpcXG4gICAgICAgIDVweCA1cHgsXFxuICAgICAgICA1cHggNXB4LFxcbiAgICAgICAgMi41ZW0gMi41ZW07XFxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgfVxcblxcbiAgICBzZWxlY3Q6Zm9jdXMge1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHdoaXRlIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHRyYW5zcGFyZW50IDUwJSwgd2hpdGUgNTAlKSxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZ3JheSwgZ3JheSk7XFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpcXG4gICAgICAgIGNhbGMoMTAwJSAtIDE1cHgpIDFlbSxcXG4gICAgICAgIGNhbGMoMTAwJSAtIDIwcHgpIDFlbSxcXG4gICAgICAgIDEwMCUgMDtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6XFxuICAgICAgICA1cHggNXB4LFxcbiAgICAgICAgNXB4IDVweCxcXG4gICAgICAgIDIuNWVtIDIuNWVtO1xcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbiAgICAgIG91dGxpbmU6IDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gICNtZW51LWl0ZW1zIHtcXG4gICAgQGluY2x1ZGUgY2VudGVyO1xcblxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhLW1kIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgcmlnaHQ6IDElO1xcbiAgICAgIHRvcDogMjUlO1xcbiAgICB9XFxuXFxuICAgIC5tZWFscyB7XFxuICAgICAgd2lkdGg6IDI4MHB4O1xcbiAgICAgIGhlaWdodDogMjgwcHg7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFxuICAgICAgLmJsdXItZGl2IHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICB9XFxuXFxuICAgICAgLm1lYWwtbmFtZSB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICB9XFxuXFxuICAgICAgLnJhdGluZyB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgfVxcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgLm1lYWwtbmFtZSB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgei1pbmRleDogOTk7XFxuICAgICAgICAgIHRvcDogMTAlO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgcGFkZGluZzogMCAzcHg7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5yYXRpbmcge1xcbiAgICAgICAgICBAaW5jbHVkZSBjZW50ZXI7XFxuXFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDFlbTtcXG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgIHotaW5kZXg6IDk5O1xcblxcbiAgICAgICAgICBhW2hyZWYqPVxcXCJpbnRlbnRcXFwiXSB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGEge1xcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC40cztcXG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgYTpob3ZlcixcXG4gICAgICAgICAgYTpmb2N1cyxcXG4gICAgICAgICAgYTpob3ZlciB+IGEsXFxuICAgICAgICAgIGE6Zm9jdXMgfiBhIHtcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1MywgMjM2LCAwKTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5ibHVyLWRpdiB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE3NSwgMTY4LCAxNTcsIDAuOCk7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbnNlY3Rpb24jY29udGFjdC1wYWdlIHtcXG4gIEBpbmNsdWRlIGNlbnRlcjtcXG5cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDgwcHg7XFxuICBwYWRkaW5nOiAxMDBweCAwIDUwcHggMDtcXG5cXG4gIGgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICRmb250MjtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhLWxnIHtcXG4gICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgdWwge1xcbiAgICBAaW5jbHVkZSBjZW50ZXI7XFxuXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICBsaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbiAgICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgc3BhbiB7XFxuICAgICAgY29sb3I6ICRiYXNlX2NvbG9yMTtcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxuICB9XFxuXFxuICBkaXYge1xcbiAgICBAaW5jbHVkZSBjZW50ZXI7XFxuXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgaW5wdXQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IHRoaW4gc29saWQgJGJhc2VfY29sb3IxO1xcbiAgICBtYXJnaW46IDMwcHggMDtcXG4gICAgd2lkdGg6IDcwJTtcXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbWQge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogJGJhc2VfY29sb3IxO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIH1cXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyMzAsIDE4NCwgMTQ2KTtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBAaW5jbHVkZSBjZW50ZXI7XFxuXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci10b3A6IHRoaW4gc29saWQgcmdiKDEzMywgMTMyLCAxMzIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICB9XFxuXFxuICAjc2xvZ2FuIHtcXG4gICAgaDIge1xcbiAgICAgIGNvbG9yOiAkYmFzZV9jb2xvcjE7XFxuICAgICAgZm9udC1zaXplOiAyLjZyZW07XFxuXFxuICAgICAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXG4gICAgICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgdWwjc29jaWFsLWljb25zIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbWQge1xcbiAgICAgIHdpZHRoOiAzMCU7XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICAgIHdpZHRoOiAyMCU7XFxuICAgIH1cXG5cXG4gICAgbGkge1xcbiAgICAgIEBpbmNsdWRlIGNlbnRlcjtcXG5cXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgYm9yZGVyOiB0aGluIHNvbGlkICRiYXNlX2NvbG9yMTtcXG4gICAgICB3aWR0aDogNDBweDtcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxuXFxuICAgICAgaSB7XFxuICAgICAgICBjb2xvcjogJGJhc2VfY29sb3IxO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVDb250YWN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGFjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnRhY3RQYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1wYWdlJyk7XG4gIGNvbnRhY3RQYWdlLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwic2xvZ2FuXCI+PGgyPkZyZXNoIEN1aXNpbmU8L2gyPlxuICA8cD5GcmVzaCBmb29kLiBGcmVzaCBpZGVhcy48L3A+PC9kaXY+XG4gIDxkaXYgaWQ9XCJvcGVuaW5nLWhvdXJzXCI+XG4gICAgPGgyPk9wZW4gSG91cnM8L2gyPlxuICAgIDx1bD5cbiAgICAgIDxsaT5Nb24tRnJpOiA5IEFNIC0gNiBQTTwvbGk+XG4gICAgICA8bGk+U2F0dXJkYXk6IDkgQU0gLSA0IFBNPC9saT5cbiAgICAgIDxsaT5TdW5kYXk6IDkgQU0gLSAyIFBNPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbiAgPGRpdiBpZD1cImNvbnRhY3QtdXNcIj5cbiAgICA8aDI+Q29udGFjdCBVczwvaDI+XG4gICAgPHVsPlxuICAgICAgPGxpPjEyMyBTYW1wbGUgc3RyZWV0LCBOZXcgWW9yaywgMTAwMTQ8L2xpPlxuICAgICAgPGxpPkVtYWlsOiA8c3Bhbj5zYW1wbGVAZXhhbXBsZS5jb208L3NwYW4+PC9saT5cbiAgICAgIDxsaT5UZWxlcGhvbmU6IDxzcGFuPisxKDUwMCkxMjMtNDU2PC9zcGFuPjwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG4gIDxkaXYgaWQ9XCJzdWJzY3JpYmVcIj5cbiAgICA8aDI+U3Vic2NyaWJlPC9oMj5cbiAgICA8aDI+TmV3c2xldHRlcjwvaDI+XG4gICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIj5cbiAgICA8YnV0dG9uIGlkPVwic3VibWl0XCI+U3Vic2NyaWJlPC9idXR0b24+XG4gIDwvZGl2PlxuICA8Zm9vdGVyPlxuICAgIDxwPjIwMjIgPGkgY2xhc3M9XCJmYSBmYS1jb3B5cmlnaHRcIj48L2k+IEZyZXNoIEN1aXNpbmUgfCBQb3dlcmVkIGJ5IEZyZXNoIExpZmU8L3A+XG4gICAgPHVsIGlkPVwic29jaWFsLWljb25zXCI+XG4gICAgICA8bGk+PGkgY2xhc3M9XCJmYSBmYS1mYWNlYm9va1wiPjwvaT48L2xpPlxuICAgICAgPGxpPjxpIGNsYXNzPVwiZmEgZmEtdHdpdHRlclwiPjwvaT48L2xpPlxuICAgICAgPGxpPjxpIGNsYXNzPVwiZmEgZmEtbGlua2VkaW5cIj48L2k+PC9saT5cbiAgICAgIDxsaT48aSBjbGFzcz1cImZhIGZhLWluc3RhZ3JhbVwiPjwvaT48L2xpPlxuICAgIDwvdWw+XG4gIDwvZm9vdGVyPlxuICBgO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3RQYWdlO1xuIiwiY29uc3QgY3JlYXRlSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBob21lUGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtcGFnZScpO1xuICBob21lUGFnZS5pbm5lckhUTUwgPSBgPGgxPkZyZXNoIEN1aXNpbmU8L2gxPlxuICA8cCBpZD1cIndlbGNvbWVcIj5EaXNjb3ZlciBvdXIgZGVsaWNpb3VzIG1lbnUgbWFkZSB3aXRoIGZyZXNoIGluZ3JlZGllbnRzIGZyb20gb3VyIGxvY2FsIEZhcm1lcidzIE1hcmtldC48L3A+XG4gIGA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZVBhZ2U7XG4iLCJjb25zdCBnZXRNZW51ID0gKGNhdGVnb3J5KSA9PiB7XG4gIGZldGNoKGBodHRwczovL3RoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9maWx0ZXIucGhwP2M9JHtjYXRlZ29yeX1gKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLm1lYWxzLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgZGF0YS5tZWFscyA9IGRhdGEubWVhbHMuc3BsaWNlKDAsIDgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZW51SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1pdGVtcycpO1xuXG4gICAgICBkYXRhLm1lYWxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZWFsLmNsYXNzTGlzdC5hZGQoJ21lYWxzJyk7XG4gICAgICAgIG1lYWwuaW5uZXJIVE1MID0gYDxoMiBjbGFzcz1cIm1lYWwtbmFtZVwiPiR7aXRlbS5zdHJNZWFsfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZ1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjNVwiIHRpdGxlPVwiR2l2ZSA1IHN0YXJzXCI+4piFPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjNFwiIHRpdGxlPVwiR2l2ZSA0IHN0YXJzXCI+4piFPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjM1wiIHRpdGxlPVwiR2l2ZSAzIHN0YXJzXCI+4piFPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjMlwiIHRpdGxlPVwiR2l2ZSAyIHN0YXJzXCI+4piFPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjMVwiIHRpdGxlPVwiR2l2ZSAxIHN0YXJcIj7imIU8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsdXItZGl2XCI+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIG1lYWwuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtpdGVtLnN0ck1lYWxUaHVtYn0pYDtcbiAgICAgICAgbWVhbC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcbiAgICAgICAgbWVhbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuY29uc3Qgc2VsZWN0aW9uID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IG1lbnVJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWl0ZW1zJyk7XG4gIGNvbnN0IHNlbGVjdGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gIHNlbGVjdGlvbkl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgc3dpdGNoIChlLnRhcmdldC52YWx1ZSkge1xuICAgICAgY2FzZSAndmVnYW4nOlxuICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNhdGVnb3J5ID0gJ1ZlZ2FuJztcbiAgICAgICAgZ2V0TWVudShjYXRlZ29yeSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFzdGEnOlxuICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNhdGVnb3J5ID0gJ1Bhc3RhJztcbiAgICAgICAgZ2V0TWVudShjYXRlZ29yeSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VhZm9vZCc6XG4gICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2F0ZWdvcnkgPSAnU2VhZm9vZCc7XG4gICAgICAgIGdldE1lbnUoY2F0ZWdvcnkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoaWNrZW4nOlxuICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNhdGVnb3J5ID0gJ0NoaWNrZW4nO1xuICAgICAgICBnZXRNZW51KGNhdGVnb3J5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdicmVha2Zhc3QnOlxuICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNhdGVnb3J5ID0gJ0JyZWFrZmFzdCc7XG4gICAgICAgIGdldE1lbnUoY2F0ZWdvcnkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0YXJ0ZXInOlxuICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNhdGVnb3J5ID0gJ1N0YXJ0ZXInO1xuICAgICAgICBnZXRNZW51KGNhdGVnb3J5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzaWRlJzpcbiAgICAgICAgbWVudUl0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjYXRlZ29yeSA9ICdTaWRlJztcbiAgICAgICAgZ2V0TWVudShjYXRlZ29yeSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndmVnZXRhcmlhbic6XG4gICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2F0ZWdvcnkgPSAnVmVnZXRhcmlhbic7XG4gICAgICAgIGdldE1lbnUoY2F0ZWdvcnkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rlc3NlcnQnOlxuICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNhdGVnb3J5ID0gJ0Rlc3NlcnQnO1xuICAgICAgICBnZXRNZW51KGNhdGVnb3J5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNhdGVnb3J5ID0gJ1ZlZ2FuJztcbiAgICAgICAgZ2V0TWVudShjYXRlZ29yeSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVNZW51U2VjdGlvbiA9ICgpID0+IHtcbiAgbGV0IGNhdGVnb3J5O1xuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgbWVudVNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LXNlY3Rpb24nKTtcbiAgbWVudVNlY3Rpb24uaW5uZXJIVE1MID0gYDxoMj5NZW51PC9oMj5cbiAgPGRpdiBpZD1cInNlbGVjdGlvblwiPlxuICA8c2VsZWN0PlxuICAgIDxvcHRpb24gdmFsdWU9XCJ2ZWdhblwiPlZlZ2FuPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInN0YXJ0ZXJcIj5TdGFydGVyPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInNpZGVcIj5TaWRlPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInBhc3RhXCI+UGFzdGE8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwic2VhZm9vZFwiPlNlYWZvb2Q8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiY2hpY2tlblwiPkNoaWNrZW48L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiYnJlYWtmYXN0XCI+QnJlYWtmYXN0PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInZlZ2V0YXJpYW5cIj5WZWdldGFyaWFuPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImRlc3NlcnRcIj5EZXNzZXJ0PC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuICA8ZGl2IGlkPVwibWVudS1pdGVtc1wiPjwvZGl2PlxuPC9kaXY+XG4gIGA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xuICBzZWxlY3Rpb24oY2F0ZWdvcnkpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTWVudVNlY3Rpb24sIGdldE1lbnUgfTtcbiIsImNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5pbm5lckhUTUwgPSBgPHVsPlxuICA8bGkgaWQ9XCJob21lXCI+SG9tZTwvbGk+XG4gIDxsaSBpZD1cIm1lbnVcIj5NZW51PC9saT5cbiAgPGxpIGlkPVwiY29udGFjdFwiPkNvbnRhY3Q8L2xpPlxuPC91bD5gO1xuXG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKG5hdiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSk7XG5cbiAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbW9iaWxlTWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhcyBmYS1iYXJzJyk7XG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKG1vYmlsZU1lbnUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykpO1xuXG4gIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGV4aXRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYXMgZmEtdGltZXMnKTtcbiAgZXhpdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGV4aXRCdG4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykpO1xuXG4gIGV4aXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmF2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBleGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfSk7XG5cbiAgbW9iaWxlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuYXYuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBleGl0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXZCYXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVNZW51U2VjdGlvbiwgZ2V0TWVudSB9IGZyb20gJy4vbWVudVNlY3Rpb24uanMnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmNvbnN0IG5hdmJhclZpc2liaWxpdHkgPSAobmF2QmFyKSA9PiB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDYwMCkge1xuICAgIG5hdkJhci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICB9XG59O1xuXG5jb25zdCB0b2dnbGVFbGVtZW50cyA9IChuYXZCYXIsIGV4aXRCdG4sIGhhbWJ1cmdlck1lbnUpID0+IHtcbiAgbmF2QmFyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgZXhpdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xufTtcblxuY29uc3QgbmF2aWdhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtcGFnZScpO1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbiAgY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS10aW1lcycpO1xuICBjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLWJhcnMnKTtcbiAgY29uc3QgbmF2TGlzdCA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpXTtcblxuICBuYXZMaXN0LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICBob21lUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIHRvZ2dsZUVsZW1lbnRzKG5hdkJhciwgZXhpdEJ0biwgaGFtYnVyZ2VyTWVudSk7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1wYWdlJykpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1wYWdlJykucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtc2VjdGlvbicpKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtc2VjdGlvbicpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIG5hdmJhclZpc2liaWxpdHkobmF2QmFyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgY3JlYXRlTWVudVNlY3Rpb24oKTtcbiAgICAgICAgdG9nZ2xlRWxlbWVudHMobmF2QmFyLCBleGl0QnRuLCBoYW1idXJnZXJNZW51KTtcbiAgICAgICAgZ2V0TWVudSgnVmVnYW4nKTtcbiAgICAgICAgaG9tZVBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtcGFnZScpKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtcGFnZScpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIG5hdmJhclZpc2liaWxpdHkobmF2QmFyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgY3JlYXRlQ29udGFjdFBhZ2UoKTtcbiAgICAgICAgdG9nZ2xlRWxlbWVudHMobmF2QmFyLCBleGl0QnRuLCBoYW1idXJnZXJNZW51KTtcbiAgICAgICAgaG9tZVBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtc2VjdGlvbicpKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtc2VjdGlvbicpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIG5hdmJhclZpc2liaWxpdHkobmF2QmFyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmlnYXRlO1xuIiwiaW1wb3J0IGNyZWF0ZUhvbWVQYWdlIGZyb20gJy4vaG9tZXBhZ2UuanMnO1xuaW1wb3J0IGNyZWF0ZU5hdkJhciBmcm9tICcuL25hdkJhci5qcyc7XG5pbXBvcnQgbmF2aWdhdGUgZnJvbSAnLi9uYXZpZ2F0aW9uLmpzJztcblxuY29uc3Qgc3RhcnRBcHAgPSAoKSA9PiB7XG4gIGNyZWF0ZU5hdkJhcigpO1xuICBjcmVhdGVIb21lUGFnZSgpO1xuICBuYXZpZ2F0ZSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhcnRBcHA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zY3NzJztcbmltcG9ydCBzdGFydEFwcCBmcm9tICcuL21vZHVsZXMvc3RhcnRBcHAuanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgc3RhcnRBcHAoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
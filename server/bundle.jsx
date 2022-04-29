/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: ./src/App.css
/* harmony default export */ const App = (__webpack_require__.p + "f779198245e96c048f0aed7973108913.css");
;// CONCATENATED MODULE: ./src/App.jsx



var App_App = function App() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    tabIndex: 0,
    role: "button",
    onKeyDown: function onKeyDown() {
      return console.log('si');
    },
    onClick: function onClick() {
      return console.log('hola');
    }
  }, "Hola Archi Gay");
};

/* harmony default export */ const src_App = (App_App);
;// CONCATENATED MODULE: ./server/index.jsx





var PORT = process.env.PORT || 3000;
var app = external_express_default()();
app.get('/', function (req, res) {
  var element = server_namespaceObject.renderToString( /*#__PURE__*/external_react_default().createElement(src_App, null));
  var html = "\n    <html lang=\"en\">\n    <head>\n        <title>Document</title>\n    </head>\n    <body style=\"margin: 0px;\">\n        <div id=\"root\">".concat(element, "</div>\n        <script src=\"/bundle.js\"></script>\n    </body>\n    </html>\n  ");
  res.send(html);
});
app.use(external_express_default()["static"](external_path_default().join(__dirname, '../dist')));
app.listen(PORT, function () {
  console.log("Server is listening on port ".concat(PORT));
});
/******/ })()
;
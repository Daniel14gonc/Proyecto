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
;// CONCATENATED MODULE: ./src/NavBar.css
/* harmony default export */ const NavBar = (__webpack_require__.p + "38a294c943fd4964f0482e578dbf4dd2.css");
;// CONCATENATED MODULE: ./src/NavBar.jsx



var Upper = function Upper() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "upperContainer"
  }, /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("div", {
    className: "menuImage"
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "titles"
  }, "Men\xFA"), /*#__PURE__*/external_react_default().createElement("div", {
    className: "titles"
  }, "Espa\xF1ol")), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("div", {
    className: "logo"
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "buttonsCont"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "button1"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "shop"
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "tienda"
  }, "Tienda online")), /*#__PURE__*/external_react_default().createElement("div", {
    className: "button2"
  }, /*#__PURE__*/external_react_default().createElement("div", null), /*#__PURE__*/external_react_default().createElement("div", null, "Entradas"))));
};

var Lower = function Lower() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "lowerContainer"
  }, /*#__PURE__*/external_react_default().createElement("h3", null, "VISITA"), /*#__PURE__*/external_react_default().createElement("h3", null, "EXPLORA"), /*#__PURE__*/external_react_default().createElement("h3", null, "PROGRAMACI\xD3N"));
};

var NavBar_NavBar = function NavBar() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "navContainer"
  }, /*#__PURE__*/external_react_default().createElement(Upper, null), /*#__PURE__*/external_react_default().createElement(Lower, null));
};

/* harmony default export */ const src_NavBar = (NavBar_NavBar);
;// CONCATENATED MODULE: ./src/Video.css
/* harmony default export */ const Video = (__webpack_require__.p + "6fc3c93aeb1ebc53c15c4f2fc5e71501.css");
;// CONCATENATED MODULE: ./src/Video.jsx



var Video_Video = function Video() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "videoContainer"
  }, /*#__PURE__*/external_react_default().createElement("video", {
    className: "video",
    autoPlay: "autoPlay",
    loop: true,
    mute: "true"
  }, /*#__PURE__*/external_react_default().createElement("track", {
    src: "captions_en.vtt",
    kind: "captions",
    srcLang: "en",
    label: "english_captions"
  }), /*#__PURE__*/external_react_default().createElement("source", {
    src: "https://api-www.louvre.fr/sites/default/files/videos/video_5_4_2048/video.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/external_react_default().createElement("h1", {
    className: "videoTitle"
  }, "VIAJA DE LA MANO DEL LOUVRE"), /*#__PURE__*/external_react_default().createElement("div", {
    className: "reservar"
  }, /*#__PURE__*/external_react_default().createElement("div", null), /*#__PURE__*/external_react_default().createElement("p", null, "Reservar entradas")));
};

/* harmony default export */ const src_Video = (Video_Video);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/slicedToArray"
const slicedToArray_namespaceObject = require("@babel/runtime/helpers/slicedToArray");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_namespaceObject);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: ./src/Slider.css
/* harmony default export */ const Slider = (__webpack_require__.p + "23bf42f85ea0ec0b322f8aa3f590da41.css");
;// CONCATENATED MODULE: ./assets/right.svg
const right_namespaceObject = __webpack_require__.p + "76afad45118a6832d2b3.svg";
;// CONCATENATED MODULE: ./assets/left.svg
const left_namespaceObject = __webpack_require__.p + "e535c5b5a0e2730397a1.svg";
;// CONCATENATED MODULE: ./assets/slide1.JPG
const slide1_namespaceObject = __webpack_require__.p + "4440c7bd4501d195d48a.JPG";
;// CONCATENATED MODULE: ./assets/slide2.JPG
const slide2_namespaceObject = __webpack_require__.p + "6541189de993f7ddb843.JPG";
;// CONCATENATED MODULE: ./assets/slide3.JPG
const slide3_namespaceObject = __webpack_require__.p + "e7421f003670b1bc87e3.JPG";
;// CONCATENATED MODULE: ./assets/slide4.JPG
const slide4_namespaceObject = __webpack_require__.p + "d9cdd6d5862ca13b145c.JPG";
;// CONCATENATED MODULE: ./assets/slide5.JPG
const slide5_namespaceObject = __webpack_require__.p + "f69d352495a37af925ee.JPG";
;// CONCATENATED MODULE: ./src/Slider.jsx












var Slide = function Slide(_ref) {
  var background = _ref.background;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "slide",
    style: {
      backgroundImage: "url(".concat(background, ")")
    }
  }, /*#__PURE__*/external_react_default().createElement("div", null));
};

var ButtonSlide = function ButtonSlide(_ref2) {
  var button = _ref2.button,
      click = _ref2.click;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "right",
    onClick: click
  }, /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      backgroundImage: "url(".concat(button, ")")
    }
  }));
};

var Circle = function Circle(_ref3) {
  var type = _ref3.type;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "".concat(type)
  });
};

var Controlls = function Controlls(_ref4) {
  var change = _ref4.change,
      position = _ref4.position;
  var circles = [1, 2, 3, 4, 5];

  var _useState = (0,external_react_namespaceObject.useState)(1),
      _useState2 = slicedToArray_default()(_useState, 2),
      currentCircle = _useState2[0],
      setCurrentCircle = _useState2[1];

  var buttonClick = function buttonClick(cant) {
    if (currentCircle + cant > 0 && currentCircle + cant <= 5) {
      setCurrentCircle(currentCircle + cant);

      if (currentCircle === 1 || currentCircle + cant === 1) {
        change(position + 1160 * -cant);
      } else {
        change(position + 1280 * -cant);
      }
    }
  };

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "controls-container"
  }, /*#__PURE__*/external_react_default().createElement(ButtonSlide, {
    button: left_namespaceObject,
    click: function click() {
      return buttonClick(-1);
    }
  }), /*#__PURE__*/external_react_default().createElement("div", null, circles.map(function (e) {
    if (e === currentCircle) {
      return /*#__PURE__*/external_react_default().createElement(Circle, {
        type: "Circle2"
      });
    }

    return /*#__PURE__*/external_react_default().createElement(Circle, {
      type: "Circle"
    });
  })), /*#__PURE__*/external_react_default().createElement(ButtonSlide, {
    button: right_namespaceObject,
    click: function click() {
      return buttonClick(1);
    }
  }));
};

var Slider_Slider = function Slider(_ref5) {
  var data = _ref5.data;

  // Se crea un estado para manejar la posicion del slider
  var _useState3 = (0,external_react_namespaceObject.useState)(0),
      _useState4 = slicedToArray_default()(_useState3, 2),
      slidePosition = _useState4[0],
      setSlidePosition = _useState4[1];

  var slides = [slide1_namespaceObject, slide2_namespaceObject, slide3_namespaceObject, slide4_namespaceObject, slide5_namespaceObject]; // Datos de prueba

  var data1 = [1, 2, 3, 4, 5];
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement("div", {
    className: "slideContainer"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "otro",
    style: {
      transform: "translate(".concat(slidePosition, "px)"),
      transition: '700ms ease-out all'
    }
  }, slides.map(function (e) {
    return /*#__PURE__*/external_react_default().createElement(Slide, {
      background: e
    });
  }))), /*#__PURE__*/external_react_default().createElement(Controlls, {
    change: setSlidePosition,
    position: slidePosition
  }));
};

Slider_Slider.propTypes = {
  data: (external_prop_types_default()).isRequired
};
ButtonSlide.propTypes = {
  button: (external_prop_types_default()).isRequired
};
Circle.propTypes = {
  type: (external_prop_types_default()).string.isRequired
};
Controlls.propTypes = {
  change: (external_prop_types_default()).func.isRequired,
  position: (external_prop_types_default()).number.isRequired
};
/* harmony default export */ const src_Slider = (Slider_Slider);
;// CONCATENATED MODULE: ./src/FirstText.css
/* harmony default export */ const FirstText = (__webpack_require__.p + "fceafe29d1fdbd0ceb7b1a1c030a8d5d.css");
;// CONCATENATED MODULE: ./src/FirstText.jsx



var FirstText_FirstText = function FirstText() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "first-text-container"
  }, /*#__PURE__*/external_react_default().createElement("h4", {
    className: "header"
  }, "RECIBIRTE NOS COMPLACE"), /*#__PURE__*/external_react_default().createElement("p", null, "Siempre hay una buena excusa para visitar el Louvre, ya sea", /*#__PURE__*/external_react_default().createElement("br", null), "para maravillarse ante sus ", /*#__PURE__*/external_react_default().createElement("u", null, "obras"), ", evadirse por un rato o dar", /*#__PURE__*/external_react_default().createElement("br", null), "rienda suelta a la imaginaci\xF3n. As\xED pues, es hora de ir", /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("u", null, "prepar\xE1ndose"), ". \xBFQu\xE9? \xBFAndas escaso de ideas? Echa un vistazo", /*#__PURE__*/external_react_default().createElement("br", null), "a nuestros ", /*#__PURE__*/external_react_default().createElement("u", null, "recorridos"), " y descubre los lugares m\xE1s emblem\xE1ticos", /*#__PURE__*/external_react_default().createElement("br", null), "del ", /*#__PURE__*/external_react_default().createElement("u", null, "palacio"), ". A no ser que prefieras adentrarte en los ", /*#__PURE__*/external_react_default().createElement("u", null, "jardines"), "."));
};

/* harmony default export */ const src_FirstText = (FirstText_FirstText);
;// CONCATENATED MODULE: ./src/First.css
/* harmony default export */ const First = (__webpack_require__.p + "44338d1374867032d8ef5fc7935c1179.css");
;// CONCATENATED MODULE: ./src/FirstSection.jsx





var FirstSection = function FirstSection() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "firstContainer"
  }, /*#__PURE__*/external_react_default().createElement("h1", {
    className: "firstTitle"
  }, "LO M\xC1S DESTACADO"), /*#__PURE__*/external_react_default().createElement(src_Slider, null), /*#__PURE__*/external_react_default().createElement(src_FirstText, null));
};

/* harmony default export */ const src_FirstSection = (FirstSection);
;// CONCATENATED MODULE: ./src/Parallax.css
/* harmony default export */ const Parallax = (__webpack_require__.p + "7f44eab79ce68ed4b944762e0ba73866.css");
;// CONCATENATED MODULE: ./src/Parallax.jsx



var Parallax_Parallax = function Parallax() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "parallax"
  });
};

/* harmony default export */ const src_Parallax = (Parallax_Parallax);
;// CONCATENATED MODULE: ./src/App.css
/* harmony default export */ const App = (__webpack_require__.p + "eff6cdc3797eaf4d7cecfa168ec61ad3.css");
;// CONCATENATED MODULE: ./src/App.jsx







var App_App = function App() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/external_react_default().createElement(src_NavBar, null), /*#__PURE__*/external_react_default().createElement(src_Video, null), /*#__PURE__*/external_react_default().createElement(src_FirstSection, null), /*#__PURE__*/external_react_default().createElement(src_Parallax, null), /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      height: '600px',
      width: '100%',
      backgroundColor: 'white'
    }
  }));
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
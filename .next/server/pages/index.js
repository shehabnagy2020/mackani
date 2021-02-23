module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cMU6");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cMU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./components/Footer/index.jsx




const Footer = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("footer", {
    className: "bg-black w-full p-10 space-y-5",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex items-center",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex-grow text-white flex flex-col space-y-2",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex items-center space-x-reverse space-x-1",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "material-icons",
            children: "location_on"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "",
            children: "\u0627\u0644\u0645\u0648\u0642\u0639"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "px-2 flex space-x-2 space-x-reverse",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "",
            children: "\u0627\u0644\u0631\u064A\u0627\u0636,"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "",
            children: "\u0634\u0627\u0631\u0639 \u0627\u0644\u0642\u0627\u062F\u064A\u0633\u064A\u0647,"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "",
            children: "\u062D\u064A \u0627\u0644\u064A\u0627\u0633\u0645\u064A\u0646"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "flex-grow"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "text-white text-sm lg:text-lg text-center",
      children: "\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \xA9 \u0645\u062D\u0641\u0648\u0638\u0647 \u0644\u0645\u0648\u0642\u0639 \u0645\u0643\u0627\u0646\u064A"
    })]
  });
};

/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./components/FloatingBar/index.jsx




const FloatingBar = ({
  image,
  text
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "flex justify-between items-center mr-auto w-11/12 lg:w-5/6",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: "/images/logo.png",
      alt: "",
      className: "flex-shrink w-1/3 lg:w-1/4 xl:w-1/5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "bg-primary text-white py-3 px-6 flex items-center space-x-3 space-x-reverse w-2/4 md:w-2/4 lg:w-2/5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: image,
        alt: "",
        className: "w-5 md:w-6 lg:w-8"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "text-xl md:text-2xl lg:text-3xl",
        children: text
      })]
    })]
  });
};

/* harmony default export */ var components_FloatingBar = (FloatingBar);
// CONCATENATED MODULE: ./components/ImageWithLayers/index.jsx




const ImageWithLayers = ({
  image,
  layers
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "absolute w-full h-full top-0 left-0",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "w-full h-full relative",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: image,
        alt: "",
        className: "absolute w-full h-full object-cover  top-0 left-0"
      }), layers.map((item, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: `absolute w-full h-full top-0 left-0 ${item}`
      }, i))]
    })
  });
};

/* harmony default export */ var components_ImageWithLayers = (ImageWithLayers);
// CONCATENATED MODULE: ./helper/CONST.js
// export const API = "http://localhost:3000";
const API = "https://cpanel.mackani.com";
// CONCATENATED MODULE: ./helper/removePublic.js


const removePublic = path => {
  let finalPath = API;
  path = path.replace("public", "");
  finalPath += path;
  return finalPath;
};

/* harmony default export */ var helper_removePublic = (removePublic);
// CONCATENATED MODULE: ./components/PricingItem/index.jsx






const PricingItem = ({
  item
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "flex flex-col rounded-lg relative w-7/12 md:w-4/12 lg:w-3/12 xl:w-60 shadow-lg",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "rounded-lg relative",
      style: {
        height: "250px"
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: helper_removePublic(item.image),
        alt: "",
        className: "absolute w-full h-full top-0 left-0"
      }), item && item.price && item.price != 0 && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "bg-black bg-opacity-75 absolute w-full h-full top-0 left-0"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "relative flex justify-center items-center h-full",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: "capitalize text-white text-4xl font-bold",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("sup", {
              className: "text-xl",
              children: "$"
            }), item.price]
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "absolute rounded-lg p-3 abs-center-x text-sm z-10",
        style: {
          backgroundColor: item.title_color,
          bottom: "-10%"
        },
        children: item.title
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex flex-col justify-center space-y-2 items-center bg-black rounded-b-lg relative p-4 pt-10",
      children: [item.text_1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "text-white capitalize",
        children: item.text_1
      }), item.text_2 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "text-white capitalize",
        children: item.text_2
      }), item.text_3 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "text-white capitalize",
        children: item.text_3
      }), item.text_4 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "text-white capitalize",
        children: item.text_4
      }), item.text_5 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "text-white capitalize",
        children: item.text_5
      }), item.text_6 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "text-white capitalize",
        children: item.text_6
      }), item.text_7 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "text-white capitalize",
        children: item.text_7
      }), item.text_8 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "text-white capitalize",
        children: item.text_8
      }), item.text_9 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "text-white capitalize",
        children: item.text_9
      })]
    })]
  });
};

/* harmony default export */ var components_PricingItem = (PricingItem);
// CONCATENATED MODULE: ./components/MainSections/EighthMainSection.jsx







const EighthMainSection = ({
  pricingData
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "w-screen min-h-screen flex relative py-32",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImageWithLayers, {
      image: "/images/image_7.png",
      layers: ["bg-black bg-opacity-90", "bg-black bg-opacity-80"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "relative text-white flex flex-col flex-grow space-y-20",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_FloatingBar, {
        text: "\u0628\u0627\u0642\u0627\u062A \u0645\u062A\u0645\u064A\u0632\u0647",
        image: "/images/icon_8.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "flex flex-col xl:flex-row items-center xl:items-start justify-center w-full h-full bg-gray-100 bg-opacity-30 space-y-9 xl:space-y-0 xl:space-x-9 xl:space-x-reverse py-7",
        children: pricingData && pricingData.map((item, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PricingItem, {
          item: item
        }, i))
      })]
    })]
  });
};

/* harmony default export */ var MainSections_EighthMainSection = (EighthMainSection);
// CONCATENATED MODULE: ./components/CardContainer/index.jsx





const CardContainer = ({
  text,
  image,
  children,
  icon
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "relative text-white flex flex-col flex-grow space-y-20",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_FloatingBar, {
      text: text,
      image: icon
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex flex-col xl:flex-row items-center justify-center mx-auto w-11/12 md:w-10/12 lg:w-3/5 h-full space-y-5 space-x-0 xl:space-x-5 xl:space-y-0 xl:space-x-reverse",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "h-full w-full rounded-lg border border-gray-500",
        children: children
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: image,
        alt: "",
        className: "w-full xl:w-1/3 h-full rounded-lg p-2 border border-gray-500"
      })]
    })]
  });
};

/* harmony default export */ var components_CardContainer = (CardContainer);
// CONCATENATED MODULE: ./components/MainSections/FifthMainSection.jsx






const FifthMainSection = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "w-screen min-h-screen flex relative py-36",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImageWithLayers, {
      image: "/images/image_4.png",
      layers: ["bg-blue-500 bg-opacity-50", "bg-black bg-opacity-80"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CardContainer, {
      text: "\u0627\u0644\u0635\u0628\u063A\u0627\u062A",
      image: "/images/image_4.png",
      icon: "/images/icon_4.png",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "text-white space-y-6 w-full h-full flex flex-col justify-center p-5",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex flex-col space-y-3",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "text-xl font-bold",
            children: "\u062A\u062D\u062A\u0627\u062C \u0635\u0628\u063A\u0627\u062A \u0639\u0635\u0631\u064A\u0647 \u0648\u0627\u0646\u064A\u0642\u0647 \u061F"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "text-xl",
            children: "\u0623\u0646\u0627\u0645\u0644 \u0645\u062D\u062A\u0631\u0641\u064A\u0646\u0627 \u062C\u0627\u0647\u0632\u0629 \u0644\u062A\u0646\u0641\u064A\u0630 \u0645\u0627 \u064A\u0637\u0644\u0628\u0647 \u0634\u0639\u0631\u0643"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "text-xl",
          children: "\u0623\u0644\u0642\u0650 \u0646\u0638\u0631\u0629 \u0639\u0644\u0649 \u0627\u062E\u062A\u064A\u0627\u0631\u0627\u062A\u0646\u0627 \u0627\u0644\u0645\u062E\u062A\u0644\u0641\u0629 \u0645\u0646 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0648\u0639\u0644\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0639\u0631 \u0648\u0627\u062E\u062A\u0631 \u0648\u0627\u062D\u062F\u0629 \u0623\u0648 \u0623\u0643\u062B\u0631 \u0645\u0646 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0646\u0627\u0633\u0628 \u0634\u0639\u0631\u0643:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
          className: "list-disc list-inside",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: "",
            children: "\u0641\u0640\u0640\u0640\u0631\u062F \u0648\u062A\u0646\u0639\u064A\u0640\u0645 \u0627\u0644\u0634\u0639\u0640\u0631"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: "",
            children: "\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0634\u0639\u0631 \u0628\u0627\u0644\u0632\u064A\u062A"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: "",
            children: "\u0623\u0644\u0640\u0648\u0627\u0646 \u0635\u0628\u063A\u0640\u0627\u062A \u0644\u0644\u0634\u0639\u0640\u0631"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: "",
            children: "\u0623\u0644\u0640\u0648\u0627\u0646 \u0627\u0644\u0634\u0639\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: "",
            children: "\u0623\u0644\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0648\u0627\u0646 \u0627\u0644\u0640\u0640\u0644\u0640\u0640\u062D\u0640\u0640\u0640\u064A\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0629"
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ var MainSections_FifthMainSection = (FifthMainSection);
// CONCATENATED MODULE: ./components/MainSections/FirstMainSection.jsx





const FirstMainSection = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "w-full h-full relative flex items-center",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImageWithLayers, {
      image: "/images/image_1.png",
      layers: ["bg-black bg-opacity-90", "bg-black bg-opacity-20"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "relative w-full text-white flex flex-col items-center space-y-28 px-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "text-lg md:text-xl lg:text-2xl font-semibold",
        children: "\u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/images/logo.png",
        alt: "",
        className: "w-4/6 md:w-3/6 xl:w-3/12"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex flex-col items-center space-y-6",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: "text-xl md:text-2xl lg:text-4xl font-bold",
          children: "\u062C\u0627\u0630\u0628\u064A\u062A\u0643 \u0643\u0631\u062C\u0644 \u0644\u062F\u064A \u0645\u0643\u0627\u0646\u064A"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "text-sm md:text-base lg:text-xl font-medium text-center leading-6",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "",
            children: "\u064A\u0642\u062F\u0645 \u0635\u0627\u0644\u0648\u0646 \u0645\u0643\u0627\u0646\u064A \u062A\u062C\u0631\u0628\u0629 \u062D\u0644\u0627\u0642\u0629 \u0623\u0646\u064A\u0642\u0629 \u0625\u0644\u0649 \u062C\u0627\u0646\u0628 \u0645\u062E\u062A\u0644\u0641 \u0645\u0646 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0648\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0628\u0627\u0644\u0631\u062C\u0644 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "",
            children: "\u0623\u0631\u0642\u0649 \u0648\u0623\u0643\u062B\u0640\u0640\u0640\u0631 \u0637\u0640\u0640\u0631\u0642 \u0627\u0644\u062D\u0644\u0627\u0642\u0640\u0629 \u0625\u0628\u062A\u0643\u0627\u0631\u064B\u0627\u060C \u0633\u064A\u0633\u0627\u0639\u062F\u0643 \u0623\u0645\u0647\u0631 \u0627\u0644\u062D\u0644\u0627\u0642\u064A\u0646 \u0644\u062F\u064A\u0646\u0627 \u0641\u064A \u0625\u0643\u062A\u0645\u0640\u0640\u0627\u0644 \u0637\u0644\u062A\u0640\u0643 \u0627\u0644\u0631\u062C\u0648\u0644\u064A\u0640\u0640\u0629 \u0627\u0644\u062C\u0630\u0627\u0628\u0640\u0640\u0640\u0640\u0629."
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ var MainSections_FirstMainSection = (FirstMainSection);
// CONCATENATED MODULE: ./components/MainSections/FourthMainSection.jsx






const FourthMainSection = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "w-screen min-h-screen flex relative py-36",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImageWithLayers, {
      image: "/images/image_3.png",
      layers: ["bg-blue-500 bg-opacity-50", "bg-black bg-opacity-80"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CardContainer, {
      text: "\u062D\u0644\u0627\u0642\u0629 \u0627\u0644\u0630\u0642\u0646",
      image: "/images/image_3.png",
      icon: "/images/icon_3.png",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "text-white space-y-5 w-full h-full flex flex-col justify-center p-5",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "text-center text-xl",
          children: "\u0623\u0646\u062A \u0627\u0644\u0622\u0646 \u0641\u064A \u0627\u0644\u0645\u0643\u0627\u0646 \u0627\u0644\u0623\u0646\u0633\u0628 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u062D\u0644\u0627\u0642\u0629 \u062C\u0630\u0627\u0628\u0629 \u0644\u0644\u062D\u064A\u062A\u0643. \u0633\u064A\u0636\u0645\u0646 \u0627\u0644\u0645\u0627\u0647\u0631\u0648\u0646 \u0644\u062F\u064A\u0646\u0627 \u062A\u062C\u0647\u064A\u0632 \u0628\u0634\u0631\u062A\u0643 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D \u0642\u0628\u0644 \u0627\u0644\u062D\u0640\u0640\u0640\u0640\u0644\u0627\u0642\u0640\u0640\u0640\u0640\u0629 \u0628\u0627\u0633\u0640\u062A\u0640\u0640\u062E\u0640\u0640\u0640\u0640\u062F\u0627\u0645 \u0623\u0641\u0636\u0640\u0640\u0640\u0640\u0644 \u0627\u0644\u0640\u0645\u0640\u0646\u0640\u0640\u062A\u0640\u0640\u0640\u062C\u0640\u0640\u0640\u0640\u0640\u0627\u062A \u0641\u064A \u0627\u0644\u0633\u0640\u0640\u0640\u0640\u0640\u0640\u0648\u0642. \u0645\u0646 \u0627\u0644\u0636\u0631\u0648\u0631\u064A \u062A\u0647\u064A\u0626\u0629 \u0628\u0634\u0631\u062A\u0643 \u0642\u0628\u0644 \u0627\u0644\u062D\u0644\u0627\u0642\u0629 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u062D\u0644\u0627\u0642\u0629 \u062E\u0627\u0644\u064A\u0629 \u0645\u0646 \u0627\u0644\u0628\u062B\u0648\u0631\u060C \u0645\u0639 \u062A\u0631\u0643 \u0627\u0644\u0628\u0634\u0631\u0629 \u0628\u062F\u0648\u0646 \u0627\u0644\u062A\u0639\u0631\u0636 \u0644\u0623\u064A \u0636\u0631\u0631 \u0628\u0639\u062F \u0630\u0644\u0643. \u0644\u0630\u0627\u060C \u062F\u0639\u0648\u0646\u0627 \u0646\u0642\u0648\u0644 \u0648\u062F\u0627\u0639\u064B\u0627 \u0644\u0644\u062D\u0628\u0648\u0628 \u0648\u0627\u0644\u062D\u0643!"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "text-center text-xl",
          children: "\u0623\u0644\u0642\u0650 \u0646\u0638\u0631\u0629 \u0639\u0644\u0649 \u0645\u062C\u0645\u0648\u0639\u0629 \u0628\u0627\u0642\u0627\u062A \u062D\u0644\u0627\u0642\u0629 \u0627\u0644\u0644\u062D\u064A\u0629 \u0645\u0646 \u0645\u0643\u0627\u0646\u064A \u0648\u0627\u062E\u062A\u0631 \u0623\u0641\u0636\u0644 \u0645\u0627 \u064A\u0646\u0627\u0633\u0628 \u0634\u062E\u0635\u064A\u062A\u0643 \u0648\u0625\u0637\u0644\u0627\u0644\u062A\u0643"
        })]
      })
    })]
  });
};

/* harmony default export */ var MainSections_FourthMainSection = (FourthMainSection);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");

// CONCATENATED MODULE: ./helper/convertToFormData.js


const convertToFormData = object => {
  const formData = new FormData();

  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      formData.append(property, object[property]);
    }
  }

  return formData;
};

/* harmony default export */ var helper_convertToFormData = (convertToFormData);
// CONCATENATED MODULE: ./components/MainSections/NinethMainSection.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const NinethMainSection = () => {
  const {
    0: info,
    1: setInfo
  } = Object(external_react_["useState"])({
    name: "",
    phone: "",
    type: "قص الشعر",
    date: "",
    time: ""
  });
  const {
    0: loader,
    1: setLoader
  } = Object(external_react_["useState"])(false);

  const handleChange = (id, value) => {
    setInfo(_objectSpread(_objectSpread({}, info), {}, {
      [id]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(info.phone);

    if (!info.name || !info.phone || !info.date) {
      alert("برجاء ملئ جميع البيانات");
      return;
    }

    if (info.phone.length !== 9) {
      alert("برجاء ادخال رقم هاتف صحيح");
      return;
    }

    setLoader(true);

    try {
      const res = await external_axios_default()({
        baseURL: API,
        url: "/api/reservation/add",
        method: "POST",
        data: helper_convertToFormData(info)
      });
      setLoader(false);
      alert("لقد تم حجز الموعد");
    } catch (error) {
      console.log(error.response);
      setLoader(false);
      if (error.response && error.response.data && error.response.data.msg) alert(error.response.data.msg);else alert("فشل حجز الموعد حاول من جديد");
    }
  };

  const handleDate = value => {
    console.log(value);
    setInfo(_objectSpread(_objectSpread({}, info), {}, {
      date: value
    }));
  };

  const handleTime = value => {
    setInfo(_objectSpread(_objectSpread({}, info), {}, {
      time: value
    }));
  };

  const types = [{
    id: 1,
    name: "الباقه الفضيه",
    value: "الباقه الفضيه"
  }, {
    id: 2,
    name: "الباقه الذهبيه",
    value: "الباقه الذهبيه"
  }, {
    id: 3,
    name: "الباقه البرونزيه",
    value: "الباقه البرونزيه"
  }, {
    id: 4,
    name: "قص الشعر",
    value: "قص الشعر"
  }, {
    id: 5,
    name: "حلاقة الذقن",
    value: "حلاقة الذقن"
  }, {
    id: 6,
    name: "الصبغات",
    value: "الصبغات"
  }, {
    id: 7,
    name: "معالجات الشعر",
    value: "معالجات الشعر"
  }, {
    id: 8,
    name: "تدليك الوجه",
    value: "تدليك الوجه"
  }, {
    id: 9,
    name: "العنايه باليدين والقدمين",
    value: "العنايه باليدين والقدمين"
  }];
  console.log(info);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "w-screen min-h-screen flex relative py-32",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImageWithLayers, {
      image: "/images/image_1.png",
      layers: ["bg-black bg-opacity-90", "bg-black bg-opacity-30"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "relative text-white flex flex-col flex-grow space-y-20",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_FloatingBar, {
        text: "\u0627\u062D\u062C\u0632 \u0645\u0648\u0639\u062F",
        image: "/images/icon_9.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        onSubmit: handleSubmit,
        className: "flex flex-col items-center justify-center w-full h-full bg-gray-100 bg-opacity-30 space-y-9 py-9",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex flex-col text-gray-500 xl:flex-row w-full items-center justify-center space-y-9 xl:space-y-0 xl:space-x-9 xl:space-x-reverse",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-10/12 lg:w-8/12 xl:w-2/12",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              onChange: e => handleChange("name", e.target.value),
              type: "text",
              placeholder: "\u0627\u062F\u062E\u0644 \u0627\u0633\u0645\u0643",
              className: "p-3 w-full border-gray-500 rounded-lg"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "w-10/12 lg:w-8/12 xl:w-2/12 flex items-center p-3 border-gray-500 rounded-lg bg-white outline-none space-x-2 space-x-reverse",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              onChange: e => handleChange("phone", e.target.value),
              type: "number",
              placeholder: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641\u0643",
              className: " w-full ",
              minLength: "10"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "",
              children: "+966"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-10/12 lg:w-8/12 xl:w-2/12",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
              className: "p-3 w-full border-gray-500 rounded-lg",
              onChange: e => handleChange("type", e.target.value),
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                value: "",
                children: "\u0646\u0648\u0639 \u0627\u0644\u062E\u062F\u0645\u0647"
              }), types.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                value: item.value,
                children: item.name
              }, item.id))]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-10/12 lg:w-8/12 xl:w-2/12",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "w-full flex space-x-3 space-x-reverse items-center p-3 text-right border-gray-500 rounded-lg text-gray-500 bg-white",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
                className: "flex-shrink-0",
                onChange: e => handleTime(e.target.value),
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                  value: "",
                  children: "\u0627\u0644\u0633\u0627\u0639\u0647"
                }), ["9 Am", "10 Am", "11 Am", "12 Pm", "1 Pm", "2 Pm", "3 Pm", "4 Pm", "5 Pm", "6 Pm", "7 Pm", "8 Pm", "9 Pm", "10 Pm", "11 Pm"].map(i => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                  value: i,
                  children: i
                }))]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                onChange: e => handleDate(e.target.value),
                type: "date",
                placeholder: "\u0627\u062F\u062E\u0644 \u0627\u0644\u0645\u064A\u0639\u0627\u062F",
                className: "flex-grow"
              })]
            })
          })]
        }), loader ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "animate-ping bg-secondary w-6 h-6 rounded-full"
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: "p-3 rounded-lg bg-secondary hover:bg-primary w-10/12 lg:w-8/12 xl:w-2/12",
          children: "\u0627\u062D\u062C\u0632 \u0645\u0639\u0646\u0627"
        })]
      })]
    })]
  });
};

/* harmony default export */ var MainSections_NinethMainSection = (NinethMainSection);
// CONCATENATED MODULE: ./components/ServiceItem/index.jsx




const ServiceItem = ({
  item
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "border border-gray-500 rounded-xl bg-secondary bg-opacity-40 p-8 flex flex-col justify-center items-center space-y-8",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: item.image,
      alt: "",
      className: "w-12 lg:w-12"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: "text-white text-xl lg:text-2xl text-center",
      children: item.text
    })]
  });
};

/* harmony default export */ var components_ServiceItem = (ServiceItem);
// CONCATENATED MODULE: ./components/MainSections/SecondMainSection.jsx






const services = [{
  id: 1,
  image: "/images/icon_2.png",
  text: "قص الشعر"
}, {
  id: 2,
  image: "/images/icon_3.png",
  text: "حلاقة الذقن"
}, {
  id: 3,
  image: "/images/icon_4.png",
  text: "الصبغات"
}, {
  id: 4,
  image: "/images/icon_5.png",
  text: "معالجات الشعر"
}, {
  id: 5,
  image: "/images/icon_6.png",
  text: "تدليك الوجه (الماسك)"
}, {
  id: 6,
  image: "/images/icon_7.png",
  text: "العنايه باليدين والقدمين"
}];

const SecondMainSection = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "w-full min-h-full relative py-36",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImageWithLayers, {
      image: "/images/image_1.png",
      layers: ["bg-blue-500 bg-opacity-50", "bg-black bg-opacity-70"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "relative text-white flex flex-col w-full space-y-20",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_FloatingBar, {
        text: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A",
        image: "/images/icon_1.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto w-4/6",
        children: services.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ServiceItem, {
          ket: item.id,
          item: item
        }))
      })]
    })]
  });
};

/* harmony default export */ var MainSections_SecondMainSection = (SecondMainSection);
// CONCATENATED MODULE: ./components/MainSections/SeventhMainSection.jsx






const SeventhMainSection = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "w-screen min-h-screen flex relative py-36",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImageWithLayers, {
      image: "/images/image_6.png",
      layers: ["bg-blue-500 bg-opacity-50", "bg-black bg-opacity-80"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CardContainer, {
      text: "\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0628\u0627\u0644\u064A\u062F\u064A\u0646 \u0648\u0627\u0644\u0642\u062F\u0645\u064A\u0646",
      image: "/images/image_6.png",
      icon: "/images/icon_7.png",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "text-white space-y-5 w-full h-full flex flex-col justify-center p-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "text-center text-xl",
          children: "\u0645\u0627 \u0639\u0644\u0640\u0640\u064A\u0640\u0640\u0640\u0640\u0643 \u0633\u0640\u0640\u0648\u0649 \u0627\u0644\u0627\u0633\u062A\u0640\u0640\u0640\u0631\u062E\u0640\u0640\u0640\u0627\u0621 \u0648\u062F\u0639\u0640\u0646\u0640\u0640\u0627 \u0646\u0647\u0640\u0640\u0640\u062A\u0640\u0640\u0640\u0645 \u0628\u0640\u0640\u0643. \u0633\u064A\u0633\u0627\u0639\u062F\u0643 \u062E\u0628\u0631\u0627\u0624\u0646\u0627 \u0641\u064A \u062A\u062D\u0633\u064A\u0646 \u0635\u062D\u0629 \u0623\u0638\u0627\u0641\u0631\u0643 \u0648\u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u064A\u0647\u0627 \u0628\u0641\u0636\u0644 \u0623\u0633\u0627\u0644\u064A\u0640\u0628 \u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0641\u0627\u0626\u0642\u0640\u0640\u0640\u0629 \u0628\u0627\u0644\u064A\u062F\u064A\u0640\u0640\u0640\u0646 \u0648\u0627\u0644\u0642\u062F\u0645\u064A\u0646 \u0627\u0644\u062A\u064A \u0646\u0640\u0640\u0642\u0640\u0640\u062F\u0645\u0647\u0640\u0640\u0627 \u0644\u062A\u062D\u0640\u0640\u0635\u0640\u0640\u0640\u0644 \u0639\u0644\u0649 \u0645\u0638\u0647\u0631 \u0623\u0643\u062B\u0640\u0640\u0640\u0640\u0631 \u0627\u062D\u062A\u0640\u0640\u0631\u0627\u0641\u0640\u0640\u064A\u0640\u0640\u0640\u0640\u0629 \u0648\u0646\u0640\u0640\u0638\u0640\u0640\u0640\u0627\u0641\u0640\u0640\u0640\u0640\u0629."
        })
      })
    })]
  });
};

/* harmony default export */ var MainSections_SeventhMainSection = (SeventhMainSection);
// CONCATENATED MODULE: ./components/MainSections/SixthMainSection.jsx






const SixthMainSection = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "w-screen min-h-screen flex relative py-36",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImageWithLayers, {
      image: "/images/image_5.png",
      layers: ["bg-blue-500 bg-opacity-50", "bg-black bg-opacity-80"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CardContainer, {
      text: "\u062A\u062F\u0644\u064A\u0643 \u0627\u0644\u0648\u062C\u0647",
      image: "/images/image_5.png",
      icon: "/images/icon_6.png",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "text-white space-y-5 w-full h-full flex flex-col justify-center p-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "text-center text-xl",
          children: "\u064A\u0633\u062A\u062D\u0642 \u0648\u062C\u0647\u0643 \u0644\u0645\u0633\u0627\u062A \u062A\u062F\u0644\u064A\u0644 \u062E\u0627\u0635\u0629\u060C \u064A\u062A\u0639\u0631\u0636 \u0627\u0644\u0648\u062C\u0647 \u0627\u0644\u0628\u0634\u0631\u064A \u0644\u0634\u0648\u0627\u0626\u0628 \u0643\u062B\u064A\u0631\u0629 \u0643\u0644 \u064A\u0648\u0645\u060C \u0648\u0644\u0644\u0623\u0634\u0639\u0629 \u0641\u0648\u0642 \u0627\u0644\u0628\u0646\u0641\u0633\u062C\u064A\u0629 \u0648\u0627\u0644\u063A\u0628\u0627\u0631 \u0648\u0627\u0644\u0623\u062A\u0631\u0628\u0629\u060C \u0646\u062F\u0639\u0648\u0643 \u0625\u0644\u0649 \u0632\u064A\u0627\u0631\u062A\u0646\u0627 \u0648\u0627\u062E\u062A\u064A\u0627\u0631 \u0623\u062D\u062F \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0628\u0627\u0644\u0648\u062C\u0647 \u0627\u0644\u0645\u0640\u0646\u0640\u0640\u0639\u0640\u0640\u0634\u0640\u0640\u0640\u0640\u0629 \u0644\u0640\u062A\u0640\u0640\u0639\u0640\u0640\u064A\u0640\u0640\u0640\u0640\u062F \u0625\u0644\u064A\u0640\u0640\u0640\u0647 \u0628\u0640\u0631\u064A\u0640\u0642\u0640\u0640\u0640\u0647 \u0648\u062A\u0640\u0640\u0640\u0648\u0647\u0640\u0640\u062C\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0647."
        })
      })
    })]
  });
};

/* harmony default export */ var MainSections_SixthMainSection = (SixthMainSection);
// CONCATENATED MODULE: ./components/PersonCard/index.jsx





const PersonCard = ({
  item
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "flex flex-col space-y-3 items-center",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: helper_removePublic(item.image),
      alt: "",
      className: "w-full h-96 p-2 border border-gray-500 rounded-lg"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: "text-white text-2xl font-bold",
      children: item.name
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: "text-white text-md",
      children: item.job
    })]
  });
};

/* harmony default export */ var components_PersonCard = (PersonCard);
// CONCATENATED MODULE: ./components/MainSections/TenthMainSection.jsx








const TenthMainSection = ({
  teamMembersData
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "w-screen min-h-screen flex relative py-32",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImageWithLayers, {
      image: "/images/image_2.png",
      layers: ["bg-black bg-opacity-90", "bg-black bg-opacity-30"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "relative text-white flex flex-col flex-grow space-y-20",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_FloatingBar, {
        text: "\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u0641\u0631\u064A\u0642",
        image: "/images/icon_10.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto w-11/12 md:w-10/12 lg:w-3/5`,
        children: teamMembersData && teamMembersData.map((item, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PersonCard, {
          item: item
        }, i))
      })]
    })]
  });
};

/* harmony default export */ var MainSections_TenthMainSection = (TenthMainSection);
// CONCATENATED MODULE: ./components/MainSections/ThirdMainSection.jsx






const ThirdMainSection = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "w-screen min-h-screen flex relative py-36",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImageWithLayers, {
      image: "/images/image_2.png",
      layers: ["bg-blue-500 bg-opacity-50", "bg-black bg-opacity-80"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CardContainer, {
      text: "\u0642\u0635 \u0627\u0644\u0634\u0639\u0631",
      image: "/images/image_2.png",
      icon: "/images/icon_2.png",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "text-white space-y-5 w-full h-full flex flex-col justify-center p-5",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "text-center text-xl",
          children: "\u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0645\u0646 \u064A\u0647\u062A\u0645 \u0628\u0645\u0638\u0647\u0631\u0647 \u0648\u062A\u0631\u064A\u062F \u0645\u0648\u0627\u0643\u0628\u0629 \u0623\u062D\u062F\u062B \u0642\u0635\u0627\u062A \u0627\u0644\u0634\u0639\u0631 \u0648\u0627\u0644\u0645\u0648\u0636\u0640\u0640\u0629 \u0645\u0639 \u0627\u0644\u062D\u0631\u0635 \u0639\u0644\u0649 \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u062E\u062F\u0645\u0629 \u0647\u064A \u0627\u0644\u0623\u0643\u062B\u0631 \u0623\u0646\u0627\u0642\u0640\u0640\u0640\u0629. \u0625\u0630\u0627 \u0644\u0627 \u062A\u0640\u0628\u0640\u0640\u062D\u0640\u0640\u062B \u0628\u0639\u062F \u0627\u0644\u0622\u0646!"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "text-center text-xl",
          children: "\u0635\u0627\u0644\u0648\u0646 \u0645\u0643\u0627\u0646\u064A\u060C \u064A\u0642\u062F\u0645 \u0644\u0643 \u0643\u0644 \u0645\u0627 \u062A\u0633\u062A\u062D\u0642\u0647 \u0627\u0646\u0627\u0642\u062A\u0643 \u0648\u0628\u0645\u0627 \u064A\u0644\u064A\u0642 \u0628\u0643\u060C \u0643\u0645\u0627 \u0646\u0633\u062A\u062E\u062F\u0645 \u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0644\u0644\u0639\u0646\u0627\u064A\u0629 \u0628\u0631\u062C\u0644 ."
        })]
      })
    })]
  });
};

/* harmony default export */ var MainSections_ThirdMainSection = (ThirdMainSection);
// CONCATENATED MODULE: ./pages/index.jsx
















function Home({
  pricingData,
  teamMembersData
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
    className: "w-screen h-screen overflow-hidden overflow-y-auto",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(MainSections_FirstMainSection, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MainSections_SecondMainSection, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MainSections_ThirdMainSection, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MainSections_FourthMainSection, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MainSections_FifthMainSection, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MainSections_SixthMainSection, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MainSections_SeventhMainSection, {}), pricingData && pricingData.length >= 1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(MainSections_EighthMainSection, {
      pricingData: pricingData
    }), teamMembersData && teamMembersData.length >= 1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(MainSections_TenthMainSection, {
      teamMembersData: teamMembersData
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MainSections_NinethMainSection, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Footer, {})]
  });
}
const getServerSideProps = async ({
  res
}) => {
  const pricingData = await external_axios_default()({
    baseURL: API,
    url: "/api/pricing",
    method: "GET"
  });
  const teamMembersData = await external_axios_default()({
    baseURL: API,
    url: "/api/team-member",
    method: "GET"
  });
  return {
    props: {
      pricingData: pricingData.data,
      teamMembersData: teamMembersData.data
    }
  };
};

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
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
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/components/HTML.js":
/*!***************************************!*\
  !*** ./src/server/components/HTML.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar HTML = function HTML(_ref) {\n  var children = _ref.children,\n      _ref$css = _ref.css,\n      css = _ref$css === void 0 ? [] : _ref$css,\n      _ref$scripts = _ref.scripts,\n      scripts = _ref$scripts === void 0 ? [] : _ref$scripts,\n      helmet = _ref.helmetContext.helmet;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"html\", {\n    lang: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"head\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    charSet: \"utf-8\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1\"\n  }), helmet.base.toComponent(), helmet.title.toComponent(), helmet.meta.toComponent(), helmet.link.toComponent(), helmet.script.toComponent(), css.filter(Boolean).map(function (href) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n      key: href,\n      rel: \"stylesheet\",\n      href: href\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"body\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"root\",\n    dangerouslySetInnerHTML: {\n      __html: children\n    }\n  }), scripts.filter(Boolean).map(function (src) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      key: src,\n      src: src\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HTML);\n\n//# sourceURL=webpack:///./src/server/components/HTML.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chalk */ \"chalk\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express_manifest_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-manifest-helpers */ \"express-manifest-helpers\");\n/* harmony import */ var express_manifest_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_manifest_helpers__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _middlewares_reactSSR__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/reactSSR */ \"./src/server/middlewares/reactSSR.js\");\n/* harmony import */ var _webpack_paths__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../webpack/paths */ \"./webpack/paths.js\");\n/* harmony import */ var _webpack_paths__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_webpack_paths__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(_webpack_paths__WEBPACK_IMPORTED_MODULE_7___default.a.publicPath, express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_0___default.a.join(_webpack_paths__WEBPACK_IMPORTED_MODULE_7___default.a.clientBuild, _webpack_paths__WEBPACK_IMPORTED_MODULE_7___default.a.publicPath)));\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.urlencoded({\n  extended: true\n})); // const manifestPath = path.join(paths.clientBuild, paths.publicPath);\n// app.use(\n//   manifestHelpers({\n//     manifestPath: `${manifestPath}/manifest.json`,\n//   })\n// );\n\napp.use(Object(_middlewares_reactSSR__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\napp.listen(9981, function () {\n  console.log(\"[\".concat(new Date().toISOString(), \"]\"), chalk__WEBPACK_IMPORTED_MODULE_3___default.a.blue(\"App is running: http://localhost:9981\"));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/middlewares/reactSSR.js":
/*!********************************************!*\
  !*** ./src/server/middlewares/reactSSR.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet-async */ \"react-helmet-async\");\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/App */ \"./src/shared/App.js\");\n/* harmony import */ var _components_HTML__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HTML */ \"./src/server/components/HTML.js\");\n\n\n\n\n\n\nvar helmetContext = {};\nvar routerContext = {};\n\nvar reactSSR = function reactSSR() {\n  return function (req, res) {\n    console.log('req', res.locals);\n    var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n      location: req.url\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_3__[\"HelmetProvider\"], {\n      context: helmetContext\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\n    return res.send('<!doctype html>' + Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      helmetContext: helmetContext // css={[res.locals.assetPath('bundle.css'), res.locals.assetPath('vendor.css')]}\n      // scripts={[res.locals.assetPath('bundle.js'), res.locals.assetPath('vendor.js')]}\n\n    }, content)));\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reactSSR);\n\n//# sourceURL=webpack:///./src/server/middlewares/reactSSR.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/shared/router.js\");\n\n\n\n\nvar NotFound = function NotFound() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"404 Not Found\");\n};\n\nvar renderRoutes = function renderRoutes(routes) {\n  if (!routes) {\n    return null;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, routes.map(function (route, i) {\n    var path = route.path,\n        component = route.component,\n        _routes = route.routes,\n        redirect = route.redirect;\n    var isExact = !_routes;\n    var childRoutes = _routes ? renderRoutes(_routes) : null;\n\n    if (redirect) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n        exact: true,\n        key: route.key || i,\n        from: path,\n        to: redirect\n      });\n    }\n\n    if (component) {\n      var RouteComponent = function RouteComponent(props) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"component\", props, childRoutes);\n      };\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        key: route.key || i,\n        path: path,\n        exact: isExact,\n        sensitive: true,\n        component: RouteComponent\n      });\n    }\n\n    var BlankComponet = function BlankComponet() {\n      return childRoutes;\n    };\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      key: route.key || i,\n      path: path,\n      exact: isExact,\n      sensitive: true,\n      component: BlankComponet\n    });\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    component: NotFound\n  }));\n};\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, _router__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      key: item.path,\n      path: item.path,\n      exact: true,\n      sensitive: true,\n      component: item.component\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/pages/about/About.js":
/*!*****************************************!*\
  !*** ./src/shared/pages/about/About.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar About = function About(props) {\n  var count = props.count;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"this is build by react ssr, count is \", count);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./src/shared/pages/about/About.js?");

/***/ }),

/***/ "./src/shared/pages/about/index.js":
/*!*****************************************!*\
  !*** ./src/shared/pages/about/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About */ \"./src/shared/pages/about/About.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_About__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/shared/pages/about/index.js?");

/***/ }),

/***/ "./src/shared/pages/home/Home.js":
/*!***************************************!*\
  !*** ./src/shared/pages/home/Home.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Home = function Home(props) {\n  var _props$count = props.count,\n      count = _props$count === void 0 ? 1 : _props$count;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"home page, count is \", count, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return console.log('click');\n    }\n  }, \"\\u6309\\u94AE\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/shared/pages/home/Home.js?");

/***/ }),

/***/ "./src/shared/pages/home/index.js":
/*!****************************************!*\
  !*** ./src/shared/pages/home/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/shared/pages/home/Home.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/shared/pages/home/index.js?");

/***/ }),

/***/ "./src/shared/router.js":
/*!******************************!*\
  !*** ./src/shared/router.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/shared/pages/home/index.js\");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/about */ \"./src/shared/pages/about/index.js\");\n\n\nvar routes = [{\n  path: '/',\n  icon: 'home',\n  name: '首页',\n  component: _pages_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/home',\n  icon: 'home',\n  name: '首页',\n  component: _pages_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/demo',\n  icon: 'appstore',\n  name: '关于',\n  component: _pages_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/shared/router.js?");

/***/ }),

/***/ "./webpack/paths.js":
/*!**************************!*\
  !*** ./webpack/paths.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar appDirectory = fs.realpathSync(process.cwd());\n\nvar resolveApp = function resolveApp(relativePath) {\n  return path.resolve(appDirectory, relativePath);\n};\n\nvar paths = {\n  appHtml: resolveApp('webpack/index.html'),\n  clientEntry: resolveApp('src/client/index.js'),\n  serverEntry: resolveApp('src/server/index.js'),\n  clientBuild: resolveApp('build/client'),\n  serverBuild: resolveApp('build/server'),\n  src: resolveApp('src'),\n  srcClient: resolveApp('src/client'),\n  srcServer: resolveApp('src/server'),\n  srcShared: resolveApp('src/shared'),\n  publicPath: '/static/'\n};\npaths.resolveModules = [paths.srcClient, paths.srcServer, paths.srcShared, paths.src, 'node_modules'];\nmodule.exports = paths;\n\n//# sourceURL=webpack:///./webpack/paths.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n\n//# sourceURL=webpack:///external_%22chalk%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-manifest-helpers":
/*!*******************************************!*\
  !*** external "express-manifest-helpers" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-manifest-helpers\");\n\n//# sourceURL=webpack:///external_%22express-manifest-helpers%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet-async":
/*!*************************************!*\
  !*** external "react-helmet-async" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet-async\");\n\n//# sourceURL=webpack:///external_%22react-helmet-async%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });
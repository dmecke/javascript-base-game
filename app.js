/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Game = __webpack_require__(1);
	
	var _Game2 = _interopRequireDefault(_Game);
	
	var _LevelScreen = __webpack_require__(4);
	
	var _LevelScreen2 = _interopRequireDefault(_LevelScreen);
	
	var _MenuScreen = __webpack_require__(6);
	
	var _MenuScreen2 = _interopRequireDefault(_MenuScreen);
	
	var _Player = __webpack_require__(10);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	var _Vector = __webpack_require__(9);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Canvas = __webpack_require__(3);
	
	var _Canvas2 = _interopRequireDefault(_Canvas);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(14);
	
	var game = new _Game2.default(new _Vector2.default(_Canvas2.default.width, _Canvas2.default.height));
	
	new _MenuScreen2.default(game).activate();
	new _LevelScreen2.default(game).player = new _Player2.default(new _Vector2.default(100, 100));
	
	game.run();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Context_1 = __webpack_require__(2);
	var Canvas_1 = __webpack_require__(3);
	var Game = (function () {
	    function Game(dimensions) {
	        this.screens = [];
	        this.dimensions = dimensions;
	    }
	    Game.prototype.run = function () {
	        setInterval(this.update.bind(this), 1 / Game.FPS);
	        setInterval(this.render.bind(this), 1 / Game.FPS);
	    };
	    Game.prototype.update = function () {
	        this.screens.forEach(function (screen) {
	            if (screen.isActive) {
	                screen.update();
	            }
	        });
	    };
	    Game.prototype.render = function () {
	        Context_1["default"].clearRect(0, 0, Canvas_1["default"].width, Canvas_1["default"].height);
	        this.screens.forEach(function (screen) {
	            if (screen.isActive) {
	                screen.render();
	            }
	        });
	    };
	    Game.FPS = 30;
	    return Game;
	})();
	exports.__esModule = true;
	exports["default"] = Game;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Canvas_1 = __webpack_require__(3);
	var Context = Canvas_1["default"].getContext('2d');
	exports.__esModule = true;
	exports["default"] = Context;


/***/ },
/* 3 */
/***/ function(module, exports) {

	var canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	exports.__esModule = true;
	exports["default"] = canvas;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var GameScreen_1 = __webpack_require__(5);
	var LevelScreen = (function (_super) {
	    __extends(LevelScreen, _super);
	    function LevelScreen() {
	        _super.apply(this, arguments);
	    }
	    LevelScreen.prototype.update = function () {
	        this.player.update();
	    };
	    LevelScreen.prototype.render = function () {
	        this.player.render();
	    };
	    return LevelScreen;
	})(GameScreen_1["default"]);
	exports.__esModule = true;
	exports["default"] = LevelScreen;


/***/ },
/* 5 */
/***/ function(module, exports) {

	var GameScreen = (function () {
	    function GameScreen(game) {
	        this.isActive = false;
	        this.game = game;
	        this.game.screens.push(this);
	    }
	    GameScreen.prototype.activate = function () {
	        this.isActive = true;
	    };
	    GameScreen.prototype.deactivate = function () {
	        this.isActive = false;
	    };
	    return GameScreen;
	})();
	exports.__esModule = true;
	exports["default"] = GameScreen;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var GameScreen_1 = __webpack_require__(5);
	var Text_1 = __webpack_require__(7);
	var LevelScreen = (function (_super) {
	    __extends(LevelScreen, _super);
	    function LevelScreen() {
	        _super.apply(this, arguments);
	    }
	    LevelScreen.prototype.update = function () {
	    };
	    LevelScreen.prototype.render = function () {
	        new Text_1["default"]('Javascript Base Game')
	            .at(this.game.dimensions.divide(2))
	            .withFillStyle('blue')
	            .draw();
	    };
	    return LevelScreen;
	})(GameScreen_1["default"]);
	exports.__esModule = true;
	exports["default"] = LevelScreen;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Context_1 = __webpack_require__(2);
	var Shape_1 = __webpack_require__(8);
	var Text = (function (_super) {
	    __extends(Text, _super);
	    function Text(content) {
	        _super.call(this);
	        this.fontSize = 12;
	        this.font = 'Oswald';
	        this.textAlign = 'center';
	        this.lineHeight = 38;
	        this.content = content;
	    }
	    Text.prototype.withFont = function (font) {
	        this.font = font;
	        return this;
	    };
	    Text.prototype.withFontSize = function (fontSize) {
	        this.fontSize = fontSize;
	        return this;
	    };
	    Text.prototype.leftAligned = function () {
	        this.textAlign = 'left';
	        return this;
	    };
	    Text.prototype.withMaxWidth = function (maxWidth) {
	        this.maxWidth = maxWidth;
	        return this;
	    };
	    Text.prototype.withLineHeight = function (lineHeight) {
	        this.lineHeight = lineHeight;
	        return this;
	    };
	    Text.prototype.draw = function () {
	        Context_1["default"].font = this.fontSize.toString() + 'px "' + this.font + '"';
	        Context_1["default"].fillStyle = this.fillStyle;
	        Context_1["default"].strokeStyle = this.strokeStyle;
	        Context_1["default"].lineWidth = this.lineWidth;
	        Context_1["default"].textAlign = this.textAlign;
	        var words = this.content.split(' ');
	        var line = '';
	        var y = this.position.y();
	        for (var word = 0; word < words.length; word++) {
	            var testLine = line + words[word] + ' ';
	            var metrics = Context_1["default"].measureText(testLine);
	            var testWidth = metrics.width;
	            if (this.maxWidth && testWidth > this.maxWidth) {
	                Context_1["default"].strokeText(line, this.position.x(), y);
	                Context_1["default"].fillText(line, this.position.x(), y);
	                line = words[word] + ' ';
	                y += this.lineHeight;
	            }
	            else {
	                line = testLine;
	            }
	        }
	        Context_1["default"].strokeText(line.trim(), this.position.x(), y);
	        Context_1["default"].fillText(line.trim(), this.position.x(), y);
	    };
	    return Text;
	})(Shape_1["default"]);
	exports.__esModule = true;
	exports["default"] = Text;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var Vector_1 = __webpack_require__(9);
	var Shape = (function () {
	    function Shape() {
	        this.position = new Vector_1["default"](0, 0);
	        this.strokeStyle = 'transparent';
	        this.fillStyle = 'transparent';
	        this.lineWidth = 1;
	    }
	    Shape.prototype.at = function (position) {
	        this.position = position;
	        return this;
	    };
	    Shape.prototype.withStrokeStyle = function (strokeStyle) {
	        this.strokeStyle = strokeStyle;
	        return this;
	    };
	    Shape.prototype.withFillStyle = function (fillStyle) {
	        this.fillStyle = fillStyle;
	        return this;
	    };
	    Shape.prototype.withLineWidth = function (lineWidth) {
	        this.lineWidth = lineWidth;
	        return this;
	    };
	    return Shape;
	})();
	exports.__esModule = true;
	exports["default"] = Shape;


/***/ },
/* 9 */
/***/ function(module, exports) {

	var Vector = (function () {
	    function Vector(x, y) {
	        this.components = [];
	        this.components[0] = x;
	        this.components[1] = y;
	    }
	    Vector.prototype.x = function () {
	        return this.components[0];
	    };
	    Vector.prototype.y = function () {
	        return this.components[1];
	    };
	    Vector.prototype.add = function (vector) {
	        return new Vector(this.x() + vector.x(), this.y() + vector.y());
	    };
	    Vector.prototype.subtract = function (vector) {
	        return new Vector(this.x() - vector.x(), this.y() - vector.y());
	    };
	    Vector.prototype.multiply = function (multiplier) {
	        return new Vector(this.x() * multiplier, this.y() * multiplier);
	    };
	    Vector.prototype.divide = function (divisor) {
	        return new Vector(this.x() / divisor, this.y() / divisor);
	    };
	    Vector.prototype.length = function () {
	        return Math.sqrt(this.x() * this.x() + this.y() * this.y());
	    };
	    Vector.prototype.normalize = function () {
	        return this.divide(this.length());
	    };
	    return Vector;
	})();
	exports.__esModule = true;
	exports["default"] = Vector;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Circle_1 = __webpack_require__(11);
	var Rectangle_1 = __webpack_require__(12);
	var Square_1 = __webpack_require__(13);
	var Player = (function () {
	    function Player(position) {
	        this.position = position;
	    }
	    Player.prototype.update = function () {
	    };
	    Player.prototype.render = function () {
	        new Circle_1["default"]()
	            .at(this.position)
	            .withRadius(10)
	            .withFillStyle('red')
	            .draw();
	        new Rectangle_1["default"]()
	            .at(this.position)
	            .withWidth(40)
	            .withHeight(20)
	            .withFillStyle('blue')
	            .draw();
	        new Square_1["default"]()
	            .at(this.position)
	            .withSize(30)
	            .withFillStyle('green')
	            .draw();
	        new Square_1["default"]()
	            .at(this.position)
	            .withSize(50)
	            .withFillStyle('green')
	            .draw();
	    };
	    return Player;
	})();
	exports.__esModule = true;
	exports["default"] = Player;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Context_1 = __webpack_require__(2);
	var Shape_1 = __webpack_require__(8);
	var Circle = (function (_super) {
	    __extends(Circle, _super);
	    function Circle() {
	        _super.apply(this, arguments);
	        this.radius = 10;
	    }
	    Circle.prototype.withRadius = function (radius) {
	        this.radius = radius;
	        return this;
	    };
	    Circle.prototype.draw = function () {
	        Context_1["default"].fillStyle = this.fillStyle.toString();
	        Context_1["default"].strokeStyle = this.strokeStyle.toString();
	        Context_1["default"].lineWidth = this.lineWidth;
	        Context_1["default"].beginPath();
	        Context_1["default"].arc(this.position.x(), this.position.y(), this.radius, 0, 2 * Math.PI);
	        Context_1["default"].stroke();
	        Context_1["default"].fill();
	        Context_1["default"].closePath();
	    };
	    return Circle;
	})(Shape_1["default"]);
	exports.__esModule = true;
	exports["default"] = Circle;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Context_1 = __webpack_require__(2);
	var Shape_1 = __webpack_require__(8);
	var Vector_1 = __webpack_require__(9);
	var Rectangle = (function (_super) {
	    __extends(Rectangle, _super);
	    function Rectangle() {
	        _super.apply(this, arguments);
	        this.width = 10;
	        this.height = 10;
	    }
	    Rectangle.prototype.withWidth = function (width) {
	        this.width = width;
	        return this;
	    };
	    Rectangle.prototype.withHeight = function (height) {
	        this.height = height;
	        return this;
	    };
	    Rectangle.prototype.draw = function () {
	        var position = this.position.subtract(new Vector_1["default"](this.width / 2, this.height / 2));
	        Context_1["default"].fillStyle = this.fillStyle;
	        Context_1["default"].strokeStyle = this.strokeStyle;
	        Context_1["default"].lineWidth = this.lineWidth;
	        Context_1["default"].beginPath();
	        Context_1["default"].rect(position.x(), position.y(), this.width, this.height);
	        Context_1["default"].stroke();
	        Context_1["default"].fill();
	        Context_1["default"].closePath();
	    };
	    return Rectangle;
	})(Shape_1["default"]);
	exports.__esModule = true;
	exports["default"] = Rectangle;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Context_1 = __webpack_require__(2);
	var Vector_1 = __webpack_require__(9);
	var Shape_1 = __webpack_require__(8);
	var Square = (function (_super) {
	    __extends(Square, _super);
	    function Square() {
	        _super.apply(this, arguments);
	        this.size = 10;
	    }
	    Square.prototype.withSize = function (size) {
	        this.size = size;
	        return this;
	    };
	    Square.prototype.draw = function () {
	        var position = this.position.subtract(new Vector_1["default"](this.size / 2, this.size / 2));
	        Context_1["default"].fillStyle = this.fillStyle;
	        Context_1["default"].strokeStyle = this.strokeStyle;
	        Context_1["default"].lineWidth = this.lineWidth;
	        Context_1["default"].beginPath();
	        Context_1["default"].rect(position.x(), position.y(), this.size, this.size);
	        Context_1["default"].stroke();
	        Context_1["default"].fill();
	        Context_1["default"].closePath();
	    };
	    return Square;
	})(Shape_1["default"]);
	exports.__esModule = true;
	exports["default"] = Square;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./app.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "html, body {\n    margin: 0;\n    width: 100%;\n    height: 100%;\n}\ncanvas {\n    background: white;\n    display: block;\n}\n", ""]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map
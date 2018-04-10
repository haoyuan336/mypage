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
	
	var _imports = __webpack_require__(1);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	var _gameworld = __webpack_require__(38);
	
	var _gameworld2 = _interopRequireDefault(_gameworld);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _debugLayer = __webpack_require__(64);
	
	var _debugLayer2 = _interopRequireDefault(_debugLayer);
	
	var _platformHelper = __webpack_require__(45);
	
	var _platformHelper2 = _interopRequireDefault(_platformHelper);
	
	var _uiTips = __webpack_require__(69);
	
	var _uiTips2 = _interopRequireDefault(_uiTips);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _statisticHelper = __webpack_require__(71);
	
	var _statisticHelper2 = _interopRequireDefault(_statisticHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.onload = function () {
	
	  // platform.getUserInfo((data)=>{
	  //   statisticHelper.beginLoading(data.uid);///开始加载接口调用
	  // });
	  console.log('enter game');
	  var _director = _imports.Director.create(_gameDefines2.default.Canvas.width, _gameDefines2.default.Canvas.height);
	  var screenOption = {
	    forceX: true,
	    forceY: false
	  };
	  _imports.Helper.scaleToWindow(_director, screenOption);
	
	  window.addEventListener("resize", function (event) {
	    _imports.Helper.scaleToWindow(_director, screenOption);
	  });
	
	  var imageList = [];
	  for (var i in _resources2.default) {
	    var str = _resources2.default[i];
	    if (str.indexOf('.png') != -1 || str.indexOf('.jpg') != -1) {
	      imageList.push(_resources2.default[i]);
	    } else {}
	  }
	  // console.log('image=' + JSON.stringify(imageList));
	  _imports.ResourceManager.loadList(imageList, function () {
	
	    _imports.ResourceManager.loadFontList(['combo', 'default_number', 'gift_number', 'gold_number', 'rank_number_1', 'rank_number_2', 'rank_number_3', 'rank_number_4', 'rank_number_5', 'rank_number_6'], function () {
	      // platform.loadEnd();
	      // platform.getDeviceModel((data1)=>{
	      //   if (data1.hasOwnProperty('deviceModel')){
	      //     global.playerdata.deviceModel = data1.deviceModel;///设备型号，Android区分大小写
	      //   }
	      //   if (data1.hasOwnProperty('devicemodel')){
	      //     global.playerdata.deviceModel = data1.devicemodel;///设备型号，iOS 传都是小写
	      //   }
	      //
	      //   platform.getUserInfo((data2)=> {
	      //     global.playerdata.uid = parseInt(data2.uid);
	      //     global.playerdata.auth = data2.auth;
	      //     statisticHelper.endLoading(data2.uid);
	      //     global.playerdata.initData();
	      //     global.playerdata.getGameInfo( (success, resp)=>{
	      //       console.log('start Game');
	      //       let gameWorld = GameWorld();
	      //       gameWorld.init();
	      //       Director.sharedDirector().replaceWorld(gameWorld);
	      //
	      //
	      //       let debugLayer = DebugLayer();
	      //       gameWorld.node.addChild(debugLayer);
	      //
	      //      if(!success) {
	      //         let tip = Tips(JSON.stringify(resp.show)
	      //           ,()=>{
	      //             platform.endAll();
	      //           });
	      //         tip.init();
	      //         tip.add2World(gameWorld);
	      //      }
	      //     });
	      //   })
	      // });
	      _gameGlobal2.default.playerdata.initData();
	      var gameWorld = (0, _gameworld2.default)();
	      gameWorld.init();
	      _imports.Director.sharedDirector().replaceWorld(gameWorld);
	    });
	  });
	}; /**
	    * Created by chuhaoyuan on 2016/10/21.
	    */

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Vec2 = exports.SRequest = exports.Director = exports.ResourceManager = exports.Helper = exports.Inherited = exports.DelayEvent = exports.Eventuality = exports.ModelLayer = exports.BaseLayer = exports.BaseWorld = exports.UIControl = exports.AnimationFactor = undefined;
	
	var _animationFactor = __webpack_require__(2);
	
	var _animationFactor2 = _interopRequireDefault(_animationFactor);
	
	var _helper = __webpack_require__(6);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	var _resourceManager = __webpack_require__(7);
	
	var _resourceManager2 = _interopRequireDefault(_resourceManager);
	
	var _director = __webpack_require__(10);
	
	var _director2 = _interopRequireDefault(_director);
	
	var _simpleRequest = __webpack_require__(14);
	
	var _simpleRequest2 = _interopRequireDefault(_simpleRequest);
	
	var _index = __webpack_require__(15);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _baseWorld = __webpack_require__(33);
	
	var _baseWorld2 = _interopRequireDefault(_baseWorld);
	
	var _baseLayer = __webpack_require__(34);
	
	var _baseLayer2 = _interopRequireDefault(_baseLayer);
	
	var _modelLayer = __webpack_require__(35);
	
	var _modelLayer2 = _interopRequireDefault(_modelLayer);
	
	var _eventuality = __webpack_require__(28);
	
	var _eventuality2 = _interopRequireDefault(_eventuality);
	
	var _inherited = __webpack_require__(18);
	
	var _inherited2 = _interopRequireDefault(_inherited);
	
	var _delayEvent = __webpack_require__(36);
	
	var _delayEvent2 = _interopRequireDefault(_delayEvent);
	
	var _vec = __webpack_require__(37);
	
	var _vec2 = _interopRequireDefault(_vec);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.AnimationFactor = _animationFactor2.default;
	exports.UIControl = _index2.default;
	exports.BaseWorld = _baseWorld2.default;
	exports.BaseLayer = _baseLayer2.default;
	exports.ModelLayer = _modelLayer2.default;
	exports.Eventuality = _eventuality2.default;
	exports.DelayEvent = _delayEvent2.default;
	exports.Inherited = _inherited2.default;
	exports.Helper = _helper2.default;
	exports.ResourceManager = _resourceManager2.default;
	exports.Director = _director2.default;
	exports.SRequest = _simpleRequest2.default;
	exports.Vec2 = _vec2.default; /**
	                               * Created by wizard on 16/3/30.
	                               */

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _frameAnimation = __webpack_require__(3);
	
	var _frameAnimation2 = _interopRequireDefault(_frameAnimation);
	
	var _spineAnimation = __webpack_require__(5);
	
	var _spineAnimation2 = _interopRequireDefault(_spineAnimation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/3/29.
	 */
	
	var animationFactor = function () {
	    var that = {};
	
	    that.createAnimation = function (options) {
	        if (options.type == "spine") {
	            return (0, _spineAnimation2.default)(options);
	        } else {
	            return (0, _frameAnimation2.default)(options);
	        }
	    };
	
	    return that;
	}();
	
	exports.default = animationFactor;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _animationInterface = __webpack_require__(4);
	
	var _animationInterface2 = _interopRequireDefault(_animationInterface);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FrameAnimation = function FrameAnimation(spec) {
	  var that = (0, _animationInterface2.default)();
	
	  that.animates = {};
	
	  that.node = new PIXI.Container();
	
	  var _movieClip = null;
	
	  for (var index in spec.animates) {
	    var oneAnimate = spec.animates[index];
	    var frames = [];
	    for (var i = oneAnimate.start; i <= oneAnimate.end; ++i) {
	      frames.push(oneAnimate.pre + "_" + i + ".png");
	    }
	
	    that.animates[index] = {};
	    that.animates[index].frames = frames;
	    if (spec.animates[index].speed != undefined) {
	      that.animates[index].animationSpeed = spec.animates[index].speed;
	    } else {
	      that.animates[index].animationSpeed = 1;
	    }
	    //console.log("frame animation:" + JSON.stringify(that.animates) );
	  }
	
	  (function () {
	    if (spec.default) {
	      _movieClip = new PIXI.Sprite.fromFrame(spec.default);
	      that.node.addChild(_movieClip);
	      if (spec.anchor) {
	        _movieClip.anchor = spec.anchor;
	      } else {
	        _movieClip.anchor = { x: 0.5, y: 0.5 };
	      }
	    }
	  })();
	
	  var setupMovieClip = function setupMovieClip(frames, speed, isLoop, cb) {
	
	    if (_movieClip) {
	      that.node.removeChild(_movieClip);
	    }
	
	    _movieClip = new PIXI.extras.MovieClip.fromFrames(frames);
	    _movieClip.animationSpeed = speed;
	    _movieClip.loop = isLoop;
	    _movieClip.gotoAndPlay(0);
	
	    if (!isLoop) {
	      _movieClip.onComplete = function () {
	        if (cb) {
	          cb.call(this);
	        }
	      };
	    }
	
	    that.node.addChild(_movieClip);
	    if (spec.anchor) {
	      _movieClip.anchor = spec.anchor;
	    } else {
	      _movieClip.anchor = { x: 0.5, y: 0.5 };
	    }
	  };
	
	  that.getAnimationNode = function () {
	    console.log('error: virtual getAnimationNode function');
	  };
	
	  that.stop = function (applyCb) {
	    if (applyCb) {}
	  };
	
	  that.playOnce = function (actionName, cb) {
	    that.playTimes(actionName, 1, cb);
	  };
	
	  that.playTimes = function (actionName, times, cb) {
	
	    if (!that.animates[actionName]) {
	      console.log('error: wrong action name' + actionName);
	      return;
	    }
	
	    var frames = [];
	    for (var i = 0; i < times; ++i) {
	      frames = frames.concat(that.animates[actionName].frames);
	    }
	
	    setupMovieClip(frames, that.animates[actionName].animationSpeed, false, cb);
	  };
	
	  that.playList = function (actionList, cb) {
	    console.log('error: virtual function');
	  };
	
	  that.playLoop = function (actionName) {
	    if (!that.animates[actionName]) {
	      console.log('error: wrong action name' + actionName);
	      return;
	    }
	
	    setupMovieClip(that.animates[actionName].frames, that.animates[actionName].animationSpeed, true);
	  };
	
	  that.reset = function () {
	    console.log('error: virtual reset function');
	  };
	
	  that.setVisible = function (isVisible) {
	    that.node.visible = isVisible;
	  };
	
	  that.turnAround = function (faceTo) {
	    console.log('error: virtual  turnAround function');
	  };
	
	  that.setSlotVisible = function (slotName, isVisible) {
	    console.log('error: virtual setSlotVisible function');
	  };
	
	  that.setTimeScale = function (timeScale) {
	    that.node.animationSpeed = timeScale;
	  };
	
	  that.setSkin = function (name) {
	    console.log('error: virtual setSkin function');
	  };
	
	  return that;
	}; /**
	    * Created by wizard on 16/3/29.
	    */
	exports.default = FrameAnimation;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by hewenlong on 16-3-15.
	 */
	
	var AnimationInterface = function AnimationInterface(spec) {
	  var that = {};
	
	  that.getAnimationNode = function () {
	    console.log('error: virtual getAnimationNode function');
	  };
	
	  that.stop = function (applyCb) {
	    console.log('error: virtual stop function');
	  };
	
	  that.playOnce = function (actionName, cb) {
	    that.playTimes(actionName, 1, cb);
	  };
	
	  that.playTimes = function (actionName, times, cb) {
	    console.log('error: virtual playTimes function');
	  };
	
	  that.playList = function (actionList, cb) {
	    console.log('error: virtual function');
	  };
	
	  that.playLoop = function (actionName) {
	    console.log('error: virtual playLoop function');
	  };
	
	  that.reset = function () {
	    console.log('error: virtual reset function');
	  };
	
	  that.aimTo = function (direction) {
	    console.log('error: virtual function');
	  };
	
	  that.setVisible = function (isVisible) {
	    console.log('error: virtual setVisible function');
	  };
	
	  that.destroy = function () {
	    console.log('error: virtual destroy function');
	  };
	
	  that.turnAround = function (faceTo) {
	    console.log('error: virtual  turnAround function');
	  };
	
	  that.setSlotVisible = function (slotName, isVisible) {
	    console.log('error: virtual setSlotVisible function');
	  };
	
	  that.setTimeScale = function (timeScale) {
	    console.log('error: virtual setTimeScale function');
	  };
	  that.setSkin = function (name) {
	    console.log('error: virtual setSkin function');
	  };
	  that.setLocalZOrder = function (zOrder) {
	    console.log("error: virtual set local zOrder func");
	  };
	
	  return that;
	};
	
	exports.default = AnimationInterface;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _animationInterface = __webpack_require__(4);
	
	var _animationInterface2 = _interopRequireDefault(_animationInterface);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//const Spine = require('pixi-spine').Spine;
	var SpineAnimation = function SpineAnimation(spec) {
	    var that = (0, _animationInterface2.default)(spec);
	
	    var _spine = null;
	    var _actionList = [];
	    var _faceTo = 1;
	    that.zOrder = 0;
	    var spineData = spec.spineData;
	
	    that.setSkin = function (skin) {
	        _spine.skeleton.setSkinByName(skin);
	    };
	
	    that.turnAround = function (dir) {
	        var scaleX = _spine.scale.x;
	        _faceTo *= dir;
	        _spine.scale.x = scaleX * _faceTo;
	    };
	
	    that.playLoop = function (action, isSoft) {
	        if (!isSoft) {
	            applyAllCallBack();
	            _spine.skeleton.setToSetupPose();
	            _spine.state.setAnimationByName(0, action, true);
	        } else {
	            _spine.state.addAnimationByName(0, action, true, 0);
	        }
	    };
	
	    var applyAllCallBack = function applyAllCallBack() {
	        while (_actionList.length > 0) {
	            var action = _actionList.shift();
	            if (action.cb) {
	                action.cb();
	            }
	        }
	    };
	
	    that.getAnimationNode = function () {
	        return _spine;
	    };
	
	    that.playTimes = function (action, times, callBack, isSoft) {
	        var list = [];
	        for (var i = 0; i < times; i++) {
	            list.push(action);
	        }
	        that.playList(list, callBack, isSoft);
	    };
	
	    that.playList = function (list, callBack, isSoft) {
	        if (list.length === 0) {
	            if (callBack) {
	                callBack();
	            }
	        }
	        _spine.skeleton.setToSetupPose();
	        var track;
	
	        if (!isSoft) {
	            applyAllCallBack();
	            track = _spine.state.setAnimationByName(0, list[0], false);
	        } else {
	            track = _spine.state.addAnimationByName(0, list[0], false, 0);
	        }
	        if (!track) {
	            if (callBack) {
	                callBack();
	            }
	            return;
	        }
	        for (var i = 1; i < list.length; i++) {
	            _spine.state.addAnimationByName(0, list[i], false, 0);
	        }
	
	        if (callBack) {
	            var data = {
	                waitingCount: list.length,
	                cb: callBack
	            };
	            _actionList.push(data);
	        }
	    };
	
	    that.reset = function () {
	        _spine.skeleton.setBonesToSetupPose();
	        _spine.skeleton.setSlotsToSetupPose();
	        _spine.skeleton.clearTracks();
	        _actionList = [];
	    };
	
	    var _onComplete = function _onComplete() {
	        if (_actionList <= 0) {
	            return;
	        }
	
	        var data = _actionList[0];
	        data.waitingCount--;
	        if (data.waitingCount === 0) {
	            _actionList.shift();
	            data.cb();
	        }
	    };
	
	    var createSpine = function createSpine() {
	        _spine = new PIXI.spine.Spine(spineData);
	
	        if (spec.dir) {
	            that.turnAround(spec.dir);
	        }
	        if (spec.skin) {
	            that.setSkin(spec.skin);
	        }
	
	        _spine.state.onComplete = _onComplete;
	
	        that.node = _spine;
	    };
	    createSpine();
	
	    return that;
	}; /**
	    * Created by hewenlong on 16-3-15.
	    */
	exports.default = SpineAnimation;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Created by wizard on 16/3/30.
	                                                                                                                                                                                                                                                                               */
	
	var _resourceManager = __webpack_require__(7);
	
	var _resourceManager2 = _interopRequireDefault(_resourceManager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helper = helper || {};
	
	helper.scaleToWindow = function (director, option) {
	
	  if (!director.runningWorld || !director.runningWorld.node) {
	    return;
	  }
	
	  var runningNode = director.runningWorld.node;
	  var str = "";
	  var direction = option.direction || "portrait";
	  if (direction === "portrait") {
	    str += "portrait : ";
	    var scaleX = window.innerWidth / director.width;
	    var scaleY = window.innerHeight / director.height;
	
	    var scale = 1;
	    if (option.forceX) {
	      scale = scaleX;
	    } else if (option.forceY) {
	      scale = scaleY;
	    } else {
	      scale = Math.min(scaleX, scaleY);
	    }
	
	    var width = director.width * scale;
	    var height = director.height * scale;
	
	    var canvas = director.renderer.view;
	    canvas.style.padding = 0;
	    canvas.style.margin = 0;
	
	    var offsetX = (window.innerWidth - width) / 2;
	    var offsetBottom = (window.innerHeight - height) / 2;
	    var offsetTop = -offsetBottom;
	    if (offsetTop > 0) {
	      offsetTop = 0;
	    }
	    if (offsetBottom < 0) {
	      offsetBottom = 0;
	    }
	
	    //canvas.style.marginLeft = offsetX + "px";
	    //canvas.style.marginRight = offsetX + "px";
	
	
	    //canvas.style.transformOrigin = "0 0";
	    //canvas.style.transform = "scale(" + scale + ")";
	
	    //renderer.autoResize = true;
	    director.renderer.resize(window.innerWidth, window.innerHeight);
	    runningNode.scale.set(scale, scale);
	    runningNode.position.set(offsetX, 0);
	
	    director.screen = {
	      scale: scale,
	      left: (window.innerWidth - width) / 2 / scale,
	      right: (window.innerWidth - width) / 2 / scale + director.width,
	      top: 0,
	      bottom: window.innerHeight / scale
	    };
	  } else {
	    var directorW = director.width;
	    var directorH = director.height;
	    var innerW = window.innerWidth;
	    var innerH = window.innerHeight;
	    var fixX = 0;
	    str += "landscape : ";
	    if (window.orientation === 180 || window.orientation === 0) {
	      //竖屏 强制旋转屏幕 交换宽高
	      directorW = director.height;
	      directorH = director.width;
	      runningNode.rotation = Math.PI / 180 * 90;
	      fixX = innerW;
	    }
	    if (window.orientation === 90 || window.orientation === -90) {
	      //横屏
	      directorW = director.width;
	      directorH = director.height;
	      runningNode.rotation = 0;
	      fixX = 0;
	    }
	    var scaleX = innerW / directorW;
	    var scaleY = innerH / directorH;
	
	    var scale = 1;
	    if (option.forceX) {
	      scale = scaleX;
	    } else if (option.forceY) {
	      scale = scaleY;
	    } else {
	      scale = Math.min(scaleX, scaleY);
	    }
	
	    var width = directorW * scale;
	    var height = directorH * scale;
	
	    var canvas = director.renderer.view;
	    canvas.style.padding = 0;
	    canvas.style.margin = 0;
	
	    var offsetX = (innerW - width) / 2 + fixX;
	    var offsetBottom = (innerH - height) / 2;
	    var offsetTop = -offsetBottom;
	    if (offsetTop > 0) {
	      offsetTop = 0;
	    }
	
	    director.renderer.resize(window.innerWidth, window.innerHeight);
	    runningNode.scale.set(scale, scale);
	    runningNode.position.set(offsetX, 0);
	    var left = (innerW - width) / 2 / scale;
	    var right = (innerW - width) / 2 / scale + director.width;
	    var bottom = innerH / scale;
	    if (fixX > 0) {
	      left = 0;
	      right = (innerH - height) / scale + director.width;
	      bottom = innerW / scale;
	    }
	    str += innerH + ' ' + director.screen.bottom + ' ' + height;
	    director.screen = {
	      scale: scale,
	      left: left,
	      right: right,
	      top: 0,
	      bottom: bottom
	    };
	  }
	};
	
	helper.reorderNode = function (node) {
	  var depthCompare = function depthCompare(a, b) {
	    var az = a.zorder;
	    var bz = b.zorder;
	    if (az == undefined) {
	      az = 0;
	    }
	    if (bz == undefined) {
	      bz = 0;
	    }
	    if (az < bz) return -1;
	    if (az > bz) return 1;
	    return 0;
	  };
	
	  node.children.sort(depthCompare);
	};
	
	helper.setObjZOder = function (object, list) {
	  var compareUpObject = function compareUpObject(temp1, temp2) {
	    var info1 = temp1.info;
	    var info2 = temp2.info;
	    //if (info1.topIndex.x <= info2.topIndex.x ) {
	    //  if (info1.topIndex.y > info2.topIndex.y + info2.columnWidth - 1 ) {
	    //    return true;
	    //  } else {
	    //    return false;
	    //  }
	    //} else {
	    //  if (info1.topIndex.y + info1.columnWidth - 1 >= info2.topIndex.y ) {
	    //    return true;
	    //  } else {
	    //    return false;
	    //  }
	    //}
	    if (info1.position.y < info2.position.y) {
	      return false;
	    } else if (info1.position.y > info2.position.y) {
	      return true;
	    } else {
	      if (info1.position.x < info2.position.x) {
	        return false;
	      } else {
	        return true;
	      }
	    }
	  };
	  var minZ = 0;
	  var maxZ = 100;
	  for (var i = 0; i < list.length; i++) {
	    if (list[i].itemKey === object.itemKey) {
	      continue;
	    }
	    if (compareUpObject(list[i], object) > 0) {
	      maxZ = Math.min(maxZ, list[i].node.zorder);
	    } else {
	      minZ = Math.max(minZ, list[i].node.zorder);
	    }
	  }
	  object.node.zorder = (minZ + maxZ) / 2;
	  //object.showZOder();
	};
	
	helper.calculateBuildingPosition = function (info, cellsControl) {
	  var topPos = cellsControl.index2pos(info.topIndex);
	  var downIndex = { x: info.topIndex.x + info.rowWidth - 1, y: info.topIndex.y + info.columnWidth - 1 };
	  var downPos = cellsControl.index2pos(downIndex);
	  info.position = { x: (topPos.x + downPos.x) / 2, y: (topPos.y + downPos.y) / 2 };
	};
	
	helper.isArray = function (obj) {
	  return obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) == "object" && obj.hasOwnProperty('length') && typeof obj.length == 'number';
	};
	
	helper.isObject = function (obj) {
	  return obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) == "object" && !helper.isArray(obj);
	};
	
	helper.cloneObject = function (sourceObj, targetObj) {
	
	  if (helper.isArray(sourceObj)) {
	    if (targetObj == undefined) {
	      targetObj = [];
	    }
	
	    if (!helper.isArray(targetObj)) {
	      return;
	    }
	
	    for (var i = 0; i < sourceObj.length; ++i) {
	      var subTargetObj;
	      if (helper.isArray(sourceObj[i]) || helper.isObject(sourceObj[i])) {
	        subTargetObj = helper.cloneObject(sourceObj[i]);
	      } else {
	        subTargetObj = sourceObj[i];
	      }
	
	      targetObj.push(subTargetObj);
	    }
	  } else if (helper.isObject(sourceObj)) {
	    if (targetObj == undefined) {
	      targetObj = {};
	    }
	
	    if (!helper.isObject(targetObj)) {
	      return;
	    }
	
	    for (var index in sourceObj) {
	      var subTargetObj;
	      if (helper.isArray(sourceObj[index]) || helper.isObject(sourceObj[index])) {
	        subTargetObj = helper.cloneObject(sourceObj[index]);
	      } else {
	        subTargetObj = sourceObj[index];
	      }
	
	      targetObj[index] = subTargetObj;
	    }
	  }
	
	  return targetObj;
	};
	
	helper.arrayFindOne = function (list, filter) {
	  for (var i = 0; i < list.length; i++) {
	    if (filter(list[i])) {
	      return list[i];
	    }
	  }
	  return null;
	};
	
	helper.pSub = function (v1, v2) {
	  return { x: v1.x - v2.x, y: v1.y - v2.y };
	};
	
	helper.pDistance = function (v1, v2) {
	  var v = helper.pSub(v1, v2);
	  return Math.sqrt(v.x * v.x + v.y * v.y);
	};
	
	helper.randomInt = function (min, max) {
	  var range = max - min;
	  var random = Math.random();
	  var result = min + Math.floor(random * range);
	  return result;
	};
	
	helper.wordWrapText = function (textObj, string) {
	  //let textString = string ? string : textObj.text;
	  //let wordWrap = textObj._style.wordWrap;
	  //let wordWrapWidth = textObj._style.wordWrapWidth;
	  //let textWidth = textObj.width;//***保留此行 计算宽度
	  //if (!wordWrap) {
	  //  return;
	  //}
	  //;
	  //let newStr = "";
	  //let wordWrapLeftWidth = wordWrapWidth;
	  //for (let i = 0; i < textString.length; i++) {
	  //  if (string[i] === "\n") {
	  //    wordWrapLeftWidth = wordWrapWidth;
	  //    newStr += '\n';
	  //    continue;
	  //  }
	  //  let width = textObj.context.measureText(textString[i]).width;
	  //  if (wordWrapLeftWidth < width || textString[i] === "") {
	  //    wordWrapLeftWidth = wordWrapWidth;
	  //    newStr = newStr + "\n";
	  //  }
	  //  newStr += textString[i];
	  //  wordWrapLeftWidth -= width;
	  //}
	  //textObj.text = newStr;
	};
	
	helper.getQueryString = function (name) {
	  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	  var r = window.location.search.substr(1).match(reg);
	  if (r != null) return decodeURI(r[2]);
	  return null;
	};
	
	helper.getImgUrlWithSize = function (url, size) {
	  console.log('getImgUrlWithSize', url);
	  var suffix = "jpg";
	  var strings = url.split("\\.");
	  if (strings.length > 0) {
	    suffix = strings[strings.length - 1];
	  }
	  var newUrl = url + "@1e_" + size + "w_" + size + "h_1c_0i_1o_90Q_1x." + suffix;
	  var resultUrl = url.indexOf("img1") !== -1 || url.indexOf("@1e_") !== -1 ? url : newUrl;
	  console.log('getImgUrlWithSize', resultUrl);
	  return resultUrl;
	};
	
	helper.getDebugUid = function (name) {
	  return parseInt(helper.getQueryString(name));
	};
	
	String.prototype.replaceAll = function (s1, s2) {
	  return this.replace(new RegExp(s1, "gm"), s2);
	};
	
	exports.default = helper;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ResourceManager = ResourceManager || function () {
	  var that = {};
	
	  var _loadingMap = {};
	  that.resource = {};
	
	  that.uiLoaded = {};
	
	  that.load = function (name, cb) {
	    if (that.resource[name]) {
	      console.log(" res has load, call back", name);
	      cb(that.resource[name]);
	      return;
	    }
	
	    var cbList = _loadingMap[name];
	    if (!cbList) {
	      //var path = _cfg[name];
	      //if (!path) {
	      //    console.log('error no path for res: ' + name);
	      //    return;
	      //}
	
	      cbList = [];
	      _loadingMap[name] = cbList;
	      cbList.push(cb);
	      PIXI.loader.add(name, name).load(function (loader, res) {
	        that.resource[name] = res[name];
	        for (var i = 0; i < cbList.length; ++i) {
	          console.log("res load: " + name);
	          cbList[i].call(this, that.resource[name], name);
	        }
	        delete _loadingMap[name];
	      });
	    } else {
	      cbList.push(cb);
	    }
	  };
	
	  that.loadList = function (resList, cb) {
	    var _this = this;
	
	    var callFuncNum = 0;
	    var callFunc = function callFunc() {
	      callFuncNum++;
	      if (callFuncNum >= resList.length) {
	        cb.call(_this);
	      }
	    };
	    for (var i = 0; i < resList.length; ++i) {
	      that.load(resList[i], callFunc);
	    }
	  };
	
	  that.loadFontList = function (fontList, cb) {
	    var _this2 = this;
	
	    var callFuncNum = 0;
	    var callFunc = function callFunc() {
	      callFuncNum++;
	      if (callFuncNum >= fontList.length) {
	        cb.call(_this2);
	      }
	    };
	    if (fontList.length === 0) {
	      callFunc();
	      return;
	    }
	    for (var i = 0; i < fontList.length; ++i) {
	      that.loadFont(fontList[i], callFunc);
	    }
	  };
	
	  that.loadFont = function (fontName, cb) {
	    var path = _resources2.default['xml_' + fontName];
	    that.load(path, function (res, resName) {
	      PIXI.extras.BitmapText.fonts[fontName] = res.bitmapFont;
	      cb.call(undefined, res, resName);
	    });
	  };
	
	  return that;
	}(); /**
	      * Created by hewenlong on 16-3-18.
	      */
	exports.default = ResourceManager;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _res;
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * Created by chuhaoyuan on 2016/10/18.
	                                                                                                                                                                                                                   */
	
	
	var res = (_res = {
	  'blade': 'blade.png',
	  'bj': 'bj.jpg',
	  'star': 'star.png',
	  'star2': 'star2.png',
	  'star_particle': 'star_particle.json',
	  'bar': 'bar.png',
	  'watermelon_0': 'fruit/watermelon_0.png',
	  'watermelon_1': 'fruit/watermelon_1.png',
	  'watermelon_2': 'fruit/watermelon_2.png',
	  'watermelon_3': 'fruit/watermelon_3.png',
	  'watermelon_pe': 'fruit/watermelon_pe.png',
	  'pineapple_0': 'fruit/pineapple_0.png',
	  'pineapple_1': 'fruit/pineapple_1.png',
	  'pineapple_2': 'fruit/pineapple_2.png',
	  'pineapple_3': 'fruit/pineapple_3.png',
	  'pineapple_e': 'fruit/pineapple_e.png',
	  'pineapple_pe': 'fruit/pineapple_pe.png',
	  'dargonfruit_0': 'fruit/dargonfruit_0.png',
	  'dargonfruit_1': 'fruit/dargonfruit_1.png',
	  'dargonfruit_2': 'fruit/dargonfruit_2.png',
	  'dargonfruit_3': 'fruit/dargonfruit_3.png',
	  'dargonfruit_e': 'fruit/dargonfruit_e.png',
	  'dargonfruit_e_1': 'fruit/dargonfruit_e_1.png',
	  'dargonfruit_pe': 'fruit/dargonfruit_pe.png',
	  'pineapple_e_1': 'fruit/pineapple_e_1.png'
	}, _defineProperty(_res, 'dargonfruit_pe', 'fruit/dargonfruit_pe.png'), _defineProperty(_res, 'watermelon_e_1', 'fruit/watermelon_e_1.png'), _defineProperty(_res, 'dargon_pe', 'dargon_pe.json'), _defineProperty(_res, 'watermelon_e', 'fruit/watermelon_e.png'), _defineProperty(_res, 'runlight_0', 'runlight_0.png'), _defineProperty(_res, 'runlight_1', 'runlight_1.png'), _defineProperty(_res, 'runlight_2', 'runlight_2.png'), _defineProperty(_res, 'runlight_3', 'runlight_3.png'), _defineProperty(_res, 'runlight_4', 'runlight_4.png'), _defineProperty(_res, 'kiwifruit_0', 'fruit/kiwifruit_0.png'), _defineProperty(_res, 'kiwifruit_1', 'fruit/kiwifruit_1.png'), _defineProperty(_res, 'kiwifruit_2', 'fruit/kiwifruit_2.png'), _defineProperty(_res, 'kiwifruit_3', 'fruit/kiwifruit_3.png'), _defineProperty(_res, 'kiwifruit_e', 'fruit/kiwifruit_e.png'), _defineProperty(_res, 'kiwifruit_e_1', 'fruit/kiwifruit_e_1.png'), _defineProperty(_res, 'kiwifruit_pe', 'fruit/kiwifruit_pe.png'), _defineProperty(_res, 'orange_0', 'fruit/orange_0.png'), _defineProperty(_res, 'orange_1', 'fruit/orange_1.png'), _defineProperty(_res, 'orange_2', 'fruit/orange_2.png'), _defineProperty(_res, 'orange_3', 'fruit/orange_3.png'), _defineProperty(_res, 'orange_e', 'fruit/orange_e.png'), _defineProperty(_res, 'orange_e_1', 'fruit/orange_e_1.png'), _defineProperty(_res, 'orange_pe', 'fruit/orange_pe.png'), _defineProperty(_res, 'ani_bomb', 'ani_bomb.json'), _defineProperty(_res, 'ani_flash_white', 'ani_flash_white.json'), _defineProperty(_res, 'ani_spark', 'ani_spark.json'), _defineProperty(_res, 'jiacheng', 'jiacheng,json'), _defineProperty(_res, 'banana_0', 'fruit/banana_0.png'), _defineProperty(_res, 'banana_1', 'fruit/banana_1.png'), _defineProperty(_res, 'banana_2', 'fruit/banana_2.png'), _defineProperty(_res, 'banana_3', 'fruit/banana_3.png'), _defineProperty(_res, 'banana_e', 'fruit/banana_e.png'), _defineProperty(_res, 'banana_e_1', 'fruit/banana_e_1.png'), _defineProperty(_res, 'banana_pe', 'fruit/banana_pe.png'), _defineProperty(_res, 'bt_close_normal', 'bt_close_normal.png'), _defineProperty(_res, 'bt_restart_normal', 'bt_restart_normal.png'), _defineProperty(_res, 'icon_bomb', 'icon_bomb.png'), _defineProperty(_res, 'icon_fruit', 'icon_fruit.png'), _defineProperty(_res, 'img_girl', 'img_girl.png'), _defineProperty(_res, 'img_start1', 'img_start1.png'), _defineProperty(_res, 'start', 'start.png'), _defineProperty(_res, 'start1', 'start1.png'), _defineProperty(_res, 'start2', 'start2.png'), _defineProperty(_res, 'start3', 'start3.png'), _defineProperty(_res, 'text_bombNmb', 'text_bombNmb.png'), _defineProperty(_res, 'text_bombNmb2', 'text_bombNmb2.png'), _defineProperty(_res, 'text_fruitNmb', 'text_fruitNmb.png'), _defineProperty(_res, 'text_gift', 'text_gift.png'), _defineProperty(_res, 'text_tips', 'text_tips.png'), _defineProperty(_res, 'text_gameOver', 'text_gameOver.png'), _defineProperty(_res, 'icon_gift', 'icon_gift.png'), _defineProperty(_res, 'star', 'star.png'), _defineProperty(_res, 'xml_combo', 'font/combo.xml'), _defineProperty(_res, 'xml_default_number', 'font/default_number.xml'), _defineProperty(_res, 'xml_gift_number', 'font/gift_number.xml'), _defineProperty(_res, 'xml_gold_number', 'font/gold_number.xml'), _defineProperty(_res, 'xml_rank_number_1', 'font/rank_number_1.xml'), _defineProperty(_res, 'xml_rank_number_2', 'font/rank_number_2.xml'), _defineProperty(_res, 'xml_rank_number_3', 'font/rank_number_3.xml'), _defineProperty(_res, 'xml_rank_number_4', 'font/rank_number_4.xml'), _defineProperty(_res, 'xml_rank_number_5', 'font/rank_number_5.xml'), _defineProperty(_res, 'xml_rank_number_6', 'font/rank_number_6.xml'), _defineProperty(_res, 'reday', 'reday.png'), _defineProperty(_res, 'go', 'go.png'), _defineProperty(_res, 'box_white', 'box_white.jpg'), _defineProperty(_res, 'zhuangban', 'zhuangban.png'), _defineProperty(_res, 'icon_gift2', 'icon_gift2.png'), _defineProperty(_res, 'icon_fruitwater', 'icon_fruitWater.png'), _defineProperty(_res, 'ani_packet_break', 'ani_packet_break.json'), _defineProperty(_res, 'grain', 'grain.png'), _defineProperty(_res, 'grain_json', 'grain.json'), _defineProperty(_res, 'resetPack', 'resetPack.png'), _defineProperty(_res, 'bt_back_normal', 'bt_back_normal.png'), _defineProperty(_res, 'zhezhao', 'zhezhao.png'), _defineProperty(_res, 'head_white', 'head_white.png'), _defineProperty(_res, 'apple_0', 'fruit/apple_0.png'), _defineProperty(_res, 'apple_1', 'fruit/apple_1.png'), _defineProperty(_res, 'apple_2', 'fruit/apple_2.png'), _defineProperty(_res, 'apple_3', 'fruit/apple_3.png'), _defineProperty(_res, 'apple_e_1', 'fruit/apple_e_1.png'), _defineProperty(_res, 'apple_e', 'fruit/apple_e.png'), _defineProperty(_res, 'apple_pe', 'fruit/apple_pe.png'), _defineProperty(_res, 'peach_0', 'fruit/peach_0.png'), _defineProperty(_res, 'peach_1', 'fruit/peach_1.png'), _defineProperty(_res, 'peach_2', 'fruit/peach_2.png'), _defineProperty(_res, 'peach_3', 'fruit/peach_3.png'), _defineProperty(_res, 'peach_e_1', 'fruit/peach_e_1.png'), _defineProperty(_res, 'peach_e', 'fruit/peach_e.png'), _defineProperty(_res, 'peach_pe', 'fruit/peach_pe.png'), _defineProperty(_res, 'bt_quit_normal', 'bt_quit_normal.png'), _defineProperty(_res, 'bt_replay_normal', 'bt_re[lay_normal.png'), _defineProperty(_res, 'bt_view_normal', 'bt_view_normal.png'), _defineProperty(_res, 'icon_redNumaber', 'icon_redNumaber.png'), _defineProperty(_res, 'img_box3', 'img_box3.png'), _defineProperty(_res, 'ribbon_1', 'ribbon_1.png'), _defineProperty(_res, 'ribbon_25', 'ribbon_25.png'), _defineProperty(_res, 'ribbon_3', 'ribbon_3.png'), _defineProperty(_res, 'ribbon_4', 'ribbon_4.png'), _defineProperty(_res, 'ribbon_5', 'ribbon_5.png'), _defineProperty(_res, 'caidia_json', 'caidia.json'), _defineProperty(_res, 'icon_nmb1', 'icon_nmb1.png'), _defineProperty(_res, 'icon_nmb2', 'icon_nmb2.png'), _defineProperty(_res, 'icon_nmb3', 'icon_nmb3.png'), _defineProperty(_res, 'lemon_0', 'fruit/lemon_0.png'), _defineProperty(_res, 'lemon_1', 'fruit/lemon_1.png'), _defineProperty(_res, 'lemon_2', 'fruit/lemon_2.png'), _defineProperty(_res, 'lemon_3', 'fruit/lemon_3.png'), _defineProperty(_res, 'lemon_e_1', 'fruit/lemon_e_1.png'), _defineProperty(_res, 'lemon_e', 'fruit/lemon_e.png'), _defineProperty(_res, 'lemon_pe', 'fruit/lemon_pe.png'), _defineProperty(_res, 'pear_0', 'fruit/pear_0.png'), _defineProperty(_res, 'pear_1', 'fruit/pear_1.png'), _defineProperty(_res, 'pear_2', 'fruit/pear_2.png'), _defineProperty(_res, 'pear_3', 'fruit/pear_3.png'), _defineProperty(_res, 'pear_e_1', 'fruit/pear_e_1.png'), _defineProperty(_res, 'pear_e', 'fruit/pear_e.png'), _defineProperty(_res, 'pear_pe', 'fruit/pear_pe.png'), _defineProperty(_res, 'strawberry_0', 'fruit/strawberry_0.png'), _defineProperty(_res, 'strawberry_1', 'fruit/strawberry_1.png'), _defineProperty(_res, 'strawberry_2', 'fruit/strawberry_2.png'), _defineProperty(_res, 'strawberry_3', 'fruit/strawberry_3.png'), _defineProperty(_res, 'strawberry_e_1', 'fruit/strawberry_e_1.png'), _defineProperty(_res, 'strawberry_e', 'fruit/strawberry_e.png'), _defineProperty(_res, 'strawberry_pe', 'fruit/strawberry_pe.png'), _defineProperty(_res, 'gameover1', 'gameover1.png'), _defineProperty(_res, 'head1', 'head1.png'), _defineProperty(_res, 'head1_1', 'head1_1.png'), _defineProperty(_res, 'head3', 'head2.png'), _defineProperty(_res, 'head2', 'head3.png'), _defineProperty(_res, 'head_0', 'head_0.png'), _defineProperty(_res, 'hongbao', 'hongbao.png'), _defineProperty(_res, 'hongbao1', 'hongbao1.png'), _defineProperty(_res, 'hongbao2', 'hongbao2.png'), _defineProperty(_res, 'hongbao_light', 'hongbao_light'), _defineProperty(_res, 'img_he', 'img_he.png'), _defineProperty(_res, 'img_yellow', 'img_yellow.png'), _defineProperty(_res, 'img_st_chuxian', 'img_st_chuxian.png'), _defineProperty(_res, 'no1', 'no1.png'), _defineProperty(_res, 'no2', 'no2.png'), _defineProperty(_res, 'no3', 'no3.png'), _defineProperty(_res, 'pomegranate_0', 'fruit/pomegranate_0.png'), _defineProperty(_res, 'pomegranate_1', 'fruit/pomegranate_1.png'), _defineProperty(_res, 'pomegranate_2', 'fruit/pomegranate_2.png'), _defineProperty(_res, 'pomegranate_3', 'fruit/pomegranate_3.png'), _defineProperty(_res, 'pomegranate_e_1', 'fruit/pomegranate_e_1.png'), _defineProperty(_res, 'pomegranate_e', 'fruit/pomegranate_e.png'), _defineProperty(_res, 'pomegranate_pe', 'fruit/pomegranate_pe.png'), _defineProperty(_res, 'pomegranatefragments_1', 'fruit/pomegranatefragments_1.png'), _defineProperty(_res, 'pomegranatefragments_2', 'fruit/pomegranatefragments_2.png'), _defineProperty(_res, 'pomegranatefragments_3', 'fruit/pomegranatefragments_3.png'), _defineProperty(_res, 'pomegranatefragments_4', 'fruit/pomegranatefragments_4.png'), _defineProperty(_res, 'pomegranatefragments_5', 'fruit/pomegranatefragments_5.png'), _defineProperty(_res, 'pomegranatefragments_6', 'fruit/pomegranatefragments_6.png'), _defineProperty(_res, 'pomegranatefragments_7', 'fruit/pomegranatefragments_7.png'), _defineProperty(_res, 'pomegranatefragments_8', 'fruit/pomegranatefragments_8.png'), _defineProperty(_res, 'pomegranatefragments_9', 'fruit/pomegranatefragments_9.png'), _defineProperty(_res, 'pomegranatefragments_10', 'fruit/pomegranatefragments_10.png'), _defineProperty(_res, 'bangzhu', 'bangzhu.png'), _defineProperty(_res, 'icon_hongbao', 'icon_hongbao.png'), _defineProperty(_res, 'icon_nengliang', 'icon_nengliang.png'), _defineProperty(_res, 'icon_shiliu', 'icon_shiliu.png'), _defineProperty(_res, 'icon_shiliujic', 'icon_shiliujic.png'), _defineProperty(_res, 'icon_shuiguo', 'icon_shuiguo.png'), _defineProperty(_res, 'icon_zhadan', 'icon_zhadan.png'), _defineProperty(_res, 'text_hongbao', 'text_hongbao.png'), _defineProperty(_res, 'text_nengliang', 'text_nengliang.png'), _defineProperty(_res, 'text_shiliu', 'text_shiliu.png'), _defineProperty(_res, 'text_shuiguo', 'text_shuiguo.png'), _defineProperty(_res, 'text_zhadan', 'text_zhadan.png'), _defineProperty(_res, 'img_light1', 'img_light1.png'), _defineProperty(_res, 'daoguang0', 'daoguang0.png'), _defineProperty(_res, 'daoguang1', 'daoguang1.png'), _defineProperty(_res, 'fasheguang0', 'fasheguang0.png'), _defineProperty(_res, 'pomegranatefragments_pe', 'fruit/pomegranatefragments_pe.png'), _defineProperty(_res, 'jindutiao_0', 'jindutiao_0.png'), _defineProperty(_res, 'jindutiao_1', 'jindutiao_1.png'), _defineProperty(_res, 'jindutiao_2', 'jindutiao_2.png'), _defineProperty(_res, 'jindutiao_3', 'jindutiao_3.png'), _defineProperty(_res, 'jindutiao_4', 'jindutiao_4.png'), _defineProperty(_res, 'text_mygift', 'text_mygift.png'), _defineProperty(_res, 'text_myrank', 'text_myrank.png'), _defineProperty(_res, 'icon_jiaocheng', 'icon_jiaocheng.png'), _defineProperty(_res, 'icon_st_shuiguo', 'icon_st_shuiguo.png'), _defineProperty(_res, 'icon_st_zhadan', 'icon_st_zhadan.png'), _defineProperty(_res, 'logo', 'logo.png'), _defineProperty(_res, 'icon_start', 'icon_start.png'), _defineProperty(_res, 'text_wodefenshu', 'text_wodefenshu.png'), _defineProperty(_res, 'box_rankhome', 'box_rankhome.png'), _defineProperty(_res, 'icon_box', 'icon_box.png'), _defineProperty(_res, 'icon_box2', 'icon_box2.png'), _defineProperty(_res, 'box_rankhome2', 'box_rankhome2.png'), _defineProperty(_res, 'bt_back', 'bt_back.png'), _defineProperty(_res, 'bt_jianglishuoming', 'bt_jianglishuoming.png'), _defineProperty(_res, 'icon_money', 'icon_money.png'), _defineProperty(_res, 'superFruitLight', 'pomegranatefragments_7.png'), _defineProperty(_res, 'hongbao2', 'hongbao2.png'), _defineProperty(_res, 'icon_lianji', 'icon_lianji.png'), _defineProperty(_res, 'icon_mingzhong', 'icon_mingzhong.png'), _defineProperty(_res, 'text_jinri', 'text_jinri.png'), _defineProperty(_res, 'text_dangqian', 'text-dangqian.png'), _defineProperty(_res, 'icon_gift3', 'icon_gift3.png'), _defineProperty(_res, 'icon_wodefenshu', 'icon_wodefenshu-.png'), _defineProperty(_res, 'NEW1', 'NEW1.png'), _defineProperty(_res, 'bg_guang', 'bg_guang.png'), _defineProperty(_res, 'apple_e_2', 'fruit/apple_e_2.png'), _defineProperty(_res, 'banana_e_2', 'fruit/banana_e_2.png'), _defineProperty(_res, 'dargonfruit_e_2', 'fruit/dargonfruit_e_2.png'), _defineProperty(_res, 'kiwifruit_e_2', 'fruit/kiwifruit_e_2.png'), _defineProperty(_res, 'lemon_e_2', 'fruit/lemon_e_2.png'), _defineProperty(_res, 'orange_e_2', 'fruit/orange_e_2.png'), _defineProperty(_res, 'peach_e_2', 'fruit/peach_e_2.png'), _defineProperty(_res, 'pear_e_2', 'fruit/pear_e_2.png'), _defineProperty(_res, 'pineapple_e_2', 'fruit/pineapple_e_2.png'), _defineProperty(_res, 'pomegranate_e_2', 'fruit/pomegranate_e_2.png'), _defineProperty(_res, 'strawberry_e_2', 'fruit/strawberry_e_2.png'), _defineProperty(_res, 'watermelon_e_2', 'fruit/watermelon_e_2.png'), _defineProperty(_res, 'img_yellow_26', 'img_yellow_26.png'), _defineProperty(_res, 'img_chibang', 'img_chibang.png'), _defineProperty(_res, 'img_chibang2', 'img_chibang2.png'), _defineProperty(_res, 'img_qizhi', 'img_qizhi.png'), _defineProperty(_res, 'icon_hongbao2', 'icon_hongbao2.png'), _defineProperty(_res, 'icon_hongbao3', 'icon_hongbao3.png'), _defineProperty(_res, 'icon_shuiguo2', 'icon_shuiguo2.png'), _defineProperty(_res, 'icon_shuiguo3', 'icon_shuiguo3.png'), _defineProperty(_res, 'img_go_black', 'img_go_black.png'), _defineProperty(_res, 'img_he2', 'img_he2.png'), _res);
	for (var i in res) {
	  res[i] = _gameDefines2.default.resPath + res[i];
	}
	exports.default = res;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wizard on 16/3/14.
	 */
	var defines = {};
	
	if (true) {
	  defines.rootPath = "./";
	  defines.resPath = "./assets/cutfruit/";
	} else {
	  defines.rootPath = "games/test_ui/";
	  defines.resPath = "games/test_ui/assets/";
	}
	
	defines.debugMode = true;
	defines.versionCode = '2016.12.8.18.47';
	//http://210.73.222.34/fruit
	
	// defines.gameHomeURL = 'http://fruit.yfb.xiaoyaoai.cn/';
	defines.gameHomeURL = 'http://test.game.xiaoyouapp.cn:30092/';
	// defines.gameHomeURL = 'http://192.168.31.248:30092/';
	// defines.gameHomeURL = 'http://210.73.222.34/fruit';
	
	defines.URLMethods = {
	  getRandom: 'getRandom',
	  gameOver: 'gameOver',
	  gameStart: 'gameStart',
	  GetFruitRank: 'GetFruitRank',
	  behaviorRecord: 'behaviorRecord'
	};
	
	defines.musicConfig = {
	  addfruit_0: "assets/cutfruit/music/addfruit_0.ogg",
	  addfruit_1: "assets/cutfruit/music/addfruit_1.ogg",
	  cut_kiwifruit: "assets/cutfruit/music/cut_apple.ogg",
	  cut_pineapple: "assets/cutfruit/music/cut_apple.ogg",
	  cut_banana: "assets/cutfruit/music/cut_banana.ogg",
	  cut_bomb: "assets/cutfruit/music/cut_bomb.ogg",
	  cut_dargonfruit: "assets/cutfruit/music/cut_dargonfruit.ogg",
	  cut_orange: "assets/cutfruit/music/cut_orange.ogg",
	  cut_watermelon: "assets/cutfruit/music/cut_watermelon.ogg",
	  cut_lemon: 'assets/cutfruit/music/cut_watermelon.ogg',
	  cut_pear: 'assets/cutfruit/music/cut_watermelon.ogg',
	  cut_strawberry: 'assets/cutfruit/music/cut_watermelon.ogg',
	  cut_apple: 'assets/cutfruit/music/cut_watermelon.ogg',
	  cut_peach: 'assets/cutfruit/music/cut_watermelon.ogg',
	  cuteffect_0: "assets/cutfruit/music/cuteffect_0.ogg",
	  cuteffect_1: "assets/cutfruit/music/cuteffect_1.ogg",
	  cuteffect_2: "assets/cutfruit/music/cuteffect_2.ogg",
	  gameover: "assets/cutfruit/music/gameover.ogg",
	  gamestart: "assets/cutfruit/music/gamestart.ogg",
	  getred_0: "assets/cutfruit/music/red_bag0.ogg",
	  getred_1: "assets/cutfruit/music/red_bag1.ogg",
	  readygo: "assets/cutfruit/music/readygo.ogg",
	  bgmusic: "assets/cutfruit/music/bg.ogg",
	  redbomb: "assets/cutfruit/music/red_bomb.ogg"
	
	};
	defines.musicIosConfig = {
	  // addfruit_0 : "assets/cutfruit/music_nogg/addfruit_0.wma",
	  // addfruit_1 : "assets/cutfruit/music_nogg/addfruit_1.wma",
	  // cut_kiwifruit:   "assets/cutfruit/music_nogg/cut_apple.wma",
	  // cut_pineapple:   "assets/cutfruit/music_nogg/cut_apple.wma",
	  // cut_banana:   "assets/cutfruit/music_nogg/cut_banana.wma",
	  // cut_bomb:   "assets/cutfruit/music_nogg/cut_bomb.wma",
	  // cut_dargonfruit:   "assets/cutfruit/music_nogg/cut_dargonfruit.wma",
	  // cut_orange:   "assets/cutfruit/music_nogg/cut_orange.wma",
	  // cut_watermelon:   "assets/cutfruit/music_nogg/cut_watermelon.wma",
	  // cut_lemon: 'assets/cutfruit/music_nogg/cut_watermelon.wma',
	  // cut_pear: 'assets/cutfruit/music_nogg/cut_watermelon.wma',
	  // cut_strawberry: 'assets/cutfruit/music_nogg/cut_watermelon.wma',
	  // cut_apple: 'assets/cutfruit/music_nogg/cut_watermelon.wma',
	  // cut_peach: 'assets/cutfruit/music_nogg/cut_watermelon.wma',
	  // cuteffect_0:   "assets/cutfruit/music_nogg/cuteffect_0.wma",
	  // cuteffect_1:   "assets/cutfruit/music_nogg/cuteffect_1.wma",
	  // cuteffect_2:   "assets/cutfruit/music_nogg/cuteffect_2.wma",
	  // gameover:   "assets/cutfruit/music_nogg/gameover.wma",
	  // gamestart:  "assets/cutfruit/music_nogg/gamestart.wma",
	  // getred_0:   "assets/cutfruit/music_nogg/red_bag0.wma",
	  // getred_1:   "assets/cutfruit/music_nogg/red_bag1.wma",
	  // readygo: "assets/cutfruit/music_nogg/readygo.wma",
	  // bgmusic: "assets/cutfruit/music_nogg/bg.mp3",
	  // redbomb: "assets/cutfruit/music_nogg/red_bomb.wma"
	  addfruit_0: "addfruit_0.mp3",
	  addfruit_1: "addfruit_1.mp3",
	  cut_kiwifruit: "cut_apple.mp3",
	  cut_pineapple: "cut_apple.mp3",
	  cut_banana: "cut_banana.mp3",
	  cut_bomb: "cut_bomb.mp3",
	  cut_dargonfruit: "cut_dargonfruit.mp3",
	  cut_orange: "acut_orange.mp3",
	  cut_watermelon: "cut_watermelon.mp3",
	  cut_lemon: 'cut_watermelon.mp3',
	  cut_pear: 'cut_watermelon.mp3',
	  cut_strawberry: 'cut_watermelon.mp3',
	  cut_apple: 'cut_watermelon.mp3',
	  cut_peach: 'cut_watermelon.mp3',
	  cuteffect_0: "cuteffect_0.mp3",
	  cuteffect_1: "cuteffect_1.mp3",
	  cuteffect_2: "cuteffect_2.mp3",
	  gameover: "gameover.mp3",
	  gamestart: "gamestart.mp3",
	  getred_0: "red_bag0.mp3",
	  getred_1: "red_bag1.mp3",
	  readygo: "readygo.mp3",
	  bgmusic: "bg.mp3",
	  redbomb: "red_bomb.mp3"
	};
	
	defines.fontList = ['combo', 'default_number', 'gift_number', 'gold_number', 'rank_number_1', 'rank_number_2', 'rank_number_3', 'rank_number_4', 'rank_number_5'];
	var Width = 480,
	    Height = 800;
	defines.Canvas = {
	  width: Width,
	  height: Height,
	  posX_center: Width * 0.5,
	  posY_center: Height * 0.5
	};
	
	exports.default = defines;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tween = __webpack_require__(11);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	var _registry = __webpack_require__(13);
	
	var _registry2 = _interopRequireDefault(_registry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/3/30.
	 */
	
	var fpsLimits = 1000 / 60;
	
	var Director = function Director(width, height) {
	  var _this = this;
	
	  var that = {};
	
	  that.width = width;
	  that.height = height;
	
	  that.screen = {
	    scale: 1,
	    left: 0,
	    right: width,
	    top: 0,
	    bottom: height
	  };
	
	  //that.renderer = new PIXI.CanvasRenderer(width, height);
	  that.renderer = PIXI.autoDetectRenderer(width, height);
	  document.body.appendChild(that.renderer.view);
	
	  var _worldList = [];
	
	  var _getTopWorld = function _getTopWorld() {
	    if (_worldList.length > 0) {
	      return _worldList[_worldList.length - 1];
	    }
	
	    return null;
	  };
	
	  var _lastTime = performance.now();
	  var stepOnce = function stepOnce(timestamp) {
	    requestAnimationFrame(stepOnce);
	
	    // that.audio.update();
	    var dt = timestamp - _lastTime;
	    //if (dt < fpsLimits) {
	    //  return;
	    //}
	
	    //if (dt = fpsLimits)
	
	    if (!_getTopWorld()) {
	      _lastTime = timestamp;
	      return;
	    }
	
	    var tmpTime = _lastTime;
	    while (dt > fpsLimits) {
	      tmpTime += fpsLimits;
	      PIXI.ticker.shared.update(tmpTime);
	      _tween2.default.update(tmpTime);
	
	      that.updateExecute(fpsLimits);
	
	      dt -= fpsLimits;
	    }
	
	    tmpTime += dt;
	    PIXI.ticker.shared.update(tmpTime);
	    _tween2.default.update(tmpTime);
	
	    that.updateExecute(dt);
	
	    that.renderer.render(_getTopWorld().node);
	
	    if (that.onLoopEnd) {
	      that.onLoopEnd.call(_this);
	    }
	
	    _lastTime = timestamp;
	  };
	  stepOnce(_lastTime);
	
	  that.popWorld = function () {
	    var lastWorld = _worldList.pop();
	    if (lastWorld) {
	      lastWorld.onPause();
	      lastWorld.destroy();
	    }
	
	    var topWorld = _getTopWorld();
	    if (topWorld) {
	      topWorld.onResume();
	    }
	  };
	
	  that.replaceWorld = function (newWorld) {
	    var topWorld = _worldList.pop();
	    if (topWorld) {
	      topWorld.onPause();
	      topWorld.destroy();
	    }
	
	    _worldList.push(newWorld);
	    newWorld.onResume();
	
	    window.dispatchEvent(new Event('resize'));
	  };
	
	  that.startWorld = function (newWorld) {
	
	    var topWorld = _getTopWorld();
	    if (topWorld) {
	      topWorld.onPause();
	    }
	
	    _worldList.push(newWorld);
	    newWorld.onResume();
	
	    window.dispatchEvent(new Event('resize'));
	  };
	
	  (0, _registry2.default)(that, ['update']);
	
	  Object.defineProperties(that, {
	    'runningWorld': {
	      get: function get() {
	        return _getTopWorld();
	      }
	    }
	  });
	
	  return that;
	};
	
	var SharedDirector = SharedDirector || function () {
	  var that = {};
	  var sharedDirector = null;
	  that.create = function (width, height) {
	    sharedDirector = Director(width, height);
	    return sharedDirector;
	  };
	
	  that.sharedDirector = function () {
	    return sharedDirector;
	  };
	
	  return that;
	}();
	
	exports.default = SharedDirector;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Tween.js - Licensed under the MIT license
	 * https://github.com/tweenjs/tween.js
	 * ----------------------------------------------
	 *
	 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
	 * Thank you all, you're awesome!
	 */
	
	var TWEEN = TWEEN || (function () {
	
		var _tweens = [];
	
		return {
	
			getAll: function () {
	
				return _tweens;
	
			},
	
			removeAll: function () {
	
				_tweens = [];
	
			},
	
			add: function (tween) {
	
				_tweens.push(tween);
	
			},
	
			remove: function (tween) {
	
				var i = _tweens.indexOf(tween);
	
				if (i !== -1) {
					_tweens.splice(i, 1);
				}
	
			},
	
			update: function (time, preserve) {
	
				if (_tweens.length === 0) {
					return false;
				}
	
				var i = 0;
	
				time = time !== undefined ? time : TWEEN.now();
	
				while (i < _tweens.length) {
	
					if (_tweens[i].update(time) || preserve) {
						i++;
					} else {
						_tweens.splice(i, 1);
					}
	
				}
	
				return true;
	
			}
		};
	
	})();
	
	
	// Include a performance.now polyfill
	(function () {
		// In node.js, use process.hrtime.
		if (this.window === undefined && this.process !== undefined) {
			TWEEN.now = function () {
				var time = process.hrtime();
	
				// Convert [seconds, microseconds] to milliseconds.
				return time[0] * 1000 + time[1] / 1000;
			};
		}
		// In a browser, use window.performance.now if it is available.
		else if (this.window !== undefined &&
		         window.performance !== undefined &&
			 window.performance.now !== undefined) {
	
			// This must be bound, because directly assigning this function
			// leads to an invocation exception in Chrome.
			TWEEN.now = window.performance.now.bind(window.performance);
		}
		// Use Date.now if it is available.
		else if (Date.now !== undefined) {
			TWEEN.now = Date.now;
		}
		// Otherwise, use 'new Date().getTime()'.
		else {
			TWEEN.now = function () {
				return new Date().getTime();
			};
		}
	})();
	
	
	TWEEN.Tween = function (object) {
	
		var _object = object;
		var _valuesStart = {};
		var _valuesEnd = {};
		var _valuesStartRepeat = {};
		var _duration = 1000;
		var _repeat = 0;
		var _yoyo = false;
		var _isPlaying = false;
		var _reversed = false;
		var _delayTime = 0;
		var _startTime = null;
		var _easingFunction = TWEEN.Easing.Linear.None;
		var _interpolationFunction = TWEEN.Interpolation.Linear;
		var _chainedTweens = [];
		var _onStartCallback = null;
		var _onStartCallbackFired = false;
		var _onUpdateCallback = null;
		var _onCompleteCallback = null;
		var _onStopCallback = null;
	
		// Set all starting values present on the target object
		for (var field in object) {
			_valuesStart[field] = parseFloat(object[field], 10);
		}
	
		this.to = function (properties, duration) {
	
			if (duration !== undefined) {
				_duration = duration;
			}
	
			_valuesEnd = properties;
	
			return this;
	
		};
	
		this.start = function (time) {
	
			TWEEN.add(this);
	
			_isPlaying = true;
	
			_onStartCallbackFired = false;
	
			_startTime = time !== undefined ? time : TWEEN.now();
			_startTime += _delayTime;
	
			for (var property in _valuesEnd) {
	
				// Check if an Array was provided as property value
				if (_valuesEnd[property] instanceof Array) {
	
					if (_valuesEnd[property].length === 0) {
						continue;
					}
	
					// Create a local copy of the Array with the start value at the front
					_valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);
	
				}
	
				// If `to()` specifies a property that doesn't exist in the source object,
				// we should not set that property in the object
				if (_valuesStart[property] === undefined) {
					continue;
				}
	
				_valuesStart[property] = _object[property];
	
				if ((_valuesStart[property] instanceof Array) === false) {
					_valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
				}
	
				_valuesStartRepeat[property] = _valuesStart[property] || 0;
	
			}
	
			return this;
	
		};
	
		this.stop = function () {
	
			if (!_isPlaying) {
				return this;
			}
	
			TWEEN.remove(this);
			_isPlaying = false;
	
			if (_onStopCallback !== null) {
				_onStopCallback.call(_object);
			}
	
			this.stopChainedTweens();
			return this;
	
		};
	
		this.stopChainedTweens = function () {
	
			for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
				_chainedTweens[i].stop();
			}
	
		};
	
		this.delay = function (amount) {
	
			_delayTime = amount;
			return this;
	
		};
	
		this.repeat = function (times) {
	
			_repeat = times;
			return this;
	
		};
	
		this.yoyo = function (yoyo) {
	
			_yoyo = yoyo;
			return this;
	
		};
	
	
		this.easing = function (easing) {
	
			_easingFunction = easing;
			return this;
	
		};
	
		this.interpolation = function (interpolation) {
	
			_interpolationFunction = interpolation;
			return this;
	
		};
	
		this.chain = function () {
	
			_chainedTweens = arguments;
			return this;
	
		};
	
		this.onStart = function (callback) {
	
			_onStartCallback = callback;
			return this;
	
		};
	
		this.onUpdate = function (callback) {
	
			_onUpdateCallback = callback;
			return this;
	
		};
	
		this.onComplete = function (callback) {
	
			_onCompleteCallback = callback;
			return this;
	
		};
	
		this.onStop = function (callback) {
	
			_onStopCallback = callback;
			return this;
	
		};
	
		this.update = function (time) {
	
			var property;
			var elapsed;
			var value;
	
			if (time < _startTime) {
				return true;
			}
	
			if (_onStartCallbackFired === false) {
	
				if (_onStartCallback !== null) {
					_onStartCallback.call(_object);
				}
	
				_onStartCallbackFired = true;
	
			}
	
			elapsed = (time - _startTime) / _duration;
			elapsed = elapsed > 1 ? 1 : elapsed;
	
			value = _easingFunction(elapsed);
	
			for (property in _valuesEnd) {
	
				// Don't update properties that do not exist in the source object
				if (_valuesStart[property] === undefined) {
					continue;
				}
	
				var start = _valuesStart[property] || 0;
				var end = _valuesEnd[property];
	
				if (end instanceof Array) {
	
					_object[property] = _interpolationFunction(end, value);
	
				} else {
	
					// Parses relative end values with start as base (e.g.: +10, -3)
					if (typeof (end) === 'string') {
	
						if (end.charAt(0) === '+' || end.charAt(0) === '-') {
							end = start + parseFloat(end, 10);
						} else {
							end = parseFloat(end, 10);
						}
					}
	
					// Protect against non numeric properties.
					if (typeof (end) === 'number') {
						_object[property] = start + (end - start) * value;
					}
	
				}
	
			}
	
			if (_onUpdateCallback !== null) {
				_onUpdateCallback.call(_object, value);
			}
	
			if (elapsed === 1) {
	
				if (_repeat > 0) {
	
					if (isFinite(_repeat)) {
						_repeat--;
					}
	
					// Reassign starting values, restart by making startTime = now
					for (property in _valuesStartRepeat) {
	
						if (typeof (_valuesEnd[property]) === 'string') {
							_valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property], 10);
						}
	
						if (_yoyo) {
							var tmp = _valuesStartRepeat[property];
	
							_valuesStartRepeat[property] = _valuesEnd[property];
							_valuesEnd[property] = tmp;
						}
	
						_valuesStart[property] = _valuesStartRepeat[property];
	
					}
	
					if (_yoyo) {
						_reversed = !_reversed;
					}
	
					_startTime = time + _delayTime;
	
					return true;
	
				} else {
	
					if (_onCompleteCallback !== null) {
						_onCompleteCallback.call(_object);
					}
	
					for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
						// Make the chained tweens start exactly at the time they should,
						// even if the `update()` method was called way past the duration of the tween
						_chainedTweens[i].start(_startTime + _duration);
					}
	
					return false;
	
				}
	
			}
	
			return true;
	
		};
	
	};
	
	
	TWEEN.Easing = {
	
		Linear: {
	
			None: function (k) {
	
				return k;
	
			}
	
		},
	
		Quadratic: {
	
			In: function (k) {
	
				return k * k;
	
			},
	
			Out: function (k) {
	
				return k * (2 - k);
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k;
				}
	
				return - 0.5 * (--k * (k - 2) - 1);
	
			}
	
		},
	
		Cubic: {
	
			In: function (k) {
	
				return k * k * k;
	
			},
	
			Out: function (k) {
	
				return --k * k * k + 1;
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k * k;
				}
	
				return 0.5 * ((k -= 2) * k * k + 2);
	
			}
	
		},
	
		Quartic: {
	
			In: function (k) {
	
				return k * k * k * k;
	
			},
	
			Out: function (k) {
	
				return 1 - (--k * k * k * k);
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k;
				}
	
				return - 0.5 * ((k -= 2) * k * k * k - 2);
	
			}
	
		},
	
		Quintic: {
	
			In: function (k) {
	
				return k * k * k * k * k;
	
			},
	
			Out: function (k) {
	
				return --k * k * k * k * k + 1;
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k * k;
				}
	
				return 0.5 * ((k -= 2) * k * k * k * k + 2);
	
			}
	
		},
	
		Sinusoidal: {
	
			In: function (k) {
	
				return 1 - Math.cos(k * Math.PI / 2);
	
			},
	
			Out: function (k) {
	
				return Math.sin(k * Math.PI / 2);
	
			},
	
			InOut: function (k) {
	
				return 0.5 * (1 - Math.cos(Math.PI * k));
	
			}
	
		},
	
		Exponential: {
	
			In: function (k) {
	
				return k === 0 ? 0 : Math.pow(1024, k - 1);
	
			},
	
			Out: function (k) {
	
				return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);
	
			},
	
			InOut: function (k) {
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				if ((k *= 2) < 1) {
					return 0.5 * Math.pow(1024, k - 1);
				}
	
				return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);
	
			}
	
		},
	
		Circular: {
	
			In: function (k) {
	
				return 1 - Math.sqrt(1 - k * k);
	
			},
	
			Out: function (k) {
	
				return Math.sqrt(1 - (--k * k));
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return - 0.5 * (Math.sqrt(1 - k * k) - 1);
				}
	
				return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
	
			}
	
		},
	
		Elastic: {
	
			In: function (k) {
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
	
			},
	
			Out: function (k) {
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
	
			},
	
			InOut: function (k) {
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				k *= 2;
	
				if (k < 1) {
					return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
				}
	
				return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
	
			}
	
		},
	
		Back: {
	
			In: function (k) {
	
				var s = 1.70158;
	
				return k * k * ((s + 1) * k - s);
	
			},
	
			Out: function (k) {
	
				var s = 1.70158;
	
				return --k * k * ((s + 1) * k + s) + 1;
	
			},
	
			InOut: function (k) {
	
				var s = 1.70158 * 1.525;
	
				if ((k *= 2) < 1) {
					return 0.5 * (k * k * ((s + 1) * k - s));
				}
	
				return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
	
			}
	
		},
	
		Bounce: {
	
			In: function (k) {
	
				return 1 - TWEEN.Easing.Bounce.Out(1 - k);
	
			},
	
			Out: function (k) {
	
				if (k < (1 / 2.75)) {
					return 7.5625 * k * k;
				} else if (k < (2 / 2.75)) {
					return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
				} else if (k < (2.5 / 2.75)) {
					return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
				} else {
					return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
				}
	
			},
	
			InOut: function (k) {
	
				if (k < 0.5) {
					return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
				}
	
				return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
	
			}
	
		}
	
	};
	
	TWEEN.Interpolation = {
	
		Linear: function (v, k) {
	
			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.Linear;
	
			if (k < 0) {
				return fn(v[0], v[1], f);
			}
	
			if (k > 1) {
				return fn(v[m], v[m - 1], m - f);
			}
	
			return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
	
		},
	
		Bezier: function (v, k) {
	
			var b = 0;
			var n = v.length - 1;
			var pw = Math.pow;
			var bn = TWEEN.Interpolation.Utils.Bernstein;
	
			for (var i = 0; i <= n; i++) {
				b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
			}
	
			return b;
	
		},
	
		CatmullRom: function (v, k) {
	
			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.CatmullRom;
	
			if (v[0] === v[m]) {
	
				if (k < 0) {
					i = Math.floor(f = m * (1 + k));
				}
	
				return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
	
			} else {
	
				if (k < 0) {
					return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
				}
	
				if (k > 1) {
					return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
				}
	
				return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
	
			}
	
		},
	
		Utils: {
	
			Linear: function (p0, p1, t) {
	
				return (p1 - p0) * t + p0;
	
			},
	
			Bernstein: function (n, i) {
	
				var fc = TWEEN.Interpolation.Utils.Factorial;
	
				return fc(n) / fc(i) / fc(n - i);
	
			},
	
			Factorial: (function () {
	
				var a = [1];
	
				return function (n) {
	
					var s = 1;
	
					if (a[n]) {
						return a[n];
					}
	
					for (var i = n; i > 1; i--) {
						s *= i;
					}
	
					a[n] = s;
					return s;
	
				};
	
			})(),
	
			CatmullRom: function (p0, p1, p2, p3, t) {
	
				var v0 = (p2 - p0) * 0.5;
				var v1 = (p3 - p1) * 0.5;
				var t2 = t * t;
				var t3 = t * t2;
	
				return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
	
			}
	
		}
	
	};
	
	// UMD (Universal Module Definition)
	(function (root) {
	
		if (true) {
	
			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return TWEEN;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
		} else if (typeof module !== 'undefined' && typeof exports === 'object') {
	
			// Node.js
			module.exports = TWEEN;
	
		} else if (root !== undefined) {
	
			// Global variable
			root.TWEEN = TWEEN;
	
		}
	
	})(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wizard on 16/5/30.
	 */
	var Registry = function Registry(obj, handleNames) {
	
	  var _listenerMap = {};
	
	  obj.addHandleType = function (handles) {
	    var _loop = function _loop(i) {
	      var handleName = handles[i];
	      var list = _listenerMap[handleName];
	      if (!list) {
	        _listenerMap[handleName] = list = [];
	      }
	      obj[handleName + 'Register'] = function (target) {
	        if (list.indexOf(target) !== -1) {
	          return;
	        }
	        list.push(target);
	      };
	
	      obj[handleName + 'UnRegister'] = function (target) {
	        var index = list.indexOf(target);
	        if (index === -1) {
	          return;
	        }
	        list.splice(index, 1);
	      };
	
	      obj[handleName + 'Execute'] = function () {
	        for (var _i = 0; _i < list.length; ++_i) {
	          list[_i][handleName].apply(null, arguments);
	        }
	      };
	    };
	
	    for (var i = 0; i < handles.length; ++i) {
	      _loop(i);
	    }
	  };
	
	  obj.addHandleType(handleNames);
	
	  return obj;
	};
	
	exports.default = Registry;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wizard on 16/4/1.
	 */
	
	var timeoutLimit = 30 * 1000;
	
	//SRequest.get(defines.gameHomeURL, "s/Info/GetBag", {test: 1, name: "haha"}, data=> {
	//  console.log('resp 1' + JSON.stringify(data));
	//});
	//
	//SRequest.post(defines.gameHomeURL, "s/Info/RenamePet", {"pet_id": 1000}, data=> {
	//  console.log('resp 2' + JSON.stringify(data));
	//})
	
	var SRequest = SRequest || function () {
	  var that = {};
	
	  that.get = function (baseURL, handlerURL, params, cb) {
	    var xhr = new XMLHttpRequest();
	
	    var paramStr = getURLParamsString(params);
	    console.log("get string: " + baseURL + handlerURL + paramStr);
	
	    xhr.open("GET", baseURL + handlerURL + paramStr, true);
	    xhr.timeout = timeoutLimit;
	    xhr.onload = function () {
	      var data = JSON.parse(xhr.responseText);
	      if (cb) {
	        cb.call(undefined, data);
	      }
	    };
	    xhr.ontimeout = function () {
	      if (cb) {
	        cb.call(undefined, { timeout: true });
	      }
	    };
	    xhr.send();
	  };
	
	  that.post = function (baseURL, handlerURL, urlParams, params, cb) {
	
	    var xhr = new XMLHttpRequest(); // new HttpRequest instance
	    console.log('post', baseURL + handlerURL + getURLParamsString(urlParams));
	    xhr.open("POST", baseURL + handlerURL + getURLParamsString(urlParams), true);
	    xhr.setRequestHeader("Content-Type", "application/json");
	    xhr.timeout = timeoutLimit;
	    xhr.onload = function () {
	      //console.log('xhr.onload',xhr.responseText);
	      var data = JSON.parse(xhr.responseText);
	      if (cb) {
	        cb.call(undefined, data);
	      }
	    };
	    xhr.ontimeout = function () {
	      if (cb) {
	        cb.call(undefined, { timeout: true });
	      }
	    };
	    console.log('xhr.onload', params);
	    var bodyContent = params ? JSON.stringify(params) : "";
	    xhr.onerror = function (e) {
	      console.log('server error ' + e);
	      if (cb) {
	        cb.call(this, { timeout: true });
	      }
	    };
	    xhr.send(bodyContent);
	  };
	
	  that.jump = function (url, params) {
	    var paramStr = getURLParamsString(params);
	    console.log("jump to url: " + url + paramStr);
	    window.location.href = url + paramStr;
	  };
	
	  var getURLParamsString = function getURLParamsString(params, isStart) {
	    var paramStr = "";
	    if (params) {
	      var start = isStart != undefined ? isStart : true;
	      for (var index in params) {
	        if (start) {
	          start = false;
	          paramStr += "?";
	        } else {
	          paramStr += "&";
	        }
	        paramStr += index + "=" + params[index];
	      }
	    }
	
	    return paramStr;
	  };
	
	  return that;
	}();
	
	exports.default = SRequest;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _scale3Sprite = __webpack_require__(16);
	
	var _scale3Sprite2 = _interopRequireDefault(_scale3Sprite);
	
	var _scale9Sprite = __webpack_require__(19);
	
	var _scale9Sprite2 = _interopRequireDefault(_scale9Sprite);
	
	var _scrollView = __webpack_require__(20);
	
	var _scrollView2 = _interopRequireDefault(_scrollView);
	
	var _listView = __webpack_require__(22);
	
	var _listView2 = _interopRequireDefault(_listView);
	
	var _pageView = __webpack_require__(23);
	
	var _pageView2 = _interopRequireDefault(_pageView);
	
	var _button = __webpack_require__(24);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _progressBar = __webpack_require__(25);
	
	var _progressBar2 = _interopRequireDefault(_progressBar);
	
	var _radioButton = __webpack_require__(26);
	
	var _radioButton2 = _interopRequireDefault(_radioButton);
	
	var _radioGroup = __webpack_require__(27);
	
	var _radioGroup2 = _interopRequireDefault(_radioGroup);
	
	var _checkBox = __webpack_require__(29);
	
	var _checkBox2 = _interopRequireDefault(_checkBox);
	
	var _creater = __webpack_require__(30);
	
	var _creater2 = _interopRequireDefault(_creater);
	
	var _bmLabel = __webpack_require__(31);
	
	var _bmLabel2 = _interopRequireDefault(_bmLabel);
	
	var _input = __webpack_require__(32);
	
	var _input2 = _interopRequireDefault(_input);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import UIManager from './ui-manager'
	exports.default = {
	  Scale3Sprite: _scale3Sprite2.default,
	  Scale9Sprite: _scale9Sprite2.default,
	  ScrollView: _scrollView2.default,
	  ListView: _listView2.default,
	  PageView: _pageView2.default,
	  ProgressBar: _progressBar2.default,
	  RadioButton: _radioButton2.default,
	  RadioGroup: _radioGroup2.default,
	  Button: _button2.default,
	  CheckBox: _checkBox2.default,
	  BMLabel: _bmLabel2.default,
	  Input: _input2.default,
	  UIManager: _creater2.default,
	  create: _creater2.default.create,
	  addComponent: _creater2.default.addTemplete
	}; /**
	    * Created by wizard on 16/5/3.
	    */

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiExtends = __webpack_require__(17);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Scale3Sprite = function Scale3Sprite(spec) {
	
	  var _baseTexture = null;
	  var _leftTexture = null;
	  var _centerTexture = null;
	  var _rightTexture = null;
	
	  var _node = new PIXI.Container();
	
	  (0, _uiExtends2.default)(spec.id, _node, {});
	
	  (function () {
	
	    _baseTexture = PIXI.Texture.fromImage(spec.bg);
	
	    var x = _baseTexture.frame.x;
	    var y = _baseTexture.frame.y;
	
	    _leftTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(x, y, spec.offsetX, _baseTexture.frame.height));
	    _centerTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + x, y, spec.tilingWidth, _baseTexture.frame.height));
	    _rightTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + spec.tilingWidth + x, y, _baseTexture.frame.width - spec.offsetX - spec.tilingWidth, _baseTexture.frame.height));
	
	    var leftSprite = new PIXI.Sprite(_leftTexture);
	    //leftSprite.width = spec.offsetX;
	
	    var centerSprite = new PIXI.Sprite(_centerTexture);
	    centerSprite.width = spec.width - spec.offsetX * 2;
	    centerSprite.position.x = spec.offsetX;
	
	    var rightSprite = new PIXI.Sprite(_rightTexture);
	    //rightSprite.width = rightWidth;
	
	    rightSprite.position.x = spec.width - spec.offsetX;
	    console.log('right pos: ' + rightSprite.position.x);
	
	    _node.addChild(leftSprite);
	    _node.addChild(centerSprite);
	    _node.addChild(rightSprite);
	
	    var _centerPosition = function _centerPosition(spriteList) {
	      for (var i = 0; i < spriteList.length; ++i) {
	        spriteList[i].position.x -= spec.width / 2;
	        spriteList[i].position.y -= _baseTexture.height / 2;
	      }
	    };
	
	    _centerPosition([leftSprite, centerSprite, rightSprite]);
	  })();
	  return _node;
	}; /**
	    * Created by wizard on 16/4/29.
	    */
	exports.default = Scale3Sprite;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inherited = __webpack_require__(18);
	
	var _inherited2 = _interopRequireDefault(_inherited);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UIExtends = function UIExtends(uid, obj, uiObj) {
	  Object.defineProperty(obj, 'node', {
	    get: function get() {
	      return obj;
	    }
	  });
	
	  if (uiObj) {
	    (0, _inherited2.default)(uiObj);
	    Object.defineProperty(obj, 'uiController', {
	      get: function get() {
	        return uiObj;
	      }
	    });
	  }
	
	  if (uid || uid === 0) {
	    (function () {
	      var _uid = uid;
	      Object.defineProperty(obj, 'id', {
	        get: function get() {
	          return _uid;
	        }
	      });
	    })();
	  }
	}; /**
	    * Created by wizard on 16/5/20.
	    */
	
	exports.default = UIExtends;

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by wizard on 15/3/3.
	 */
	var Inherited = function Inherited(obj) {
	    var registry = {};
	
	    obj.inheritOn = function (name, handler) {
	
	        if (!obj.hasOwnProperty(name)) {
	            obj[name] = handler;
	            return;
	        }
	
	        if (registry.hasOwnProperty(name)) {
	            registry[name].push(handler);
	        } else {
	            var parentHandler = obj[name];
	            registry[name] = [parentHandler, handler];
	
	            obj[name] = function () {
	                var result = void 0;
	                var handlerList = registry[name];
	                for (var index in handlerList) {
	                    result = handlerList[index].apply(this, arguments);
	                    if (result != undefined && !result) {
	                        return result;
	                    }
	                }
	
	                return result;
	            };
	        }
	    };
	
	    return obj;
	};
	
	exports.default = Inherited;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiExtends = __webpack_require__(17);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Scale9Sprite = function Scale9Sprite(spec) {
	  var _baseTexture = null;
	
	  var _leftUpTexture = null;
	  var _upTexture = null;
	  var _rightUpTexture = null;
	
	  var _leftTexture = null;
	  var _centerTexture = null;
	  var _rightTexture = null;
	
	  var _leftDownTexture = null;
	  var _downTexture = null;
	  var _rightDownTexture = null;
	
	  var _node = new PIXI.Container();
	
	  (0, _uiExtends2.default)(spec.id, _node, {});
	
	  (function () {
	    _baseTexture = PIXI.Texture.fromImage(spec.bg);
	
	    var x = _baseTexture.frame.x;
	    var y = _baseTexture.frame.y;
	
	    var rightWidth = _baseTexture.frame.width - spec.offsetX - spec.tilingWidth;
	    var bottomHeight = _baseTexture.frame.height - spec.offsetY - spec.tilingHeight;
	
	    _leftUpTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(x, y, spec.offsetX, spec.offsetY));
	    _upTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + x, y, spec.tilingWidth, spec.offsetY));
	    _rightUpTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + spec.tilingWidth + x, y, rightWidth, spec.offsetY));
	
	    _leftTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(x, spec.offsetY + y, spec.offsetX, spec.tilingHeight));
	    _centerTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + x, spec.offsetY + y, spec.tilingWidth, spec.tilingHeight));
	    _rightTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + spec.tilingWidth + x, spec.offsetY + y, rightWidth, spec.tilingHeight));
	
	    _leftDownTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(x, spec.offsetY + spec.tilingHeight + y, spec.offsetX, bottomHeight));
	    _downTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + x, spec.offsetY + spec.tilingHeight + y, spec.tilingWidth, bottomHeight));
	    _rightDownTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + spec.tilingWidth + x, spec.offsetY + spec.tilingHeight + y, rightWidth, bottomHeight));
	
	    //up
	    var leftUpSprite = new PIXI.Sprite(_leftUpTexture);
	    leftUpSprite.width = spec.offsetX;
	    leftUpSprite.height = spec.offsetY;
	
	    var upSprite = new PIXI.Sprite(_upTexture);
	    upSprite.width = spec.width - spec.offsetX - rightWidth;
	    upSprite.height = spec.offsetY;
	
	    var rightUpSprite = new PIXI.Sprite(_rightUpTexture);
	    rightUpSprite.width = rightWidth;
	    rightUpSprite.height = spec.offsetY;
	
	    //middle
	    var leftSprite = new PIXI.Sprite(_leftTexture);
	    leftSprite.width = spec.offsetX;
	    leftSprite.height = spec.height - spec.offsetY - bottomHeight;
	
	    var centerSprite = new PIXI.Sprite(_centerTexture);
	    centerSprite.width = spec.width - spec.offsetX - rightWidth;
	    centerSprite.height = spec.height - spec.offsetY - bottomHeight;
	
	    var rightSprite = new PIXI.Sprite(_rightTexture);
	    rightSprite.width = rightWidth;
	    rightSprite.height = spec.height - spec.offsetY - bottomHeight;
	
	    //down
	    var leftDownSprite = new PIXI.Sprite(_leftDownTexture);
	    leftDownSprite.width = spec.offsetX;
	    leftDownSprite.height = bottomHeight;
	
	    var downSprite = new PIXI.Sprite(_downTexture);
	    downSprite.width = spec.width - spec.offsetX - rightWidth;
	    downSprite.height = bottomHeight;
	
	    var rightDownSprite = new PIXI.Sprite(_rightDownTexture);
	    rightDownSprite.width = rightWidth;
	    rightDownSprite.height = bottomHeight;
	
	    upSprite.position.x = spec.offsetX;
	    rightUpSprite.position.x = spec.width - rightWidth;
	
	    leftSprite.position = {
	      x: 0,
	      y: spec.offsetY
	    };
	    centerSprite.position = {
	      x: spec.offsetX,
	      y: spec.offsetY
	    };
	    rightSprite.position = {
	      x: spec.width - rightWidth,
	      y: spec.offsetY
	    };
	
	    leftDownSprite.position = {
	      x: 0,
	      y: spec.height - bottomHeight
	    };
	    downSprite.position = {
	      x: spec.offsetX,
	      y: spec.height - bottomHeight
	    };
	    rightDownSprite.position = {
	      x: spec.width - rightWidth,
	      y: spec.height - bottomHeight
	    };
	
	    var _putSprites = function _putSprites(spritesList) {
	      for (var i = 0; i < spritesList.length; ++i) {
	        spritesList[i].position.x -= spec.width / 2;
	        spritesList[i].position.y -= spec.height / 2;
	
	        _node.addChild(spritesList[i]);
	      }
	    };
	
	    _putSprites([leftUpSprite, upSprite, rightUpSprite, leftSprite, centerSprite, rightSprite, leftDownSprite, downSprite, rightDownSprite]);
	  })();
	
	  return _node;
	}; /**
	    * Created by wizard on 16/4/29.
	    */
	exports.default = Scale9Sprite;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiExtends = __webpack_require__(17);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	var _defaultDefines = __webpack_require__(21);
	
	var _defaultDefines2 = _interopRequireDefault(_defaultDefines);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScrollView = function ScrollView(spec) {
	  var _uiParts = {
	    bounceX: spec.bounceX != undefined ? spec.bounceX : _defaultDefines2.default.bounceMax,
	    bounceY: spec.bounceY != undefined ? spec.bounceY : _defaultDefines2.default.bounceMax,
	    bounceSpeed: spec.bounceSpeed != undefined ? spec.bounceSpeed : _defaultDefines2.default.bounceSpeed,
	    contentBounds: spec.bounds,
	
	    _state: null,
	
	    //behaviour
	    _collideBounds: null,
	    _controlMove: null,
	    _springMove: null,
	    _pushItem: null
	  };
	
	  var _node = null;
	  var _mask = null;
	  var _contentNode = null;
	  (function () {
	    _node = new PIXI.Container();
	    _mask = new PIXI.Graphics();
	    _mask.filling = true;
	    _mask.drawRect(0, 0, spec.width, spec.height);
	    _node.addChild(_mask);
	
	    _node.interactive = true;
	    _node.hitArea = new PIXI.Rectangle(0, 0, spec.width, spec.height);
	
	    _contentNode = new PIXI.Container();
	    _contentNode.mask = _mask;
	    _node.addChild(_contentNode);
	
	    (0, _uiExtends2.default)(spec.id, _node, _uiParts);
	  })();
	
	  //debug
	  if (_gameDefines2.default.debugMode) {
	    (function () {
	      var debug = new PIXI.Graphics();
	      debug.lineStyle(1, 0x0000FF, 1);
	      debug.drawRect(0, 0, spec.width, spec.height);
	      _node.addChild(debug);
	    })();
	  }
	
	  var MovingState = {
	    auto: 0,
	    touching: 1
	  };
	
	  var _setState = function _setState(newState) {
	    if (_uiParts._state === newState) {
	      return;
	    }
	
	    _uiParts._state = newState;
	  };
	
	  _uiParts._controlMove = function (x, y) {
	    _contentNode.position.x += x;
	    _contentNode.position.y += y;
	
	    _contentNode.position.x = Math.min(_contentNode.position.x, _uiParts.contentBounds.right + _uiParts.bounceX);
	    _contentNode.position.x = Math.max(_contentNode.position.x, _uiParts.contentBounds.left - _uiParts.bounceX);
	
	    _contentNode.position.y = Math.min(_contentNode.position.y, _uiParts.contentBounds.bottom + _uiParts.bounceY);
	    _contentNode.position.y = Math.max(_contentNode.position.y, _uiParts.contentBounds.top - _uiParts.bounceY);
	  };
	
	  var _lastPos = null;
	  var _onTouchBegin = function _onTouchBegin(event) {
	    _lastPos = {
	      x: event.data.global.x,
	      y: event.data.global.y
	    };
	
	    _setState(MovingState.touching);
	  };
	
	  var _onTouchMove = function _onTouchMove(event) {
	    if (!_lastPos) {
	      return;
	    }
	
	    var pos = event.data.global;
	
	    _uiParts._controlMove(pos.x - _lastPos.x, pos.y - _lastPos.y);
	
	    _lastPos = {
	      x: pos.x,
	      y: pos.y
	    };
	  };
	
	  var _onTouchEnd = function _onTouchEnd(event) {
	    //console.log('touch end : '+ JSON.stringify(event.data) );
	    _lastPos = null;
	    _setState(MovingState.auto);
	  };
	
	  (function () {
	    _node.on('touchstart', _onTouchBegin).on('mousedown', _onTouchBegin);
	
	    _node.on('mouseup', _onTouchEnd).on('touchend', _onTouchEnd).on('mouseupoutside', _onTouchEnd).on('touchendoutside', _onTouchEnd);
	
	    _node.on('touchmove', _onTouchMove).on('mousemove', _onTouchMove);
	  })();
	
	  _uiParts._pushItem = function (item) {
	    _contentNode.addChild(item);
	  };
	
	  _uiParts._collideBounds = function (dt) {
	    var isCollide = false;
	    if (_contentNode.position.x < _uiParts.contentBounds.left) {
	      _contentNode.position.x += dt * _uiParts.bounceSpeed / 1000;
	      if (Math.abs(_contentNode.position.x - _uiParts.contentBounds.left) <= 5) {
	        _contentNode.position.x = _uiParts.contentBounds.left;
	      }
	      isCollide = true;
	    }
	
	    if (_contentNode.position.x > _uiParts.contentBounds.right) {
	      _contentNode.position.x -= dt * _uiParts.bounceSpeed / 1000;
	      if (Math.abs(_contentNode.position.x - _uiParts.contentBounds.right) <= 5) {
	        _contentNode.position.x = _uiParts.contentBounds.right;
	      }
	      isCollide = true;
	    }
	
	    if (_contentNode.position.y < _uiParts.contentBounds.top) {
	      _contentNode.position.y += dt * _uiParts.bounceSpeed / 1000;
	      if (Math.abs(_contentNode.position.y - _uiParts.contentBounds.top) <= 5) {
	        _contentNode.position.y = _uiParts.contentBounds.top;
	      }
	      isCollide = true;
	    }
	
	    if (_contentNode.position.y > _uiParts.contentBounds.bottom) {
	      _contentNode.position.y -= dt * _uiParts.bounceSpeed / 1000;
	      if (Math.abs(_contentNode.position.y - _uiParts.contentBounds.bottom) <= 5) {
	        _contentNode.position.y = _uiParts.contentBounds.bottom;
	      }
	      isCollide = true;
	    }
	
	    return isCollide;
	  };
	
	  _uiParts._springMove = function (dt) {};
	
	  _uiParts.update = function (dt) {
	    if (_uiParts._state != MovingState.auto) {
	      return;
	    }
	
	    if (_uiParts._collideBounds(dt)) {
	      return;
	    }
	
	    _uiParts._springMove(dt);
	  };
	
	  PIXI.ticker.shared.add(function () {
	    //console.log('delta time: ' + PIXI.ticker.shared.deltaTime);
	    _uiParts.update(PIXI.ticker.shared.deltaTime * PIXI.ticker.shared.minFPS);
	  });
	
	  _setState(MovingState.auto);
	
	  Object.defineProperty(_node, 'contentNode', {
	    get: function get() {
	      return _contentNode;
	    }
	  });
	
	  Object.defineProperty(_node, 'pushItem', {
	    get: function get() {
	      return _uiParts._pushItem;
	    }
	  });
	
	  return _node;
	}; /**
	    * Created by wizard on 16/5/3.
	    */
	exports.default = ScrollView;

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wizard on 16/5/20.
	 */
	
	exports.default = {
	  bounceMax: 50,
	  bounceSpeed: 200,
	  itemSpacing: 5
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _scrollView = __webpack_require__(20);
	
	var _scrollView2 = _interopRequireDefault(_scrollView);
	
	var _defaultDefines = __webpack_require__(21);
	
	var _defaultDefines2 = _interopRequireDefault(_defaultDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/5/3.
	 */
	
	var ListItem = function ListItem(item, length) {
	  return {
	    item: item,
	    length: length
	  };
	};
	
	var ListView = function ListView(spec) {
	  spec.type = spec.type ? spec.type : "vertical";
	  spec.bounds = {
	    left: 0,
	    right: 0,
	    top: 0,
	    bottom: 0
	  };
	  if (spec.type == 'horizontal') {
	    spec.bounceY = 0;
	  } else {
	    spec.bounceX = 0;
	  }
	
	  var that = (0, _scrollView2.default)(spec);
	
	  var _itemList = [];
	  var _uiParts = that.uiController;
	
	  _uiParts._pushItem = function (child, customLength) {
	
	    var length = customLength ? customLength : spec.itemLength;
	    var spacing = spec.itemSpacing != undefined ? spec.itemSpacing : _defaultDefines2.default.itemSpacing;
	
	    that.contentNode.addChild(child);
	
	    var start = 0;
	    for (var i = 0; i < _itemList.length; ++i) {
	      start += _itemList[i].length + spacing;
	    }
	
	    if (spec.type == 'horizontal') {
	
	      child.position = {
	        x: start + length / 2,
	        y: spec.height / 2
	      };
	      _uiParts.contentBounds.left = Math.min(0, spec.width - start - length);
	      //console.log('list horizontal add child: ' + length);
	    } else if (spec.type == 'vertical') {
	      //console.log('list  vertical add child: ' + length);
	      child.position = {
	        x: spec.width / 2,
	        y: start + length / 2
	      };
	      _uiParts.contentBounds.top = Math.min(0, spec.height - start - length);
	    }
	
	    _itemList.push(ListItem(child, length));
	  };
	
	  var _clearItems = function _clearItems() {
	    for (var i = 0; i < _itemList.length; ++i) {
	      that.contentNode.removeChild(_itemList[i].item);
	    }
	
	    _itemList = [];
	    _uiParts.contentBounds = {
	      left: 0,
	      right: 0,
	      top: 0,
	      bottom: 0
	    };
	
	    that.contentNode.position.set(0, 0);
	  };
	
	  Object.defineProperty(that, 'clearItems', {
	    get: function get() {
	      return _clearItems;
	    }
	  });
	
	  return that;
	};
	
	exports.default = ListView;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _scrollView = __webpack_require__(20);
	
	var _scrollView2 = _interopRequireDefault(_scrollView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PageView = function PageView(spec) {
	  spec.type = spec.type ? spec.type : "vertical";
	  spec.bounds = {
	    left: 0,
	    right: 0,
	    top: 0,
	    bottom: 0
	  };
	  spec.bounceY = 0;
	  spec.bounceX = 0;
	
	  var that = (0, _scrollView2.default)(spec);
	  var _uiParts = that.uiController;
	
	  var _pageList = [];
	  _uiParts.currentIndex = 0;
	
	  _uiParts._pushItem = function (child) {
	    console.log('page push item');
	    that.contentNode.addChild(child);
	
	    var start = 0;
	
	    if (spec.type == 'horizontal') {
	      start = _pageList.length * spec.width;
	      child.position = {
	        x: start + spec.width / 2,
	        y: spec.height / 2
	      };
	      _uiParts.contentBounds.left = -_pageList.length * spec.width;
	    } else if (spec.type == 'vertical') {
	      start = _pageList.length * spec.height;
	      child.position = {
	        x: spec.width / 2,
	        y: start + spec.height / 2
	      };
	      _uiParts.contentBounds.top = -_pageList.length * spec.height;
	    }
	
	    _pageList.push(child);
	  };
	
	  _uiParts._springMove = function (dt) {
	    if (_pageList.length <= 0) {
	      return;
	    }
	
	    switch (spec.type) {
	      case 'horizontal':
	        var targetX = -_uiParts.currentIndex * spec.width;
	
	        if (Math.abs(that.contentNode.position.x - targetX) <= 10) {
	          that.contentNode.position.x = targetX;
	        } else {
	          that.contentNode.position.x += targetX > that.contentNode.position.x ? dt * 0.5 : dt * -0.5;
	        }
	        break;
	      case 'vertical':
	        var targetY = -_uiParts.currentIndex * spec.height;
	        if (Math.abs(that.contentNode.position.y - targetY) <= 10) {
	          that.contentNode.position.y = targetY;
	        } else {
	          that.contentNode.position.y += targetY > that.contentNode.position.y ? dt * 0.5 : dt * -0.5;
	        }
	        break;
	      default:
	        break;
	    }
	  };
	
	  _uiParts.inheritOn('_controlMove', function (x, y) {
	    switch (spec.type) {
	      case 'horizontal':
	        _uiParts.currentIndex = Math.floor((-that.contentNode.position.x + spec.width / 2) / spec.width);
	        break;
	      case 'vertical':
	        _uiParts.currentIndex = Math.floor((-that.contentNode.position.y + spec.height / 2) / spec.height);
	        break;
	      default:
	        break;
	    }
	  });
	
	  Object.defineProperty(that, 'pageCount', {
	    get: function get() {
	      return _pageList.length;
	    }
	  });
	
	  Object.defineProperty(that, 'length', {
	    set: function set(val) {
	      spec.width = val;
	    }
	  });
	
	  Object.defineProperty(that, 'currentIndex', {
	    get: function get() {
	      return _uiParts.currentIndex;
	    },
	    set: function set(val) {
	      _uiParts.currentIndex = val;
	    }
	  });
	
	  return that;
	}; /**
	    * Created by wizard on 16/5/12.
	    */
	exports.default = PageView;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiExtends = __webpack_require__(17);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Button = function Button(spec) {
	
	  var _uiParts = {
	    normalTexture: null,
	    disableTexture: null,
	    enable: true,
	    onClick: null
	  };
	
	  var _sprite = null;
	  var _label = null;
	
	  (function () {
	    _uiParts.normalTexture = PIXI.Texture.fromImage(spec.bg);
	    if (spec.bg_disable) {
	      _uiParts.disableTexture = PIXI.Texture.fromImage(spec.bg_disable);
	    }
	
	    _sprite = new PIXI.Sprite();
	    _sprite.texture = _uiParts.normalTexture;
	
	    _sprite.anchor.set(0.5);
	
	    _sprite.interactive = true;
	
	    (0, _uiExtends2.default)(spec.id, _sprite, _uiParts);
	  })();
	
	  var _setTitle = function _setTitle(content) {
	    if (content == undefined || content == null) {
	      return;
	    }
	
	    if (!_label) {
	      var style = spec.style ? spec.style : { font: '12px Arial', fill: '#FFFFFF' };
	      var resolution = spec.resolution ? spec.resolution : 1;
	      _label = new PIXI.Text('', style, resolution);
	      if (spec.textAnchor) {
	        _label.anchor = spec.textAnchor;
	      } else {
	        _label.anchor.set(0.5);
	      }
	      _label.position.set(0);
	      _sprite.addChild(_label);
	    }
	
	    _label.text = content;
	  };
	  _setTitle(spec.text);
	
	  var _oriScale = null;
	
	  var _playClickDownAction = function _playClickDownAction() {
	    if (!_uiParts.enable) {
	      return;
	    }
	
	    //_oriPosY = that.node.position.y;
	    //that.node.position.y += 1;
	
	    _oriScale = {
	      x: _sprite.scale.x,
	      y: _sprite.scale.y
	    };
	
	    _sprite.scale = {
	      x: _oriScale.x * 0.98,
	      y: _oriScale.y * 0.98
	    };
	
	    _sprite.tint = 0xAAAAAA;
	  };
	
	  var _playClickUpAction = function _playClickUpAction() {
	    if (!_uiParts.enable) {
	      return;
	    }
	
	    _sprite.tint = 0xFFFFFF;
	
	    if (!_oriScale) {
	      return;
	    }
	
	    _sprite.scale = _oriScale;
	
	    //
	    //if (!_oriPosY) {
	    //  return;
	    //}
	    //that.node.position.y = _oriPosY;
	    //_oriPosY = null;
	  };
	
	  var _touchBegin = function _touchBegin(event, target) {
	    //console.log("touch Begin");
	    _playClickDownAction();
	  };
	
	  var _touchMoved = function _touchMoved(event, target) {};
	
	  var _touchCancel = function _touchCancel(event, target) {
	    //console.log("touch Cancel");
	    _playClickUpAction();
	  };
	
	  var _touchEnd = function _touchEnd(event, target) {
	    //console.log("touch end");
	    _playClickUpAction();
	  };
	
	  var _onClick = function _onClick() {
	    //console.log("btn click");
	    if (_uiParts.onClick && _uiParts.enable) {
	      _uiParts.onClick.call(undefined, _sprite);
	    }
	  };
	
	  (function () {
	    _sprite.on("mousedown", _touchBegin).on("mousemove", _touchMoved).on("mouseout", _touchCancel).on("mouseup", _touchEnd).on("touchstart", _touchBegin).on("touchmove", _touchMoved).on("touchendoutside", _touchCancel).on("touchend", _touchEnd).on("click", _onClick).on("tap", _onClick);
	  })();
	
	  Object.defineProperty(_sprite, "enable", {
	    get: function get() {
	      return _uiParts.enable;
	    },
	    set: function set(val) {
	      _uiParts.enable = val;
	      console.log('enable btn: ' + _uiParts.enable);
	      if (_uiParts.enable) {
	        _sprite.texture = _uiParts.normalTexture;
	        _sprite.tint = 0xFFFFFF;
	      } else {
	        if (_uiParts.disableTexture) {
	          _sprite.texture = _uiParts.disableTexture;
	        } else {
	          _sprite.tint = 0xAAAAAA;
	        }
	      }
	    }
	  });
	
	  Object.defineProperty(_sprite, "text", {
	    get: function get() {
	      return _label ? _label.text : '';
	    },
	    set: function set(val) {
	      _setTitle(val);
	    }
	  });
	
	  Object.defineProperty(_sprite, "onClick", {
	    get: function get() {
	      return _uiParts.onClick;
	    },
	    set: function set(val) {
	      _uiParts.onClick = val;
	    }
	  });
	
	  return _sprite;
	}; /**
	    * Created by hewenlong on 16-5-3.
	    */
	
	exports.default = Button;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiExtends = __webpack_require__(17);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ProgressBar = function ProgressBar(spec) {
	
	  var _uiParts = {
	    direction: spec.direction ? spec.direction : 'left',
	    percent: 0
	  };
	
	  var _node = new PIXI.Container();
	
	  var _frontSprite = null;
	  var _backSprite = null;
	  var _label = null;
	  var _mask = null;
	
	  (function () {
	    (0, _uiExtends2.default)(spec.id, _node, _uiParts);
	
	    if (spec.bg) {
	      _backSprite = PIXI.Sprite.fromImage(spec.bg);
	      _backSprite.anchor = {
	        x: 0.5,
	        y: 0.5
	      };
	      _node.addChild(_backSprite);
	      if (spec.width) {
	        _backSprite.width = spec.width;
	      }
	    }
	
	    _frontSprite = PIXI.Sprite.fromImage(spec.fg);
	    if (spec.width) {
	      _frontSprite.width = spec.width;
	    }
	    if (spec.tint) {
	      _frontSprite.tint = spec.tint;
	    }
	
	    _frontSprite.anchor.set(0.5);
	
	    _mask = new PIXI.Graphics();
	    _mask.clear();
	    _mask.beginFill();
	    _mask.drawRect(0, 0, 0, 0);
	    _mask.endFill();
	    _frontSprite.mask = _mask;
	    _node.addChild(_mask);
	
	    _mask.position = {
	      x: -_frontSprite.width / 2,
	      y: -_frontSprite.height / 2
	    };
	
	    _node.addChild(_frontSprite);
	  })();
	
	  var _setContent = function _setContent(content) {
	    if (content == undefined || content == null) {
	      return;
	    }
	
	    if (!_label) {
	      var textStyle = spec.style ? spec.style : { font: '12px Arial', fill: '#FFFFFF' };
	      var resolution = spec.resolution ? spec.resolution : 1;
	      _label = new PIXI.Text('', textStyle, resolution);
	      _label.anchor.set(0.5);
	      _node.addChild(_label);
	    }
	
	    _label.text = content;
	  };
	  _setContent(spec.text);
	
	  //percent from 0 to 100
	  var _setPercent = function _setPercent(percent) {
	    _uiParts.percent = percent;
	    var realPercent = percent / 100;
	    var x = void 0,
	        y = void 0,
	        width = void 0,
	        height = void 0;
	    switch (_uiParts.direction) {
	      case 'left':
	        x = 0;
	        y = 0;
	        width = _frontSprite.width * realPercent;
	        height = _frontSprite.height;
	        break;
	      case 'right':
	        x = _frontSprite.width * (1 - realPercent);
	        y = 0;
	        width = _frontSprite.width * realPercent;
	        height = _frontSprite.height;
	        break;
	      case 'up':
	        x = 0;
	        y = 0;
	        width = _frontSprite.width;
	        height = _frontSprite.height * realPercent;
	        break;
	      case 'down':
	        x = 0;
	        y = _frontSprite.height * (1 - realPercent);
	        width = _frontSprite.width;
	        height = _frontSprite.height * realPercent;
	        break;
	      default:
	        console.log('wrong progress direction: ' + _uiParts.direction + '\n only support left|right|up|down');
	        break;
	    }
	
	    _mask.clear();
	    _mask.beginFill();
	    _mask.drawRect(x, y, width, height);
	    _mask.endFill();
	  };
	
	  Object.defineProperty(_node, "percent", {
	    get: function get() {
	      return _uiParts.percent;
	    },
	    set: function set(val) {
	      _setPercent(val);
	    }
	  });
	
	  Object.defineProperty(_node, "text", {
	    get: function get() {
	      return _label ? _label.text : '';
	    },
	    set: function set(val) {
	      _setContent(val);
	    }
	  });
	
	  Object.defineProperty(_node, "tint", {
	    set: function set(val) {
	      _frontSprite.tint = val;
	    }
	  });
	
	  return _node;
	}; /**
	    * Created by hewenlong on 16-5-4.
	    */
	
	exports.default = ProgressBar;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiExtends = __webpack_require__(17);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RadioButton = function RadioButton(spec) {
	
	  var RadioState = {
	    unchecked: 0,
	    checked: 1
	  };
	
	  var _sprite = null;
	  var _uiParts = {
	    //texture
	    checkedTexture: null,
	    uncheckedTexture: null,
	
	    _state: null,
	    group: null,
	
	    //events
	    onCheckOn: null,
	    onCheckOff: null,
	    onCheckChange: null,
	
	    //behaviour
	    _onClick: function _onClick() {
	      _sprite.checked = true;
	    }
	  };
	
	  (function () {
	
	    _uiParts.checkedTexture = PIXI.Texture.fromImage(spec.bg_on);
	    _uiParts.uncheckedTexture = PIXI.Texture.fromImage(spec.bg_off);
	
	    _sprite = new PIXI.Sprite();
	    _sprite.anchor.set(0.5);
	    _sprite.interactive = true;
	
	    //_onClick may be override later
	    _sprite.on('click', function () {
	      return _uiParts._onClick();
	    }).on('tap', function () {
	      return _uiParts._onClick();
	    });
	
	    (0, _uiExtends2.default)(spec.id, _sprite, _uiParts);
	  })();
	
	  var _setState = function _setState(newState) {
	    if (_uiParts._state == newState) {
	      return;
	    }
	
	    switch (newState) {
	      case RadioState.checked:
	        if (_uiParts.group) {
	          _uiParts.group.fire('ui_control:check_on', _sprite);
	        }
	        _sprite.texture = _uiParts.checkedTexture;
	        if (_uiParts.onCheckOn) {
	          _uiParts.onCheckOn.call(undefined, _sprite);
	        }
	        break;
	      case RadioState.unchecked:
	        _sprite.texture = _uiParts.uncheckedTexture;
	        if (_uiParts.onCheckOff) {
	          _uiParts.onCheckOff.call(undefined, _sprite);
	        }
	        break;
	      default:
	        console.log('wrong radio state' + newState);
	        break;
	    }
	    _uiParts._state = newState;
	    if (_uiParts.onCheckChange) {
	      _uiParts.onCheckChange.call(undefined, _sprite);
	    }
	  };
	
	  _setState(RadioState.unchecked);
	
	  Object.defineProperty(_sprite, 'checked', {
	    get: function get() {
	      return _uiParts._state == RadioState.checked ? true : false;
	    },
	    set: function set(val) {
	      if (val) {
	        _setState(RadioState.checked);
	      } else {
	        _setState(RadioState.unchecked);
	      }
	    }
	  });
	
	  (function () {
	    var handlerNames = ['group', 'onCheckOn', 'onCheckOff', 'onCheckChange'];
	
	    var _loop = function _loop(i) {
	      Object.defineProperty(_sprite, handlerNames[i], {
	        get: function get() {
	          return _uiParts[handlerNames[i]];
	        },
	        set: function set(val) {
	          _uiParts[handlerNames[i]] = val;
	        }
	      });
	    };
	
	    for (var i = 0; i < handlerNames.length; ++i) {
	      _loop(i);
	    }
	  })();
	
	  return _sprite;
	}; /**
	    * Created by wizard on 16/5/5.
	    */
	
	exports.default = RadioButton;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _eventuality = __webpack_require__(28);
	
	var _eventuality2 = _interopRequireDefault(_eventuality);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RadioGroup = function RadioGroup() {
	  var that = (0, _eventuality2.default)({});
	
	  var _radioList = [];
	
	  that.addChild = function (radio) {
	    _radioList.push(radio);
	    radio.group = that;
	  };
	
	  that.on('ui_control:check_on', function (radio) {
	    for (var i = 0; i < _radioList.length; ++i) {
	      if (radio.id === _radioList[i].id) {
	        continue;
	      }
	
	      _radioList[i].checked = false;
	    }
	  });
	
	  return that;
	}; /**
	    * Created by wizard on 16/5/5.
	    */
	
	exports.default = RadioGroup;

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Eventuality = function Eventuality(obj) {
	    var registry = {};
	
	    obj.fire = function (event) {
	
	        var handler = null;
	
	        if (registry.hasOwnProperty(event)) {
	            var event_list = registry[event];
	            for (var i = 0; i < event_list.length; ++i) {
	                handler = event_list[i];
	                var args = [];
	
	                //not including event
	                for (var n = 1; n < arguments.length; ++n) {
	                    args.push(arguments[n]);
	                }
	                handler.apply(this, args);
	            }
	        }
	
	        return this;
	    };
	
	    obj.on = function (type, method) {
	        if (registry.hasOwnProperty(type)) {
	            registry[type].push(method);
	        } else {
	            registry[type] = [method];
	        }
	
	        return this;
	    };
	
	    obj.removeListener = function (type, method) {
	        if (!registry.hasOwnProperty(type)) {
	            return false;
	        }
	        var index = registry[type].indexOf(method);
	        if (index >= 0) {
	            registry[type].splice(index, 1);
	        }
	    };
	
	    obj.removeAllListeners = function () {
	        registry = {};
	    };
	    return obj;
	};
	exports.default = Eventuality;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _radioButton = __webpack_require__(26);
	
	var _radioButton2 = _interopRequireDefault(_radioButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CheckBox = function CheckBox(spec) {
	  var that = (0, _radioButton2.default)(spec);
	
	  that.uiController._onClick = function () {
	    that.checked = !that.checked;
	  };
	
	  return that;
	}; /**
	    * Created by wizard on 16/5/5.
	    */
	
	exports.default = CheckBox;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(24);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _scale3Sprite = __webpack_require__(16);
	
	var _scale3Sprite2 = _interopRequireDefault(_scale3Sprite);
	
	var _scale9Sprite = __webpack_require__(19);
	
	var _scale9Sprite2 = _interopRequireDefault(_scale9Sprite);
	
	var _scrollView = __webpack_require__(20);
	
	var _scrollView2 = _interopRequireDefault(_scrollView);
	
	var _listView = __webpack_require__(22);
	
	var _listView2 = _interopRequireDefault(_listView);
	
	var _progressBar = __webpack_require__(25);
	
	var _progressBar2 = _interopRequireDefault(_progressBar);
	
	var _pageView = __webpack_require__(23);
	
	var _pageView2 = _interopRequireDefault(_pageView);
	
	var _radioGroup = __webpack_require__(27);
	
	var _radioGroup2 = _interopRequireDefault(_radioGroup);
	
	var _radioButton = __webpack_require__(26);
	
	var _radioButton2 = _interopRequireDefault(_radioButton);
	
	var _checkBox = __webpack_require__(29);
	
	var _checkBox2 = _interopRequireDefault(_checkBox);
	
	var _bmLabel = __webpack_require__(31);
	
	var _bmLabel2 = _interopRequireDefault(_bmLabel);
	
	var _uiExtends = __webpack_require__(17);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	var _input = __webpack_require__(32);
	
	var _input2 = _interopRequireDefault(_input);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Create = function Create() {
	  var that = {};
	
	  var _factor = {};
	
	  var _handleGroup = function _handleGroup(group, groupID, obj) {
	    if (!groupID && groupID !== 0) {
	      return;
	    }
	
	    var groupObj = group[groupID];
	    if (!groupObj) {
	      groupObj = (0, _radioGroup2.default)();
	      group[groupID] = groupObj;
	    }
	
	    groupObj.addChild(obj);
	  };
	  var _inputList = [];
	
	  var create = function create(parent, json, owner) {
	    var creatorName = 'create' + json.component;
	    if (!_factor.hasOwnProperty(creatorName)) {
	      console.log('ui control cont create ' + json.component, JSON.stringify(json));
	      json.component = 'Node';
	      creatorName = 'createNode';
	      //return null;
	    }
	
	    if (!json.bg && json.image) {
	      json.bg = json.image;
	    }
	
	    var obj = _factor[creatorName].call(undefined, json);
	
	    if (parent) {
	      parent.addChild(obj.node);
	    }
	
	    if (json.id != undefined) {
	      owner[json.id] = obj;
	    }
	
	    var addChildren = function addChildren(oneObj, oneJson) {
	      if (!oneJson.children) {
	        return;
	      }
	      for (var i = 0; i < oneJson.children.length; ++i) {
	        create(oneObj.node, oneJson.children[i], owner);
	      }
	    };
	
	    var pushChildren = function pushChildren(oneObj, oneJson) {
	      if (!oneJson.children) {
	        return;
	      }
	
	      for (var i = 0; i < oneJson.children.length; ++i) {
	        var child = create(null, oneJson.children[i], owner);
	        oneObj.pushItem(child.node, oneJson.children[i].length);
	      }
	    };
	
	    switch (json.component) {
	      case 'List':
	      case 'ListView':
	      case 'ScrollView':
	      case 'PageView':
	        pushChildren(obj, json);
	        break;
	      case 'Radio':
	      case 'CheckBox':
	        _handleGroup(owner.group, json.group, obj);
	        obj.checked = json.check;
	        addChildren(obj, json);
	        break;
	      case 'Input':
	        _inputList.push(json.id);
	        break;
	      case 'Button':
	        obj.onClick = owner.onClick;
	        addChildren(obj, json);
	        break;
	      default:
	        addChildren(obj, json);
	        break;
	    }
	
	    return obj;
	  };
	
	  var _alignComponent = function _alignComponent(node, json) {
	    if (json.anchor != undefined) {
	      node.anchor = json.anchor;
	    } else {
	      node.anchor = {
	        x: 0.5,
	        y: 0.5
	      };
	    }
	
	    if (json.position != undefined) {
	      node.position = json.position;
	    }
	
	    if (json.scale != undefined) {
	      node.scale = json.scale;
	    }
	    if (json.rotation != undefined) {
	      node.rotation = json.rotation;
	    }
	    if (json.alpha != undefined) {
	      node.alpha = json.alpha;
	    }
	    if (json.visible != undefined) {
	      node.visible = json.visible;
	    }
	  };
	
	  _factor.createLayout = _factor.createNode = function (json) {
	    var node = new PIXI.Container();
	    (0, _uiExtends2.default)(json.id, node);
	    _alignComponent(node, json);
	    return node;
	  };
	
	  _factor.createSprite = function (json) {
	    var sprite = json.bg ? PIXI.Sprite.fromImage(json.bg) : new PIXI.Sprite();
	    (0, _uiExtends2.default)(json.id, sprite);
	    _alignComponent(sprite, json);
	    return sprite;
	  };
	
	  _factor.createLabel = function (json) {
	    json.style = json.style ? json.style : { font: '20px Arial' };
	
	    var label = null;
	    if (json.style.bmfont) {
	      label = (0, _bmLabel2.default)(json);
	    } else {
	      var resolution = json.resolution ? json.resolution : 1;
	      label = new PIXI.Text(json.text, json.style, resolution);
	      (0, _uiExtends2.default)(json.id, label);
	    }
	    _alignComponent(label, json);
	    return label;
	  };
	
	  that.addTemplete = function (name, func) {
	    _factor['create' + name] = function (json) {
	      var layout = func(json);
	      _alignComponent(layout.node, json);
	      return layout;
	    };
	  };
	
	  that.addTemplete('Button', _button2.default);
	  that.addTemplete('Scale3Sprite', _scale3Sprite2.default);
	  that.addTemplete('Scale9Sprite', _scale9Sprite2.default);
	  that.addTemplete('ScrollView', _scrollView2.default);
	  that.addTemplete('ListView', _listView2.default);
	  that.addTemplete('List', _listView2.default);
	  that.addTemplete('ProgressBar', _progressBar2.default);
	  that.addTemplete('Progress', _progressBar2.default);
	  that.addTemplete('PageView', _pageView2.default);
	  that.addTemplete('Radio', _radioButton2.default);
	  that.addTemplete('CheckBox', _checkBox2.default);
	  that.addTemplete('BMLabel', _bmLabel2.default);
	  that.addTemplete('Input', _input2.default);
	
	  that.create = function (json, onClick) {
	    var obj = {
	      group: {}, //for radio group
	      onClick: onClick
	    };
	    _inputList = [];
	    obj.node = create(null, json, obj).node;
	    Object.defineProperty(obj, 'components', {
	      get: function get() {
	        return obj;
	      }
	    });
	
	    obj.node.on('added', function (parent) {
	      for (var i = 0; i < _inputList.length; i++) {
	        obj[_inputList[i]].registerUpdate(parent);
	      }
	    });
	
	    obj.node.on('removed', function (parent) {
	      for (var i = 0; i < _inputList.length; i++) {
	        obj[_inputList[i]].destroy();
	      }
	    });
	
	    return obj;
	  };
	
	  return that;
	}; /**
	    * Created by wizard on 16/5/9.
	    */
	
	var creater = Create();
	
	exports.default = creater;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiExtends = __webpack_require__(17);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BMLabel = function BMLabel(spec) {
	
	  var _node = null;
	  var _label = null;
	  var _anchor = new PIXI.Point();
	  var _uiParts = {};
	  (function () {
	    _node = new PIXI.Container();
	    var resolution = spec.resolution ? spec.resolution : 1;
	    spec.style.font = spec.style.font ? spec.style.font : '20px subtitle_yellow';
	    console.log('font: ' + spec.style.font);
	    spec.style.align = 'left';
	    _label = new PIXI.extras.BitmapText(spec.text, spec.style);
	
	    _label.tint = spec.style.fill !== undefined ? spec.style.fill : 0xffffff;
	    _node.addChild(_label);
	    (0, _uiExtends2.default)(spec.id, _node, _uiParts);
	
	    //todo(yuchenl): PIXI  BitmapText bug, need call these
	    if (spec.style.maxWidth) {
	      _label.maxWidth = spec.style.maxWidth;
	      _label.updateText();
	    }
	  })();
	
	  Object.defineProperty(_node, 'text', {
	    get: function get() {
	      return _label.text;
	    },
	    set: function set(val) {
	      _label.text = val;
	      _label.updateText();
	      //console.log('label anchor: ' + JSON.stringify(_node.anchor) );
	      //console.log('label size: ' + _label.textWidth  + " : " + _label.textHeight);
	      _label.x = -_label.textWidth * _node.anchor.x;
	      _label.y = -_label.textHeight * _node.anchor.y;
	    }
	  });
	
	  Object.defineProperty(_node, 'anchor', {
	    get: function get() {
	      return _anchor;
	    },
	    set: function set(val) {
	      _anchor.set(val.x, val.y);
	      _label.x = -_label.textWidth * _node.anchor.x;
	      _label.y = -_label.textHeight * _node.anchor.y;
	    }
	  });
	
	  return _node;
	}; /**
	    * Created by wizard on 16/5/20.
	    */
	exports.default = BMLabel;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Input = function Input(spec) {
	  var that = {};
	  //only vase
	  that.node = new PIXI.Container();
	  var sprite = new PIXI.Sprite.fromImage(_resources2.default.blue);
	  that.node.addChild(sprite);
	
	  var game = document.getElementById('game');
	  var input = document.createElement("input");
	  input.style.position = 'absolute';
	  input.style.width = spec.width + 'px';
	  input.style.height = spec.height + 'px';
	  input.style.backgroundImage = "url('" + spec.image + "')";
	  input.id = spec.id;
	  //input.style.backgroundRepeat = 'no-repeat';
	  game.appendChild(input);
	
	  //Object.defineProperty(that, 'position', {
	  //  set: (val)=> {
	  //
	  //  },
	  //  get: ()=> {
	  //    return that.node.postion;
	  //  }
	  //});
	  var _updatePosition = function _updatePosition(parent) {
	    if (!that.node) return;
	    that.node.position = spec.position;
	    var pos = that.node.parent.toGlobal(spec.position);
	    input.style.width = spec.width * parent.scale.x + 'px';
	    input.style.height = spec.height * parent.scale.y + 'px';
	    input.style.left = pos.x + 'px';
	    input.style.top = pos.y + 'px';
	  };
	
	  that.registerUpdate = function (parent) {
	    //_updatePosition(parent);
	    window.addEventListener("resize", function (event) {
	      _updatePosition(parent);
	    });
	  };
	
	  that.destroy = function () {
	    game.removeChild(input);
	    that.node = null;
	  };
	
	  that.node.on('removed', function (parent) {
	    game.removeChild(input);
	    that.node.removeChild();
	  });
	
	  return that;
	}; /**
	    * Created by guolei on 16/6/2.
	    */
	exports.default = Input;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helper = __webpack_require__(6);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	var _director = __webpack_require__(10);
	
	var _director2 = _interopRequireDefault(_director);
	
	var _registry = __webpack_require__(13);
	
	var _registry2 = _interopRequireDefault(_registry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BaseWorld = function BaseWorld() {
	  var that = {};
	
	  that.node = new PIXI.Container();
	
	  that.init = function () {
	    return true;
	  };
	
	  that.destroy = function () {
	    that.destroyExecute();
	  };
	
	  that.update = function (dt) {
	    that.updateExecute(dt);
	  };
	
	  that.onResume = function () {
	    //console.log('world on resume');
	    _director2.default.sharedDirector().updateRegister(that);
	  };
	
	  that.onPause = function () {
	    //console.log('world on pause');
	    _director2.default.sharedDirector().updateUnRegister(that);
	  };
	
	  var _modelList = [];
	
	  that.lock2Layer = function (layer) {
	
	    _helper2.default.reorderNode(that.node);
	
	    for (var i = 0; i < that.node.children.length; ++i) {
	      if (that.node.children[i] === layer.node) {
	        break;
	      }
	      that.node.children[i].interactiveChildren = false;
	    }
	
	    _modelList.push(layer);
	    _modelList.sort(_sortByZorder);
	  };
	
	  that.popModelLayer = function () {
	    if (that.getModelNum() === 0) return;
	    var layer = _modelList[that.getModelNum() - 1];
	    if (layer) {
	      layer.removeFromWorld();
	      layer = null;
	    }
	  };
	  that.getModelNum = function () {
	    return _modelList.length;
	  };
	
	  that.unlock2Layer = function (layer) {
	    var index = _modelList.indexOf(layer);
	    if (index === -1) {
	      console.log('error: no dialog to pop');
	      return;
	    }
	
	    _modelList.splice(index, 1);
	    that.node.removeChild(layer.node);
	
	    var lastNode = null;
	    if (_modelList.length > 0 && _modelList[index - 1]) {
	      lastNode = _modelList[index - 1].node;
	    }
	
	    (function () {
	      var zorder = lastNode !== null ? lastNode.zorder : -1;
	      console.log('dialog remove to zorder: ' + zorder);
	    })();
	
	    //that.node.interactiveChildren = true;
	    for (var i = that.node.children.length - 1; i >= 0; --i) {
	      that.node.children[i].interactiveChildren = true;
	      if (that.node.children[i] === lastNode) {
	        break;
	      }
	    }
	  };
	
	  var _sortByZorder = function _sortByZorder(a, b) {
	    return a.node.zorder > b.node.zorder;
	  };
	
	  (0, _registry2.default)(that, ['destroy', 'update']);
	
	  return that;
	}; /**
	    * Created by wizard on 16/3/30.
	    */
	
	exports.default = BaseWorld;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _registry = __webpack_require__(13);
	
	var _registry2 = _interopRequireDefault(_registry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BaseLayer = function BaseLayer() {
	  var that = {};
	
	  that.node = new PIXI.Container();
	  that.node.zorder = 0;
	
	  that.owner = null;
	
	  that.init = function () {
	    return true;
	  };
	
	  that.destroy = function () {
	    that.destroyExecute();
	  };
	  that.update = function (dt) {
	    that.updateExecute(dt);
	  };
	
	  that.add2World = function (world) {
	    world.node.addChild(that.node);
	    that.owner = world;
	    world.updateRegister(that);
	    //world.destroyRegister(that);
	  };
	
	  that.removeFromWorld = function () {
	    that.owner.updateUnRegister(that);
	    that.owner.node.removeChild(that.node);
	    that.destroy();
	    that.owner = null;
	  };
	
	  (0, _registry2.default)(that, ['destroy', 'update']);
	
	  return that;
	}; /**
	    * Created by wizard on 16/3/30.
	    */
	
	exports.default = BaseLayer;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inherited = __webpack_require__(18);
	
	var _inherited2 = _interopRequireDefault(_inherited);
	
	var _baseLayer = __webpack_require__(34);
	
	var _baseLayer2 = _interopRequireDefault(_baseLayer);
	
	var _director = __webpack_require__(10);
	
	var _director2 = _interopRequireDefault(_director);
	
	var _helper = __webpack_require__(6);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/3/31.
	 */
	
	var ModelLayer = function ModelLayer(blackArea) {
	  var that = (0, _inherited2.default)((0, _baseLayer2.default)());
	
	  var _blackBg = null;
	
	  //if (blackArea) {
	  //  let x, y, width, height;
	  //  const director = Director.sharedDirector();
	  //  if (blackArea === true) {
	  //    x = 0;
	  //    y = 0;
	  //    width = window.innerWidth / director.screen.scale;
	  //    height = window.innerHeight / director.screen.scale;
	  //  }
	  //  else {
	  //    x = blackArea.x;
	  //    y = blackArea.y;
	  //    width = blackArea.width;
	  //    height = blackArea.height;
	  //  }
	  //
	  //  x -= director.screen.left;
	  //  y -= director.screen.top;
	  //
	  //  _blackBg = new PIXI.Graphics();
	  //  _blackBg.lineStyle(2, 0x000000, 0.5);
	  //  _blackBg.beginFill(0x000000, 0);
	  //  _blackBg.drawRect(x, y, width, height);
	  //  _blackBg.hitArea = new PIXI.Rectangle(x, y, Director.sharedDirector().width, Director.sharedDirector().height);
	  //
	  //  _blackBg.interactive = true;
	  //  _blackBg.zorder = -1;
	  //  that.blackBg = _blackBg;
	  //  that.node.addChild(_blackBg);
	  //}
	
	  that.inheritOn('add2World', function (world) {
	    world.lock2Layer(that);
	    return true;
	  });
	
	  that.removeFromWorld = function () {
	    that.owner.unlock2Layer(that);
	    that.owner.updateUnRegister(that);
	    that.owner.node.removeChild(that.node);
	
	    that.destroy();
	    that.owner = null;
	  };
	
	  return that;
	};
	
	exports.default = ModelLayer;

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wizard on 16/5/28.
	 */
	var DelayEvent = function DelayEvent(obj) {
	
	  var registry = {};
	
	  var _delayList = [];
	  var _working = false;
	
	  obj.fire = function (event) {
	    if (!_working) {
	      _delayList.push(arguments);
	      return;
	    }
	
	    var handler = null;
	
	    if (registry.hasOwnProperty(event)) {
	      var event_list = registry[event];
	      for (var i = 0; i < event_list.length; ++i) {
	        handler = event_list[i];
	        var args = [];
	
	        //not including event
	        for (var n = 1; n < arguments.length; ++n) {
	          args.push(arguments[n]);
	        }
	        handler.apply(this, args);
	      }
	    }
	
	    return this;
	  };
	
	  obj.on = function (type, method) {
	    if (registry.hasOwnProperty(type)) {
	      registry[type].push(method);
	    } else {
	      registry[type] = [method];
	    }
	
	    return this;
	  };
	
	  obj.off = obj.removeListener = function (type, method) {
	    if (!registry.hasOwnProperty(type)) {
	      return false;
	    }
	    var index = registry[type].indexOf(method);
	    if (index >= 0) {
	      registry[type].splice(index, 1);
	    }
	  };
	
	  obj.removeAllListeners = function () {
	    registry = {};
	  };
	
	  obj.switchOn = function () {
	    console.log("switchOn");
	    _working = true;
	    for (var i = 0; i < _delayList.length; ++i) {
	
	      var params = _delayList[i];
	      var event = params[0];
	      var handler = null;
	
	      if (registry.hasOwnProperty(event)) {
	        var event_list = registry[event];
	        for (var _i = 0; _i < event_list.length; ++_i) {
	          handler = event_list[_i];
	          var args = [];
	
	          //not including event
	          for (var n = 1; n < params.length; ++n) {
	            args.push(params[n]);
	          }
	          handler.apply(undefined, args);
	        }
	      }
	    }
	  };
	
	  return obj;
	};
	
	exports.default = DelayEvent;

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by chuhaoyuan on 2016/10/11.
	 */
	var Vec2 = function Vec2(x, y) {
	  var that = { x: x, y: y };
	  that.getDistance = function (object) {
	    //两点之间距离
	    var a = (that.x - object.x) * (that.x - object.x) + (that.y - object.y) * (that.y - object.y);
	    var l = Math.sqrt(a);
	    var w = parseInt(l);
	    if (l - w < 0.00001) {
	      return w;
	    }
	
	    return l;
	  };
	  that.getNormal = function () {
	    //获取单位向量
	    var n = that.x * that.x + that.y * that.y;
	    if (n === 1) {
	      return that;
	    }
	    n = Math.sqrt(n);
	    if (n < Number.MIN_VALUE) {
	      return that;
	    }
	    n = 1 / n;
	    var x = that.x * n;
	    var y = that.y * n;
	    return Vec2(x, y);
	  };
	  that.normal = function () {
	    //转换成单位向量
	    that = that.getNormal();
	  };
	  that.add = function (object) {
	    //向量加
	
	    var x = that.x + object.x;
	    var y = that.y + object.y;
	    return Vec2(x, y);
	  };
	  that.sub = function (object) {
	    //向量减
	
	    var x = that.x - object.x;
	    var y = that.y - object.y;
	    return Vec2(x, y);
	  };
	  that.multValue = function (value) {
	    var x = that.x * value;
	    var y = that.y * value;
	    return Vec2(x, y);
	  };
	  that.addValue = function (value) {
	    var x = that.x + value;
	    var y = that.y + value;
	    return Vec2(x, y);
	  };
	  that.cross = function (object) {
	    //向量积
	    return that.x * object.y - that.y * object.x;
	  };
	  that.dot = function (object) {
	    //点积
	    return that.x * object.x + that.y * object.y;
	  };
	  that.getRadians = function (object) {
	    //得到向量弧度
	    var a = that.getNormal();
	    var b = object.getNormal();
	
	    var angle = Math.atan2(a.cross(b), a.dot(b));
	    if (Math.abs(angle) < Number.MIN_VALUE) {
	      return 0;
	    }
	    return angle;
	  };
	
	  that.equals = function (object) {
	    //判断向量是否绝对相等
	    return Math.abs(that.x - object.x) < Number.MIN_VALUE && Math.abs(that.y - object.y) < Number.MIN_VALUE;
	  };
	
	  that.getAngle = function (object) {
	    //得到向量角度
	    return that.getRadians(object) * 180 / Math.PI;
	  };
	
	  that.isZero = function () {
	    return Math.abs(that.x) < Number.MIN_VALUE && Math.abs(that.y) < Number.MIN_VALUE;
	  };
	
	  that.rotateByAngle = function (object, angle) {
	    //向量转一个角度
	    var sinAngle = Math.sin(angle);
	    var cosAngle = Math.cos(angle);
	    var x = 0;
	    var y = 0;
	    if (object.isZero()) {
	      //console.log('旋转点是0');
	      var tempX = that.x * cosAngle - that.y * sinAngle;
	      y = that.y * cosAngle + that.x * sinAngle;
	      x = tempX;
	    } else {
	      var _tempX = that.x - object.x;
	      var tempY = that.y - object.y;
	      x = _tempX * cosAngle - tempY * sinAngle + object.x;
	      y = tempY * cosAngle + _tempX * sinAngle + object.y;
	    }
	
	    return Vec2(x, y);
	  };
	
	  return that;
	};
	exports.default = Vec2;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _gamelayer = __webpack_require__(39);
	
	var _gamelayer2 = _interopRequireDefault(_gamelayer);
	
	var _debugLayer = __webpack_require__(64);
	
	var _debugLayer2 = _interopRequireDefault(_debugLayer);
	
	var _uiStart2 = __webpack_require__(65);
	
	var _uiStart3 = _interopRequireDefault(_uiStart2);
	
	var _uiGameover = __webpack_require__(66);
	
	var _uiGameover2 = _interopRequireDefault(_uiGameover);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _uiTips = __webpack_require__(69);
	
	var _uiTips2 = _interopRequireDefault(_uiTips);
	
	var _platformHelper = __webpack_require__(45);
	
	var _platformHelper2 = _interopRequireDefault(_platformHelper);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	var _caromCount = __webpack_require__(70);
	
	var _caromCount2 = _interopRequireDefault(_caromCount);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2016/10/21.
	 */
	var GameState = {
	  Invalide: -1,
	  GameStart: 0,
	  GameRun: 1,
	  GameOver: 2,
	  GameReStart: 3
	};
	var GameWorld = function GameWorld() {
	  var that = (0, _imports.Inherited)((0, _imports.BaseWorld)());
	  that.inheritOn('init', function () {
	    return true;
	  });
	
	  var _state = GameState.Invalide;
	
	  var _gameLayer = (0, _gamelayer2.default)(that);
	  _gameLayer.init();
	  _gameLayer.add2World(that);
	
	  var _setState = function _setState(state) {
	    console.log('state=' + state);
	    if (state === _state) {
	      return;
	    }
	    switch (state) {
	
	      case GameState.GameStart:
	        console.log("set game start");
	        console.log("after init data");
	        _gameGlobal2.default.playerdata.fruitCount = 100;
	        var _uiStart = (0, _uiStart3.default)();
	        _uiStart.init();
	        //that.node.addChild(_uiStart.node);
	        _uiStart.add2World(that);
	        _gameLayer.toReady();
	        _gameGlobal2.default.playerdata.hitsLists = [];
	        (0, _caromCount2.default)();
	
	        break;
	      case GameState.GameRun:
	        // console.log('GameRun');
	        _gameLayer.startGame();
	        break;
	      case GameState.GameOver:
	
	        ////
	        // _gameLayer.gameOver();
	
	
	        _gameGlobal2.default.events.fire('openranklayer');
	
	        var _uiGameOver = (0, _uiGameover2.default)({
	          maxscore: 1,
	          score: 100
	        });
	        _uiGameOver.init();
	        _uiGameOver.add2World(that);
	        // global.playerdata.getRanklistData((rankdata)=>{
	        //获取自己的排名
	        // let selfRankNum = rankdata.self_rank===-1?798:rankdata.self_rank;
	        //   global.playerdata.gameOver((data)=>{
	        //     if (data.status === 'ok'){
	        //       console.log('self score = ' + data.res.resultCount);
	        //       let _uiGameOver = UIGameOver(data.res);
	        //       _uiGameOver.init();
	        //       _uiGameOver.add2World(that);
	        //       console.log('get red bag :' + global.playerdata.getRedbagCount);
	        //       if (global.playerdata.getRedbagCount >= 1){
	        //         platformHelper.tipPacket();
	        //       }
	        //     } else {
	        //       console.log('错误提示页面');
	        //       let _tips = Tips(data.show,()=>{
	        //         // global.events.fire('restartgame');
	        //         platformHelper.endAll();
	        //       });
	        //       _tips.init();
	        //       _tips.add2World(that);
	        //     }
	        //   });
	        // // });
	        // ////给服务器发送数据游戏结束消息
	        //
	        // _gameLayer.gameOver();
	
	        break;
	      case GameState.GameReStart:
	        console.log('重新开始游戏');
	        _setState(GameState.GameStart);
	
	        // global.playerdata.init();
	        //   global.playerdata.getGameInfo((success, resp)=>{
	        //   global.playerdata.initData();
	        //   _setState(GameState.GameStart);
	        //   if (!success){
	        //     let tip = Tips({
	        //       show: JSON.stringify(resp)
	        //     },()=>{
	        //       platform.endAll();
	        //     });
	        //     tip.init();
	        //     tip.add2World(that);
	        //   }
	        // });
	
	
	        break;
	      default:
	        break;
	    }
	    _state = state;
	  };
	
	  _gameGlobal2.default.events.on('gamestart', function () {
	    _setState(GameState.GameRun);
	  });
	  _gameGlobal2.default.events.on('gameover', function () {
	    _setState(GameState.GameOver);
	  });
	  _gameGlobal2.default.events.on('restartgame', function () {
	    _setState(GameState.GameReStart);
	  });
	
	  // global.events.on('GameStart',()=>{
	  //   _setState(GameState.GameStart);
	  // });
	  // global.events.on('GameRun',()=>{
	  //   _setState(GameState.GameRun);
	  // });
	  // global.events.on('GameOver',()=>{
	  //   _setState(GameState.GameOver);
	  // });
	
	
	  _setState(GameState.GameStart);
	
	  ////播放 背景音效
	  _gameGlobal2.default.audioControl.playBg('bgmusic');
	
	  return that;
	};
	exports.default = GameWorld;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _fruitLayer2 = __webpack_require__(40);
	
	var _fruitLayer3 = _interopRequireDefault(_fruitLayer2);
	
	var _blade_render = __webpack_require__(51);
	
	var _blade_render2 = _interopRequireDefault(_blade_render);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _particleLayer = __webpack_require__(53);
	
	var _particleLayer2 = _interopRequireDefault(_particleLayer);
	
	var _uiLayer2 = __webpack_require__(55);
	
	var _uiLayer3 = _interopRequireDefault(_uiLayer2);
	
	var _flashEffect2 = __webpack_require__(58);
	
	var _flashEffect3 = _interopRequireDefault(_flashEffect2);
	
	var _uiShowlayer = __webpack_require__(59);
	
	var _uiShowlayer2 = _interopRequireDefault(_uiShowlayer);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _uiRanklist = __webpack_require__(60);
	
	var _uiRanklist2 = _interopRequireDefault(_uiRanklist);
	
	var _maskEffect2 = __webpack_require__(62);
	
	var _maskEffect3 = _interopRequireDefault(_maskEffect2);
	
	var _camera2 = __webpack_require__(63);
	
	var _camera3 = _interopRequireDefault(_camera2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GameState = {
	  Invalide: -1,
	  Waiting: 0,
	  Running: 1,
	  Over: 2
	}; /**
	    * Created by chuhaoyuan on 2016/10/21.
	    */
	
	var GameLayer = function GameLayer() {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	  that.inheritOn('init', function () {
	    return true;
	  });
	
	  var _state = GameState.Invalide;
	
	  var _bg = new PIXI.Sprite.fromImage(_resources2.default.bj);
	  that.node.addChild(_bg);
	  // _bg.anchor.set(0.5);
	  _bg.position = {
	    x: 0,
	    y: 0
	  };
	  //todo(yuchenl) : need to screen scale
	  _bg.scale.y = 1.2;
	  //
	  //let director = Director.sharedDirector();
	  //_bg.position.y = (window.innerHeight - director.screen.bottom) ;
	  //_bg.scale.y = 1/director.screen.scale;
	  //console.log("screen scale: " + director.screen.scale);
	
	  //底层遮罩层
	  var _maskEffect = (0, _maskEffect3.default)();
	  _maskEffect.init();
	  _maskEffect.add2World(that);
	
	  //摄像机节点
	  var _camera = (0, _camera3.default)({
	    viewWidth: _imports.Director.sharedDirector().width,
	    viewHeight: _imports.Director.sharedDirector().height,
	    maxWidth: _imports.Director.sharedDirector().width,
	    maxHeight: _imports.Director.sharedDirector().height
	  });
	  _camera.init();
	  _camera.add2World(that);
	
	  //切水果层
	
	  var _fruitLayer = (0, _fruitLayer3.default)();
	  _fruitLayer.init();
	  _fruitLayer.add2World(that);
	
	  ///闪光层
	
	  var _flashEffect = (0, _flashEffect3.default)();
	  _flashEffect.init();
	  _flashEffect.add2World(that);
	
	  //提示层
	  var _uiShow = (0, _uiShowlayer2.default)();
	  _uiShow.init();
	  _uiShow.add2World(that);
	
	  ///排行榜层
	  // let _uiRanklist = UIRankList();
	  // _uiRanklist.init();
	  // _uiRanklist.add2World(that);
	
	
	  //ui层
	  var _uiLayer = (0, _uiLayer3.default)();
	  _uiLayer.init();
	  _uiLayer.add2World(that);
	
	  _camera.addToCamera(_flashEffect.node);
	  _camera.addToCamera(_fruitLayer.node);
	  _camera.addToCamera(_uiShow.node);
	  // _camera.addToCamera(_uiLayer.node);
	  _camera.addToCamera(_bg);
	  _gameGlobal2.default.events.on('zoomIn', function () {
	    _camera.zoomIn(1.4);
	    // _bg.scale = {
	    // //   x: 1.5,
	    // //   y: 1.5
	    // // }
	  });
	  _gameGlobal2.default.events.on('zoomOut', function () {
	    _camera.zoomOut(1);
	    // _bg.scale = {
	    //   x: 1,
	    //   y: 1.2
	    // }
	  });
	  _gameGlobal2.default.events.on('shakeCamera', function () {
	    _camera.shakeCamera();
	  });
	
	  //粒子层
	  var _particle = (0, _particleLayer2.default)();
	  _particle.init();
	  _particle.add2World(that);
	
	  that.node.interactive = true;
	  var blade = (0, _blade_render2.default)(that);
	  blade.init();
	  that.inheritOn('touchMove', function (touchPos) {
	    _fruitLayer.touchMove(touchPos);
	  });
	  that.inheritOn('touchBegan', function () {
	    _fruitLayer.touchBegin();
	  });
	  that.inheritOn('touchEnd', function () {
	    _fruitLayer.touchEnd();
	  });
	
	  that.inheritOn('update', function (delTime) {
	    blade.update(delTime);
	    TWEEN.update();
	  });
	
	  var _setState = function _setState(state) {
	    if (state === _state) {
	      return;
	    }
	    switch (state) {
	      case GameState.Waiting:
	
	        break;
	      case GameState.Running:
	        blade.toStartTouchMove();
	        _fruitLayer.toStart();
	
	        break;
	      case GameState.Over:
	        blade.toEndTouchMove();
	        _fruitLayer.toEnd();
	        break;
	      default:
	        break;
	    }
	    _state = state;
	  };
	
	  _setState(GameState.Waiting);
	
	  that.startGame = function () {
	    console.log('startGame' + _state);
	    _setState(GameState.Running);
	  };
	
	  that.gameOver = function () {
	
	    _setState(GameState.Over);
	  };
	  that.toReady = function () {
	    _fruitLayer.toReady();
	  };
	
	  return that;
	};
	exports.default = GameLayer;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	var _fruit2 = __webpack_require__(41);
	
	var _fruit3 = _interopRequireDefault(_fruit2);
	
	var _cutEffect2 = __webpack_require__(48);
	
	var _cutEffect3 = _interopRequireDefault(_cutEffect2);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _shakeNode = __webpack_require__(49);
	
	var _shakeNode2 = _interopRequireDefault(_shakeNode);
	
	var _timeController = __webpack_require__(50);
	
	var _timeController2 = _interopRequireDefault(_timeController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2016/10/21.
	 */
	var accAdd = function accAdd(arg1, arg2) {
	  var r1, r2, m;
	  try {
	    r1 = arg1.toString().split(".")[1].length;
	  } catch (e) {
	    r1 = 0;
	  }
	  try {
	    r2 = arg2.toString().split(".")[1].length;
	  } catch (e) {
	    r2 = 0;
	  }
	  m = Math.pow(10, Math.max(r1, r2));
	  return (arg1 * m + arg2 * m) / m;
	};
	var AddFruitType = {
	  Invalide: -1,
	  Normal: 1,
	  Crazy: 2,
	  Freeze: 3,
	  Double: 4,
	  TimeOut: 5,
	  ChangeState: 6,
	  CutBomb: 7,
	  FruitOver: 8,
	  Crazying: 9,
	  CrazyOver: 10,
	  CutBombOver: 11,
	  SuperFruit: 12
	};
	var GameState = {
	  Invalide: -1,
	  Waiting: 0,
	  Running: 1,
	  Over: 2
	};
	var FruitLayer = function FruitLayer(spec) {
	  console.log('加载水果 层');
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	  that.inheritOn('init', function () {
	    return true;
	  });
	  var _fruitNameStrs = ['watermelon', 'pineapple', 'dargonfruit', 'kiwifruit', 'orange', 'banana', 'apple', 'peach', 'lemon', 'pear', 'strawberry'];
	  // if (global.playerdata.bombCount > 0){
	  //   _fruitNameStrs.push('bomb');
	  // }
	  var _addFruitTimeDis = [100, 20, 20, 20, 100, 120, 200];
	  var _addTimeDisIndex = 0;
	  var _timeCount = 0;
	  var _TimeScaleOffset = 1;
	  var _addFruitDisTimeScaleOffset = 1;
	  var _fruits = [];
	  var _addFruitType = AddFruitType.Invalide;
	  var _cutEffect = (0, _cutEffect3.default)(that.node);
	  var _state = GameState.Invalide;
	  var _allCellCount = _gameGlobal2.default.playerdata.fruitCount;
	  _cutEffect.add2World(that.node);
	  var _redBagRate = _gameGlobal2.default.playerdata.centsNum / _gameGlobal2.default.playerdata.fruitCount;
	  var _bombRate = _gameGlobal2.default.playerdata.bombCount / (_gameGlobal2.default.playerdata.fruitCount - 5);
	  console.log('redBagRate=' + _redBagRate);
	  var _addedTotalRedBag = 0;
	  var _addedTotalBomb = 0;
	  var _oldTypeList = [];
	  var _nowSuperPower = 0;
	  var _totalSuperPower = _gameGlobal2.default.playerdata.fruitCount * 0.8;
	  var _superFruitCutCount = 0;
	  var initData = function initData() {
	    _fruitNameStrs = ['watermelon', 'pineapple', 'dargonfruit', 'kiwifruit', 'orange', 'banana', 'apple', 'peach', 'lemon', 'pear', 'strawberry'];
	    // if (global.playerdata.bombCount > 0){
	    //   _fruitNameStrs.push('bomb');
	    // }
	    _addFruitTimeDis = [60, 20, 10, 10, 90, 80, 120];
	    _addTimeDisIndex = 0;
	    _timeCount = 0;
	    _TimeScaleOffset = 1;
	    _addFruitDisTimeScaleOffset = 1;
	    _fruits = [];
	    _addFruitType = AddFruitType.Invalide;
	    _allCellCount = _gameGlobal2.default.playerdata.fruitCount;
	    _redBagRate = _gameGlobal2.default.playerdata.centsNum / _gameGlobal2.default.playerdata.fruitCount;
	    _bombRate = _gameGlobal2.default.playerdata.bombCount / (_gameGlobal2.default.playerdata.fruitCount - 5);
	    _gameGlobal2.default.playerdata.getRedbagCount = 0;
	    _gameGlobal2.default.playerdata.allGetRedbag = 0;
	    _gameGlobal2.default.playerdata.cutBombCount = 0;
	    _gameGlobal2.default.playerdata.cutFruitCount = 0;
	    _addedTotalRedBag = 0;
	    _addedTotalBomb = 0;
	    _oldTypeList = [];
	    _nowSuperPower = 0;
	    _totalSuperPower = _gameGlobal2.default.playerdata.fruitCount * 0.8;
	    _superFruitCutCount = 0;
	    that.superFruit = undefined;
	  };
	  var _randomType = function _randomType() {
	    var types = ['Normal', 'Crazy'];
	    var index = Math.round(Math.random() * (types.length - 1));
	    var state = types[index];
	    if (_oldTypeList.length === 0) {
	      state = types[0];
	    } else if (_oldTypeList.length === 2) {
	      if (_oldTypeList[0] === _oldTypeList[1]) {
	        if (_oldTypeList[0] === types[0]) {
	          state = types[1];
	        } else {
	          state = types[0];
	        }
	      }
	      _oldTypeList.splice(0, 1);
	    }
	    _oldTypeList.push(state);
	    console.log('随机出来的状态是' + state);
	    return state;
	  };
	  var _setFruitState = function _setFruitState(state) {
	
	    if (_addFruitType === state) {
	      return;
	    }
	
	    if (_state === GameState.Running) {} else {
	      return;
	    }
	    _addFruitType = state;
	    switch (state) {
	      case AddFruitType.Normal:
	        _TimeScaleOffset = 1;
	        _addFruitDisTimeScaleOffset = 1;
	        _gameGlobal2.default.events.fire('runlight', 'Normal');
	        _gameGlobal2.default.events.fire('uilayer', 'Normal');
	        _gameGlobal2.default.events.fire('maskeffect', 'Normal');
	        _gameGlobal2.default.events.fire('fruitwater', 'Normal');
	        _timeController2.default.setTimeout('setNormal', function () {
	          console.log('时间控制器运行');
	          _setFruitState(AddFruitType.ChangeState);
	        }, 5000);
	
	        break;
	      case AddFruitType.Crazy:
	        // if (global.playerdata.fruitCount <= 20){
	        //   _setFruitState(AddFruitType.Normal);
	        //  return;
	        // }
	
	
	        _addFruitDisTimeScaleOffset = 0.2;
	        _gameGlobal2.default.events.fire('runlight', 'Crazy');
	        _gameGlobal2.default.events.fire('uilayer', 'Crazy');
	        _gameGlobal2.default.events.fire('maskeffect', 'Crazy');
	        _timeController2.default.setTimeout('setCrazy', function () {
	          _setFruitState(AddFruitType.Crazying);
	        }, 2000);
	
	        break;
	      case AddFruitType.Double:
	        _TimeScaleOffset = 1;
	        _addFruitDisTimeScaleOffset = 1;
	        break;
	      case AddFruitType.Freeze:
	        _TimeScaleOffset = 0.2;
	        break;
	      case AddFruitType.TimeOut:
	        break;
	      case AddFruitType.FruitOver:
	        _gameGlobal2.default.events.fire('runlight', 'Normal');
	        _gameGlobal2.default.events.fire('uilayer', 'Normal');
	        _gameGlobal2.default.events.fire('maskeffect', 'Normal');
	        _gameGlobal2.default.events.fire('fruitwater', 'Normal');
	        _timeController2.default.stopAllTimeCB();
	        setTimeout(function () {
	          for (var i = 0; i < _fruits.length; i++) {
	            _fruits[i].removeSelf();
	          }
	          _gameGlobal2.default.events.fire('gameover');
	          _gameGlobal2.default.audioControl.play('gameover');
	        }, 20);
	
	        break;
	      case AddFruitType.CutBomb:
	        _gameGlobal2.default.events.fire('runlight', 'Normal');
	        _gameGlobal2.default.events.fire('uilayer', 'Normal');
	        _gameGlobal2.default.events.fire('maskeffect', 'Normal');
	        _gameGlobal2.default.events.fire('fruitwater', 'Normal');
	        // console.log('setState CutBomb' );
	        _timeController2.default.unsetTimeout('setNormal');
	        _timeController2.default.unsetTimeout('setCrazy');
	        _timeController2.default.unsetTimeout('setCrazying');
	        _timeController2.default.unsetTimeout('setCrazyOver');
	        _timeController2.default.unsetTimeout('setCutBomb');
	        // _setFruitState(AddFruitType.CutBombOver);
	        _timeController2.default.setTimeout('setCutBomb', function () {
	          _setFruitState(AddFruitType.Normal);
	        }, 1000);
	
	        break;
	      case AddFruitType.ChangeState:
	
	        if (_gameGlobal2.default.playerdata.fruitCount <= 20) {
	          _setFruitState(AddFruitType.Normal);
	        } else {
	          _setFruitState(AddFruitType[_randomType()]);
	        }
	        break;
	      case AddFruitType.Crazying:
	        _gameGlobal2.default.events.fire('fruitwater', 'Crazy');
	        _timeController2.default.setTimeout('setCrazying', function () {
	          _setFruitState(AddFruitType.CrazyOver);
	        }, 5000);
	        break;
	      case AddFruitType.CrazyOver:
	        _gameGlobal2.default.events.fire('runlight', 'Normal');
	        _gameGlobal2.default.events.fire('uilayer', 'Normal');
	        _gameGlobal2.default.events.fire('maskeffect', 'Normal');
	        _gameGlobal2.default.events.fire('fruitwater', 'Normal');
	        _timeController2.default.setTimeout('setCrazyOver', function () {
	          _setFruitState(AddFruitType.ChangeState);
	        }, 1000);
	        break;
	      case AddFruitType.SuperFruit:
	        console.log('超级水果状态');
	
	        _gameGlobal2.default.events.fire('runlight', 'Normal');
	        _gameGlobal2.default.events.fire('uilayer', 'Normal');
	        _gameGlobal2.default.events.fire('maskeffect', 'Normal');
	        _gameGlobal2.default.events.fire('fruitwater', 'Normal');
	        // timeController.stopAllTimeCB();
	
	        _timeController2.default.unsetTimeout('setNormal');
	        _timeController2.default.unsetTimeout('setCrazy');
	        _timeController2.default.unsetTimeout('setCrazying');
	        _timeController2.default.unsetTimeout('setCrazyOver');
	        _timeController2.default.unsetTimeout('setCutBomb');
	
	        setTimeout(function () {
	
	          if (_nowSuperPower >= _totalSuperPower) {} else {
	            _setFruitState(AddFruitType.FruitOver);
	            return;
	          }
	
	          if (that.superFruit === undefined) {
	            console.log('添加一个超级水果');
	            _gameGlobal2.default.audioControl.play('gamestart');
	            var fruit = (0, _fruit3.default)({
	              image: 'superFruit',
	              // scale: Math.round(Math.random()*2 + 8) * 0.1
	              scale: 1,
	              state: _addFruitType
	            });
	            fruit.add2World(that.node);
	            _fruits.push(fruit);
	            that.superFruit = fruit;
	          }
	        }, 2000);
	        ////加一个  超级水果
	
	
	        break;
	      default:
	        break;
	
	    }
	  };
	
	  that.addFruit = function (data) {
	    console.log('addFruit');
	
	    // if (data === 'superFruit'){
	    //   let fruit = Fruit({
	    //     image: data,
	    //     // scale: Math.round(Math.random()*2 + 8) * 0.1
	    //     scale: 1,
	    //     state: _addFruitType
	    //   });
	    //   fruit.add2World(that.node);
	    //   _fruits.push(fruit);
	    // }
	    if (_allCellCount <= 0) {
	      _gameGlobal2.default.playerdata.residualCount = 0;
	      _gameGlobal2.default.playerdata.fruitCount = 0;
	      _gameGlobal2.default.playerdata.bombCount = 0;
	      _allCellCount = 0;
	
	      _setFruitState(AddFruitType.SuperFruit);
	      return;
	    }
	
	    // Director.sharedDirector().audio.play('addfruit_0');
	
	    _gameGlobal2.default.audioControl.play('addfruit_0');
	    var image = _fruitNameStrs[Math.round(Math.random() * (_fruitNameStrs.length - 1))];
	    var fruit = (0, _fruit3.default)({
	      image: image,
	      // scale: Math.round(Math.random()*2 + 8) * 0.1
	      scale: 1,
	      state: _addFruitType
	    });
	    fruit.add2World(that.node);
	    _fruits.push(fruit);
	    _addedTotalRedBag = accAdd(_addedTotalRedBag, _redBagRate);
	    // console.log('addToTotalRedBag' + _addedTotalRedBag);
	    if (_gameGlobal2.default.playerdata.fruitCount === Math.floor(_gameGlobal2.default.playerdata.allFruitCount * 0.5)) {
	      console.log('大红包');
	      _gameGlobal2.default.audioControl.play('getred_0');
	      fruit.bigredbag = true;
	    }
	
	    if (_addedTotalRedBag >= 1) {
	      _addedTotalRedBag = _addedTotalRedBag - 1;
	      fruit.redbag = true;
	      ///有红包///这里播放红包来了音效
	      _gameGlobal2.default.audioControl.play('getred_0');
	    }
	
	    _addedTotalBomb = accAdd(_addedTotalBomb, _bombRate);
	    if (_addedTotalBomb >= 1) {
	      _addedTotalBomb = _addedTotalBomb - 1;
	      // global.playerdata.bombCount --;
	      console.log('出一个炸弹');
	      // Director.sharedDirector().audio.play('addfruit_1');
	      _gameGlobal2.default.audioControl.play('addfruit_1');
	      var _fruit = (0, _fruit3.default)({
	        image: 'bomb',
	        // scale: Math.round(Math.random()*2 + 8) * 0.1
	        scale: 1
	      });
	      _fruit.add2World(that.node);
	      _fruits.push(_fruit);
	    }
	    _gameGlobal2.default.playerdata.fruitCount--;
	    if (_gameGlobal2.default.playerdata.fruitCount < 0) {
	      _gameGlobal2.default.playerdata.fruitCount = 0;
	      _fruitNameStrs = ['bomb'];
	    }
	
	    _allCellCount--;
	  };
	
	  that.touchEnd = function () {
	    beginTime = Date.now();
	  };
	  that.touchBegin = function () {
	    // beginTime = Date.now() + 100;
	    // hitsCount = 0;
	  };
	  var hitsCount = 0;
	  var beginTime = 0;
	  _gameGlobal2.default.events.on('addcutfruit', function () {
	    _nowSuperPower++;
	    if (hitsCount === 0) {
	      beginTime = Date.now() + 35;
	    } else {
	      beginTime += 35;
	    }
	    hitsCount++;
	  });
	
	  var hitsLogic = function hitsLogic() {
	    if (Date.now() > beginTime) {
	      if (hitsCount >= 2) {
	        // if (hitsCount > 8){
	        //   hitsCount = 8;
	        // }
	
	        if (hitsCount === 2) {
	          _gameGlobal2.default.audioControl.play('cuteffect_0');
	        } else if (hitsCount === 3) {
	          _gameGlobal2.default.audioControl.play('cuteffect_1');
	        } else {
	          _gameGlobal2.default.audioControl.play('cuteffect_2');
	        }
	
	        _nowSuperPower += hitsCount;
	        console.log(hitsCount + '连击');
	
	        _gameGlobal2.default.playerdata.totalScore += (hitsCount - 1) * 10;
	
	        _gameGlobal2.default.events.fire('caromCount', hitsCount); ////发送连切数
	        _gameGlobal2.default.events.fire('addShow', {
	          text: hitsCount + '连击',
	          font: 'combo',
	          position: {
	            x: _imports.Director.sharedDirector().screen.right * 0.5,
	            y: 300
	          }
	        });
	      } else if (hitsCount === 1) {
	        _gameGlobal2.default.events.fire('caromCount', hitsCount);
	      }
	
	      hitsCount = 0;
	    }
	    _gameGlobal2.default.events.fire('uilayerprogressbar', _nowSuperPower / _totalSuperPower);
	  };
	
	  that.inheritOn('update', function (deltaTime) {
	    if (_state != GameState.Running) {
	      return;
	    }
	    for (var i = 0; i < _fruits.length; i++) {
	      _fruits[i].move(deltaTime);
	      if (_fruits[i].isOver()) {
	        _fruits.splice(i, 1);
	      }
	    }
	    if (_addFruitType === AddFruitType.Normal || _addFruitType === AddFruitType.Crazying) {
	      if (_gameGlobal2.default.playerdata.fruitCount < 10) {
	        _setFruitState(AddFruitType.Normal);
	      }
	
	      if (_timeCount > _addFruitTimeDis[_addTimeDisIndex] * _addFruitDisTimeScaleOffset) {
	        _timeCount = 0;
	        _addTimeDisIndex = Math.round(Math.random() * (_addFruitTimeDis.length - 1));
	        if (_addFruitType === AddFruitType.SuperFruit) {
	          return;
	        } else {
	          that.addFruit();
	        }
	      }
	      _timeCount++;
	    }
	    hitsLogic();
	  });
	
	  that.touchMove = function (data) {
	    // global.events.fire('debug',JSON.stringify(data.identifier));
	    var touchPos = (0, _imports.Vec2)(data.getLocalPosition(that.node).x, data.getLocalPosition(that.node).y);
	    for (var i = 0; i < _fruits.length; i++) {
	      var touchVec = (0, _imports.Vec2)(touchPos.x, touchPos.y);
	      _fruits[i].Cut(touchVec);
	    }
	  };
	
	  _gameGlobal2.default.events.on('cutbomb', function () {
	    _setFruitState(AddFruitType.CutBomb);
	    _shakeNode2.default.shakeNode(that.node);
	  });
	
	  _gameGlobal2.default.events.on('superfuritcut', function (pos) {
	    console.log('超级水果+1');
	    _superFruitCutCount++;
	    // shakeNode.shakeNode(that.node,1);
	
	    var light = new PIXI.Sprite.fromImage(_resources2.default.superFruitLight);
	    light.alpha = 1;
	    light.scale = {
	      x: 1,
	      y: 1
	    };
	    light.rotation = Math.random() * 360 / (180 / Math.PI);
	    light.anchor.set(0.5, 0.5);
	    light.zOrder = -10;
	
	    light.position = pos;
	    that.node.addChild(light);
	    var alpchange = new TWEEN.Tween({ alpha: 1 }).to({ alpha: 0 }, 60).onUpdate(function () {
	      light.alpha = this.alpha;
	    }).onComplete(function () {
	      //that.node.removeChild(light);
	    });
	    var sizechange = new TWEEN.Tween({ x: 1, y: 1 }).to({ x: 1.5, y: 1.5 }, 80).onUpdate(function () {
	      light.scale.x = this.x;
	      light.scale.y = this.y;
	    }).onComplete(function () {
	      alpchange.start();
	    });
	    sizechange.start();
	  });
	  _gameGlobal2.default.events.on('superfruitcutover', function (data) {
	    console.log('超级水果切结束' + data);
	
	    _setFruitState(AddFruitType.FruitOver);
	  });
	  _gameGlobal2.default.events.on('flashover', function () {
	    for (var i = 0; i < _fruits.length; i++) {
	      _fruits[i].removeSelf();
	    }
	    // _setFruitState(AddFruitType.ChangeState);
	  });
	  _gameGlobal2.default.events.on('fruitover', function () {
	    // console.log('没有水果了');
	    _setFruitState(AddFruitType.FruitOver);
	  });
	
	  var _setState = function _setState(state) {
	    if (_state === state) {
	      return;
	    }
	    _state = state;
	    switch (state) {
	      case GameState.Waiting:
	        break;
	      case GameState.Running:
	        // console.log('开始游戏');
	        // RandomGameType();
	        _setFruitState(AddFruitType.Normal);
	        _gameGlobal2.default.events.fire('gamestate', 'start');
	        break;
	      case GameState.Over:
	        console.log('fruit layer Over');
	        _gameGlobal2.default.events.fire('gamestate', 'over');
	
	        break;
	      default:
	        break;
	    }
	  };
	  that.toReady = function () {
	    _setState(GameState.Waiting);
	  };
	
	  that.toStart = function () {
	    console.log('fruit  start');
	    initData();
	    _setState(GameState.Running);
	  };
	  that.toEnd = function () {
	    _setState(GameState.Over);
	  };
	
	  return that;
	};
	exports.default = FruitLayer;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _fruitCell2 = __webpack_require__(42);
	
	var _fruitCell3 = _interopRequireDefault(_fruitCell2);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _bombCell = __webpack_require__(47);
	
	var _bombCell2 = _interopRequireDefault(_bombCell);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2016/10/24.
	 */
	var FruitState = {
	  Invalide: -1,
	  Waiting: 1,
	  Running: 2,
	  Cut: 3,
	  CutOver: 4,
	  Over: 5,
	  SlowSpeed: 7,
	  StopY: 8,
	  SuperFruitBomb: 9
	
	};
	
	var Fruit = function Fruit(spec) {
	  var that = new PIXI.Container();
	  that.type = spec.image;
	  that.position = {
	    x: _imports.Director.sharedDirector().screen.right * 0.5 + Math.random() * 100 - 50,
	    y: _imports.Director.sharedDirector().screen.bottom + 60
	  };
	
	  var _state = FruitState.Invalide;
	  var _timeScaleOffset = 1;
	  var _isCanCut = false;
	  var _superFruitCutCount = 0;
	  var _isCut = false;
	  var _setState = function _setState(newState, callBack) {
	    if (_state === newState) {
	      return;
	    }
	
	    (function () {
	      switch (newState) {
	        case FruitState.Waiting:
	          // idle animation
	          //_animation.playOnce('idle',callBack);
	          break;
	        case FruitState.Running:
	          // play cut animation
	          _timeScaleOffset = 1;
	          break;
	        case FruitState.Over:
	          // console.log('FruitState Over');
	          that.destory();
	          break;
	        case FruitState.Cut:
	          _fruitCell.cut();
	          setTimeout(function () {
	            if (that.type === 'bomb') {} else {
	              _setState(FruitState.CutOver);
	            }
	          }, 200);
	          break;
	        case FruitState.CutOver:
	          _RotationSpeed = 0;
	          _speedY = 0;
	          break;
	        case FruitState.SlowSpeed:
	          _timeScaleOffset = 0.1;
	          break;
	        case FruitState.StopY:
	          // _timeScaleOffset = 0.1;
	          _isCanCut = true;
	          _gameGlobal2.default.events.fire('zoomIn');
	          _fruitCell.lowNode.removeChild(_fruitCell.guang);
	
	          break;
	        case FruitState.SuperFruitBomb:
	          // console.log('超级水果爆炸');
	          // global.events.fire('superfruitcutover');
	          // setTimeout(()=>{
	          //   global.events.fire('superfruitcutover');
	          // },1000);
	          console.log('position=' + JSON.stringify(that.position));
	          shake(that, 2, function () {
	            console.log('爆炸结束');
	            _gameGlobal2.default.events.fire('zoomOut');
	            // global.events.fire('superfruitcutover');
	            // that.lowNode.visible = false;
	            _fruitCell.lowNode.visible = false;
	            _fruitCell.cut();
	            _gameGlobal2.default.events.fire('fruitemit', {
	              pos: (0, _imports.Vec2)(that.position.x, that.position.y),
	              image: 'pomegranatefragments'
	            });
	            _gameGlobal2.default.events.fire('superfruitcutover', _superFruitCutCount);
	          });
	          var sp = PIXI.Sprite.fromImage(_resources2.default.fasheguang0);
	          _fruitCell.lowNode.addChild(sp);
	          sp.anchor.set(0.5);
	          var action = new TWEEN.Tween({ scale: 0 }).to({ scale: 2 }, 400).onUpdate(function () {
	            sp.scale = {
	              x: this.scale,
	              y: this.scale
	            };
	          });
	          action.start();
	
	          break;
	        default:
	          break;
	      }
	    })();
	
	    _state = newState;
	  };
	
	  var shake = function shake(node, index, cb) {
	    if (index <= 0) {
	      if (cb) {
	        cb();
	      }
	      return;
	    }
	    index--;
	    var pos = node.position;
	    var action = new TWEEN.Tween(pos).to({ x: pos.x + getRandomNum(pos) * 10,
	      y: pos.y + getRandomNum(pos) * 10 }, 200).onUpdate(function () {
	      if (node) {
	        node.position = {
	          x: this.x,
	          y: this.y
	        };
	      }
	    }).onComplete(function () {
	      shake(node, index, cb);
	    });
	    action.start();
	
	    var a1 = new TWEEN.Tween({ scale: 1 }).to({ scale: 1.2 }, 100).onUpdate(function () {
	      node.scale = {
	        x: this.scale,
	        y: this.scale
	      };
	    }).onComplete(function () {
	      a2.start();
	    });
	    a1.start();
	    var a2 = new TWEEN.Tween({ scale: 1.2 }).to({ scale: 1 }, 100).onUpdate(function () {
	      node.scale = {
	        x: this.scale,
	        y: this.scale
	      };
	    }).onComplete(function () {});
	    a2.start();
	  };
	  that.isCut = false;
	  var _speedY = Math.random() * 400 + 1100;
	  var _speedX = Math.random() * 300 - 150;
	  if (that.type === 'superFruit') {
	    _speedX = 0;
	    _speedY = 1300;
	  }
	  var _acceleration = -(Math.random() * 0.05 + 0.14) * 10;
	  var _RotationSpeed = (Math.random() * 6 - 3) * 100;
	
	  var _fruitCell = void 0;
	  if (spec.image === 'bomb') {
	    _fruitCell = (0, _bombCell2.default)({
	      animate: _resources2.default.ani_bomb,
	      scale: 1,
	      position: (0, _imports.Vec2)(0, 0)
	    });
	  } else if (spec.image === 'superFruit') {
	    _fruitCell = (0, _fruitCell3.default)({
	      image: 'pomegranate',
	      scale: spec.scale,
	      position: (0, _imports.Vec2)(0, 0)
	    });
	    setTimeout(function () {
	      _setState(FruitState.SuperFruitBomb);
	    }, 6000);
	  } else {
	    _fruitCell = (0, _fruitCell3.default)({
	      image: spec.image,
	      scale: spec.scale,
	      position: (0, _imports.Vec2)(0, 0),
	      state: spec.state
	    });
	  }
	
	  _fruitCell.add2World(that);
	
	  _setState(FruitState.Running);
	  that.add2World = function (parent) {
	    that.parent = parent;
	    that.parent.addChild(that);
	  };
	  that.move = function (dt) {
	    dt *= _timeScaleOffset;
	    if (_state === FruitState.Running || _state === FruitState.CutOver || _state === FruitState.SlowSpeed || _state === FruitState.StopY) {
	      if (_state === FruitState.SlowSpeed && spec.image === 'bomb') {
	
	        return;
	      }
	      var dtSecond = dt / 1000;
	      _speedY += _acceleration * dt;
	      if (spec.image === 'superFruit') {
	        if (_state === FruitState.Running) {
	          if (Math.abs(_speedY) < 100) {
	            _setState(FruitState.StopY);
	          }
	        }
	      }
	      if (_state === FruitState.StopY) {
	        _speedX = 0;
	        _speedY = 0;
	      }
	
	      var pos = (0, _imports.Vec2)(that.position.x, that.position.y).sub((0, _imports.Vec2)(_speedX * dtSecond, _speedY * dtSecond));
	      that.position = {
	        x: pos.x,
	        y: pos.y
	      };
	
	      if (_state === FruitState.Running || _state === FruitState.StopY) {
	        that.rotation = that.rotation + _RotationSpeed * dtSecond * Math.PI / 180;
	      }
	
	      if (_speedY < -2000) {
	        _setState(FruitState.Over);
	      }
	    }
	
	    if (_fruitCell.update) {
	      _fruitCell.update(dt);
	    }
	  };
	
	  that.Cut = function (touchVec) {
	    if (_state === FruitState.Running || _state === FruitState.StopY) {
	      (function () {
	        var localVec = (0, _imports.Vec2)(that.position.x, that.position.y);
	        var dis = localVec.getDistance(touchVec);
	        if (dis < 50) {
	          // Director.sharedDirector().audio.play('cut_' + spec.image);
	
	
	          _isCut = true;
	
	          if (that.type === 'bomb') {
	            _gameGlobal2.default.audioControl.play('cut_' + spec.image);
	            _gameGlobal2.default.playerdata.cutBombCount++;
	            _gameGlobal2.default.events.fire('cutbomb');
	            _gameGlobal2.default.events.fire('flasheffect', {
	              position: localVec,
	              node: that
	            });
	
	            _gameGlobal2.default.playerdata.lostRedBagCount += _gameGlobal2.default.playerdata.getRealRedbagCount;
	            _gameGlobal2.default.playerdata.getRedbagCount = 0;
	            _gameGlobal2.default.playerdata.getRealRedbagCount = 0;
	            _gameGlobal2.default.playerdata.getRangRedbagSum = 0; ///随机红包金额清零
	            var tempScore = _gameGlobal2.default.playerdata.totalScore;
	            _gameGlobal2.default.playerdata.totalScore -= _gameGlobal2.default.playerdata.cutBombSubScore;
	            if (_gameGlobal2.default.playerdata.totalScore <= 0) {
	              _gameGlobal2.default.playerdata.totalScore = 0;
	            } else {
	              tempScore = _gameGlobal2.default.playerdata.cutBombSubScore;
	            }
	            _gameGlobal2.default.playerdata.cutBombSubScoreList.push(tempScore);
	
	            if (_gameGlobal2.default.playerdata.cutBombSubScore === 0) {
	              //减益  为0 的时候 不需要 显示 提示
	            } else {
	
	              _gameGlobal2.default.events.fire('addShow', {
	                text: '-' + _gameGlobal2.default.playerdata.cutBombSubScore,
	                font: 'rank_number_6',
	                position: {
	                  x: that.position.x,
	                  y: that.position.y - 100
	                }
	              });
	            }
	
	            _setState(FruitState.Cut);
	          } else if (that.type === 'superFruit') {
	            // console.log('砍中的是 超级水果');
	            // global.events.fire('zoomIn')
	            _gameGlobal2.default.events.fire('shakeCamera');
	            cutSuperEffect(that, function () {
	              if (_state === FruitState.SuperFruitBomb) {
	                return;
	              }
	              _gameGlobal2.default.audioControl.play('cut_banana');
	
	              _superFruitCutCount++;
	              _gameGlobal2.default.playerdata.cutSuperCount = _superFruitCutCount;
	              _gameGlobal2.default.events.fire('addShow', {
	                text: '+' + _superFruitCutCount + '连击',
	                font: 'combo',
	                position: {
	                  x: that.position.x,
	                  y: that.position.y - 100
	                }
	              });
	
	              _RotationSpeed *= -1;
	              _gameGlobal2.default.events.fire('superfuritcut', that.position);
	              // console.log('超级水果暴击+1');
	              _gameGlobal2.default.events.fire('cuteffect', {
	                image: 'pomegranate',
	                position: localVec.add((0, _imports.Vec2)(Math.random() * 200 - 100, Math.random() * 200 - 100)),
	                direction: touchVec.sub(localVec)
	              });
	              _gameGlobal2.default.events.fire('fruitemit', {
	                pos: touchVec,
	                image: 'pomegranate'
	              });
	              _gameGlobal2.default.events.fire('cellMove', {
	                node: that,
	                ang: that.rotation,
	                pos: {
	                  x: that.position.x,
	                  y: that.position.y
	                }
	              });
	              // addCutEffect({x: Math.random() * 100 - 50, y:Math.random() * 100 - 50});
	            });
	          } else {
	
	            _gameGlobal2.default.playerdata.totalScore += 10;
	            _setState(FruitState.Cut);
	            _gameGlobal2.default.events.fire('cutfruit', {
	              position: {
	                x: that.position.x,
	                y: that.position.y
	              }
	            });
	            _gameGlobal2.default.events.fire('addcutfruit');
	            console.log('play sound' + 'cut_' + spec.image);
	            _gameGlobal2.default.audioControl.play('cut_' + spec.image);
	            //global.playerdata.gold ++;
	            _gameGlobal2.default.playerdata.cutFruitCount++;
	            _gameGlobal2.default.events.fire('cuteffect', {
	              image: spec.image,
	              position: localVec,
	              direction: touchVec.sub(localVec)
	            });
	            _gameGlobal2.default.events.fire('fruitemit', {
	              pos: touchVec,
	              image: spec.image
	            });
	            if (that.bigredbag === true) {
	              console.log('切中了大红包');
	
	              _gameGlobal2.default.playerdata.getRangRedbagSum += _gameGlobal2.default.playerdata.randCentNum;
	              _gameGlobal2.default.playerdata.getRealRedbagCount++;
	              _gameGlobal2.default.playerdata.getRedbagCount += _gameGlobal2.default.playerdata.randCentNum;
	              _gameGlobal2.default.playerdata.allGetRedbag += _gameGlobal2.default.playerdata.randCentNum;
	              // allGetRedbag
	            }
	            if (that.redbag === true) {
	              _gameGlobal2.default.playerdata.getRealRedbagCount++;
	              _gameGlobal2.default.playerdata.getRedbagCount++;
	              _gameGlobal2.default.playerdata.allGetRedbag++;
	              _gameGlobal2.default.events.fire('addShow', {
	                text: '+1个红包',
	                // font: 'gift_number',
	                position: {
	                  x: localVec.x,
	                  y: localVec.y
	                }
	              });
	              // Director.sharedDirector().audio.play('getred_' + Math.round(Math.random() * 1))
	              //global.audioControl.play(defines.musicConfig['getred_' + Math.round(Math.random() * 1)]);
	              _gameGlobal2.default.audioControl.play('getred_1');
	              _gameGlobal2.default.events.fire('addredbageffect', {
	                image: 'redbag',
	                position: {
	                  x: that.position.x,
	                  y: that.position.y
	                }
	              });
	            }
	          }
	        }
	      })();
	    }
	  };
	
	  // const addCutEffect = function (pos) {
	  //   console.log('add Cut effect');
	  //   // let effect = PIXI.Sprite.fromImage(resources['daoguang' + Math.round(Math.random() * 1)]);
	  //   // that.addChild(effect);
	  //   // effect.anchor.set(0.5);
	  //   // // effect.position.set(pos);
	  //   // effect.rotation = Math.random() * 360 * Math.PI/180;
	  //   // let action = new TWEEN.Tween({alpha: 1})
	  //   //   .to({alpha: 0},100)
	  //   //   .onUpdate(function () {
	  //   //     effect.alpha = this.alpha;
	  //   //   })
	  //   //   .onComplete(function () {
	  //   //     that.removeChild(effect);
	  //   //   });
	  //   //   action.start();
	  // }
	
	  var getRandomNum = function getRandomNum(pos) {
	    var w = Math.random() * 2 - 1;
	    var i = w / Math.abs(w);
	    // console.log('随机到的方向是' + i);
	
	    return i;
	  };
	
	  var cutSuperEffect = function cutSuperEffect(object, cb) {
	    if (_isCanCut) {} else {
	      return;
	    }
	    _isCanCut = false;
	    var objectPos = object.position;
	
	    var action = new TWEEN.Tween({ scale: 1, x: objectPos.x, y: objectPos.y }).to({ scale: 1.04,
	      x: objectPos.x + getRandomNum(objectPos) * 10,
	      y: objectPos.y + getRandomNum(objectPos) * 10 }, Math.random() * 10 + 10).onUpdate(function () {
	      object.scale = {
	        x: this.scale,
	        y: this.scale
	      };
	      object.position = {
	        x: this.x,
	        y: this.y
	      };
	    }).onComplete(function () {
	      action1.start();
	    });
	    action.start();
	    var action1 = new TWEEN.Tween({ scale: 1.04 }).to({ scale: 1 }, Math.random() * 40 + 60).onUpdate(function () {
	      object.scale = {
	        x: this.scale,
	        y: this.scale
	      };
	    }).onComplete(function () {
	      _isCanCut = true;
	      if (cb) {
	        cb();
	      }
	
	      object.position = objectPos;
	    });
	  };
	
	  that.isOver = function () {
	    if (_state === FruitState.Over) {
	      return true;
	    } else {
	      return false;
	    }
	  };
	
	  var SlowSpeed = function SlowSpeed() {
	    // console.log('fruit game over');
	    _setState(FruitState.SlowSpeed);
	  };
	  _gameGlobal2.default.events.on('cutbomb', SlowSpeed);
	
	  that.removeSelf = function () {
	
	    _setState(FruitState.Over);
	  };
	
	  that.destory = function () {
	
	    if (_isCut) {} else {
	      if (that.redbag) {
	        _gameGlobal2.default.playerdata.lostRedBagCount++;
	      }
	      if (that.bigredbag) {
	        _gameGlobal2.default.playerdata.lostRedBagCount++;
	      }
	    }
	
	    _fruitCell.removeSelf();
	    that.parent.removeChild(that);
	    _gameGlobal2.default.events.removeListener('cutbomb', SlowSpeed);
	  };
	
	  return that;
	};
	exports.default = Fruit;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FruitCell = function FruitCell(spec) {
	  var that = {};
	  var _cells = [];
	  var _superCells = [];
	  var a = 0;
	  that.add2World = function (parent) {
	    that.parent = parent;
	
	    if (spec.image === 'pomegranate') {
	
	      console.log('初始化超级水果');
	      // let sp = PIXI.Sprite.fromImage(resources.fasheguang0);
	      // that.parent.addChild(sp);
	      // sp.anchor.set(0.5);
	      that.lowNode = new PIXI.Container();
	      that.parent.addChild(that.lowNode);
	
	      that.guang = PIXI.Sprite.fromImage(_resources2.default.bg_guang);
	      that.guang.anchor.set(0.5);
	      that.lowNode.addChild(that.guang);
	      var action = new TWEEN.Tween({ angle: 0 }).to({ angle: Math.PI * 2 }, 10000).onUpdate(function () {
	        that.guang.rotation = this.angle;
	      });
	      action.start();
	
	      for (var i = 0; i < 6; i++) {
	        var cell = PIXI.Sprite.fromImage(_resources2.default['pomegranatefragments_' + (i + 1)]);
	        that.parent.addChild(cell);
	        cell.anchor.set(0.5);
	        cell.position = spec.position;
	        _superCells.push(cell);
	      }
	      // let sp = PIXI.Sprite.fromImage(resources.fasheguang0);
	      // that.lowNode.addChild(sp);
	      // sp.anchor.set(0.5);
	
	    } else {
	      for (var _i = 0; _i < 4; _i++) {
	        var str = _i;
	        var _cell = new PIXI.Sprite.fromImage(_resources2.default[spec.image + '_' + str]);
	        that.parent.addChild(_cell);
	        _cell.anchor.set(0.5);
	        _cell.position = spec.position;
	        _cells.push(_cell);
	
	        if (spec.state === 9) {} else {
	          if (_i < 2) {} else {
	            _cell.visible = false;
	          }
	        }
	      }
	    }
	  };
	  _gameGlobal2.default.events.on('cellMove', function (data) {
	    if (spec.image === 'pomegranate') {} else {
	      return;
	    }
	    a++;
	    if (a === 7) {
	      _superCells[5].position = { x: a * 0.3, y: a * 0.3 };
	      _superCells[4].position = { x: -a * 0.3, y: 0 };
	      _superCells[3].position = { x: -a * 0.3, y: a * 0.3 };
	      _superCells[2].position = { x: a * 0.3, y: 0 };
	    } else if (a === 14) {
	      _superCells[5].position = { x: a * 0.6, y: a * 0.6 };
	      _superCells[4].position = { x: -a * 0.6, y: 0 };
	      _superCells[3].position = { x: -a * 0.6, y: a * 0.6 };
	      _superCells[2].position = { x: a * 0.6, y: 0 };
	    } else if (a === 21) {
	      _superCells[5].position = { x: a * 0.75, y: a * 0.75 };
	      _superCells[4].position = { x: -a * 0.75, y: 0 };
	      _superCells[3].position = { x: -a * 0.75, y: a * 0.75 };
	      _superCells[2].position = { x: a * 0.75, y: 0 };
	    } else {
	      return;
	    }
	  });
	
	  var moveCell = function moveCell(node, pos) {
	    var action1 = new TWEEN.Tween({ x: 0, y: 0 }).to({ x: pos.x, y: pos.y }, 1000).onUpdate(function () {
	      // _cells[i].position = {
	      //   x: this.x,
	      //   y: this.y
	      // }
	      node.position = {
	        x: this.x,
	        y: this.y
	      };
	    }).onComplete(function () {
	      that.parent.removeChild(node);
	    });
	    action1.start();
	
	    var angle = Math.random() * 6000 - 3000;;
	    var action2 = new TWEEN.Tween({ angle: 0 }).to({ angle: angle }, 5000).onUpdate(function () {
	      // _cells[i].rotation = this.angle * Math.PI/180;
	      if (spec.image === 'pomegranatefragments') {} else {
	        node.rotation = this.angle * Math.PI / 180;
	      }
	    });
	    action2.start();
	  };
	  that.cut = function () {
	
	    var randomDirection = (0, _imports.Vec2)(Math.random(), Math.random());
	    var cells = [];
	    if (spec.image === 'pomegranate') {
	      console.log('超级水果爆炸' + _superCells.length);
	      cells = _superCells;
	    } else {
	      cells = _cells;
	      for (var i = 0; i < 2; i++) {
	        _cells[i + 2].visible = false;
	      }
	    }
	    console.log('length = ' + cells.length);
	    for (var _i2 = 0; _i2 < cells.length; _i2++) {
	      var direction = randomDirection.rotateByAngle((0, _imports.Vec2)(0, 0), 360 / cells.length * _i2);
	      console.log('direction=' + JSON.stringify(direction));
	      var pos = direction.getNormal().multValue(Math.random() * 300 + 300);
	      console.log('pos =' + JSON.stringify(pos));
	      // moveCell(cells[i],pos);
	      if (spec.image === 'pomegranate') {
	        moveSuperFruit(cells[_i2], pos);
	      } else {
	        moveCell(cells[_i2], pos);
	      }
	    }
	  };
	  var moveSuperFruit = function moveSuperFruit(node, pos) {
	    //console.log('node.pos' + JSON.stringify(node.position));
	    //console.log('target pos' + JSON.stringify(pos));
	    var action1 = new TWEEN.Tween({ x: 0, y: 0 }).to({ x: pos.x, y: pos.y }, 600).onUpdate(function () {
	      node.position = {
	        x: this.x,
	        y: this.y
	      };
	    }).onComplete(function () {
	      that.parent.removeChild(node);
	    }).easing(TWEEN.Easing.Quadratic.InOut);
	
	    action1.start();
	  };
	  that.removeSelf = function () {
	    for (var i = 0; i < _cells.length; i++) {
	      that.parent.removeChild(_cells[i]);
	    }
	    a = 0;
	  };
	  return that;
	}; /**
	    * Created by chuhaoyuan on 2016/10/25.
	    */
	exports.default = FruitCell;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _playerData = __webpack_require__(44);
	
	var _playerData2 = _interopRequireDefault(_playerData);
	
	var _audioControl = __webpack_require__(46);
	
	var _audioControl2 = _interopRequireDefault(_audioControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import ConfigManger from './config-manager.js'
	//import AccountData from '../src/data/account-data'
	//import WofunsSockets from './network/wofuns_ws'
	//import LoopEndPool from './loop-end-pool'
	var gameGlobal = {
	  events: (0, _imports.Eventuality)({}),
	  playerdata: (0, _playerData2.default)(),
	  audioControl: (0, _audioControl2.default)()
	  //configManager : ConfigManger(),
	  //accountData : AccountData(),
	  //gameAccountData : AccountData(),
	  //sockets:WofunsSockets(),
	  //loopEnd: LoopEndPool()
	}; /**
	    * Created by wizard on 16/3/31.
	    */
	exports.default = gameGlobal;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	var _platformHelper = __webpack_require__(45);
	
	var _platformHelper2 = _interopRequireDefault(_platformHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PlayerData = function PlayerData() {
	  var that = {};
	  that.uid = 0;
	
	  that.allFruitCount = 0; //分配到的所有水果总数
	  that.fruitCount = 10; //分配到的 所有水果总数
	  that.centsNum = 0; //分配到的所有 红包总数
	  that.bombCount = 0; //分配到的所有炸弹总数
	  that.gold = 100000;
	  that.randCentNum = 0;
	  that.cutBombSubScore = 0; ///切到炸弹减的分数
	
	
	  that.allGetRedbag = 0; //切刀的 红包总数
	  that.getRedbagCount = 0; //抢到的红包个数
	  that.getRealRedbagCount = 0; //得到的真实红包个数
	  that.cutFruitCount = 0; ///切刀的水果个数
	  that.cutBombCount = 0; ///切刀的所有炸弹总数
	  that.cutSuperCount = 0; //切刀的超级水果次数
	  that.totalScore = 0; ///总积分,
	  that.lostRedBagCount = 0; //漏掉的红包数量
	  that.cutBombSubScoreList = []; //切到红包减分列表;
	  that.getRangRedbagSum = 0; ///切刀的随机红包金额;
	  that.deviceModel = 'none'; ///获取设备型号
	
	
	  // let userInfo = platform.getUserInfo();
	  // let userInfo = {};
	  // platform.getUserInfo((data)=>{
	  //   userInfo = data;
	  // });
	  // that.uid = userInfo.uid;
	  // that.auth = userInfo.auth;
	
	  // that.oldRankNum = 0;///当前玩家的排名
	  // that.nowRankNum = 0;///玩家旧的排名
	  // that.changedRankNum = 0;//玩家变化的排名数
	
	
	  that.hitsLists = []; ///连击数组
	  that.initData = function () {
	    that.fruitCount = 10; //分配到的 所有水果总数
	    that.cutSuperCount = 0;
	    that.allGetRedbag = 0; //切刀的 红包总数
	    that.getRedbagCount = 0; //抢到的红包个数
	    that.getRealRedbagCount = 0; //得到的真实红包个数
	    that.cutFruitCount = 0; ///切刀的水果个数
	    that.cutBombCount = 0; ///切刀的所有炸弹总数
	    that.cutSuperCount = 0; //切刀的超级水果次数
	    that.totalScore = 0; ///总积分
	    that.lostRedBagCount = 0; //漏掉的红包的数量
	    that.cutBombSubScoreList = []; //切到红包减分列表;
	    that.getRangRedbagSum = 0; //切刀的随机红包金额;
	  };
	
	  that.requestData = function (method, params, cb) {
	    _imports.SRequest.post(_gameDefines2.default.gameHomeURL, method + '?uid=' + that.uid, {}, params, function (data) {
	      console.log('requestData', method);
	      if (data.status !== 'ok') {
	        console.error('requestData,Failed!', JSON.stringify(data));
	      } else {}
	
	      if (cb) {
	        cb(data);
	      }
	    });
	  };
	  that.getGameInfo = function (cb) {
	
	    _platformHelper2.default.safeRequest(_gameDefines2.default.gameHomeURL + _gameDefines2.default.URLMethods.gameStart, {
	      uid: that.uid,
	      auth: that.auth,
	      channel: function () {
	        if (_platformHelper2.default.osVer === 1) {
	          return 'iOS';
	        } else if (_platformHelper2.default.osVer === 2) {
	          return 'Android';
	        } else {
	          return 'none';
	        }
	      }(),
	      deviceType: that.deviceModel
	    }, function (data) {
	      if (data.status !== 'ok') {
	
	        cb.call(null, false, data);
	      } else {
	
	        console.log('gamestart info=' + JSON.stringify(data));
	
	        that.fruitCount = data.res.fruitsNum;
	        that.centsNum = data.res.centsNum;
	        that.bombCount = data.res.bombNum;
	        that.gold = data.res.money_pool;
	        that.allFruitCount = data.res.fruitsNum;
	        that.randCentNum = data.res.randCentNum;
	        that.cutBombSubScore = data.res.bombHarm; //切到炸弹减的分数
	
	        // that.fruitCount = 2;
	        // that.centsNum = 100;
	        // that.bombCount = 0;
	
	        if (cb) {
	          console.log('run cb: ' + that.cutBombSubScore);
	          cb.call(null, true);
	        }
	      }
	    });
	
	    // that.requestData(defines.URLMethods.gameStart,{
	    //   uid: that.uid,
	    //   auth: that.auth,
	    //   channel:  (()=>{
	    //     if (platform.osVer === 1){
	    //       return 'iOS';
	    //     }else if (platform.osVer === 2){
	    //       return 'Android';
	    //     }else {
	    //       return 'none';
	    //     }
	    //   })()
	    // },(data)=>{
	    //   if (data.status != 'ok'){
	    //
	    //     cb.call(null, false, data);
	    //   }else {
	    //
	    //     console.log('gamestart info=' + JSON.stringify(data));
	    //
	    //     that.fruitCount = data.res.fruitsNum;
	    //     that.centsNum = data.res.centsNum;
	    //     that.bombCount =data.res.bombNum;
	    //     that.gold = data.res.money_pool;
	    //     that.allFruitCount = data.res.fruitsNum;
	    //     that.randCentNum = data.res.randCentNum;
	    //     that.cutBombSubScore = data.res.bombHarm;//切到炸弹减的分数
	    //
	    //     // that.fruitCount = 2;
	    //     // that.centsNum = 100;
	    //     // that.bombCount = 0;
	    //
	    //     if (cb){
	    //       cb.call(null, true);
	    //     }
	    //   }
	    // });
	  };
	  that.gameOver = function (cb) {
	    console.log('切到的水果数' + that.cutFruitCount);
	    console.log('切刀的炸弹数' + that.cutBombCount);
	    console.log('获得的红包金额' + that.getRedbagCount);
	    console.log('清除的红包金额' + (that.allGetRedbag - that.getRedbagCount));
	    console.log('连击列表' + JSON.stringify(that.hitsLists));
	    console.log('切刀的超级水果次数' + that.cutSuperCount);
	    console.log('遗漏的红包个数' + that.centsNum - that.getRealRedbagCount);
	    console.log('切到的炸弹减分列表' + JSON.stringify(that.cutBombSubScoreList));
	    console.log('得到的随机红包的金额是' + that.getRangRedbagSum);
	    //
	    // if (cb){
	    //   cb({
	    //     status: 'fail',
	    //     show: '用户异常'
	    //   })
	    // }
	    // return
	    ////计算一下 最终得到的红包个数
	
	    _platformHelper2.default.safeRequest(_gameDefines2.default.gameHomeURL + _gameDefines2.default.URLMethods.gameOver, {
	      uid: that.uid,
	      bombNum: that.cutBombCount,
	      centsNum: that.getRedbagCount,
	      fruitsNum: that.cutFruitCount,
	      failCentsNum: that.allGetRedbag - that.getRedbagCount,
	      furyCutNum: that.cutSuperCount,
	      comboList: that.hitsLists,
	      bombHarmList: that.cutBombSubScoreList,
	      randCentNum: that.getRangRedbagSum,
	      deviceType: that.deviceModel
	    }, cb);
	
	    // that.requestData(defines.URLMethods.gameOver, {
	    //   uid: that.uid,
	    //   bombNum: that.cutBombCount,
	    //   centsNum: that.getRedbagCount,
	    //   fruitsNum: that.cutFruitCount,
	    //   failCentsNum: (that.allGetRedbag - that.getRedbagCount),
	    //   furyCutNum: that.cutSuperCount,
	    //   comboList: that.hitsLists,
	    //   bombHarmList: that.cutBombSubScoreList,
	    //   randCentNum: that.getRangRedbagSum,
	    //   deviceType: that.deviceModel
	    // },cb);
	  };
	
	  that.getRanklistData = function (cb, page, limit) {
	    that.requestData(_gameDefines2.default.URLMethods.GetFruitRank, {
	      uid: that.uid,
	      page: page,
	      limit: limit
	    }, function (data) {
	      if (data.status === 'ok') {
	        if (cb) {
	          // console.log('getRanklistData :' + JSON.stringify(data));
	          cb(data.res);
	        }
	      }
	    });
	  };
	
	  return that;
	}; /**
	    * Created by chuhaoyuan on 2016/10/25.
	    */
	exports.default = PlayerData;

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by chuhaoyuan on 2016/11/2.
	 */
	var CMD = {
	  loadEnd: 'hide_loading',
	  playSound: 'play_sound',
	  endAll: 'do_finish',
	  tipPacket: 'add_redbag_tip',
	  getUserInfo: 'get_app_data',
	  getAppUserInfo: 'get_user_info',
	  startRedbagGame: 'start_redbag_game',
	  showRecordact: 'show_recordact',
	  getDeviceModel: 'getdevicemodel',
	  safeRequest: 'safeRequest'
	
	};
	var OSType = {
	  iOS: 1,
	  Android: 2,
	  Web: 3,
	  unknown: 4
	};
	var _getOperatingSystem = function _getOperatingSystem() {
	  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	  if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i)) {
	    return OSType.iOS;
	  } else if (userAgent.match(/Android/i)) {
	    return OSType.Android;
	  } else {
	    return OSType.unknown;
	  }
	};
	var PlatformHelper = function PlatformHelper() {
	  var that = {
	    callbacks: {}
	  };
	
	  var _osVer = _getOperatingSystem();
	  that.osVer = _osVer;
	  console.log('os sys:' + _osVer);
	  var _sendCMD = function _sendCMD(body) {
	    var content = JSON.stringify(body);
	    console.log('send cmd' + content);
	    switch (_osVer) {
	      case OSType.iOS:
	        console.log('window.webkit.messageHandlers.webViewApp.postMessage' + content);
	        window.webkit.messageHandlers.webViewApp.postMessage(content);
	        break;
	      case OSType.Android:
	
	        break;
	      default:
	        window.alert('no cmd handler' + content);
	        break;
	    }
	  };
	
	  //todo native userinfo
	  that.loadEnd = function () {
	    if (window.Android && window.Android.hasOwnProperty("hideLoading")) {
	      window.Android.hideLoading();
	    } else {
	      _sendCMD({
	        cmd: CMD.loadEnd
	      });
	    }
	  };
	
	  that.playMusic = function (url) {};
	  that.playSound = function (url) {
	    if (window.Android && window.Android.hasOwnProperty("playSound")) {
	      return window.Android.playSound(url);
	    }
	    _sendCMD({
	      cmd: CMD.playSound,
	      data: {
	        url: url
	      }
	    });
	  };
	
	  that.getOsType = function () {
	    if (_osVer === OSType.iOS) {
	      return 'iOS';
	    } else if (_osVer === OSType.Android) {
	      return 'Android';
	    }
	  };
	  that.playBg = function (url) {
	    if (window.Android && window.Android.hasOwnProperty("playBg")) {
	      return window.Android.playBg(url);
	    }
	    _sendCMD({
	      cmd: CMD.playSound,
	      data: {
	        url: url
	      }
	    });
	  };
	
	  that.endAll = function () {
	    if (window.Android && window.Android.hasOwnProperty("doFinish")) {
	      return window.Android.doFinish();
	    }
	    _sendCMD({
	      cmd: CMD.endAll
	    });
	  };
	
	  that.tipPacket = function () {
	    if (window.Android && window.Android.hasOwnProperty("addRedBagTip")) {
	      return window.Android.addRedBagTip();
	    }
	    _sendCMD({
	      cmd: CMD.tipPacket
	    });
	  };
	
	  that.getUserInfo = function (cb) {
	    ////获取 用户uid 跟auth
	    var data = null;
	    if (window.Android && window.Android.hasOwnProperty('getAppData')) {
	      var resp = window.Android.getAppData();
	      console.log('PlatfromHelp window.Android.getAppData()=' + resp);
	      var body = JSON.parse(resp);
	      data = {
	        uid: parseInt(body.uid),
	        auth: body.auth
	      };
	      if (cb) {
	        cb(data);
	      }
	    } else if (_osVer === OSType.iOS) {
	      _callBackIndex++;
	      if (cb) {
	        that.callbacks[_callBackIndex] = function (data) {
	          cb({
	            uid: parseInt(data.uid),
	            auth: data.auth
	          });
	        };
	      }
	      _sendCMD({
	        cmd: CMD.getUserInfo,
	        data: {
	          callbackName: 'window.platform.appResponse',
	          callbackID: _callBackIndex.toString()
	        }
	      });
	    } else {
	      setTimeout(function () {
	        if (cb) {
	          cb({
	            uid: '80514454',
	            auth: 'test'
	          });
	        }
	      });
	    }
	    return data;
	  };
	
	  var _callBackIndex = 0;
	  var _handleResp = function _handleResp(dataString) {
	    // let str = dataString.replace(/\\/g,"\\\\");
	    // return JSON.parse(str);
	    return JSON.parse(dataString);
	  };
	
	  that.getAppUserInfo = function (uid, cb) {
	    console.log('get other info :' + uid);
	    _callBackIndex++;
	    if (cb) {
	      that.callbacks[_callBackIndex] = cb;
	    }
	
	    if (window.Android && window.Android.hasOwnProperty("getUserInfo")) {
	      window.Android.getUserInfo(uid.toString(), 'window.platform.appResponse', _callBackIndex.toString());
	    }
	    _sendCMD({
	      cmd: CMD.getAppUserInfo,
	      data: {
	        uid: uid.toString(),
	        callbackName: 'window.platform.appResponse',
	        callbackID: _callBackIndex.toString()
	      }
	    });
	  };
	
	  that.appResponse = function (cbindex, repString) {
	    console.log('app cbindex=' + cbindex + 'appResponse=' + repString);
	    var resp = _handleResp(repString);
	    // if (that.callbacks[resp.func_id]){
	    //   that.callbacks[resp.func_id].call(null,resp.resp);
	    //   delete  that.callbacks[resp.func_id];
	    // }
	    var index = parseInt(cbindex);
	    if (that.callbacks[index]) {
	      console.log('play cb: ' + index);
	      that.callbacks[index].call(null, resp);
	      delete that.callbacks[cbindex];
	    }
	  };
	
	  that.jumpToPacket = function () {
	    if (window.Android && window.Android.hasOwnProperty("showRecordAct")) {
	      return window.Android.showRecordAct();
	    }
	    _sendCMD({
	      cmd: CMD.showRecordact
	    });
	  };
	
	  that.startRedBagGame = function (url) {
	    if (window.Android && window.Android.hasOwnProperty('startRedBagGame')) {
	      window.Android.startRedBagGame(url);
	    }
	    _sendCMD({
	      cmd: CMD.startRedbagGame,
	      data: {
	        url: url
	      }
	    });
	  };
	  that.getDeviceModel = function (cb) {
	    if (window.Android && window.Android.hasOwnProperty('getDeviceModel')) {
	      var deveiceModel = window.Android.getDeviceModel();
	      var body = JSON.parse(deveiceModel);
	      if (cb) {
	        cb(body);
	      }
	    } else if (_osVer === OSType.iOS) {
	      if (cb) {
	        _callBackIndex++;
	        that.callbacks[_callBackIndex] = cb;
	      }
	      _sendCMD({
	        cmd: CMD.getDeviceModel,
	        data: {
	          callbackName: 'window.platform.appResponse',
	          callbackID: _callBackIndex.toString()
	        }
	      });
	    } else {
	      if (cb) {
	        cb('none');
	      }
	    }
	  };
	
	  that.safeRequest = function (url, body, cb) {
	    var bodyString = JSON.stringify(body);
	    _callBackIndex++;
	    if (cb) {
	      _callBackIndex++;
	      that.callbacks[_callBackIndex] = cb;
	    }
	    if (_osVer === OSType.Android) {
	      if (window.Android && window.Android.hasOwnProperty('safeRequest')) {
	        window.Android.safeRequest(url, bodyString, 'window.platform.safeResponse', _callBackIndex.toString());
	      }
	    } else if (_osVer === OSType.iOS) {
	      _sendCMD({
	        cmd: CMD.safeRequest,
	        data: {
	          url: url,
	          body: bodyString,
	          callbackName: 'window.platform.safeResponse',
	          callbackID: _callBackIndex
	        }
	      });
	    }
	  };
	  that.safeResponse = function (callbackID, repString) {
	    console.log('callbackID' + callbackID, 'respString' + repString);
	    var body = JSON.parse(repString);
	    if (that.callbacks[_callBackIndex]) {
	      that.callbacks[_callBackIndex].call(null, body);
	      delete that.callbacks[_callBackIndex];
	    }
	  };
	
	  return that;
	};
	
	var platform = PlatformHelper();
	
	window.platform = platform;
	
	exports.default = platform;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _platformHelper = __webpack_require__(45);
	
	var _platformHelper2 = _interopRequireDefault(_platformHelper);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2016/11/3.
	 */
	var AudioControl = function AudioControl() {
	  var that = {};
	
	  var _audioList = {};
	  var playAudio = function playAudio(id, cb) {
	    if (that.hasOwnProperty(id)) {
	      that[id].play();
	      that[id].addEventListener('ended', function () {
	        if (cb) {
	          cb();
	        }
	      });
	    } else {
	      var audio = document.getElementById(id);
	      that[id] = audio;
	      audio.play();
	      audio.addEventListener('ended', function () {
	        if (cb) {
	          cb();
	        }
	      });
	    }
	  };
	
	  that.play = function (key, cb) {
	    if (_platformHelper2.default.osVer === 1) {
	      _platformHelper2.default.playSound(_gameDefines2.default.musicIosConfig[key]);
	    }
	    if (_platformHelper2.default.osVer === 2) {
	      _platformHelper2.default.playSound(_gameDefines2.default.musicConfig[key]);
	    }
	  };
	
	  that.playBg = function (key, cb) {
	    if (_platformHelper2.default.osVer === 1) {
	      _platformHelper2.default.playBg(_gameDefines2.default.musicIosConfig[key]);
	    }
	    if (_platformHelper2.default.osVer === 2) {
	      _platformHelper2.default.playBg(_gameDefines2.default.musicConfig[key]);
	    }
	  };
	  that.playLoop = function (id) {
	    var pcb = function pcb() {
	      playAudio(id, function () {
	        if (that[id].loop === false) {
	          return;
	        } else {
	          pcb();
	        }
	      });
	    };
	    pcb();
	  };
	  that.stop = function (id) {
	    that[id].loop = false;
	  };
	  // that.update = ()=>{
	  //   for (let i = 0 ; i < _audioList.length ; i ++){
	  //
	  //   }
	  // }
	  // that.createAudio = (name,id)=>{
	  //
	  //   if (that.hasOwnProperty(name)){
	  //     console.log('have this audio' + name);
	  //   }else {
	  //     that[name] = document.getElementById(id);
	  //   }
	  // }
	  // that.playAduio = (name)=>{
	  //   if (that.hasOwnProperty(name)){
	  //     that[name].play();
	  //   }else {
	  //     console.error('not found this audio' + name);
	  //   }
	  // }
	  // that.pauseAudio = (name)=>{
	  //   if (that.hasOwnProperty(name)){
	  //     that[name].pause();
	  //   }else {
	  //     console.error('not found this audio' + name);
	  //   }
	  // }
	  // that.resumeAudio = (name)=>{
	  //   if (that.hasOwnProperty(name)){
	  //     that[name].play();
	  //   }else {
	  //     console.error('not found this audio' + name);
	  //   }
	  // }
	  // that.stopAudio = (name)=>{
	  //   that.pauseAudio(name);
	  //   that[name].currentTime = 0;
	  // }
	  return that;
	};
	exports.default = AudioControl;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2016/10/28.
	 */
	var BombCell = function BombCell(spec) {
	  var that = new PIXI.Container();
	
	  ////初始化Bomb动画
	  // console.log('spec.image=' + JSON.stringify(spec.animate));
	  that.position = {
	    x: spec.position.x,
	    y: spec.position.y
	  };
	  _imports.ResourceManager.loadList([spec.animate, _resources2.default.ani_spark], function () {
	    var animate = _imports.AnimationFactor.createAnimation({
	      type: 'frame',
	      anchor: { x: 0.5, y: 0.5 },
	      animates: {
	        idle: {
	          pre: 'bomb',
	          start: 1,
	          end: 4,
	          speed: 60 / 60 * 0.25
	        }
	      }
	
	    });
	    that.addChild(animate.node);
	    animate.playLoop('idle');
	
	    that.sparkanimate = _imports.AnimationFactor.createAnimation({
	      type: 'frame',
	      anchor: { x: 0.5, y: 0.5 },
	      animates: {
	        idle: {
	          pre: 'spark',
	          start: 1,
	          end: 12,
	          speed: 60 / 60 * 0.25
	        }
	      }
	    });
	    that.addChild(that.sparkanimate.node);
	    that.sparkanimate.playLoop('idle');
	
	    // that.bombSpark = BombSpark({
	    //   animate: resources.ani_spark,
	    //   scale: 1,
	    //   position: Vec2(0,0)
	    // });
	    // that.bombSpark.add2World(that);
	  });
	
	  that.add2World = function (parent) {
	    that.parent = parent;
	    that.parent.addChild(that);
	  };
	
	  that.removeSelf = function () {
	    // that.bombSpark.removeSelf();
	    that.parent.removeChild(that);
	  };
	
	  that.cut = function () {};
	  that.update = function (dt) {
	    if (that.parent) {
	      if (that.sparkanimate) {
	        that.sparkanimate.node.rotation = that.parent.rotation * -1;
	      }
	      // let purPos = Vec2(0,1).rotateByAngle(Vec2(0,0),that.parent.rotation).multValue(30).add(Vec2(10,10));
	      // _bombSpark.position = purPos;
	    }
	  };
	
	  return that;
	};
	exports.default = BombCell;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _imports = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CutEffect = function CutEffect(spec) {
	  var that = new PIXI.Container();
	  that.add2World = function (parent) {
	    parent.addChild(that);
	  };
	
	  var addEffect = function addEffect(data) {
	    var image = data.image;
	    var pos = data.position;
	    var direction = data.direction;
	    var effect = new PIXI.Sprite.fromImage(_resources2.default[function () {
	      var temp = image + '_e';
	      var i = Math.round(Math.random() * 2);
	      if (i === 0) {} else {
	        temp += '_' + i;
	      };
	      console.log('cut effect temp=' + temp);
	      return temp;
	    }()]);
	    effect.anchor = { x: 0.5, y: 0.5 };
	    that.addChild(effect);
	    effect.position = {
	      x: pos.x + Math.random() * 160 - 80,
	      y: pos.y + Math.random() * 160 - 80
	    };
	
	    effect.rotation = Math.random() * 360 * Math.PI / 180;
	    // effect.rotation = Vec2(0,1).getAngle(direction) + Math.PI/180 * 90;
	
	    var tween1 = new TWEEN.Tween({ alpha: 1 }).to({ alpha: 0 }, 1200).onUpdate(function () {
	      effect.alpha = this.alpha;
	    }).onComplete(function () {
	      that.removeChild(effect);
	    });
	
	    var tween = new TWEEN.Tween({ scale: 0.6 }).to({ scale: Math.random() * 0.1 + 1 }, 250).onUpdate(function () {
	      effect.scale.set(this.scale);
	    }).onComplete(function () {
	      tween1.start();
	    });
	    tween.start();
	  };
	
	  _gameGlobal2.default.events.on('cuteffect', function (data) {
	    if (data.image === 'bomb') {
	      return;
	    }
	    //for (var i = 0 ; i < Math.round(Math.random() * 1) + 1 ; i ++){
	    addEffect(data);
	    //}
	  });
	
	  return that;
	}; /**
	    * Created by chuhaoyuan on 2016/10/24.
	    */
	exports.default = CutEffect;

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by chuhaoyuan on 2016/11/7.
	 */
	var ShakeNode = function ShakeNode() {
	  var that = {};
	  //let state = false;
	
	  var _isAction = false;
	  var action = function action(node, index) {
	    if (index <= 0) {
	      _isAction = false;
	      return;
	    } else {
	      var tween = new TWEEN.Tween(node.position).to({ x: index % 2 ? -1 : 1 * 30, y: 0 }, 40).onUpdate(function () {
	        node.position.x = this.x;
	        node.position.y = this.y;
	      }).onComplete(function () {
	        index--;
	        action(node, index);
	      }).easing(TWEEN.Easing.Cubic.In);
	      tween.start();
	    }
	  };
	
	  that.shakeNode = function (node) {
	    if (_isAction) {
	      return;
	    }
	    _isAction = true;
	    action(node, 8);
	    //  let Rate = 5;
	    //
	    //  if(state === true) {
	    //    state = false;
	    //  }else if (state === false){
	    //    state = true;
	    //
	    //    let changeRate = ()=> {
	    //      if(state === false) {
	    //      }else if (state === true){
	    //        node.x += Rate;
	    //        node.y -= Rate;
	    //        }
	    //      Rate *= -1;
	    //
	    //      setTimeout(()=> {
	    //      changeRate();
	    //      }, Math.round(Math.random() * 20) + 20);
	    //    };
	    //    changeRate();
	    //    state = false;
	    //  }
	    //};
	    //that.stopShake = ()=>{
	    //  state = false;
	    //};
	
	    // let tween1_x = new TWEEN.Tween({x:20})
	    //   .to({x:0},100)
	    //   .onUpdate(function(){
	    //     node.x = this.x
	    //   })
	    //   .onComplete(()=>{
	    //   })
	    // let tween2_x = new TWEEN.Tween({x: 0})
	    //   .to({x: 20},100)
	    //   .onUpdate(function(){
	    //     node.x = this.x
	    //   })
	    //   .onComplete(()=>{
	    //     tween1_x.start();
	    //   })
	    // tween2_x.start();
	    //
	    //
	    // let tween1_y = new TWEEN.Tween({y:20})
	    //   .to({y:0},100)
	    //   .onUpdate(function(){
	    //     node.y = this.y
	    //   })
	    //   .onComplete(()=>{
	    //   })
	    // let tween2_y = new TWEEN.Tween({y: 0})
	    //   .to({y: 20},50)
	    //   .onUpdate(function(){
	    //     node.y = this.y
	    //   })
	    //   .onComplete(()=>{
	    //     tween1_y.start();
	    //   })
	    // tween2_y.start();
	
	  };
	  return that;
	};
	var shakeNode = ShakeNode();
	exports.default = shakeNode;

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by chuhaoyuan on 2016/11/10.
	 */
	var TimeController = function TimeController() {
	  var that = {};
	  var register = {};
	  that.setTimeout = function (type, cb, time) {
	    // if (register.hasOwnProperty(type)){
	    //   console.error('time controller have' + type);
	    //   return
	    // }
	    register[type] = setTimeout(function () {
	      delete register[type];
	      if (cb) {
	        cb();
	      }
	    }, time);
	  };
	  that.unsetTimeout = function (type) {
	    if (register.hasOwnProperty(type)) {
	      clearTimeout(register[type]);
	      delete register[type];
	    }
	  };
	  that.stopAllTimeCB = function () {
	    for (var i in register) {
	      clearTimeout(register[i]);
	    }
	    register = {};
	  };
	  return that;
	};
	var timeController = TimeController();
	exports.default = timeController;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _oneBlade = __webpack_require__(52);
	
	var _oneBlade2 = _interopRequireDefault(_oneBlade);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BladeState = {
	  Invalide: -1,
	  Waiting: 0,
	  Running: 1,
	  Over: 2
	}; /**
	    * Created by wizard on 2016/10/21.
	    */
	
	var BladeRender = function BladeRender(spec) {
	  var that = {};
	
	  var _onBegin = function _onBegin(event) {
	    spec.touchBegan();
	  };
	  var _multPoints = {};
	  var _state = BladeState.Invalide;
	
	  var _onMove = function _onMove(event) {
	    if (_state != BladeState.Running) {
	      return;
	    }
	
	    spec.touchMove(event.data);
	
	    var pos = {
	      x: event.data.getLocalPosition(spec.node).x,
	      y: event.data.getLocalPosition(spec.node).y
	    };
	
	    if (_multPoints.hasOwnProperty(event.data.identifier)) {
	      _multPoints[event.data.identifier]._addTailPoint(pos);
	    } else {
	      var oneBlade = (0, _oneBlade2.default)(spec);
	      oneBlade.init();
	      _multPoints[event.data.identifier] = oneBlade;
	    }
	  };
	
	  var _onEnd = function _onEnd(event) {
	    spec.touchEnd();
	    if (event.data.identifier === 0 || event.data.identifier == undefined) {
	      return;
	    }
	
	    if (_multPoints[event.data.identifier]) {
	      _multPoints[event.data.identifier].removeSelf();
	    }
	  };
	  that.init = function () {};
	
	  that.update = function (dt) {
	    for (var i in _multPoints) {
	      _multPoints[i].update(dt);
	    }
	  };
	
	  (function () {
	    spec.node.on('touchstart', _onBegin).on('mousedown', _onBegin);
	
	    spec.node.on('mouseup', _onEnd).on('touchend', _onEnd).on('mouseupoutside', _onEnd).on('touchendoutside', _onEnd);
	
	    spec.node.on('touchmove', _onMove).on('mousemove', _onMove);
	  })();
	
	  var _setState = function _setState(state) {
	    if (state === _state) {
	      return;
	    }
	    switch (state) {
	      case BladeState.Waiting:
	        break;
	      case BladeState.Running:
	        break;
	      case BladeState.Over:
	        break;
	      default:
	        break;
	    }
	    _state = state;
	  };
	
	  _setState(BladeState.Waiting);
	  that.toStartTouchMove = function () {
	    _setState(BladeState.Running);
	  };
	  that.toEndTouchMove = function () {
	    _setState(BladeState.Over);
	  };
	  return that;
	};
	exports.default = BladeRender;

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by yu on 16/10/26.
	 */
	
	var kKeepHoldTime = 0.5;
	var kCloserSpeed = 300;
	
	var VectorLengthSq = function VectorLengthSq(vector) {
	  var lengthSq = vector.x * vector.x + vector.y * vector.y;
	  return lengthSq;
	};
	
	var VectorNormalize = function VectorNormalize(vector) {
	  var length = Math.sqrt(VectorLengthSq(vector));
	  vector.x *= 1 / length;
	  vector.y *= 1 / length;
	};
	
	var OneBlade = function OneBlade(spec) {
	  var that = {};
	  var _tailList = [];
	  var _points = [];
	  var _rope = null;
	
	  var BladeState = {
	    StateMoving: 1,
	    StateHold: 2
	  };
	
	  var _state = BladeState.StateHold;
	  var _holdCD = 0;
	
	  var _setState = function _setState(new_state) {
	    if (_state === new_state) {
	      return;
	    }
	
	    switch (new_state) {
	      case BladeState.StateHold:
	        _holdCD = kKeepHoldTime;
	      default:
	        break;
	    }
	
	    _state = new_state;
	  };
	
	  that._addTailPoint = function (pos) {
	
	    if (_tailList.length > 0) {
	      var lastPos = _tailList[_tailList.length - 1];
	      var step = _tailList.length >= _points.length ? 5 : 1;
	      if (Math.abs(lastPos.x - pos.x) < step && Math.abs(lastPos.y - pos.y) < step) {
	        return;
	      }
	    }
	
	    if (_tailList.length >= 10) {
	      _tailList.splice(0, 1);
	    }
	
	    _tailList.push(pos);
	
	    _setState(BladeState.StateMoving);
	  };
	
	  that.init = function () {
	    for (var i = 0; i < 10; ++i) {
	      _points.push({
	        x: 0,
	        y: 0
	      });
	    }
	
	    _rope = new PIXI.mesh.Rope(PIXI.Texture.fromImage('assets/cutfruit/blade.png'), _points);
	    //_rope.blendMode = PIXI.BLEND_MODES.LIGHTEN;
	
	    spec.node.addChild(_rope);
	  };
	
	  that.removeSelf = function () {
	    spec.node.removeChild(_rope);
	  };
	
	  that.update = function (dt) {
	
	    switch (_state) {
	      case BladeState.StateMoving:
	        _shiftPoints();
	        _setState(BladeState.StateHold);
	        break;
	      case BladeState.StateHold:
	        var step = dt / 1000;
	        _holdCD -= step;
	        if (_holdCD <= 0) {
	          _tailList = [];
	          _rope.visible = false;
	          return;
	        }
	        for (var i = _points.length - 2; i > 0; --i) {
	          var lastPoint = _points[i + 1];
	          var dir = {
	            x: lastPoint.x - _points[i].x,
	            y: lastPoint.y - _points[i].y
	          };
	
	          if (VectorLengthSq(dir) <= 5) {
	            _rope.visible = false;
	            break;
	          }
	
	          VectorNormalize(dir);
	
	          _points[i].x += dir.x * step * kCloserSpeed;
	          _points[i].y += dir.y * step * kCloserSpeed;
	        }
	        break;
	      default:
	        break;
	    }
	  };
	
	  var _shiftPoints = function _shiftPoints() {
	
	    if (_tailList.length < _points.length) {
	      _rope.visible = false;
	      return;
	    }
	
	    //let cnt = _points.length / _tailList.length;
	    //let n= _points.length % _tailList.length;
	    //
	    //for(let i=0; i<_points.length; ++i) {
	    //  for(let j=0; j<cnt; ++j) {
	    //    _points[i + j].x = _tailList[i].x;
	    //    _points[i + j].y = _tailList[i].y;
	    //  }
	    //}
	
	    _rope.visible = true;
	    var point = _tailList[0];
	    for (var i = 0; i < _points.length; ++i) {
	      if (i >= _tailList.length) {
	        _points[i].x = point.x;
	        _points[i].y = point.y;
	      } else {
	        point = _tailList[i];
	        _points[i].x = point.x;
	        _points[i].y = point.y;
	      }
	    }
	  };
	
	  return that;
	};
	
	exports.default = OneBlade;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _particleFruitJson = __webpack_require__(54);
	
	var _particleFruitJson2 = _interopRequireDefault(_particleFruitJson);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2016/10/24.
	 */
	var ParticleLayer = function ParticleLayer() {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	  that.inheritOn('init', function () {
	
	    return true;
	  });
	  var _emitters = {};
	  var elapsed = Date.now();
	  that.inheritOn('update', function () {
	
	    var now = Date.now();
	    for (var i in _emitters) {
	      _emitters[i].update((now - elapsed) * 0.001);
	    }
	    elapsed = now;
	  });
	
	  _gameGlobal2.default.events.on('fruitemit', function (data) {
	    if (data.image === 'bomb') {
	      return;
	    }
	    if (_emitters.hasOwnProperty(data.image)) {
	      _emitters[data.image].updateOwnerPos(data.pos.x, data.pos.y);
	      _emitters[data.image].emit = true;
	    } else {
	      _emitters[data.image] = new PIXI.particles.Emitter(that.node, [PIXI.Texture.fromImage(_resources2.default[data.image + '_pe'])], _particleFruitJson2.default.fruit);
	      _emitters[data.image].updateOwnerPos(data.pos.x, data.pos.y);
	    }
	  });
	  var _isAction = false;
	  _gameGlobal2.default.events.on('addredbageffect', function (data) {
	    if (_isAction) {
	      return;
	    }
	    _isAction = true;
	    console.log('addredbageffect' + JSON.stringify(data));
	    if (_emitters.hasOwnProperty(data.image)) {} else {
	      _emitters[data.image] = new PIXI.particles.Emitter(that.node, [PIXI.Texture.fromImage(_resources2.default.icon_gift2), PIXI.Texture.fromImage(_resources2.default.star)], _particleFruitJson2.default.redbag);
	    }
	    _emitters[data.image].updateOwnerPos(data.position.x, data.position.y);
	    var action = new TWEEN.Tween({ x: data.position.x, y: data.position.y }).to({ x: _imports.Director.sharedDirector().screen.right - 10,
	      y: _imports.Director.sharedDirector().screen.top }, 1200).onUpdate(function () {
	      _emitters[data.image].updateOwnerPos(this.x, this.y);
	    }).onComplete(function () {
	      _isAction = false;
	      _emitters[data.image].updateOwnerPos(_imports.Director.sharedDirector().screen.right * 0.5, _imports.Director.sharedDirector().screen.bottom * 0.5);
	    });
	    action.start();
	    _emitters[data.image].emit = true;
	
	    _gameGlobal2.default.events.on('cutbomb', function () {
	      ////切中炸弹后 ，移除 红包效果的动作，与特效
	      action.stop();
	      _emitters[data.image].emit = false;
	      _isAction = false;
	      _emitters[data.image].updateOwnerPos(_imports.Director.sharedDirector().screen.right * 0.5, _imports.Director.sharedDirector().screen.bottom * 0.5);
	    });
	  });
	
	  _gameGlobal2.default.events.on('fruitwater', function (state) {
	    console.log('水果喷泉' + state);
	    if (_emitters.hasOwnProperty('fruitwater')) {} else {
	      _emitters['fruitwater'] = new PIXI.particles.Emitter(that.node, [PIXI.Texture.fromImage(_resources2.default.star2)], _particleFruitJson2.default.fruitWater);
	    }
	    _emitters['fruitwater'].updateOwnerPos(_imports.Director.sharedDirector().screen.right * 0.5, _imports.Director.sharedDirector().screen.bottom);
	
	    if (state === 'Crazy') {
	      _emitters['fruitwater'].emit = true;
	    }
	    if (state === 'Normal') {
	      _emitters['fruitwater'].emit = false;
	    }
	  });
	
	  _gameGlobal2.default.events.on('colorbar', function (layer) {
	    //if (_emitters.hasOwnProperty('colorbar')){
	    //}else {
	    _emitters['colorbar'] = new PIXI.particles.Emitter(layer.node, [PIXI.Texture.fromImage(_resources2.default.ribbon_1), PIXI.Texture.fromImage(_resources2.default.ribbon_25), PIXI.Texture.fromImage(_resources2.default.ribbon_3), PIXI.Texture.fromImage(_resources2.default.ribbon_4), PIXI.Texture.fromImage(_resources2.default.ribbon_5)], _particleFruitJson2.default.colorbar);
	    //}
	    _emitters['colorbar'].updateOwnerPos(_imports.Director.sharedDirector().screen.right * 0.5 - 50, _imports.Director.sharedDirector().screen.top + 10);
	    _emitters['colorbar'].emit = true;
	  });
	
	  var isAction = false;
	  _gameGlobal2.default.events.on('cutfruit', function (data) {
	    if (isAction) {
	      return;
	    }
	    isAction = true;
	    if (_emitters.hasOwnProperty('cutfruit')) {} else {
	      _emitters['cutfruit'] = new PIXI.particles.Emitter(that.node, [PIXI.Texture.fromImage(_resources2.default.grain)], _particleFruitJson2.default.cutfruit);
	    }
	    _emitters['cutfruit'].updateOwnerPos(data.position.x, data.position.y);
	    var action = new TWEEN.Tween({ x: data.position.x, y: data.position.y }).to({ x: _imports.Director.sharedDirector().screen.right - 50,
	      y: _imports.Director.sharedDirector().screen.bottom - 50 }, 1200).onUpdate(function () {
	      _emitters['cutfruit'].updateOwnerPos(this.x, this.y);
	    }).onComplete(function () {
	      isAction = false;
	      _emitters['cutfruit'].emit = false;
	    });
	    action.start();
	    _emitters['cutfruit'].emit = true;
	  });
	  _gameGlobal2.default.events.on('addEndScore', function (layer, cb) {
	
	    _emitters['addEndScore'] = new PIXI.particles.Emitter(layer.node, [PIXI.Texture.fromImage(_resources2.default.star2)], _particleFruitJson2.default.addEndScore);
	
	    _emitters['addEndScore'].updateOwnerPos(2 * 150 * -0.5 + _imports.Director.sharedDirector().screen.right * 0.5, _imports.Director.sharedDirector().screen.bottom * 0.5 + 180);
	    var action = new TWEEN.Tween({
	      x: 2 * 150 * -0.5 + _imports.Director.sharedDirector().screen.right * 0.5,
	      y: _imports.Director.sharedDirector().screen.bottom * 0.5 + 180
	    }).to({
	      x: _imports.Director.sharedDirector().screen.right * 0.5,
	      y: _imports.Director.sharedDirector().screen.bottom * 0.5 - 275 }, 1000).onUpdate(function () {
	      _emitters['addEndScore'].updateOwnerPos(this.x, this.y);
	    }).onComplete(function () {
	      if (cb) {
	        cb();
	      }
	      _emitters['addEndScore'].emit = false;
	    });
	    action.start();
	    _emitters['addEndScore'].emit = true;
	  });
	  _gameGlobal2.default.events.on('addEndScore1', function (layer, cb) {
	    //if (isAction){
	    //  return
	    //}
	    //isAction = true;
	    //if (_emitters.hasOwnProperty('addEndScore1')){
	    //}else {
	    _emitters['addEndScore1'] = new PIXI.particles.Emitter(layer.node, [PIXI.Texture.fromImage(_resources2.default.star2)], _particleFruitJson2.default.addEndScore);
	    //}
	    _emitters['addEndScore1'].updateOwnerPos(2 * 130 * -0.5 + 130 + _imports.Director.sharedDirector().screen.right * 0.5, _imports.Director.sharedDirector().screen.bottom * 0.5 + 180);
	    var action = new TWEEN.Tween({
	      x: 2 * 130 * -0.5 + 130 + _imports.Director.sharedDirector().screen.right * 0.5,
	      y: _imports.Director.sharedDirector().screen.bottom * 0.5 + 180
	    }).to({
	      x: _imports.Director.sharedDirector().screen.right * 0.5,
	      y: _imports.Director.sharedDirector().screen.bottom * 0.5 - 275 }, 1000).onUpdate(function () {
	      _emitters['addEndScore1'].updateOwnerPos(this.x, this.y);
	    }).onComplete(function () {
	      if (cb) {
	        cb();
	      }
	      _emitters['addEndScore1'].emit = false;
	    });
	    action.start();
	    _emitters['addEndScore1'].emit = true;
	  });
	  _gameGlobal2.default.events.on('addEndScore2', function (layer) {
	    //if (isAction){
	    //  return
	    //}
	    //isAction = true;
	    //if (_emitters.hasOwnProperty('addEndScore2')){
	    //}else {
	    _emitters['addEndScore2'] = new PIXI.particles.Emitter(layer.node, [PIXI.Texture.fromImage(_resources2.default.star2)], _particleFruitJson2.default.addEndScore);
	    //}
	    _emitters['addEndScore2'].updateOwnerPos(2 * 130 * -0.5 + 2 * 130 + _imports.Director.sharedDirector().screen.right * 0.5, _imports.Director.sharedDirector().screen.bottom * 0.5 + 180);
	    var action = new TWEEN.Tween({
	      x: 2 * 130 * -0.5 + 2 * 130 + _imports.Director.sharedDirector().screen.right * 0.5,
	      y: _imports.Director.sharedDirector().screen.bottom * 0.5 + 180
	    }).to({
	      x: _imports.Director.sharedDirector().screen.right * 0.5,
	      y: _imports.Director.sharedDirector().screen.bottom * 0.5 - 275 }, 1000).onUpdate(function () {
	      _emitters['addEndScore2'].updateOwnerPos(this.x, this.y);
	    }).onComplete(function () {
	      //isAction = false;
	      _emitters['addEndScore2'].emit = false;
	    });
	    action.start();
	    _emitters['addEndScore2'].emit = true;
	  });
	  return that;
	};
	exports.default = ParticleLayer;

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by chuhaoyuan on 2016/10/26.
	 */
	var ParticleJson = {
	  fruit: {
	    "alpha": {
	      "start": 0.99,
	      "end": 0.65
	    },
	    "scale": {
	      "start": 1,
	      "end": 0.01,
	      "minimumScaleMultiplier": 1
	    },
	    "color": {
	      "start": "#fff88f",
	      "end": "#fcd62a"
	    },
	    "speed": {
	      "start": 400,
	      "end": 100
	    },
	    "acceleration": {
	      "x": 0,
	      "y": 0
	    },
	    "startRotation": {
	      "min": 0,
	      "max": 0
	    },
	    "noRotation": false,
	    "rotationSpeed": {
	      "min": 900,
	      "max": 100
	    },
	    "lifetime": {
	      "min": 0.1,
	      "max": 0.8
	    },
	    "blendMode": "normal",
	    "frequency": 0.001,
	    "emitterLifetime": 0.1,
	    "maxParticles": 18,
	    "pos": {
	      "x": 0,
	      "y": 0
	    },
	    "addAtBack": false,
	    "spawnType": "burst",
	    "particlesPerWave": 1,
	    "particleSpacing": 0,
	    "angleStart": 0
	  },
	  redbag: {
	    "alpha": {
	      "start": 1,
	      "end": 0.52
	    },
	    "scale": {
	      "start": 1,
	      "end": 0.5,
	      "minimumScaleMultiplier": 0.5
	    },
	    "color": {
	      "start": "#fff9e3",
	      "end": "#ff5500"
	    },
	    "speed": {
	      "start": 178,
	      "end": 50,
	      "minimumSpeedMultiplier": 1
	    },
	    "acceleration": {
	      "x": 0,
	      "y": 0
	    },
	    "maxSpeed": 0,
	    "startRotation": {
	      "min": 0,
	      "max": 360
	    },
	    "noRotation": false,
	    "rotationSpeed": {
	      "min": 3,
	      "max": 1
	    },
	    "lifetime": {
	      "min": 0.3,
	      "max": 0.5
	    },
	    "blendMode": "add",
	    "frequency": 0.01,
	    "emitterLifetime": 1,
	    "maxParticles": 30,
	    "pos": {
	      "x": 0,
	      "y": 0
	    },
	    "addAtBack": false,
	    "spawnType": "circle",
	    "spawnCircle": {
	      "x": 0,
	      "y": 0,
	      "r": 0
	    }
	  },
	  fruitWater: {
	    "alpha": {
	      "start": 1,
	      "end": 0.84
	    },
	    "scale": {
	      "start": 2,
	      "end": 0.5,
	      "minimumScaleMultiplier": 0.05
	    },
	    "color": {
	      "start": "#ffffff",
	      "end": "#ffffff"
	    },
	    "speed": {
	      "start": 200,
	      "end": 1,
	      "minimumSpeedMultiplier": 7
	    },
	    "acceleration": {
	      "x": 0,
	      "y": 0
	    },
	    "maxSpeed": 0,
	    "startRotation": {
	      "min": 180,
	      "max": 360
	    },
	    "noRotation": false,
	    "rotationSpeed": {
	      "min": 0,
	      "max": 0
	    },
	    "lifetime": {
	      "min": 0.3,
	      "max": 0.5
	    },
	    "blendMode": "add",
	    "frequency": 0.001,
	    "emitterLifetime": -1,
	    "maxParticles": 30,
	    "pos": {
	      "x": 0,
	      "y": 0
	    },
	    "addAtBack": false,
	    "spawnType": "circle",
	    "spawnCircle": {
	      "x": 0,
	      "y": 0,
	      "r": 0
	    }
	  },
	  colorbar: {
	    "alpha": {
	      "start": 1,
	      "end": 0.16
	    },
	    "scale": {
	      "start": 1,
	      "end": 0.8,
	      "minimumScaleMultiplier": 0.5
	    },
	    "color": {
	      "start": "#ffffff",
	      "end": "#ffffff"
	    },
	    "speed": {
	      "start": 200,
	      "end": 300,
	      "minimumSpeedMultiplier": 1
	    },
	    "acceleration": {
	      "x": 0,
	      "y": 0
	    },
	    "maxSpeed": 0,
	    "startRotation": {
	      "min": 80,
	      "max": 150
	    },
	    "noRotation": false,
	    "rotationSpeed": {
	      "min": 0,
	      "max": 20
	    },
	    "lifetime": {
	      "min": 1.8,
	      "max": 2
	    },
	    "blendMode": "normal",
	    "extraData": {
	      "path": "sin(x/10)*20"
	    },
	    "frequency": 0.1,
	    "emitterLifetime": 2,
	    "maxParticles": 1000,
	    "pos": {
	      "x": 0,
	      "y": 0
	    },
	    "addAtBack": false,
	    "spawnType": "rect",
	    "spawnRect": {
	      "x": 0,
	      "y": 0,
	      "w": 200,
	      "h": 0
	    }
	  },
	  cutfruit: {
	    "alpha": {
	      "start": 1,
	      "end": 0
	    },
	    "scale": {
	      "start": 1,
	      "end": 1,
	      "minimumScaleMultiplier": 0.5
	    },
	    "color": {
	      "start": "#ffffff",
	      "end": "#ffffff"
	    },
	    "speed": {
	      "start": 1,
	      "end": 0,
	      "minimumSpeedMultiplier": 0.001
	    },
	    "acceleration": {
	      "x": 0,
	      "y": 100
	    },
	    "maxSpeed": 0,
	    "startRotation": {
	      "min": 0,
	      "max": 360
	    },
	    "noRotation": false,
	    "rotationSpeed": {
	      "min": 10,
	      "max": 0
	    },
	    "lifetime": {
	      "min": 0.3,
	      "max": 0.5
	    },
	    "blendMode": "screen",
	    "frequency": 0.01,
	    "emitterLifetime": -1,
	    "maxParticles": 30,
	    "pos": {
	      "x": 0,
	      "y": 0
	    },
	    "addAtBack": false,
	    "spawnType": "circle",
	    "spawnCircle": {
	      "x": 0,
	      "y": 0,
	      "r": 15
	    }
	  },
	  addEndScore: {
	    "alpha": {
	      "start": 1,
	      "end": 0.52
	    },
	    "scale": {
	      "start": 1,
	      "end": 0.5,
	      "minimumScaleMultiplier": 0.5
	    },
	    "color": {
	      "start": "#fff9e3",
	      "end": "#ff5500"
	    },
	    "speed": {
	      "start": 178,
	      "end": 50,
	      "minimumSpeedMultiplier": 1
	    },
	    "acceleration": {
	      "x": 0,
	      "y": 0
	    },
	    "maxSpeed": 0,
	    "startRotation": {
	      "min": 0,
	      "max": 360
	    },
	    "noRotation": false,
	    "rotationSpeed": {
	      "min": 3,
	      "max": 1
	    },
	    "lifetime": {
	      "min": 0.3,
	      "max": 0.5
	    },
	    "blendMode": "add",
	    "frequency": 0.01,
	    "emitterLifetime": -1,
	    "maxParticles": 20,
	    "pos": {
	      "x": 0,
	      "y": 0
	    },
	    "addAtBack": false,
	    "spawnType": "point"
	  }
	};
	
	exports.default = ParticleJson;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _uiRunlight = __webpack_require__(56);
	
	var _uiRunlight2 = _interopRequireDefault(_uiRunlight);
	
	var _platformHelper = __webpack_require__(45);
	
	var _platformHelper2 = _interopRequireDefault(_platformHelper);
	
	var _progressBar2 = __webpack_require__(57);
	
	var _progressBar3 = _interopRequireDefault(_progressBar2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wangwenyue on 16/10/24.
	 */
	var UILayer = function UILayer() {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	  that.inheritOn('init', function () {
	    return true;
	  });
	
	  // let _bar = new PIXI.Sprite.fromImage(resources.bar);
	  // _bar.position ={
	  //   x: 0,
	  //   y: 0
	  // };
	  // _bar.scale.set(0.96);
	  // that.node.addChild(_bar);
	
	  var _changeScore = 0;
	
	  var _fruitFount = _imports.UIControl.create({
	    id: 'fruitfont',
	    component: 'Layout',
	    children: [{
	      id: 'fruitwater',
	      component: 'Sprite',
	      image: _resources2.default.icon_fruitwater,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.13
	      }
	    }]
	  });
	  that.node.addChild(_fruitFount.node);
	  _fruitFount.fruitwater.visible = false;
	
	  var _mainNode = _imports.UIControl.create({
	    id: 'mainNode',
	    component: 'Layout',
	    children: [{
	      id: 'bg',
	      component: 'Sprite',
	      image: _resources2.default.bar,
	      anchor: {
	        x: 0.5,
	        y: 0.5
	      },
	      scale: {
	        x: 0.96,
	        y: 0.96
	      },
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.top + 45
	      }
	    }, {
	      id: 'fruitLabel',
	      component: 'BMLabel',
	      text: 0,
	      style: {
	        font: '20px default_number'
	      },
	      position: {
	        x: 130,
	        y: 50
	      }
	    }, {
	      id: 'goldLabel',
	      component: 'BMLabel',
	      text: '000000',
	      style: {
	        font: '24px gold_number',
	        letterSpacing: 10 ////字间距用美术来实现
	      },
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5 + 2,
	        y: _imports.Director.sharedDirector().screen.top + 27
	      }
	    }, {
	      id: 'redpackLabel',
	      component: 'BMLabel',
	      text: 0,
	      style: {
	        font: '20px default_number'
	      },
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.73,
	        y: 50
	      }
	    }, {
	      id: 'backButton',
	      component: 'Button',
	      image: _resources2.default.bt_back_normal,
	      position: {
	        x: _imports.Director.sharedDirector().screen.left + 30,
	        y: _imports.Director.sharedDirector().screen.bottom - 20
	      }
	    }, {
	      id: 'scoreLabel',
	      component: 'BMLabel',
	      style: {
	        font: 'rank_number_1'
	      },
	      anchor: {
	        x: 1,
	        y: 0.5
	      },
	      position: {
	        x: _imports.Director.sharedDirector().screen.right - 35,
	        y: _imports.Director.sharedDirector().screen.top + 110
	      },
	      text: '0'
	    }, {
	      id: 'score',
	      component: 'BMLabel',
	      style: {
	        font: '18px rank_number_1'
	      },
	      anchor: {
	        x: 1,
	        y: 0.5
	      },
	      position: {
	        x: _imports.Director.sharedDirector().screen.right - 15,
	        y: _imports.Director.sharedDirector().screen.top + 113
	      },
	      text: '分'
	    }]
	  }, function (button) {
	    if (button.id === 'backButton') {
	      _platformHelper2.default.endAll();
	    }
	  });
	  that.node.addChild(_mainNode.node);
	
	  _mainNode.backButton.visible = false;
	
	  var isOff = true;
	  var addGoldType = 1;
	  var changeType = function changeType() {
	    if (isOff === true) {
	      isOff = false;
	    } else if (isOff === false) {
	      isOff = true;
	      addGoldType *= -1;
	    }
	
	    setTimeout(function () {
	      changeType();
	    }, Math.round(Math.random() * 2000) + 2000);
	  };
	  changeType();
	
	  var _nowtime = 0;
	  var updateUI = function updateUI() {
	    _nowtime++;
	    if (_nowtime >= 3) {
	      _nowtime = 0;
	      if (_changeScore < _gameGlobal2.default.playerdata.totalScore) {
	        _changeScore++;
	      }
	      if (_changeScore > _gameGlobal2.default.playerdata.totalScore) {
	        _changeScore = _gameGlobal2.default.playerdata.totalScore;
	      }
	      _mainNode.scoreLabel.text = _changeScore;
	    }
	
	    if (isOff === false) {} else if (isOff === true) {
	      _gameGlobal2.default.playerdata.gold += addGoldType;
	      if (_gameGlobal2.default.playerdata.gold <= 0) {
	        _gameGlobal2.default.playerdata.gold = 0;
	      }
	    }
	    var length = 6 - _gameGlobal2.default.playerdata.gold.toString().length;
	    var str = '';
	    for (var i = 0; i < length; i++) {
	      str += '0';
	    }
	    str += _gameGlobal2.default.playerdata.gold;
	    _mainNode.goldLabel.text = str;
	
	    if (_gameGlobal2.default.playerdata.gold >= 999999) {
	      _gameGlobal2.default.playerdata.gold = 999999;
	      addGoldType = -1;
	    }
	    if (_gameGlobal2.default.playerdata.gold <= 0) {
	      _gameGlobal2.default.playerdata.gold = 0;
	      addGoldType = 1;
	    }
	
	    _mainNode.fruitLabel.text = _gameGlobal2.default.playerdata.fruitCount;
	    // _mainNode.fruitLabel.text = gameGlobal.playerdata.totalScore;
	    //_mainNode.scoreLabel.text = gameGlobal.playerdata.totalScore + '分';
	    _mainNode.redpackLabel.text = _gameGlobal2.default.playerdata.getRedbagCount;
	  };
	  //
	  // let changeGold = ()=>{
	  //   _mainNode.goldLabel.text = Math.round(Math.random()*3000 + gameGlobal.playerdata.totalGoldCount);
	  //   setTimeout(()=>{changeGold()},2000);
	  // }
	  // changeGold();
	
	  var _runLight = (0, _uiRunlight2.default)();
	  that.inheritOn('update', function (deltaTime) {
	    _runLight.update(deltaTime);
	    updateUI();
	  });
	  _runLight.add2World(_mainNode.node);
	
	  //
	  var _progressBar = (0, _progressBar3.default)({
	    type: 'circle',
	    bg_0: _resources2.default.jindutiao_0,
	    bg_1: _resources2.default.jindutiao_1,
	    bg_2: _resources2.default.jindutiao_2,
	    bg_3: _resources2.default.jindutiao_3,
	    bg_4: _resources2.default.jindutiao_4,
	    height: 72
	  });
	  _progressBar.position = {
	    x: _imports.Director.sharedDirector().screen.right - 60,
	    y: _imports.Director.sharedDirector().screen.bottom + 150
	  };
	  // _progressBar.setPrecent(0.5);
	  that.node.addChild(_progressBar);
	
	  _gameGlobal2.default.events.on('uilayerprogressbar', function (precent) {
	    _progressBar.setPrecent(precent);
	  });
	
	  // let _tag = 2;
	
	  var _isAction = false;
	  var _moveDown = function _moveDown() {
	    if (_isAction) {
	      return;
	    }
	    _isAction = true;
	    var _move = new TWEEN.Tween({ y: -15 }).to({ y: 104 }, 700).onUpdate(function () {
	      _fruitFount.fruitwater.y = this.y;
	    }).easing(TWEEN.Easing.Back.In).easing(TWEEN.Easing.Bounce.Out).onComplete(function () {
	      // _tag = 1;
	      _isAction = false;
	    });
	    _move.start();
	  };
	  var _moveUp = function _moveUp(cb) {
	    if (_isAction) {
	      if (cb) {
	        cb();
	      }
	      return;
	    }
	    _isAction = true;
	    var _move = new TWEEN.Tween({ y: 104 }).to({ y: -100 }, 700).onUpdate(function () {
	      _fruitFount.fruitwater.y = this.y;
	    }).easing(TWEEN.Easing.Back.In).onComplete(function () {
	      // _tag = 2;
	      _isAction = false;
	      if (cb) {
	        cb();
	      }
	    });
	    _move.start();
	  };
	
	  ////加一个 进度条
	
	  _gameGlobal2.default.events.on('uilayer', function (state) {
	    console.log('uilayer state' + state);
	    if (state === 'Crazy') {
	      _fruitFount.fruitwater.visible = true;
	      _moveDown();
	      // if (_tag === 2){
	      //   _moveDown();
	      // }
	    }
	    if (state === 'Normal') {
	      _moveUp(function () {
	        _fruitFount.fruitwater.visible = false;
	      });
	      // if(_tag === 1){
	      //   _moveUp();
	      // }
	      // setTimeout(()=>{
	      //   _fruitFount.fruitwater.visible = false;
	      // },1000);
	    }
	  });
	
	  var moveUpDownButton = function moveUpDownButton(node, posY, time) {
	    var y = node.position.y;
	    var action = new TWEEN.Tween({ y: y }).to({ y: y + posY }, time).onUpdate(function () {
	      node.position.y = this.y;
	    });
	    action.start();
	  };
	  _gameGlobal2.default.events.on('gamestate', function (state) {
	    switch (state) {
	      case 'start':
	        // moveUpDownButton(_mainNode.backButton.node,-25,100)
	        // moveUpDownButton(_mainNode.backButton.node,-50,100)
	        runAction(_mainNode.node, 0, TWEEN.Easing.Cubic.In, function () {
	          _mainNode.backButton.node.visible = true;
	        });
	        // runAction(_progressBar,0,)
	
	
	        runAction(_progressBar, _imports.Director.sharedDirector().screen.bottom - 60, TWEEN.Easing.Cubic.Out);
	
	        break;
	      case 'over':
	        // moveUpDownButton(_mainNode.backButton.node,50,100)
	        _mainNode.backButton.node.visible = false;
	        runAction(_mainNode.node, -180, TWEEN.Easing.Cubic.Out, function () {
	          //_mainNode.scoreLabel.text = '0分';
	        });
	        runAction(_progressBar, _imports.Director.sharedDirector().screen.bottom + 150, TWEEN.Easing.Cubic.Out);
	        break;
	      default:
	        break;
	    }
	  });
	
	  var runAction = function runAction(node, posY, effect, cb) {
	    var oldY = node.position.y;
	    var action = new TWEEN.Tween({ y: oldY }).to({ y: posY }, 200).onUpdate(function () {
	      node.position.y = this.y;
	    }).onComplete(function () {
	      if (cb) {
	        cb();
	      }
	    }).easing(effect);
	    action.start();
	  };
	  _gameGlobal2.default.events.on('gamestartagain', function () {
	    runAction(_mainNode.node, 0, TWEEN.Easing.Cubic.In, function () {
	      _mainNode.backButton.node.visible = false;
	    });
	  });
	  runAction(_mainNode.node, 0, TWEEN.Easing.Cubic.In, function () {
	    _mainNode.backButton.node.visible = false;
	  });
	
	  return that;
	};
	exports.default = UILayer;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RunLight = function RunLight() {
	  var that = new PIXI.Container();
	  that.add2World = function (parent) {
	    that.parent = parent;
	    that.parent.addChild(that);
	  };
	
	  var _runLightSpeed = 8000;
	  var _nowRunLightSpeed = _runLightSpeed;
	  var _lights = [];
	  for (var i = 0; i < 4; i++) {
	
	    var light = new PIXI.Sprite.fromImage(_resources2.default['runlight_' + i]);
	    that.addChild(light);
	
	    light.anchor = {
	      x: 0.5,
	      y: 0
	    };
	    light.position = {
	      x: _imports.Director.sharedDirector().screen.right * 0.5,
	      y: _imports.Director.sharedDirector().screen.top
	    };
	    _lights.push(light);
	  }
	
	  var runLightState = function runLightState(state) {
	    switch (state) {
	      case 'Normal':
	        _runLightSpeed = 8000;
	
	        break;
	      case 'Crazy':
	        _runLightSpeed = 2000;
	
	        break;
	      default:
	        break;
	    }
	  };
	  // let lightOff = (bool)=>{
	  //   if (bool){
	  //     _lights[1].alpha = 0;
	  //   }else {
	  //     _lights[1].alpha = 1;
	  //   }
	  // }
	
	  var lightOn = function lightOn(index) {
	    for (var _i = 0; _i < _lights.length; _i++) {
	      _lights[_i].alpha = 0;
	    }
	    _lights[index].alpha = 1;
	  };
	  var _timeCount = 0;
	  var _runLightNum = 0;
	  // let _isLight = true;
	  that.update = function (deltaTime) {
	
	    var secondTime = deltaTime / 1000;
	    _timeCount += secondTime;
	
	    if (_nowRunLightSpeed < _runLightSpeed) {
	      _nowRunLightSpeed += 60;
	    } else {
	      _nowRunLightSpeed -= 60;
	    }
	
	    if (_timeCount > _nowRunLightSpeed * secondTime) {
	      _timeCount = 0;
	      lightOn(_runLightNum);
	
	      if (_runLightNum >= _lights.length - 1) {
	        _runLightNum = 0;
	      } else {
	        _runLightNum++;
	      }
	    }
	  };
	
	  _gameGlobal2.default.events.on('runlight', function (state) {
	    runLightState(state);
	  });
	
	  return that;
	}; /**
	    * Created by chuhaoyuan on 2016/10/26.
	    */
	exports.default = RunLight;

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by chuhaoyuan on 2016/11/16.
	 */
	var ProgressBar = function ProgressBar(spec) {
	  var that = new PIXI.Container();
	
	  if (spec.type === 'circle') {
	    (function () {
	      that.bg_3 = PIXI.Sprite.fromImage(spec.bg_3);
	      that.addChild(that.bg_3);
	      that.bg_3.anchor.set(0.5);
	      that.bg_3.alpha = 0;
	      var mask = new PIXI.Container();
	      that.addChild(mask);
	      var draw = new PIXI.Graphics();
	      draw.beginFill(0x000000, 1);
	      draw.drawCircle(0, 0, spec.height * 0.5);
	      draw.endFill();
	      mask.addChild(draw);
	      mask.mask = draw;
	
	      that.bg_0 = PIXI.Sprite.fromImage(spec.bg_0);
	      that.bg_0.anchor.set(0.5);
	      mask.addChild(that.bg_0);
	      var bg_1 = PIXI.Sprite.fromImage(spec.bg_1);
	      bg_1.anchor.set(0.5);
	      that.addChild(bg_1);
	      that.bg_4 = PIXI.Sprite.fromImage(spec.bg_4);
	      that.addChild(that.bg_4);
	      that.bg_4.anchor.set(0.5);
	      that.bg_4.alpha = 0;
	
	      var bg_2 = PIXI.Sprite.fromImage(spec.bg_2);
	      that.addChild(bg_2);
	      bg_2.anchor.set(0.5);
	
	      var scaleAction = function scaleAction(node) {
	        var action = new TWEEN.Tween({ scale: 1 }).to({ scale: 1.2 }, 400).onUpdate(function () {
	          node.scale = {
	            x: this.scale,
	            y: this.scale
	          };
	        }).onComplete(function () {
	          action1.start();
	        });
	        action.start();
	        var action1 = new TWEEN.Tween({ scale: 1.2 }).to({ scale: 1 }, 400).onUpdate(function () {
	          node.scale = {
	            x: this.scale,
	            y: this.scale
	          };
	        }).onComplete(function () {
	          scaleAction(node);
	        });
	      };
	      scaleAction(that.bg_3);
	
	      var moveX = function moveX() {
	        var move = new TWEEN.Tween({ x: 32 }).to({ x: -32 }, 4000).onUpdate(function () {
	          that.bg_0.position.x = this.x;
	        }).onComplete(function () {
	          move1.start();
	        });
	        move.start();
	        var move1 = new TWEEN.Tween({ x: -32 }).to({ x: 32 }, 4000).onUpdate(function () {
	          that.bg_0.position.x = this.x;
	        }).onComplete(function () {
	          moveX();
	        });
	      };
	      moveX();
	    })();
	  } else {
	    var bgUrl = undefined;
	    var imageUrl = undefined;
	    if (spec.bg) {
	      bgUrl = spec.bg;
	    }
	    if (spec.image) {
	      imageUrl = spec.image;
	    }
	    if (spec.sp) {
	      imageUrl = spec.sp;
	    }
	    var _bg = PIXI.Sprite.fromImage(bgUrl);
	    _bg.anchor = {
	      x: 0.5,
	      y: 0.5
	    };
	    that.addChild(_bg);
	    var _sp = PIXI.Sprite.fromImage(imageUrl);
	    _sp.anchor = {
	      x: 0.5,
	      y: 0.5
	    };
	    var _mask = new PIXI.Container();
	    _bg.addChild(_mask);
	    _mask.addChild(_sp);
	    var _graphics = new PIXI.Graphics();
	    _mask.addChild(_graphics);
	    _graphics.beginFill(0xffffff, 1);
	    _graphics.drawRect(spec.width * -0.5, spec.height * -0.5, spec.width, spec.height);
	    _mask.mask = _graphics;
	  }
	
	  that.setPrecent = function (precent) {
	    // _graphics.clear();
	    // _graphics.drawRect( spec.width * -0.5, spec.height * 0.5 - spec.height * prectent, spec.width , 300 );
	    if (spec.type === 'circle') {
	      that.bg_0.position.y = spec.height - spec.height * precent;
	      if (that.bg_0.position.y <= 0) {
	        that.bg_0.position.y = 0;
	        that.bg_3.alpha = 1;
	        that.bg_4.alpha = 1;
	      } else {
	        that.bg_3.alpha = 0;
	        that.bg_4.alpha = 0;
	      }
	    }
	  };
	
	  return that;
	};
	exports.default = ProgressBar;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2016/10/28.
	 */
	var FlashAnimate = function FlashAnimate(spec) {
	  var that = _imports.AnimationFactor.createAnimation({
	    type: 'frame',
	    anchor: { x: 0.5, y: 0.5 },
	    animates: {
	      idle: {
	        pre: 'packet_break',
	        start: 0,
	        end: 12,
	        speed: 60 / 60 * 0.2
	      }
	    }
	  });
	  that.node.position = {
	    x: spec.position.x,
	    y: spec.position.y
	  };
	  that.node.scale.set(1.2);
	  that.node.rotation = spec.rotation;
	  return that;
	};
	var FlashEffect = function FlashEffect() {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	  _imports.ResourceManager.load(_resources2.default.ani_packet_break, function () {});
	
	  var createFlash = function createFlash(data) {
	    var flash = FlashAnimate({
	      animate: 'packet_break',
	      position: { x: data.position.x, y: data.position.y },
	      rotation: data.node.rotation * 2 / Math.PI
	    });
	    var white = new PIXI.Graphics();
	    white.beginFill(0xffffff, 1);
	    white.lineStyle(4, 0xffffff, 1);
	    var size = { width: _imports.Director.sharedDirector().screen.right, height: _imports.Director.sharedDirector().screen.bottom };
	    var position = { x: _imports.Director.sharedDirector().screen.right * 0.5, y: _imports.Director.sharedDirector().screen.bottom * 0.5 };
	    white.drawRect(position.x - size.width * 0.6, position.y - size.height * 0.6, size.width * 1.2, size.height * 1.2);
	    white.alpha = 0;
	    var tween1 = new TWEEN.Tween({ alpha: 1 }).to({ alpha: 0 }, 400).onUpdate(function () {
	      white.alpha = this.alpha;
	    });
	    var tween = new TWEEN.Tween({ alpha: 0 }).to({ alpha: 1 }, 350).onUpdate(function () {
	      white.alpha = this.alpha;
	    }).onComplete(function () {
	      _gameGlobal2.default.events.fire('flashover');
	      setTimeout(function () {
	        tween1.start();
	      }, 450);
	    });
	    var resetPack = _imports.UIControl.create({
	      id: 'resetPackNode',
	      component: 'Layout',
	      children: [{
	        id: 'resetPack',
	        component: 'Sprite',
	        position: { x: data.position.x, y: data.position.y - 100 },
	        image: _resources2.default.resetPack
	      }]
	    });
	    setTimeout(function () {
	      tween.start();
	    }, 100);
	    //tween.start();
	    that.node.addChild(white);
	    if (_gameGlobal2.default.playerdata.getRedbagCount === 0) {} else {
	      that.node.addChild(resetPack.node);
	      that.node.addChild(flash.node);
	      _gameGlobal2.default.audioControl.play('redbomb');
	    }
	    flash.playOnce('idle', function () {
	      if (resetPack.node.parent === that.node) {
	        that.node.removeChild(resetPack.node);
	        that.node.removeChild(flash.node);
	      }
	    });
	
	    return flash;
	  };
	
	  _gameGlobal2.default.events.on('flasheffect', function (data) {
	    createFlash(data);
	  });
	  return that;
	};
	exports.default = FlashEffect;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Top = -100; /**
	                 * Created by chuhaoyuan on 2016/10/31.
	                 */
	
	
	var Control = function Control(spec) {
	  var that = {};
	  that.node = new PIXI.Container();
	
	  var _font = '48px gift_number';
	
	  if (spec.font) {
	    _font = '44px ' + spec.font;
	  }
	
	  var _mainNode = _imports.UIControl.create({
	    id: 'mainNode',
	    component: 'Layout',
	    children: [{
	      id: 'addredpack',
	      component: 'BMLabel',
	      text: spec.text,
	      style: {
	        font: _font
	      },
	      position: spec.position
	    }]
	  });
	  that.node.addChild(_mainNode.node);
	
	  // _mainNode.hitnum.text = spec + '连击';
	
	  //that.scaleChange = (object)=>{
	  //  let _text = new TWEEN.Tween({x: object.scale.x, y: object.scale.y})
	  //    .to(
	  //      {x: 2, y: 2},500)
	  //    .onUpdate(function(){
	  //      object.scale.x = this.x;
	  //      object.scale.y = this.y;
	  //    })
	  //  _text.start();
	  //};
	  //that.scaleChange(_mainNode.addredpack);
	  //that.scaleChange(_mainNode.hitnum);
	
	
	  that.moveText = function (spec, cb) {
	    // let _text = new TWEEN.Tween({y: spec.position.y})
	    //   .to({y: Top},3000)
	    //
	    //   .onUpdate(function(){
	    //     spec.position.y = this.y;
	    //     _mainNode.node.alpha -= 0.0015;
	    //   })
	    //   .onComplete(function(){
	    //     if (cb){
	    //       cb();
	    //     }
	    //     // that.node.parent.removeChild(that.node);
	    //   })
	    // _text.start();
	
	
	    var a1 = new TWEEN.Tween({ scale: 0.6 }).to({ scale: 1 }, 200).onUpdate(function () {
	      _mainNode.addredpack.node.scale = {
	        x: this.scale,
	        y: this.scale
	      };
	    }).onComplete(function () {
	      setTimeout(function () {
	        a2.start();
	        a3.start();
	      }, 300);
	    }).easing(TWEEN.Easing.Cubic.In);
	    a1.start();
	    var a2 = new TWEEN.Tween({ y: spec.position.y }).to({ y: spec.position.y - 20 }, 130).onUpdate(function () {
	      spec.position.y = this.y;
	    }).onComplete(function () {
	      if (cb) {
	        cb();
	      }
	    }).easing(TWEEN.Easing.Cubic.In);
	
	    var a3 = new TWEEN.Tween({ alpha: 1 }).to({ alpha: 0 }, 130).onUpdate(function () {
	      spec.alpha = this.alpha;
	    }).onComplete(function () {
	      if (cb) {
	        cb();
	      }
	    });
	  };
	
	  return that;
	};
	var ShowLayer = function ShowLayer() {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	  that.inheritOn('init', function () {
	    console.log('init ui show layer');
	    return true;
	  });
	
	  var uiControl = function uiControl(data) {
	    var _control = Control(data);
	    //setTimeout(_control.moveText,800);
	    _control.moveText(data, function () {
	      that.node.removeChild(_control.node);
	    });
	    that.node.addChild(_control.node);
	  };
	
	  var leftOrright = 'left';
	  _gameGlobal2.default.events.on('addShow', function (data) {
	    if (leftOrright === 'left') {
	      leftOrright = 'right';
	    } else {
	      leftOrright = 'left';
	    }
	    switch (leftOrright) {
	      case 'right':
	
	        data.position.x -= 20;
	        break;
	      case 'left':
	        data.position.y += 40;
	        break;
	      default:
	
	        break;
	    }
	
	    console.log('add show =' + JSON.stringify(data));
	    uiControl(data);
	  });
	  return that;
	};
	exports.default = ShowLayer;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	var _headNode = __webpack_require__(61);
	
	var _headNode2 = _interopRequireDefault(_headNode);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _platformHelper = __webpack_require__(45);
	
	var _platformHelper2 = _interopRequireDefault(_platformHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2016/11/9.
	 */
	var isAction = false;
	var moveAction = function moveAction(endPos, time, node, cb) {
	  if (isAction) {
	    return;
	  }
	  isAction = true;
	  console.log('moveAction');
	  var action = new TWEEN.Tween({ x: node.position.x }).to({ x: endPos }, time).onUpdate(function () {
	    node.position.x = this.x;
	  }).onComplete(function () {
	    isAction = false;
	    if (cb) {
	      cb();
	    }
	  });
	  action.start();
	};
	
	var RankList = function RankList() {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	  that.inheritOn('init', function () {
	
	    return true;
	  });
	  var _rankPage1 = _imports.UIControl.create({
	    id: 'layout',
	    component: 'Layout',
	    anchor: {
	      x: 0,
	      y: 0
	    },
	    position: {
	      x: -100,
	      y: 200
	    },
	    children: [{
	      id: 'bg',
	      component: 'Layout',
	      position: {
	        x: 0,
	        y: -140
	      },
	      children: function () {
	        var ui = [];
	
	        var _loop = function _loop(i) {
	          var cell = {
	            id: 'chrowLabel' + i,
	            component: function () {
	              if (i < 3) {
	                return 'Sprite';
	              } else {
	                return 'Label';
	              }
	            }(),
	            text: i + 4 + '',
	            position: {
	              x: 0,
	              y: i * 38 + 42
	            }
	          };
	          if (i < 3) {
	            cell.image = _resources2.default['icon_nmb' + (i + 1)];
	          } else {
	            cell.text = i + 1 + '';
	            cell.style = {
	              font: '14px Arial',
	              fill: '#edd28d'
	            };
	          }
	          ui.push(cell);
	        };
	
	        for (var i = 0; i < 6; i++) {
	          _loop(i);
	        }
	        return ui;
	      }() }, function () {
	      var ui = {
	        id: 'none',
	        component: 'Layout',
	        children: []
	      };
	      for (var i = 0; i < 6; i++) {
	        var _cell = {
	          id: 'headIcon' + i,
	          component: 'Sprite',
	          scale: {
	            x: 0.65,
	            y: 0.65
	          },
	          image: _resources2.default.icon_head,
	          position: {
	            x: 35,
	            y: i * 38 - 5 * 38 / 2
	          },
	          children: [{
	            id: 'icon',
	            component: 'Sprite',
	            image: _resources2.default.icon_head2
	          }]
	        };
	        ui.children.push(_cell);
	      }
	      return ui;
	    }(), {
	      id: 'button',
	      component: 'Button',
	      alpha: 0,
	      scale: {
	        x: 1,
	        y: 1.2
	      },
	      image: _resources2.default.img_boxRanking
	    }]
	  }, function (button) {
	    if (button.id === 'button') {
	      console.log('切换2');
	      moveAction(-100, 200, _rankPage1.node, function () {
	        moveAction(90, 200, _rankPage2.node, function () {});
	      });
	    }
	  });
	
	  var _rankPage2 = _imports.UIControl.create({
	    id: 'layout',
	    component: 'Layout',
	    position: {
	      x: -90,
	      y: 170
	    },
	    children: [{
	      id: 'bg',
	      component: 'Sprite',
	      alpha: 0,
	      image: _resources2.default.img_boxRanking
	    }, {
	      id: 'label',
	      component: 'Label',
	      text: '红包排行榜',
	      position: {
	        x: 0,
	        y: -76
	      },
	      style: {
	        font: '15px Arial',
	        fill: '#fff1cc'
	      }
	    }, {
	      id: 'chrowlist',
	      component: 'Layout',
	      position: {
	        x: -70,
	        y: 0
	      },
	      children: function () {
	        var uilist = [];
	
	        var _loop2 = function _loop2(i) {
	          var ui = {
	            id: 'chrow' + i,
	            component: 'Layout',
	            children: []
	          };
	          var cell = {
	            id: 'chrowLabel' + i,
	            component: function () {
	              if (i < 3) {
	                return 'Sprite';
	              } else {
	                return 'Label';
	              }
	            }(),
	            position: {
	              x: 0,
	              y: -5 * 25 * 0.5 + +10 + 25 * i
	            }
	          };
	          if (i < 3) {
	            cell.image = _resources2.default['icon_nmb' + (i + 1)];
	          } else {
	            cell.style = {
	              font: '16px Arial',
	              fill: '#b19966'
	            };
	            cell.text = i + 1;
	          }
	          ui.children.push(cell);
	
	          var nameLabel = {
	            id: 'nameLabel' + i,
	            component: 'Label',
	            text: '哈哈哈哈',
	            anchor: {
	              x: 0.5,
	              y: 0.5
	            },
	            style: {
	              font: '18px Arial',
	              fill: '#edd28d'
	            },
	            position: {
	              x: 70,
	              y: -5 * 25 * 0.5 + 12 + 25 * i
	            }
	          };
	          ui.children.push(nameLabel);
	          var scoreLabel = {
	            id: 'scoreLabel' + i,
	            component: 'Label',
	            text: '0',
	            anchor: {
	              x: 0,
	              y: 0.5
	            },
	            style: {
	              font: '16px Arial',
	              fill: '#dac080'
	            },
	            position: {
	              x: 120,
	              y: -5 * 25 * 0.5 + 12 + 25 * i
	            }
	          };
	
	          ui.children.push(scoreLabel);
	
	          uilist.push(ui);
	        };
	
	        for (var i = 0; i < 6; i++) {
	          _loop2(i);
	        }
	        return uilist;
	      }()
	    }, {
	      id: 'button',
	      component: 'Button',
	      alpha: 0,
	      image: _resources2.default.img_boxRanking
	    }]
	  }, function (button) {
	    if (button.id === 'button') {
	      console.log('切换1');
	      moveAction(-90, 200, _rankPage2.node, function () {
	        moveAction(20, 200, _rankPage1.node, function () {});
	      });
	    }
	  });
	
	  that.node.addChild(_rankPage2.node);
	
	  that.node.addChild(_rankPage1.node);
	
	  var setUserInfo = function setUserInfo(values, objects) {
	    console.log('value' + JSON.stringify(values));
	    // console.log('uid' + uid);
	    _platformHelper2.default.getAppUserInfo(values.uid, function (data) {
	      if (objects.headNode) {
	        objects.headNode.node.addChild((0, _headNode2.default)({ image: data.avatar }));
	      }
	      if (objects.nameLabel) {
	        objects.nameLabel.text = data.nickname;
	        objects.nameLabel.style = {
	          font: '18px Arail',
	          fill: values.uid === _gameGlobal2.default.playerdata.uid ? '#0ce919' : '#edd28d'
	        };
	      }
	    });
	    if (objects.scoreLabel) {
	      objects.scoreLabel.text = values.score + '';
	      objects.scoreLabel.style = {
	        font: '16px Arial',
	        fill: values.uid === _gameGlobal2.default.playerdata.uid ? '#0ce919' : '#edd28d'
	      };
	    }
	    if (objects.chrowLabel) {
	      // objects.chrowLabel.text = values.ranknmb;
	      // objects.chrowLabel.style = {
	      //   font: '16px Arial',
	      //   fill: values.uid === global.playerdata.uid ? '#0ce919' : '#edd28d'
	      // }
	      if (values.ranknum) {
	        objects.chrowLabel.text = values.ranknum;
	      }
	      objects.chrowLabel.style = {
	        font: '16px Arial',
	        fill: values.uid === _gameGlobal2.default.playerdata.uid ? '#0ce919' : '#edd28d'
	      };
	    }
	
	    if (objects.chrowLabel1) {
	      if (values.ranknum) {
	        objects.chrowLabel1.text = values.ranknum;
	      }
	      objects.chrowLabel1.style = {
	        font: '16px Arial',
	        fill: values.uid === _gameGlobal2.default.playerdata.uid ? '#0ce919' : '#edd28d'
	      };
	    }
	  };
	
	  _gameGlobal2.default.playerdata.getRanklistData(function (data) {
	    console.log('ranklist : ' + JSON.stringify(data));
	    // let ranklist = data.rank;
	    // let userIds = ranklist.userIds;
	    // for (let i = 0 ; i < userIds.length; i++ ){
	    //   let id = userIds[i];
	    //   // _rankPage1[headIcon + 1]
	    //   setUserInfo(id,_rankPage1['headIcon' + i]);
	    // }
	
	
	    for (var i = 0; i < 6; i++) {
	      if (i < data.rank.userIds.length) {
	        var uid = data.rank.userIds[i];
	        var score = data.rank.scores[i];
	        setUserInfo({
	          uid: uid,
	          score: score
	        }, {
	          headNode: _rankPage1['headIcon' + i],
	          nameLabel: _rankPage2['nameLabel' + i],
	          scoreLabel: _rankPage2['scoreLabel' + i],
	          chrowLabel: _rankPage2['chrowLabel' + i],
	          chrowLabel1: _rankPage1['chrowLabel' + i]
	        });
	      } else {
	        _rankPage1['headIcon' + i].node.visible = false;
	        _rankPage2['chrow' + i].node.visible = false;
	      }
	    }
	    if (isHave(_gameGlobal2.default.playerdata.uid, data.rank.userIds)) {} else {
	      console.log('不在前六名');
	      setUserInfo({
	        uid: _gameGlobal2.default.playerdata.uid,
	        score: data.self_score,
	        ranknum: data.self_rank === -1 ? 798 : data.self_rank
	      }, {
	        headNode: _rankPage1['headIcon5'],
	        nameLabel: _rankPage2['nameLabel5'],
	        scoreLabel: _rankPage2['scoreLabel5'],
	        chrowLabel: _rankPage2['chrowLabel5'],
	        chrowLabel1: _rankPage1['chrowLabel5']
	      });
	    }
	
	    console.log('self data=' + data.self_rank);
	  }, 1, 6);
	
	  var isHave = function isHave(value, list) {
	    var have = false;
	    for (var i = 0; i < list.length; i++) {
	      if (list[i] === value) {
	        have = true;
	      }
	    }
	    return have;
	  };
	
	  that.enter = function () {
	    moveAction(20, 300, _rankPage1.node, function () {});
	  };
	  that.removeSelf = function () {
	
	    that.parent.removeChild(that.node);
	  };
	
	  return that;
	};
	var RankState = {
	  Invalide: -1,
	  Enter: 1,
	  Out: 1,
	  Over: 3
	};
	var RankLayer = function RankLayer() {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	  that.inheritOn('init', function () {});
	  var _state = RankState.Invalide;
	  var _rankList = null;
	  var _setState = function _setState(state) {
	    if (_state === state) {
	      return;
	    }
	    _state = state;
	    switch (_state) {
	      case RankState.Enter:
	        console.log('显示排行榜');
	        _rankList = RankList();
	        _rankList.init();
	        _rankList.add2World(that);
	        _rankList.enter();
	
	        break;
	      case RankState.Over:
	        console.log('关闭排行榜');
	        // _rankList.removeSelf();
	        if (_rankList) {
	          that.node.removeChild(_rankList.node);
	        }
	
	        break;
	      case _gameDefines2.default:
	
	        break;
	    }
	  };
	
	  _setState(RankState.Enter);
	
	  _gameGlobal2.default.events.on('openranklayer', function () {
	    _setState(RankState.Over);
	    _setState(RankState.Enter);
	  });
	
	  return that;
	};
	exports.default = RankLayer;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2016/11/9.
	 */
	var HeadNode = function HeadNode(data) {
	  var that = new PIXI.Container();
	  var image = "http://image1.yuanfenba.net/uploads/oss/avatar/201601/29/19031717956.png";
	  if (data.image) {
	    image = data.image;
	  }
	  // let img_url = Helper.getImgUrlWithSize(image, 46);
	  // _headIcon.texture = new PIXI.Texture.fromImage(img_url);
	  // let imageUrl = Helper.getImgUrlWithSize(data.image,46);
	  // that.addChild(new PIXI.Texture.fromImage(imageUrl));
	  // let imageUrl = Helper.getImgUrlWithSize(data., 46);
	
	  var headNode = new PIXI.Sprite.fromImage(_resources2.default.star);
	  headNode.anchor = {
	    x: 0.5,
	    y: 0.5
	  };
	  var imageUrl = _imports.Helper.getImgUrlWithSize(image, 46);
	  console.log('imageUrl +++' + imageUrl);
	  var mask = new PIXI.Sprite.fromImage(_resources2.default.head_white);
	  mask.anchor = {
	    x: 0.5,
	    y: 0.5
	  };
	  that.addChild(mask);
	  that.mask = mask;
	  var head = new PIXI.Texture.fromImage(imageUrl);
	  headNode.texture = head;
	  that.addChild(headNode);
	  return that;
	};
	exports.default = HeadNode;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2016/11/8.
	 */
	var MaskEffect = function MaskEffect() {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	  that.inheritOn('init', function () {
	    return true;
	  });
	  // let _mashLayer = new PIXI.Container();
	  // let zhezhao = new PIXI.Sprite.fromImage(resource.zhezhao);
	  // zhezhao.anchor.set(0.5);
	  // _mashLayer.addChild(zhezhao);
	  //
	  // _mashLayer.rotation = (180*2/Math.PI);
	  // _mashLayer.position = {x: defines.Canvas.posX_center ,y: defines.Canvas.posY_center };
	  // global.events.on('maskeffect',(state)=>{
	  //   console.log('遮罩效果是' + state);
	  //   if(state === 'Crazy'){
	  //     that.node.addChild(_mashLayer);
	  //   }else if(state === 'Normal' && _mashLayer.parent === that.node){
	  //       that.node.removeChild(_mashLayer);
	  //   }else {
	  //   }
	  // });
	
	  var _maskSprite = new PIXI.Sprite.fromImage(_resources2.default.zhezhao);
	  // _maskSprite.visible = false;
	  _maskSprite.alpha = 0;
	  _maskSprite.scale = {
	    x: 1.2,
	    y: 1.2
	  };
	  that.node.addChild(_maskSprite);
	
	  var _moveIn = function _moveIn() {
	    var _movein = new TWEEN.Tween({ alpha: 0 }).to({ alpha: 1 }, 600).onUpdate(function () {
	      _maskSprite.alpha = this.alpha;
	    });
	    _movein.start();
	  };
	
	  var _moveOut = function _moveOut(cb) {
	    var _moveout = new TWEEN.Tween({ alpha: _maskSprite.alpha }).to({ alpha: 0 }, 600).onUpdate(function () {
	      _maskSprite.alpha = this.alpha;
	    }).onComplete(function () {
	      if (cb) {
	        cb();
	      }
	    });
	    _moveout.start();
	  };
	
	  _gameGlobal2.default.events.on('maskeffect', function (state) {
	    if (state === 'Crazy') {
	      // _maskSprite.visible = true;
	      _moveIn();
	    } else {
	      _moveOut(function () {
	        // _maskSprite.visible = false;
	      });
	    }
	  });
	
	  return that;
	};
	exports.default = MaskEffect;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var Camera = function Camera(spec) {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	  var _viewWidth = spec.viewWidth;
	  var _viewHeight = spec.viewHeight;
	  var _width = spec.maxWidth;
	  var _height = spec.maxHeight;
	
	  var _moveLayer = new PIXI.Container();
	  that.node.addChild(_moveLayer);
	
	  var _mashLayer = new PIXI.Container();
	  that.node.addChild(_mashLayer);
	
	  var _moveLayer1 = new PIXI.Container();
	  that.node.addChild(_moveLayer1);
	
	  var _lookList = [];
	
	  that.inheritOn('init', function () {
	
	    console.log('init camera');
	    return true;
	  });
	
	  that.mask = function (image) {
	    _mashLayer.addChild(new PIXI.Sprite.fromImage(image));
	  };
	
	  if (spec.mashImage) {
	    that.mask(spec.mashImage);
	  }
	
	  that.LookAt = function (object) {
	
	    if (object.cameraPos) {
	      that.lookObject = object;
	      //that.node.addChild(object.node);
	      // _moveLayer1.addChild(object.node);
	    } else {
	      console.log('no have cameraPos');
	    }
	  };
	  var scaleAction = function scaleAction(object, value, cb, director) {
	    var action = new TWEEN.Tween({ scale: object.scale.x }).to({ scale: value }, 300).onUpdate(function () {
	
	      object.position = {
	        x: _imports.Director.sharedDirector().screen.right * 0.5 * (this.scale - 1) * director,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 * (this.scale - 1) * director
	      };
	      object.scale = {
	        x: this.scale,
	        y: this.scale
	      };
	    }).onComplete(function () {
	      if (cb) {
	        cb();
	      }
	    }).easing(TWEEN.Easing.Cubic.In);
	    action.start();
	  };
	  that.zoomIn = function (value) {
	    // _moveLayer1.scale = {
	    //   x: value,
	    //   y: value
	    // }
	
	    var index = 0;
	    var cb = function cb() {
	      index++;
	      if (index === _lookList.length) {
	        console.log('缩放结束In');
	      }
	    };
	    for (var i = 0; i < _lookList.length; i++) {
	      _lookList[i].oldScale = _lookList[i].scale;
	      scaleAction(_lookList[i], value, cb, -1);
	    }
	  };
	
	  that.zoomOut = function (value) {
	    var index = 0;
	    for (var i = 0; i < _lookList.length; i++) {
	      _lookList[i].scale = _lookList[i].oldScale;
	      _lookList[i].position = {
	        x: 0,
	        y: 0
	      };
	    }
	    // var cb = ()=>{
	    //   index ++;
	    //   if (index === _lookList.length){
	    //     console.log('播放结束Out');
	    //   }
	    // };
	    // for (var i = 0 ; i < _lookList.length ; i ++){
	    //   scaleAction(_lookList[i],1.2,cb,1);
	    // }
	  };
	
	  var ShakeAction = function ShakeAction(node, value) {
	    if (node.isAction === false) {
	      node.isAction = true;
	    } else {
	      return;
	    }
	    var targetPosx = node.position.x + value;
	    var targetPosx1 = node.position.x - value;
	    var action = new TWEEN.Tween({ value: node.position.x }).to({ value: targetPosx }, 20).onUpdate(function () {
	      node.position.x = this.value;
	    }).onComplete(function () {
	      action1.start();
	    });
	    action.start();
	    var action1 = new TWEEN.Tween({ value: node.position.x }).to({ value: targetPosx1 }, 20).onUpdate(function () {
	      node.position.x = this.value;
	    }).onComplete(function () {
	      node.isAction = false;
	    });
	  };
	
	  // const Shake = (node,count)=>{
	  //
	  //   if (count < 0){
	  //     node.position = node.oldPosition;
	  //     return;
	  //   }
	  //   ShakeAction(node,count%2?10:-10,()=>{
	  //     count --;
	  //     Shake(node,count);
	  //   });
	  // }
	  that.shakeCamera = function () {
	    console.log('shake camera');
	    // for (var i = 0 ; i < _lookList.length ; i ++) {
	    //   _lookList[i].oldPosition = _lookList[i].position;
	    //   // Shake(_lookList[i],2);
	    //   _lookList[i].isAction = false;
	    //   ShakeAction(_lookList[i],4);
	    // }
	  };
	
	  that.addToCameraDeep = function (object) {
	    ////在遮罩之下
	    _moveLayer.addChild(object);
	  };
	
	  that.addToCamera = function (object) {
	    ////在遮罩之上
	    // _moveLayer1.addChild(object);
	    _lookList.push(object);
	  };
	  that.cameraUpdate = function () {
	
	    if (that.lookObject) {
	      var pos = (0, _imports.Vec2)(_viewWidth / 2, _viewHeight / 2).sub(that.lookObject.cameraPos);
	      pos.x = Math.min(0, pos.x);
	      pos.x = Math.max(_viewWidth - _width, pos.x);
	      pos.y = Math.min(0, pos.y);
	      pos.y = Math.max(_viewHeight - _height, pos.y);
	      _moveLayer.position = {
	        x: pos.x,
	        y: pos.y
	      };
	      _moveLayer1.position = {
	        x: pos.x,
	        y: pos.y
	      };
	    } else {}
	  };
	
	  that.getViewRange = function () {
	    return PIXI.Rectangle(_moveLayer.position.x, _moveLayer.position.y, _viewWidth, _viewHeight);
	  };
	
	  // that.inheritOn('update',()=>{
	  //   that.cameraUpdate();
	  // });
	
	  return that;
	}; /**
	    * Created by chuhaoyuan on 2016/10/19.
	    */
	exports.default = Camera;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2016/10/26.
	 */
	var DebugLayer = function DebugLayer() {
	  var that = new PIXI.Container();
	  _gameGlobal2.default.events.on('debug', function (data) {
	    //console.log('data' + JSON.stringify(data));
	    addLog(data);
	  });
	
	  // let _versionText = new PIXI.Text(global.playerdata.uid + '/' + global.playerdata.auth,{
	  //   font: '24px',
	  //   fill: '#FFFFFF',
	  // });
	  var _versionText = new PIXI.Text(_gameDefines2.default.versionCode + ':' + _gameGlobal2.default.playerdata.uid, {
	    font: '24px',
	    fill: '#FFFFFF'
	  });
	  _versionText.position = {
	    x: 20,
	    y: 0
	  };
	  // that.addChild(_versionText);
	
	
	  var _texts = [];
	  var fixLength = function fixLength() {
	    if (_texts.length > 20) {
	      that.removeChild(_texts[0]);
	      _texts.splice(0, 1);
	      for (var i = 0; i < _texts.length; i++) {
	        _texts[i].position.y = 50 + i * 24;
	      }
	      fixLength();
	    } else {}
	  };
	  var addLog = function addLog(str) {
	    var text = new PIXI.Text(str, {
	      fill: '#ffffff'
	    });
	    that.addChild(text);
	    text.position.x = 0;
	    if (_texts.length === 0) {
	      text.position.y = 50;
	    } else {
	      text.position.y = _texts[_texts.length - 1].position.y + 24;
	    }
	    _texts.push(text);
	    fixLength();
	  };
	
	  return that;
	};
	exports.default = DebugLayer;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by yu on 16/11/2.
	 */
	var UIStart = function UIStart() {
	  var that = (0, _imports.Inherited)((0, _imports.ModelLayer)(true));
	  that.inheritOn('init', function () {
	    //console.log('init start UI');
	    that.node.interactive = true;
	    return true;
	  });
	
	  var _touch = {};
	  var readygo_move = true;
	  var ui_move = true;
	  var readygo_num = 2;
	
	  var _bg = new PIXI.Sprite.fromImage(_resources2.default.bj);
	  _bg.anchor = {
	    x: 0.5,
	    y: 0.5
	  };
	  _bg.position = {
	    x: _imports.Director.sharedDirector().screen.right * 0.5,
	    y: _imports.Director.sharedDirector().screen.bottom * 0.5
	  };
	  _bg.alpha = 0;
	  that.node.addChild(_bg);
	
	  /****************************  UI布局  *******************************/
	
	  var _fruitNode = _imports.UIControl.create({
	    id: 'fruitNode',
	    component: 'Layout',
	    children: [{
	      id: 'fruit',
	      component: 'Sprite',
	      image: _resources2.default.icon_st_shuiguo,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5
	      }
	    }, {
	      id: 'textfruit',
	      component: 'BMLabel',
	      text: 0,
	      style: {
	        font: '38.4px rank_number_3'
	      },
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.65 - 20
	      }
	    }]
	  });
	  that.node.addChild(_fruitNode.node);
	
	  //let _bombNode = UIControl.create({
	  //  id: 'bombNode',
	  //  component: 'Layout',
	  //  children: [
	  //    {
	  //      id: 'bomb',
	  //      component: 'Sprite',
	  //      image: resources.icon_st_zhadan,
	  //      position: {
	  //        x: Director.sharedDirector().screen.right - 150,
	  //        y: Director.sharedDirector().screen.bottom * 0.5
	  //      }
	  //    },{
	  //      id: 'textbomb',
	  //      component: 'BMLabel',
	  //      text: 0,
	  //      style: {
	  //        font: '38.4px rank_number_3',
	  //      },
	  //      position:{
	  //        x: Director.sharedDirector().screen.right - 150,
	  //        y: Director.sharedDirector().screen.bottom * 0.65 - 20
	  //      }
	  //    }
	  //  ]
	  //});
	  //that.node.addChild(_bombNode.node);
	
	  var _itemNode = _imports.UIControl.create({
	    id: 'itemNode',
	    component: 'Layout',
	    children: [{
	      id: 'item',
	      component: 'Sprite',
	      image: _resources2.default.img_st_chuxian,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.top + 200
	      }
	    }]
	  });
	  that.node.addChild(_itemNode.node);
	
	  var _beginNode = _imports.UIControl.create({
	    id: 'beginnode',
	    component: 'Layout',
	    children: [{
	      id: 'start1',
	      component: 'Sprite',
	      image: _resources2.default.start1,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.8
	      }
	    }, {
	      id: 'start2',
	      component: 'Sprite',
	      image: _resources2.default.start2,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.8
	      }
	    }, {
	      id: 'start3',
	      component: 'Sprite',
	      image: _resources2.default.start3,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.8
	      }
	    }]
	  });
	  that.node.addChild(_beginNode.node);
	  _beginNode.start1.visible = false;
	  _beginNode.start2.visible = false;
	  _beginNode.start3.visible = false;
	
	  var _readygo = _imports.UIControl.create({
	    id: 'readygo',
	    component: 'Layout',
	    children: [{
	      id: 'reday',
	      component: 'Sprite',
	      image: _resources2.default.reday,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5
	      }
	    }, {
	      id: 'go',
	      component: 'Sprite',
	      image: _resources2.default.go,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5
	      }
	    }]
	  });
	  that.node.addChild(_readygo.node);
	  _readygo.reday.visible = false;
	  _readygo.go.visible = false;
	  _readygo.reday.scale.set(4);
	  _readygo.go.scale.set(4);
	
	  /***************************  倒计时   ************************/
	
	  var _beginlist = [_beginNode.start3, _beginNode.start2, _beginNode.start1];
	  var _beginChange = function _beginChange() {
	    setTimeout(function () {
	      _beginlist[0].visible = true;
	      _change3.start();
	    }, 500);
	    var _change3 = new TWEEN.Tween({ alpha: 1 }).to({ alpha: 0 }, 1000).onUpdate(function () {
	      _beginNode.start3.alpha = this.alpha;
	    }).onComplete(function () {
	      _beginlist[1].visible = true;
	      _change2.start();
	    });
	
	    var _change2 = new TWEEN.Tween({ alpha: 1 }).to({ alpha: 0 }, 1000).onUpdate(function () {
	      _beginNode.start2.alpha = this.alpha;
	    }).onComplete(function () {
	      _beginlist[2].visible = true;
	      _change1.start();
	    });
	
	    var _change1 = new TWEEN.Tween({ alpha: 1 }).to({ alpha: 0 }, 1000).onUpdate(function () {
	      _beginNode.start1.alpha = this.alpha;
	    }).onComplete(function () {
	      ui_move = false;
	      that.moveOut(_itemNode.node, _beginNode.node, _fruitNode.node);
	    });
	  };
	
	  /***************************  移动  ************************/
	
	  that.moveIn = function (object1, object3) {
	    var _node1 = new TWEEN.Tween({ y: object1.position.y - 700 }).to({ y: object1.position.y }, 240).onUpdate(function () {
	      object1.position.y = this.y;
	    });
	    //.easing(TWEEN.Easing.Cubic.InOut)
	    var _node3 = new TWEEN.Tween({ y: object3.position.y + 700 }).to({ y: object3.position.y }, 240).onUpdate(function () {
	      object3.position.y = this.y;
	    })
	    //.easing(TWEEN.Easing.Back.In)
	    .onComplete(function () {
	      _beginChange();
	      that.node.on('touchend', remove);
	      that.node.on('mouseup', remove);
	    });
	    _node1.start();
	    _node3.start();
	  };
	  that.moveIn(_itemNode.node, _fruitNode.node);
	
	  that.moveOut = function (object1, object2, object3) {
	    var _node1 = new TWEEN.Tween({ y: object1.position.y }).to({ y: object1.position.y - 700 }, 300).onUpdate(function () {
	      object1.position.y = this.y;
	    });
	    var _node2 = new TWEEN.Tween({ y: object2.position.y }).to({ y: object2.position.y + 400 }, 300).onUpdate(function () {
	      object2.position.y = this.y;
	    });
	    var _node3 = new TWEEN.Tween({ y: object3.position.y }).to({ y: object3.position.y + 700 }, 300).onUpdate(function () {
	      object3.position.y = this.y;
	    }).onComplete(function () {
	      that.node.removeChild(_itemNode.node, _beginNode.node, _fruitNode.node);
	      if (readygo_move) {
	        _gameGlobal2.default.audioControl.play('readygo');
	        timeChange();
	      }
	      readygo_move = false;
	    });
	    _node1.start();
	    _node2.start();
	    _node3.start();
	  };
	
	  /**************************  数据  *************************/
	
	  _fruitNode.textfruit.text = _gameGlobal2.default.playerdata.fruitCount.toString();
	
	  /**************************  鼠标点击  触摸  *******************/
	  var remove = function remove(event) {
	    if (ui_move) {
	      that.moveOut(_itemNode.node, _beginNode.node, _fruitNode.node);
	      ui_move = false;
	    }
	
	    if (_touch.hasOwnProperty(event.data.identifier)) {} else {
	      return;
	    }
	  };
	
	  /***************************  ready go  ********************/
	
	  that.scaleChange = function (object) {
	    var _text = new TWEEN.Tween({ x: object.scale.x, y: object.scale.y }).to({ x: 1, y: 1 }, 500).onUpdate(function () {
	      object.scale.x = this.x;
	      object.scale.y = this.y;
	    }).onComplete(function () {
	      object.alpha = 1;
	    }).easing(TWEEN.Easing.Bounce.Out);
	    _text.start();
	  };
	
	  var timeChange = function timeChange() {
	    if (readygo_num === 4) {
	      _gameGlobal2.default.audioControl.play('gamestart');
	      _gameGlobal2.default.events.fire('gamestart');
	      that.removeFromWorld();
	      return;
	    }
	    if (readygo_num === 3) {
	      _readygo.reday.visible = false;
	      _readygo.go.visible = true;
	      that.scaleChange(_readygo.go);
	      readygo_num++;
	    }
	    if (readygo_num === 2) {
	      _readygo.reday.visible = true;
	      that.scaleChange(_readygo.reday);
	      readygo_num++;
	    }
	
	    setTimeout(timeChange, 1000);
	  };
	
	  return that;
	};
	exports.default = UIStart;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _platformHelper = __webpack_require__(45);
	
	var _platformHelper2 = _interopRequireDefault(_platformHelper);
	
	var _headNode = __webpack_require__(61);
	
	var _headNode2 = _interopRequireDefault(_headNode);
	
	var _uiGameoverNew = __webpack_require__(67);
	
	var _uiGameoverNew2 = _interopRequireDefault(_uiGameoverNew);
	
	var _gameoverDataShowLayer = __webpack_require__(68);
	
	var _gameoverDataShowLayer2 = _interopRequireDefault(_gameoverDataShowLayer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Administrator on 2016/11/2.
	 */
	var _isAction = false;
	var _mask = void 0;
	var UIGameOver = function UIGameOver(spec) {
	  // console.log('now score=' + spec.score);
	  var moveAction_y = function moveAction_y(startPos, endPos, time, node, cb) {
	    if (_isAction) {
	      return;
	    }
	    _isAction = true;
	    var action = new TWEEN.Tween({ y: startPos }).to({ y: endPos }, time).onUpdate(function () {
	      node.position.y = this.y;
	    }).onComplete(function () {
	      _isAction = false;
	      if (cb) {
	        cb();
	      }
	    }).easing(TWEEN.Easing.Back.Out);
	    action.start();
	  };
	  var moveAction_x = function moveAction_x(startPos, endPos, time, node, cb) {
	    if (_isAction) {
	      return;
	    }
	    //_isAction = true;
	    var action = new TWEEN.Tween({ x: startPos }).to({ x: endPos }, time).onUpdate(function () {
	      node.position.x = this.x;
	    }).onComplete(function () {
	      //_isAction = false;
	      if (cb) {
	        cb();
	      }
	    }).easing(TWEEN.Easing.Back.Out);
	    action.start();
	  };
	  var newRank = 0;
	  var that = (0, _imports.Inherited)((0, _imports.ModelLayer)(false));
	  that.inheritOn('init', function () {
	    that.node.interactive = true;
	    return true;
	  });
	  that.scaleChange = function (object) {
	    var _text = new TWEEN.Tween({ x: object.scale.x, y: object.scale.y }).to({ x: 1, y: 1 }, 500).onUpdate(function () {
	      object.scale.x = this.x;
	      object.scale.y = this.y;
	    }).onComplete(function () {}).easing(TWEEN.Easing.Back.Out);
	    _text.start();
	  };
	  that.alphaChange = function (object) {
	    var _text = new TWEEN.Tween({ alpha: object.alpha }).to({ alpha: 1 }, 600).onUpdate(function () {
	      object.alpha = this.alpha;
	    }).onComplete(function () {}).easing(TWEEN.Easing.Sinusoidal.In);
	    _text.start();
	  };
	  // let gameOverNew = GameOverNew({
	  //   selfrank: spec.rank,
	  //   maxscore: spec.maxScore
	  // });
	
	
	  var overNode = _imports.UIControl.create({
	    id: 'overNode',
	    component: 'Layout',
	    children: [{
	      id: 'qizhi',
	      component: 'Sprite',
	      image: _resources2.default.img_qizhi,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 - 115
	      }
	    }, {
	      id: 'chibang',
	      component: 'Sprite',
	      image: _resources2.default.img_chibang,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5 - 120,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 - 222
	      }
	    }, {
	      id: 'chibang2',
	      component: 'Sprite',
	      image: _resources2.default.img_chibang2,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5 + 120,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 - 222
	      }
	    }, {
	      id: 'he2',
	      component: 'Sprite',
	      image: _resources2.default.img_he2,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 - 280
	      }
	    }, {
	      id: 'rankTextLight',
	      component: 'Sprite',
	      image: _resources2.default.img_light1,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 - 280
	      },
	      alpha: 0
	    }, {
	      id: 'rankRiseText',
	      component: 'BMLabel',
	      text: 0,
	      style: {
	        font: '18px rank_number_1'
	      },
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 - 355
	      },
	      alpha: 0
	    }, {
	      id: 'layout',
	      component: 'Layout',
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 - 280
	      },
	      children: [{
	        id: 'rankPolygon',
	        component: 'Sprite',
	        image: _resources2.default.img_he,
	        position: {
	          x: 0,
	          y: 0
	        }
	      }, {
	        id: 'zhezhao',
	        component: "Layout",
	        position: {
	          x: 0,
	          y: 0
	        },
	        children: [{
	          id: 'light',
	          component: 'Sprite',
	          image: _resources2.default.img_yellow_26,
	          position: {
	            x: 0,
	            y: 0
	          }
	        }]
	      }]
	    }, {
	      id: 'n',
	      component: 'Sprite',
	      image: _resources2.default.icon_wodefenshu,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 - 305
	      }
	    }, {
	      id: 'rankNum',
	      component: 'BMLabel',
	      text: 0,
	      style: {
	        font: '38 rank_number_3'
	      },
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 - 255
	      }
	    }, {
	      id: 'overLine',
	      component: 'Sprite',
	      image: _resources2.default.gameover1,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 - 180
	      }
	    }]
	  });
	  that.node.addChild(overNode.node);
	
	  var buttonNode = _imports.UIControl.create({
	    id: 'buttonNode',
	    component: 'Layout',
	    children: [{
	      id: 'restart',
	      component: 'Button',
	      image: _resources2.default.bt_replay_normal,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5 + 200,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 + 365
	      }
	    }, {
	      id: 'close',
	      component: 'Button',
	      image: _resources2.default.bt_quit_normal,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5 - 190,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 + 375
	      }
	    }, {
	      id: 'checkgift',
	      component: 'Button',
	      image: _resources2.default.bt_view_normal,
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5 + 10,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 + 360
	      }
	    }]
	  }, function (button) {
	    if (button.id === 'restart') {
	      allMoveOut();
	    }
	    if (button.id === 'close') {
	      _platformHelper2.default.endAll();
	    }
	    if (button.id === 'checkgift') {
	      _platformHelper2.default.jumpToPacket();
	    }
	  });
	  that.node.addChild(buttonNode.node);
	
	  var createMoveNode = function createMoveNode(image, num, text) {
	    var moveNode = _imports.UIControl.create({
	      id: 'moveNode',
	      component: 'Layout',
	      position: {
	        x: _imports.Director.sharedDirector().width + 100,
	        y: _imports.Director.sharedDirector().height * 0.5 - 240
	      },
	      children: [{
	        id: 'image',
	        component: 'Sprite',
	        image: image,
	        position: {
	          x: 0,
	          y: 0
	        }
	      }, {
	        id: 'num',
	        component: 'BMLabel',
	        style: {
	          font: 'gold_number'
	        },
	        position: {
	          x: 55,
	          y: -5
	        },
	        text: num
	      }, {
	        id: 'text',
	        component: 'Label',
	        text: text,
	        position: {
	          x: 70,
	          y: 20
	        },
	        style: {
	          font: '16px Arial',
	          fill: 0xffffff
	        }
	      }]
	    });
	    that.node.addChild(moveNode.node);
	    return moveNode;
	  };
	
	  var removeNode = function removeNode() {
	    that.removeFromWorld();
	    _gameGlobal2.default.events.fire('restartgame');
	  };
	  var allMoveOut = function allMoveOut() {
	    var overTweenout = new TWEEN.Tween({ y: overNode.node.position.y }).to({ y: overNode.node.position.y - 450 }, 400).onUpdate(function () {
	      overNode.node.position.y = this.y;
	    });
	    // let headTweenout = new TWEEN.Tween({y: _gameoverDataShow.node.position.y})
	    //   .to({y: 1200},400)
	    //   .onUpdate(function(){
	    //     _gameoverDataShow.node.position.y = this.y
	    //   });
	    // let mainTweenout = new TWEEN.Tween({y: gameOverNew.node.position.y})
	    //   .to({y: gameOverNew.node.position.y - 450}, 350)
	    //   .onUpdate(function () {
	    //     gameOverNew.node.position.y = this.y;
	    //   });
	    var buttonTweenout = new TWEEN.Tween({ y: buttonNode.node.position.y }).to({ y: buttonNode.node.position.y + 550 }, 350).onUpdate(function () {
	      buttonNode.node.position.y = this.y;
	    }).onComplete(function () {
	      removeNode();
	      _gameGlobal2.default.events.fire('gamestartagain');
	    });
	    overTweenout.start();
	    // headTweenout.start();
	    // mainTweenout.start();
	    buttonTweenout.start();
	  };
	
	  // global.playerdata.getRanklistData((data)=>{
	  //   newRank = data.self_rank===-1?798:data.self_rank;
	  //
	  var cutRate = _gameGlobal2.default.playerdata.cutFruitCount / _gameGlobal2.default.playerdata.allFruitCount;
	
	  //看到的 石榴的 次数
	  var superFruitRate = 1;
	  var i = _gameGlobal2.default.playerdata.cutSuperCount;
	  if (i <= 19 && i >= 0) {
	    superFruitRate = 1.1;
	  } else if (i >= 20 && i <= 29) {
	    superFruitRate = 1.2;
	  } else if (i >= 30 && i <= 35) {
	    superFruitRate = 1.3;
	  } else if (i >= 36 && i < 39) {
	    superFruitRate = 1.4;
	  } else if (i >= 39) {
	    superFruitRate = 1.5;
	  }
	
	  // let endScore = Math.round(global.playerdata.totalScore * (cutRate + 1) * superFruitRate);
	  // endScore = spec.score;
	  // console.log('基础积分' + global.playerdata.totalScore);
	  // console.log('命中率' + cutRate);
	  // console.log('超级水果次数' + i);
	  // console.log('超级水果加成' + superFruitRate);
	  // console.log('endScore' + endScore );
	  // overNode.rankNum.text = ''+ global.playerdata.totalScore;
	
	  // gameOverNew.init();
	  // gameOverNew.add2World(that);
	  // },1,3);
	  var hitsList = _gameGlobal2.default.playerdata.hitsLists;
	  var hitCount = 0;
	  for (var j = 1; j < hitsList.length; j++) {
	    hitCount += hitsList[j];
	  }
	  moveAction_x(240, _imports.Director.sharedDirector().screen.right * 0.5 - 120, 500, overNode.chibang, function () {
	    if (_gameGlobal2.default.playerdata.totalScore === 0) {} else {
	      _gameGlobal2.default.events.fire('nodeScale');
	      _gameGlobal2.default.events.fire('addEndScore', that, function () {
	        // Mask(endScore)
	      });
	      if (hitCount === 0) {} else {
	        _gameGlobal2.default.events.fire('addEndScore1', that);
	      }
	      if (superFruitRate === 1) {} else {
	        _gameGlobal2.default.events.fire('addEndScore2', that);
	      }
	    }
	  });
	  moveAction_x(240, _imports.Director.sharedDirector().screen.right * 0.5 + 120, 500, overNode.chibang2, function () {});
	
	  var updateUI = function updateUI() {};
	
	  //圆形进度条,分数改变
	
	  var Mask = function Mask(score) {
	    var createMask = function createMask(angle) {
	      overNode.zhezhao.node.mask = null;
	      overNode.zhezhao.node.removeChild(_mask);
	      _mask = null;
	      _mask = new PIXI.Graphics();
	      _mask.beginFill(0xffffff, 1);
	      _mask.arc(0, 0, 100, -90 / (180 / Math.PI), (angle - 90) / (180 / Math.PI), false);
	      _mask.lineTo(0, 0);
	      _mask.endFill();
	      overNode.zhezhao.node.addChild(_mask);
	      overNode.zhezhao.node.mask = _mask;
	    };
	
	    var action = new TWEEN.Tween({ angle: 1 }).to({ angle: 360 }, 600).onUpdate(function () {
	      createMask(this.angle);
	    }).onComplete(function () {
	      that.alphaChange(overNode.rankRiseText);
	    });
	    action.start();
	
	    //改变当前分数
	    var myScore = new TWEEN.Tween({ count: overNode.rankNum.text }).to({ count: score }, 100).onUpdate(function () {
	      overNode.rankNum.text = Math.round(this.count);
	    });
	    myScore.start();
	  };
	
	  // numChange.start();
	  var light = new TWEEN.Tween({ alpha: overNode.rankTextLight.alpha }).to({ alpha: 0.8 }, 600).onUpdate(function () {
	    overNode.rankTextLight.alpha = this.alpha;
	  });
	  light.start();
	
	  that.update = function () {
	    updateUI();
	  };
	
	  // var _gameoverDataShow = GameOverDataShow(spec);
	  // that.node.addChild(_gameoverDataShow.node);
	
	  if (_gameGlobal2.default.playerdata.totalScore === 0) {} else {
	    _gameGlobal2.default.events.fire('colorbar', that);
	  }
	
	  return that;
	};
	exports.default = UIGameOver;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2016/11/18.
	 */
	var GameOverLayer = function GameOverLayer(spec) {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	  that.inheritOn('init', function () {
	    return true;
	  });
	  var _mainNode = _imports.UIControl.create({
	    id: 'mainNode',
	    component: 'Layout',
	    children: [{
	      id: 'l1',
	      component: 'BMLabel',
	      text: '当前排名：           名',
	      style: {
	        font: '20px combo'
	      },
	      anchor: {
	        x: 0,
	        y: 0.5
	      },
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5 - 100,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 - 110
	      },
	      children: [{
	        id: 'nowRank',
	        component: 'BMLabel',
	        style: {
	          font: '25px rank_number_1'
	        },
	        anchor: {
	          x: 0.5,
	          y: 0.5
	        },
	        text: '' + spec.selfrank,
	        position: {
	          x: 120,
	          y: -3
	        }
	
	      }]
	    }, {
	      id: 'l2',
	      component: 'BMLabel',
	      text: '今日最佳：           分',
	      style: {
	        font: '20px combo'
	      },
	      anchor: {
	        x: 0,
	        y: 0.5
	      },
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5 - 100,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5 - 70
	      },
	      children: [{
	        id: 'now',
	        component: 'BMLabel',
	        text: spec.maxscore.toString(),
	        style: {
	          font: '25px rank_number_1'
	        },
	        anchor: {
	          x: 0.5,
	          y: 0.5
	        },
	        position: {
	          x: 125,
	          y: -3
	        }
	      }]
	    }]
	  });
	  that.node.addChild(_mainNode.node);
	  if (spec.selfrank.toString() === '-1') {
	    _mainNode.nowRank.text = '   --';
	  }
	  return that;
	};
	exports.default = GameOverLayer;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _particleFruitJson = __webpack_require__(54);
	
	var _particleFruitJson2 = _interopRequireDefault(_particleFruitJson);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2016/11/29.
	 */
	var DataUI = function DataUI(spec) {
	  var that = {
	    id: 'dataUI',
	    component: 'Layout',
	    position: spec.position,
	    children: [{
	      id: 'bg',
	      component: 'Sprite',
	      image: spec.bgimage
	    }, {
	      id: 'mask',
	      component: 'Sprite',
	      image: _resources2.default.icon_box2
	    }, {
	      id: 'Label',
	      component: 'Label',
	      style: {
	        font: '16px Arial',
	        fill: '#ffffff'
	      },
	      text: spec.num,
	      position: {
	        x: 0,
	        y: 27
	      }
	    }, {
	      id: 'Label',
	      component: 'BMLabel',
	      style: {
	        font: spec.font
	      },
	      scale: function () {
	        if (spec.font === 'rank_number_1') {
	          return {
	            x: 0.5,
	            y: 0.5
	          };
	        } else {
	          return {
	            x: 1,
	            y: 1
	          };
	        }
	      }(),
	      position: {
	        x: 0,
	        y: 60
	      },
	      text: spec.labelText
	    }]
	  };
	  return that;
	};
	var DataUI1 = function DataUI1(spec) {
	  var that = {
	    id: 'DataUI1',
	    component: 'Layout',
	    position: spec.position,
	    //i: spec.i,
	    children: [{
	      id: 'icon' + spec.i,
	      component: 'Sprite',
	      image: spec.icon,
	      position: {
	        x: -46,
	        y: -5
	      }
	    }, {
	      id: 'label' + spec.i,
	      component: 'BMLabel',
	      style: {
	        font: 'rank_number_4'
	      },
	      text: spec.label,
	      anchor: {
	        x: 0,
	        y: 0.5
	      },
	      position: {
	        x: -32,
	        y: -5
	      }
	    }, {
	      id: 'best',
	      component: 'Label',
	      style: {
	        font: '16px Arial',
	        fill: '#efda51'
	      },
	      text: '最佳:' + spec.best,
	      anchor: {
	        x: 0,
	        y: 0.5
	      },
	      position: {
	        x: -30,
	        y: 28
	      }
	    }, {
	      id: 'now',
	      component: 'Label',
	      style: {
	        font: '16px Arial',
	        fill: function () {
	          if (spec.now === '0次') {
	            return '#828282';
	          } else {
	            return '#ffffff';
	          }
	        }()
	      },
	      text: '本次:' + spec.now,
	      anchor: {
	        x: 0,
	        y: 0.5
	      },
	      position: {
	        x: -30,
	        y: 53
	      }
	    }]
	  };
	  return that;
	};
	var GameOverDataShowLayer = function GameOverDataShowLayer(spec) {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	  that.inheritOn('init', function () {
	
	    return true;
	  });
	  var _emitters = {};
	  var elapsed = Date.now();
	  that.inheritOn('update', function () {
	
	    var now = Date.now();
	    _emitters[0].update((now - elapsed) * 0.001);
	    elapsed = now;
	  });
	  that.scaleChange = function (object) {
	    var _text1 = new TWEEN.Tween({ x: object.scale.x, y: object.scale.y }).to({ x: 1, y: 1 }, 200).onUpdate(function () {
	      object.scale.x = this.x;
	      object.scale.y = this.y;
	    }).onComplete(function () {}).easing(TWEEN.Easing.Back.Out);
	    //_text.start();
	    var _text = new TWEEN.Tween({ x: object.scale.x, y: object.scale.y }).to({ x: 1.3, y: 1.3 }, 200).onUpdate(function () {
	      object.scale.x = this.x;
	      object.scale.y = this.y;
	    }).onComplete(function () {
	      _text1.start();
	    }).easing(TWEEN.Easing.Back.Out);
	    _text.start();
	  };
	  var _mainNode = _imports.UIControl.create({
	    id: 'mainNode',
	    component: 'Layout',
	    children: function () {
	      var children = [];
	
	      var bgui = {
	        id: 'bgui',
	        component: 'Layout',
	        position: {
	          x: _imports.Director.sharedDirector().screen.right * 0.5,
	          y: _imports.Director.sharedDirector().screen.bottom * 0.5 + 145
	        },
	        children: [{
	          id: 'bg',
	          component: 'Scale9Sprite',
	          image: _resources2.default.img_go_black,
	          offsetX: 10,
	          offsetY: 10,
	          tilingWidth: 10,
	          tilingHeight: 10,
	          width: 420,
	          height: 240
	        }]
	      };
	
	      children.push(bgui);
	
	      var tempresources = [_resources2.default.icon_hongbao2, _resources2.default.icon_hongbao3, _resources2.default.icon_shuiguo2, _resources2.default.icon_shuiguo3];
	      var datas = [_gameGlobal2.default.playerdata.getRedbagCount,
	      // global.playerdata.centsNum - global.playerdata.getRedbagCount,
	      // global.playerdata.centsNum - global.playerdata.getRealRedbagCount,
	      _gameGlobal2.default.playerdata.lostRedBagCount, _gameGlobal2.default.playerdata.cutFruitCount, _gameGlobal2.default.playerdata.allFruitCount - _gameGlobal2.default.playerdata.cutFruitCount];
	      var fontList = ['rank_number_1', 'rank_number_5', 'rank_number_1', 'rank_number_5'];
	      var labelText = ['切中红包', '遗漏红包', '切中水果', '遗漏水果'];
	      for (var i = 0; i < 4; i++) {
	        var ui = DataUI({
	          bgimage: tempresources[i],
	          num: datas[i] + '',
	          labelText: labelText[i],
	          font: fontList[i],
	          position: {
	            x: 3 * 100 * -0.5 + i * 100 + _imports.Director.sharedDirector().screen.right * 0.5,
	            y: _imports.Director.sharedDirector().screen.bottom * 0.5 + 80
	          }
	        });
	        children.push(ui);
	      }
	
	      var iconlist = [_resources2.default.icon_mingzhong, _resources2.default.icon_lianji, _resources2.default.icon_shiliujic];
	      var labelList = ['命中率', '连击次数', '石榴加成'];
	      var hitsList = _gameGlobal2.default.playerdata.hitsLists;
	      var hitCount = 0;
	      for (var i = 1; i < hitsList.length; i++) {
	        hitCount += hitsList[i];
	      }
	      var superCutCount = _gameGlobal2.default.playerdata.cutSuperCount;
	      var superRate = '10%';
	      if (superCutCount >= 0 && superCutCount <= 19) {
	        superRate = '10%';
	      } else if (superCutCount >= 20 && superCutCount <= 29) {
	        superRate = '20%';
	      } else if (superCutCount >= 30 && superCutCount <= 35) {
	        superRate = '30%';
	      } else if (superCutCount >= 36 && superCutCount < 39) {
	        superRate = '40%';
	      } else if (superCutCount >= 39) {
	        superRate = '50%';
	      }
	      //       1-19 1.1*当前红包金额/分值
	      //
	      //       20-29 1.2*当前红包金额/分值
	      //
	      //       30-39 1.3*当前红包金额/分值
	      //
	      //       40-49 1.4*当前红包金额/分值
	      //
	      // ＞50 1.5*当前红包金额/分值
	      var nowList = [Math.round(_gameGlobal2.default.playerdata.cutFruitCount / _gameGlobal2.default.playerdata.allFruitCount * 100) + '%', hitCount + '次',
	      // superRate + '倍'
	      superRate];
	      var num = Math.round((spec.maxBuffAddition - 1) * 100);
	      var bestList = [spec.maxAccuracy + '%', spec.maxCombNum + '次', num + '%'];
	      for (var i = 0; i < 3; i++) {
	        var ui = DataUI1({
	          i: i,
	          icon: iconlist[i],
	          label: labelList[i],
	          now: nowList[i],
	          best: bestList[i],
	          position: {
	            x: 2 * 130 * -0.5 + i * 130 + _imports.Director.sharedDirector().screen.right * 0.5,
	            y: _imports.Director.sharedDirector().screen.bottom * 0.5 + 180
	          }
	
	        });
	        children.push(ui);
	      }
	      return children;
	    }()
	  });
	  that.node.addChild(_mainNode.node);
	
	  //粒子特效
	  //let isAction = false;
	  //global.events.on('addEndScore',(data)=>{
	  //  //if (isAction){
	  //  //  return
	  //  //}
	  //  //isAction = true;
	  //  //if (_emitters.hasOwnProperty('addEndScore')){
	  //  //}else {
	  //    _emitters['addEndScore'] = new PIXI.particles.Emitter(
	  //        that.node,
	  //        [PIXI.Texture.fromImage(resources.star2)],
	  //        particlefruitjson.addEndScore);
	  //  //}
	  //  _emitters['addEndScore'].updateOwnerPos(
	  //       2 * 150 * -0.5  + Director.sharedDirector().screen.right * 0.5,
	  //       Director.sharedDirector().screen.bottom * 0.5 + 180
	  //  );
	  //  let action = new TWEEN.Tween({
	  //    x: 2 * 150 * -0.5 + Director.sharedDirector().screen.right * 0.5,
	  //    y: Director.sharedDirector().screen.bottom * 0.5 + 180
	  //  })
	  //      .to({
	  //        x: Director.sharedDirector().screen.right * 0.5,
	  //        y: Director.sharedDirector().screen.bottom * 0.5 - 255
	  //      },1200)
	  //      .onUpdate(function () {
	  //        console.log('addadddaddadadadadadadadadaaaaaaaaaaaaaaaaaaaaaaaaaadadadada')
	  //
	  //        _emitters['addEndScore'].updateOwnerPos(this.x,this.y);
	  //      })
	  //      .onComplete(()=>{
	  //        //isAction = false;
	  //        _emitters['addEndScore'].emit = false;
	  //
	  //      });
	  //  action.start();
	  //  _emitters['addEndScore'].emit = true;
	  //});
	  var hitsList = _gameGlobal2.default.playerdata.hitsLists;
	  var hitCount = 0;
	  for (var i = 1; i < hitsList.length; i++) {
	    hitCount += hitsList[i];
	  }
	  _gameGlobal2.default.events.on('nodeScale', function () {
	    for (var _i = 0; _i < 3; _i++) {
	      if (_gameGlobal2.default.playerdata.cutSuperCount < 1 && hitCount != 0) {
	        for (var j = 0; j < 2; j++) {
	          that.scaleChange(_mainNode['icon' + j]);
	          that.scaleChange(_mainNode['label' + j]);
	        }
	      } else if (hitCount === 0 && _gameGlobal2.default.playerdata.cutSuperCount < 1) {
	        that.scaleChange(_mainNode['icon' + 0]);
	        that.scaleChange(_mainNode['label' + 0]);
	      } else {
	        that.scaleChange(_mainNode['icon' + _i]);
	        that.scaleChange(_mainNode['label' + _i]);
	      }
	    }
	  });
	  return that;
	};
	exports.default = GameOverDataShowLayer;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _resources = __webpack_require__(8);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Tips = function Tips(data, callback) {
	  var that = (0, _imports.Inherited)((0, _imports.ModelLayer)(true));
	  that.inheritOn('init', function () {
	    return true;
	  });
	
	  _imports.ResourceManager.load(_resources2.default.box_white, function () {
	    var _mainNode = _imports.UIControl.create({
	      id: 'mainNode',
	      component: 'Layout',
	      position: {
	        x: _imports.Director.sharedDirector().screen.right * 0.5,
	        y: _imports.Director.sharedDirector().screen.bottom * 0.5
	      },
	      children: [{
	        id: 'bg',
	        component: 'Scale9Sprite',
	        image: _resources2.default.box_white,
	        offsetX: 3,
	        offsetY: 20,
	        tilingWidth: 1,
	        tilingHeight: 1,
	        width: 340,
	        height: 200
	      }, {
	        id: 'label1',
	        component: 'Label',
	        text: '服务器数据异常',
	        position: {
	          x: 0,
	          y: -40
	        },
	        style: {
	          font: '20px Arial',
	          fill: '#000000'
	        }
	      }, {
	        id: 'labele2',
	        component: 'Label',
	        text: data,
	        position: {
	          x: 0,
	          y: 0
	        }
	      }, {
	        id: 'ok',
	        component: 'Button',
	        image: _resources2.default.zhuangban,
	        position: {
	          x: 0,
	          y: 60
	        },
	        children: [{
	          id: 'label',
	          component: 'Label',
	          text: '确定',
	          style: {
	            font: '24px Arial',
	            fill: '#ffffff'
	          }
	        }]
	
	      }]
	    }, function (button) {
	      if (button.id === 'ok') {
	
	        that.removeFromWorld();
	
	        if (callback) {
	          callback();
	        }
	      }
	    });
	
	    that.node.addChild(_mainNode.node);
	  });
	
	  return that;
	}; /**
	    * Created by chuhaoyuan on 2016/11/4.
	    */
	exports.default = Tips;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _gameGlobal = __webpack_require__(43);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CaromCount = function CaromCount() {
	  var that = [];
	  _gameGlobal2.default.events.on('caromCount', function (count) {
	    if (that[count - 1] === undefined) {
	      that[count - 1] = 1;
	    } else {
	      that[count - 1] += 1;
	    }
	
	    for (var i = 0; i < count - 1; i++) {
	      if (that[i] > 0) {
	        that[i] += 0;
	      } else {
	        that[i] = 0;
	      }
	    }
	    _gameGlobal2.default.playerdata.hitsLists = that;
	  });
	  return that;
	}; /**
	    * Created by yu on 16/11/17.
	    */
	exports.default = CaromCount;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _gameDefines = __webpack_require__(9);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2016/12/13.
	 */
	var EventType = {
	  enterWeb: 'enter_web',
	  clickStartGame: 'click_start_game',
	  beginLoading: 'begin_loading',
	  endLoading: 'end_loading'
	};
	var StatisticHelper = function StatisticHelper() {
	  var that = {};
	  var requestData = function requestData(method, params, cb) {
	    _imports.SRequest.post(_gameDefines2.default.gameHomeURL, method + '?uid=' + that.uid, {}, params, function (data) {
	      console.log('requestData', method);
	      if (data.status !== 'ok') {
	        console.error('requestData,Failed!', JSON.stringify(data));
	      } else {}
	
	      if (cb) {
	        cb(data);
	      }
	    });
	  };
	
	  that.enterWeb = function (uid) {
	    console.log('进入页面统计');
	    requestData(_gameDefines2.default.URLMethods.behaviorRecord, {
	      uid: uid,
	      event: EventType.enterWeb
	    });
	  };
	  that.clickStartGame = function (uid) {
	    console.log('点击开始游戏统计');
	    requestData(_gameDefines2.default.URLMethods.behaviorRecord, {
	      uid: uid,
	      event: EventType.clickStartGame
	    });
	  };
	  that.beginLoading = function (uid) {
	    console.log('开始加载统计');
	    requestData(_gameDefines2.default.URLMethods.behaviorRecord, {
	      uid: uid,
	      event: EventType.beginLoading
	    });
	  };
	  that.endLoading = function (uid) {
	    console.log('结束加载统计');
	    requestData(_gameDefines2.default.URLMethods.behaviorRecord, {
	      uid: uid,
	      event: EventType.endLoading
	    });
	  };
	  return that;
	};
	var statisticHelper = StatisticHelper();
	window.statisticHelper = statisticHelper;
	exports.default = statisticHelper;

/***/ }
/******/ ]);
//# sourceMappingURL=gameenter.all.js.map
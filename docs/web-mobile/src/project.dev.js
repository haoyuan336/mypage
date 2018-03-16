require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = "function" == typeof require && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }
      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, l, l.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof require && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  account: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5107djRRzFN24TxcrkHIgPQ", "account");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _playerData = require("./player-data");
    var _playerData2 = _interopRequireDefault(_playerData);
    var _simpleRequest = require("./../utility/simple-request");
    var _simpleRequest2 = _interopRequireDefault(_simpleRequest);
    var _defines = require("./../defines");
    var _defines2 = _interopRequireDefault(_defines);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Account = function Account() {
      var that = {};
      that.playerData = (0, _playerData2.default)();
      var _callback = function _callback(response, cb) {
        if ("ok" !== response.status) {
          console.error("requestData,Failed!", response.detail);
          cb && "function" == typeof cb && cb(response, null);
          return;
        }
        cb && "function" == typeof cb && cb(null, response.res);
      };
      var _request = function _request(path, queryParam, body, cb) {
        queryParam = queryParam || {};
        body ? _simpleRequest2.default.post(_defines2.default.gameUrl, path, queryParam, body, function(data) {
          _callback(data, cb);
        }) : _simpleRequest2.default.get(_defines2.default.gameUrl, path, queryParam, function(data) {
          _callback(data, cb);
        });
      };
      that.getPlayerInfo = function(uid, cb) {
        _request("/get_player_info", {
          uid: uid
        }, null, cb);
      };
      that.login = function(uid, password, cb) {
        _request("/login", {}, {
          uid: uid,
          password: password
        }, function(err, data) {
          err ? console.log("err = " + err) : cb(data);
        });
      };
      that.createRoom = function(uid, data, cb) {
        _request("/create_room", {
          uid: uid
        }, data, cb);
      };
      that.createAccount = function(uid, password, cb) {
        _request("/createAccount", {}, {
          uid: uid,
          password: password
        }, cb);
      };
      return that;
    };
    exports.default = Account;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "./../defines": "defines",
    "./../utility/simple-request": "simple-request",
    "./player-data": "player-data"
  } ],
  card: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99ed6Ha9+VKhLujfbBlmJyP", "card");
    "use strict";
    var Number = {
      A: 14,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "10": 10,
      "11": 11,
      "12": 12,
      "13": 13
    };
    var Color = {
      S: "Spade",
      H: "Heart",
      C: "Club",
      D: "Diamond"
    };
    var CardState = {
      Invalide: -1,
      BackGround: 1,
      FowardGround: 2
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        spriteAtlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        bgNode: {
          default: null,
          type: cc.Node
        },
        fgNode: {
          default: null,
          type: cc.Node
        },
        valueNode1: {
          default: null,
          type: cc.Node
        },
        iconNode: {
          default: null,
          type: cc.Node
        },
        smallIconNode: {
          default: null,
          type: cc.Node
        },
        fanpaiSound: {
          url: cc.AudioClip,
          default: null
        }
      },
      onLoad: function onLoad() {
        this.fgNode.active = false;
        this.state = CardState.Invalide;
        this.setState(CardState.BackGround);
      },
      setState: function setState(state) {
        if (this.state === state) return;
        switch (state) {
         case CardState.BackGround:
         case CardState.FowardGround:
        }
        this.state = state;
      },
      initWithData: function initWithData(data) {
        console.log("初始化一张牌" + JSON.stringify(data));
        this.cardData = data;
      },
      getNumberSpriteFrameStr: function getNumberSpriteFrameStr(data) {
        var numberValue = data.number;
        var flowerColor = data.color;
        var color = "";
        var number = "";
        color = "H" === flowerColor || "D" === flowerColor ? "red" : "black";
        number = "A" === numberValue ? "0" : parseInt(numberValue) - 1 + "";
        console.log("color" + color);
        console.log("number = " + number);
        return color + "_" + number;
      },
      getColorSpriteFrameStr: function getColorSpriteFrameStr(data) {
        var flowerColor = data.color;
        var str = "";
        switch (flowerColor) {
         case "S":
          str = "3";
          break;

         case "H":
          str = "2";
          break;

         case "C":
          str = "1";
          break;

         case "D":
          str = "0";
        }
        return str;
      },
      nowShowCardsValue: function nowShowCardsValue(cardData) {
        console.log("show card values = " + JSON.stringify(cardData));
        this.fgNode.active = true;
        var numberIcon = "b-" + this.getNumberSpriteFrameStr(cardData);
        var iconStr = "b-bigtag_" + this.getColorSpriteFrameStr(cardData);
        this.valueNode1.addComponent(cc.Sprite).spriteFrame = this.spriteAtlas.getSpriteFrame(numberIcon);
        this.iconNode.addComponent(cc.Sprite).spriteFrame = this.spriteAtlas.getSpriteFrame(iconStr);
        this.smallIconNode.addComponent(cc.Sprite).spriteFrame = this.spriteAtlas.getSpriteFrame(iconStr);
      },
      showCardsValue: function showCardsValue(cardData) {
        console.log("展示牌的值");
        if (this.state !== CardState.BackGround) return;
        var endScale = .9;
        if (cardData) {
          endScale = .6;
          this.cardData = cardData;
        }
        this.fgNode.active = true;
        var action1 = cc.scaleTo(.2, .2, this.node.scaleY);
        var seq = cc.sequence(action1, cc.callFunc(function() {
          var numberIcon = "b-" + this.getNumberSpriteFrameStr(this.cardData);
          var iconStr = "b-bigtag_" + this.getColorSpriteFrameStr(this.cardData);
          this.valueNode1.addComponent(cc.Sprite).spriteFrame = this.spriteAtlas.getSpriteFrame(numberIcon);
          this.iconNode.addComponent(cc.Sprite).spriteFrame = this.spriteAtlas.getSpriteFrame(iconStr);
          this.smallIconNode.addComponent(cc.Sprite).spriteFrame = this.spriteAtlas.getSpriteFrame(iconStr);
        }.bind(this)), cc.scaleTo(.2, endScale, this.node.scaleY));
        this.node.runAction(seq);
        this.setState(CardState.FowardGround);
        cc.audioEngine.play(this.fanpaiSound, false, 1);
      },
      getData: function getData() {
        return this.cardData;
      }
    });
    cc._RF.pop();
  }, {} ],
  createRoom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8354dBy/BFLO5vOQu8Dbxqr", "createRoom");
    "use strict";
    var _global = require("./../../global");
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        gameCountChoose: {
          default: null,
          type: cc.ToggleGroup
        },
        bankerChoose: {
          default: null,
          type: cc.ToggleGroup
        },
        lockCardChoose: {
          default: null,
          type: cc.ToggleGroup
        },
        rateChoose: {
          default: null,
          type: cc.ToggleGroup
        },
        specialChoose: {
          default: null,
          type: cc.ToggleGroup
        },
        buttonAudioClicp: {
          url: cc.AudioClip,
          default: null
        },
        tipsLabel: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        cc.loader.loadRes("config/game-config.json", function(err, result) {
          err ? console.log("err = " + err) : console.log("result = " + JSON.stringify(result));
          _this.gameConfig = result;
        });
      },
      onButtonClick: function onButtonClick(event, customData) {
        switch (customData) {
         case "close":
          this.node.destroy();
          break;

         case "createroom":
          this.createRoom();
        }
        _global2.default.account.playerData.soundOff || cc.audioEngine.play(this.buttonAudioClicp, false, 1);
      },
      createRoom: function createRoom() {
        var _this2 = this;
        var houseCardCast = 0;
        var gameTurnCount = 0;
        for (var i in this.gameCountChoose.toggleItems) {
          var toogle = this.gameCountChoose.toggleItems[i];
          console.log("toggle is checked = " + toogle.isChecked);
          if (toogle.isChecked) {
            var name = toogle.node.name;
            var config = this.gameConfig["game_turn_count"];
            houseCardCast = config[name].houseCast;
            gameTurnCount = config[name].count;
          }
        }
        if (houseCardCast > _global2.default.account.playerData.houseCardCount) {
          this.tipsLabel.string = "房卡数目不够，请前往充值";
          if (!this.tipsAction) {
            this.tipsAction = cc.sequence(cc.delayTime(2), cc.fadeOut(1), cc.callFunc(function() {
              _this2.tipsAction = void 0;
              _this2.tipsLabel.string = "";
              _this2.tipsLabel.node.opacity = 255;
            }));
            this.tipsLabel.node.runAction(this.tipsAction);
          }
          return;
        }
        cc.log("需要的房卡数是" + houseCardCast);
        cc.log("游戏的总局数" + gameTurnCount);
        var bankerRule = "";
        for (var _i in this.bankerChoose.toggleItems) {
          var toggle = this.bankerChoose.toggleItems[_i];
          true === toggle.isChecked && (bankerRule = toggle.node.name);
        }
        console.log("连庄规则" + bankerRule);
        var lockRule = "";
        for (var _i2 in this.lockCardChoose.toggleItems) {
          var _toggle = this.lockCardChoose.toggleItems[_i2];
          _toggle.isChecked && (lockRule = _toggle.node.name);
        }
        var rateCount = "";
        for (var _i3 in this.rateChoose.toggleItems) {
          var _toggle2 = this.rateChoose.toggleItems[_i3];
          _toggle2.isChecked && (rateCount = _toggle2.node.name);
        }
        cc.log("rate count = " + rateCount);
        var specialChoose = "";
        for (var _i4 in this.specialChoose.toggleItems) {
          var _toggle3 = this.specialChoose.toggleItems[_i4];
          _toggle3.isChecked && (specialChoose = _toggle3.node.name);
        }
        cc.log("special card = " + specialChoose);
        _global2.default.socketControl.createRoom({
          houseCardCount: houseCardCast,
          roundCount: gameTurnCount,
          lockRule: lockRule,
          rateRule: rateCount,
          specialType: specialChoose,
          bankerRule: bankerRule
        });
        this.node.destroy();
      }
    });
    cc._RF.pop();
  }, {
    "./../../global": "global"
  } ],
  defines: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d770t0xthPmKHHXDc9T54R", "defines");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var defines = {};
    defines.socketUrl = "http://47.52.247.115:3002";
    defines.configMap = {
      gameConfig: "/config/game-config",
      otherConfig: "/config/other-config",
      playerNodePos: "/config/player-node-pos-config",
      seatConfig: "/config/seat-config"
    };
    exports.default = defines;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  endRoomChooseModelLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70b78pvuGxD/7v4ZEhAkhiN", "endRoomChooseModelLayer");
    "use strict";
    var _global = require("./../../global");
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        tipLabel: {
          default: null,
          type: cc.Label
        },
        buttonAudioClicp: {
          url: cc.AudioClip,
          default: null
        }
      },
      onLoad: function onLoad() {
        this.tipLabel.string = "是否同意" + _global2.default.account.playerData.endRoomPlayerNickName + "立即解散房间!";
      },
      start: function start() {},
      onButtonClick: function onButtonClick(event, coustomData) {
        _global2.default.account.playerData.soundOff || cc.audioEngine.play(this.buttonAudioClicp, false, 1);
        switch (coustomData) {
         case "ok":
          console.log("确定");
          _global2.default.socketControl.chooseEndRoom("ok");
          this.node.destroy();
          break;

         case "cancel":
          console.log("取消");
          _global2.default.socketControl.chooseEndRoom("cancel");
          this.node.destroy();
        }
      }
    });
    cc._RF.pop();
  }, {
    "./../../global": "global"
  } ],
  endRoomModeLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96a71ozUv1FI77DNguJJpez", "endRoomModeLayer");
    "use strict";
    var _global = require("./../../global");
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        okButton: {
          default: null,
          type: cc.Node
        },
        cancelButton: {
          default: null,
          type: cc.Node
        },
        tipsLabel: {
          default: null,
          type: cc.Label
        },
        buttonAudioClicp: {
          url: cc.AudioClip,
          default: null
        }
      },
      onLoad: function onLoad() {},
      start: function start() {},
      onButtonClick: function onButtonClick(event, coustomData) {
        _global2.default.account.playerData.soundOff || cc.audioEngine.play(this.buttonAudioClicp, false, 1);
        switch (coustomData) {
         case "ok":
          console.log("ok 按钮");
          _global2.default.socketControl.endRoom();
          this.enterWaitJieSan();
          break;

         case "cancel":
          console.log("cancel 按钮");
          this.node.destroy();
          _global2.default.socketControl.cancelEndRoom();
        }
      },
      enterWaitJieSan: function enterWaitJieSan() {
        var action1 = cc.fadeOut(.4);
        this.okButton.runAction(action1);
        var action2 = cc.moveTo(.4, cc.p(0, -115));
        this.cancelButton.runAction(action2);
        this.tipsLabel.string = "取消解散!";
      }
    });
    cc._RF.pop();
  }, {
    "./../../global": "global"
  } ],
  "event-listener": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd4b1mUrWtGL5WsIWIN1Mk/", "event-listener");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventListener = function EventListener(obj) {
      var Register = {};
      obj.on = function(type, method) {
        Register.hasOwnProperty(type) ? Register[type].push(method) : Register[type] = [ method ];
      };
      obj.fire = function(type) {
        console.log("fire type = " + type);
        if (Register.hasOwnProperty(type)) {
          console.log("have handler");
          var handlerList = Register[type];
          console.log("事件长度" + handlerList.length);
          for (var i = 0; i < handlerList.length; i++) {
            var handler = handlerList[i];
            var args = [];
            for (var j = 1; j < arguments.length; j++) args.push(arguments[j]);
            handler.apply(this, args);
          }
        } else console.log("regishter no have " + type);
      };
      obj.removeListener = function(type, method) {
        if (!Register.hasOwnProperty(type)) return;
        var handlerList = Register[type];
        for (var i = 0; i < handlerList.length; i++) {
          console.log("handler list = " + handlerList[i]);
          console.log("method = " + method);
          if (handlerList[i] === method) {
            handlerList.splice(i, 1);
            console.log("删掉监听 " + i);
          }
        }
      };
      obj.removeType = function(type) {
        Register.hasOwnProperty(type) && (Register[type] = []);
      };
      obj.removeAllListeners = function() {
        console.log("删掉所有事件");
        Register = {};
      };
      return obj;
    };
    exports.default = EventListener;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  fightRecord: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "37fc2j4haVAMqqpBlAFtLFs", "fightRecord");
    "use strict";
    var _global = require("./../../global");
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        buttonAudioClicp: {
          url: cc.AudioClip,
          default: null
        },
        playerGameRecord: {
          default: null,
          type: cc.Prefab
        },
        connectNode: {
          default: null,
          type: cc.Node
        },
        roomRecord: {
          default: null,
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        _global2.default.socketControl.requestPlayerRecord();
        _global2.default.event.on("reback_player_game_record", function(data) {
          console.log("请求玩家游戏记录的返回" + JSON.stringify(data));
          for (var i = 0; i < data.length; i++) {
            var node = cc.instantiate(_this.playerGameRecord);
            node.parent = _this.connectNode;
            node.position = cc.p(0, -90 - 160 * i);
            node.getComponent("playerRecordCell").initWithData(_this, data[i]);
          }
          _this.connectNode.height = 160 * data.length + 10;
        });
        _global2.default.event.on("reback_room_game_record", function(data) {
          console.log("收到了房间的详细信息" + JSON.stringify(data));
          _this.isRequesting = false;
          var node = cc.instantiate(_this.roomRecord);
          node.parent = _this.node;
          node.getComponent("roomRecord").initWithData(data);
        });
        this.isRequesting = false;
      },
      onButtonClick: function onButtonClick(event, customData) {
        _global2.default.account.playerData.soundOff || cc.audioEngine.play(this.buttonAudioClicp, false, 1);
        switch (customData) {
         case "back":
          this.node.destroy();
        }
      },
      onDestroy: function onDestroy() {
        _global2.default.event.removeType("reback_player_game_record");
        _global2.default.event.removeType("reback_room_game_record");
      },
      getRoomRecord: function getRoomRecord(roomID) {
        console.log("roomId = " + roomID);
        if (this.isRequesting) return;
        this.isRequesting = true;
        this.requestRoomId = roomID;
        _global2.default.socketControl.requestRoomRecord(roomID);
      }
    });
    cc._RF.pop();
  }, {
    "./../../global": "global"
  } ],
  gameEndCell: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "40a4fqoTU5BTb7DezQs/d6P", "gameEndCell");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bgSpriteFrameList: {
          default: [],
          type: cc.SpriteFrame
        },
        bgNode: {
          default: null,
          type: cc.Node
        },
        fontList: {
          default: [],
          type: cc.Font
        },
        scoreLabel: {
          default: null,
          type: cc.Label
        },
        nickNameLabel: {
          default: null,
          type: cc.Label
        },
        idLabel: {
          default: null,
          type: cc.Label
        },
        headImage: {
          default: null,
          type: cc.Node
        }
      },
      initWithData: function initWithData(index, houseManager, data) {
        var _this = this;
        console.log("init with data = " + JSON.stringify(data));
        this.bgNode.getComponent(cc.Sprite).spriteFrame = 0 === index ? this.bgSpriteFrameList[0] : this.bgSpriteFrameList[1];
        data.score > 0 ? this.scoreLabel.font = this.fontList[0] : this.scoreLabel.font = this.fontList[1];
        this.nickNameLabel.string = data.nickName;
        this.idLabel.string = "ID" + data.uid;
        this.scoreLabel.string = data.score + "";
        cc.loader.load({
          url: data.avatar,
          type: "png"
        }, function(err, texture) {
          if (err) console.log("err = " + err); else {
            var oldWidth = _this.headImage.width;
            console.log("old width = " + oldWidth);
            _this.headImage.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            console.log("now width = " + _this.headImage.width);
          }
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  gameEndModelLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "55f4de6VAdGybcIBWdpbubD", "gameEndModelLayer");
    "use strict";
    var _global = require("./../../global");
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        gameResultCellPrefab: {
          default: null,
          type: cc.Prefab
        },
        cellPosNodeList: {
          default: [],
          type: cc.Node
        },
        buttonAudioClicp: {
          url: cc.AudioClip,
          default: null
        }
      },
      onLoad: function onLoad() {
        console.log("初始化数据");
        var playerData = _global2.default.account.playerData.gameEndResultData.playerData;
        var houseManagerID = _global2.default.account.playerData.gameEndResultData.houseManagerID;
        playerData.sort(function(a, b) {
          if (a.score < b.score) return true;
          return false;
        });
        for (var i = 0; i < playerData.length; i++) {
          var data = playerData[i];
          var node = cc.instantiate(this.gameResultCellPrefab);
          node.parent = this.node;
          node.position = this.cellPosNodeList[i].position;
          node.getComponent("gameEndCell").initWithData(i, houseManagerID, data);
        }
        if (cc.sys.isMobile) {
          var agent = anysdk.agentManager;
          this.sharePlugin = agent.getSharePlugin();
          this.sharePlugin.setListener(function(code, msg) {
            console.log("share " + code + "," + msg);
          }, this);
        }
      },
      onButtonClick: function onButtonClick(event, customData) {
        var _this = this;
        _global2.default.account.playerData.soundOff || cc.audioEngine.play(this.buttonAudioClicp, false, 1);
        switch (customData) {
         case "back":
          console.log("返回大厅");
          cc.director.loadScene("mainScene");
          break;

         case "share":
          console.log("微信分享");
          this.screenShoot(function(filePath) {
            _this.sharePlugin.share({
              imagePath: filePath,
              shareTo: 0
            });
          });
        }
      },
      screenShoot: function screenShoot(func) {
        var _this2 = this;
        var renderTexture;
        var fileName;
      }
    });
    cc._RF.pop();
  }, {
    "./../../global": "global"
  } ],
  gameIntroduction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c46fpzYr9LhJ3jyVG7+XcE", "gameIntroduction");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      onButtonClick: function onButtonClick(event, customData) {
        switch (customData) {
         case "back":
          this.node.destroy();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  gameScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb8efLAaTRJZ51qO0pfDlAo", "gameScene");
    "use strict";
    var _global = require("./../global");
    var _global2 = _interopRequireDefault(_global);
    var _defines = require("./../defines");
    var _defines2 = _interopRequireDefault(_defines);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        playerNodePrefab: {
          default: null,
          type: cc.Prefab
        },
        turnGameOverScoreResult: {
          default: null,
          type: cc.Prefab
        },
        gameEndResultPrefab: {
          default: null,
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {
        this.playerNodeList = [];
        var loadCount = 0;
        var index = 0;
        var loadEnd = function(key, result) {
          _global2.default.configMap[key] = result;
          loadCount++;
          if (loadCount === index) {
            console.log("加载完成" + JSON.stringify(_global2.default.configMap));
            this.initRoomData();
          }
        }.bind(this);
        var loadRes = function loadRes(key, value) {
          cc.loader.loadRes(value, function(err, result) {
            if (err) console.log("err = " + err); else {
              console.log("result = " + JSON.stringify(result));
              loadEnd(key, result);
            }
          }.bind(this));
        };
        for (var i in _defines2.default.configMap) {
          index++;
          loadRes(i, _defines2.default.configMap[i]);
        }
        _global2.default.event.on("re_enter_room", this.reEnterRoom.bind(this));
        _global2.default.event.on("sync_data", this.syncData.bind(this));
        _global2.default.event.on("add_player", function(data) {
          console.log("添加一个玩家" + JSON.stringify(data));
          this.addPlayerNode(data);
        }.bind(this));
        _global2.default.event.on("player_leave", this.removePlayerNode.bind(this));
        _global2.default.event.on("push_card", this.pushCard.bind(this));
        _global2.default.event.on("player_show_result", this.showPlayerResult.bind(this));
        _global2.default.event.on("turn_game_score_result", this.showTurnGameResult.bind(this));
        _global2.default.event.on("restart_game", this.restartGame.bind(this));
        _global2.default.event.on("some_player_ready", this.somePlayerReady.bind(this));
        _global2.default.event.on("game_end_result", this.gameEndResult.bind(this));
        _global2.default.event.on("player_choose_score", this.playerChooseScore.bind(this));
        _global2.default.event.on("room_end", this.roomEnd.bind(this));
        _global2.default.event.on("player_offline", this.playerOffLine.bind(this));
        _global2.default.event.on("player_online", this.playerOnLine.bind(this));
        _global2.default.event.on("sync_player_choose_score", this.syncPlayerChooseScore.bind(this));
      },
      reEnterRoom: function reEnterRoom() {
        cc.director.loadScene("gameScene");
      },
      initRoomData: function initRoomData() {
        var data = _global2.default.account.playerData.gameData;
        console.log("初始化游戏数据" + JSON.stringify(data));
        _global2.default.event.fire("init_room_info");
        this.initPlayerNodePosConfig({
          seatId: _global2.default.account.playerData.gameData.seatId
        });
        _global2.default.socketControl.requestSycnData();
      },
      initPlayerNodePosConfig: function initPlayerNodePosConfig(data) {
        var seatId = data.seatId;
        console.log("根据玩家所在的位置 重新排列" + seatId);
        var playerNodePosConfig = _global2.default.configMap.playerNodePos;
        this.currentPlayerNodePosConfig = [];
        switch (seatId) {
         case 0:
          this.currentPlayerNodePosConfig[0] = playerNodePosConfig["1"];
          this.currentPlayerNodePosConfig[1] = playerNodePosConfig["2"];
          this.currentPlayerNodePosConfig[2] = playerNodePosConfig["3"];
          this.currentPlayerNodePosConfig[3] = playerNodePosConfig["4"];
          break;

         case 1:
          this.currentPlayerNodePosConfig[0] = playerNodePosConfig["2"];
          this.currentPlayerNodePosConfig[1] = playerNodePosConfig["1"];
          this.currentPlayerNodePosConfig[2] = playerNodePosConfig["4"];
          this.currentPlayerNodePosConfig[3] = playerNodePosConfig["3"];
          break;

         case 2:
          this.currentPlayerNodePosConfig[0] = playerNodePosConfig["3"];
          this.currentPlayerNodePosConfig[1] = playerNodePosConfig["4"];
          this.currentPlayerNodePosConfig[2] = playerNodePosConfig["1"];
          this.currentPlayerNodePosConfig[3] = playerNodePosConfig["2"];
          break;

         case 3:
          this.currentPlayerNodePosConfig[0] = playerNodePosConfig["4"];
          this.currentPlayerNodePosConfig[1] = playerNodePosConfig["3"];
          this.currentPlayerNodePosConfig[2] = playerNodePosConfig["2"];
          this.currentPlayerNodePosConfig[3] = playerNodePosConfig["1"];
        }
      },
      syncData: function syncData(data) {
        console.log("sycn data" + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) this.addPlayerNode(data[i]);
      },
      addPlayerNode: function addPlayerNode(data) {
        var seatId = data.seatId;
        console.log("add player seat id = " + seatId);
        var playerNode = cc.instantiate(this.playerNodePrefab);
        playerNode.parent = this.node;
        playerNode.getComponent("playerNode").initPlayerNode(data, this.currentPlayerNodePosConfig[seatId]);
        this.playerNodeList.push(playerNode);
        _global2.default.event.fire("refersh_ui", {
          playerCount: this.playerNodeList.length
        });
      },
      removePlayerNode: function removePlayerNode(uid) {
        for (var i = 0; i < this.playerNodeList.length; i++) if (this.playerNodeList[i].getComponent("playerNode").getUid() === uid) {
          this.node.removeChild(this.playerNodeList[i]);
          this.playerNodeList[i].destroy();
          this.playerNodeList.splice(i, 1);
        }
        _global2.default.event.fire("refersh_ui", {
          playerCount: this.playerNodeList.length
        });
      },
      pushCard: function pushCard() {
        for (var i = 0; i < this.playerNodeList.length; i++) this.playerNodeList[i].getComponent("playerNode").pushCard();
      },
      showPlayerResult: function showPlayerResult(data) {
        console.log("展示游戏结果" + JSON.stringify(data) + "length = " + this.playerNodeList.length);
        for (var i = 0; i < this.playerNodeList.length; i++) {
          var player = this.playerNodeList[i];
          console.log("显示游戏结果");
          player.getComponent("playerNode").showCowCardResult(data);
        }
      },
      playerChooseScore: function playerChooseScore(data) {
        for (var i = 0; i < this.playerNodeList.length; i++) {
          var playerNode = this.playerNodeList[i];
          playerNode.getComponent("playerNode").playerChooseScore(data);
        }
      },
      showTurnGameResult: function showTurnGameResult(data) {
        console.log("收到了游戏结果的通知" + JSON.stringify(data));
        _global2.default.turnGameResult = data;
        var node = cc.instantiate(this.turnGameOverScoreResult);
        node.parent = this.node;
        for (var i = 0; i < this.playerNodeList.length; i++) var player = this.playerNodeList[i].getComponent("playerNode").updateScore(data);
      },
      restartGame: function restartGame() {},
      somePlayerReady: function somePlayerReady(data) {
        console.log("有些人准备了" + JSON.stringify(data));
        for (var i = 0; i < this.playerNodeList.length; i++) this.playerNodeList[i].getComponent("playerNode").somePlayerReady(data);
      },
      gameEndResult: function gameEndResult(data) {
        console.log("游戏结束的时候的结果" + JSON.stringify(data));
        _global2.default.account.playerData.gameEndResultData = data;
        var gameEndResult = cc.instantiate(this.gameEndResultPrefab);
        gameEndResult.parent = this.node;
      },
      update: function update(dt) {},
      roomEnd: function roomEnd() {
        cc.director.loadScene("mainScene");
      },
      playerOffLine: function playerOffLine(data) {
        console.log("有玩家掉线了" + JSON.stringify(data));
        for (var i = 0; i < this.playerNodeList.length; i++) {
          var player = this.playerNodeList[i];
          player.getComponent("playerNode").playerOffLine(data);
        }
      },
      playerOnLine: function playerOnLine(data) {
        console.log("玩家重连了");
        for (var i = 0; i < this.playerNodeList.length; i++) {
          var player = this.playerNodeList[i];
          player.getComponent("playerNode").playerOnLine(data);
        }
      },
      syncPlayerChooseScore: function syncPlayerChooseScore(data) {
        for (var i = 0; i < this.playerNodeList.length; i++) {
          var player = this.playerNodeList[i];
          player.getComponent("playerNode").syncPlayerChooseScore(data);
        }
      },
      onDestroy: function onDestroy() {
        _global2.default.event.removeAllListeners();
      }
    });
    cc._RF.pop();
  }, {
    "./../defines": "defines",
    "./../global": "global"
  } ],
  gameUINode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4f4c9f7TXVDCrrfauhqABcH", "gameUINode");
    "use strict";
    var _global = require("./../global");
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        houseIdLabel: {
          default: null,
          type: cc.Label
        },
        houseCountLabel: {
          default: null,
          type: cc.Label
        },
        bankerRuleLabel: {
          default: null,
          type: cc.Label
        },
        lockRuleLabel: {
          default: null,
          type: cc.Label
        },
        specialLabel: {
          default: null,
          type: cc.Label
        },
        rateLabel: {
          default: null,
          type: cc.Label
        },
        waitNode: {
          default: null,
          type: cc.Node
        },
        startGameButton: {
          default: null,
          type: cc.Node
        },
        lastRoundCountLabel: {
          default: null,
          type: cc.Label
        },
        endRoomPrefab: {
          default: null,
          type: cc.Prefab
        },
        endRoomChoosePrefab: {
          default: null,
          type: cc.Prefab
        },
        buttonAudioClicp: {
          url: cc.AudioClip,
          default: null
        }
      },
      onLoad: function onLoad() {
        _global2.default.event.on("init_room_info", this.initRoomInfo.bind(this));
        _global2.default.event.on("game_start", this.gameStart.bind(this));
        _global2.default.event.on("refersh_ui", this.referShUI.bind(this));
        _global2.default.event.on("init_game_data", this.initGameData.bind(this));
        _global2.default.event.on("show_end_room_choose", this.showEndRoomChoose.bind(this));
        _global2.default.event.on("player_cancel_end_room", this.playerCancelEndRoom.bind(this));
        if (cc.sys.isMobile) {
          var agent = anysdk.agentManager;
          this.sharePlugin = agent.getSharePlugin();
          this.sharePlugin.setListener(this.shareListener.bind(this), this);
        }
      },
      gameStart: function gameStart(data) {
        console.log("游戏开始了" + JSON.stringify(data));
        this.waitNode.active = false;
        this.lastRoundCountLabel.string = data.lastRoundCount + "";
      },
      shareListener: function shareListener(code, msg) {
        console.log("shaer code = " + code);
        console.log("share msh = " + msg);
        switch (code) {
         case anysdk.ShareResultCode.kShareSuccess:
          console.log("分享成功了");
          break;

         case anysdk.ShareResultCode.kShareFail:
          console.log("分享失败了");
          break;

         case anysdk.ShareResultCode.kShareCancel:
          console.log("取消分享了");
          break;

         case anysdk.ShareResultCode.kShareNetworkError:
          console.log("网络错误");
        }
      },
      initGameData: function initGameData(data) {
        console.log("初始化玩家数据" + JSON.stringify(data));
        console.log("剩余轮数是" + data.roundCount);
        this.lastRoundCountLabel.string = data.roundCount + "";
      },
      referShUI: function referShUI(data) {
        var playerCount = data.playerCount;
        console.log("house manager = " + _global2.default.account.playerData.gameData.houseManagerID);
        console.log("uid = " + _global2.default.account.playerData.uid);
        playerCount > 1 && _global2.default.account.playerData.gameData.houseManagerID === _global2.default.account.playerData.uid ? this.startGameButton.active = true : this.startGameButton.active && (this.startGameButton.active = false);
      },
      initRoomInfo: function initRoomInfo() {
        var data = _global2.default.account.playerData.gameData;
        console.log("init room info = " + JSON.stringify(data));
        for (var i in data) console.log("i = " + i + ":" + JSON.stringify(data[i]));
        var gameConfig = _global2.default.configMap.gameConfig;
        var nameConfig = _global2.default.configMap.otherConfig.name_config;
        console.log("name config = " + JSON.stringify(nameConfig));
        this.houseIdLabel.string = data.roomId;
        this.houseCountLabel.string = data.roundCount + "局";
        console.log("banker rule = " + data.bankerRule);
        this.bankerRuleLabel.string = nameConfig[data.bankerRule];
        this.lockRuleLabel.string = nameConfig[data.lockRule];
        var specialRule = gameConfig["special_card"][data.specicalType];
        console.log("specail rule  = " + JSON.stringify(specialRule));
        var specialStr = "";
        for (var _i in specialRule) {
          console.log("i = " + _i);
          var name = nameConfig[_i];
          console.log("name = " + name);
          specialStr += nameConfig[_i] + "X" + specialRule[_i];
        }
        console.log("special str = " + specialStr);
        this.specialLabel.string = specialStr;
        console.log("rate rule" + data.rateRule);
        var rateRuleStr = "";
        var rateRule = gameConfig["rate_count"][data.rateRule];
        console.log("rate rule = " + JSON.stringify(rateRule));
        for (var _i2 in rateRule) rateRuleStr += nameConfig[_i2] + "X" + rateRule[_i2];
        this.rateLabel.string = rateRuleStr;
      },
      showEndRoomChoose: function showEndRoomChoose() {
        console.log("展示结束房间选择的页面");
        this.endRoomChoose = cc.instantiate(this.endRoomChoosePrefab);
        this.endRoomChoose.parent = this.node;
      },
      onButtonClick: function onButtonClick(event, customData) {
        _global2.default.account.playerData.soundOff || cc.audioEngine.play(this.buttonAudioClicp, false, 1);
        switch (customData) {
         case "startGame":
          console.log("游戏开始按钮点击");
          _global2.default.socketControl.gameStart();
          break;

         case "end_room":
          console.log("解散房间");
          var node = cc.instantiate(this.endRoomPrefab);
          node.parent = this.node;
          break;

         case "share":
          console.log("分享按钮");
          this.sharePlugin.share({
            shareTo: "0",
            title: "小小牛牛",
            text: "我在小小牛牛房间号：" + _global2.default.account.playerData.gameData.roomId + ",一起来玩吧!",
            mediaType: "0"
          });
        }
      },
      playerCancelEndRoom: function playerCancelEndRoom() {
        this.endRoomChoose && this.endRoomChoose.destroy();
      }
    });
    cc._RF.pop();
  }, {
    "./../global": "global"
  } ],
  global: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a5e98lHMzNJ7aNvZ+iQrCKY", "global");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _account = require("./data/account");
    var _account2 = _interopRequireDefault(_account);
    var _eventListener = require("./utility/event-listener");
    var _eventListener2 = _interopRequireDefault(_eventListener);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var global = {};
    global.account = (0, _account2.default)();
    global.event = (0, _eventListener2.default)({});
    global.configMap = {};
    global.tips = function(node, prefab) {
      var tips = cc.instantiate(prefab);
      tips.parent = node;
    };
    exports.default = global;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "./data/account": "account",
    "./utility/event-listener": "event-listener"
  } ],
  joinRoom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79272ZTX/1BuoK8ALdZplhC", "joinRoom");
    "use strict";
    var _global = require("./../../global");
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        numLabels: {
          default: [],
          type: cc.Label
        },
        loadPrefab: {
          default: null,
          type: cc.Prefab
        },
        tipsLabel: {
          default: null,
          type: cc.Label
        },
        buttonAudioClicp: {
          url: cc.AudioClip,
          default: null
        }
      },
      onLoad: function onLoad() {
        this.str = "";
        _global2.default.event.on("join_room_fail", this.joinRoomFail.bind(this));
        this.tipsLabel.label = "";
      },
      joinRoomFail: function joinRoomFail(data) {
        var _this = this;
        console.log("join room 加入房间失败" + JSON.stringify(data));
        this.tipsLabel.string = data.msg;
        setTimeout(function() {
          _this.tipsLabel.string = "";
          _this.str = "";
          _this.referUI();
        }, 1e3);
        this.loadNode && this.loadNode.destroy();
      },
      onButtonClick: function onButtonClick(event, customData) {
        _global2.default.account.playerData.soundOff || cc.audioEngine.play(this.buttonAudioClicp, false, 1);
        parseInt(customData) >= 0 && parseInt(customData) <= 9 && (this.str += customData);
        switch (customData) {
         case "clear":
          this.str = "";
          break;

         case "back":
          this.str = this.str.substring(0, this.str.length - 1);
          break;

         case "close":
          this.node.destroy();
        }
        this.str.length > 6 && (this.str = this.str.substring(0, 6));
        this.referUI();
        if (6 === this.str.length) {
          this.loadNode = cc.instantiate(this.loadPrefab);
          this.loadNode.parent = this.node;
          _global2.default.socketControl.joinRoom(this.str);
          console.log("进入游戏" + this.str);
        }
      },
      referUI: function referUI() {
        for (var i = 0; i < this.numLabels.length; i++) this.numLabels[i].string = "";
        for (var _i = 0; _i < this.str.length; _i++) this.numLabels[_i].string = this.str[_i];
      },
      onDestroy: function onDestroy() {
        _global2.default.event.removeType("join_room_fail");
      }
    });
    cc._RF.pop();
  }, {
    "./../../global": "global"
  } ],
  loginControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae3cbGt8xRB14nJqrPMUbMo", "loginControl");
    "use strict";
    var _global = require("./../global");
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        loadingAnimatePre: {
          default: null,
          type: cc.Prefab
        },
        buttonAudioClicp: {
          url: cc.AudioClip,
          default: null
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        this.loadingAnimate = cc.instantiate(this.loadingAnimatePre);
        this.loadingAnimate.parent = this.node;
        setTimeout(function() {
          _this.loadingAnimate.destroy();
        }, 1e3);
        if (cc.sys.isMobile) {
          _global2.default.userPlugin = anysdk.agentManager.getUserPlugin();
          _global2.default.userPlugin.setListener(function(code, msg) {
            cc.log("on user result action" + code);
            cc.log("msg =" + msg);
            switch (code) {
             case anysdk.UserActionResultCode.kLoginSuccess:
              var userInfo = _global2.default.userPlugin.getUserInfo();
              _global2.default.account.playerData.init(userInfo);
              cc.director.loadScene("mainScene");
              break;

             case anysdk.UserActionResultCode.kLoginFail:
              cc.log("登陆失败");
              break;

             case anysdk.UserActionResultCode.kGetUserInfoSuccess:
              cc.log("获取用户数据成功" + JSON.stringify(msg));
              break;

             case anysdk.UserActionResultCode.kGetUserInfoFail:
              cc.log("获取用户数据失败" + JSON.stringify(msg));
              break;

             case anysdk.UserActionResultCode.kLogoutSuccess:
              cc.log("登出成功");
              cc.director.loadScene("loginScene");
            }
          }, this);
        }
      },
      onButtonClick: function onButtonClick(event, customData) {
        _global2.default.account.playerData.soundOff || cc.audioEngine.play(this.buttonAudioClicp, false, 1);
        switch (customData) {
         case "wxlogic":
          cc.log("微信登录");
          cc.director.loadScene("mainScene");
        }
      }
    });
    cc._RF.pop();
  }, {
    "./../global": "global"
  } ],
  mainSceneControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b23bUWU4NG1KuSZ5hev8+u", "mainSceneControl");
    "use strict";
    var _global = require("./../global");
    var _global2 = _interopRequireDefault(_global);
    var _socketControl = require("./../data/socket-control");
    var _socketControl2 = _interopRequireDefault(_socketControl);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    cc.Class(_defineProperty({
      extends: cc.Component,
      properties: {
        houseCardCountLabel: {
          default: null,
          type: cc.Label
        },
        nickNameLabel: {
          default: null,
          type: cc.Label
        },
        headImage: {
          default: null,
          type: cc.Node
        },
        uidLabel: {
          default: null,
          type: cc.Label
        },
        gameIntroductionPrefab: {
          default: null,
          type: cc.Prefab
        },
        fightRecordPrefab: {
          default: null,
          type: cc.Prefab
        },
        createRoomPrefab: {
          default: null,
          type: cc.Prefab
        },
        joinRoomPrefab: {
          default: null,
          type: cc.Prefab
        },
        beijiPrefab: {
          default: null,
          type: cc.Prefab
        },
        buttonAudioClicp: {
          url: cc.AudioClip,
          default: null
        },
        setLayerPrefab: {
          default: null,
          type: cc.Prefab
        },
        richText: cc.Component
      },
      onLoad: function onLoad() {
        var _this = this;
        _global2.default.event.on("login_success", this.loginSuccess.bind(this));
        _global2.default.event.on("enter_room", this.enterRoom.bind(this));
        _global2.default.event.on("re_enter_room", this.reEnterRoom.bind(this));
        if (void 0 === _global2.default.socketControl) _global2.default.socketControl = (0, 
        _socketControl2.default)(); else {
          this.nickNameLabel.string = _global2.default.account.playerData.nickName;
          this.uidLabel.string = _global2.default.account.playerData.uid;
          this.houseCardCountLabel.string = _global2.default.account.playerData.houseCardCount + "";
          var remoteUrl = _global2.default.account.playerData.avatarUrl;
          cc.loader.load({
            url: remoteUrl,
            type: "png"
          }, function(err, texture) {
            if (err) console.log("err = " + err); else {
              var oldWidth = _this.headImage.width;
              console.log("old width = " + oldWidth);
              _this.headImage.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
              console.log("now width = " + _this.headImage.width);
            }
          });
        }
        if (cc.sys.isMobile) {
          var agent = anysdk.agentManager;
          this.sharePlugin = agent.getSharePlugin();
          this.sharePlugin.setListener(this.shareListener.bind(this), this);
        }
      },
      shareListener: function shareListener(code, msg) {
        console.log("shaer code = " + code);
        console.log("share msh = " + msg);
        switch (code) {
         case anysdk.ShareResultCode.kShareSuccess:
          console.log("分享成功了");
          break;

         case anysdk.ShareResultCode.kShareFail:
          console.log("分享失败了");
          break;

         case anysdk.ShareResultCode.kShareCancel:
          console.log("取消分享了");
          break;

         case anysdk.ShareResultCode.kShareNetworkError:
          console.log("网络错误");
        }
      },
      reEnterRoom: function reEnterRoom() {
        cc.director.loadScene("gameScene");
      },
      loginSuccess: function loginSuccess(data) {
        var _this2 = this;
        this.nickNameLabel.string = data.nickName;
        this.uidLabel.string = data.uid;
        this.houseCardCountLabel.string = data.houseCardCount + "";
        _global2.default.account.playerData.houseCardCount = data.houseCardCount;
        var remoteUrl = _global2.default.account.playerData.avatarUrl;
        cc.loader.load({
          url: remoteUrl,
          type: "png"
        }, function(err, texture) {
          if (err) console.log("err = " + err); else {
            var oldWidth = _this2.headImage.width;
            console.log("old width = " + oldWidth);
            _this2.headImage.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            console.log("now width = " + _this2.headImage.width);
          }
        });
      },
      onDestroy: function onDestroy() {
        _global2.default.event.removeAllListeners();
      },
      enterRoom: function enterRoom() {
        cc.log("enter room");
        cc.director.loadScene("gameScene");
      },
      onButtonClick: function onButtonClick(event, customData) {
        _global2.default.account.playerData.soundOff || cc.audioEngine.play(this.buttonAudioClicp, false, 1);
        switch (customData) {
         case "wanfa":
          cc.log("打开玩家界面");
          var gameIntroductionNode = cc.instantiate(this.gameIntroductionPrefab);
          gameIntroductionNode.parent = this.node;
          break;

         case "fightrecord":
          var figheRecord = cc.instantiate(this.fightRecordPrefab);
          figheRecord.parent = this.node;
          break;

         case "createRoom":
          var createRoom = cc.instantiate(this.createRoomPrefab);
          createRoom.parent = this.node;
          break;

         case "joinRoom":
          console.log("join room ");
          var joinRoom = cc.instantiate(this.joinRoomPrefab);
          joinRoom.parent = this.node;
          break;

         case "logout":
          console.log("login out");
          _global2.default.userPlugin.logout();
          break;

         case "set":
          var setLayer = cc.instantiate(this.setLayerPrefab);
          setLayer.parent = this.node;
        }
      },
      update: function update(dt) {
        this.houseCardCountLabel.string = _global2.default.account.playerData.houseCardCount + "";
      }
    }, "onDestroy", function onDestroy() {
      _global2.default.event.removeAllListeners();
    }));
    cc._RF.pop();
  }, {
    "./../data/socket-control": "socket-control",
    "./../global": "global"
  } ],
  "player-data": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b4bf0WZij9FQITEIa+vIGGJ", "player-data");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PlayerData = function PlayerData() {
      var that = {};
      that.uid = "2345234";
      var auth = "12000001";
      for (var i = 0; i < 7; i++) auth += Math.floor(10 * Math.random());
      that.auth = auth;
      that.nickName = "小明" + Math.floor(10 * Math.random());
      that.avatarUrl = "http://pic2.ooopic.com/12/22/94/30b1OOOPIC5c.jpg";
      that.housecard = 0;
      that.userInfo = {};
      that.init = function(data) {
        console.log("init data = " + data);
        data = JSON.parse(data);
        console.log("data = " + JSON.stringify(data));
        that.auth = data.uid;
        that.nickName = data.nickName;
        that.avatarUrl = data.avatarUrl;
        console.log("nick name = " + that.nickName);
        console.log("avatarUrl =  " + that.avatarUrl);
      };
      var cards = [ 1, 2, 3, 4, 7, 9 ];
      return that;
    };
    exports.default = PlayerData;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  playerNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "64b25ID/KJFjIoDVvtArarZ", "playerNode");
    "use strict";
    var _global = require("../../global");
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var PlayerNodeState = {
      Invalide: -1,
      Waitting: 1,
      Ready: 2,
      PushCard: 3,
      ShowCard: 4,
      Default: 5
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        headImage: {
          default: null,
          type: cc.Node
        },
        nickNameNode: {
          default: null,
          type: cc.Node
        },
        nickNameLabel: {
          default: null,
          type: cc.Label
        },
        scoreLabel: {
          default: null,
          type: cc.Label
        },
        bankerIconNode: {
          default: null,
          type: cc.Node
        },
        readyIconNode: {
          default: null,
          type: cc.Node
        },
        leaveIconNode: {
          default: null,
          type: cc.Node
        },
        cardPrefab: {
          default: null,
          type: cc.Prefab
        },
        startPosNode: {
          default: null,
          type: cc.Node
        },
        endPosNode: {
          default: null,
          type: cc.Node
        },
        cowValueSpriteFrames: {
          default: [],
          type: cc.SpriteFrame
        },
        scoreStartPos: {
          default: null,
          type: cc.Node
        },
        chooseScoreBg: {
          default: null,
          type: cc.Node
        },
        chooseScoreLabel: {
          default: null,
          type: cc.Label
        },
        ipLabel: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        this.state = PlayerNodeState.Invalide;
        this.cardsList = [];
        this.setState(PlayerNodeState.Waitting);
        this.isShowIping = false;
        this.ipLabel.node.opacity = 0;
      },
      initPlayerNode: function initPlayerNode(data, config) {
        console.log("init player node = " + JSON.stringify(data));
        console.log("config = " + JSON.stringify(config));
        this.ipLabel.string = "ip" + data.ip.substring(6, data.ip.length);
        this.uid = data.uid;
        var widget = this.addComponent(cc.Widget);
        var widgetConfig = config["widget"];
        for (var i in widgetConfig) {
          var direction = widgetConfig[i].direction;
          var offset = widgetConfig[i].offset;
          switch (direction) {
           case "left":
            widget.isAlignLeft = true;
            break;

           case "right":
            widget.isAlignRight = true;
            break;

           case "top":
            widget.isAlignTop = true;
            break;

           case "bottom":
            widget.isAlignBottom = true;
          }
          widget[direction] = offset;
        }
        widget.updateAlignment();
        this.initPlayerNodeUi(data, config);
      },
      initPlayerNodeUi: function initPlayerNodeUi(data, config) {
        var _this = this;
        var position = config.nickNameNodePos;
        console.log("nick name node position = " + JSON.stringify(position));
        this.nickNameNode.position = cc.p(position.x, position.y);
        this.bankerIconNode.position = cc.p(config.bankerIconPos.x, config.bankerIconPos.y);
        this.scoreLabel.string = data.score;
        this.nickNameLabel.string = data.nickName;
        this.bankerIconNode.active = false;
        this.startPosNode.position = cc.p(config.cardsStartPos.x, config.cardsStartPos.y);
        this.endPosNode.position = cc.p(config.cardsEndPos.x, config.cardsEndPos.y);
        this.chooseScoreBg.position = cc.p(config.chooseScoreBgEndPos.x, config.chooseScoreBgEndPos.y);
        this.chooseScoreLabel.node.position = cc.p(config.chooseScoreNodePos.x, config.chooseScoreNodePos.y);
        console.log("头像地址是 =" + data.avatar);
        var remoteUrl = data.avatar;
        cc.loader.load({
          url: remoteUrl,
          type: "png"
        }, function(err, texture) {
          if (err) console.log("err = " + err); else {
            var oldWidth = _this.headImage.width;
            console.log("old width = " + oldWidth);
            _this.headImage.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            console.log("now width = " + _this.headImage.width);
          }
        });
      },
      pushCard: function pushCard() {
        console.log("player node push card");
        this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
          this.setState(PlayerNodeState.PushCard);
        }.bind(this))));
      },
      getUid: function getUid() {
        return this.uid;
      },
      gameStart: function gameStart() {
        console.log("game start");
        console.log("uid  = " + this.uid);
        console.log("banker id = " + _global2.default.account.playerData.bankerID);
        this.setState(PlayerNodeState.Waitting);
      },
      setState: function setState(state) {
        if (this.state === state) return;
        switch (state) {
         case PlayerNodeState.Waitting:
          this.readyIconNode.active = false;
          this.bankerIconNode.active = false;
          this.leaveIconNode.active = false;
          this.chooseScoreBg.active = false;
          break;

         case PlayerNodeState.Ready:
          console.log("准备状态");
          this.bankerIconNode.active = false;
          this.readyIconNode.active = true;
          this.chooseScoreBg.active = false;
          for (var i = 0; i < this.cardsList.length; i++) this.node.removeChild(this.cardsList[i]);
          this.cardsList = [];
          !this.cowValueNode || this.cowValueNode.destroy();
          break;

         case PlayerNodeState.PushCard:
          _global2.default.account.playerData.uid !== this.uid && this.createFiveCards();
          this.readyIconNode.active = false;
          this.getUid() === _global2.default.account.playerData.bankerID && (this.bankerIconNode.active = true);
          break;

         case PlayerNodeState.ShowCard:
          if (_global2.default.account.playerData.uid !== this.uid) {
            this.showAllCardsValue(this.cowCardResult.cardsList);
            this.showCowValue(this.cowCardResult.cowValue);
          }
          break;

         case PlayerNodeState.Default:
        }
        this.state = state;
      },
      createFiveCards: function createFiveCards() {
        var index = 0;
        for (var i = 0; i < 5; i++) this.createOneFiveCard(.1 * i, cc.pAdd(this.endPosNode.position, cc.p(30 * i - 60, 0)), function() {
          index++;
          5 === index && console.log("加载完成");
        });
      },
      createOneFiveCard: function createOneFiveCard(delayTime, pos, cb) {
        var card = cc.instantiate(this.cardPrefab);
        card.scale = 0;
        card.parent = this.node;
        card.position = this.startPosNode.position;
        var seq = cc.sequence(cc.delayTime(delayTime), cc.callFunc(function() {
          var action1 = cc.moveTo(.4, pos);
          var action2 = cc.scaleTo(.4, .6);
          card.runAction(action1);
          card.runAction(action2);
          cb && cb();
        }));
        card.runAction(seq);
        this.cardsList.push(card);
      },
      getIsBanker: function getIsBanker() {
        if (_global2.default.account.playerData.uid === _global2.default.account.playerData.bankerID) return true;
        return false;
      },
      showGameResult: function showGameResult(data) {},
      showAllCardsValue: function showAllCardsValue(data) {
        if (0 === this.cardsList.length) {
          console.log("列表长度");
          return;
        }
        console.log("shao all cards value");
        for (var i = 0; i < data.length; i++) {
          var cardData = data[i];
          var card = this.cardsList[i];
          card.getComponent("card").showCardsValue(cardData);
        }
      },
      showCowValue: function showCowValue(data) {
        var cowValueConfig = _global2.default.configMap.otherConfig.value_config;
        var cowNumber = cowValueConfig[data];
        var spriteFrame = this.cowValueSpriteFrames[cowNumber];
        this.cowValueNode = new cc.Node("cowNode");
        this.cowValueNode.parent = this.node;
        this.cowValueNode.scale = .6;
        this.cowValueNode.position = this.endPosNode.position;
        this.cowValueNode.addComponent(cc.Sprite).spriteFrame = spriteFrame;
      },
      showCowCardResult: function showCowCardResult(data) {
        this.cowCardResult = data;
        console.log("cow card result" + JSON.stringify(data));
        this.uid === data.uid && this.setState(PlayerNodeState.ShowCard);
      },
      setDefaultState: function setDefaultState() {
        this.setState(PlayerNodeState.Default);
      },
      somePlayerReady: function somePlayerReady(data) {
        this.uid === data.uid && this.setState(PlayerNodeState.Ready);
      },
      playerChooseScore: function playerChooseScore(data) {
        var _this2 = this;
        if (this.getUid() === data.uid) {
          this.chooseScoreBg.active = true;
          this.chooseScoreBg.scale = 2;
          var action = cc.scaleTo(.4, 1);
          action.easing(cc.easeBackInOut());
          this.chooseScoreBg.runAction(cc.sequence(action, cc.callFunc(function() {
            _this2.chooseScoreLabel.string = data.score + "";
          })));
        }
      },
      updateScore: function updateScore(data) {
        console.log("update score = " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
          var playerData = data[i];
          playerData.uid === this.uid && (this.scoreLabel.string = playerData.score + "");
        }
      },
      playerOffLine: function playerOffLine(data) {
        data.uid === this.uid && (this.leaveIconNode.active = true);
      },
      playerOnLine: function playerOnLine(data) {
        console.log("玩家重新链接了" + JSON.stringify(data));
        console.log("this uid = " + this.uid);
        data.uid === this.uid && (this.leaveIconNode.active = false);
        if (data.uid === _global2.default.account.playerData.bankerID) {
          this.bankerIconNode.active = true;
          this.chooseScoreBg.active = false;
        } else {
          this.bankerIconNode.active = false;
          this.chooseScoreBg.active = true;
        }
      },
      syncPlayerChooseScore: function syncPlayerChooseScore(data) {
        for (var i = 0; i < data.length; i++) this.playerChooseScore(data[i]);
      },
      onButtonClick: function onButtonClick(event, customData) {
        var _this3 = this;
        switch (customData) {
         case "click":
          console.log("点击头像了");
          if (this.isShowIping) return;
          this.isShowIping = true;
          this.ipLabel.node.opacity = 255;
          var seq = cc.sequence(cc.delayTime(1), cc.fadeOut(1), cc.callFunc(function() {
            _this3.isShowIping = false;
          }));
          this.ipLabel.node.runAction(seq);
        }
      },
      onDestroy: function onDestroy() {}
    });
    cc._RF.pop();
  }, {
    "../../global": "global"
  } ],
  playerRecordCell: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c7179zRy2JLa4PEJkpVoyUS", "playerRecordCell");
    "use strict";
    var _global = require("../../global");
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        winIcon: {
          default: null,
          type: cc.Node
        },
        loseIcon: {
          default: null,
          type: cc.Node
        },
        roomIdLabel: {
          default: null,
          type: cc.Label
        },
        scoreLabelList: {
          default: [],
          type: cc.Label
        },
        timeLabel: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        for (var i = 0; i < this.scoreLabelList.length; i++) this.scoreLabelList[i].string = "";
      },
      initWithData: function initWithData(parent, data) {
        var recordData = JSON.parse(data.data);
        console.log("初始化一些数据" + JSON.stringify(recordData));
        this.roomIdLabel.string = recordData.roomId;
        this.timeLabel.string = recordData.endTime;
        this.roomID = recordData.roomId;
        var playerData = recordData.playerData;
        for (var i = 0; i < playerData.length; i++) {
          var pd = playerData[i];
          this.scoreLabelList[i].string = pd.nickName + "     " + pd.score;
          pd.uid === _global2.default.account.playerData.uid && (pd.score > 0 ? this.winIcon.active = true : this.loseIcon.active = true);
        }
        this.parentJS = parent;
      },
      onButtonClick: function onButtonClick(event, customData) {
        switch (customData) {
         case "check":
          console.log("检查");
          this.parentJS.getRoomRecord(this.roomID);
        }
      }
    });
    cc._RF.pop();
  }, {
    "../../global": "global"
  } ],
  playerUINode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7f157CSa8VG1IdU1MITjdWA", "playerUINode");
    "use strict";
    var _global = require("./../global");
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var PlayerStateLabelStr = {
      waitready: "等待其他人准备:",
      waitplayerchooserate: "等待其他人下注:",
      chooserate: "请选择下注分数:",
      qingliangpai: "请亮牌:",
      waitplayerliangpai: "还有人在苦思冥想:",
      newgame: "新的牌局即将开始:"
    };
    var PlayerUiNodeState = {
      Invalide: -1,
      Default: 5,
      ChooseRate: 1,
      WaitChooseRate: 2,
      ChooseCow: 3,
      ShowCow: 4,
      ShowScore: 5,
      pushCard: 6,
      Reset: 7
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        cardPrefab: {
          default: null,
          type: cc.Prefab
        },
        cardsNode: {
          default: null,
          type: cc.Node
        },
        rateButtons: {
          default: null,
          type: cc.Node
        },
        chooseCowButtons: {
          default: null,
          type: cc.Node
        },
        showCowValueButton: {
          default: null,
          type: cc.Node
        },
        noCowSpriteFrame: {
          default: null,
          type: cc.SpriteFrame
        },
        haveCowSpriteFrame: {
          default: null,
          type: cc.SpriteFrame
        },
        cowValueBg: {
          default: null,
          type: cc.Node
        },
        cowValue: {
          default: null,
          type: cc.Node
        },
        cowValueSpriteFrames: {
          default: [],
          type: cc.SpriteFrame
        },
        cowValueSounds: {
          default: [],
          url: cc.AudioClip
        },
        playerStateLabel: {
          default: null,
          type: cc.Label
        },
        cardsStartPos: {
          default: null,
          type: cc.Node
        },
        buttonAudioClicp: {
          url: cc.AudioClip,
          default: null
        },
        fapaiSound: {
          url: cc.AudioClip,
          default: null
        }
      },
      onLoad: function onLoad() {
        this.cardsList = [];
        _global2.default.event.on("push_card", this.pushCard.bind(this));
        _global2.default.event.on("player_choose_score", this.playerChooseScore.bind(this));
        _global2.default.event.on("self_show_cow_result", this.tipCowResult.bind(this));
        _global2.default.event.on("restart_game", this.restarGame.bind(this));
        _global2.default.event.on("show_choose_cow_ui", this.chooseCowUI.bind(this));
        this.node.active = false;
        this.state = PlayerUiNodeState.Invalide;
        this.setState(PlayerUiNodeState.Default);
        this.playerStateStr = "";
        this.timeCutDown = 0;
      },
      restarGame: function restarGame() {
        this.setState(PlayerUiNodeState.Reset);
      },
      playerChooseScore: function playerChooseScore(data) {},
      pushCard: function pushCard(data) {
        console.log("push card");
        this.cardsDataList = data;
        this.setState(PlayerUiNodeState.pushCard);
      },
      chooseCowUI: function chooseCowUI() {
        console.log("显示选择牛的ui");
        this.setState(PlayerUiNodeState.ChooseCow);
      },
      tipCowResult: function tipCowResult(data) {
        console.log("tip cow result = " + JSON.stringify(data));
        var value = data.value;
        console.log("value = " + value);
        this.showCowValueButton.active = true;
        if ("cow0" === value) {
          console.log("美妞");
          this.showCowValueButton.getComponent(cc.Sprite).spriteFrame = this.noCowSpriteFrame;
        } else {
          console.log("有妞");
          this.showCowValueButton.getComponent(cc.Sprite).spriteFrame = this.haveCowSpriteFrame;
        }
        var cardResult = data.cardsList;
        for (var i = 0; i < cardResult.length; i++) {
          var cardData = cardResult[i];
          for (var j = 0; j < this.cardsList.length; j++) {
            var card = this.cardsList[j];
            var currentData = card.getComponent("card").getData();
            console.log("current data = " + JSON.stringify(currentData));
            console.log("card data = " + JSON.stringify(cardData));
            if (currentData.number === cardData.number && currentData.color === cardData.color) {
              console.log("两张牌相等");
              card.position = cc.p(card.position.x, 20);
            }
          }
        }
        this.cowValueBg.active = true;
        var value_config = _global2.default.configMap["otherConfig"].value_config;
        console.log("value config = " + JSON.stringify(value_config));
        var cowNumber = value_config[value];
        console.log("cow number = " + cowNumber);
        this.cowValue.getComponent(cc.Sprite).spriteFrame = this.cowValueSpriteFrames[cowNumber];
        cowNumber < 11 && cc.audioEngine.play(this.cowValueSounds[cowNumber], false, 1);
        this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
          console.log("一秒之后 运行别的逻辑");
          for (var _i = 0; _i < this.cardsList.length; _i++) {
            var _card = this.cardsList[_i];
            _card.position = cc.p(_card.position.x, 0);
          }
          var tempList = [ this.cardsNode, this.cowValueBg ];
          for (var _i2 = 0; _i2 < tempList.length; _i2++) {
            var action1 = cc.moveTo(.2, cc.p(0, -100));
            var action2 = cc.scaleTo(.3, .6, .6);
            action2.easing(cc.easeBackInOut());
            tempList[_i2].runAction(action1);
            tempList[_i2].runAction(action2);
          }
        }.bind(this))));
      },
      createFiveCard: function createFiveCard(data, cb) {
        this.node.active = true;
        console.log("show card = " + JSON.stringify(data));
        var index = 0;
        for (var i = 0; i < data.length; i++) this.createOneCardWithAction(.1 * i, data[i], cc.p(135 * i - 270, 0), function() {
          index++;
          index === data.length && cb && cb();
        });
      },
      showCardsBg: function showCardsBg() {},
      showThreeCardValue: function showThreeCardValue() {
        for (var i = 0; i < 3; i++) this.cardsList[i].getComponent("card").showCardsValue();
      },
      showFourCardValue: function showFourCardValue() {
        for (var i = 0; i < 4; i++) this.cardsList[i].getComponent("card").showCardsValue();
      },
      showAllCardsValue: function showAllCardsValue() {
        for (var i = 0; i < this.cardsList.length; i++) this.cardsList[i].getComponent("card").showCardsValue();
      },
      setState: function setState(state) {
        if (this.state === state) return;
        switch (state) {
         case PlayerUiNodeState.Default:
          this.chooseCowButtons.active = false;
          this.rateButtons.active = false;
          this.cowValueBg.active = false;
          this.showCowValueButton.active = false;
          break;

         case PlayerUiNodeState.pushCard:
          console.log("player state push card");
          this.createFiveCard(this.cardsDataList, function() {
            if (this.getIsBanker()) {
              this.showAllCardsValue();
              this.timeCutDown = 6;
              this.playerStateStr = PlayerStateLabelStr.waitplayerchooserate;
            } else {
              this.setState(PlayerUiNodeState.ChooseRate);
              switch (_global2.default.account.playerData.gameData.lockRule) {
               case "lock_card_all":
                break;

               case "lock_card_1":
                this.showFourCardValue();
                break;

               case "lock_card_2":
                this.showThreeCardValue();
              }
              this.timeCutDown = 6;
              this.playerStateStr = PlayerStateLabelStr.chooserate;
            }
          }.bind(this));
          break;

         case PlayerUiNodeState.ChooseRate:
          console.log("进入选择倍数的ui");
          this.rateButtons.active = true;
          break;

         case PlayerUiNodeState.WaitChooseRate:
          this.rateButtons.active = false;
          this.showAllCardsValue();
          break;

         case PlayerUiNodeState.ChooseCow:
          console.log("进入选择牛的状态");
          this.showAllCardsValue();
          this.chooseCowButtons.active = true;
          this.playerStateStr = PlayerStateLabelStr.qingliangpai;
          this.timeCutDown = 13;
          break;

         case PlayerUiNodeState.ShowScore:
          break;

         case PlayerUiNodeState.Reset:
          console.log("玩家自己的页面设置成初始状态");
          for (var i = 0; i < this.cardsList.length; i++) this.cardsNode.removeChild(this.cardsList[i]);
          this.cardsList = [];
          this.cowValueBg.active = false;
          this.cowValueBg.scale = 1;
          this.cardsNode.scale = 1;
          this.cardsNode.position = cc.p(0, -250);
          this.cowValueBg.position = cc.p(0, -250);
          this.chooseCowButtons.active = false;
          this.rateButtons.active = false;
          this.showCowValueButton.active = false;
        }
        this.state = state;
      },
      onButtonClick: function onButtonClick(event, customData) {
        _global2.default.account.playerData.soundOff || cc.audioEngine.play(this.buttonAudioClicp, false, 1);
        if (-1 !== customData.indexOf("rate")) {
          console.log("玩家点击了倍数的按钮");
          this.setState(PlayerUiNodeState.WaitChooseRate);
          this.timeCutDown = 0;
        }
        switch (customData) {
         case "rate_1":
          _global2.default.socketControl.chooseScore(1);
          break;

         case "rate_2":
          _global2.default.socketControl.chooseScore(2);
          break;

         case "rate_3":
          _global2.default.socketControl.chooseScore(3);
          break;

         case "rate_4":
          _global2.default.socketControl.chooseScore(4);
          break;

         case "rate_5":
          _global2.default.socketControl.chooseScore(5);
          break;

         case "tipsButton":
          _global2.default.socketControl.tipsCow();
          this.timeCutDown = 0;
        }
      },
      getIsBanker: function getIsBanker() {
        if (_global2.default.account.playerData.uid === _global2.default.account.playerData.bankerID) return true;
        return false;
      },
      createOneCardWithAction: function createOneCardWithAction(delayTime, data, pos, cb) {
        var node = cc.instantiate(this.cardPrefab);
        node.scale = {
          x: .1,
          y: .1
        };
        node.parent = this.cardsNode;
        node.getComponent("card").initWithData(data);
        node.position = this.cardsStartPos.position;
        this.cardsList.push(node);
        var action = cc.sequence(cc.delayTime(delayTime), cc.callFunc(function() {
          cc.audioEngine.play(this.fapaiSound, false, 1);
          var moveTo = cc.moveTo(.2, pos);
          var scaleTo = cc.scaleTo(.2, .9, .9);
          node.runAction(scaleTo);
          node.runAction(cc.sequence(moveTo, cc.delayTime(.1), cc.callFunc(function() {
            cb && cb();
          })));
        }.bind(this)));
        node.runAction(action);
      },
      update: function update(dt) {
        if (this.timeCutDown > 0) {
          this.timeCutDown -= dt;
          if (this.timeCutDown <= 0) {
            console.log("倒计时结束");
            this.timeCutDownEnd();
            this.timeCutDown = 0;
          }
          this.playerStateLabel.string = this.playerStateStr + Math.floor(this.timeCutDown);
        } else this.playerStateLabel.string = "";
      },
      timeCutDownEnd: function timeCutDownEnd() {
        console.log("this.state = " + this.state);
        switch (this.state) {
         case PlayerUiNodeState.ChooseRate:
          console.log("并且状态时发牌的状态的时候");
          _global2.default.socketControl.chooseScore(1);
          this.setState(PlayerUiNodeState.WaitChooseRate);
          break;

         case PlayerUiNodeState.ChooseCow:
          _global2.default.socketControl.tipsCow();
          this.timeCutDown = 0;
        }
      }
    });
    cc._RF.pop();
  }, {
    "./../global": "global"
  } ],
  roomRecordCellCell: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a563eZ4dhVHU6dHxH0RYCbW", "roomRecordCellCell");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nickNameLabel: {
          default: null,
          type: cc.Label
        },
        scoreLabel: {
          default: null,
          type: cc.Label
        },
        cardList: {
          default: [],
          type: cc.Node
        }
      },
      onLoad: function onLoad() {},
      initWithData: function initWithData(data) {
        console.log("room record cell cell init with data = " + JSON.stringify(data));
        this.nickNameLabel.string = data.nickName;
        this.scoreLabel.string = data.currentScore + "";
        var cardListData = data.cardList;
        for (var i = 0; i < cardListData.length; i++) {
          var card = this.cardList[i];
          card.getComponent("card").nowShowCardsValue(cardListData[i]);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  roomRecordCell: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e346TaHr1EB4jWAHMiQ+yA", "roomRecordCell");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        numLabel: {
          default: null,
          type: cc.Label
        },
        timeLabel: {
          default: null,
          type: cc.Label
        },
        cardLists: {
          default: [],
          type: cc.Node
        }
      },
      onLoad: function onLoad() {},
      initWithData: function initWithData(index, data) {
        console.log("index = " + index);
        this.numLabel.string = "No." + index;
        this.timeLabel.string = data.time;
        var cards = data.cards;
        for (var i = 0; i < cards.length; i++) {
          var node = this.cardLists[i];
          node.active = true;
          node.getComponent("roomRecordCellCell").initWithData(cards[i]);
        }
        console.log("room record cell init with data = " + JSON.stringify(data));
      }
    });
    cc._RF.pop();
  }, {} ],
  roomRecord: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46e4dvYU6FHTIldSbspH2uR", "roomRecord");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        connectNode: {
          default: null,
          type: cc.Node
        },
        roomRecordCell: {
          default: null,
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {},
      initWithData: function initWithData(data) {
        console.log("room record init with data" + JSON.stringify(data));
        var gameData = JSON.parse(data.data);
        console.log("game data = " + JSON.stringify(gameData));
        for (var i = 0; i < gameData.length; i++) {
          var node = cc.instantiate(this.roomRecordCell);
          node.parent = this.connectNode;
          node.position = cc.p(0, -220 - 280 * i);
          node.getComponent("roomRecordCell").initWithData(i, gameData[i]);
        }
        this.connectNode.height = 280 * gameData.length + 20;
      },
      onButtonClick: function onButtonClick(event, customData) {
        switch (customData) {
         case "close":
          this.node.destroy();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  scoreLabel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e40e9EOpsRK6rFReG5qhHXs", "scoreLabel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nickNameLabel: {
          default: null,
          type: cc.Label
        },
        scoreLabel: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {},
      initWithData: function initWithData(data) {
        this.nickNameLabel.string = data.nickName;
        this.scoreLabel.string = data.currentScore + "";
      }
    });
    cc._RF.pop();
  }, {} ],
  setLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b6a3FRE5VMy7hiOJzDclE4", "setLayer");
    "use strict";
    var _global = require("./../../global");
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        toggleButton: {
          default: null,
          type: cc.Toggle
        },
        buttonAudioClicp: {
          url: cc.AudioClip,
          default: null
        }
      },
      onLoad: function onLoad() {
        _global2.default.account.playerData.soundOff = false;
      },
      onButtonClick: function onButtonClick(event, customData) {
        switch (customData) {
         case "ok":
          var state = this.toggleButton.isChecked;
          _global2.default.account.playerData.soundOff = !state;
          _global2.default.account.playerData.soundOff || cc.audioEngine.play(this.buttonAudioClicp, false, 1);
          this.node.destroy();
          break;

         case "cancel":
          _global2.default.account.playerData.soundOff || cc.audioEngine.play(this.buttonAudioClicp, false, 1);
          this.node.destroy();
        }
      }
    });
    cc._RF.pop();
  }, {
    "./../../global": "global"
  } ],
  "simple-request": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "52846jT+l1HG7gQJCJq/aSS", "simple-request");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var timeoutLimit = 3e4;
    var SRequest = SRequest || function() {
      var that = {};
      that.get = function(baseURL, handlerURL, params, cb) {
        var xhr = new XMLHttpRequest();
        var paramStr = getURLParamsString(params);
        console.log("get string: " + baseURL + handlerURL + paramStr);
        xhr.open("GET", baseURL + handlerURL + paramStr, true);
        xhr.timeout = timeoutLimit;
        xhr.onload = function() {
          var data = JSON.parse(xhr.responseText);
          cb && cb.call(void 0, data);
        };
        xhr.ontimeout = function() {
          cb && cb.call(void 0, {
            timeout: true
          });
        };
        xhr.send();
      };
      that.post = function(baseURL, handlerURL, urlParams, params, cb) {
        var xhr = new XMLHttpRequest();
        console.log("post", baseURL + handlerURL + getURLParamsString(urlParams));
        xhr.open("POST", baseURL + handlerURL + getURLParamsString(urlParams), true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.timeout = timeoutLimit;
        xhr.onload = function() {
          console.log("xhr.onload", xhr.responseText);
          var data = JSON.parse(xhr.responseText);
          cb && cb.call(void 0, data);
        };
        xhr.ontimeout = function() {
          cb && cb.call(void 0, {
            timeout: true
          });
        };
        console.log("xhr.onload", params);
        var bodyContent = params ? JSON.stringify(params) : "";
        console.log("body content = " + JSON.stringify(bodyContent));
        xhr.onerror = function(e) {
          console.log("server error " + e);
          cb && cb.call(this, {
            timeout: true
          });
        };
        xhr.send(bodyContent);
      };
      that.jump = function(url, params) {
        var paramStr = getURLParamsString(params);
        console.log("jump to url: " + url + paramStr);
        window.location.href = url + paramStr;
      };
      var getURLParamsString = function getURLParamsString(params, isStart) {
        var paramStr = "";
        if (params) {
          var start = void 0 == isStart || isStart;
          for (var index in params) {
            if (start) {
              start = false;
              paramStr += "?";
            } else paramStr += "&";
            paramStr += index + "=" + params[index];
          }
        }
        return paramStr;
      };
      return that;
    }();
    exports.default = SRequest;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  "socket-control": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c6d7JZN3JNE4Psqh+DfZ9g", "socket-control");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _global = require("./../global");
    var _global2 = _interopRequireDefault(_global);
    var _defines = require("./../defines");
    var _defines2 = _interopRequireDefault(_defines);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var SocketControl = function SocketControl() {
      var that = {};
      console.log("socket io " + JSON.stringify(_defines2.default.socketUrl));
      that.socket = io(_defines2.default.socketUrl);
      var getJSONData = function getJSONData(data) {
        if ("string" === typeof data) return JSON.parse(data);
        return data;
      };
      var login = function login() {
        that.socket.emit("login", {
          auth: _global2.default.account.playerData.auth,
          nickName: _global2.default.account.playerData.nickName,
          avatarUrl: _global2.default.account.playerData.avatarUrl
        });
      };
      that.socket.on("connected", function() {
        cc.log("连接成功");
        login();
      });
      var reEnterRoom = function reEnterRoom(data) {
        console.log("重新进入房间" + JSON.stringify(data));
        data = getJSONData(data);
        _global2.default.account.playerData.gameData = data;
        _global2.default.event.fire("re_enter_room");
      };
      var joinRoomFail = function joinRoomFail(data) {
        console.log("加入房间失败");
        _global2.default.event.fire("join_room_fail", data);
      };
      var initData = function initData(data) {
        data = getJSONData(data);
        console.log("初始化用户数据" + JSON.stringify(data));
        _global2.default.account.playerData.gameData = data;
        _global2.default.event.fire("enter_room");
      };
      var syncData = function syncData(data) {
        data = getJSONData(data);
        console.log("同步数据" + JSON.stringify(data));
        _global2.default.event.fire("sync_data", data);
      };
      var playerJoinRoom = function playerJoinRoom(data) {
        console.log("玩家加入房间");
        data = getJSONData(data);
        _global2.default.event.fire("add_player", data);
      };
      var playerLeave = function playerLeave() {
        console.log("玩家离开房间");
      };
      var gameStart = function gameStart(data) {
        console.log("游戏开始");
        console.log("游戏开始 " + JSON.stringify(data));
        data = getJSONData(data);
        _global2.default.account.playerData.bankerID = data.bankerId;
        _global2.default.account.playerData.lastRoundCount = data.lastRoundCount;
        _global2.default.event.fire("game_start", data);
      };
      var pushCards = function pushCards(cards) {
        cards = getJSONData(cards);
        console.log("发牌");
        console.log("收到了一手牌" + JSON.stringify(cards));
        _global2.default.event.fire("push_card", cards);
      };
      var changeHouseManager = function changeHouseManager() {
        console.log("改变房主");
      };
      var playerChooseScore = function playerChooseScore(data) {
        console.log("玩家选择了分数");
        data = getJSONData(data);
        _global2.default.event.fire("player_choose_score", data);
      };
      var showSelfCowResult = function showSelfCowResult(data) {
        console.log("展示自己选牛的结果");
        data = getJSONData(data);
        console.log("show seld cow result" + JSON.stringify(data));
        _global2.default.event.fire("self_show_cow_result", data);
      };
      var playerShowResult = function playerShowResult(data) {
        console.log("显示玩家的结果");
        data = getJSONData(data);
        _global2.default.event.fire("player_show_result", data);
      };
      var showGameResult = function showGameResult(data) {
        console.log("显示游戏结果");
        data = getJSONData(data);
        console.log("show game result =" + JSON.stringify(data));
        _global2.default.event.fire("show_game_result", data);
      };
      var turnGameScoreResult = function turnGameScoreResult(data) {
        console.log("一回合结束的结果");
        data = getJSONData(data);
        console.log("收到了游戏分数结果" + JSON.stringify(data));
        _global2.default.event.fire("turn_game_score_result", data);
      };
      var somePlayerReady = function somePlayerReady(data) {
        console.log("有玩家准备了");
        data = getJSONData(data);
        console.log("有人准备了" + JSON.stringify(data));
        _global2.default.event.fire("some_player_ready", data);
      };
      var canChooseCow = function canChooseCow() {
        console.log("可以选择牛了");
        console.log("玩家可以选择牛了");
        _global2.default.event.fire("show_choose_cow_ui");
      };
      var gameEndResult = function gameEndResult(data) {
        console.log("游戏最终结果");
        data = getJSONData(data);
        console.log("游戏结束时候的结果" + JSON.stringify(data));
        _global2.default.event.fire("game_end_result", data);
      };
      var disconnect = function disconnect() {
        console.log("断开连接");
      };
      var loginResult = function loginResult(data) {
        console.log("链接成功" + JSON.stringify(data));
        data = getJSONData(data);
        _global2.default.account.playerData.nickName = data.nickName;
        _global2.default.account.playerData.uid = data.uid;
        _global2.default.account.playerData.avatarUrl = data.avatarUrl;
        _global2.default.account.playerData.houseCardCount = data.houseCardCount;
        _global2.default.event.fire("login_success", data);
      };
      var playerEndRoom = function playerEndRoom(data) {
        data = getJSONData(data);
        console.log("有玩家想要解散房间" + JSON.stringify(data));
        _global2.default.account.playerData.endRoomPlayerNickName = data.nickName;
        _global2.default.event.fire("show_end_room_choose");
      };
      var playerCancelEndRoom = function playerCancelEndRoom() {
        _global2.default.event.fire("player_cancel_end_room");
      };
      var roomEnd = function roomEnd() {
        _global2.default.event.fire("room_end");
      };
      var playerOffLine = function playerOffLine(data) {
        data = getJSONData(data);
        console.log("收到玩家掉线的消息" + JSON.stringify(data));
        _global2.default.event.fire("player_offline", data);
      };
      var playerOnLine = function playerOnLine(data) {
        data = getJSONData(data);
        console.log("收到了玩家重新链接的消息" + JSON.stringify(data));
        _global2.default.event.fire("player_online", data);
      };
      var sycnPlayerChooseScore = function sycnPlayerChooseScore(data) {
        data = getJSONData(data);
        console.log("同步所有玩家选择的分数" + JSON.stringify(data));
        _global2.default.event.fire("sync_player_choose_score", data);
      };
      var syncHouseCardCount = function syncHouseCardCount(data) {
        data = getJSONData(data);
        _global2.default.account.playerData.houseCardCount = data.houseCardCount;
      };
      var rebackPlayerGameRecord = function rebackPlayerGameRecord(data) {
        data = getJSONData(data);
        console.log("玩家记录的返回" + JSON.stringify(data));
        _global2.default.event.fire("reback_player_game_record", data);
      };
      var rebackRoomGameRecord = function rebackRoomGameRecord(data) {
        data = getJSONData(data);
        console.log("玩家返回的房间游戏数据" + JSON.stringify(data));
        _global2.default.event.fire("reback_room_game_record", data);
      };
      that.createRoom = function(data) {
        console.log("创建房间" + JSON.stringify(data));
        that.socket.emit("create_room", data);
      };
      that.joinRoom = function(roomId) {
        that.socket.emit("join_room", roomId);
      };
      that.requestSycnData = function() {
        that.socket.emit("request_sync_data");
      };
      that.gameStart = function() {
        that.socket.emit("game_start");
      };
      that.chooseScore = function(data) {
        console.log("choose score  =" + data);
        that.socket.emit("choose_score", data);
      };
      that.tipsCow = function() {
        that.socket.emit("tips_cow");
      };
      that.restartGame = function() {
        _global2.default.event.fire("restart_game");
        that.socket.emit("restart_game");
      };
      that.endRoom = function() {
        that.socket.emit("end_room");
      };
      that.chooseEndRoom = function(data) {
        that.socket.emit("choose_end_room", data);
      };
      that.cancelEndRoom = function() {
        that.socket.emit("cancel_end_room");
      };
      that.requestPlayerRecord = function() {
        that.socket.emit("request_player_record");
      };
      that.requestRoomRecord = function(roomID) {
        console.log("请求房间数据" + roomID);
        that.socket.emit("request_room_record", roomID);
      };
      that.socket.on("reback_room_game_record", rebackRoomGameRecord);
      that.socket.on("reback_player_game_record", rebackPlayerGameRecord);
      that.socket.on("sync_house_card_count", syncHouseCardCount);
      that.socket.on("sync_players_choose_score", sycnPlayerChooseScore);
      that.socket.on("player_online", playerOnLine);
      that.socket.on("player_offline", playerOffLine);
      that.socket.on("room_end", roomEnd);
      that.socket.on("player_cancel_end_room", playerCancelEndRoom);
      that.socket.on("player_end_room", playerEndRoom);
      that.socket.on("re_enter_room", reEnterRoom);
      that.socket.on("login_result", loginResult);
      that.socket.on("join_room_fail", joinRoomFail);
      that.socket.on("init_data", initData);
      that.socket.on("sync_data", syncData);
      that.socket.on("player_join_room", playerJoinRoom);
      that.socket.on("player_leave", playerLeave);
      that.socket.on("game_start", gameStart);
      that.socket.on("push_cards", pushCards);
      that.socket.on("change_house_manager", changeHouseManager);
      that.socket.on("player_choose_score", playerChooseScore);
      that.socket.on("tip_cow_result", showSelfCowResult);
      that.socket.on("player_show_result", playerShowResult);
      that.socket.on("show_game_result", showGameResult);
      that.socket.on("turn_game_score_result", turnGameScoreResult);
      that.socket.on("player_ready", somePlayerReady);
      that.socket.on("can_choose_cow", canChooseCow);
      that.socket.on("send_game_end_result", gameEndResult);
      that.socket.on("disconnect", disconnect);
      return that;
    };
    exports.default = SocketControl;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "./../defines": "defines",
    "./../global": "global"
  } ],
  tipsTextLabel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7ef2dJJGXRFCYXVrsImLoER", "tipsTextLabel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        textLabel: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        this.runAction();
      },
      runAction: function runAction() {
        cc.log("开始运动");
        this.textLabel.node.position = {
          x: 800,
          y: 0
        };
        var action = cc.moveTo(20, cc.p(-2e3, 0));
        var seq = cc.sequence(action, cc.callFunc(this.runAction.bind(this)));
        this.textLabel.node.runAction(seq);
      }
    });
    cc._RF.pop();
  }, {} ],
  turnGameOverModeLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4096c//yR1NSrJFQFfGRaxv", "turnGameOverModeLayer");
    "use strict";
    var _global = require("./../../global");
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        winBg: {
          default: null,
          type: cc.Node
        },
        loseBg: {
          default: null,
          type: cc.Node
        },
        scoreLabel: {
          default: null,
          type: cc.Prefab
        },
        parentNode: {
          default: null,
          type: cc.Node
        },
        startButton: {
          default: null,
          type: cc.Node
        },
        resultButton: {
          default: null,
          type: cc.Node
        },
        buttonAudioClicp: {
          url: cc.AudioClip,
          default: null
        },
        winAudioClicp: {
          url: cc.AudioClip,
          default: null
        },
        loseAudioClicp: {
          url: cc.AudioClip,
          default: null
        }
      },
      onLoad: function onLoad() {
        console.log("global game turn result" + JSON.stringify(_global2.default.turnGameResult));
        var selfWin = false;
        for (var i = 0; i < _global2.default.turnGameResult.length; i++) {
          var gameResult = _global2.default.turnGameResult[i];
          gameResult.uid === _global2.default.account.playerData.uid && gameResult.currentScore > 0 && (selfWin = true);
        }
        selfWin ? cc.audioEngine.play(this.winAudioClicp, false, 1) : cc.audioEngine.play(this.loseAudioClicp, false, 1);
        this.winBg.active = selfWin;
        this.loseBg.active = !selfWin;
        _global2.default.turnGameResult.sort(function(a, b) {
          if (a.currentScore < b.currentScore) return true;
          return false;
        });
        for (var _i = 0; _i < _global2.default.turnGameResult.length; _i++) {
          var label = cc.instantiate(this.scoreLabel);
          label.getComponent("scoreLabel").initWithData(_global2.default.turnGameResult[_i]);
          label.parent = this.parentNode;
          label.position = cc.p(0, 74 + -70 * _i);
        }
        this.timeCutDown = 12;
        if (0 === _global2.default.account.playerData.lastRoundCount) {
          this.startButton.active = false;
          this.resultButton.active = true;
        } else {
          this.startButton.active = true;
          this.resultButton.active = false;
        }
      },
      update: function update(dt) {
        if (this.timeCutDown > 0) {
          this.timeCutDown -= dt;
          if (this.timeCutDown <= 0) {
            this.timeCutDown = 0;
            _global2.default.socketControl.restartGame();
            this.node.destroy();
          }
        }
      },
      onButtonClick: function onButtonClick(event, customData) {
        console.log("on button click");
        _global2.default.account.playerData.soundOff || cc.audioEngine.play(this.buttonAudioClicp, false, 1);
        if ("start_game" === customData) {
          console.log("开始游戏");
          _global2.default.socketControl.restartGame();
          this.node.destroy();
          this.timeCutDown = 0;
        }
      }
    });
    cc._RF.pop();
  }, {
    "./../../global": "global"
  } ]
}, {}, [ "account", "player-data", "socket-control", "defines", "gameScene", "gameUINode", "playerUINode", "card", "endRoomChooseModelLayer", "endRoomModeLayer", "gameEndCell", "gameEndModelLayer", "playerNode", "scoreLabel", "turnGameOverModeLayer", "global", "loginControl", "mainSceneControl", "createRoom", "fightRecord", "gameIntroduction", "joinRoom", "playerRecordCell", "roomRecord", "roomRecordCell", "roomRecordCellCell", "setLayer", "tipsTextLabel", "event-listener", "simple-request" ]);
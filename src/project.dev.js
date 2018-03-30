require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"BlockBuilder":[function(require,module,exports){
"use strict";
cc._RF.push(module, '9f661ss2YRAj6AIYWV5T2Ap', 'BlockBuilder');
// demo_catch_star/scripts/BlockBuilder.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

var _ColorBlock = require('./ColorBlock');

var _ColorBlock2 = _interopRequireDefault(_ColorBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var SimpleLayout = require('SimpleLayout');

var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;
var BlockBuilder = (_dec = property(cc.Prefab), _dec2 = property(SimpleLayout), _dec3 = property(), ccclass(_class = (_class2 = function (_cc$Component) {
    _inherits(BlockBuilder, _cc$Component);

    function BlockBuilder() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, BlockBuilder);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BlockBuilder.__proto__ || Object.getPrototypeOf(BlockBuilder)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'colorBlock', _descriptor, _this), _initDefineProp(_this, 'simpleLayout', _descriptor2, _this), _initDefineProp(_this, '_speed', _descriptor3, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * @type {SimpleLayout}
     */


    _createClass(BlockBuilder, [{
        key: 'generate',
        value: function generate() {
            this.simpleLayout.resetLayout();

            for (var index = 0; index < this._speed; index++) {
                var item = cc.instantiate(this.colorBlock);
                this.node.addChild(item);
                item.getComponent(_ColorBlock2.default).setup(Math.floor(Math.random() * 6));
                this.simpleLayout.addItem(item);
            }

            this.sendMessage();
        }
    }, {
        key: 'removeSome',
        value: function removeSome() {
            var count = Math.min(this.node.childrenCount, this._speed);
            for (var index = 0; index < count; index++) {
                var items = this.node.children;
                items[index].destroy();
            }
            this.scheduleOnce(this.sendMessage.bind(this));
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            this.node.children.map(function (item) {
                return item.destroy();
            });
            this.scheduleOnce(this.sendMessage.bind(this));
        }
    }, {
        key: 'sendMessage',
        value: function sendMessage() {
            var counts = this.node.childrenCount;
            var event = new cc.Event.EventCustom('blocks_num_change', true);
            event.setUserData({
                counts: counts
            });
            this.node.dispatchEvent(event);
        }
    }]);

    return BlockBuilder;
}(cc.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'colorBlock', [_dec], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'simpleLayout', [_dec2], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, '_speed', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return 10;
    }
})), _class2)) || _class);
exports.default = BlockBuilder;
module.exports = exports['default'];

cc._RF.pop();
},{"./ColorBlock":"ColorBlock","SimpleLayout":"SimpleLayout"}],"Bullet":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'd4594TSpjxFLoJyX5fIU7QR', 'Bullet');
// demo/script/Bullet.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        isMoving: true,
        speed: 100,

        enenyLaunch: {
            default: null,
            type: cc.Node
        },

        explodeParti: {
            default: null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {

        if (this.node.y > 450 || this.node.y < -450) {
            this.node.destroy();
            return;
        }

        if (this.isMoving) {
            this.node.setPositionY(this.node.y + this.speed * dt);
        }

        //check bullet
        this.enenys = [];
        this.enenys = this.enenyLaunch.getChildren();
        for (var i = 0; i < this.enenys.length; ++i) {
            var dollRect = this.node.getBoundingBox();
            var enenyRect = this.enenys[i].getBoundingBox();

            if (cc.rectIntersectsRect(dollRect, enenyRect)) {

                //   var particle = cc.instantiate(this.explodeParti);
                //   particle.parent = this.node.parent;
                //   particle.setPosition(this.node.getPosition());

                cc.log("collider");
                this.node.destroy();
                this.enenys[i].destroy();
            }
        }
    }
});

cc._RF.pop();
},{}],"CardName":[function(require,module,exports){
"use strict";
cc._RF.push(module, '0a17fskI5JLiIx/sbkvjNnY', 'CardName');
// scripts/component/card/CardName.js

"use strict";

/*
 * @Author: lihang 
 * @Date: 2017-10-23 10:05:46 
 * @Last Modified by:   lihang 
 * @Last Modified time: 2017-10-23 10:05:46 
 */
cc.Class({
    extends: cc.Component,

    properties: {

        textName: {
            default: null,
            type: cc.Label
        }
    },

    setup: function setup(data) {
        if (data != this.data) {
            this.data = data;
            this.setDispalyName(this.data);
        }
    },

    clean: function clean() {
        this.data = null;
    },

    setDispalyName: function setDispalyName(name) {
        if (cc.isValid(this.textName)) {
            this.textName.string = name || "";
        }
    }
});

cc._RF.pop();
},{}],"ColorBlock":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'ff749AcL+tHJLCa1XitU9Gx', 'ColorBlock');
// demo_catch_star/scripts/ColorBlock.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;
var ColorBlock = (_dec = property(cc.Sprite), ccclass(_class = (_class2 = function (_cc$Component) {
    _inherits(ColorBlock, _cc$Component);

    function ColorBlock() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ColorBlock);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ColorBlock.__proto__ || Object.getPrototypeOf(ColorBlock)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'sprite', _descriptor, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ColorBlock, [{
        key: 'setup',
        value: function setup() {
            var _this2 = this;

            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            cc.loader.loadRes('icon_' + index, cc.SpriteFrame, function (err, spriteFrame) {
                if (_this2.sprite && !err) {
                    _this2.sprite.spriteFrame = spriteFrame;

                    var moveSpeed = Math.random() * 6;
                    var sequence = cc.sequence(cc.moveTo(moveSpeed, cc.p(642, _this2.node.y)), cc.moveTo(moveSpeed, cc.p(-642, _this2.node.y)));
                    var action = cc.repeatForever(sequence);
                    _this2.node.runAction(action);
                }
            });
        }
    }]);

    return ColorBlock;
}(cc.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'sprite', [_dec], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
})), _class2)) || _class);
exports.default = ColorBlock;
module.exports = exports['default'];

cc._RF.pop();
},{}],"EnenyBullet":[function(require,module,exports){
"use strict";
cc._RF.push(module, '04062EYQwpHqaDoJWSpiZtU', 'EnenyBullet');
// demo/script/EnenyBullet.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        isMoving: true,
        speed: 200,

        player: {
            default: null,
            type: cc.Node
        },

        explodeParti: {
            default: null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.node.y < -450) {
            this.node.destroy();
            return;
        }

        if (this.isMoving) {
            this.node.setPositionY(this.node.y - this.speed * dt);
        }

        var dollRect = this.node.getBoundingBox();
        var playerRect = this.player.getBoundingBox();

        if (cc.rectIntersectsRect(dollRect, playerRect)) {
            //   var particle = cc.instantiate(this.explodeParti);
            //   particle.parent = this.node.parent;
            //   particle.setPosition(this.node.getPosition());

            cc.log("collider");
            this.node.destroy();
        }

        cc.log("check");
    }
});

cc._RF.pop();
},{}],"EnenyLaunch":[function(require,module,exports){
"use strict";
cc._RF.push(module, '3f0d7bw/W1Anb50R4h5y9Ij', 'EnenyLaunch');
// demo/script/EnenyLaunch.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...

        eneny: {
            default: null,
            type: cc.Prefab
        },
        player: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.schedule(function () {
            this.launchEney();
        }, 0.5);
    },

    launchEney: function launchEney() {
        var enenyObj = cc.instantiate(this.eneny);
        enenyObj.parent = this.node;

        var enemySp = enenyObj.getComponent("Eneny");
        enemySp.player = this.player;

        enenyObj.setPosition(-200 + cc.random0To1() * 400, 450);
    }

});

cc._RF.pop();
},{}],"Eneny":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'da0eeUSkO1Cv7B4jj/y66JX', 'Eneny');
// demo/script/Eneny.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...

        isMoving: true,
        speed: 100,

        enenyBullet: {
            default: null,
            type: cc.Prefab
        },

        player: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.schedule(function () {
            this.launchBullet();
        }, 0.8);
    },

    launchBullet: function launchBullet() {
        var bullet = cc.instantiate(this.enenyBullet);
        bullet.parent = this.player.parent;
        bullet.setPosition(this.node.position);

        var enenyBulletSp = bullet.getComponent("EnenyBullet");
        enenyBulletSp.player = this.player;
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {

        if (this.node.y < -450) {
            this.node.destroy();
        }

        if (this.isMoving) {
            this.node.setPositionY(this.node.y - this.speed * dt);
        }
    }
});

cc._RF.pop();
},{}],"ExitButton":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'eaeea3QAJFJcIuCY12L0/fm', 'ExitButton');
// demo_catch_star/scripts/ExitButton.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _desc, _value, _class2, _descriptor;

var _MenuButton2 = require('./MenuButton');

var _MenuButton3 = _interopRequireDefault(_MenuButton2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var SysEvent = require('SysEvent');

var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;

var INDEX = 0;
/**
 * @type {MenuButton}
 */
var ExitButton = (_dec = property(SysEvent), ccclass(_class = (_class2 = function (_MenuButton) {
    _inherits(ExitButton, _MenuButton);

    function ExitButton() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ExitButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ExitButton.__proto__ || Object.getPrototypeOf(ExitButton)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'sysEvent', _descriptor, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ExitButton, [{
        key: 'onLoad',
        value: function onLoad() {
            var _this2 = this;

            this.param = [{
                text: 'EXIT',
                onConfirm: function onConfirm() {
                    _this2.exitGame();
                }
            }, {
                text: 'RESTART',
                onConfirm: function onConfirm() {
                    _this2.restartGame();
                }
            }];

            this.setup(this.param[0]);
        }
    }, {
        key: 'onGotFocus',
        value: function onGotFocus() {
            _get(ExitButton.prototype.__proto__ || Object.getPrototypeOf(ExitButton.prototype), 'onGotFocus', this).call(this);
            this.sysEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onkeyUp, this);
        }
    }, {
        key: 'onLoseFocus',
        value: function onLoseFocus() {
            _get(ExitButton.prototype.__proto__ || Object.getPrototypeOf(ExitButton.prototype), 'onLoseFocus', this).call(this);
            this.sysEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onkeyUp, this);
        }
    }, {
        key: 'onkeyUp',
        value: function onkeyUp(event) {
            switch (event.keyCode) {
                case cc.KEY.left:
                case cc.KEY.dpadLeft:
                case cc.KEY.right:
                case cc.KEY.dpadRight:
                    this.responseAction();
                    this.setup(this.param[++INDEX % 2]);
                    event.stopPropagation();
                    break;

                default:
                    break;
            }
        }
    }, {
        key: 'exitGame',
        value: function exitGame() {
            cc.game.end();
        }
    }, {
        key: 'restartGame',
        value: function restartGame() {
            cc.game.restart();
        }
    }, {
        key: 'responseAction',
        value: function responseAction() {
            this.node.stopAllActions();
            this.node.runAction(cc.sequence(cc.scaleTo(0.2, 0.85), cc.scaleTo(0.2, 1.18), cc.scaleTo(0.2, 1.0)));
        }
    }]);

    return ExitButton;
}(_MenuButton3.default), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'sysEvent', [_dec], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
})), _class2)) || _class);
exports.default = ExitButton;
module.exports = exports['default'];

cc._RF.pop();
},{"./MenuButton":"MenuButton","SysEvent":"SysEvent"}],"Focusable":[function(require,module,exports){
"use strict";
cc._RF.push(module, '74665KfKi1Oabd/kIzvlvz7', 'Focusable');
// scripts/component/focus/Focusable.js

'use strict';

var SysFocus = require('SysFocus');

cc.Class({
    extends: SysFocus,

    properties: {
        left: {
            default: null,
            type: cc.Node
        },
        isLeftEnabled: false,

        right: {
            default: null,
            type: cc.Node
        },
        isRightEnabled: false,

        up: {
            default: null,
            type: cc.Node
        },
        isUpEnabled: false,

        down: {
            default: null,
            type: cc.Node
        },
        isDownEnabled: false
    },

    // use this for initialization
    onLoad: function onLoad() {

        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            // cc.log('touch end, require-focus');
            /*var event = new cc.Event.EventCustom("require-focus", true);
            event.setUserData(this.node);
            this.node.dispatchEvent(event);*/

            this.requireFocus(); //通过接口请求焦点
        }, this);
    },

    checkLinkingFocus: function checkLinkingFocus(cx, cy) {
        // 底层接口 传入当前按键方向，返回当前焦点对象的关联焦点对象 cx cy数值范围 [-1,0,1]

        if (0 != cy) {
            return cy > 0 ? this.up : this.down;
        }

        if (0 != cx) {
            return cx > 0 ? this.right : this.left;
        }
        return null;
    },

    checkLinkingFocusEnabled: function checkLinkingFocusEnabled(cx, cy) {
        // 底层接口 传入当前按键方向，返回当前焦点对象的关联焦点对象 cx cy数值范围 [-1,0,1]

        if (0 != cy) {
            return cy > 0 ? this.isUpEnabled : this.isDownEnabled;
        }

        if (0 != cx) {
            return cx > 0 ? this.isRightEnabled : this.isLeftEnabled;
        }
        return null;
    },

    onGotFocus: function onGotFocus() {},

    onLoseFocus: function onLoseFocus() {},

    onConfirm: function onConfirm() {}

});

cc._RF.pop();
},{"SysFocus":"SysFocus"}],"Game":[function(require,module,exports){
"use strict";
cc._RF.push(module, '87defWm2+dPqb77cYB0zrbP', 'Game');
// demo_catch_star/scripts/Game.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _BlockBuilder = require('./BlockBuilder');

var _BlockBuilder2 = _interopRequireDefault(_BlockBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var SysFocusGroup = require('SysFocusGroup');
var ToggleFocus = require('ToggleFocus');

var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;
var Game = (_dec = property(_Menu2.default), _dec2 = property(_BlockBuilder2.default), _dec3 = property(SysFocusGroup), _dec4 = property(cc.Mask), _dec5 = property(cc.Label), ccclass(_class = (_class2 = function (_cc$Component) {
    _inherits(Game, _cc$Component);

    function Game() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Game);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Game.__proto__ || Object.getPrototypeOf(Game)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'menu', _descriptor, _this), _initDefineProp(_this, 'blockBuilder', _descriptor2, _this), _initDefineProp(_this, 'menuFocusGroup', _descriptor3, _this), _initDefineProp(_this, 'blocksMask', _descriptor4, _this), _initDefineProp(_this, 'count', _descriptor5, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * @type {BlockBuilder}
     */


    /**
     * @type {SysFocusGroup}
     */


    /**
     * @type {cc.Mask}
     */


    /**
     * @type {cc.Label}
     */


    _createClass(Game, [{
        key: 'onLoad',
        value: function onLoad() {
            var _this2 = this;

            cc.director.setDisplayStats(true);

            var data = [{
                text: 'PLAY',
                onConfirm: function onConfirm() {
                    return _this2.playAction();
                }
            }, {
                text: 'PAUSE',
                onConfirm: function onConfirm() {
                    return _this2.pauseAction();
                }
            }, {
                text: 'ADD',
                onConfirm: function onConfirm() {
                    return _this2.addItem();
                }
            }, {
                text: 'REMOVE',
                onConfirm: function onConfirm() {
                    return _this2.removeSome();
                }
            }, {
                text: 'GC',
                onConfirm: function onConfirm() {
                    return _this2.startGC();
                }
            }, {
                text: 'CLEAN',
                onConfirm: function onConfirm() {
                    return _this2.removeAll();
                }
            }, {
                text: 'MASK',
                onConfirm: function onConfirm() {
                    return _this2.mask();
                }
            }, {
                text: 'GROUP',
                onConfirm: function onConfirm() {
                    return _this2.focusGroup();
                }
            }];

            this.menu.setup(data);
        }
    }, {
        key: 'onEnable',
        value: function onEnable() {
            this.node.on('blocks_num_change', this.refreshCount, this);
        }
    }, {
        key: 'onDisable',
        value: function onDisable() {
            this.node.off('blocks_num_change', this.refreshCount, this);
        }
    }, {
        key: 'playAction',
        value: function playAction() {
            if (this._actions) {
                cc.director.getActionManager().resumeTargets(this._actions);
                this._actions = null;
            }
        }
    }, {
        key: 'pauseAction',
        value: function pauseAction() {
            if (!this._actions) {
                this._actions = cc.director.getActionManager().pauseAllRunningActions();
            }
        }
    }, {
        key: 'addItem',
        value: function addItem() {
            this.blockBuilder.generate();
        }
    }, {
        key: 'removeSome',
        value: function removeSome() {
            this.blockBuilder.removeSome();
        }
    }, {
        key: 'startGC',
        value: function startGC() {
            cc.sys.garbageCollect();
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            this.blockBuilder.removeAll();
        }
    }, {
        key: 'mask',
        value: function mask() {
            this.blocksMask.enabled = !this.blocksMask.enabled;
        }
    }, {
        key: 'focusGroup',
        value: function focusGroup() {
            this.menuFocusGroup.Captivity = !this.menuFocusGroup.Captivity;
        }
    }, {
        key: 'refreshCount',
        value: function refreshCount() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new CustomEvent();

            this.count.string = event.detail.counts;
        }
    }]);

    return Game;
}(cc.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'menu', [_dec], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'blockBuilder', [_dec2], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'menuFocusGroup', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'blocksMask', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'count', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
})), _class2)) || _class);
exports.default = Game;
module.exports = exports['default'];

cc._RF.pop();
},{"./BlockBuilder":"BlockBuilder","./Menu":"Menu","SysFocusGroup":"SysFocusGroup","ToggleFocus":"ToggleFocus"}],"ImageLoader":[function(require,module,exports){
"use strict";
cc._RF.push(module, '25496IkFeJKFL16k7mUUzh1', 'ImageLoader');
// scripts/component/helper/ImageLoader.js

"use strict";

var urlRegExp = new RegExp("^(?:https?|ftp)://\\S*$", "i");
cc.Class({

    ctor: function ctor() {

        this._id = 0;
        this._maxTask = 1;
        this._timeOut = 5;
        this._connectTimeOut = 5;
    },
    /**
     * 设置下载id
     * 
     * @param {int} id 
     */
    setId: function setId(id) {

        this._id = id || 0; //下载器id，区分不同的下载器
    },

    /**
     * 设置任务数
     * only on android 
     * @param {int} value 任务数
     */
    setMaxTask: function setMaxTask(value) {

        this._maxTask = value;

        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.remote_http_setmaxtasks(this._id, value);
        }
    },
    /**
     * 设置下载超时时间
     * only on android 
     * @param {int} value 单位秒
     */
    setTimeOut: function setTimeOut(value) {

        this._timeOut = value;

        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.remote_http_settimeout(this._id, value);
        }
    },
    /**
     * 设置链接超时时间
     * only on android 
     * @param {int} value 单位秒
     */
    setConnectTimeOut: function setConnectTimeOut(value) {

        this._connectTimeOut = value;

        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.remote_http_setconnecttimeout(this._id, value);
        }
    },
    /**
     * 调用取消任务
     * only on android 
     * @param {int} taskId 任务id
     */
    cancleTasK: function cancleTasK(taskId, url) {

        if (taskId) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                jsb.remote_http_cancletask(this._id, taskId);
            }
        } else {
            if (url) {
                if (cc.sys.isNative) {
                    cc.textureCache.unbindImageAsync(url);
                }
            }
        }
    },
    /**
     * 调用取消所有下载任务
     * only on android 
     */
    cancleAllTask: function cancleAllTask() {

        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.remote_http_canclealltask(this._id);
        }
        if (cc.sys.isNative) {
            cc.textureCache.unbindAllImageAsync();
        }
    },
    /**
     * 下载远程图片
     * 
     * @param {string} url 网络地址
     * @param {function} call 回调地址 
     */
    loadRemoteImage: function loadRemoteImage(url, stroage, call) {

        if (!url || "" == url) {
            call && call(false);
        } else {
            if (cc.sys.os != cc.sys.OS_ANDROID) {
                if (cc.sys.isNative) {
                    return jsb.loadRemoteImg(url, call);
                } else {
                    // return cc.loader.load(url, (err, tex) => {
                    //     clog(">>> aatxt ", err, tex);
                    //     call && call(!err, tex);
                    // });
                }
            } else {
                return jsb.remote_http_load_image(this._id, url, stroage || "", call);
            }
        }
    },
    /**
     * 下载本地图片
     * 
     * @param {string} url 本地图片地址
     * @param {function} call 回调地址
     */
    loadLocalImage: function loadLocalImage(url, call) {

        if (!url || "" == url) {
            call && call(false);
        } else {
            var addImageCallback = function addImageCallback(tex) {
                if (tex instanceof cc.Texture2D) {
                    call && call(true, tex);
                } else {
                    call && call(false);
                }
                jsb.unregisterNativeRef(cc.textureCache, addImageCallback);
            };
            cc.textureCache._addImageAsync(url, addImageCallback);
        }
    },
    /**
     * 下载图片（网络或本地地址）
     * 
     * @param {any} url 图片地址
     * @param {any} call 回调地址
     */
    loadImage: function loadImage(url, stroage, call) {
        if (url.match(urlRegExp)) {
            return this.loadRemoteImage(url, stroage, call);
        } else {
            return this.loadLocalImage(url, call);
        }
    },
    /**
     * 下载spriteframe
     * 
     * @param {any} url 图片地址
     * @param {any} call 回调地址
     */
    loadSpriteFrame: function loadSpriteFrame(url, stroage, call) {

        return this.loadImage(url, stroage, function (succeed, tex) {
            if (succeed && tex) {
                var sframe = new cc.SpriteFrame(tex);
                sframe.retain(); //手动retain
                sframe.rawUrl = url; //设置rawUrl标记键码
                call(succeed, sframe);
                return;
            }
            call(false, null);
        });
    },
    /**
     * 释放图片
     * 
     * @param {any} url 图片路径 
     * @param {any} frame 如果以spriteframe加载，则需要传入spriteframe
     */
    release: function release(url, frame) {
        //清除图片， frame 若有，则以spriteframe的形式加载

        clog(">>> _loadSpriteFrame img release start", url);
        if (cc.sys.isNative) {
            if (cc.isValid(frame)) {
                var texture = frame.getTexture();
                if (cc.isValid(texture)) {
                    clog(">>> _loadSpriteFrame img release texture", url);
                    cc.textureCache.removeTexture(texture);
                } else {
                    cc.textureCache.removeTextureForKey(url);
                }
                frame.clearTexture();
                frame.release();
                if (cc.isValid(frame)) {
                    clog(">>> release cc.isValid(frame)", url);
                }
                frame = null;
            } else {
                cc.textureCache.removeTextureForKey(url);
            }
        }
        clog(">>> _loadSpriteFrame img release complete", url);
    }
});

cc._RF.pop();
},{}],"ItemCard":[function(require,module,exports){
"use strict";
cc._RF.push(module, '8994engcCxFF5ewoL624dv/', 'ItemCard');
// scripts/component/item/ItemCard.js

"use strict";

//var ModelManager = require('ModelManager');
var ShaderHelper = require("ShaderHelper");
var SpriteFrameManager = require("SpriteFrameManager");

cc.Class({
    extends: require('ToggleFocus'),

    properties: {
        titleLabel: {
            default: null,
            type: cc.Label
        },

        imageSprite: {
            default: null,
            type: cc.Sprite
        },

        frontSprite: {
            default: null,
            type: cc.Sprite
        },

        vipStatus: {
            default: null,
            type: cc.Node
        },

        singleLineNum: 10,
        canMarquee: true, // 开启跑马灯效果
        _extraObj: null, // pingback 信息
        _hasOmitted: false },

    setExtraObj: function setExtraObj(extraObj) {
        this._extraObj = extraObj;
    },

    fixYInScroll: function fixYInScroll(hasName) {
        this._fixYInScroll = hasName ? 60 : 0;
    },

    getData: function getData() {

        return this._itemData;
    },

    getIndex: function getIndex() {
        return this._itemIndex ? this._itemIndex : 0;
    },

    getCardData: function getCardData() {

        return this._itemCard;
    },

    onConfirm: function onConfirm() {

        //向外发出点击事件
        var event = new cc.Event.EventCustom('click_item_card', true);
        event.setUserData({
            node: this.node,
            data: this._itemData,
            extraObj: this._extraObj,
            index: this._itemIndex,
            card: this._itemCard
        });
        this.node.dispatchEvent(event);
    },

    onGotFocus: function onGotFocus() {
        this._super();

        this._setTitleOpacity(255);
        this._checkAndStartMarquee();
    },

    onLoseFocus: function onLoseFocus() {
        this._super();

        this._setTitleOpacity(204);
        this._checkAndStopMarquee();
    },

    setup: function setup(data, index, hasName) {
        this._isLoadImage = false;
        if (!data) {
            this._itemData = null;
            this._itemCard = null;
            this._setDisplayDeerState();
        } else {
            var card = data.card;
            var item = data.item ? data.item : data;

            this._itemData = item;
            this._itemCard = card;
            this._itemIndex = data.index ? data.index : 0;
            this._fixYInScroll = data.useFixYInScoll ? 60 : 0;

            if (item) {
                if (data.skipName) {
                    this.setDisplayName("");
                } else {
                    this.setDisplayName(item.baseTitle || "");
                }
                this._setVipStatus(ModelManager.isVipMedia(item));
                this._setDisplayImageState(item.basePic);
            }
        }
    },

    setDisplayName: function setDisplayName(title) {
        if (cc.isValid(this.titleLabel)) {

            // 全英文宽度太小 显示两倍字符
            var regExp = /^[A-Za-z ]*$/;
            var multiple = regExp.test(title) ? 2 : 1;
            var showLength = this.singleLineNum * multiple;

            this._hasOmitted = title.length > showLength;
            var showTitle = this._hasOmitted ? title.substr(0, showLength - 1) + '...' : title;
            this.titleLabel.string = showTitle;

            // 跑马灯需要知道显示标题和实际标题 
            this._realTitle = title;
            this._showTitle = showTitle;
        }
    },

    cancelMarqueeAction: function cancelMarqueeAction() {
        this._checkAndStopMarquee();
        this._hasOmitted = false;
    },

    clean: function clean() {
        this._itemData = null;
        this._itemCard = null;
        this._isLoadImage = false;
        this._setDisplayDeerState();
    },

    _setTitleOpacity: function _setTitleOpacity(opacityValue) {
        if (cc.isValid(this.titleLabel)) {
            this.titleLabel.node.opacity = opacityValue;
        }
    },

    _checkAndStartMarquee: function _checkAndStartMarquee() {
        var _this = this;

        if (this.canMarquee && this._hasOmitted) {
            var marqueeAction = cc.sequence(cc.delayTime(1), cc.callFunc(function () {
                if (cc.isValid(_this.titleLabel)) {
                    _this._startMarquee();
                }
            }));
            marqueeAction.setTag(3002);
            this.titleLabel.node.runAction(marqueeAction);
        }
    },

    _startMarquee: function _startMarquee() {
        var titleNode = this.titleLabel.node;
        var maskNode = titleNode.parent;
        var mask = maskNode.addComponent(cc.Mask);
        if (mask) {
            var startMarqueePosition = titleNode.getPosition();
            this.titleLabel.string = this._realTitle;

            var SPACING = 100;
            var SPEED = 60;
            this._cloneNode = new cc.Node();
            this._cloneNode.anchorX = 0;
            var label = this._cloneNode.addComponent(cc.Label);
            label.font = this.titleLabel.font;
            label.fontSize = 30;
            label.lineHeight = 30;
            label.string = this._realTitle;
            this._cloneNode.parent = maskNode;
            this._cloneNode.setPosition(startMarqueePosition.x + titleNode.width + SPACING, startMarqueePosition.y);

            var action1 = cc.repeatForever(cc.sequence(cc.moveTo((titleNode.width + SPACING) / SPEED, cc.p(startMarqueePosition.x - titleNode.width - SPACING, startMarqueePosition.y)), cc.moveTo(0, cc.p(startMarqueePosition.x + titleNode.width + SPACING, startMarqueePosition.y)), cc.moveTo((titleNode.width + SPACING) / SPEED, cc.p(startMarqueePosition.x, startMarqueePosition.y))));
            action1.setTag(3002);
            titleNode.runAction(action1);

            var action2 = cc.repeatForever(cc.sequence(cc.moveTo((titleNode.width + SPACING) * 2 / SPEED, cc.p(startMarqueePosition.x - titleNode.width - SPACING, startMarqueePosition.y)), cc.moveTo(0, cc.p(startMarqueePosition.x + titleNode.width + SPACING, startMarqueePosition.y))));
            action2.setTag(3002);
            this._cloneNode.runAction(action2);
        }
    },

    _checkAndStopMarquee: function _checkAndStopMarquee() {
        if (this.canMarquee && this._hasOmitted) {
            var titleNode = this.titleLabel.node;
            titleNode.stopActionByTag(3002);
            var maskNode = titleNode.parent;
            var mask = maskNode.getComponent(cc.Mask);
            if (cc.isValid(mask)) {
                mask.destroy();

                if (cc.isValid(this._cloneNode)) {
                    this._cloneNode.destroy();
                }

                // 回到初始状态
                this.titleLabel.string = this._showTitle;
                this.titleLabel.node.setPosition(-(maskNode.width / 2 - 5), 0);
            }
        }
    },

    _setDisplayDeerState: function _setDisplayDeerState() {
        this._setTitleOpacity(204);
        this.cancelMarqueeAction();
        this.setDisplayName("");
        this._setVipStatus(false);
        this._setSpriteFrame(null);
        this._loadSpriteFrame(null);
        this._setDeerSpriteFrame(true);
    },

    _setDisplayImageState: function _setDisplayImageState(basePic) {
        var _this2 = this;

        var node = this.imageSprite.node;
        var url = ModelManager.getFinalPic(basePic, node.width, node.height);
        ctime('load image start:' + url);
        this._loadSpriteFrame(url, function (err, spriteFrame) {
            ctime('load image finish:' + url);
            if (spriteFrame) {
                _this2._isLoadImage = true;
                _this2._setDeerSpriteFrame(false);
                _this2._setSpriteFrame(spriteFrame);
            }
            ctime('load image end:' + url);
        });
    },

    _loadSpriteFrame: function _loadSpriteFrame(url, call) {
        var _this3 = this;

        if (this._finalPic) {
            SpriteFrameManager.unload(this._finalPic, this._finalCall);
            this._finalPic = null;
            this._finalCall = null;
        }

        if (url) {
            this._finalPic = url;
            this._finalCall = function (err, spriteFrame) {
                if (url == _this3._finalPic) {
                    //添加保护
                    call && call(err, spriteFrame);
                }
            };
            SpriteFrameManager.loadSpriteFrame(url, this._finalCall);
        }
    },

    _setSpriteFrame: function _setSpriteFrame(imageFrame, color, opacity) {

        if (cc.isValid(this.imageSprite)) {
            if (imageFrame) {
                this.imageSprite.spriteFrame = imageFrame;
                this.imageSprite.node.active = true;
                this._setSpriteFrameShader(this.imageSprite);
            } else {
                this.imageSprite.spriteFrame = null;
                this.imageSprite.node.active = false;
            }
        }
    },

    //单独剥离shader，给其他card继承
    _setSpriteFrameShader: function _setSpriteFrameShader(imageSprite) {

        if (cc.isValid(imageSprite)) {
            ShaderHelper.setGLProgramWithSize(imageSprite, "CenterShader");
        }
    },

    _setVipStatus: function _setVipStatus(active) {

        if (cc.isValid(this.vipStatus)) {
            this.vipStatus.active = active;
        }
    },

    _setDeerSpriteFrame: function _setDeerSpriteFrame(active) {

        if (cc.isValid(this.frontSprite)) {
            this.frontSprite.node.active = active;
        }
    }

});

cc._RF.pop();
},{"ShaderHelper":"ShaderHelper","SpriteFrameManager":"SpriteFrameManager","ToggleFocus":"ToggleFocus"}],"ItemCricle":[function(require,module,exports){
"use strict";
cc._RF.push(module, '6a26dO6snhCmKzy88D0yOZK', 'ItemCricle');
// scripts/component/item/ItemCricle.js

"use strict";

/*
 * @Author: zhaoxiaofeng 
 * @Date: 2017-06-23 13:52:42 
 * @Last Modified by: lihang
 * @Last Modified time: 2018-02-08 17:22:51
 */
var ShaderHelper = require("ShaderHelper");
var BgColors = [cc.color(114, 191, 231), cc.color(241, 160, 89), cc.color(247, 216, 94), cc.color(147, 109, 255)];

cc.Class({
    extends: require('ItemCard'),

    properties: {

        bgNode: {
            default: null,
            type: cc.Node
        }
    },

    setup: function setup(data, index, hasName) {
        this._super(data, index, hasName);

        if (cc.isValid(this.bgNode)) {
            var colorIndex = index || data && data.index || 0;
            this.bgNode.color = BgColors[colorIndex % 4];
        }
    },

    _setSpriteFrameShader: function _setSpriteFrameShader(imageSprite) {
        if (cc.isValid(imageSprite)) {
            ShaderHelper.setGLProgramWithSize(imageSprite, "CenterMaskShader");
        }
    }
});

cc._RF.pop();
},{"ItemCard":"ItemCard","ShaderHelper":"ShaderHelper"}],"ItemList":[function(require,module,exports){
"use strict";
cc._RF.push(module, '221c1HZD/VOTb93kAqBPYk7', 'ItemList');
// scripts/component/item/ItemList.js

'use strict';

/*
 * @Author: lihang 
 * @Date: 2017-08-07 11:40:16 
 * @Last Modified by: lihang
 * @Last Modified time: 2017-10-23 14:46:15
 */
//var Utils = require('Utils');

cc.Class({
    extends: require('ItemCard'),

    properties: {

        deleteNode: {
            default: null,
            type: cc.Node
        },

        deleteFocusNode: {
            default: null,
            type: cc.Node
        },

        deleteNormalNode: {
            default: null,
            type: cc.Node
        },

        deleteHint: {
            default: null,
            type: cc.RichText
        },

        blurSprite: {
            default: null,
            type: cc.Sprite
        },

        _isDeleteMode: false
    },

    setup: function setup(itemData, hintText) {
        this._super(itemData);

        if (cc.isValid(this.deleteHint)) {
            this.deleteHint.string = '<color=#F9F9F9>按</c><color=#FFB400>OK键</c><color=#F9F9F9>删除该' + (hintText || '记录') + '</c></color>';
        }
    },

    onGotFocus: function onGotFocus() {
        this._super();

        if (this._isDeleteMode) {
            Utils.setNodeActive(this.deleteFocusNode, true);
            Utils.setNodeActive(this.deleteNormalNode, false);
        }
    },

    onLoseFocus: function onLoseFocus() {
        this._super();

        if (this._isDeleteMode) {
            Utils.setNodeActive(this.deleteFocusNode, false);
            Utils.setNodeActive(this.deleteNormalNode, true);
        }
    },

    onConfirm: function onConfirm() {
        var eventName = this._isDeleteMode ? 'delete_record_one' : 'click_item_card';
        var event = new cc.Event.EventCustom(eventName, true);
        event.setUserData({
            data: this._itemData,
            canDelete: true
        });
        this.node.dispatchEvent(event);
    },

    setDeleteMode: function setDeleteMode(isOpen) {
        this._isDeleteMode = isOpen;
        if (isOpen) {
            this._onDeleteMode();
        } else {
            this._onNormalMode();
        }
    },

    _onDeleteMode: function _onDeleteMode() {
        Utils.setNodeActive(this.deleteNode, true);
        Utils.setNodeActive(this.blurSprite.node, true);
    },

    _onNormalMode: function _onNormalMode() {
        Utils.setNodeActive(this.deleteNode, false);
        Utils.setNodeActive(this.blurSprite.node, false);
    }
});

cc._RF.pop();
},{"ItemCard":"ItemCard"}],"ListLayout":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'f966eC6sv5DgojPSb0eLbq3', 'ListLayout');
// scripts/component/scroll/ListLayout.js

"use strict";

var Pool = require('PrefabPoolManager');

cc.Class({
    extends: cc.Component,

    properties: {

        content: {
            default: null,
            type: cc.Node
        },
        average: false, //是否等分排布
        horizontal: false,
        padding_row: 0, //行间距
        padding_left: 0, //行间距
        padding_right: 0, //行间距
        padding_column: 0, //列间距
        padding_top: 0, //列间距
        padding_bottom: 0, //列间距
        margin_row: 0, //行间距
        margin_column: 0, //列间距
        _groups: [], //存储当前队
        _offsetX: 0,
        _offsetY: 0,
        _layoutWidth: 0,
        _layoutHeight: 0,
        _contentWidth: 0,
        _contentHeight: 0
    },

    onLoad: function onLoad() {

        // 获取区域大小
        this.refreshLayoutSize();
    },

    refreshLayoutSize: function refreshLayoutSize() {

        if (0 < this.padding_row) {
            this.padding_left = this.padding_row;
            this.padding_right = this.padding_row;
        }

        if (0 < this.padding_column) {
            this.padding_top = this.padding_column;
            this.padding_bottom = this.padding_column;
        }

        var width = this.content.width,
            height = this.content.height;
        this._offsetX = width * -this.content.anchorX + this.padding_left;
        this._offsetY = height * (this.content.anchorY - 1) + this.padding_top;
        this._layoutWidth = this._contentWidth = width - this.padding_left - this.padding_right;
        this._layoutHeight = this._contentHeight = height - this.padding_top - this.padding_bottom;
    },

    setPaddingLeft: function setPaddingLeft(value) {

        this.padding_row = 0;
        this.padding_left = value || 0;
        this.refreshLayoutSize();
    },

    setPaddingRight: function setPaddingRight(value) {

        this.padding_row = 0;
        this.padding_right = value || 0;
        this.refreshLayoutSize();
    },

    setPaddingTop: function setPaddingTop(value) {

        this.padding_column = 0;
        this.padding_top = value || 0;
        this.refreshLayoutSize();
    },

    setPaddingBottom: function setPaddingBottom(value) {

        this.padding_column = 0;
        this.padding_bottom = value || 0;
        this.refreshLayoutSize();
    },

    getContentWidth: function getContentWidth() {

        return this._contentWidth;
    },

    getContentHeight: function getContentHeight() {

        return this._contentHeight;
    },

    getWidth: function getWidth() {

        return this._layoutWidth + this.padding_left + this.padding_right;
    },

    getHeight: function getHeight() {

        return this._layoutHeight + this.padding_top + this.padding_bottom;
    },

    top: function top() {

        if (0 < this._groups.length) {
            return this._groups[this._groups.length - 1];
        }
    },

    pushGroup: function pushGroup(group) {

        if (group) {
            this._groups.push(group);
        }
    },

    getGroups: function getGroups() {

        return this._groups;
    },

    clear: function clear() {

        this.clearGroups();
    },

    clearGroups: function clearGroups() {

        this._groups = [];
    },

    push: function push(prefab, count, left, top, fwidth, fheight) {

        var group = {
            _fixedTop: top || 0,
            _fixedLeft: left || 0
        };
        if (0 < this._groups.length) {
            var last = this._groups[this._groups.length - 1];
            if (last._infoStart && last._infoSize) {
                if (this.horizontal) {
                    group._infoStart = {
                        x: last._infoStart.x + last._infoSize.width,
                        y: last._infoStart.y
                    };
                } else {
                    group._infoStart = {
                        x: last._infoStart.x,
                        y: last._infoStart.y + last._infoSize.height
                    };
                }
            }
        }

        this._groups.push(group);
        this._setGroupSizeByPrefab(group, prefab, fwidth, fheight);
        this._setGroupInfo(group, count);
        this._setLayoutSize(group);
        return group;
    },

    getItem: function getItem(group, index) {

        if (group && group._infoSize && group._infoStart) {

            index = index || 0;
            var fx = 0;
            var fy = 0;
            if (this.horizontal) {
                // 获取包围盒子左上角坐标
                fx = group._infoStart.x + (group._fixedLeft || 0) + Math.floor(index / group._infoSize.row) * group._nodeSize.width + this._offsetX;
                fy = group._infoStart.y + (group._fixedTop || 0) + index % group._infoSize.row * group._nodeSize.height + this._offsetY;
            } else {
                // 获取包围盒子左上角坐标
                fx = group._infoStart.x + (group._fixedLeft || 0) + index % group._infoSize.column * (group._nodeSize.width + group._infoSize.average) + this._offsetX;
                fy = group._infoStart.y + (group._fixedTop || 0) + Math.floor(index / group._infoSize.column) * group._nodeSize.height + this._offsetY;
            }
            return {
                position: cc.p(fx + group._nodeSize.x, 0 - fy - group._nodeSize.y),
                rect: cc.rect(fx, fy, group._nodeSize.width, group._nodeSize.height)
            };
        }
    },

    append: function append(group, count) {

        if (group) {
            var start = group.count;
            this._setGroupInfo(group, start + count);
            this._formatGroupInfoSize();
            return start;
        }
        return 0;
    },

    split: function split(group, splitCount) {

        if (group) {
            this._setGroupInfo(group, group.count - (splitCount || 0));
            this._formatGroupInfoSize();
        }
        return 0;
    },

    resetGroupCount: function resetGroupCount(group, count) {

        this._setGroupInfo(group, count);
        this._formatGroupInfoSize();
    },

    _setGroupInfo: function _setGroupInfo(group, count) {

        if (group) {

            group.count = !count || count < 0 ? 0 : count;

            if (!group._infoStart) {
                //该组的起始位置
                group._infoStart = {
                    x: 0,
                    y: 0
                };
            }

            var column = 0;
            var row = 0;
            var average = 0;
            if (this.horizontal) {
                var height = this._contentHeight - (group._fixedTop || 0);
                var row = Math.max(1, Math.floor(height / group._nodeSize.height));
                var column = Math.ceil(group.count / row);
                if (this.average && row > 1) {
                    average = (height - group._nodeSize.height * row) / (row - 1);
                }
            } else {
                var width = this._contentWidth - (group._fixedLeft || 0);
                var column = Math.max(1, Math.floor(width / group._nodeSize.width));
                var row = Math.ceil(group.count / column);
                if (this.average && column > 1) {
                    average = (width - group._nodeSize.width * column) / (column - 1);
                }
            }
            group._infoSize = {
                row: row,
                column: column,
                average: average,
                height: row * group._nodeSize.height,
                width: column * group._nodeSize.width
            };
        } else {
            clog("Error !!! invaild group param in  set : ListLayout ");
        }
    },

    _setGroupSize: function _setGroupSize(group, node) {

        if (group && node) {
            if (!group._nodeSize) {
                //是否已经有改组物体的数据
                group._nodeSize = {
                    width: node.width + this.margin_row * 2,
                    height: node.height + this.margin_column * 2,
                    x: node.width * node.anchorX + this.margin_row,
                    y: node.height * (1 - node.anchorY) + this.margin_column
                };
            }
        } else {
            clog("Error !!! invaild group param in  set : ListLayout ");
        }
    },

    _setGroupSizeByPrefab: function _setGroupSizeByPrefab(group, prefab, fwidth, fheight) {

        if (group && prefab) {
            if (!group._nodeSize) {
                //是否已经有改组物体的数据
                var node = Pool.get(prefab); // 创建一个预制物体实例，用于获取区域信息
                group._nodeSize = {
                    width: node.width + this.margin_row * 2 + (fwidth || 0),
                    height: node.height + this.margin_column * 2 + (fheight || 0),
                    x: node.width * node.anchorX + this.margin_row,
                    y: node.height * (1 - node.anchorY) + this.margin_column
                };
                Pool.put(node);
            }
        } else {
            clog("Error !!! invaild group param in  set : ListLayout ");
        }
    },

    _setLayoutSize: function _setLayoutSize(group) {

        if (group) {
            this._layoutWidth = group._infoStart.x + group._infoSize.width;
            this._layoutHeight = group._infoStart.y + group._infoSize.height;
        } else {
            clog("Error !!! invaild group param in  set : _setLayoutSize ");
        }
    },

    _formatGroupInfoSize: function _formatGroupInfoSize() {

        var cx = 0,
            cy = 0;
        for (var index = 0, len = this._groups.length; index < len; index++) {

            var group = this._groups[index];
            if (this.horizontal) {
                group._infoStart.x = cx;
                group._infoStart.y = cy;
                cx = group._infoStart.x + group._infoSize.width + (group._fixedLeft || 0);
            } else {
                group._infoStart.x = cx;
                group._infoStart.y = cy;
                cy = group._infoStart.y + group._infoSize.height + (group._fixedTop || 0);
            }
            this._layoutWidth = group._infoStart.x + group._infoSize.width;
            this._layoutHeight = group._infoStart.y + group._infoSize.height;
        }
    }

});

cc._RF.pop();
},{"PrefabPoolManager":"PrefabPoolManager"}],"ListScrollView":[function(require,module,exports){
"use strict";
cc._RF.push(module, '51d331tCx1HabaWlHDYO4BM', 'ListScrollView');
// scripts/component/scroll/ListScrollView.js

'use strict';

var Pool = require('PrefabPoolManager');
var SPEED = 2000;
var MIN_SCROLL_TIME = 0.15;
cc.Class({
    extends: cc.Component,

    properties: {

        scroll: {
            default: null,
            type: cc.Node
        },
        content: {
            default: null,
            type: cc.Node
        },
        horizontal: false,
        fixScrollX: 0,
        fixScrollY: 0,
        lockScreenY: -1,
        lockScreenX: -1,
        _drity: true,
        _infos: [], //  {prefab,data,rect}
        //_groups: [],
        _info_tag: 1000,
        _info_index: 1000,
        _displayItems: []
    },

    onLoad: function onLoad() {

        //this._displayItems = {}
        this._pool_put_call = function () {}; // 回收节点数据
        this._pool_push_call = function () {}; // 刷新节点数据
        this._pool_refesh_call = function () {}; // 刷新节点数据

        this.scrollWidth = this.scroll.width;
        this.scrollHeight = this.scroll.height;
        this.scrollOffsetX = -this.scrollWidth * this.scroll.anchorX;
        this.scrollOffsetY = this.scrollHeight * (1 - this.scroll.anchorY);

        if (this.lockScreenY < 0) {
            this.lockScreenY = this.scrollHeight * 0.5;
        }
        if (this.lockScreenX < 0) {
            this.lockScreenX = this.scrollWidth * 0.5;
        }

        this._formatConetenSize();
    },

    setPutCall: function setPutCall(onPutCall) {

        this._pool_put_call = onPutCall || function () {}; // 回收节点数据
    },

    setPushCall: function setPushCall(onPushCall) {

        this._pool_push_call = onPushCall || function () {}; // 重置节点数据
    },

    setRefreshCall: function setRefreshCall(onRefreshCall) {

        this._pool_refesh_call = onRefreshCall || function () {}; // 重置节点数据
    },

    setWidth: function setWidth(width) {

        this.content.width = width;
        this._formatConetenSize();
    },

    setHeight: function setHeight(height) {

        this.content.height = height;
        this._formatConetenSize();
    },

    getScrollFixedX: function getScrollFixedX(height) {

        return this.fixScrollX;
    },

    getScrollFixedY: function getScrollFixedY(height) {

        return this.fixScrollY;
    },

    getContentSize: function getContentSize() {

        return cc.size(this.content.width, this.content.height);
    },

    getScrollOffset: function getScrollOffset() {

        if (this.horizontal) {
            return cc.p(0 - this.content.x, 0);
        } else {
            return cc.p(0, this.content.y);
        }
    },

    getMaxScrollOffset: function getMaxScrollOffset() {

        if (this.horizontal) {
            return cc.p(this.content.width - this.scrollWidth, 0);
        } else {
            return cc.p(0, this.content.height - this.scrollHeight);
        }
    },

    isAutoScroll: function isAutoScroll() {

        return this.content.getNumberOfRunningActions() > 0;
    },

    stopAutoScroll: function stopAutoScroll() {

        this.content.stopAllActions();
        if (this._autoScrolling) {
            this.node.emit("scroll-ended");
        }
        this._autoScrolling = false;
        this._autoScrollTargetDelta = null;
    },

    scrollToOffset: function scrollToOffset(offset, timeInSecond) {

        this._onScrollToOffset(cc.p(-offset.x, offset.y), timeInSecond);
    },

    getInfos: function getInfos() {

        return this._infos;
    },

    clear: function clear() {

        this._drity = false;
        this._infos.length = 0;

        if (this._displayItems) {
            var len = this._displayItems.length;
            for (var m = 0; m < len; m++) {
                var displayItem = this._displayItems[m];
                if (displayItem.node) {
                    this._pool_put_call(displayItem.node); // 回调刷新节点
                    Pool.put(displayItem.node);
                }
            }
            this._displayItems = [];
        }
    },

    push: function push(prefab, data, rect, position) {

        var info = {
            prefab: prefab,
            data: data,
            position: position,
            rect: rect,
            tag: this._info_tag++,
            index: this._info_index++,
            uuid: prefab && prefab._uuid
        };

        this._drity = true;
        this._infos.push(info);

        return info;
    },

    pop: function pop(info) {

        if (info) {
            var check_tag = info.tag;
            var check_arr = this._infos;
            for (var index = 0, len = check_arr.length; index < len; index++) {
                var data = check_arr[index];
                if (check_tag == data.tag) {
                    this._drity = true;
                    check_arr.splice(index, 1);
                    break;
                }
            }
        }
    },

    reset: function reset(info, data, rect) {

        this._drity = true;
        if (data != info.data) {

            info.data = data;
        }

        if (rect && rect != info.rect) {

            info.rect = rect;
            this._drity = true;
        }

        if (this._drity) {

            var item = this.getDisplayItemByInfo(info);
            if (item && item.node && item.node.activeInHierarchy) {
                this._pool_put_call(item.node); // 回调刷新节点
                this._pool_push_call(item.node, info); // 回调刷新节点
            }
        }
    },

    getDisplayItems: function getDisplayItems() {

        return this._displayItems;
    },

    getDisplayItemsBySort: function getDisplayItemsBySort() {

        var list = [];
        for (var n in this._displayItems) {
            var item = this._displayItems[n];
            list = list.concat(item.node);
        }
        return list;
    },

    getDisplayItemByInfo: function getDisplayItemByInfo(info) {

        if (info) {
            for (var n in this._displayItems) {
                var item = this._displayItems[n];
                if (item && item.info.tag === info.tag) {
                    return item;
                }
            }
        }
    },

    getDisplayItemByData: function getDisplayItemByData(data, comp) {

        if (data) {
            var check_comp = comp || function (a, b) {
                return a === b;
            }; //默认使用相等
            for (var n in this._displayItems) {
                var item = this._displayItems[n];
                if (item && item.info && check_comp(data, item.info.data)) {
                    return item;
                }
            }
        }
    },

    getAndScrollByData: function getAndScrollByData(data, comp) {

        if (data) {
            var check_comp = comp || function (a, b) {
                return a === b;
            }; //默认使用相等

            var check_info = null;
            var check_arr = this._infos;
            for (var index = 0, len = check_arr.length; index < len; index++) {
                var info = check_arr[index];
                if (check_comp(data, info.data)) {
                    return this.getAndScrollByInfo(info);
                }
            }
        }
    },

    getAndScrollByInfo: function getAndScrollByInfo(info) {

        if (info && info.rect) {
            var item = this.getDisplayItemByInfo(info);
            if (!(item && item.node && item.node.activeInHierarchy)) {
                if (this.horizontal) {
                    this.setScrollOffset(cc.p(-info.rect.x, this.content.y));
                } else {
                    this.setScrollOffset(cc.p(this.content.x, info.rect.y));
                }
                item = this.getDisplayItemByInfo(info);
            }
            return item;
        }
    },

    /*removeByLayout: function (layout, data, comp) {
          if (cc.isValid(layout)) {
            var check_comp = comp || function (a, b) {
                return a === b;
            }; //默认使用相等
              var next = null;
            var groups = this._groups;
            if (groups && groups.length > 0) {
                for (var index = 0, len = groups.length; index < len; index++) {
                    var list = groups[index][1];
                    for (var n = 0, len = list.length; n < len; n++) {
                        var info = list[n];
                        if (check_comp(data, info)) {
                            if (n >= list.length - 1) {
                                next = list[n - 1];
                            } else {
                                next = list[n + 1];
                            }
                            list.splice(n, 1);
                            break;
                        }
                    }
                }
            }
            this.layoutScroll(layout);
            return this.getAndScrollByData(next, check_comp); // 自动滚动到下一个目标
        }
    },*/

    /*clearScrollByInfo: function (info) {
          if (info) {
            var check_tag = info.tag;
            var check_arr = this._infos;
            for (var index = 0, len = check_arr.length; index < len; index++) {
                var data = check_arr[index];
                if (check_tag == data.tag) {
                    this._drity = true
                    check_arr.splice(index);
                }
            }
              layout.clear();
            this.clear();
            this._groups = [];
            this.setHeight(layout.getHeight()); //更新显示块大小
        }
    },*/

    splitGroupByLayout: function splitGroupByLayout(layout, group, slpiltCount) {

        if (cc.isValid(layout)) {

            this._drity = true;
            this._infos.splice(this._infos.length - (slpiltCount || 0));

            layout.split(group, slpiltCount);
            this.setHeight(layout.getHeight()); //更新显示块大小
        }
    },
    /**
     * 添加滚动元素
     * 
     * @param {any} layout   布局组件
     * @param {any} prefab   绘制用的预制物体
     * @param {any} list     绘制组件的数据
     * @param {any} ftop     向上滚动时的边缘修正
     * @param {any} fbottom  向下滚动时的边缘修正
     * @param {any} fwidth   绘制宽度修正
     * @param {any} fheight  绘制高度修正
     */
    setPrefabInScroll: function setPrefabInScroll(layout, prefab, list, ftop, fbottom, fwidth, fheight) {

        if (cc.isValid(layout) && cc.isValid(prefab) && list && list.length > 0) {
            var group = layout.push(prefab, 0, 0, 0, fwidth, fheight);
            this.appendPrefabInScroll(layout, prefab, group, list, ftop, fbottom);
        }
    },

    appendPrefabInScroll: function appendPrefabInScroll(layout, prefab, group, list, ftop, fbottom) {

        if (cc.isValid(layout) && cc.isValid(prefab) && group && list && list.length > 0) {
            var start = layout.append(group, list.length);
            for (var i = 0, len = list.length; i < len; i++) {
                var info = layout.getItem(group, start + i);
                this.push(prefab, list[i], cc.rect(info.rect.x, info.rect.y - (fbottom || 0), info.rect.width, info.rect.height + (ftop || 0) + (fbottom || 0) //添加对位修正
                ), info.position);
            }

            if (this.horizontal) {
                this.setWidth(layout.getWidth());
            } else {
                this.setHeight(layout.getHeight());
            }
        }
    },

    /*layoutScroll: function (layout) {
          if (cc.isValid(layout)) {
            var groups = this._groups;
            this.clearScroll();
            if (groups && groups.length > 0) {
                for (var index = 0, len = groups.length; index < len; index++) {
                    var data = groups[index];
                    this.setPrefabInScroll(layout, data[0], data[1], data[2]);
                }
            }
        }
    },*/

    setScrollOffset: function setScrollOffset(offset, delay) {

        //clog("maxOffset  ", this.content.x, this.content.y);
        //clog("xxx ===>>>>>  setScrollOffset.y ", offset)
        this._setScrollOffset(cc.p(-offset.x, offset.y), delay);
    },

    scrollToStart: function scrollToStart() {
        var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.3;

        if (this.horizontal) {
            this.scrollToOffset(cc.p(0, this.content.y), delay);
        } else {
            this.scrollToOffset(cc.p(this.content.x, 0), delay);
        }
    },

    setScrollOffsetWithStart: function setScrollOffsetWithStart() {

        if (this.horizontal) {
            this._setScrollOffset(cc.p(0, this.content.y));
        } else {
            this._setScrollOffset(cc.p(this.content.x, 0));
        }
    },

    forceDrawDisplayItems: function forceDrawDisplayItems() {
        this._drity = true;
        this._onDrawDisplayItems(true, this.content.x, this.content.y); //立即刷新
    },

    focusNodeInScrollView: function focusNodeInScrollView(node, immediately, fixYInScroll) {

        var rect = cc.rect(0, fixYInScroll || 0, node.width, node.height);
        //获取焦点对象相对于屏幕的区域
        var focusRect = cc._rectApplyAffineTransformIn(rect, node.getNodeToWorldTransform());
        //获取焦点对象相对于屏幕上边延中点的位置
        var focusPosition = cc.p(focusRect.x + focusRect.width * 0.5, focusRect.y + focusRect.height);
        var containerPosition = this.content.convertToNodeSpace(focusPosition); //转化为滚动容器内部坐标
        //修正位置，获得定位到滚动容器横向中间位置，以及高度title的偏差值修正
        var focusContainerPosition = cc.pSub(containerPosition, cc.p(this.scroll.width * 0.5, -(28 + node.height * 0.04)));

        //计算滚动位置，y坐标要取反,并且加上偏移修正
        var displayScrollOffset = cc.p(focusContainerPosition.x + this.fixScrollX, this.content.height - focusContainerPosition.y + this.fixScrollY);

        if (!this.horizontal && this.lockScreenY >= 0 && displayScrollOffset.y < this.lockScreenY) {
            displayScrollOffset.y = 0; //如果竖行滚动，设置了首半锁定，在范围内，则对齐到起始位置
        }

        if (this.horizontal && this.lockScreenX >= 0 && displayScrollOffset.x < this.lockScreenX) {
            displayScrollOffset.x = 0; //如果横行滚动，设置了首半锁定，在范围内，则对齐到起始位置
        }

        if (immediately) {
            this.setScrollOffset(displayScrollOffset, true);
        } else {
            var showOffset = this._getSafeOffset(cc.p(-displayScrollOffset.x, displayScrollOffset.y));
            var autoScrollTargetDelta = cc.p(showOffset.x - this.content.x, showOffset.y - this.content.y);
            var distnace = cc.pLength(autoScrollTargetDelta);

            // 使水平滚动更平滑
            if (this.horizontal) {
                distnace *= 2;
            }

            this.scrollToOffset(displayScrollOffset, Math.max(distnace / SPEED, MIN_SCROLL_TIME), false); //需要滚动时长
        }
    },

    _formatConetenSize: function _formatConetenSize() {

        if (this.horizontal) {
            this.content.anchorX = 0;
            this.content.width = Math.max(this.scrollWidth, this.content.width);
        } else {
            this.content.anchorY = 1;
            this.content.height = Math.max(this.scrollHeight, this.content.height);
        }
    },

    _getSafeOffset: function _getSafeOffset(offset) {

        //clog("eee  >> ", offset)
        if (this.horizontal) {
            var mx = this.scrollWidth - this.content.width;
            var cx = Math.min(Math.max(mx, offset.x), 0);
            //clog("eee  >> ", offset, cc.p(cx, this.content.y))
            return cc.p(cx, this.content.y);
        } else {
            var my = this.content.height - this.scrollHeight;
            var cy = Math.min(Math.max(0, offset.y), my);
            return cc.p(this.content.x, cy);
        }
    },

    _setScrollOffset: function _setScrollOffset(offset, delay) {

        // clog(">>>> === >>>  offset ", offset)
        // clog("xxx ===>>>>>  _setScrollOffset.y ", offset)

        this.stopAutoScroll();
        //clog("maxOffset  ", this.content.x, this.content.y);
        var showOffset = this._getSafeOffset(offset);
        this.content.x = showOffset.x;
        this.content.y = showOffset.y;

        if (delay) {
            this._drity = true;
        } else {
            this._drity = false;
            this._onDrawDisplayItems(true, showOffset.x, showOffset.y); //立即刷新
        }
        showOffset = null;
    },

    _onScrollToOffset: function _onScrollToOffset(offset, timeInSecond) {
        var _this = this;

        ctime('scroll start');
        this.stopAutoScroll();
        var showOffset = this._getSafeOffset(offset);

        this._autoScrolling = true;
        this._autoScrollTargetDelta = cc.p(showOffset.x - this.content.x, showOffset.y - this.content.y); //启动滚动循环
        if (cc.pLength(this._autoScrollTargetDelta) < 2) {
            this.node.emit("scrolling");
            this._autoScrolling = false;
            this._autoScrollTargetDelta = null; //此处写滚动事件是为了让每次滚动都有滚动事件回调
            this.node.emit("scroll-ended");
            ctime('scroll end');
        } else {
            this.node.emit("scrolling");
            this.content.runAction(cc.sequence(cc.moveTo(timeInSecond || 0, showOffset), cc.callFunc(function () {
                _this._autoScrolling = false;
                _this._autoScrollTargetDelta = null;
                _this._forceScrollOffset();
                _this.node.emit("scroll-ended");
                ctime('scroll end');
            })));
        }
    },

    _forceScrollOffset: function _forceScrollOffset() {

        //clog("onScrollToOffset  == >> ", offset)
        this.stopAutoScroll();
        this._onDrawDisplayItems(false, this.content.x, this.content.y);
    },

    _onDrawDisplayItems: function _onDrawDisplayItems(force, offsetX, offsetY) {

        //var start = (new Date()).getTime();
        //clog(" xxx => scroll  "+offset.x +"  "+offset.y+"   ")
        // clog("aa  == >>>   ", force, offset, this._contentPosition)
        var isPositive = true;
        var isDraw = force || !this._contentPosition;
        if (this._contentPosition) {
            if (!isDraw) {
                if (Math.abs(offsetX - this._contentPosition.x) > 2 || Math.abs(offsetY - this._contentPosition.y) > 2) {
                    //由于浮点的浮动原因，采用差值比较){
                    isDraw = true;
                }
            }
            // clog("aa  == >>>   ", force, offset, this._contentPosition)
            isPositive = offsetX > this._contentPosition.y || offsetY > this._contentPosition.x;
        } else {
            this._contentPosition = cc.p(offsetX, offsetY);
        }

        if (isDraw) {
            this._contentPosition.x = offsetX;
            this._contentPosition.y = offsetY;
            //clog("aa  == >>>   ", isDraw, force, offsetX, offsetY, this._contentPosition)
            this._drawItemsByList(offsetX, offsetY, isPositive);
        }
        //clog("######### scroll node ==>>" + ((new Date()).getTime() - start) + " visible card  " + this._displayItems.length)
    },

    _drawItemsByList: function _drawItemsByList(offsetX, offsetY, isPositive) {

        var disyplayRect = cc.rect(this.scrollOffsetX - offsetX, //横向需要取负数
        this.scrollOffsetY + offsetY, this.scrollWidth, //this.scroll.width,
        this.scrollHeight //this.scroll.height
        );

        //clog(" xxx => scroll  " + disyplayRect.x + "  " + disyplayRect.y + "   " + disyplayRect.width + "   " + disyplayRect.height)
        var collectItems = [];
        //遍历查找出需要显示的节点
        var infos_arr = this._infos;
        for (var index = 0, len = infos_arr.length; index < len; index++) {
            var info = infos_arr[index];
            if (cc.rectIntersectsRect(disyplayRect, info.rect)) {
                collectItems.push({
                    info: info,
                    node: null
                });
            }
        }

        var isCreaterNewItem = false; //是否有新的节点创建或者产生
        var displayItems = this._displayItems;
        var displayItemsLength = displayItems.length;
        //clog("xxx=============   aa  " + collectItems.length)
        for (var index = 0, len = collectItems.length; index < len; index++) {
            var item = collectItems[index];
            for (var n = 0; n < displayItemsLength; n++) {
                var displayItem = displayItems[n];
                if (displayItem.node && item.info.uuid == displayItem.info.uuid) {
                    if (item.info.tag == displayItem.info.tag) {
                        item.node = displayItem.node;
                        displayItem.node = null;
                        break;
                    }
                }
            }
        }

        //clog("xxx=============   aa  " + collectItems.length)
        for (var index = 0, len = collectItems.length; index < len; index++) {
            var item = collectItems[index];
            if (!item.node) {
                var isCreater = false;
                for (var n = 0; n < displayItemsLength; n++) {
                    var displayItem = displayItems[n];
                    if (displayItem.node && item.info.uuid == displayItem.info.uuid) {
                        if (isPositive && item.info.index > displayItem.info.index || !isPositive && item.info.index < displayItem.info.index) {
                            isCreaterNewItem = true;
                            item.node = displayItem.node;
                            item.node.tag = item.info.tag;
                            item.node.zIndex = item.info.index;
                            item.node.x = item.info.position.x;
                            item.node.y = item.info.position.y;
                            isCreater = true;
                            displayItem.node = null;
                            this._pool_put_call(item.node); // 回调刷新节点
                            this._pool_push_call(item.node, item.info); // 回调刷新节点
                            break;
                        }
                    }
                }

                if (!isCreater) {
                    isCreaterNewItem = true;
                    var node = Pool.get(item.info.prefab);
                    item.node = node;
                    item.node.tag = item.info.tag;
                    item.node.zIndex = item.info.index;
                    item.node.x = item.info.position.x;
                    item.node.y = item.info.position.y;
                    this.content.addChild(item.node); // 创建需要显示的  这个addChild要放在后面，防止设置x,y坐标后没有及时刷新
                    this._pool_push_call(item.node, item.info); // 回调刷新节点
                }
            }
        }

        for (var m = 0; m < displayItemsLength; m++) {
            var displayItem = displayItems[m];
            if (displayItem.node) {
                this._pool_put_call(displayItem.node); // 回调刷新节点
                Pool.put(displayItem.node);
            }
        }

        this._displayItems = collectItems; // 建立要显示的节点
        if (isCreaterNewItem) {
            this._pool_refesh_call(this._displayItems); // 有节点变动时候，回调刷新节点
        }
    },

    update: function update(dt) {

        //if (this._scrollComponent) {
        if (this._drity || this._autoScrolling) {
            this._onDrawDisplayItems(this._drity, this.content.x, this.content.y);
            this._drity = false;
        }
    }

});

cc._RF.pop();
},{"PrefabPoolManager":"PrefabPoolManager"}],"MenuButton":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'c89daUIVpVAX6S7C3yhtM1z', 'MenuButton');
// demo_catch_star/scripts/MenuButton.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ToggleFocus = require('ToggleFocus');

var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;
var MenuButton = (_dec = property(cc.Label), ccclass(_class = (_class2 = function (_ToggleFocus) {
    _inherits(MenuButton, _ToggleFocus);

    function MenuButton() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MenuButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuButton.__proto__ || Object.getPrototypeOf(MenuButton)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'label', _descriptor, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MenuButton, [{
        key: 'setup',
        value: function setup(_ref2) {
            var _ref2$text = _ref2.text,
                text = _ref2$text === undefined ? '' : _ref2$text,
                _ref2$onConfirm = _ref2.onConfirm,
                onConfirm = _ref2$onConfirm === undefined ? function () {} : _ref2$onConfirm;

            this.label.string = text;
            this.onConfirmCall = onConfirm;
        }
    }, {
        key: 'onConfirm',
        value: function onConfirm() {
            this.node.stopAllActions();
            this.node.runAction(cc.sequence(cc.scaleTo(0.2, 0.85), cc.scaleTo(0.2, 1.18), cc.scaleTo(0.2, 1.0)));

            this.onConfirmCall();
        }
    }]);

    return MenuButton;
}(ToggleFocus), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'label', [_dec], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
})), _class2)) || _class);
exports.default = MenuButton;
module.exports = exports['default'];

cc._RF.pop();
},{"ToggleFocus":"ToggleFocus"}],"Menu":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'c2c54kvqNJCLZ2o5vBpMpYv', 'Menu');
// demo_catch_star/scripts/Menu.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _MenuButton = require('./MenuButton');

var _MenuButton2 = _interopRequireDefault(_MenuButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var SimpleLayout = require('SimpleLayout');

var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;
var Menu = (_dec = property(cc.Prefab), _dec2 = property(SimpleLayout), ccclass(_class = (_class2 = function (_cc$Component) {
    _inherits(Menu, _cc$Component);

    function Menu() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Menu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'menuBtn', _descriptor, _this), _initDefineProp(_this, 'simpleLayout', _descriptor2, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * @type {SimpleLayout}
     */


    _createClass(Menu, [{
        key: 'setup',
        value: function setup(dataList) {
            var _this2 = this;

            dataList.map(function (data) {
                var item = cc.instantiate(_this2.menuBtn);
                _this2.node.addChild(item);
                item.getComponent(_MenuButton2.default).setup(data);
                _this2.simpleLayout.addItem(item);
            });
        }
    }]);

    return Menu;
}(cc.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'menuBtn', [_dec], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'simpleLayout', [_dec2], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
})), _class2)) || _class);
exports.default = Menu;
module.exports = exports['default'];

cc._RF.pop();
},{"./MenuButton":"MenuButton","SimpleLayout":"SimpleLayout"}],"MerryGoScroll":[function(require,module,exports){
"use strict";
cc._RF.push(module, '5d883yB0h9J/5WssmaVTLhi', 'MerryGoScroll');
// scripts/component/scroll/MerryGoScroll.js

"use strict";

var ListLayout = require("ListLayout");
var ListScrollView = require("ListScrollView");
//var ToggleInfoFocus = require('ToggleInfoFocus');

cc.Class({
    extends: cc.Component,

    properties: {

        layout: {
            default: null,
            type: ListLayout
        },

        scroll: {
            default: null,
            type: ListScrollView
        },

        prefab: {
            default: null,
            type: cc.Prefab
        },
        _selectIndex: 0, //当前选中item
        _scrollData: [], //用于滚动数据
        _refreshCall: null
    },

    onEnable: function onEnable() {
        var _this = this;

        if (cc.isValid(this.scroll)) {
            this.scroll.setPutCall(function (node) {
                var clean = function clean(script) {
                    script.clean();
                };
                _this.onSafeCall(node, "ToggleInfoFocus", clean);
            });

            this.scroll.setPushCall(function (node, info) {

                var setup = function setup(script) {
                    var data = info && info.data;
                    if (data) {
                        script.setup(data.itemdata, data.index);
                    }
                };
                _this.onSafeCall(node, "ToggleInfoFocus", setup);
            });

            this.scroll.setRefreshCall(function () {

                _this._merryGoScrollRefresh();
            });

            this.scroll.node.on("scrolling", function () {
                _this._merryGoScrollRefresh();
            });
        }

        this.node.on('toggle_info_index', function (event) {

            var userdata = event.getUserData();
            var selectIndex = userdata && userdata.data;
            if (null != selectIndex) {
                _this._selectIndex = selectIndex || 0; //设置选中
            }
        });

        this.node.on('toggle_info_click', function (event) {
            if (_this._merryGoClickCall) {
                var userdata = event.getUserData();
                var selectData = userdata && userdata.data;
                if (null != selectData) {
                    _this._merryGoClickCall(selectData, _this.getSelectIndex(), _this.getSelectData());
                }
            }
        });
    },

    onDisable: function onDisable() {

        this.node.off('toggle_info_index');
        this.node.off('toggle_info_click');

        if (cc.isValid(this.scroll)) {
            this.scroll.setPutCall(null);
            this.scroll.setPushCall(null);
            this.scroll.setRefreshCall(null);
            this.scroll.node.off("scroll-ended");
        }
    },

    onSafeCall: function onSafeCall(node, name, call) {
        if (cc.isValid(node)) {
            var script = node.getComponent(name);
            if (cc.isValid(script)) {
                call(script);
            }
        }
    },

    setMerryGoRefreshCall: function setMerryGoRefreshCall(call) {

        this._merryGoRefreshCall = call || function () {};
    },

    setMerryGoClickCall: function setMerryGoClickCall(call) {

        this._merryGoClickCall = call || function () {};
    },

    getSelectIndex: function getSelectIndex() {

        return this._selectIndex;
    },

    getSelectData: function getSelectData() {

        var data = this._scrollData[this._selectIndex];
        if (data) {
            return data.itemdata;
        }
    },

    setup: function setup(data) {

        var list = data || [];
        this._scrollData = [];
        for (var index = 0; index < list.length; index++) {
            this._scrollData.push({
                index: index,
                itemdata: list[index]
            });
        }
        this._selectIndex = 0;
        this.scroll.setPrefabInScroll(this.layout, this.prefab, this._scrollData, 0);
    },

    clean: function clean(data) {

        this.layout.clear();
        this.scroll.clear();
    },

    scrollByIndex: function scrollByIndex(index) {

        this._selectIndex = index || 0;
        var item = this.scroll.getAndScrollByData(this._scrollData[this._selectIndex]);
        if (item && item.node) {
            this.scroll.focusNodeInScrollView(item.node, true); //    立即刷新
            this._merryGoScrollRefresh();
            return item;
        }
    },

    _merryGoScrollRefresh: function _merryGoScrollRefresh() {

        if (this._merryGoRefreshCall) {
            this._merryGoRefreshCall(this.scroll.getDisplayItems(), this.getSelectIndex(), this.getSelectData());
        }
    }
});

cc._RF.pop();
},{"ListLayout":"ListLayout","ListScrollView":"ListScrollView"}],"NetImage":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'aa7a3jztK1LpqbqJyzAlZ7N', 'NetImage');
// demo_catch_star/scripts/NetImage.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;


var imageUrl = 'http://pic1.ptqy.gitv.tv/common/lego/20180309/a889f0cdfd7f4985b29887e3b6e63cbb.png';

var NetImage = (_dec = property(cc.Sprite), ccclass(_class = (_class2 = function (_cc$Component) {
    _inherits(NetImage, _cc$Component);

    function NetImage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NetImage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NetImage.__proto__ || Object.getPrototypeOf(NetImage)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'image', _descriptor, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NetImage, [{
        key: 'onLoad',
        value: function onLoad() {
            var _this2 = this;

            if (!cc.sys.isNative) {
                // 浏览器跨域访问有问题，改为从自己的服务器访问之
                imageUrl = 'http://10.4.146.207:4000/getImage?url=' + imageUrl;
            }

            cc.loader.load(imageUrl, function (error, texture) {
                if (texture && cc.isValid(_this2.image)) {
                    _this2.image.spriteFrame = new cc.SpriteFrame(texture);
                }
            });
        }
    }]);

    return NetImage;
}(cc.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'image', [_dec], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
})), _class2)) || _class);
exports.default = NetImage;
module.exports = exports['default'];

cc._RF.pop();
},{}],"Player":[function(require,module,exports){
"use strict";
cc._RF.push(module, '134ebxiacRB+ZvL1//e7CD9', 'Player');
// demo/script/Player.js

"use strict";

var SysEvent = require("SysEvent");

cc.Class({
    extends: cc.Component,

    properties: {
        canva: {
            default: null,
            type: cc.Node
        },

        enenyLaunch: {
            default: null,
            type: cc.Node
        },

        bullet: {
            default: null,
            type: cc.Prefab
        },

        event: {
            default: null,
            type: SysEvent
        },
        followSpeed: 0
    },

    // use this for initialization
    onLoad: function onLoad() {

        var self = this;
        self.moveToPos = cc.p(0, 0);
        self.isMoving = false;
        self.isMovingGap = null;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function onTouchBegan(touch, event) {
                var touchLoc = touch.getLocation();
                self.isMoving = true;
                self.moveToPos = self.canva.convertToNodeSpaceAR(touchLoc);
                cc.log(this, "click");
                return true; // don't capture event
            },
            onTouchMoved: function onTouchMoved(touch, event) {
                var touchLoc = touch.getLocation();
                self.moveToPos = self.canva.convertToNodeSpaceAR(touchLoc);
            },
            onTouchEnded: function onTouchEnded(touch, event) {
                self.isMoving = false; // when touch ended, stop moving
            }
        }, self.node);

        //cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onNotifyKeyUp, this);
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event) => {
        //     switch (event.keyCode) {
        //         case cc.KEY.f4:
        //             break;
        //         case cc.KEY.left:
        //         case cc.KEY.dpadLeft:
        //             self.isMovingGap = cc.p(-10, 0);
        //             event.stopPropagation()
        //             break;
        //         case cc.KEY.right:
        //         case cc.KEY.dpadRight:
        //             self.isMovingGap = cc.p(10, 0);
        //             event.stopPropagation()
        //             break;
        //         case cc.KEY.up:
        //         case cc.KEY.dpadUp:
        //             self.isMovingGap = cc.p(0, 10);
        //             event.stopPropagation()
        //             break;
        //         case cc.KEY.down:
        //         case cc.KEY.dpadDown:
        //             self.isMovingGap = cc.p(0, -10);
        //             event.stopPropagation()
        //             break;
        //         case cc.KEY.enter:
        //         case cc.KEY.dpadCenter:
        //             break;
        //     }
        // });

        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, (event) => {
        //     self.isMovingGap = null;
        // });

        this.event.on(cc.SystemEvent.EventType.KEY_UP, function (event) {
            switch (event.keyCode) {
                case cc.KEY.f4:
                    break;
                case cc.KEY.left:
                case cc.KEY.dpadLeft:
                    self.isMovingGap = cc.p(-10, 0);
                    event.stopPropagation();
                    break;
                case cc.KEY.right:
                case cc.KEY.dpadRight:
                    self.isMovingGap = cc.p(10, 0);
                    event.stopPropagation();
                    break;
                case cc.KEY.up:
                case cc.KEY.dpadUp:
                    self.isMovingGap = cc.p(0, 10);
                    event.stopPropagation();
                    break;
                case cc.KEY.down:
                case cc.KEY.dpadDown:
                    self.isMovingGap = cc.p(0, -10);
                    event.stopPropagation();
                    break;
                case cc.KEY.enter:
                case cc.KEY.dpadCenter:
                    break;
            }
        });

        this.schedule(function () {
            // 这里的 this 指向 component
            this.launchBullet();
        }, 0.1);
    },

    launchBullet: function launchBullet() {
        var bullet = cc.instantiate(this.bullet);
        bullet.parent = this.canva;
        bullet.setPosition(this.node.position);

        var bulletScript = bullet.getComponent("Bullet");
        bulletScript.enenyLaunch = this.enenyLaunch;
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (!this.isMoving) {
            if (this.isMovingGap) {
                this.moveToPos.x = this.moveToPos.x + this.isMovingGap.x;
                this.moveToPos.y = this.moveToPos.y + this.isMovingGap.y;
                this.isMovingGap = null;
            } else {
                return;
            }
        }
        // var oldPos = this.node.position;
        // // get move direction
        // var direction = cc.pNormalize(cc.pSub(this.moveToPos, oldPos));
        // // multiply direction with distance to get new position
        // var newPos = cc.pAdd(oldPos, cc.pMult(direction, this.followSpeed * dt));

        // if (cc.pDistance(oldPos, this.moveToPos) > 5) {
        //     // set new position
        //     this.node.setPosition(newPos);
        // }
        this.node.setPosition(this.moveToPos);
    }
});

cc._RF.pop();
},{"SysEvent":"SysEvent"}],"PrefabLoader":[function(require,module,exports){
"use strict";
cc._RF.push(module, '48af0Dyv5ROO5u8/kHASv2o', 'PrefabLoader');
// scripts/component/helper/PrefabLoader.js

"use strict";

var Parser = require("PrefabParser");
var PrefabLoader = {

    strogeCache: {}, //信息缓存

    strogeResCache: {}, //信息缓存

    load: function load(path, callback) {

        clog("load >>>>> start path ");
        if (path) {
            var prefab = this._getPrefab(path);
            if (prefab) {

                clog("load >>>>> callback(null, prefab)  ", path);
                callback && callback(null, prefab);
                return;
            }

            clog("load >>>>> start _checkAndStartLoadUrl  ", path);
            this._checkAndStartLoadUrl(path, callback);
        } else if (callback) {
            callback && callback("PrefabLoader.loadPrefab invaild url", null);
        }
    },

    loadPrefabByPage: function loadPrefabByPage(name, callback) {

        this.load(this._getPagePath(name), callback);
    },

    unload: function unload(path) {

        var url = this._getUrl(path);
        var info = url && this.strogeCache[url];
        if (info && info.url) {
            //清除关联解析器           
            var prefab = this._getPrefab(path);
            if (prefab) {
                Parser.disInstantiate(prefab);
            }
            delete this.strogeCache[url];
            this._releaseStrogeCache(cc.loader.getDependsRecursively(info.url));
        }
    },

    unloadByPage: function unloadByPage(name) {

        this.unload(this._getPagePath(name));
    },

    unloadByPrefab: function unloadByPrefab(prefab) {

        for (var key in this.strogeCache) {
            var info = this.strogeCache[key];
            if (info && prefab == info.prefab) {
                this.unload(info.path);
                break;
            }
        }
    },

    retainScene: function retainScene(scene) {

        if (scene) {
            var deps = scene.dependAssets; //cc.loader.getDependsRecursively(info && info.uuid);
            this._retainStrogeCache(deps);
        }
    },

    retainAsset: function retainAsset(prefab) {

        if (prefab) {
            this._retainStrogeCache(cc.loader.getDependsRecursively(prefab));
        }
    },

    _getUrl: function _getUrl(url) {

        return url;
    },

    _getPagePath: function _getPagePath(name) {

        return name && "prefabs/page/" + name;
    },

    _getPrefab: function _getPrefab(path) {

        var url = this._getUrl(path);
        var info = url && this.strogeCache[url];
        return info && info.prefab;
    },

    _checkAndStartLoadUrl: function _checkAndStartLoadUrl(path, callback) {
        var _this = this;

        var url = this._getUrl(path);
        cc.loader.loadRes(url, function (err, assets) {
            if (err) {
                callback && callback(err, null);
            } else {
                _this.strogeCache[url] = {
                    path: path,
                    url: url,
                    prefab: assets
                };
                _this._retainStrogeCache(cc.loader.getDependsRecursively(url));
                callback && callback(null, assets);
            }
        });
    },

    _retainStrogeCache: function _retainStrogeCache(deps) {
        //存储关联资源

        if (deps && deps.length > 0) {
            for (var index = 0, len = deps.length; index < len; index++) {
                var dep = deps[index];
                if (dep) {
                    var count = this.strogeResCache[dep]; //为了优化效率，直接使用计数
                    if (!count) {
                        count = 0;
                    }

                    this.strogeResCache[dep] = count + 1;
                    //clog("loader retain >> ", dep, count)
                }
            }
        }
    },

    _releaseStrogeCache: function _releaseStrogeCache(deps) {
        //存储关联资源

        if (deps && deps.length > 0) {
            for (var index = 0, len = deps.length; index < len; index++) {
                var dep = deps[index];
                if (dep) {
                    var count = this.strogeResCache[dep]; //为了优化效率，直接使用计数
                    if (count && count > 1) {
                        this.strogeResCache[dep] = count - 1;
                    } else {
                        //clog("loader release >> ", dep)
                        cc.loader.release(dep);
                        this.strogeResCache[dep] = null;
                    }
                }
            }
        }
    },

    dumpCacheInfo: function dumpCacheInfo() {

        for (var url in this.strogeCache) {
            var info = this.strogeCache[url];
            if (info) {
                clog(info.url);
            }
        }
    }
};

exports = module.exports = PrefabLoader;

cc._RF.pop();
},{"PrefabParser":"PrefabParser"}],"PrefabParser":[function(require,module,exports){
"use strict";
cc._RF.push(module, '43e96woJdlDCZ+OVaBaNcox', 'PrefabParser');
// scripts/component/helper/PrefabParser.js

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function CreterParser(data, parser) {

    var _parser_objs = [];
    var _parser_funcs = []; // 存储函数结构
    var _parser_value = []; // 存储变量索引

    function escapeForJS(s) {
        return JSON.stringify(s).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }

    function cleanEval(code) {
        return eval(code);
    };

    function getClassName(func) {

        var clsName = cc.js.getClassName(func);
        var clsNameIsModule = clsName.indexOf(".") !== -1;
        if (clsNameIsModule) {
            try {
                clsNameIsModule = func === cleanEval(clsName);
                if (clsNameIsModule) {
                    return clsName;
                }
            } catch (e) {}
        }

        var index = _parser_funcs.indexOf(func);
        if (index < 0) {
            index = _parser_funcs.length;
            _parser_funcs.push(func);
        }
        return "(" + "F[" + index + "]" + ")";
    }

    function getObjName(obj) {

        var index = _parser_objs.indexOf(obj);
        if (index < 0) {
            index = _parser_objs.length;
            _parser_objs.push(obj);
        }
        return "O[" + index + "]";
    }

    function getValueIndexName(obj) {

        if (obj._Ms$ParserIndex) {

            return obj._Ms$ParserIndex;
        } else {
            var index = _parser_value.length + 1;
            var keyObjName = "vv" + index;
            obj._Ms$ParserIndex = keyObjName;
            _parser_value.push(obj);
            return keyObjName;
        }
    }

    function getNewValueTypeCode(value) {

        var clsName = cc.js.getClassName(value);
        var type = value.constructor;
        var res = 'new ' + clsName + '(';
        var i;
        if (type === cc.Mat3 || type === cc.Mat4) {
            var data = value.data;
            for (i = 0; i < data.length; i++) {
                res += data[i];
                if (i < data.length - 1) {
                    res += ',';
                }
            }
        } else {
            for (i = 0; i < type.__props__.length; i++) {
                var prop = type.__props__[i];
                var propVal = value[prop];
                if ((typeof propVal === "undefined" ? "undefined" : _typeof(propVal)) === 'object') {
                    cc.errorID(3641, clsName);
                    return 'new ' + clsName + '()';
                }
                res += propVal;
                if (i < type.__props__.length - 1) {
                    res += ',';
                }
            }
        }
        return res + ')';
    }

    function write(list, expression) {

        list.push(expression);
    }

    function writeFeild(list, name, wiriteCall) {

        write(list, "o.");
        write(list, name);
        write(list, "=");
        wiriteCall(list);
        write(list, ";");
    }

    function writeAttri(list, name, value) {

        writeFeild(list, name, function (list) {
            write(list, value);
        });
    }

    function checkDefaultValue(def, value) {

        if ("function" == typeof def) {
            try {
                def = def();
            } catch (e) {
                return false;
            }
        }

        if (def === value) {
            return true;
        }

        if (def && value) {
            if (def instanceof cc.ValueType && def.equals(value)) {
                return true;
            }
            if (Array.isArray(def) && Array.isArray(value) || def.constructor === Object && value.constructor === Object) {
                try {
                    return JSON.stringify(def) === JSON.stringify(value);
                } catch (e) {}
            }
        }
        return false;
    }

    function writeProperty(list, name, value, isQuote) {
        //最后一个参数表示在引用的地方创建，不需要设置父类

        if ("_sgNode" == name || "uuid" == name) {
            return;
        }

        if ("object" == (typeof value === "undefined" ? "undefined" : _typeof(value))) {

            /*if ("_parent" == name || "node" == name) {
                  if (isQuote) {
                    if (value._Ms$ParserIndex) {
                        return writeAttri(list, name, value._Ms$ParserIndex)
                    } else {
                        return writeAttri(list, name, "parent")
                    }
                }
                return;
            }*/

            // 值类型的处理
            if (value instanceof cc.ValueType) {

                return writeAttri(list, name, getNewValueTypeCode(value));
            }

            // 资源类型直接使用实例
            if (value instanceof cc.Asset || value instanceof cc.AudioSource || value instanceof cc.SpriteFrame) {

                return writeAttri(list, name, getObjName(value));
            }

            var ctor = value.constructor;
            if (cc.Class._isCCClass(ctor)) {

                if (value instanceof cc._BaseNode || value instanceof cc.Component) {

                    if (value._Ms$ParserIndex) {
                        //脚本索引节点
                        return writeAttri(list, name, getValueIndexName(value));
                    }
                }

                return writeFeild(list, name, function (list) {
                    writeObject(list, value, writeNode); // 这里表示创建的节点是一个引用
                });
                //return writeAttri(list, name, getObjName(value))
            } else {

                if (ctor === Array) {

                    return writeArray(list, name, value);
                }
                if (ctor === Object) {

                    return writeAttri(list, name, escapeForJS(value));
                }
                return writeAttri(list, name, getObjName(value));
            }
        }

        if ("function" == typeof value) {
            return writeAttri(list, name, getClassName(value));
        }

        if ("string" == typeof value) {
            return writeAttri(list, name, escapeForJS(value));
        }

        if ("boolean" == typeof value || "number" == typeof value) {

            if ("_objFlags" == name) {

                value &= cc.Object.Flags.PersistentMask;
            }
            return writeAttri(list, name, value);
        }
    }

    function writeArray(list, name, value) {

        if (value.length > 0) {
            writeFeild(list, name, function (list) {
                write(list, "new Array(");
                write(list, value.length);
                write(list, ")");
            });

            for (var p = 0; p < value.length; p++) {

                var child = value[p];
                if (!child) {
                    writeAttri(list, name + "[" + p + "]", "null");
                } else if (!child._Ms$ParserIndex) {
                    //脚本索引节点
                    if (child instanceof cc.Asset) {
                        writeAttri(list, name + "[" + p + "]", getObjName(child));
                    } else {
                        writeFeild(list, name + "[" + p + "]", function (list) {
                            writeObject(list, child, writeNode);
                        });
                    }
                } else {

                    writeFeild(list, name + "[" + p + "]", function (list) {
                        write(list, "(function (parent) {");
                        write(list, "var o = " + getValueIndexName(child) + ";");
                        if ("_components" == name) {
                            writeAttri(list, "node", "parent");
                        }
                        if ("_children" == name) {
                            writeAttri(list, "_parent", "parent");
                        }
                        write(list, "return o;");
                        write(list, "})(o)");
                    });
                }
            }
        }
    }

    function writeObject(list, obj, wiriteCall) {

        var klass = obj.constructor;
        var keyObjName = getValueIndexName(obj);

        write(list, "(function (parent) {");
        write(list, "var o = " + keyObjName + " = new ");
        write(list, getClassName(klass));
        write(list, "();");
        wiriteCall(list, obj); // 第三个参数用来取消node的链接
        write(list, "return o;");
        write(list, "})(o)");
    }

    function writeNode(list, obj, isQuote) {

        var klass = obj.constructor;
        if (klass && klass !== Object) {
            var props = klass.__props__;
            var attrs = cc.Class.Attr.getClassAttrs(klass);
            if (props) {
                for (var p = 0; p < props.length; p++) {
                    var key = props[p];
                    var val = obj[key];
                    if (undefined !== val && null !== val && !checkDefaultValue(attrs[key + cc.Class.Attr.DEFAULT], val)) {
                        writeProperty(list, key, val, isQuote);
                    }
                }
            }
        }
    }

    function writeModule(list, obj) {

        write(list, "(function (parent) {");
        write(list, "var o = " + getClassName(value) + ";");
        writeNode(list, obj);
        write(list, "return new cc.Node();");
        write(list, "})(o)");
    }

    function writePrefab(obj) {

        var funName = "(function (O, F, R) {";
        var keyObjName = getValueIndexName(obj);

        var list = [];
        write(list, "var o = " + keyObjName + " = new cc.Node();");
        writeNode(list, obj);
        write(list, "return o;");
        write(list, "})");

        var vvlist = ["var vv0"];
        for (var i = 0; i < _parser_value.length; i++) {
            vvlist.push(",vv" + (i + 1));
            _parser_value[i]._Ms$ParserIndex = null;
        }
        vvlist.push(";");
        return funName + vvlist.join("") + list.join("");
    }

    // return (function () {

    //     var code = writePrefab(data)
    //     clog(">>>>> ",code)
    //     return cleanEval(code).bind(null, _parser_objs, _parser_funcs)
    // })()

    return function () {

        var code = writePrefab(data);
        var objs = _parser_objs;
        var funcs = _parser_funcs;
        return {
            "objs": objs,
            "foo": cleanEval(code).bind(null, objs, funcs)
        };
    }();
}

//解析
var PrefabParser = {

    _prefabCompile: {},

    _classAttrCache: {},

    clear: function clear(prefab) {

        // if (prefab && prefab.data && prefab.data._prefab) {
        //     var fileId = prefab.data._prefab.fileId
        //     if (fileId) {
        //         //this._prefabCompile[fileId] = null; //清理加载的预制物体
        //     }
        // }
    },

    compile: function compile(prefab) {

        if (prefab && prefab.data && prefab.data._prefab && prefab.data._prefab.fileId) {
            var fileId = prefab.data._prefab.fileId;
            var cache = this._prefabCompile[fileId];
            // if (cache && cache.prefab == prefab) {
            //     return cache.creater;
            // } else {
            //     var creater = CreterParser(prefab.data, this)
            //     this._prefabCompile[fileId] = {
            //         "prefab": prefab,
            //         "creater": creater
            //     };
            //     return creater;
            // }

            if (cache) {
                var creater = cache.creater;
                if (cache.prefab != prefab) {
                    var objs = creater.objs;
                    var loader = cc.loader;
                    for (var i = 0; i < objs.length; i++) {
                        var id = loader._getReferenceKey(objs[i]);
                        var item = loader.getItem(id);
                        objs[i] = item && item.content;
                    }
                }
                return creater.foo;
            } else {
                var creater = CreterParser(prefab.data, this);
                this._prefabCompile[fileId] = {
                    "prefab": prefab,
                    "creater": creater
                };
                return creater.foo;
            }
        } else {
            clog("Error !! prefab data is invaild !  compile : PrefabParser");
        }
    },

    instantiate: function instantiate(prefab) {

        if (CC_JSB) {
            //代码仅仅在JSB环境下使用，html5环境下直接是一个js对象的浅拷贝，直接用原本引擎的方法就好
            if (prefab instanceof cc.Prefab) {
                var node = null;
                try {
                    node = this.compile(prefab)();
                    node._onBatchCreated();
                } catch (e) {
                    clog("instantiate error : ", e.toString());
                }
                return node;
            } else {

                clog("Error !! prefab is invaild !  instantiate : PrefabParser");
            }
        } else {

            return cc.instantiate(prefab);
        }
    },

    disInstantiate: function disInstantiate(prefab) {

        if (CC_JSB) {
            //代码仅仅在JSB环境下使用，html5环境下直接是一个js对象的浅拷贝，直接用原本引擎的方法就好
            if (prefab instanceof cc.Prefab) {
                this.clear(prefab);
                prefab.destroy();
            }
        }
    }
};

module.exports = PrefabParser;

cc._RF.pop();
},{}],"PrefabPoolManager":[function(require,module,exports){
"use strict";
cc._RF.push(module, '206a3Oz4F1KkbuEztjdPqKA', 'PrefabPoolManager');
// scripts/component/helper/PrefabPoolManager.js

"use strict";

var Parser = require("PrefabParser");
var Loader = require("PrefabLoader");

var PrefabPoolManager = {

    _prefabPoolMap: {},

    _getPool: function _getPool(fileId) {

        if (fileId) {
            return this._prefabPoolMap[fileId];
        }
    },

    _getAndCreaterPool: function _getAndCreaterPool(fileId) {

        if (fileId) {

            // clog("poo uuid" + prefabInfo.fileId);
            var pool = this._prefabPoolMap[fileId];
            if (!pool) {
                pool = new cc.NodePool();
                this._prefabPoolMap[fileId] = pool;
            }
            return pool;
        } else {
            clog("Error!!! no pool uuid _getAndCreaterPool : PrefabPoolManager");
        }
    },

    _getPrefabId: function _getPrefabId(prefab) {

        if (prefab && prefab.data && prefab.data._prefab && prefab.data._prefab) {

            return prefab.data._prefab.fileId;
        } else {
            clog("Error!!! this prefab has no prefabInfo in _getPrefabId : PrefabPoolManager");
        }
    },

    _getPrefabIdByInstantiate: function _getPrefabIdByInstantiate(node) {

        if (node._prefab && node._prefab) {

            return node._prefab.fileId;
        } else {
            clog("Error!!! this node has no prefabInfo in _getPrefabIdByInstantiate : PrefabPoolManager");
        }
    },

    fill: function fill(prefab, size) {

        var pool = this._getAndCreaterPool(this._getPrefabId(prefab));

        for (var i = pool.size(); i < size; ++i) {
            pool.put(Parser.instantiate(prefab));
        }
    },

    fillAsync: function fillAsync(prefab, size, call) {

        var pool = this._getAndCreaterPool(this._getPrefabId(prefab));

        var asyncCallers = [];
        for (var i = pool.size(); i < size; ++i) {
            asyncCallers.push(function (done) {
                pool.put(Parser.instantiate(prefab));
                done(null);
            });

            asyncCallers.push(function (done) {
                setTimeout(function () {
                    done(null);
                }, 0);
            });
        }

        async.series(asyncCallers, function (err, results) {
            if (call) {
                call();
            }
        });
    },

    get: function get(prefab, arg) {

        var pool = this._getPool(this._getPrefabId(prefab));

        var node = null;
        if (pool && pool.size() > 0) {

            node = pool.get(arg);
            if (node) {
                node.scaleX = 1;
                node.scaleY = 1;
                node.active = true;
            }
        }
        if (!node) {
            node = Parser.instantiate(prefab);
            Loader.retainAsset(prefab);
            //clog("creater pool  instat  xxx  ",this._getPrefabId(prefab))
        }
        // else{
        //     clog("creater pool  get  xxx  ",this._getPrefabId(prefab),pool && pool.size())
        // }
        return node;
    },

    put: function put(node) {

        if (node && node._prefab) {
            node.stopAllActions();
            node.active = false;
            this._getAndCreaterPool(this._getPrefabIdByInstantiate(node)).put(node);
        } else {
            clog("Error!!! no prefab info in node : PrefabPool.put");
        }
    },

    clear: function clear(prefab) {

        var pool = this._getPool(this._getPrefabId(prefab));

        if (pool) {
            pool.clear();
        }
    },

    clearAll: function clearAll() {
        _.each(this._prefabPoolMap, function (pool, key) {
            pool.clear();
        });
        this._prefabPoolMap = {};
    }
};

exports = module.exports = PrefabPoolManager;

cc._RF.pop();
},{"PrefabLoader":"PrefabLoader","PrefabParser":"PrefabParser"}],"SearchHelper":[function(require,module,exports){
"use strict";
cc._RF.push(module, '617a0Fn49BNfLzeU8oUQ2C4', 'SearchHelper');
// scripts/component/helper/SearchHelper.js

"use strict";

function getConstructor(typeOrClassName) {
    if (!typeOrClassName) {
        cc.errorID(3804);
        return null;
    }
    if ("string" === typeof typeOrClassName) {
        return JS.getClassByName(typeOrClassName);
    }
    return typeOrClassName;
}

function findComponents(node, constructor, components) {
    for (var i = 0; i < node._components.length; ++i) {
        var comp = node._components[i];
        comp instanceof constructor && components.push(comp);
    }
}

function findChildComponents(children, constructor, components) {
    for (var i = 0; i < children.length; ++i) {
        var node = children[i];
        findComponents(node, constructor, components);
        node._children.length > 0 && findChildComponents(node._children, constructor, components);
    }
}

function findFatherComponent(node, constructor) {
    var temp = node;
    while (temp) {
        var components = temp._components;
        for (var i = 0; i < components.length; ++i) {
            var comp = components[i];
            if (comp instanceof constructor) {
                return comp;
            }
        }
        temp = temp.parent;
    }
}

var SearchHelper = {

    isContain: function isContain(father, node) {

        if (father && node) {
            return node.isChildOf(father);
        }
        return false;
    },

    instanceof: function _instanceof(comp, typeOrClassName) {

        return comp instanceof getConstructor(typeOrClassName);
    },

    getComponentByFather: function getComponentByFather(node, typeOrClassName) {

        var constructor = getConstructor(typeOrClassName);
        return findFatherComponent(node, constructor);
    },

    getComponentsInChildren: function getComponentsInChildren(node, typeOrClassName) {
        var constructor = getConstructor(typeOrClassName),
            components = [];
        if (constructor) {
            findComponents(node, constructor, components);
            findChildComponents(node._children, constructor, components);
        }
        return components;
    }
};

exports = module.exports = SearchHelper;

cc._RF.pop();
},{}],"ShaderHelper":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'b7f0eKNsgRH6p2+Vn4fBh9L', 'ShaderHelper');
// scripts/component/helper/ShaderHelper.js

"use strict";

var vertShader = "attribute vec4 a_position;\n" + "attribute vec2 a_texCoord;\n" + "attribute vec4 a_color;\n" + "varying vec4 v_fragmentColor;\n" + "varying vec2 v_texCoord;\n" + "void main()\n" + "{\n" + "gl_Position = CC_PMatrix * a_position;\n" + "v_fragmentColor = a_color;\n" + "v_texCoord = a_texCoord;\n" + "}";

var fragShader = "varying vec4 v_fragmentColor;\n" + "varying vec2 v_texCoord;\n" + "void main()\n" + "{\n" + +"   gl_FragColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);\n" + "}";

var grayFragSource = "varying vec4 v_fragmentColor;\n" + "varying vec2 v_texCoord;\n" + "void main()\n" + "{\n" + "   vec4 col = texture2D(CC_Texture0, v_texCoord);\n" + "   float grey = dot(col.rgb, vec3(0.299, 0.587, 0.114));\n" + "   gl_FragColor = vec4(grey, grey, grey, col.a);\n" + "}";

var centerShadowFragSource = "varying vec4 v_fragmentColor;\n" + "varying vec2 v_texCoord;\n" + "uniform float u_edge;\n" + "uniform float u_offset; \n" + "\n" + "vec4 composite(vec4 over, vec4 under)\n" + "{\n" + "	return over + (1.0 - over.a)*under;\n" + "}\n" + "\n" + "void main()\n" + "{	\n" + "	float edge = u_edge;\n" + "	float offset = u_offset;\n" + "	\n" + "	float dis = 0.0;\n" + "	vec2 texCoord = vec2(0.5 + (v_texCoord.x - 0.5) * ((offset*2.0) + 1.0), 0.5 + (v_texCoord.y - 0.5) * ((offset*2.0) + 1.0)); \n" + "	if ( texCoord.x < edge )\n" + "	{\n" + "		if ( texCoord.y < edge )\n" + "		{\n" + "			dis = distance( texCoord, vec2(edge, edge) );\n" + "		}\n" + "		if ( texCoord.y > (1.0 - edge) )\n" + "		{\n" + "			dis = distance( texCoord, vec2(edge, (1.0 - edge)) );\n" + "		}\n" + "	}\n" + "	else if ( texCoord.x > (1.0 - edge) )\n" + "	{\n" + "		if ( texCoord.y < edge )\n" + "		{\n" + "			dis = distance( texCoord, vec2((1.0 - edge), edge ) );\n" + "		}\n" + "		if ( texCoord.y > (1.0 - edge) )\n" + "		{\n" + "			dis = distance( texCoord, vec2((1.0 - edge), (1.0 - edge) ) );\n" + "		}\n" + "	}\n" + "	\n" + "	if(dis > 0.001)\n" + "	{\n" + "	\n" + "		float gap = edge * 0.1;\n" + "		if(dis <= edge - gap)\n" + "		{\n" + "			gl_FragColor = v_fragmentColor * texture2D( CC_Texture0,texCoord);\n" + "		}\n" + "		else if(dis <= edge)\n" + "		{\n" + "			gl_FragColor = composite(v_fragmentColor * texture2D( CC_Texture0,texCoord) * (gap - (dis - edge + gap))/gap,vec4( 0.0, 0.0, 0.0,0.4));\n" + "		}\n" + "		else\n" + "		{\n" + "			gl_FragColor = vec4(0.0, 0.0, 0.0, 0.4* (offset - (dis - edge))/offset);\n" + "		}\n" + "	}\n" + "	else\n" + "	{\n" + "		\n" + "		float absX = abs(texCoord.x - 0.5);\n" + "		if(absX > 0.5)\n" + "		{\n" + "			gl_FragColor = vec4( 0.0, 0.0, 0.0, 0.4* (offset - (absX - 0.5))/offset);\n" + "		}\n" + "		else \n" + "		{\n" + "			float absY = abs(texCoord.y - 0.5);\n" + "			if (absY > 0.5){\n" + "				gl_FragColor = vec4( 0.0, 0.0, 0.0,0.4*(offset - (absY - 0.5))/offset);\n" + "			}\n" + "			else{\n" + "				gl_FragColor =  v_fragmentColor * texture2D( CC_Texture0,texCoord);\n" + "			}\n" + "		}\n" + "	}\n" + "}";

var centerFragSource1 = "varying vec4 v_fragmentColor;" + "varying vec2 v_texCoord;" + "uniform float u_edge;" + "" + "vec4 composite(vec4 over, vec4 under)" + "{" + "	return over + (1.0 - over.a)*under;" + "}" + "	" + "void main()" + "{	" + "	float dis = 0.0;" + "	float edge = u_edge;" + "	if ( v_texCoord.x < edge )" + "	{" + "		if ( v_texCoord.y < edge )" + "		{" + "			dis = distance( v_texCoord, vec2(edge, edge) );" + "		}" + "		if ( v_texCoord.y > (1.0 - edge) )" + "		{" + "			dis = distance( v_texCoord, vec2(edge, (1.0 - edge)) );" + "		}" + "	}" + "	else if ( v_texCoord.x > (1.0 - edge) )" + "	{" + "		if ( v_texCoord.y < edge )" + "		{" + "			dis = distance( v_texCoord, vec2((1.0 - edge), edge ) );" + "		}" + "		if ( v_texCoord.y > (1.0 - edge) )" + "		{" + "			dis = distance( v_texCoord, vec2((1.0 - edge), (1.0 - edge) ) );" + "		}" + "	}" + "	" + "	gl_FragColor =  v_fragmentColor * texture2D( CC_Texture0,v_texCoord) * step(dis, edge);" + "}";

var centerFragSource = "varying vec4 v_fragmentColor;\n" + "varying vec2 v_texCoord;\n" + "uniform float u_edge_x;\n" + "uniform float u_edge_y;\n" + "float pow2f(float v) {\n" + "   return v * v;\n" + " }\n" + "void main()\n" + "{\n" + "    vec2 uv = vec2(abs(v_texCoord.x-0.5),abs(v_texCoord.y-0.5));\n" + "    float rx = uv.x - u_edge_x;\n" + "    float ry = uv.y - u_edge_y;\n" + "    float nx = step(u_edge_x,uv.x);\n" + "    float ny = step(u_edge_y,uv.y);\n" + "    float alpha = 1.0 - nx*ny*step(1.0,pow2f(rx/(0.5-u_edge_x)) + pow2f(ry/(0.5-u_edge_y)));\n" + "	 color col = v_fragmentColor * texture2D( CC_Texture0,v_texCoord);\n" + "	 col.a = alpha;\n" + "	 gl_FragColor = col;\n" + "}";

var ccGraphicsVertShader = "attribute vec4 a_position;\n" + "attribute vec2 a_texCoord;\n" + "attribute vec4 a_color;\n" + "varying vec4 v_fragmentColor;\n" + "varying vec2 v_texCoord;\n" + "void main()\n" + "{\n" + "gl_Position = CC_MVPMatrix * a_position;\n" + "v_fragmentColor = a_color;\n" + "v_texCoord = a_texCoord;\n" + "}";

var ccGraphicsFragSource = "varying vec4 v_fragmentColor;\n" + "varying vec2 v_texCoord;\n" + "uniform float strokeMult;\n" + "uniform vec4 color;\n" + "float strokeMask() {\n" + "   return min(1.0, (1.0-abs(v_texCoord.x*2.0-1.0))*strokeMult) * min(1.0, v_texCoord.y);\n" + " }\n" + "void main(void)\n" + "{\n" + "    float strokeAlpha = v_fragmentColor.a * strokeMask();\n" + "    gl_FragColor = vec4(color.rgb, color.a * strokeAlpha);\n" + "}";

var centerFragSource = "varying vec4 v_fragmentColor;\n" + "varying vec2 v_texCoord;\n" + "uniform float u_edge_x;\n" + "uniform float u_edge_y;\n" + "uniform float u_edge_fade;\n" + "float pow2f(float v) {\n" + "   return v * v;\n" + "}\n" + "void main()\n" + "{\n" + "	vec2 uv = vec2(abs(v_texCoord.x-0.5),abs(v_texCoord.y-0.5));\n" + "	float rx = uv.x - u_edge_x;\n" + "	float ry = uv.y - u_edge_y;\n" + "	float nx = step(u_edge_x,uv.x);\n" + "	float ny = step(u_edge_y,uv.y);\n" + "	float s = sqrt(pow2f(rx/(0.5-u_edge_x)) + pow2f(ry/(0.5-u_edge_y)));\n" + "	float d = nx*ny*step(1.0,s);\n" + "	float e = (1.0 + u_edge_fade - s )/u_edge_fade;\n" + "	float f = d * (e * 0.6 + 0.4) * step(s, 1.0 + u_edge_fade);\n" + "	gl_FragColor = (1.0- d + f) * v_fragmentColor * texture2D( CC_Texture0,v_texCoord);\n" + "}";

var centerMaskSource = "precision mediump float;\n" + "varying vec4 v_fragmentColor;\n" + "varying vec2 v_texCoord;\n" + "float pow2f(float v) {\n" + "   return v * v;\n" + "}\n" + "void main()\n" + "{\n" + "	vec2 uv = vec2(abs(v_texCoord.x-0.5),abs(v_texCoord.y-0.5));\n" + "   float pa = 0.0;\n" + "   float pb = 0.0;\n" + "   if (v_texCoord.y == 0.5) {\n" + "       pa = 1.0;\n" + "       pb = 0.0;\n" + "   } else {\n" + "	    pa = step(v_texCoord.y,0.5);\n" + "	    pb = step(0.5,v_texCoord.y);\n" + "   }\n" + "	float s = sqrt(pow2f(uv.x) + pow2f(uv.y));\n" + "	gl_FragColor = (pa + step(s,0.5) * pb) * v_fragmentColor * texture2D( CC_Texture0,v_texCoord);\n" + "}";

var SpriteShader = { //变灰的数据结构

    frag: null,
    vert: null,
    setUniformsByProgramState: null,
    setUniformsByShaderProgram: null
};

var GreyShader = { //变灰的数据结构

    frag: grayFragSource,
    vert: null,
    setUniformsByProgramState: null,
    setUniformsByShaderProgram: null
};

var CenterShader = { //圆角的数据结构

    frag: centerFragSource,
    vert: null,
    setUniformsByProgramState: function setUniformsByProgramState(glProgramState, sprite) {
        //用于native的shader

        if (glProgramState && cc.isValid(sprite)) {

            var ux = 0.5;
            var uy = 0.5;
            var fade = 1.0;
            var spriteFrame = sprite.spriteFrame;
            if (cc.isValid(spriteFrame)) {
                var texture = spriteFrame.getTexture();
                if (texture) {
                    // var pixWidth = texture.width;
                    // var pixHeight = texture.height;
                    // var fixSizeX = Math.floor(sprite.node.width / pixWidth);
                    // var fixsizeY = Math.floor(sprite.node.height / pixHeight);
                    ux = 0.5 - 15 / sprite.node.width;
                    uy = 0.5 - 15 / sprite.node.height;
                    fade = 3 / 15;
                    //texture.setAntiAliasTexParameters(); 
                }
            }
            glProgramState.setUniformFloat("u_edge_x", ux);
            glProgramState.setUniformFloat("u_edge_y", uy);
            glProgramState.setUniformFloat("u_edge_fade", fade);
        }
    },

    setUniformsByShaderProgram: function setUniformsByShaderProgram(glShaderProgram, sprite) {
        //用于web的shader

        if (glShaderProgram) {

            // var ux = 0.5;
            // var uy = 0.5;
            // var spriteFrame = sprite.spriteFrame;
            // if (spriteFrame) {
            //     var texture = spriteFrame.getTexture();
            //     if (texture) {
            //         var pixWidth = texture.getPixelWidth();
            //         var pixHeight = texture.getPixelHeight();
            //         var fixSizeX = sprite.node.width / pixWidth;
            //         var fixsizeY = sprite.node.height / pixHeight;
            //         ux = 0.5 - (14 + fixSizeX) / sprite.node.width;
            //         uy = 0.5 - (14 + fixsizeY) / sprite.node.height;
            //     }
            // }
            // glShaderProgram.setUniformLocationWith1f(glShaderProgram.getUniformLocationForName('u_edge_x'), 0.40);
            // glShaderProgram.setUniformLocationWith1f(glShaderProgram.getUniformLocationForName('u_edge_y'), 0.40);
        }
    }
};

var CenterShadowShader = { //圆角的数据结构

    frag: centerShadowFragSource,
    vert: null,
    setUniformsByProgramState: function setUniformsByProgramState(glProgramState) {
        //用于native的shader

        if (glProgramState) {
            glProgramState.setUniformFloat("u_edge", 0.05);
            glProgramState.setUniformFloat("u_offset", 0.05);
        }
    },

    setUniformsByShaderProgram: function setUniformsByShaderProgram(glShaderProgram) {
        //用于web的shader

        if (glShaderProgram) {

            glShaderProgram.setUniformLocationWith1f(glShaderProgram.getUniformLocationForName('u_edge'), 0.05);
            glShaderProgram.setUniformLocationWith1f(glShaderProgram.getUniformLocationForName('u_offset'), 0.05);
        }
    }
};

var ccGraphicsShader = { //圆角的数据结构

    frag: ccGraphicsFragSource,
    vert: ccGraphicsVertShader,
    setUniformsByProgramState: function setUniformsByProgramState(glProgramState) {//用于native的shader

    },

    setUniformsByShaderProgram: function setUniformsByShaderProgram(glShaderProgram) {//用于web的shader


    }
};

var CenterMaskShader = { //圆角的数据结构

    frag: centerMaskSource,
    vert: null,
    setUniformsByProgramState: function setUniformsByProgramState(glProgramState, sprite) {
        //用于native的shader

        if (glProgramState) {}
    },

    setUniformsByShaderProgram: function setUniformsByShaderProgram(glShaderProgram, sprite) {
        //用于web的shader
        if (glShaderProgram) {}
    }
};

var ShaderHelper = {

    ShaderArray: {
        SpriteShader: SpriteShader,
        GreyShader: GreyShader,
        CenterShader: CenterShader,
        CenterShadowShader: CenterShadowShader,
        ccGraphicsShader: ccGraphicsShader,
        CenterMaskShader: CenterMaskShader
    },

    glProgramCache: {},

    setGLProgram: function setGLProgram(sprite, glShaderName) {

        var shader = this.ShaderArray[glShaderName];
        if (shader == null) {
            cc.log("%s shader is nil", glShaderName);
            return;
        }

        this.setGLProgramShader(sprite, shader, glShaderName);
    },

    setGLProgramWithSize: function setGLProgramWithSize(sprite, glShaderName) {

        var shader = this.ShaderArray[glShaderName];
        if (shader == null) {
            cc.log("%s shader is nil", glShaderName);
            return;
        }
        this.setGLProgramShader(sprite, shader, glShaderName + "_" + sprite.node.width + "_" + sprite.node.height);
    },

    setGLProgramShader: function setGLProgramShader(node, shader, glShaderName) {

        var glProgram = this.createWithGLProgram(shader, glShaderName);
        if (cc.sys.isNative) {
            var glProgramState = cc.GLProgramState.getOrCreateWithGLProgram(glProgram);
            node._sgNode.setGLProgramState(glProgramState);
            shader.setUniformsByProgramState && shader.setUniformsByProgramState(glProgramState, node);
        } else {
            shader.setUniformsByShaderProgram && shader.setUniformsByShaderProgram(glProgram, node);
            node._sgNode.setShaderProgram(glProgram);
        }
    },

    createWithGLProgram: function createWithGLProgram(shader, glShaderName) {

        var glProgram = cc.shaderCache.getProgram(glShaderName);
        if (!glProgram) {
            var fs = shader.frag;
            var vs = shader.vert;
            var glProgram = new cc.GLProgram();
            glProgram.initWithString(vs == null ? vertShader : vs, fs == null ? fragShader : fs);
            glProgram.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            glProgram.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            glProgram.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
            glProgram.link();
            glProgram.updateUniforms();
            cc.shaderCache.addProgram(glProgram, glShaderName);
        }
        return glProgram;
    }
};

exports = module.exports = ShaderHelper;

cc._RF.pop();
},{}],"SimpleLayout":[function(require,module,exports){
"use strict";
cc._RF.push(module, '61ba6CJcu1EraLzzyvxns/R', 'SimpleLayout');
// scripts/component/helper/SimpleLayout.js

"use strict";

/*
 * @Author: lihang 
 * @Date: 2017-12-12 20:38:19 
 * @Last Modified by: lihang
 * @Last Modified time: 2018-03-06 16:39:59
 */
cc.Class({
    extends: cc.Component,

    properties: {
        content: cc.Node,
        horizontal: false,
        needOmitted: false,
        spacing: 0,
        _nowPosition: null, // 当前位置
        _lastItem: null, // 上一个已添加的
        _nowShowSize: 0 // 已显示范围
    },

    /**
     * 向SimpleLayout 添加一个item 以用于更新position
     * 
     * @param {any} item 待添加节点
     * @returns 是否添加成功
     */
    addItem: function addItem(item) {
        // 超出最大范围 不能再添加
        if (this._checkNeedOmit(item)) {
            item.destroy();
            return false;
        }

        this._updatePosition(item);
        item.setPosition(this._nowPosition.x, this._nowPosition.y);
        return true;
    },

    getPosition: function getPosition() {
        return this._nowPosition ? this._nowPosition : {
            x: 0,
            y: 0
        };
    },

    resetLayout: function resetLayout() {
        this._nowPosition = null;
        this._nowShowSize = 0;
    },

    _initPosition: function _initPosition(item) {
        var initX = (0 - this.content.anchorX) * this.content.width - (0 - item.anchorX) * item.width;
        var initY = (1 - this.content.anchorY) * this.content.height - (1 - item.anchorY) * item.height;

        this._nowPosition = {
            x: initX,
            y: initY
        };
    },

    _updatePosition: function _updatePosition(item) {
        if (this._nowPosition) {
            if (this.horizontal) {
                this._nowPosition.x += 0.5 * (item.width + this._lastItem.width) + this.spacing;
            } else {
                this._nowPosition.y -= 0.5 * (item.height + this._lastItem.height) + this.spacing;
            }
        } else {
            this._initPosition(item);
        }
        this._lastItem = item;
    },

    _checkNeedOmit: function _checkNeedOmit(item) {
        if (this.needOmitted) {
            var next = void 0,
                max = void 0;

            if (this.horizontal) {
                next = this._nowShowSize + item.width + this.spacing;
                max = this.node.width;
            } else {
                next = this._nowShowSize + item.height + this.spacing;
                max = this.node.height;
            }

            // N个item 只有N-1个spacing 这里判断的时候减一
            if (next > max + this.spacing) {
                return true;
            }
            this._nowShowSize = next;
        }
        return false;
    }

});

cc._RF.pop();
},{}],"SpriteAnimator":[function(require,module,exports){
"use strict";
cc._RF.push(module, '32c92F2x2RDHIAUtN8vLABi', 'SpriteAnimator');
// scripts/component/helper/SpriteAnimator.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        playOnLoad: false,
        isAutoRelease: false, //仅仅播放一次就销毁，用于自动启动播放时候
        nameClips: {
            default: [],
            type: [cc.String]
        },

        _isCheckStart: false,
        _animationScript: null
    },

    onLoad: function onLoad() {

        var animation = this.getComponent(cc.Animation);
        if (!cc.isValid(animation)) {
            animation = this.addComponent(cc.Animation);
        }
        this._animationScript = animation;
    },

    onEnable: function onEnable() {

        if (cc.isValid(this._animationScript)) {
            this._animationScript.on("finished", this._onCheckAutoRelase, this);
        }

        this._onStartWhenLoad();
    },

    onDisable: function onDisable() {

        if (cc.isValid(this._animationScript)) {
            this._animationScript.off("finished");
        }
    },

    onDestroy: function onDestroy() {

        if (cc.isValid(this._animationScript)) {
            this.unloadClips();
            this._animationScript = null;
        }
    },

    playAsyn: function playAsyn(name, startPos) {
        var _this = this;

        var nameClip = name || this.nameClips[0];
        this.loadClip(nameClip, function (success) {
            if (cc.isValid(_this._animationScript)) {
                if (success) {
                    _this._animationScript.play(nameClip, startPos);
                }
            }
        });
    },

    stop: function stop() {

        if (cc.isValid(this._animationScript)) {
            this._animationScript.stop();
        }
    },

    pause: function pause() {

        if (cc.isValid(this._animationScript)) {
            this._animationScript.pause();
        }
    },

    resume: function resume(name, startPos) {
        if (cc.isValid(this._animationScript)) {
            this._animationScript.resume();
        }
    },

    getUrl: function getUrl(name) {

        return name && "animate/" + name;
    },

    loadClip: function loadClip(name, call) {
        var _this2 = this;

        var state = this._getAnimationState(name);
        if (state) {
            call && call(name, state);
        } else {
            var url = this.getUrl(name);
            clog(">>>>>>>   " + url);
            cc.loader.loadRes(url, function (err, clip) {
                if (cc.isValid(_this2)) {
                    //脚本存在,才继续往下走
                    if (err || !clip) {
                        clog(">>>>>>>  err " + url, err, clip);
                        call && call(name, false);
                    } else {
                        _this2._addClip(clip, name);
                        call && call(name, true);
                    }
                }
            });
        }
    },

    unloadClips: function unloadClips() {

        var clips = this._getClips();
        if (clips && clips.length > 0) {
            for (var index = clips.length - 1; index >= 0; index--) {
                var clip = clips[index];
                this._removeClip(clip, true);

                var url = this.getUrl(clip.name);
                var deps = cc.loader.getDependsRecursively(url);
                cc.loader.release(deps);
            }
        }
    },

    _onStartWhenLoad: function _onStartWhenLoad() {

        if (this.playOnLoad) {
            //在本方法第二次执行的时候，才会播放
            this.playAsyn();
        }
    },

    _getAnimationState: function _getAnimationState(name) {

        if (cc.isValid(this._animationScript)) {
            return this._animationScript.getAnimationState(name);
        }
        return null;
    },

    _getClips: function _getClips(clip, name) {

        if (cc.isValid(this._animationScript)) {
            return this._animationScript.getClips();
        }
        return null;
    },

    _addClip: function _addClip(clip, name) {

        if (cc.isValid(this._animationScript)) {
            return this._animationScript.addClip(clip, name);
        }
        return null;
    },

    _removeClip: function _removeClip(clip) {

        if (cc.isValid(this._animationScript)) {
            this._animationScript.removeClip(clip, true);
        }
    },

    _onCheckAutoRelase: function _onCheckAutoRelase() {

        if (cc.isValid(this.node)) {
            if (this.isAutoRelease) {
                this._animationScript.destroy();
                this._animationScript = null;
                this.node.destroy(); //销毁自身
                clog("start  >> checkAutoRelase");
            }
        }
    }

});

cc._RF.pop();
},{}],"SpriteFrameManager":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'b7c0f+uv0lNHoN7mqXe43vp', 'SpriteFrameManager');
// scripts/component/helper/SpriteFrameManager.js

"use strict";

var ImageLoader = require("ImageLoader");
var SysTimerHelper = require("SysTimerHelper");

var SpriteFrameManager = {

    _strogeCache: {}, //信息缓存

    _strogeCount: 0, //缓存图片数量

    _loadStrogeList: [], //信息缓存

    _loadStrogeCallMap: {}, //

    _isUsedFrameCahce: false,

    loadSpriteFrame: function loadSpriteFrame(url, callback) {

        if (url) {
            var spriteFrame = this.getSpriteFrame(url);
            if (spriteFrame) {
                this._retainSpriteFrame(url);
                callback && callback(null, spriteFrame);
                return;
            }
            ////clog("load url : " + url)
            this._clearUnUsedSpriteFrame();
            this._checkAndStartLoadUrl(url, callback);
        } else if (callback) {
            callback && callback("SpriteFrameManager.loadSpriteFrame invaild url", null);
        }
    },

    //设置是否开启缓存
    setUsedFrameCahce: function setUsedFrameCahce(enable) {

        this._isUsedFrameCahce = enable;
        this._clearUnUsedSpriteFrame();
    },

    _checkAndStartLoadUrl: function _checkAndStartLoadUrl(url, callback) {

        var asset = this._loadStrogeCallMap[url];
        if (asset && asset.url && asset.callbacks) {
            asset.callbacks.push(callback);
            return;
        }
        var asset = {
            url: url,
            callbacks: [callback]
        };
        this._loadStrogeCallMap[url] = asset;

        //this._loadStrogeList.push(asset);
        // if (!SysTimerHelper.isInterval("time_frame_loader")) {
        //     SysTimerHelper.setInterval("time_frame_loader", 0.02, this._onAsyncLoadUrlList.bind(this));
        // }

        this._onAsyncLoadAsset(asset);
    },

    stopAllTaskWhenPurge: function stopAllTaskWhenPurge() {
        //在应用停止时，关闭所有加载任务

        this._getLoader().cancleAllTask();
    },

    unload: function unload(url, callback) {

        //clog("==>>>>  start unload spriteframe : ", url)
        this._clearSpriteFrameLoader(url, callback);
    },

    getSpriteFrame: function getSpriteFrame(url) {

        var info = this._strogeCache[url];
        return info && info.spriteFrame;
    },

    dumpCacheInfo: function dumpCacheInfo() {

        clog("############# SpriteFrame Cache   ##############");
        // for (var url in this._strogeCache) {
        //     var info = this._strogeCache[url];
        //     if (info) {
        //         clog(url, info.count);
        //     }
        // }
        var temp = cc.textureCache.getCachedTextureInfo() || "";
        var arr = temp.split("KB");
        if (arr) {
            for (var s = 0; s < arr.length; s++) {
                clog(arr[s] + " KB");
            }
        }

        //clog(cc.textureCache.getCachedTextureInfo())
    },

    _onAsyncLoadUrlList: function _onAsyncLoadUrlList() {

        clog("_onAsyncLoadUrlList  time local  ....  ");
        var asset = null;
        while (this._loadStrogeList.length > 0 && !(asset && asset.url)) {
            asset = this._loadStrogeList.shift();
            //clog(asset && asset.url);
        }
        if (asset && asset.url) {
            var url = asset.url;
            var spriteFrame = this.getSpriteFrame(url);
            if (spriteFrame) {
                delete this._loadStrogeCallMap[url];
                this._retainAndCallbackByLoader(url, asset.callbacks, null, spriteFrame);
            } else {
                this._onAsyncLoadAsset(asset);
            }
        } else {
            SysTimerHelper.clear("time_frame_loader");
        }
    },

    _onAsyncLoadAsset: function _onAsyncLoadAsset(asset) {
        var _this = this;

        clog("_onAsyncLoadUrlList  time local  ....  ");
        if (asset && asset.url) {
            var url = asset.url;
            this._loadSpriteFrame(asset, url, function (succeed, frame) {
                //加载图片
                var resAsset = _this._loadStrogeCallMap[url];
                if (resAsset) {
                    delete _this._loadStrogeCallMap[url];
                    _this._retainAndCallbackByLoader(url, resAsset.callbacks, succeed, frame);
                } else {
                    clog("_loadSpriteFrame  load cancel sprite frame  ", url);
                }
            });
        }
    },

    _clearUnUsedSpriteFrame: function _clearUnUsedSpriteFrame(isClear) {

        if (!this._isUsedFrameCahce || isClear || this._strogeCount > 50) {
            //大于50张图片缓存，则清除图片

            this._strogeCount = 0;
            for (var url in this._strogeCache) {
                var info = this._strogeCache[url];
                if (info && info.count <= 0) {
                    delete this._strogeCache[url];
                    this._getLoader().release(url, info.spriteFrame);
                } else {
                    this._strogeCount++; //重新统计数量
                }
            }
        }
        clog(">>>>>>>>>>>>>>>>>>  ===  ", this._strogeCount);
    },

    _loadSpriteFrame: function _loadSpriteFrame(asset, url, callback) {

        clog(">>> _loadSpriteFrame ", asset.taskId, url);
        var localReadPath = null,
            localWritePath = null;
        //不在缓存里，使用网络图片，则获取写本地的路径，如果没有则空

        clog(">>> _loadSpriteFrame by net", asset.taskId, url, localReadPath, localWritePath);
        asset.taskUrl = url;
        asset.taskId = this._getLoader().loadSpriteFrame(url, localWritePath, function (succeed, frame) {
            if (succeed && frame) {
                // LocalImageManager.updateLocalImageCache(localWritePath); //下载成功则保存本地图片地址
                clog(">>> _loadSpriteFrame result succeed", asset.taskId, url, localReadPath, localWritePath);
                callback(true, frame);
            } else {
                clog(">>> _loadSpriteFrame result failed", asset.taskId, url, localReadPath, localWritePath);
                callback(false, null);
            }
        });
    },

    _retainAndCallbackByLoader: function _retainAndCallbackByLoader(url, callbacks, succeed, frame) {

        clog(">>> _loadSpriteFrame _retain start", url);
        if (frame) {
            this._retainSpriteFrame(url, frame);
        }
        if (callbacks) {
            for (var index = 0, len = callbacks.length; index < len; index++) {
                var callback = callbacks[index];
                if (callback) {
                    if (frame) {
                        this._retainSpriteFrame(url, frame);
                    }
                    callback && callback(!succeed, frame);
                }
            }
        }
        if (frame) {
            this._releaseSpriteFrame(url);
        }
        clog(">>> _loadSpriteFrame _retain complete", url);
    },

    _clearSpriteFrameLoader: function _clearSpriteFrameLoader(url, callback) {

        clog(">>> _loadSpriteFrame _clearSpriteFrameLoader ", url);
        var asset = this._loadStrogeCallMap[url];
        if (callback && asset && asset.callbacks && asset.callbacks.length > 0) {
            var callbacks = asset.callbacks;
            if (callbacks.length <= 1) {
                if (callback == callbacks[0]) {
                    //这么写是为了效率，通常一个task只有一个回调

                    var taskId = asset.taskId;
                    var taskUrl = asset.taskUrl;
                    asset.url = null;asset.taskId = null;asset.taskUrl = null;
                    delete this._loadStrogeCallMap[url]; //未加载成功
                    if (taskId) {
                        clog(">>> _clearSpriteFrameLoader asset.taskId ", taskId);
                        this._getLoader().cancleTasK(taskId); //去除下载过程
                    } else {
                        clog(">>> _clearSpriteFrameLoader asset.taskId ", taskId, taskUrl);
                        this._getLoader().cancleTasK(taskId, taskUrl || url); //
                    }
                    return;
                }
            } else {
                for (var index = 0, len = callbacks.length; index < len; index++) {
                    if (callback == callbacks[index]) {
                        callbacks.splice(index, 1);
                        return;
                    }
                }
            }
        }
        this._releaseSpriteFrame(url); //已经加载好的图片
    },

    _getLoader: function _getLoader() {

        if (null == this._loader) {
            this._loader = new ImageLoader();
            this._loader.setMaxTask(8);
            this._loader.setTimeOut(5);
            this._loader.setConnectTimeOut(5);
        }
        return this._loader;
    },

    _getTime: function _getTime() {

        return new Date().getTime();
    },

    _retainSpriteFrame: function _retainSpriteFrame(url, frame) {

        if (url) {
            var info = this._strogeCache[url];
            if (info) {
                info.count = info.count + 1;
                info.timestamp = this._getTime();
                if (frame && frame != info.spriteFrame) {
                    this._getLoader().release(url, info.spriteFrame);
                    info.spriteFrame = frame;
                }
            } else {
                this._strogeCount++;
                this._strogeCache[url] = {
                    url: url,
                    count: 1, //用于标记当前未加载完成的图片
                    spriteFrame: frame,
                    timestamp: this._getTime()
                };
            }
        }
    },

    _releaseSpriteFrame: function _releaseSpriteFrame(url, isClear) {

        if (url) {
            var info = this._strogeCache[url];
            if (info) {
                info.count = info.count - 1;
                if (info.count <= 0) {
                    if (!this._isUsedFrameCahce || isClear) {
                        this._getLoader().release(url, info.spriteFrame);
                        this._strogeCount--;
                        delete this._strogeCache[url];
                    }
                }
            }
        }
    }
};

exports = module.exports = SpriteFrameManager;

cc._RF.pop();
},{"ImageLoader":"ImageLoader","SysTimerHelper":"SysTimerHelper"}],"SysEventEmitor":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'a7dad0F2BJM/ITmbXRO+Uok', 'SysEventEmitor');
// scripts/component/base/SysEventEmitor.js

'use strict';

var SysEventEmitor = cc.Class({

    name: 'SysEventEmitor',

    ctor: function ctor() {
        this._emitor = new cc.EventTarget();
    },

    on: function on(type, callback, target, useCapture) {

        this._emitor.on(type, callback, target, useCapture);
    },

    off: function off(type, callback, target, useCapture) {
        this._emitor.off(type, callback, target, useCapture);
    },

    once: function once(type, callback, target, useCapture) {
        this._emitor.once(type, callback, target, useCapture);
    },

    emit: function emit(message, detail) {
        this._emitor.emit(message, detail);
    }
});

exports = module.exports = new SysEventEmitor();

cc._RF.pop();
},{}],"SysEventManager":[function(require,module,exports){
"use strict";
cc._RF.push(module, '3be741zdh9GVaJNgUCyoTiN', 'SysEventManager');
// scripts/component/base/SysEventManager.js

"use strict";

var SysEvent = require("SysEvent");
var SysEventEmitor = require("SysEventEmitor");

var _globalSender = null;
if (window) {
    window.onKeyLeft = function () {
        _globalSender && _globalSender.onSendKeyUpEvent(cc.KEY.left);
    };

    window.onKeyRight = function () {
        _globalSender && _globalSender.onSendKeyUpEvent(cc.KEY.right);
    };

    window.onKeyUp = function () {
        _globalSender && _globalSender.onSendKeyUpEvent(cc.KEY.up);
    };

    window.onKeyDown = function () {
        _globalSender && _globalSender.onSendKeyUpEvent(cc.KEY.down);
    };

    window.onKeyEnter = function () {
        _globalSender && _globalSender.onSendKeyUpEvent(cc.KEY.enter);
    };

    window.onKeyMenu = function () {
        _globalSender && _globalSender.onSendKeyUpEvent(cc.KEY.menu);
    };
}

cc.Class({
    extends: SysEvent, //本身 继承事件，以便于本节点监听事件

    properties: {
        independent: false,
        _isSysEventStop: false
    },

    onLoad: function onLoad() {
        window.ctime = window.clog = this.independent ? cc.log : alert;
    },

    onEnable: function onEnable() {

        if (!this.independent) {
            _globalSender = this;
        } else {
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUpEventHandler, this);
        }

        SysEventEmitor.on("sys-event-enable", this._onScreenEventStart, this);
        SysEventEmitor.on("sys-event-disable", this._onScreenEventStop, this);
    },

    onDisable: function onDisable() {

        if (!this.independent) {
            _globalSender = null;
        } else {
            cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUpEventHandler, this);
        }
        SysEventEmitor.off("sys-event-enable", this._onScreenEventStart, this);
        SysEventEmitor.off("sys-event-disable", this._onScreenEventStop, this);
    },

    sort: function sort(components) {

        if (components && components.length > 0) {

            var zOrderGolbalIndex = function zOrderGolbalIndex(node) {

                var zorder = 0;
                var temp = node;
                var index = 0;
                var children = null;
                while (temp.parent) {
                    children = temp.parent.children;
                    index = children.indexOf(temp);
                    index = index >= 0 ? index : 0;
                    zorder = zorder / 10 + (index + 1) / (children.length + 2);

                    temp = temp.parent;
                }
                return zorder;
            };

            var index = 0;
            var len = components.length;
            for (var i = 0; i < len; i++) {
                var info = components[i];
                if (info && cc.isValid(info) && (info.enabledInHierarchy || info.isAptotic())) {
                    //添加持续有效事件
                    components[index++] = {
                        info: info,
                        zOrder: zOrderGolbalIndex(info.node)
                    };
                }
            }
            components.length = index; //复用数组，避免回收的问题
            components.sort(function (a, b) {
                return b.zOrder - a.zOrder;
            });
        } else {
            components.length = 0;
        }
    },

    createJsEvent: function createJsEvent(keyCode) {

        return {
            _isStop: false,
            keyCode: keyCode,
            isStopped: function isStopped() {
                return this._isStop;
            },
            stopPropagation: function stopPropagation() {
                this._isStop = true;
            }
        };
    },

    onKeyUpEventHandler: function onKeyUpEventHandler(event) {

        if (!this._isSysEventStop) {
            //此处判断用于判定如果有按下键，则立即响应该按下键的抬起动作，如果没有按下，则判断在100毫秒内一次抬起动作
            if (event) {
                this.onSendKeyUpEvent(event.keyCode);
            }
        }
    },

    onSendKeyUpEvent: function onSendKeyUpEvent(keyCode) {

        if (!this._isSysEventStop) {
            //此处判断用于判定如果有按下键，则立即响应该按下键的抬起动作，如果没有按下，则判断在100毫秒内一次抬起动作
            var jsevent = this.createJsEvent(keyCode);
            this.onNotifyKeyEvent(jsevent, cc.SystemEvent.EventType.KEY_UP);
        }
    },

    onNotifyKeyEvent: function onNotifyKeyEvent(event, eventType) {

        clog("systemmanager ->>>    ", event && event.keyCode, eventType);
        var components = this.node.getComponentsInChildren("SysEvent");
        if (components && components.length > 0) {
            this.sort(components); //复用数组避免重复
            var len = components.length;
            for (var j = 0; j < len; j++) {
                if (event.isStopped()) {
                    break;
                } else {
                    components[j].info._notify_sys_key(event, eventType);
                }
            }
        }
    },

    _onScreenEventStop: function _onScreenEventStop() {

        this._isSysEventStop = true;
    },

    _onScreenEventStart: function _onScreenEventStart() {

        this._isSysEventStop = false;
    }
});

cc._RF.pop();
},{"SysEvent":"SysEvent","SysEventEmitor":"SysEventEmitor"}],"SysEvent":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'bd601aZ57tFFLs4uSyFO4LS', 'SysEvent');
// scripts/component/base/SysEvent.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {

        _isAptotic: false // 用于特殊需求（视频），一直接受事件
    },

    onLoad: function onLoad() {},

    //由于字典无法设置成属性,所以在调用的地方加上safe判断
    safeGetFunctions: function safeGetFunctions(eventType) {

        if (eventType) {
            if (!this._event_functions) {
                this._event_functions = {};
            }
            return this._event_functions[eventType];
        }
    },

    safeSetFunctions: function safeSetFunctions(eventType, value) {

        if (eventType) {
            if (!this._event_functions) {
                this._event_functions = {};
            }
            this._event_functions[eventType] = value;
        }
    },

    isAptotic: function isAptotic() {
        return this._isAptotic;
    },

    setAptotic: function setAptotic(enable) {

        this._isAptotic = enable;
    },

    off: function off(type) {

        if (type) {
            this.safeSetFunctions(type, null);
        }
    },

    on: function on(type, call, that) {

        if (type && call) {
            if (that) {
                call = call.bind(that);
            }
            var list = this.safeGetFunctions(type);
            if (!list) {
                list = [];
                this.safeSetFunctions(type, list);
            }
            list.push(call);
        }
    },

    onEventNotify: function onEventNotify(event, type) {
        ctime('keyup onEventNotify start');
        //clog("onNotify start name " + this.node.name)
        if (event) {
            var list = this.safeGetFunctions(type);
            if (list) {
                for (var i = 0; i < list.length; i++) {
                    list[i](event); //内部数据，因此不判断空，提高效率
                }
            }
        }
        ctime('keyup onEventNotify end');
        //clog("onNotify finish name " + this.node.name)
    },

    _notify_sys_key: function _notify_sys_key(event, type) {
        //接口方法，供SysEventMananger调用

        this.onEventNotify(event, type);
    }

});

cc._RF.pop();
},{}],"SysFocusGroup":[function(require,module,exports){
"use strict";
cc._RF.push(module, '420d0wSebtJepYgStvVgyhj', 'SysFocusGroup');
// scripts/component/base/SysFocusGroup.js

'use strict';

var SysFocus = require('SysFocus');

cc.Class({
    extends: cc.Component,

    properties: {

        Captivity: false, //是否获得焦点后不允许跳出焦点组

        AutoCatch: false, //是否自定跟踪节点

        entryFocus: { //焦点组默认进入时默认选择对象
            default: null,
            type: SysFocus
        },

        _focus: null, //当前指向的焦点对象
        _focusGroup: false },

    onLoad: function onLoad() {},

    isCaptivity: function isCaptivity() {

        return this.enabledInHierarchy && this.Captivity; //本组件启用，并且是囚禁焦点模式
    },

    isFocusGroup: function isFocusGroup() {
        return this._focusGroup;
    },

    onSysFocusNode: function onSysFocusNode(focus) {
        //这个方法供外部调用,传入当前真实焦点对象

        if (focus != this._focus) {
            this._focus = focus;
            if (null != this._focus) {
                if (!this._focusGroup) {
                    this._focusGroup = true;
                    this.onGroupGotFocus(this._focus);
                }
                if (this.AutoCatch) {
                    this.entryFocus = focus;
                }
                this.onGroupChangeFocus(this._focus);
            } else {
                if (this._focusGroup) {
                    this._focusGroup = false;
                    this.onGroupLoseFocus();
                }
            }
        }
    },

    onGroupGotFocus: function onGroupGotFocus(focus) {
        // 接口
    },

    onGroupLoseFocus: function onGroupLoseFocus() {
        // 接口
    },

    onGroupChangeFocus: function onGroupChangeFocus(focus) {
        //接口
    }

});

cc._RF.pop();
},{"SysFocus":"SysFocus"}],"SysFocusManager":[function(require,module,exports){
"use strict";
cc._RF.push(module, '0cb6eDJ5sNK+rYbWmLJBvRJ', 'SysFocusManager');
// scripts/component/base/SysFocusManager.js

'use strict';

var SearchHelper = require('SearchHelper');
var SysEventEmitor = require('SysEventEmitor');
var ListScrollView = require('ListScrollView');
cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {},

    start: function start() {

        //注册全局事件
        var sysEvent = this.node.getComponent("SysEvent");
        sysEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUP, this);
    },

    onEnable: function onEnable() {

        SysEventEmitor.on('sys-focus-disable-event', this.checkAndStopFocusByEvent, this);
        SysEventEmitor.on('sys-focus-requrie-event', this.checkAndRequireFocusByEvent, this);
        SysEventEmitor.on("sys-focus-get-event", this.checkAndGetFocusByEvent, this);
        SysEventEmitor.on("sys-focus-wait-event", this.checkAndStopAutoFocusByEvent, this); //停止自动获得焦点
        SysEventEmitor.on("sys-focus-auto-event", this.checkFocusWhenEmpty, this); //启动自动获得焦点

        //监听节点
        this.checkFocusWhenEmpty();
    },

    onDisable: function onDisable() {

        this.checkAndStopAutoFocus();

        SysEventEmitor.off("sys-focus-disable-event", this.checkAndStopFocusByEvent, this);
        SysEventEmitor.off("sys-focus-requrie-event", this.checkAndRequireFocusByEvent, this);
        SysEventEmitor.off("sys-focus-get-event", this.checkAndGetFocusByEvent, this);
        SysEventEmitor.off("sys-focus-wait-event", this.checkAndStopAutoFocusByEvent, this);
        SysEventEmitor.off("sys-focus-auto-event", this.checkFocusWhenEmpty, this);
    },

    onKeyUP: function onKeyUP(event) {

        switch (event.keyCode) {
            case cc.KEY.f4:
                var SpriteFrameManager = require("SpriteFrameManager");
                SpriteFrameManager.dumpCacheInfo();
                break;
            case cc.KEY.left:
            case cc.KEY.dpadLeft:
                this.searchFocus(-1, 0);
                event.stopPropagation();
                break;

            case cc.KEY.right:
            case cc.KEY.dpadRight:
                this.searchFocus(1, 0);
                event.stopPropagation();
                break;

            case cc.KEY.up:
            case cc.KEY.dpadUp:
                this.searchFocus(0, 1);
                event.stopPropagation();
                break;

            case cc.KEY.down:
            case cc.KEY.dpadDown:
                this.searchFocus(0, -1);
                event.stopPropagation();
                break;
            case cc.KEY.enter:
            case cc.KEY.dpadCenter:
                this.clickFocusComfirm();
                event.stopPropagation();
                break;
        }
    },

    checkFocusActive: function checkFocusActive(focus) {

        return cc.isValid(focus) && focus.isFocusActive();
    },

    showShockAction: function showShockAction(node, cx, cy) {
        //节点做晃动动作，cx，cy 表示方向 取值为 0，1，-1 

        if (node.getNumberOfRunningActions() > 0) return;

        var sx = node.x;
        var sy = node.y;
        var tx = sx + (cx ? cx : 0) * 15;
        var ty = sy + (cy ? cy : 0) * 15;
        node.runAction(cc.sequence(cc.moveTo(0.1, cc.p(tx, ty)), cc.moveTo(0.1, cc.p(sx, sy)), cc.moveTo(0.1, cc.p(tx, ty)), cc.moveTo(0.1, cc.p(sx, sy)), cc.moveTo(0.1, cc.p(tx, ty)), cc.moveTo(0.1, cc.p(sx, sy))));
    },

    getBoundingBoxToWorld: function getBoundingBoxToWorld(node) {

        /*var rect = cc.rect(0, 0, node.width, node.height);
        var tempLbPosition = node.convertToWorldSpace(cc.p(0, 0));
        var tempRtPosition = node.convertToWorldSpace(cc.p(node.width, node.height));
        return cc.rect(tempLbPosition.x, tempLbPosition.y, tempRtPosition.x - tempLbPosition.x, tempRtPosition.y - tempLbPosition.y);*/

        var rect = cc.rect(0, 0, node.width, node.height);
        return cc._rectApplyAffineTransformIn(rect, node.getNodeToWorldTransform());
    },

    search: function search(list, focus, cx, cy, isInScroll, scRect) {
        //遍历注册的节点，查找最近的节点，cx，cy 表示方向 取值为 0，1，-1 

        var visibleSize = cc.view.getVisibleSize();
        var focusRect = focus ? this.getBoundingBoxToWorld(focus.node) : cc.rect(0, visibleSize.height, 0, 0);
        var focusHalfWidth = focusRect.width * 0.5; //半宽高，用于边缘计算 
        var focusHalfHeight = focusRect.height * 0.5;
        var focusCenterPosition = cc.p(focusRect.x + focusHalfWidth, focusRect.y + focusHalfHeight);

        var directionVec = cc.p(cx ? cx : 0, cy ? cy : 0);
        var directionIsNull = Math.abs(directionVec.x) + Math.abs(directionVec.y) < 0.5;

        //当前参考对象的定位点
        var focusRectBottomY = focusRect.y;
        var focusRectTopY = focusRect.y + focusRect.height;
        var focusPosition = cc.p(focusCenterPosition.x + focusHalfWidth * directionVec.x, focusCenterPosition.y + focusHalfHeight * directionVec.y);

        var curFocusInfo = null;
        var curFocusPosition = null;
        var curFocusDistance = null;
        for (var i = 0; i < list.length; i++) {
            var info = list[i];
            if (focus != info && this.checkFocusActive(info)) {

                var isTarget = directionIsNull; //如果没有导入向量，则直接选定目标
                var tempFixedDistance = null; // 修正导向，距离*距离在选择方向的分量

                var tempRect = this.getBoundingBoxToWorld(info.node);

                // 超出两屏距离的节点不进行焦点寻找
                if (tempRect.y > 2160) {
                    continue;
                }
                var tempPosition = cc.p(tempRect.x + tempRect.width * 0.5 * (1 - directionVec.x), tempRect.y + tempRect.height * 0.5 * (1 - directionVec.y));

                if (isTarget) {
                    tempFixedDistance = cc.pDistance(focusPosition, tempPosition);
                } else {
                    if (Math.abs(directionVec.x) > 0.5) {
                        var tempAngle = Math.abs(cc.pAngle(cc.pSub(tempPosition, focusPosition), directionVec));
                        isTarget = Math.PI * 0.495 >= tempAngle; //在滚动容器中，判断是否在同方向 夹角小于80度
                        if (isTarget) {
                            if (!isInScroll) {
                                isTarget = tempPosition.y > 0 && tempPosition.y < visibleSize.height;
                                if (isTarget) {
                                    tempFixedDistance = cc.pDistance(focusPosition, tempPosition);
                                }
                            } else {
                                isTarget = tempPosition.y > focusRectBottomY && tempPosition.y < focusRectTopY;
                                if (isTarget) {
                                    tempFixedDistance = cc.pDistance(focusPosition, tempPosition); //滚动容器中横向向滚动，限制高度
                                }
                            }
                        }
                    } else {
                        var tempAngle = Math.abs(cc.pAngle(cc.pSub(tempPosition, focusPosition), directionVec));
                        isTarget = Math.PI * 0.495 >= tempAngle; //在滚动容器中，判断是否在同方向 夹角小于80度
                        if (isTarget) {
                            isTarget = !scRect || scRect.x < tempPosition.x && scRect.x + scRect.width > tempPosition.x;
                            if (isTarget) {
                                if (!isInScroll) {
                                    tempFixedDistance = cc.pDistance(focusPosition, tempPosition);
                                } else {
                                    tempFixedDistance = cc.pDistance(focusPosition, cc.p(focusPosition.x + (tempPosition.x - focusPosition.x) * 0.1, tempPosition.y)); //滚动容器中竖向滚动，则只取高度判断
                                }
                            }
                        }
                    }
                }

                // clog("aaa   tempAngle           ==>>>   "+ tempAngle)
                // clog("aaa   tempRect            ==>>>   "+ tempRect)
                // clog("aaa   tempPosition        ==>>>   "+ tempPosition)
                // clog("aaa   tempFixedDistance   ==>>>   "+ tempFixedDistance)
                // clog("aaa   focusPosition       ==>>>   "+ focusPosition)

                if (isTarget) {
                    var isBest = null == curFocusDistance;
                    if (!isBest) {
                        if (Math.abs(curFocusDistance - tempFixedDistance) < 2) {
                            if (Math.abs(directionVec.y) > 0.5) {
                                //竖向滚动
                                isBest = tempPosition.x < curFocusPosition.x;
                            } else {
                                isBest = tempPosition.y > curFocusPosition.y;
                            }
                        } else {
                            if (curFocusDistance > tempFixedDistance) {
                                isBest = true;
                            }
                        }
                    }
                    if (isBest) {
                        curFocusInfo = info;
                        curFocusPosition = tempPosition;
                        curFocusDistance = tempFixedDistance;
                    }
                }
            }
        }
        return curFocusInfo;
    },

    searchFocus: function searchFocus(cx, cy) {

        clog("setup  >> searchFocus", cx, cy);
        //var start = (new Date()).getTime();
        var currentFocus = null;
        if (this.checkFocusActive(this._current_focus)) {
            currentFocus = this._current_focus;

            //绑定焦点对象
            var linkNode = currentFocus.checkLinkingFocus(cx, cy);
            if (cc.isValid(linkNode)) {
                var focus = linkNode.getComponent("SysFocus");
                if (this.checkFocusActive(focus)) {
                    return this.focusNode(focus); //有指定关联节点的情况
                }
            } else {

                if (currentFocus.checkLinkingFocusEnabled(cx, cy)) {
                    this.showShockAndAlignSize(currentFocus, cx, cy); //没找到组件，播放震动动画
                    return; // 限定不可向右找焦点
                }
            }
        }

        if (this.searchInSpecial(currentFocus, cx, cy)) {

            //clog("######### focus node ==>>" + ((new Date()).getTime() - start))
            return;
        } else {
            var list = this.node.getComponentsInChildren("SysFocus");
            var focus = this.search(list, currentFocus, cx, cy);
            //clog("######### focus normal ==>>" + ((new Date()).getTime() - start))
            if (focus) {
                return this.focusNode(focus);
            }

            this.showShockAndAlignSize(currentFocus, cx, cy); //没找到组件，播放震动动画
        }
    },

    showShockAndAlignSize: function showShockAndAlignSize(currentFocus, cx, cy) {

        if (currentFocus) {
            if (!currentFocus._disShowShock) {
                this.showShockAction(currentFocus.node, cx, cy); //没找到组件，播放震动动画
            }
            if (cc.isValid(this._current_focus_scroll)) {
                this.checkAlignInfScrollView(this._current_focus_scroll, cx, cy);
            }
        }
    },

    searchInSpecial: function searchInSpecial(currentFocus, cx, cy) {

        var isFirstScroll = false;
        if (cc.isValid(this._current_focus_group)) {
            if (cc.isValid(this._current_focus_scroll)) {
                isFirstScroll = SearchHelper.isContain(this._current_focus_group.node, this._current_focus_scroll.node);
                if (isFirstScroll) {
                    if (this.searchInScrollView(currentFocus, cx, cy)) {
                        return true;
                    }
                }
            }
            if (this.searchInFocusGroup(currentFocus, cx, cy)) {
                return true;
            }
        }
        if (!isFirstScroll) {
            if (this.searchInScrollView(currentFocus, cx, cy)) {
                return true;
            }
        }
    },

    searchInFocusGroup: function searchInFocusGroup(currentFocus, cx, cy) {
        //焦点组对象
        if (cc.isValid(this._current_focus_group)) {
            var group = this._current_focus_group;
            var list = group.node.getComponentsInChildren("SysFocus");
            var focus = this.search(list, currentFocus, cx, cy);
            if (focus) {
                //在滚动容器里边，并且能找到下个节点
                this.focusNode(focus);
                return true;
            } else {
                if (this._current_focus_group.isCaptivity()) {
                    //当前正在焦点组容器里边，没有找到合适焦点，焦点组不可跳出，则

                    this.showShockAndAlignSize(currentFocus, cx, cy); //没找到组件，播放震动动画
                    return true;
                }
            }
            list = null;
        }
        return false;
    },

    searchInScrollView: function searchInScrollView(currentFocus, cx, cy) {
        //滚动容器焦点对象
        if (cc.isValid(this._current_focus_scroll)) {
            var scroll = this._current_focus_scroll;
            var list = scroll.node.getComponentsInChildren("SysFocus");
            var rect = this.getBoundingBoxToWorld(scroll.node);
            var focus = this.search(list, currentFocus, cx, cy, true, rect);
            list = null;
            if (focus) {
                //在滚动容器里边，并且能找到下个节点
                this.focusNode(focus);
                return true;
            } else {
                if (this.checkLoseFocusInScrollView(scroll, cx, cy)) {
                    //当前正在滚动容器里边，没有找到合适焦点，容器还在滚动，则跳过本次滑动焦点
                    return true;
                } else {
                    var list = this.node.getComponentsInChildren("SysFocus");
                    var focus = this.search(list, currentFocus, cx, cy, false, rect);
                    list = null;
                    if (focus) {
                        this.focusNode(focus);
                        return true;
                    } else {
                        this.showShockAndAlignSize(currentFocus, cx, cy); //没找到组件，播放震动动画
                        return true;
                    }
                }
            }
        }
        return false;
    },

    focusNode: function focusNode(focus, immediately) {

        if (cc.isValid(this._current_focus)) {
            this._current_focus.onSysLoseFocus();
        }
        this._current_focus = null; //清除旧焦点

        var focusGroup = null; // 用于焦点组判断
        if (cc.isValid(focus)) {
            var temp = focus.node;
            while (temp.parent) {
                var group = temp.getComponent("SysFocusGroup");
                if (group) {
                    focusGroup = group;
                    break;
                }
                temp = temp.parent;
            }
        }

        // 设置焦点组默认
        if (focusGroup != this._current_focus_group) {
            if (cc.isValid(this._current_focus_group)) {
                this._current_focus_group.onSysFocusNode(null);
            }
            this._current_focus_group = focusGroup;

            if (cc.isValid(this._current_focus_group)) {
                var entryFocus = this._current_focus_group.entryFocus;
                if (cc.isValid(entryFocus)) {
                    focus = entryFocus; // 如果焦点组设置了默认进入选择焦点，则转换当前焦点为默认焦点
                }
            }
        }

        // 设置焦点对象
        this._current_focus = focus; //有可能赋值为空

        var focusScroll = null;
        if (cc.isValid(focus)) {
            var temp = focus.node;
            while (temp.parent) {
                var scroll = temp.getComponent(ListScrollView);
                if (scroll) {
                    focusScroll = scroll;
                    break;
                }
                temp = temp.parent;
            }
        }

        // 设置焦点滚动容器
        if (!cc.isValid(focusScroll)) {
            this._current_focus_scroll = null;
        } else {
            this._current_focus_scroll = focusScroll;
        }

        if (cc.isValid(this._current_focus_group)) {
            this._current_focus_group.onSysFocusNode(focus); //调用本方法有可能切换焦点
        }

        if (this._current_focus == focus) {
            // 在焦点组未切换焦点的情况下，切换焦点对象
            if (cc.isValid(this._current_focus)) {
                this._current_focus.onSysGotFocus(); //本方法放到最后调用，防止焦点组重新定向异常
            }

            if (cc.isValid(focusScroll) && cc.isValid(this._current_focus)) {
                // 设置焦点滚动容器
                this.focusNodeInScrollView(focusScroll, this._current_focus, immediately);
            }
        }
    },

    focusNodeInScrollView: function focusNodeInScrollView(scroll, focus, immediately) {

        var node = focus.node;
        node.scaleX = 1.0;
        node.scaleY = 1.0; //强制缩放，避免计算误差
        scroll.focusNodeInScrollView(node, immediately, focus._fixYInScroll);
    },

    checkLoseFocusInScrollView: function checkLoseFocusInScrollView(scroll, cx, cy) {
        //滚动过程中，找不到合适节点，则跳过本次事件

        if (cc.isValid(scroll) && scroll._autoScrolling && scroll._autoScrollTargetDelta) {

            var tx = cx ? cx : 0;
            var ty = cy ? cy : 0;
            if (Math.abs(tx) > 0.5) {
                // if (1 < tx * scroll._autoScrollTargetDelta.x) { // 方向不同,终止滚动，二次选择
                //     scroll.stopAutoScroll();
                //     return false
                // }
                return true;
            }

            if (Math.abs(ty) > 0.5) {
                // if (1 < ty * scroll._autoScrollTargetDelta.y) { // 方向不同,终止滚动，二次选择
                //     scroll.stopAutoScroll();
                //     return false
                // }
                return true;
            }
        }

        return false;
    },

    checkAlignInfScrollView: function checkAlignInfScrollView(scroll, cx, cy) {
        //滚动过程中，找不到合适节点，则跳过本次事件

        if (cc.isValid(scroll)) {

            if (cy > 0.5) {
                return scroll.node.emit("focus-scroll-to-top");
            }

            if (cy < -0.5) {
                return scroll.node.emit("focus-scroll-to-bottom");
            }

            if (cx > 0.5) {
                return scroll.node.emit("focus-scroll-to-right");
            }

            if (cx < -0.5) {
                return scroll.node.emit("focus-scroll-to-left");
            }
        }
    },

    clickFocusComfirm: function clickFocusComfirm() {

        if (cc.isValid(this._current_focus) && this._current_focus.enabledInHierarchy) {

            this._current_focus.onConfirm();
        }
    },

    checkAndStopAutoFocus: function checkAndStopAutoFocus(event) {

        if (this._setTimeId !== null) {
            clearTimeout(this._setTimeId);
            this._setTimeId = null;
        }
    },

    checkFocusWhenEmpty: function checkFocusWhenEmpty() {
        var _this = this;

        if (!cc.isValid(this._current_focus)) {

            this.checkAndStopAutoFocus();
            this._setTimeId = setTimeout(function () {
                if (!_this._current_focus || !cc.isValid(_this._current_focus) || !_this._current_focus.enabledInHierarchy) {
                    _this.searchFocus(0, -1);
                }
                _this.checkFocusWhenEmpty();
            }, 1000);
        }
    },

    //从事件获取当前焦点
    checkAndGetFocusByEvent: function checkAndGetFocusByEvent(event) {

        var callfunc = event.detail;
        if (callfunc) {
            if (cc.isValid(this._current_focus)) {
                callfunc(this._current_focus);
            }
        }
    },

    checkAndStopAutoFocusByEvent: function checkAndStopAutoFocusByEvent(event) {

        this.focusNode(null);
        this.checkAndStopAutoFocus();
    },

    checkAndStopFocusByEvent: function checkAndStopFocusByEvent(event) {

        var script = event.detail;
        if (cc.isValid(script)) {
            if (script == this._current_focus) {
                this.focusNode(null);
                this.checkFocusWhenEmpty();
            }
        }
    },

    checkAndRequireFocusByEvent: function checkAndRequireFocusByEvent(event) {

        var detail = event.detail;
        if (detail && detail.script) {
            var script = detail.script;
            if (cc.isValid(script)) {
                if (script != this._current_focus || detail.immediately) {
                    this.focusNode(script, detail.immediately);
                }
            }
        }
    }

});

cc._RF.pop();
},{"ListScrollView":"ListScrollView","SearchHelper":"SearchHelper","SpriteFrameManager":"SpriteFrameManager","SysEventEmitor":"SysEventEmitor"}],"SysFocus":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'bc19f/gv81Mrp7/7abdO9vj', 'SysFocus');
// scripts/component/base/SysFocus.js

'use strict';

var SysEventEmitor = require('SysEventEmitor');

// 焦点对象
cc.Class({
    extends: cc.Component,

    properties: {

        _focus: false,
        _fixYInScroll: 0, //这个属性用于在滚动容器中定位修正
        _disShowShock: false },

    onEnable: function onEnable() {},

    onDisable: function onDisable() {

        if (this.isFocus()) {
            SysEventEmitor.emit('sys-focus-disable-event', this);
        }
    },

    isFocusActive: function isFocusActive() {

        return this.enabledInHierarchy;
    },

    isFocus: function isFocus() {

        return this._focus;
    },

    requireFocus: function requireFocus(immediately) {

        SysEventEmitor.emit('sys-focus-requrie-event', {
            script: this,
            immediately: immediately
        });
    },

    loseFocus: function loseFocus() {

        if (this.isFocus()) {
            this._focus = false;
            SysEventEmitor.emit('sys-focus-disable-event', this);
        }
    },

    checkLinkingFocus: function checkLinkingFocus(cx, cy) {
        // 传入当前按键方向，返回当前焦点对象的关联焦点对象 cx cy数值范围 [-1,0,1]

        return null;
    },

    onSysGotFocus: function onSysGotFocus() {

        this._focus = true;
        this.onGotFocus();
    },

    onSysLoseFocus: function onSysLoseFocus() {

        this._focus = false;
        this.onLoseFocus();
    },

    onGotFocus: function onGotFocus() {
        // 接口
    },

    onLoseFocus: function onLoseFocus() {
        // 接口
    },

    onConfirm: function onConfirm() {
        // 接口
    }

});

cc._RF.pop();
},{"SysEventEmitor":"SysEventEmitor"}],"SysTimerHelper":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'c65a2VSf9RPBI5QLNOJ9NMR', 'SysTimerHelper');
// scripts/component/helper/SysTimerHelper.js

"use strict";

var SysTimerHelper = {

    _schedules: {},
    /**
     * 清除定时器
     * 
     * @param {string} key 定时器键码
     */
    clear: function clear(key) {

        var info = key && this._schedules[key];
        if (info) {
            this._clearSchedule(info);
            delete this._schedules[key];
        }
    },
    /**
    * 暂停一个定时
    * 
    * @param {int} key 
    */
    pause: function pause(key) {

        if (key) {
            var info = this._schedules[key];
            if (info) {
                if (info.repeat) {
                    this._clearSchedule(info);
                } else {
                    var timestamp = info.timestamp || 0;
                    var time = this._gettime() - timestamp;
                    info.time = Math.max(0, info.time - time);
                    this._clearSchedule(info);
                }
            }
        }
    },
    /**
    * 恢复一个定时
    * 
    * @param {int} key 
    */
    resume: function resume(key) {

        if (key) {
            var info = this._schedules[key];
            if (info) {
                if (info.repeat) {
                    this.setInterval(key, info.time, info.call);
                } else {
                    this.setTimeout(key, info.time, info.call);
                }
            }
        }
    },
    /**
     * 设置定时回调
     * 
     * @param {string} key 定时器键码
     * @param {int} time 定时时长 秒
     * @param {function} call 定时回调
     */
    setTimeout: function (_setTimeout) {
        function setTimeout(_x, _x2, _x3) {
            return _setTimeout.apply(this, arguments);
        }

        setTimeout.toString = function () {
            return _setTimeout.toString();
        };

        return setTimeout;
    }(function (key, time, call) {
        var _this = this;

        if (key) {
            var info = this._schedules[key];
            if (!info) {
                this._schedules[key] = info = {};
            } else {
                this._clearSchedule(info);
            }
            info.repeat = false;
            info.call = call;
            info.time = time;
            info.timestamp = this._gettime();
            info.id = setTimeout(function () {
                _this.clear(key);
                call && call();
            }, time * 1000);
        }
    }),
    /**
    * 当前刷新回调是否在运行
    * 
    * @param {string} key 定时器键码 
    */
    isInterval: function isInterval(key) {

        if (key) {
            return !!this._schedules[key];
        }
    },
    /**
     * 设置刷新回调
     * 
     * @param {string} key 定时器键码 
     * @param {int} time 刷新时长 秒
     * @param {function} call 刷新回调
     */
    setInterval: function (_setInterval) {
        function setInterval(_x4, _x5, _x6) {
            return _setInterval.apply(this, arguments);
        }

        setInterval.toString = function () {
            return _setInterval.toString();
        };

        return setInterval;
    }(function (key, time, call) {

        if (key) {
            var info = this._schedules[key];
            if (!info) {
                this._schedules[key] = info = {};
            } else {
                this._clearSchedule(info);
            }
            info.repeat = true;
            info.call = call;
            info.time = time;
            info.id = setInterval(call, time * 1000);
        }
    }),

    _gettime: function _gettime() {

        return new Date().getTime() / 1000;
    },

    _clearSchedule: function _clearSchedule(info) {

        if (info) {
            if (info.repeat) {
                clearInterval(info.id);
            } else {
                clearTimeout(info.id);
            }
        }
    }
};

exports = module.exports = SysTimerHelper;

cc._RF.pop();
},{}],"ToggleFocus":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'c5881dUvGhID4yxCwjkEnfc', 'ToggleFocus');
// scripts/component/focus/ToggleFocus.js

'use strict';

/*
 * @Author: zhaoxiaofeng 
 * @Date: 2017-08-17 17:53:10 
 * @Last Modified by: lihang
 * @Last Modified time: 2018-02-08 16:09:12
 */
var Focusable = require('Focusable');

cc.Class({
    extends: Focusable,

    properties: {

        focusNode: {
            default: null,
            type: cc.Node
        },

        normalNode: {
            default: null,
            type: cc.Node
        },

        scaleNode: {
            default: null,
            type: cc.Node
        },

        scaleSize: 1.08,

        _onConfirmCall: null // 回调
    },

    on: function on(call, sender) {
        var func = call;
        if (sender) {
            func = function func() {
                if (cc.isValid(sender)) {
                    call.bind(sender)();
                }
            };
        }
        this._onConfirmCall = func;
    },

    off: function off() {
        this._onConfirmCall = null;
    },

    onGotFocus: function onGotFocus() {
        this._super();

        if (cc.isValid(this.scaleNode)) {
            this.scaleNode.stopActionByTag(3001);

            var action = cc.scaleTo(0.2, this.scaleSize);
            action.setTag(3001);
            this.scaleNode.runAction(action);
        }

        if (cc.isValid(this.focusNode)) {
            this.focusNode.active = true;
        }

        if (cc.isValid(this.normalNode)) {
            this.normalNode.active = false;
        }
    },

    onLoseFocus: function onLoseFocus() {
        this._super();

        if (cc.isValid(this.scaleNode)) {
            this.scaleNode.stopActionByTag(3001);

            var action = cc.scaleTo(0.2, 1);
            action.setTag(3001);
            this.scaleNode.runAction(action);
        }

        if (cc.isValid(this.focusNode)) {
            this.focusNode.active = false;
        }

        if (cc.isValid(this.normalNode)) {
            this.normalNode.active = true;
        }
    },

    onConfirm: function onConfirm() {
        if (this._onConfirmCall) {
            this._onConfirmCall();
        }
    }
});

cc._RF.pop();
},{"Focusable":"Focusable"}]},{},["Bullet","Eneny","EnenyBullet","EnenyLaunch","Player","BlockBuilder","ColorBlock","ExitButton","Game","Menu","MenuButton","NetImage","SysEvent","SysEventEmitor","SysEventManager","SysFocus","SysFocusGroup","SysFocusManager","CardName","Focusable","ToggleFocus","ImageLoader","PrefabLoader","PrefabParser","PrefabPoolManager","SearchHelper","ShaderHelper","SimpleLayout","SpriteAnimator","SpriteFrameManager","SysTimerHelper","ItemCard","ItemCricle","ItemList","ListLayout","ListScrollView","MerryGoScroll"]);

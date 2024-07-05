"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var utils_1 = require("./utils");
var PopupService = /** @class */ (function () {
    function PopupService() {
    }
    PopupService.prototype.open = function (url, options, cordova) {
        if (cordova === void 0) { cordova = this.isCordovaApp(); }
        var stringifiedOptions = this.stringifyOptions(this.prepareOptions(options.popupOptions));
        var windowName = cordova ? '_blank' : options.name;
        var popupWindow = typeof window !== 'undefined' ? window.open(url, windowName, stringifiedOptions) : null;
        if (popupWindow) {
            if (popupWindow.focus) {
                popupWindow.focus();
            }
            return rxjs_1.of(popupWindow);
        }
        return rxjs_1.empty();
    };
    PopupService.prototype.waitForClose = function (popupWindow, cordova, redirectUri) {
        if (cordova === void 0) { cordova = this.isCordovaApp(); }
        if (redirectUri === void 0) { redirectUri = utils_1.getWindowOrigin(); }
        return cordova ? this.eventListener(popupWindow, redirectUri) : this.pollPopup(popupWindow, redirectUri);
    };
    PopupService.prototype.eventListener = function (popupWindow, redirectUri) {
        var _this = this;
        if (redirectUri === void 0) { redirectUri = utils_1.getWindowOrigin(); }
        if (!popupWindow) {
            throw new Error('Popup was not created');
        }
        return rxjs_1.merge(rxjs_1.fromEvent(popupWindow, 'exit').pipe(operators_1.delay(100), operators_1.map(function () {
            throw new Error('Authentication Canceled');
        })), rxjs_1.fromEvent(popupWindow, 'loadstart')).pipe(operators_1.switchMap(function (event) {
            if (!popupWindow || popupWindow.closed) {
                return rxjs_1.Observable.throw(new Error('Authentication Canceled'));
            }
            if (event.url.indexOf(redirectUri) !== 0) {
                return rxjs_1.empty();
            }
            var parser = document.createElement('a');
            parser.href = event.url;
            if (parser.search || parser.hash) {
                var queryParams = parser.search.substring(1).replace(/\/$/, '');
                var hashParams = parser.hash.substring(1).replace(/\/$/, '');
                var hash = _this.parseQueryString(hashParams);
                var qs = _this.parseQueryString(queryParams);
                var allParams = __assign({}, qs, hash);
                popupWindow.close();
                if (allParams.error) {
                    throw allParams.error;
                }
                else {
                    return rxjs_1.of(allParams);
                }
            }
            return rxjs_1.empty();
        }), operators_1.take(1));
    };
    PopupService.prototype.pollPopup = function (popupWindow, redirectUri) {
        var _this = this;
        if (redirectUri === void 0) { redirectUri = utils_1.getWindowOrigin(); }
        return rxjs_1.interval(50).pipe(operators_1.switchMap(function () {
            if (!popupWindow || popupWindow.closed) {
                return rxjs_1.throwError(new Error('Authentication Canceled'));
            }
            var popupWindowOrigin = utils_1.getWindowOrigin(popupWindow);
            if (popupWindowOrigin &&
                (redirectUri.indexOf(popupWindowOrigin) === 0 || popupWindowOrigin.indexOf(redirectUri) === 0) &&
                (popupWindow.location.search || popupWindow.location.hash)) {
                var queryParams = popupWindow.location.search.substring(1).replace(/\/$/, '');
                var hashParams = popupWindow.location.hash.substring(1).replace(/[\/$]/, '');
                var hash = _this.parseQueryString(hashParams);
                var qs = _this.parseQueryString(queryParams);
                popupWindow.close();
                var allParams = __assign({}, qs, hash);
                if (allParams.error) {
                    throw allParams.error;
                }
                else {
                    return rxjs_1.of(allParams);
                }
            }
            return rxjs_1.empty();
        }), operators_1.take(1));
    };
    PopupService.prototype.prepareOptions = function (options) {
        options = options || {};
        var width = options.width || 500;
        var height = options.height || 500;
        return __assign({ width: width,
            height: height, left: window.screenX + (window.outerWidth - width) / 2, top: window.screenY + (window.outerHeight - height) / 2.5, toolbar: options.visibleToolbar ? 'yes' : 'no' }, options);
    };
    PopupService.prototype.stringifyOptions = function (options) {
        return Object.keys(options)
            .map(function (key) { return (options[key] === null || options[key] === undefined ? key : key + '=' + options[key]); })
            .join(',');
    };
    PopupService.prototype.parseQueryString = function (joinedKeyValue) {
        var key;
        var value;
        return joinedKeyValue.split('&').reduce(function (obj, keyValue) {
            if (keyValue) {
                value = keyValue.split('=');
                key = decodeURIComponent(value[0]);
                obj[key] = typeof value[1] !== 'undefined' ? decodeURIComponent(value[1]) : true;
            }
            return obj;
        }, {});
    };
    PopupService.prototype.isCordovaApp = function () {
        return typeof cordova === 'object' || (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);
    };
    PopupService = __decorate([
        core_1.Injectable()
    ], PopupService);
    return PopupService;
}());
exports.PopupService = PopupService;
//# sourceMappingURL=popup.service.js.map
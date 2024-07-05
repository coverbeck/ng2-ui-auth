"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var config_service_1 = require("./config.service");
var popup_service_1 = require("./popup.service");
var utils_1 = require("./utils");
var Oauth1Service = /** @class */ (function () {
    function Oauth1Service(http, popup, config) {
        this.http = http;
        this.popup = popup;
        this.config = config;
    }
    Oauth1Service.prototype.open = function (oauthOptions, userData) {
        var _this = this;
        var serverUrl = this.config.options.baseUrl ? utils_1.joinUrl(this.config.options.baseUrl, oauthOptions.url) : oauthOptions.url;
        return this.popup.open('about:blank', oauthOptions, this.config.options.cordova).pipe(operators_1.switchMap(function (popupWindow) {
            return _this.http.post(serverUrl, oauthOptions).pipe(operators_1.tap(function (authorizationData) {
                return popupWindow
                    ? popupWindow.location.replace([oauthOptions.authorizationEndpoint, utils_1.buildQueryString(authorizationData)].join('?'))
                    : undefined;
            }), operators_1.switchMap(function (authorizationData) {
                return _this.popup
                    .waitForClose(popupWindow, _this.config.options.cordova, oauthOptions.redirectUri)
                    .pipe(operators_1.map(function (oauthData) { return ({ authorizationData: authorizationData, oauthData: oauthData }); }));
            }));
        }), operators_1.switchMap(function (_a) {
            var authorizationData = _a.authorizationData, oauthData = _a.oauthData;
            return _this.exchangeForToken(oauthOptions, authorizationData, oauthData, userData);
        }));
    };
    Oauth1Service.prototype.exchangeForToken = function (oauthOptions, authorizationData, oauthData, userData) {
        var body = { oauthOptions: oauthOptions, authorizationData: authorizationData, oauthData: oauthData, userData: userData };
        var _a = this.config.options, withCredentials = _a.withCredentials, baseUrl = _a.baseUrl;
        var _b = oauthOptions.method, method = _b === void 0 ? 'POST' : _b, url = oauthOptions.url;
        var exchangeForTokenUrl = baseUrl ? utils_1.joinUrl(baseUrl, url) : url;
        return this.http.request(method, exchangeForTokenUrl, { body: body, withCredentials: withCredentials });
    };
    Oauth1Service = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object, popup_service_1.PopupService, config_service_1.ConfigService])
    ], Oauth1Service);
    return Oauth1Service;
    var _a;
}());
exports.Oauth1Service = Oauth1Service;
//# sourceMappingURL=oauth1.service.js.map
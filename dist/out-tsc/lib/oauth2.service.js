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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var config_service_1 = require("./config.service");
var popup_service_1 = require("./popup.service");
var utils_1 = require("./utils");
var Oauth2Service = /** @class */ (function () {
    function Oauth2Service(http, popup, config) {
        this.http = http;
        this.popup = popup;
        this.config = config;
    }
    Oauth2Service.prototype.open = function (oauthOptions, userData) {
        var _this = this;
        var authorizationData = this.getAuthorizationData(oauthOptions);
        var url = [oauthOptions.authorizationEndpoint, utils_1.buildQueryString(authorizationData)].join('?');
        return this.popup.open(url, oauthOptions, this.config.options.cordova).pipe(operators_1.switchMap(function (window) {
            return window ? _this.popup.waitForClose(window, _this.config.options.cordova, oauthOptions.redirectUri) : rxjs_1.empty();
        }), operators_1.switchMap(function (oauthData) {
            // when no server URL provided, return popup params as-is.
            // this is for a scenario when someone wishes to opt out from
            // satellizer's magic by doing authorization code exchange and
            // saving a token manually.
            if (oauthOptions.responseType === 'token' || !oauthOptions.url) {
                return rxjs_1.of(oauthData);
            }
            if (oauthData.state && oauthData.state !== authorizationData.state) {
                throw new Error('OAuth "state" mismatch');
            }
            return _this.exchangeForToken(oauthOptions, authorizationData, oauthData, userData);
        }));
    };
    Oauth2Service.prototype.exchangeForToken = function (options, authorizationData, oauthData, userData) {
        var body = { authorizationData: authorizationData, oauthData: oauthData, userData: userData };
        var _a = this.config.options, baseUrl = _a.baseUrl, withCredentials = _a.withCredentials;
        var url = options.url, _b = options.method, method = _b === void 0 ? 'POST' : _b;
        var exchangeForTokenUrl = baseUrl ? utils_1.joinUrl(baseUrl, url) : url;
        return this.http.request(method, exchangeForTokenUrl, { body: body, withCredentials: withCredentials });
    };
    Oauth2Service.prototype.getAuthorizationData = function (options) {
        var _a = options.responseType, responseType = _a === void 0 ? 'code' : _a, clientId = options.clientId, _b = options.redirectUri, redirectUri = _b === void 0 ? utils_1.getWindowOrigin() || '' : _b, _c = options.scopeDelimiter, scopeDelimiter = _c === void 0 ? ',' : _c, scope = options.scope, state = options.state, additionalUrlParams = options.additionalUrlParams;
        var resolvedState = typeof state === 'function' ? state() : state;
        return [
            ['response_type', responseType],
            ['client_id', clientId],
            ['redirect_uri', redirectUri]
        ].concat((state ? [['state', resolvedState]] : []), (scope ? [['scope', scope.join(scopeDelimiter)]] : []), (additionalUrlParams
            ? Object.keys(additionalUrlParams).map(function (key) {
                var value = additionalUrlParams[key];
                if (typeof value === 'string') {
                    return [key, value];
                }
                else if (typeof value === 'function') {
                    return [key, value()];
                }
                else if (value === null) {
                    return [key, ''];
                }
                return ['', ''];
            })
            : [])).filter(function (_) { return !!_[0]; })
            .reduce(function (acc, next) {
            return (__assign({}, acc, (_a = {}, _a[next[0]] = next[1], _a)));
            var _a;
        }, {});
    };
    Oauth2Service = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object, popup_service_1.PopupService, config_service_1.ConfigService])
    ], Oauth2Service);
    return Oauth2Service;
    var _a;
}());
exports.Oauth2Service = Oauth2Service;
//# sourceMappingURL=oauth2.service.js.map
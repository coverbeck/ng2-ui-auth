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
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var storage_service_1 = require("./storage-service");
var config_service_1 = require("./config.service");
var SharedService = /** @class */ (function () {
    function SharedService(storage, config) {
        this.storage = storage;
        this.config = config;
        this.tokenName = this.config.options.tokenPrefix
            ? [this.config.options.tokenPrefix, this.config.options.tokenName].join(this.config.options.tokenSeparator)
            : this.config.options.tokenName;
    }
    SharedService.prototype.getToken = function () {
        return this.storage.get(this.tokenName);
    };
    SharedService.prototype.getPayload = function (token) {
        if (token === void 0) { token = this.getToken(); }
        if (token && token.split('.').length === 3) {
            try {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                return JSON.parse(this.b64DecodeUnicode(base64));
            }
            catch (e) {
                return undefined;
            }
        }
    };
    SharedService.prototype.setToken = function (response) {
        if (!response) {
            // console.warn('Can\'t set token without passing a value');
            return;
        }
        var token;
        if (typeof response === 'string') {
            token = response;
        }
        else {
            token = this.config.options.resolveToken(response, this.config.options);
        }
        if (token) {
            var expDate = this.getExpirationDate(token);
            this.storage.set(this.tokenName, token, expDate ? expDate.toUTCString() : '');
        }
    };
    SharedService.prototype.removeToken = function () {
        this.storage.remove(this.tokenName);
    };
    SharedService.prototype.isAuthenticated = function (token) {
        if (token === void 0) { token = this.getToken(); }
        // a token is present
        if (token) {
            // token with a valid JWT format XXX.YYY.ZZZ
            if (token.split('.').length === 3) {
                // could be a valid JWT or an access token with the same format
                try {
                    var base64Url = token.split('.')[1];
                    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                    var exp = JSON.parse(this.b64DecodeUnicode(base64)).exp;
                    // jwt with an optional expiration claims
                    if (exp) {
                        var isExpired = Math.round(new Date().getTime() / 1000) >= exp;
                        if (isExpired) {
                            // fail: Expired token
                            this.storage.remove(this.tokenName);
                            return false;
                        }
                        else {
                            // pass: Non-expired token
                            return true;
                        }
                    }
                }
                catch (e) {
                    // pass: Non-JWT token that looks like JWT
                    return true;
                }
            }
            // pass: All other tokens
            return true;
        }
        // lail: No token at all
        return false;
    };
    SharedService.prototype.getExpirationDate = function (token) {
        if (token === void 0) { token = this.getToken(); }
        var payload = this.getPayload(token);
        if (payload && payload.exp && Math.round(new Date().getTime() / 1000) < payload.exp) {
            var date = new Date(0);
            date.setUTCSeconds(payload.exp);
            return date;
        }
        return null;
    };
    SharedService.prototype.logout = function () {
        var _this = this;
        return rxjs_1.Observable.create(function (observer) {
            _this.storage.remove(_this.tokenName);
            observer.next();
            observer.complete();
        });
    };
    SharedService.prototype.setStorageType = function (type) {
        return this.storage.updateStorageType(type);
    };
    SharedService.prototype.b64DecodeUnicode = function (str) {
        return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join(''));
    };
    SharedService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [storage_service_1.StorageService, config_service_1.ConfigService])
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map
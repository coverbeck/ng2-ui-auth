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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_providers_1 = require("./config-providers");
var storage_type_enum_1 = require("./storage-type.enum");
exports.CONFIG_OPTIONS = new core_1.InjectionToken('config.options');
var ConfigService = /** @class */ (function () {
    function ConfigService(options) {
        this.options = {
            withCredentials: false,
            tokenRoot: null,
            baseUrl: '/',
            loginUrl: '/auth/login',
            signupUrl: '/auth/signup',
            unlinkUrl: '/auth/unlink/',
            tokenName: 'token',
            tokenSeparator: '_',
            tokenPrefix: 'ng2-ui-auth',
            authHeader: 'Authorization',
            authToken: 'Bearer',
            storageType: storage_type_enum_1.StorageType.LOCAL_STORAGE,
            cordova: undefined,
            resolveToken: function (response, config) {
                var accessToken = response && (response.access_token || response.token || response.data);
                if (!accessToken) {
                    // console.warn('No token found');
                    return null;
                }
                if (typeof accessToken === 'string') {
                    return accessToken;
                }
                if (typeof accessToken !== 'object') {
                    // console.warn('No token found');
                    return null;
                }
                var tokenRootData = config.tokenRoot &&
                    config.tokenRoot.split('.').reduce(function (o, x) {
                        return o[x];
                    }, accessToken);
                var token = tokenRootData ? tokenRootData[config.tokenName] : accessToken[config.tokenName];
                if (token) {
                    return token;
                }
                // const tokenPath = this.tokenRoot ? this.tokenRoot + '.' + this.tokenName : this.tokenName;
                // console.warn('Expecting a token named "' + tokenPath);
                return null;
            },
            providers: {}
        };
        this.options = __assign({}, this.options, options);
        this.mergeWithDefaultProviders();
    }
    ConfigService.prototype.updateProviders = function (providers) {
        this.options.providers = __assign({}, (this.options.providers || {}), providers);
        this.mergeWithDefaultProviders();
    };
    ConfigService.prototype.mergeWithDefaultProviders = function () {
        var _this = this;
        Object.keys(this.options.providers).forEach(function (key) {
            if (key in config_providers_1.defaultProviders) {
                _this.options.providers[key] = __assign({}, config_providers_1.defaultProviders[key], _this.options.providers[key]);
            }
        });
    };
    ConfigService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(exports.CONFIG_OPTIONS)),
        __metadata("design:paramtypes", [Object])
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map
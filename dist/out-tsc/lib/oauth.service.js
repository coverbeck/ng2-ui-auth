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
var utils_1 = require("./utils");
var operators_1 = require("rxjs/operators");
var oauth1_service_1 = require("./oauth1.service");
var oauth2_service_1 = require("./oauth2.service");
var popup_service_1 = require("./popup.service");
var config_service_1 = require("./config.service");
var shared_service_1 = require("./shared.service");
var http_1 = require("@angular/common/http");
var OauthService = /** @class */ (function () {
    function OauthService(http, shared, config, popup) {
        this.http = http;
        this.shared = shared;
        this.config = config;
        this.popup = popup;
        this.depProviders = [
            { provide: http_1.HttpClient, useValue: this.http },
            { provide: popup_service_1.PopupService, useValue: this.popup },
            { provide: config_service_1.ConfigService, useValue: this.config }
        ];
        this.deps = [http_1.HttpClient, popup_service_1.PopupService, config_service_1.ConfigService];
    }
    OauthService.prototype.authenticate = function (name, userData) {
        var _this = this;
        var provider = this.config.options.providers[name].oauthType === '1.0'
            ? core_1.Injector.create(this.depProviders.concat([{ provide: oauth1_service_1.Oauth1Service, deps: this.deps }])).get(oauth1_service_1.Oauth1Service)
            : core_1.Injector.create(this.depProviders.concat([{ provide: oauth2_service_1.Oauth2Service, deps: this.deps }])).get(oauth2_service_1.Oauth2Service);
        return provider.open(this.config.options.providers[name], userData || {}).pipe(operators_1.tap(function (response) {
            // this is for a scenario when someone wishes to opt out from
            // satellizer's magic by doing authorization code exchange and
            // saving a token manually.
            if (_this.config.options.providers[name].url) {
                _this.shared.setToken(response);
            }
        }));
    };
    OauthService.prototype.unlink = function (provider, url, method) {
        if (url === void 0) { url = utils_1.joinUrl(this.config.options.baseUrl, this.config.options.unlinkUrl); }
        if (method === void 0) { method = 'POST'; }
        return this.http.request(method, url, { body: { provider: provider } });
    };
    OauthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object, shared_service_1.SharedService, config_service_1.ConfigService, popup_service_1.PopupService])
    ], OauthService);
    return OauthService;
    var _a;
}());
exports.OauthService = OauthService;
//# sourceMappingURL=oauth.service.js.map
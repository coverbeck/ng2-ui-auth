"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var config_service_1 = require("./config.service");
var storage_service_1 = require("./storage-service");
var browser_storage_service_1 = require("./browser-storage.service");
var shared_service_1 = require("./shared.service");
var interceptor_service_1 = require("./interceptor.service");
var oauth_service_1 = require("./oauth.service");
var http_2 = require("@angular/common/http");
var popup_service_1 = require("./popup.service");
var local_service_1 = require("./local.service");
var auth_service_1 = require("./auth.service");
var Ng2UiAuthModule = /** @class */ (function () {
    function Ng2UiAuthModule() {
    }
    Ng2UiAuthModule_1 = Ng2UiAuthModule;
    Ng2UiAuthModule.forRoot = function (configOptions, defaultJwtInterceptor) {
        if (defaultJwtInterceptor === void 0) { defaultJwtInterceptor = true; }
        return {
            ngModule: Ng2UiAuthModule_1,
            providers: (configOptions ? [{ provide: config_service_1.CONFIG_OPTIONS, useValue: configOptions }] : []).concat([
                { provide: config_service_1.ConfigService, useClass: config_service_1.ConfigService, deps: [config_service_1.CONFIG_OPTIONS] },
                { provide: storage_service_1.StorageService, useClass: browser_storage_service_1.BrowserStorageService, deps: [config_service_1.ConfigService] },
                { provide: shared_service_1.SharedService, useClass: shared_service_1.SharedService, deps: [storage_service_1.StorageService, config_service_1.ConfigService] },
                { provide: local_service_1.LocalService, useClass: local_service_1.LocalService, deps: [http_2.HttpClient, shared_service_1.SharedService, config_service_1.ConfigService] },
                { provide: popup_service_1.PopupService, useClass: popup_service_1.PopupService, deps: [config_service_1.ConfigService] },
                { provide: oauth_service_1.OauthService, useClass: oauth_service_1.OauthService, deps: [http_2.HttpClient, shared_service_1.SharedService, config_service_1.ConfigService, popup_service_1.PopupService] },
                { provide: auth_service_1.AuthService, useClass: auth_service_1.AuthService, deps: [shared_service_1.SharedService, local_service_1.LocalService, oauth_service_1.OauthService] }
            ], (defaultJwtInterceptor
                ? [{ provide: http_1.HTTP_INTERCEPTORS, useClass: interceptor_service_1.JwtInterceptor, multi: true, deps: [shared_service_1.SharedService, config_service_1.ConfigService] }]
                : []))
        };
    };
    Ng2UiAuthModule = Ng2UiAuthModule_1 = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpClientModule],
            declarations: [],
            exports: []
        })
    ], Ng2UiAuthModule);
    return Ng2UiAuthModule;
    var Ng2UiAuthModule_1;
}());
exports.Ng2UiAuthModule = Ng2UiAuthModule;
//# sourceMappingURL=ng2-ui-auth.module.js.map
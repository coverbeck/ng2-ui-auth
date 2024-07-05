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
var http_1 = require("@angular/common/http");
var shared_service_1 = require("./shared.service");
var config_service_1 = require("./config.service");
var utils_1 = require("./utils");
var operators_1 = require("rxjs/operators");
var LocalService = /** @class */ (function () {
    function LocalService(http, shared, config) {
        this.http = http;
        this.shared = shared;
        this.config = config;
    }
    LocalService.prototype.login = function (user, url) {
        var _this = this;
        return this.http
            .post(url || utils_1.joinUrl(this.config.options.baseUrl, this.config.options.loginUrl), user)
            .pipe(operators_1.tap(function (data) { return _this.shared.setToken(data); }));
    };
    LocalService.prototype.signup = function (user, url) {
        return this.http.post(url || utils_1.joinUrl(this.config.options.baseUrl, this.config.options.signupUrl), user);
    };
    LocalService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object, shared_service_1.SharedService, config_service_1.ConfigService])
    ], LocalService);
    return LocalService;
    var _a;
}());
exports.LocalService = LocalService;
//# sourceMappingURL=local.service.js.map
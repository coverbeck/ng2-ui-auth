"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var storage_service_1 = require("./storage-service");
var storage_type_enum_1 = require("./storage-type.enum");
var config_service_1 = require("./config.service");
var BrowserStorageService = /** @class */ (function (_super) {
    __extends(BrowserStorageService, _super);
    function BrowserStorageService(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        _this.store = {};
        _this.storageType = storage_type_enum_1.StorageType.MEMORY;
        if (!_this.updateStorageType(config.options.storageType)) {
            console.warn(config.options.storageType + ' is not available.');
        }
        return _this;
    }
    BrowserStorageService.prototype.updateStorageType = function (storageType) {
        var isStorageAvailable = this.checkIsStorageAvailable(storageType);
        if (!isStorageAvailable) {
            return false;
        }
        this.storageType = storageType;
        return true;
    };
    BrowserStorageService.prototype.get = function (key) {
        switch (this.storageType) {
            case storage_type_enum_1.StorageType.COOKIE:
            case storage_type_enum_1.StorageType.SESSION_COOKIE:
                return this.getCookie(key);
            case storage_type_enum_1.StorageType.LOCAL_STORAGE:
            case storage_type_enum_1.StorageType.SESSION_STORAGE:
                return window[this.storageType].getItem(key);
            case storage_type_enum_1.StorageType.MEMORY:
                return this.store[key];
            case storage_type_enum_1.StorageType.NONE:
            default:
                return null;
        }
    };
    BrowserStorageService.prototype.set = function (key, value, date) {
        switch (this.storageType) {
            case storage_type_enum_1.StorageType.COOKIE:
            case storage_type_enum_1.StorageType.SESSION_COOKIE:
                this.setCookie(key, value, this.storageType === storage_type_enum_1.StorageType.COOKIE ? date : '');
                break;
            case storage_type_enum_1.StorageType.LOCAL_STORAGE:
            case storage_type_enum_1.StorageType.SESSION_STORAGE:
                window[this.storageType].setItem(key, value);
                break;
            case storage_type_enum_1.StorageType.MEMORY:
                this.store[key] = value;
                break;
            case storage_type_enum_1.StorageType.NONE:
            default:
                break;
        }
    };
    BrowserStorageService.prototype.remove = function (key) {
        switch (this.storageType) {
            case storage_type_enum_1.StorageType.COOKIE:
            case storage_type_enum_1.StorageType.SESSION_COOKIE:
                this.removeCookie(key);
                break;
            case storage_type_enum_1.StorageType.LOCAL_STORAGE:
            case storage_type_enum_1.StorageType.SESSION_STORAGE:
                window[this.storageType].removeItem(key);
                break;
            case storage_type_enum_1.StorageType.MEMORY:
                delete this.store[key];
                break;
            case storage_type_enum_1.StorageType.NONE:
            default:
                break;
        }
    };
    BrowserStorageService.prototype.checkIsStorageAvailable = function (storageType) {
        switch (storageType) {
            case storage_type_enum_1.StorageType.COOKIE:
            case storage_type_enum_1.StorageType.SESSION_COOKIE:
                return this.isCookieStorageAvailable();
            case storage_type_enum_1.StorageType.LOCAL_STORAGE:
            case storage_type_enum_1.StorageType.SESSION_STORAGE:
                return this.isWindowStorageAvailable(storageType);
            case storage_type_enum_1.StorageType.NONE:
            case storage_type_enum_1.StorageType.MEMORY:
                return true;
            default:
                return false;
        }
    };
    BrowserStorageService.prototype.isWindowStorageAvailable = function (storageType) {
        try {
            var supported = window && storageType in window && window[storageType] !== null;
            if (supported) {
                var key = Math.random()
                    .toString(36)
                    .substring(7);
                window[storageType].setItem(key, '');
                window[storageType].removeItem(key);
            }
            return supported;
        }
        catch (e) {
            return false;
        }
    };
    BrowserStorageService.prototype.isCookieStorageAvailable = function () {
        try {
            var supported = document && 'cookie' in document;
            if (supported) {
                var key = Math.random()
                    .toString(36)
                    .substring(7);
                this.setCookie(key, 'test', new Date(Date.now() + 60 * 1000).toUTCString());
                var value = this.getCookie(key);
                this.removeCookie(key);
                return value === 'test';
            }
            return false;
        }
        catch (e) {
            return false;
        }
    };
    BrowserStorageService.prototype.setCookie = function (key, value, expires, path) {
        if (expires === void 0) { expires = ''; }
        if (path === void 0) { path = '/'; }
        document.cookie = key + "=" + value + (expires ? "; expires=" + expires : '') + "; path=" + path;
    };
    BrowserStorageService.prototype.removeCookie = function (key, path) {
        if (path === void 0) { path = '/'; }
        this.setCookie(key, '', new Date(0).toUTCString(), path);
    };
    BrowserStorageService.prototype.getCookie = function (key) {
        return document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + key + "\\s*\\=\\s*([^;]*).*$)|^.*$"), '$1');
    };
    BrowserStorageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [config_service_1.ConfigService])
    ], BrowserStorageService);
    return BrowserStorageService;
}(storage_service_1.StorageService));
exports.BrowserStorageService = BrowserStorageService;
//# sourceMappingURL=browser-storage.service.js.map
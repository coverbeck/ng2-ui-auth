/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { StorageService } from './storage-service';
import { StorageType } from './storage-type.enum';
import { ConfigService } from './config.service';
var BrowserStorageService = /** @class */ (function (_super) {
    tslib_1.__extends(BrowserStorageService, _super);
    function BrowserStorageService(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        _this.store = {};
        _this.storageType = StorageType.MEMORY;
        if (!_this.updateStorageType(config.options.storageType)) {
            console.warn(config.options.storageType + ' is not available.');
        }
        return _this;
    }
    /**
     * @param {?} storageType
     * @return {?}
     */
    BrowserStorageService.prototype.updateStorageType = /**
     * @param {?} storageType
     * @return {?}
     */
    function (storageType) {
        /** @type {?} */
        var isStorageAvailable = this.checkIsStorageAvailable(storageType);
        if (!isStorageAvailable) {
            return false;
        }
        this.storageType = storageType;
        return true;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    BrowserStorageService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        switch (this.storageType) {
            case StorageType.COOKIE:
            case StorageType.SESSION_COOKIE:
                return this.getCookie(key);
            case StorageType.LOCAL_STORAGE:
            case StorageType.SESSION_STORAGE:
                return window[this.storageType].getItem(key);
            case StorageType.MEMORY:
                return this.store[key];
            case StorageType.NONE:
            default:
                return null;
        }
    };
    /**
     * @param {?} key
     * @param {?} value
     * @param {?} date
     * @return {?}
     */
    BrowserStorageService.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @param {?} date
     * @return {?}
     */
    function (key, value, date) {
        switch (this.storageType) {
            case StorageType.COOKIE:
            case StorageType.SESSION_COOKIE:
                this.setCookie(key, value, this.storageType === StorageType.COOKIE ? date : '');
                break;
            case StorageType.LOCAL_STORAGE:
            case StorageType.SESSION_STORAGE:
                window[this.storageType].setItem(key, value);
                break;
            case StorageType.MEMORY:
                this.store[key] = value;
                break;
            case StorageType.NONE:
            default:
                break;
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    BrowserStorageService.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        switch (this.storageType) {
            case StorageType.COOKIE:
            case StorageType.SESSION_COOKIE:
                this.removeCookie(key);
                break;
            case StorageType.LOCAL_STORAGE:
            case StorageType.SESSION_STORAGE:
                window[this.storageType].removeItem(key);
                break;
            case StorageType.MEMORY:
                delete this.store[key];
                break;
            case StorageType.NONE:
            default:
                break;
        }
    };
    /**
     * @private
     * @param {?} storageType
     * @return {?}
     */
    BrowserStorageService.prototype.checkIsStorageAvailable = /**
     * @private
     * @param {?} storageType
     * @return {?}
     */
    function (storageType) {
        switch (storageType) {
            case StorageType.COOKIE:
            case StorageType.SESSION_COOKIE:
                return this.isCookieStorageAvailable();
            case StorageType.LOCAL_STORAGE:
            case StorageType.SESSION_STORAGE:
                return this.isWindowStorageAvailable(storageType);
            case StorageType.NONE:
            case StorageType.MEMORY:
                return true;
            default:
                return false;
        }
    };
    /**
     * @private
     * @param {?} storageType
     * @return {?}
     */
    BrowserStorageService.prototype.isWindowStorageAvailable = /**
     * @private
     * @param {?} storageType
     * @return {?}
     */
    function (storageType) {
        try {
            /** @type {?} */
            var supported = window && storageType in window && window[storageType] !== null;
            if (supported) {
                /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
    BrowserStorageService.prototype.isCookieStorageAvailable = /**
     * @private
     * @return {?}
     */
    function () {
        try {
            /** @type {?} */
            var supported = document && 'cookie' in document;
            if (supported) {
                /** @type {?} */
                var key = Math.random()
                    .toString(36)
                    .substring(7);
                this.setCookie(key, 'test', new Date(Date.now() + 60 * 1000).toUTCString());
                /** @type {?} */
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
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @param {?=} expires
     * @param {?=} path
     * @return {?}
     */
    BrowserStorageService.prototype.setCookie = /**
     * @private
     * @param {?} key
     * @param {?} value
     * @param {?=} expires
     * @param {?=} path
     * @return {?}
     */
    function (key, value, expires, path) {
        if (expires === void 0) { expires = ''; }
        if (path === void 0) { path = '/'; }
        document.cookie = key + "=" + value + (expires ? "; expires=" + expires : '') + "; path=" + path;
    };
    /**
     * @private
     * @param {?} key
     * @param {?=} path
     * @return {?}
     */
    BrowserStorageService.prototype.removeCookie = /**
     * @private
     * @param {?} key
     * @param {?=} path
     * @return {?}
     */
    function (key, path) {
        if (path === void 0) { path = '/'; }
        this.setCookie(key, '', new Date(0).toUTCString(), path);
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    BrowserStorageService.prototype.getCookie = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + key + "\\s*\\=\\s*([^;]*).*$)|^.*$"), '$1');
    };
    BrowserStorageService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BrowserStorageService.ctorParameters = function () { return [
        { type: ConfigService }
    ]; };
    return BrowserStorageService;
}(StorageService));
export { BrowserStorageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BrowserStorageService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    BrowserStorageService.prototype.storageType;
    /**
     * @type {?}
     * @private
     */
    BrowserStorageService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1zdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItdWktYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9icm93c2VyLXN0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFDMkMsaURBQWM7SUFJdkQsK0JBQW9CLE1BQXFCO1FBQXpDLFlBQ0UsaUJBQU8sU0FJUjtRQUxtQixZQUFNLEdBQU4sTUFBTSxDQUFlO1FBSGpDLFdBQUssR0FBOEIsRUFBRSxDQUFDO1FBQ3RDLGlCQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUl2QyxJQUFJLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdkQsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ2pFOztJQUNILENBQUM7Ozs7O0lBRU0saURBQWlCOzs7O0lBQXhCLFVBQXlCLFdBQXdCOztZQUN6QyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN2QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLG1DQUFHOzs7O0lBQVYsVUFBVyxHQUFXO1FBQ3BCLFFBQVEsSUFBSSxDQUFDLFdB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YUFDekI7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Ozs7Ozs7O0lBRU8seUNBQVM7Ozs7Ozs7O0lBQWpCLFVBQWtCLEdBQVcsRUFBRSxLQUFhLEVBQUUsT0FBWSxFQUFFLElBQVU7UUFBeEIsd0JBQUEsRUFBQSxZQUFZO1FBQUUscUJBQUEsRUFBQSxVQUFVO1FBQ3BFLFFBQVEsQ0FBQyxNQUFNLEdBQU0sR0FBRyxTQUFJLEtBQUssSUFBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLGVBQWEsT0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLGdCQUFVLElBQU0sQ0FBQztJQUM1RixDQUFDOzs7Ozs7O0lBRU8sNENBQVk7Ozs7OztJQUFwQixVQUFxQixHQUFXLEVBQUUsSUFBVTtRQUFWLHFCQUFBLEVBQUEsVUFBVTtRQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRU8seUNBQVM7Ozs7O0lBQWpCLFVBQWtCLEdBQVc7UUFDM0IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxxQkFBbUIsR0FBRyxnQ0FBNkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hHLENBQUM7O2dCQTFJRixVQUFVOzs7O2dCQUZGLGFBQWE7O0lBNkl0Qiw0QkFBQztDQUFBLEFBM0lELENBQzJDLGNBQWMsR0EwSXhEO1NBMUlZLHFCQUFxQjs7Ozs7O0lBQ2hDLHNDQUE4Qzs7Ozs7SUFDOUMsNENBQXlDOzs7OztJQUU3Qix1Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS1zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VUeXBlIH0gZnJvbSAnLi9zdG9yYWdlLXR5cGUuZW51bSc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcm93c2VyU3RvcmFnZVNlcnZpY2UgZXh0ZW5kcyBTdG9yYWdlU2VydmljZSB7XG4gIHByaXZhdGUgc3RvcmU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgcHJpdmF0ZSBzdG9yYWdlVHlwZSA9IFN0b3JhZ2VUeXBlLk1FTU9SWTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKCF0aGlzLnVwZGF0ZVN0b3JhZ2VUeXBlKGNvbmZpZy5vcHRpb25zLnN0b3JhZ2VUeXBlKSkge1xuICAgICAgY29uc29sZS53YXJuKGNvbmZpZy5vcHRpb25zLnN0b3JhZ2VUeXBlICsgJyBpcyBub3QgYXZhaWxhYmxlLicpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVTdG9yYWdlVHlwZShzdG9yYWdlVHlwZTogU3RvcmFnZVR5cGUpIHtcbiAgICBjb25zdCBpc1N0b3JhZ2VBdmFpbGFibGUgPSB0aGlzLmNoZWNrSXNTdG9yYWdlQXZhaWxhYmxlKHN0b3JhZ2VUeXBlKTtcbiAgICBpZiAoIWlzU3RvcmFnZUF2YWlsYWJsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnN0b3JhZ2VUeXBlID0gc3RvcmFnZVR5cGU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0b3JhZ2VUeXBlKSB7XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLkNPT0tJRTpcbiAgICAgIGNhc2UgU3RvcmFnZVR5cGUuU0VTU0lPTl9DT09LSUU6XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvb2tpZShrZXkpO1xuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5MT0NBTF9TVE9SQUdFOlxuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5TRVNTSU9OX1NUT1JBR0U6XG4gICAgICAgIHJldHVybiB3aW5kb3dbdGhpcy5zdG9yYWdlVHlwZV0uZ2V0SXRlbShrZXkpO1xuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5NRU1PUlk6XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlW2tleV07XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLk5PTkU6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBkYXRlOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RvcmFnZVR5cGUpIHtcbiAgICAgIGNhc2UgU3RvcmFnZVR5cGUuQ09PS0lFOlxuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5TRVNTSU9OX0NPT0tJRTpcbiAgICAgICAgdGhpcy5zZXRDb29raWUoa2V5LCB2YWx1ZSwgdGhpcy5zdG9yYWdlVHlwZSA9PT0gU3RvcmFnZVR5cGUuQ09PS0lFID8gZGF0ZSA6ICcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLkxPQ0FMX1NUT1JBR0U6XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLlNFU1NJT05fU1RPUkFHRTpcbiAgICAgICAgd2luZG93W3RoaXMuc3RvcmFnZVR5cGVdLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5NRU1PUlk6XG4gICAgICAgIHRoaXMuc3RvcmVba2V5XSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU3RvcmFnZVR5cGUuTk9ORTpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RvcmFnZVR5cGUpIHtcbiAgICAgIGNhc2UgU3RvcmFnZVR5cGUuQ09PS0lFOlxuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5TRVNTSU9OX0NPT0tJRTpcbiAgICAgICAgdGhpcy5yZW1vdmVDb29raWUoa2V5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLkxPQ0FMX1NUT1JBR0U6XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLlNFU1NJT05fU1RPUkFHRTpcbiAgICAgICAgd2luZG93W3RoaXMuc3RvcmFnZVR5cGVdLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLk1FTU9SWTpcbiAgICAgICAgZGVsZXRlIHRoaXMuc3RvcmVba2V5XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLk5PTkU6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrSXNTdG9yYWdlQXZhaWxhYmxlKHN0b3JhZ2VUeXBlOiBTdG9yYWdlVHlwZSkge1xuICAgIHN3aXRjaCAoc3RvcmFnZVR5cGUpIHtcbiAgICAgIGNhc2UgU3RvcmFnZVR5cGUuQ09PS0lFOlxuICAgICAgY2FzZSBTdG9yYWdlVHlwZS5TRVNTSU9OX0NPT0tJRTpcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb29raWVTdG9yYWdlQXZhaWxhYmxlKCk7XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLkxPQ0FMX1NUT1JBR0U6XG4gICAgICBjYXNlIFN0b3JhZ2VUeXBlLlNFU1NJT05fU1RPUkFHRTpcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNXaW5kb3dTdG9yYWdlQXZhaWxhYmxlKHN0b3JhZ2VUeXBlKTtcbiAgICAgIGNhc2UgU3RvcmFnZVR5cGUuTk9ORTpcbiAgICAgIGNhc2UgU3RvcmFnZVR5cGUuTUVNT1JZOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzV2luZG93U3RvcmFnZUF2YWlsYWJsZShzdG9yYWdlVHlwZTogU3RvcmFnZVR5cGUuU0VTU0lPTl9TVE9SQUdFIHwgU3RvcmFnZVR5cGUuTE9DQUxfU1RPUkFHRSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdXBwb3J0ZWQgPSB3aW5kb3cgJiYgc3RvcmFnZVR5cGUgaW4gd2luZG93ICYmIHdpbmRvd1tzdG9yYWdlVHlwZV0gIT09IG51bGw7XG5cbiAgICAgIGlmIChzdXBwb3J0ZWQpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gTWF0aC5yYW5kb20oKVxuICAgICAgICAgIC50b1N0cmluZygzNilcbiAgICAgICAgICAuc3Vic3RyaW5nKDcpO1xuICAgICAgICB3aW5kb3dbc3RvcmFnZVR5cGVdLnNldEl0ZW0oa2V5LCAnJyk7XG4gICAgICAgIHdpbmRvd1tzdG9yYWdlVHlwZV0ucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3VwcG9ydGVkO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzQ29va2llU3RvcmFnZUF2YWlsYWJsZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3VwcG9ydGVkID0gZG9jdW1lbnQgJiYgJ2Nvb2tpZScgaW4gZG9jdW1lbnQ7XG5cbiAgICAgIGlmIChzdXBwb3J0ZWQpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gTWF0aC5yYW5kb20oKVxuICAgICAgICAgIC50b1N0cmluZygzNilcbiAgICAgICAgICAuc3Vic3RyaW5nKDcpO1xuICAgICAgICB0aGlzLnNldENvb2tpZShrZXksICd0ZXN0JywgbmV3IERhdGUoRGF0ZS5ub3coKSArIDYwICogMTAwMCkudG9VVENTdHJpbmcoKSk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRDb29raWUoa2V5KTtcbiAgICAgICAgdGhpcy5yZW1vdmVDb29raWUoa2V5KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSAndGVzdCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29va2llKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzID0gJycsIHBhdGggPSAnLycpIHtcbiAgICBkb2N1bWVudC5jb29raWUgPSBgJHtrZXl9PSR7dmFsdWV9JHtleHBpcmVzID8gYDsgZXhwaXJlcz0ke2V4cGlyZXN9YCA6ICcnfTsgcGF0aD0ke3BhdGh9YDtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlQ29va2llKGtleTogc3RyaW5nLCBwYXRoID0gJy8nKSB7XG4gICAgdGhpcy5zZXRDb29raWUoa2V5LCAnJywgbmV3IERhdGUoMCkudG9VVENTdHJpbmcoKSwgcGF0aCk7XG4gIH1cblxuICBwcml2YXRlIGdldENvb2tpZShrZXk6IHN0cmluZykge1xuICAgIHJldHVybiBkb2N1bWVudC5jb29raWUucmVwbGFjZShuZXcgUmVnRXhwKGAoPzooPzpefC4qO1xcXFxzKikke2tleX1cXFxccypcXFxcPVxcXFxzKihbXjtdKikuKiQpfF4uKiRgKSwgJyQxJyk7XG4gIH1cbn1cbiJdfQ==
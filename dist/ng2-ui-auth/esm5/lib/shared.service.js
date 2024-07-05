/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage-service';
import { ConfigService } from './config.service';
var SharedService = /** @class */ (function () {
    function SharedService(storage, config) {
        this.storage = storage;
        this.config = config;
        this.tokenName = this.config.options.tokenPrefix
            ? [this.config.options.tokenPrefix, this.config.options.tokenName].join(this.config.options.tokenSeparator)
            : this.config.options.tokenName;
    }
    /**
     * @return {?}
     */
    SharedService.prototype.getToken = /**
     * @return {?}
     */
    function () {
        return this.storage.get(this.tokenName);
    };
    /**
     * @param {?=} token
     * @return {?}
     */
    SharedService.prototype.getPayload = /**
     * @param {?=} token
     * @return {?}
     */
    function (token) {
        if (token === void 0) { token = this.getToken(); }
        if (token && token.split('.').length === 3) {
            try {
                /** @type {?} */
                var base64Url = token.split('.')[1];
                /** @type {?} */
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                return JSON.parse(this.b64DecodeUnicode(base64));
            }
            catch (e) {
                return undefined;
            }
        }
    };
    /**
     * @param {?} response
     * @return {?}
     */
    SharedService.prototype.setToken = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (!response) {
            // console.warn('Can\'t set token without passing a value');
            return;
        }
        /** @type {?} */
        var token;
        if (typeof response === 'string') {
            token = response;
        }
        else {
            token = this.config.options.resolveToken(response, this.config.options);
        }
        if (token) {
            /** @type {?} */
            var expDate = this.getExpirationDate(token);
            this.storage.set(this.tokenName, token, expDate ? expDate.toUTCString() : '');
        }
    };
    /**
     * @return {?}
     */
    SharedService.prototype.removeToken = /**
     * @return {?}
     */
    function () {
        this.storage.remove(this.tokenName);
    };
    /**
     * @param {?=} token
     * @return {?}
     */
    SharedService.prototype.isAuthenticated = /**
     * @param {?=} token
     * @return {?}
     */
    function (token) {
        if (token === void 0) { token = this.getToken(); }
        // a token is present
        if (token) {
            // token with a valid JWT format XXX.YYY.ZZZ
            if (token.split('.').length === 3) {
                // could be a valid JWT or an access token with the same format
                try {
                    /** @type {?} */
                    var base64Url = token.split('.')[1];
                    /** @type {?} */
                    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                    /** @type {?} */
                    var exp = JSON.parse(this.b64DecodeUnicode(base64)).exp;
                    // jwt with an optional expiration claims
                    if (exp) {
                        /** @type {?} */
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
    /**
     * @param {?=} token
     * @return {?}
     */
    SharedService.prototype.getExpirationDate = /**
     * @param {?=} token
     * @return {?}
     */
    function (token) {
        if (token === void 0) { token = this.getToken(); }
        /** @type {?} */
        var payload = this.getPayload(token);
        if (payload && payload.exp && Math.round(new Date().getTime() / 1000) < payload.exp) {
            /** @type {?} */
            var date = new Date(0);
            date.setUTCSeconds(payload.exp);
            return date;
        }
        return null;
    };
    /**
     * @return {?}
     */
    SharedService.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.storage.remove(_this.tokenName);
            observer.next();
            observer.complete();
        }));
    };
    /**
     * @param {?} type
     * @return {?}
     */
    SharedService.prototype.setStorageType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.storage.updateStorageType(type);
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    SharedService.prototype.b64DecodeUnicode = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return decodeURIComponent(Array.prototype.map.call(atob(str), (/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); })).join(''));
    };
    SharedService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SharedService.ctorParameters = function () { return [
        { type: StorageService },
        { type: ConfigService }
    ]; };
    return SharedService;
}());
export { SharedService };
if (false) {
    /** @type {?} */
    SharedService.prototype.tokenName;
    /**
     * @type {?}
     * @private
     */
    SharedService.prototype.storage;
    /**
     * @type {?}
     * @private
     */
    SharedService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItdWktYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFNRSx1QkFBb0IsT0FBdUIsRUFBVSxNQUFxQjtRQUF0RCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWU7UUFKbkUsY0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDaEQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7WUFDM0csQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUUyQyxDQUFDOzs7O0lBRXZFLGdDQUFROzs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRU0sa0NBQVU7Ozs7SUFBakIsVUFBa0IsS0FBdUI7UUFBdkIsc0JBQUEsRUFBQSxRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDdkMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFN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QUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXJELENBQXFELEVBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0SSxDQUFDOztnQkF6R0YsVUFBVTs7OztnQkFIRixjQUFjO2dCQUNkLGFBQWE7O0lBNEd0QixvQkFBQztDQUFBLEFBMUdELElBMEdDO1NBekdZLGFBQWE7OztJQUN4QixrQ0FFa0M7Ozs7O0lBRXRCLGdDQUErQjs7Ozs7SUFBRSwrQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yYWdlVHlwZSB9IGZyb20gJy4vc3RvcmFnZS10eXBlLmVudW0nO1xuaW1wb3J0IHsgU3Vic2NyaWJlciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaGFyZWRTZXJ2aWNlIHtcbiAgcHVibGljIHRva2VuTmFtZSA9IHRoaXMuY29uZmlnLm9wdGlvbnMudG9rZW5QcmVmaXhcbiAgICA/IFt0aGlzLmNvbmZpZy5vcHRpb25zLnRva2VuUHJlZml4LCB0aGlzLmNvbmZpZy5vcHRpb25zLnRva2VuTmFtZV0uam9pbih0aGlzLmNvbmZpZy5vcHRpb25zLnRva2VuU2VwYXJhdG9yKVxuICAgIDogdGhpcy5jb25maWcub3B0aW9ucy50b2tlbk5hbWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlU2VydmljZSwgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1NlcnZpY2UpIHt9XG5cbiAgcHVibGljIGdldFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0KHRoaXMudG9rZW5OYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXlsb2FkKHRva2VuID0gdGhpcy5nZXRUb2tlbigpKSB7XG4gICAgaWYgKHRva2VuICYmIHRva2VuLnNwbGl0KCcuJykubGVuZ3RoID09PSAzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xuICAgICAgICBjb25zdCBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5iNjREZWNvZGVVbmljb2RlKGJhc2U2NCkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRUb2tlbihyZXNwb25zZTogc3RyaW5nIHwgb2JqZWN0KSB7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgLy8gY29uc29sZS53YXJuKCdDYW5cXCd0IHNldCB0b2tlbiB3aXRob3V0IHBhc3NpbmcgYSB2YWx1ZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB0b2tlbjogc3RyaW5nO1xuICAgIGlmICh0eXBlb2YgcmVzcG9uc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0b2tlbiA9IHJlc3BvbnNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2tlbiA9IHRoaXMuY29uZmlnLm9wdGlvbnMucmVzb2x2ZVRva2VuKHJlc3BvbnNlLCB0aGlzLmNvbmZpZy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGNvbnN0IGV4cERhdGUgPSB0aGlzLmdldEV4cGlyYXRpb25EYXRlKHRva2VuKTtcbiAgICAgIHRoaXMuc3RvcmFnZS5zZXQodGhpcy50b2tlbk5hbWUsIHRva2VuLCBleHBEYXRlID8gZXhwRGF0ZS50b1VUQ1N0cmluZygpIDogJycpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVUb2tlbigpIHtcbiAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKHRoaXMudG9rZW5OYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0F1dGhlbnRpY2F0ZWQodG9rZW4gPSB0aGlzLmdldFRva2VuKCkpIHtcbiAgICAvLyBhIHRva2VuIGlzIHByZXNlbnRcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIC8vIHRva2VuIHdpdGggYSB2YWxpZCBKV1QgZm9ybWF0IFhYWC5ZWVkuWlpaXG4gICAgICBpZiAodG9rZW4uc3BsaXQoJy4nKS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgLy8gY291bGQgYmUgYSB2YWxpZCBKV1Qgb3IgYW4gYWNjZXNzIHRva2VuIHdpdGggdGhlIHNhbWUgZm9ybWF0XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICBjb25zdCBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgICAgICAgICBjb25zdCBleHAgPSBKU09OLnBhcnNlKHRoaXMuYjY0RGVjb2RlVW5pY29kZShiYXNlNjQpKS5leHA7XG4gICAgICAgICAgLy8gand0IHdpdGggYW4gb3B0aW9uYWwgZXhwaXJhdGlvbiBjbGFpbXNcbiAgICAgICAgICBpZiAoZXhwKSB7XG4gICAgICAgICAgICBjb25zdCBpc0V4cGlyZWQgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkgPj0gZXhwO1xuICAgICAgICAgICAgaWYgKGlzRXhwaXJlZCkge1xuICAgICAgICAgICAgICAvLyBmYWlsOiBFeHBpcmVkIHRva2VuXG4gICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmUodGhpcy50b2tlbk5hbWUpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBwYXNzOiBOb24tZXhwaXJlZCB0b2tlblxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBwYXNzOiBOb24tSldUIHRva2VuIHRoYXQgbG9va3MgbGlrZSBKV1RcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gcGFzczogQWxsIG90aGVyIHRva2Vuc1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIGxhaWw6IE5vIHRva2VuIGF0IGFsbFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRFeHBpcmF0aW9uRGF0ZSh0b2tlbiA9IHRoaXMuZ2V0VG9rZW4oKSkge1xuICAgIGNvbnN0IHBheWxvYWQgPSB0aGlzLmdldFBheWxvYWQodG9rZW4pO1xuICAgIGlmIChwYXlsb2FkICYmIHBheWxvYWQuZXhwICYmIE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKSA8IHBheWxvYWQuZXhwKSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgICBkYXRlLnNldFVUQ1NlY29uZHMocGF5bG9hZC5leHApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIGxvZ291dCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IFN1YnNjcmliZXI8YW55PikgPT4ge1xuICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZSh0aGlzLnRva2VuTmFtZSk7XG4gICAgICBvYnNlcnZlci5uZXh0KCk7XG4gICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNldFN0b3JhZ2VUeXBlKHR5cGU6IFN0b3JhZ2VUeXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS51cGRhdGVTdG9yYWdlVHlwZSh0eXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgYjY0RGVjb2RlVW5pY29kZShzdHIpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChhdG9iKHN0ciksIGMgPT4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMikpLmpvaW4oJycpKTtcbiAgfVxufVxuIl19
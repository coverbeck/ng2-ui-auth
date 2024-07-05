/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LocalService } from './local.service';
import { OauthService } from './oauth.service';
import { SharedService } from './shared.service';
var AuthService = /** @class */ (function () {
    function AuthService(shared, local, oauth) {
        this.shared = shared;
        this.local = local;
        this.oauth = oauth;
    }
    /**
     * @template T
     * @param {?} user
     * @param {?=} url
     * @return {?}
     */
    AuthService.prototype.login = /**
     * @template T
     * @param {?} user
     * @param {?=} url
     * @return {?}
     */
    function (user, url) {
        return this.local.login(user, url);
    };
    /**
     * @template T
     * @param {?} user
     * @param {?=} url
     * @return {?}
     */
    AuthService.prototype.signup = /**
     * @template T
     * @param {?} user
     * @param {?=} url
     * @return {?}
     */
    function (user, url) {
        return this.local.signup(user, url);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.logout = /**
     * @return {?}
     */
    function () {
        return this.shared.logout();
    };
    /**
     * @template T
     * @param {?} name
     * @param {?=} userData
     * @return {?}
     */
    AuthService.prototype.authenticate = /**
     * @template T
     * @param {?} name
     * @param {?=} userData
     * @return {?}
     */
    function (name, userData) {
        return this.oauth.authenticate(name, userData);
    };
    /**
     * @template T
     * @param {?} name
     * @param {?=} userData
     * @return {?}
     */
    AuthService.prototype.link = /**
     * @template T
     * @param {?} name
     * @param {?=} userData
     * @return {?}
     */
    function (name, userData) {
        return this.oauth.authenticate(name, userData);
    };
    /**
     * @template T
     * @param {?} provider
     * @param {?=} url
     * @return {?}
     */
    AuthService.prototype.unlink = /**
     * @template T
     * @param {?} provider
     * @param {?=} url
     * @return {?}
     */
    function (provider, url) {
        return this.oauth.unlink(provider, url);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.isAuthenticated = /**
     * @return {?}
     */
    function () {
        return this.shared.isAuthenticated();
    };
    /**
     * @return {?}
     */
    AuthService.prototype.getToken = /**
     * @return {?}
     */
    function () {
        return this.shared.getToken();
    };
    /**
     * @param {?} token
     * @return {?}
     */
    AuthService.prototype.setToken = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        this.shared.setToken(token);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.removeToken = /**
     * @return {?}
     */
    function () {
        this.shared.removeToken();
    };
    /**
     * @return {?}
     */
    AuthService.prototype.getPayload = /**
     * @return {?}
     */
    function () {
        return this.shared.getPayload();
    };
    /**
     * @param {?} type
     * @return {?}
     */
    AuthService.prototype.setStorageType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.shared.setStorageType(type);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.getExpirationDate = /**
     * @return {?}
     */
    function () {
        return this.shared.getExpirationDate();
    };
    AuthService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: SharedService },
        { type: LocalService },
        { type: OauthService }
    ]; };
    return AuthService;
}());
export { AuthService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.shared;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.local;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.oauth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXVpLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR2pEO0lBRUUscUJBQW9CLE1BQXFCLEVBQVUsS0FBbUIsRUFBVSxLQUFtQjtRQUEvRSxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLFVBQUssR0FBTCxLQUFLLENBQWM7SUFBRyxDQUFDOzs7Ozs7O0lBRWhHLDJCQUFLOzs7Ozs7SUFBWixVQUE4QyxJQUFxQixFQUFFLEdBQVk7UUFDL0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBSSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7OztJQUVNLDRCQUFNOzs7Ozs7SUFBYixVQUF1QixJQUFxQixFQUFFLEdBQVk7UUFDeEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBSSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVNLDRCQUFNOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRU0sa0NBQVk7Ozs7OztJQUFuQixVQUFxRCxJQUFZLEVBQUUsUUFBYztRQUMvRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFJLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7O0lBRU0sMEJBQUk7Ozs7OztJQUFYLFVBQTZDLElBQVksRUFBRSxRQUFjO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUksSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7Ozs7SUFFTSw0QkFBTTs7Ozs7O0lBQWIsVUFBdUIsUUFBZ0IsRUFBRSxHQUFZO1FBQ25ELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUksUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFTSxxQ0FBZTs7O0lBQXRCO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFTSw4QkFBUTs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFTSw4QkFBUTs7OztJQUFmLFVBQWdCLEtBQXNCO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFTSxpQ0FBVzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRU0sZ0NBQVU7OztJQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVNLG9DQUFjOzs7O0lBQXJCLFVBQXNCLElBQWlCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVNLHVDQUFpQjs7O0lBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDekMsQ0FBQzs7Z0JBdERGLFVBQVU7Ozs7Z0JBSEYsYUFBYTtnQkFGYixZQUFZO2dCQUNaLFlBQVk7O0lBMkRyQixrQkFBQztDQUFBLEFBdkRELElBdURDO1NBdERZLFdBQVc7Ozs7OztJQUNWLDZCQUE2Qjs7Ozs7SUFBRSw0QkFBMkI7Ozs7O0lBQUUsNEJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTG9jYWxTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbC5zZXJ2aWNlJztcbmltcG9ydCB7IE9hdXRoU2VydmljZSB9IGZyb20gJy4vb2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlVHlwZSB9IGZyb20gJy4vc3RvcmFnZS10eXBlLmVudW0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNoYXJlZDogU2hhcmVkU2VydmljZSwgcHJpdmF0ZSBsb2NhbDogTG9jYWxTZXJ2aWNlLCBwcml2YXRlIG9hdXRoOiBPYXV0aFNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGxvZ2luPFQgZXh0ZW5kcyBzdHJpbmcgfCBvYmplY3QgPSBhbnk+KHVzZXI6IHN0cmluZyB8IG9iamVjdCwgdXJsPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWwubG9naW48VD4odXNlciwgdXJsKTtcbiAgfVxuXG4gIHB1YmxpYyBzaWdudXA8VCA9IGFueT4odXNlcjogc3RyaW5nIHwgb2JqZWN0LCB1cmw/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbC5zaWdudXA8VD4odXNlciwgdXJsKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcmVkLmxvZ291dCgpO1xuICB9XG5cbiAgcHVibGljIGF1dGhlbnRpY2F0ZTxUIGV4dGVuZHMgb2JqZWN0IHwgc3RyaW5nID0gYW55PihuYW1lOiBzdHJpbmcsIHVzZXJEYXRhPzogYW55KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMub2F1dGguYXV0aGVudGljYXRlPFQ+KG5hbWUsIHVzZXJEYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBsaW5rPFQgZXh0ZW5kcyBvYmplY3QgfCBzdHJpbmcgPSBhbnk+KG5hbWU6IHN0cmluZywgdXNlckRhdGE/OiBhbnkpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5vYXV0aC5hdXRoZW50aWNhdGU8VD4obmFtZSwgdXNlckRhdGEpO1xuICB9XG5cbiAgcHVibGljIHVubGluazxUID0gYW55Pihwcm92aWRlcjogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5vYXV0aC51bmxpbms8VD4ocHJvdmlkZXIsIHVybCk7XG4gIH1cblxuICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoYXJlZC5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUb2tlbigpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFyZWQuZ2V0VG9rZW4oKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRUb2tlbih0b2tlbjogc3RyaW5nIHwgb2JqZWN0KTogdm9pZCB7XG4gICAgdGhpcy5zaGFyZWQuc2V0VG9rZW4odG9rZW4pO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVRva2VuKCk6IHZvaWQge1xuICAgIHRoaXMuc2hhcmVkLnJlbW92ZVRva2VuKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGF5bG9hZCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnNoYXJlZC5nZXRQYXlsb2FkKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0U3RvcmFnZVR5cGUodHlwZTogU3RvcmFnZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFyZWQuc2V0U3RvcmFnZVR5cGUodHlwZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RXhwaXJhdGlvbkRhdGUoKTogRGF0ZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYXJlZC5nZXRFeHBpcmF0aW9uRGF0ZSgpO1xuICB9XG59XG4iXX0=
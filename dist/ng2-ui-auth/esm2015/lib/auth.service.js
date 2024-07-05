/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LocalService } from './local.service';
import { OauthService } from './oauth.service';
import { SharedService } from './shared.service';
export class AuthService {
    /**
     * @param {?} shared
     * @param {?} local
     * @param {?} oauth
     */
    constructor(shared, local, oauth) {
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
    login(user, url) {
        return this.local.login(user, url);
    }
    /**
     * @template T
     * @param {?} user
     * @param {?=} url
     * @return {?}
     */
    signup(user, url) {
        return this.local.signup(user, url);
    }
    /**
     * @return {?}
     */
    logout() {
        return this.shared.logout();
    }
    /**
     * @template T
     * @param {?} name
     * @param {?=} userData
     * @return {?}
     */
    authenticate(name, userData) {
        return this.oauth.authenticate(name, userData);
    }
    /**
     * @template T
     * @param {?} name
     * @param {?=} userData
     * @return {?}
     */
    link(name, userData) {
        return this.oauth.authenticate(name, userData);
    }
    /**
     * @template T
     * @param {?} provider
     * @param {?=} url
     * @return {?}
     */
    unlink(provider, url) {
        return this.oauth.unlink(provider, url);
    }
    /**
     * @return {?}
     */
    isAuthenticated() {
        return this.shared.isAuthenticated();
    }
    /**
     * @return {?}
     */
    getToken() {
        return this.shared.getToken();
    }
    /**
     * @param {?} token
     * @return {?}
     */
    setToken(token) {
        this.shared.setToken(token);
    }
    /**
     * @return {?}
     */
    removeToken() {
        this.shared.removeToken();
    }
    /**
     * @return {?}
     */
    getPayload() {
        return this.shared.getPayload();
    }
    /**
     * @param {?} type
     * @return {?}
     */
    setStorageType(type) {
        return this.shared.setStorageType(type);
    }
    /**
     * @return {?}
     */
    getExpirationDate() {
        return this.shared.getExpirationDate();
    }
}
AuthService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: SharedService },
    { type: LocalService },
    { type: OauthService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXVpLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBSWpELE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFDdEIsWUFBb0IsTUFBcUIsRUFBVSxLQUFtQixFQUFVLEtBQW1CO1FBQS9FLFdBQU0sR0FBTixNQUFNLENBQWU7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBYztJQUFHLENBQUM7Ozs7Ozs7SUFFaEcsS0FBSyxDQUFrQyxJQUFxQixFQUFFLEdBQVk7UUFDL0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBSSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7OztJQUVNLE1BQU0sQ0FBVSxJQUFxQixFQUFFLEdBQVk7UUFDeEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBSSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVNLE1BQU07UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7OztJQUVNLFlBQVksQ0FBa0MsSUFBWSxFQUFFLFFBQWM7UUFDL0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBSSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7OztJQUVNLElBQUksQ0FBa0MsSUFBWSxFQUFFLFFBQWM7UUFDdkUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBSSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7OztJQUVNLE1BQU0sQ0FBVSxRQUFnQixFQUFFLEdBQVk7UUFDbkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBSSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVNLGVBQWU7UUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRU0sUUFBUSxDQUFDLEtBQXNCO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVNLFVBQVU7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFTSxjQUFjLENBQUMsSUFBaUI7UUFDckMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRU0saUJBQWlCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3pDLENBQUM7OztZQXRERixVQUFVOzs7O1lBSEYsYUFBYTtZQUZiLFlBQVk7WUFDWixZQUFZOzs7Ozs7O0lBTVAsNkJBQTZCOzs7OztJQUFFLDRCQUEyQjs7Ozs7SUFBRSw0QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2F1dGhTZXJ2aWNlIH0gZnJvbSAnLi9vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFNoYXJlZFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VUeXBlIH0gZnJvbSAnLi9zdG9yYWdlLXR5cGUuZW51bSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2hhcmVkOiBTaGFyZWRTZXJ2aWNlLCBwcml2YXRlIGxvY2FsOiBMb2NhbFNlcnZpY2UsIHByaXZhdGUgb2F1dGg6IE9hdXRoU2VydmljZSkge31cblxuICBwdWJsaWMgbG9naW48VCBleHRlbmRzIHN0cmluZyB8IG9iamVjdCA9IGFueT4odXNlcjogc3RyaW5nIHwgb2JqZWN0LCB1cmw/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbC5sb2dpbjxUPih1c2VyLCB1cmwpO1xuICB9XG5cbiAgcHVibGljIHNpZ251cDxUID0gYW55Pih1c2VyOiBzdHJpbmcgfCBvYmplY3QsIHVybD86IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLmxvY2FsLnNpZ251cDxUPih1c2VyLCB1cmwpO1xuICB9XG5cbiAgcHVibGljIGxvZ291dCgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaGFyZWQubG9nb3V0KCk7XG4gIH1cblxuICBwdWJsaWMgYXV0aGVudGljYXRlPFQgZXh0ZW5kcyBvYmplY3QgfCBzdHJpbmcgPSBhbnk+KG5hbWU6IHN0cmluZywgdXNlckRhdGE/OiBhbnkpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5vYXV0aC5hdXRoZW50aWNhdGU8VD4obmFtZSwgdXNlckRhdGEpO1xuICB9XG5cbiAgcHVibGljIGxpbms8VCBleHRlbmRzIG9iamVjdCB8IHN0cmluZyA9IGFueT4obmFtZTogc3RyaW5nLCB1c2VyRGF0YT86IGFueSk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLm9hdXRoLmF1dGhlbnRpY2F0ZTxUPihuYW1lLCB1c2VyRGF0YSk7XG4gIH1cblxuICBwdWJsaWMgdW5saW5rPFQgPSBhbnk+KHByb3ZpZGVyOiBzdHJpbmcsIHVybD86IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLm9hdXRoLnVubGluazxUPihwcm92aWRlciwgdXJsKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcmVkLmlzQXV0aGVudGljYXRlZCgpO1xuICB9XG5cbiAgcHVibGljIGdldFRva2VuKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYXJlZC5nZXRUb2tlbigpO1xuICB9XG5cbiAgcHVibGljIHNldFRva2VuKHRva2VuOiBzdHJpbmcgfCBvYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLnNoYXJlZC5zZXRUb2tlbih0b2tlbik7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlVG9rZW4oKTogdm9pZCB7XG4gICAgdGhpcy5zaGFyZWQucmVtb3ZlVG9rZW4oKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXlsb2FkKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcmVkLmdldFBheWxvYWQoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTdG9yYWdlVHlwZSh0eXBlOiBTdG9yYWdlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoYXJlZC5zZXRTdG9yYWdlVHlwZSh0eXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRFeHBpcmF0aW9uRGF0ZSgpOiBEYXRlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcmVkLmdldEV4cGlyYXRpb25EYXRlKCk7XG4gIH1cbn1cbiJdfQ==
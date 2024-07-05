/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { PopupService } from './popup.service';
import { buildQueryString, joinUrl } from './utils';
export class Oauth1Service {
    /**
     * @param {?} http
     * @param {?} popup
     * @param {?} config
     */
    constructor(http, popup, config) {
        this.http = http;
        this.popup = popup;
        this.config = config;
    }
    /**
     * @template T
     * @param {?} oauthOptions
     * @param {?} userData
     * @return {?}
     */
    open(oauthOptions, userData) {
        /** @type {?} */
        const serverUrl = this.config.options.baseUrl ? joinUrl(this.config.options.baseUrl, oauthOptions.url) : oauthOptions.url;
        return this.popup.open('about:blank', oauthOptions, this.config.options.cordova).pipe(switchMap((/**
         * @param {?} popupWindow
         * @return {?}
         */
        popupWindow => this.http.post(serverUrl, oauthOptions).pipe(tap((/**
         * @param {?} authorizationData
         * @return {?}
         */
        authorizationData => popupWindow
            ? popupWindow.location.replace([oauthOptions.authorizationEndpoint, buildQueryString(authorizationData)].join('?'))
            : undefined)), switchMap((/**
         * @param {?} authorizationData
         * @return {?}
         */
        authorizationData => this.popup
            .waitForClose(popupWindow, this.config.options.cordova, oauthOptions.redirectUri)
            .pipe(map((/**
         * @param {?} oauthData
         * @return {?}
         */
        oauthData => ({ authorizationData, oauthData }))))))))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ authorizationData, oauthData }) => this.exchangeForToken(oauthOptions, authorizationData, oauthData, userData))));
    }
    /**
     * @private
     * @template T
     * @param {?} oauthOptions
     * @param {?} authorizationData
     * @param {?} oauthData
     * @param {?} userData
     * @return {?}
     */
    exchangeForToken(oauthOptions, authorizationData, oauthData, userData) {
        /** @type {?} */
        const body = { oauthOptions, authorizationData, oauthData, userData };
        const { withCredentials, baseUrl } = this.config.options;
        const { method = 'POST', url } = oauthOptions;
        /** @type {?} */
        const exchangeForTokenUrl = baseUrl ? joinUrl(baseUrl, url) : url;
        return this.http.request(method, exchangeForTokenUrl, { body, withCredentials });
    }
}
Oauth1Service.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Oauth1Service.ctorParameters = () => [
    { type: HttpClient },
    { type: PopupService },
    { type: ConfigService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    Oauth1Service.prototype.http;
    /**
     * @type {?}
     * @private
     */
    Oauth1Service.prototype.popup;
    /**
     * @type {?}
     * @private
     */
    Oauth1Service.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGgxLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItdWktYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9vYXV0aDEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBR3BELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFDeEIsWUFBb0IsSUFBZ0IsRUFBVSxLQUFtQixFQUFVLE1BQXFCO1FBQTVFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7Ozs7Ozs7SUFFcEcsSUFBSSxDQUFrQyxZQUE0QixFQUFFLFFBQWdCOztjQUM1RSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUc7UUFDekgsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDbkYsU0FBUzs7OztRQUFDLFdBQVcsQ0FBQyxFQUFFLENBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFTLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQ2xELEdBQUc7Ozs7UUFBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQ3RCLFdBQVc7WUFDVCxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuSCxDQUFDLENBQUMsU0FBUyxFQUNkLEVBQ0QsU0FBUzs7OztRQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FDNUIsSUFBSSxDQUFDLEtBQUs7YUFDUCxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsV0FBVyxDQUFDO2FBQ2hGLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQzlELENBQ0YsRUFDRixFQUNELFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBSSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxFQUFDLENBQ2hJLENBQUM7SUFDSixDQUFDOzs7Ozs7Ozs7O0lBRU8sZ0JBQWdCLENBQUksWUFBNEIsRUFBRSxpQkFBeUIsRUFBRSxTQUFpQixFQUFFLFFBQWdCOztjQUNoSCxJQUFJLEdBQUcsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRTtjQUMvRCxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Y0FDbEQsRUFBRSxNQUFNLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLFlBQVk7O2NBQ3ZDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztRQUNqRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFJLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7OztZQS9CRixVQUFVOzs7O1lBVkYsVUFBVTtZQU9WLFlBQVk7WUFGWixhQUFhOzs7Ozs7O0lBT1IsNkJBQXdCOzs7OztJQUFFLDhCQUEyQjs7Ozs7SUFBRSwrQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElPYXV0aDFPcHRpb25zIH0gZnJvbSAnLi9jb25maWctaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBJT2F1dGhTZXJ2aWNlIH0gZnJvbSAnLi9vYXV0aC1zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwU2VydmljZSB9IGZyb20gJy4vcG9wdXAuc2VydmljZSc7XG5pbXBvcnQgeyBidWlsZFF1ZXJ5U3RyaW5nLCBqb2luVXJsIH0gZnJvbSAnLi91dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPYXV0aDFTZXJ2aWNlIGltcGxlbWVudHMgSU9hdXRoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBwb3B1cDogUG9wdXBTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSkge31cblxuICBvcGVuPFQgZXh0ZW5kcyBvYmplY3QgfCBzdHJpbmcgPSBhbnk+KG9hdXRoT3B0aW9uczogSU9hdXRoMU9wdGlvbnMsIHVzZXJEYXRhOiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCBzZXJ2ZXJVcmwgPSB0aGlzLmNvbmZpZy5vcHRpb25zLmJhc2VVcmwgPyBqb2luVXJsKHRoaXMuY29uZmlnLm9wdGlvbnMuYmFzZVVybCwgb2F1dGhPcHRpb25zLnVybCkgOiBvYXV0aE9wdGlvbnMudXJsO1xuICAgIHJldHVybiB0aGlzLnBvcHVwLm9wZW4oJ2Fib3V0OmJsYW5rJywgb2F1dGhPcHRpb25zLCB0aGlzLmNvbmZpZy5vcHRpb25zLmNvcmRvdmEpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocG9wdXBXaW5kb3cgPT5cbiAgICAgICAgdGhpcy5odHRwLnBvc3Q8b2JqZWN0PihzZXJ2ZXJVcmwsIG9hdXRoT3B0aW9ucykucGlwZShcbiAgICAgICAgICB0YXAoYXV0aG9yaXphdGlvbkRhdGEgPT5cbiAgICAgICAgICAgIHBvcHVwV2luZG93XG4gICAgICAgICAgICAgID8gcG9wdXBXaW5kb3cubG9jYXRpb24ucmVwbGFjZShbb2F1dGhPcHRpb25zLmF1dGhvcml6YXRpb25FbmRwb2ludCwgYnVpbGRRdWVyeVN0cmluZyhhdXRob3JpemF0aW9uRGF0YSldLmpvaW4oJz8nKSlcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICApLFxuICAgICAgICAgIHN3aXRjaE1hcChhdXRob3JpemF0aW9uRGF0YSA9PlxuICAgICAgICAgICAgdGhpcy5wb3B1cFxuICAgICAgICAgICAgICAud2FpdEZvckNsb3NlKHBvcHVwV2luZG93LCB0aGlzLmNvbmZpZy5vcHRpb25zLmNvcmRvdmEsIG9hdXRoT3B0aW9ucy5yZWRpcmVjdFVyaSlcbiAgICAgICAgICAgICAgLnBpcGUobWFwKG9hdXRoRGF0YSA9PiAoeyBhdXRob3JpemF0aW9uRGF0YSwgb2F1dGhEYXRhIH0pKSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBzd2l0Y2hNYXAoKHsgYXV0aG9yaXphdGlvbkRhdGEsIG9hdXRoRGF0YSB9KSA9PiB0aGlzLmV4Y2hhbmdlRm9yVG9rZW48VD4ob2F1dGhPcHRpb25zLCBhdXRob3JpemF0aW9uRGF0YSwgb2F1dGhEYXRhLCB1c2VyRGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhjaGFuZ2VGb3JUb2tlbjxUPihvYXV0aE9wdGlvbnM6IElPYXV0aDFPcHRpb25zLCBhdXRob3JpemF0aW9uRGF0YTogb2JqZWN0LCBvYXV0aERhdGE6IG9iamVjdCwgdXNlckRhdGE6IG9iamVjdCkge1xuICAgIGNvbnN0IGJvZHkgPSB7IG9hdXRoT3B0aW9ucywgYXV0aG9yaXphdGlvbkRhdGEsIG9hdXRoRGF0YSwgdXNlckRhdGEgfTtcbiAgICBjb25zdCB7IHdpdGhDcmVkZW50aWFscywgYmFzZVVybCB9ID0gdGhpcy5jb25maWcub3B0aW9ucztcbiAgICBjb25zdCB7IG1ldGhvZCA9ICdQT1NUJywgdXJsIH0gPSBvYXV0aE9wdGlvbnM7XG4gICAgY29uc3QgZXhjaGFuZ2VGb3JUb2tlblVybCA9IGJhc2VVcmwgPyBqb2luVXJsKGJhc2VVcmwsIHVybCkgOiB1cmw7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0PFQ+KG1ldGhvZCwgZXhjaGFuZ2VGb3JUb2tlblVybCwgeyBib2R5LCB3aXRoQ3JlZGVudGlhbHMgfSk7XG4gIH1cbn1cbiJdfQ==
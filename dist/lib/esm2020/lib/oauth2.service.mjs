import { Injectable } from '@angular/core';
import { empty, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { buildQueryString, getWindowOrigin, joinUrl } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./popup.service";
import * as i3 from "./config.service";
export class Oauth2Service {
    constructor(http, popup, config) {
        this.http = http;
        this.popup = popup;
        this.config = config;
    }
    open(oauthOptions, userData) {
        const authorizationData = this.getAuthorizationData(oauthOptions);
        const url = [oauthOptions.authorizationEndpoint, buildQueryString(authorizationData)].join('?');
        return this.popup.open(url, oauthOptions, this.config.options.cordova).pipe(switchMap((window) => window ? this.popup.waitForClose(window, this.config.options.cordova, oauthOptions.redirectUri) : empty()), switchMap((oauthData) => {
            // when no server URL provided, return popup params as-is.
            // this is for a scenario when someone wishes to opt out from
            // satellizer's magic by doing authorization code exchange and
            // saving a token manually.
            if (oauthOptions.responseType === 'token' || !oauthOptions.url) {
                return of(oauthData);
            }
            if (oauthData.state && oauthData.state !== authorizationData.state) {
                throw new Error('OAuth "state" mismatch');
            }
            return this.exchangeForToken(oauthOptions, authorizationData, oauthData, userData);
        }));
    }
    exchangeForToken(options, authorizationData, oauthData, userData) {
        const body = { authorizationData, oauthData, userData };
        const { baseUrl, withCredentials } = this.config.options;
        const { url, method = 'POST' } = options;
        const exchangeForTokenUrl = baseUrl ? joinUrl(baseUrl, url) : url;
        return this.http.request(method, exchangeForTokenUrl, { body, withCredentials });
    }
    getAuthorizationData(options) {
        const { responseType = 'code', clientId, redirectUri = getWindowOrigin() || '', scopeDelimiter = ',', scope, state, additionalUrlParams } = options;
        const resolvedState = typeof state === 'function' ? state() : state;
        return [
            ['response_type', responseType],
            ['client_id', clientId],
            ['redirect_uri', redirectUri],
            ...(state ? [['state', resolvedState]] : []),
            ...(scope ? [['scope', scope.join(scopeDelimiter)]] : []),
            ...(additionalUrlParams
                ? Object.keys(additionalUrlParams).map(key => {
                    const value = additionalUrlParams[key];
                    if (typeof value === 'string') {
                        return [key, value];
                    }
                    else if (typeof value === 'function') {
                        return [key, value()];
                    }
                    else if (value === null) {
                        return [key, ''];
                    }
                    return ['', ''];
                })
                : [])
        ]
            .filter(_ => !!_[0])
            .reduce((acc, next) => ({ ...acc, [next[0]]: next[1] }), {});
    }
}
Oauth2Service.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Oauth2Service, deps: [{ token: i1.HttpClient }, { token: i2.PopupService }, { token: i3.ConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
Oauth2Service.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Oauth2Service });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Oauth2Service, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.PopupService }, { type: i3.ConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGgyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItdWktYXV0aC9zcmMvbGliL29hdXRoMi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7OztBQUdyRSxNQUFNLE9BQU8sYUFBYTtJQUN4QixZQUFvQixJQUFnQixFQUFVLEtBQW1CLEVBQVUsTUFBcUI7UUFBNUUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQUcsQ0FBQztJQUVwRyxJQUFJLENBQWtDLFlBQTRCLEVBQUUsUUFBZ0I7UUFDbEYsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUN6RSxTQUFTLENBQUMsQ0FBQyxNQUFlLEVBQUUsRUFBRSxDQUM1QixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FDMUcsRUFDRCxTQUFTLENBQUMsQ0FBQyxTQUFjLEVBQUUsRUFBRTtZQUMzQiwwREFBMEQ7WUFDMUQsNkRBQTZEO1lBQzdELDhEQUE4RDtZQUM5RCwyQkFBMkI7WUFDM0IsSUFBSSxZQUFZLENBQUMsWUFBWSxLQUFLLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQzlELE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3RCO1lBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssaUJBQWlCLENBQUMsS0FBSyxFQUFFO2dCQUNsRSxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7YUFDM0M7WUFDRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBSSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hGLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRU8sZ0JBQWdCLENBQUksT0FBdUIsRUFBRSxpQkFBeUIsRUFBRSxTQUFpQixFQUFFLFFBQWdCO1FBQ2pILE1BQU0sSUFBSSxHQUFHLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ3hELE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDekQsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEdBQUcsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3pDLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDbEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBSSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRU8sb0JBQW9CLENBQUMsT0FBdUI7UUFDbEQsTUFBTSxFQUNKLFlBQVksR0FBRyxNQUFNLEVBQ3JCLFFBQVEsRUFDUixXQUFXLEdBQUcsZUFBZSxFQUFFLElBQUksRUFBRSxFQUNyQyxjQUFjLEdBQUcsR0FBRyxFQUNwQixLQUFLLEVBQ0wsS0FBSyxFQUNMLG1CQUFtQixFQUNwQixHQUFHLE9BQU8sQ0FBQztRQUNaLE1BQU0sYUFBYSxHQUFHLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNwRSxPQUFPO1lBQ0wsQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDO1lBQy9CLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQztZQUN2QixDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUM7WUFDN0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3pELEdBQUcsQ0FBQyxtQkFBbUI7Z0JBQ3JCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN6QyxNQUFNLEtBQUssR0FBZ0QsbUJBQTJCLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzVGLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO3dCQUM3QixPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO3FCQUNyQjt5QkFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsRUFBRTt3QkFDdEMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO3FCQUN2Qjt5QkFBTSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7d0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7cUJBQ2xCO29CQUNELE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQztnQkFDSixDQUFDLENBQUMsRUFBRSxDQUFDO1NBQ1I7YUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25CLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBK0IsQ0FBQyxDQUFDO0lBQzlGLENBQUM7OzJHQXBFVSxhQUFhOytHQUFiLGFBQWE7NEZBQWIsYUFBYTtrQkFEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBlbXB0eSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElPYXV0aDJPcHRpb25zIH0gZnJvbSAnLi9jb25maWctaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBJT2F1dGhTZXJ2aWNlIH0gZnJvbSAnLi9vYXV0aC1zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwU2VydmljZSB9IGZyb20gJy4vcG9wdXAuc2VydmljZSc7XG5pbXBvcnQgeyBidWlsZFF1ZXJ5U3RyaW5nLCBnZXRXaW5kb3dPcmlnaW4sIGpvaW5VcmwgfSBmcm9tICcuL3V0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9hdXRoMlNlcnZpY2UgaW1wbGVtZW50cyBJT2F1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHBvcHVwOiBQb3B1cFNlcnZpY2UsIHByaXZhdGUgY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7fVxuXG4gIG9wZW48VCBleHRlbmRzIG9iamVjdCB8IHN0cmluZyA9IGFueT4ob2F1dGhPcHRpb25zOiBJT2F1dGgyT3B0aW9ucywgdXNlckRhdGE6IG9iamVjdCk6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IGF1dGhvcml6YXRpb25EYXRhID0gdGhpcy5nZXRBdXRob3JpemF0aW9uRGF0YShvYXV0aE9wdGlvbnMpO1xuICAgIGNvbnN0IHVybCA9IFtvYXV0aE9wdGlvbnMuYXV0aG9yaXphdGlvbkVuZHBvaW50LCBidWlsZFF1ZXJ5U3RyaW5nKGF1dGhvcml6YXRpb25EYXRhKV0uam9pbignPycpO1xuICAgIHJldHVybiB0aGlzLnBvcHVwLm9wZW4odXJsLCBvYXV0aE9wdGlvbnMsIHRoaXMuY29uZmlnLm9wdGlvbnMuY29yZG92YSkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgod2luZG93PzogV2luZG93KSA9PlxuICAgICAgICB3aW5kb3cgPyB0aGlzLnBvcHVwLndhaXRGb3JDbG9zZSh3aW5kb3csIHRoaXMuY29uZmlnLm9wdGlvbnMuY29yZG92YSwgb2F1dGhPcHRpb25zLnJlZGlyZWN0VXJpKSA6IGVtcHR5KClcbiAgICAgICksXG4gICAgICBzd2l0Y2hNYXAoKG9hdXRoRGF0YTogYW55KSA9PiB7XG4gICAgICAgIC8vIHdoZW4gbm8gc2VydmVyIFVSTCBwcm92aWRlZCwgcmV0dXJuIHBvcHVwIHBhcmFtcyBhcy1pcy5cbiAgICAgICAgLy8gdGhpcyBpcyBmb3IgYSBzY2VuYXJpbyB3aGVuIHNvbWVvbmUgd2lzaGVzIHRvIG9wdCBvdXQgZnJvbVxuICAgICAgICAvLyBzYXRlbGxpemVyJ3MgbWFnaWMgYnkgZG9pbmcgYXV0aG9yaXphdGlvbiBjb2RlIGV4Y2hhbmdlIGFuZFxuICAgICAgICAvLyBzYXZpbmcgYSB0b2tlbiBtYW51YWxseS5cbiAgICAgICAgaWYgKG9hdXRoT3B0aW9ucy5yZXNwb25zZVR5cGUgPT09ICd0b2tlbicgfHwgIW9hdXRoT3B0aW9ucy51cmwpIHtcbiAgICAgICAgICByZXR1cm4gb2Yob2F1dGhEYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvYXV0aERhdGEuc3RhdGUgJiYgb2F1dGhEYXRhLnN0YXRlICE9PSBhdXRob3JpemF0aW9uRGF0YS5zdGF0ZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT0F1dGggXCJzdGF0ZVwiIG1pc21hdGNoJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZXhjaGFuZ2VGb3JUb2tlbjxUPihvYXV0aE9wdGlvbnMsIGF1dGhvcml6YXRpb25EYXRhLCBvYXV0aERhdGEsIHVzZXJEYXRhKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhjaGFuZ2VGb3JUb2tlbjxUPihvcHRpb25zOiBJT2F1dGgyT3B0aW9ucywgYXV0aG9yaXphdGlvbkRhdGE6IG9iamVjdCwgb2F1dGhEYXRhOiBvYmplY3QsIHVzZXJEYXRhOiBvYmplY3QpIHtcbiAgICBjb25zdCBib2R5ID0geyBhdXRob3JpemF0aW9uRGF0YSwgb2F1dGhEYXRhLCB1c2VyRGF0YSB9O1xuICAgIGNvbnN0IHsgYmFzZVVybCwgd2l0aENyZWRlbnRpYWxzIH0gPSB0aGlzLmNvbmZpZy5vcHRpb25zO1xuICAgIGNvbnN0IHsgdXJsLCBtZXRob2QgPSAnUE9TVCcgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgZXhjaGFuZ2VGb3JUb2tlblVybCA9IGJhc2VVcmwgPyBqb2luVXJsKGJhc2VVcmwsIHVybCkgOiB1cmw7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0PFQ+KG1ldGhvZCwgZXhjaGFuZ2VGb3JUb2tlblVybCwgeyBib2R5LCB3aXRoQ3JlZGVudGlhbHMgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEF1dGhvcml6YXRpb25EYXRhKG9wdGlvbnM6IElPYXV0aDJPcHRpb25zKSB7XG4gICAgY29uc3Qge1xuICAgICAgcmVzcG9uc2VUeXBlID0gJ2NvZGUnLFxuICAgICAgY2xpZW50SWQsXG4gICAgICByZWRpcmVjdFVyaSA9IGdldFdpbmRvd09yaWdpbigpIHx8ICcnLFxuICAgICAgc2NvcGVEZWxpbWl0ZXIgPSAnLCcsXG4gICAgICBzY29wZSxcbiAgICAgIHN0YXRlLFxuICAgICAgYWRkaXRpb25hbFVybFBhcmFtc1xuICAgIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHJlc29sdmVkU3RhdGUgPSB0eXBlb2Ygc3RhdGUgPT09ICdmdW5jdGlvbicgPyBzdGF0ZSgpIDogc3RhdGU7XG4gICAgcmV0dXJuIFtcbiAgICAgIFsncmVzcG9uc2VfdHlwZScsIHJlc3BvbnNlVHlwZV0sXG4gICAgICBbJ2NsaWVudF9pZCcsIGNsaWVudElkXSxcbiAgICAgIFsncmVkaXJlY3RfdXJpJywgcmVkaXJlY3RVcmldLFxuICAgICAgLi4uKHN0YXRlID8gW1snc3RhdGUnLCByZXNvbHZlZFN0YXRlXV0gOiBbXSksXG4gICAgICAuLi4oc2NvcGUgPyBbWydzY29wZScsIHNjb3BlLmpvaW4oc2NvcGVEZWxpbWl0ZXIpXV0gOiBbXSksXG4gICAgICAuLi4oYWRkaXRpb25hbFVybFBhcmFtc1xuICAgICAgICA/IE9iamVjdC5rZXlzKGFkZGl0aW9uYWxVcmxQYXJhbXMpLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpIHwgbnVsbCB8IHVuZGVmaW5lZCA9IChhZGRpdGlvbmFsVXJsUGFyYW1zIGFzIGFueSlba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBba2V5LCB2YWx1ZV07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICByZXR1cm4gW2tleSwgdmFsdWUoKV07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBba2V5LCAnJ107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gWycnLCAnJ107XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBbXSlcbiAgICBdXG4gICAgICAuZmlsdGVyKF8gPT4gISFfWzBdKVxuICAgICAgLnJlZHVjZSgoYWNjLCBuZXh0KSA9PiAoeyAuLi5hY2MsIFtuZXh0WzBdXTogbmV4dFsxXSB9KSwge30gYXMgeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk7XG4gIH1cbn1cbiJdfQ==
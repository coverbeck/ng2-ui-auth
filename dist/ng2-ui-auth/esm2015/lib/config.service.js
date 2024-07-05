/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { defaultProviders } from './config-providers';
import { StorageType } from './storage-type.enum';
/** @type {?} */
export const CONFIG_OPTIONS = new InjectionToken('config.options');
export class ConfigService {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.options = {
            withCredentials: false,
            tokenRoot: null,
            baseUrl: '/',
            loginUrl: '/auth/login',
            signupUrl: '/auth/signup',
            unlinkUrl: '/auth/unlink/',
            tokenName: 'token',
            tokenSeparator: '_',
            tokenPrefix: 'ng2-ui-auth',
            authHeader: 'Authorization',
            authToken: 'Bearer',
            storageType: StorageType.LOCAL_STORAGE,
            cordova: undefined,
            resolveToken: (/**
             * @param {?} response
             * @param {?} config
             * @return {?}
             */
            (response, config) => {
                /** @type {?} */
                const accessToken = response && (response.access_token || response.token || response.data);
                if (!accessToken) {
                    // console.warn('No token found');
                    return null;
                }
                if (typeof accessToken === 'string') {
                    return accessToken;
                }
                if (typeof accessToken !== 'object') {
                    // console.warn('No token found');
                    return null;
                }
                /** @type {?} */
                const tokenRootData = config.tokenRoot &&
                    config.tokenRoot.split('.').reduce((/**
                     * @param {?} o
                     * @param {?} x
                     * @return {?}
                     */
                    (o, x) => {
                        return o[x];
                    }), accessToken);
                /** @type {?} */
                const token = tokenRootData ? tokenRootData[config.tokenName] : accessToken[config.tokenName];
                if (token) {
                    return token;
                }
                // const tokenPath = this.tokenRoot ? this.tokenRoot + '.' + this.tokenName : this.tokenName;
                // console.warn('Expecting a token named "' + tokenPath);
                return null;
            }),
            providers: {}
        };
        this.options = Object.assign({}, this.options, options);
        this.mergeWithDefaultProviders();
    }
    /**
     * @param {?} providers
     * @return {?}
     */
    updateProviders(providers) {
        this.options.providers = Object.assign({}, (this.options.providers || {}), providers);
        this.mergeWithDefaultProviders();
    }
    /**
     * @return {?}
     */
    mergeWithDefaultProviders() {
        Object.keys(this.options.providers).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            if (key in defaultProviders) {
                this.options.providers[key] = Object.assign({}, defaultProviders[key], this.options.providers[key]);
            }
        }));
    }
}
ConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CONFIG_OPTIONS,] }] }
];
if (false) {
    /** @type {?} */
    ConfigService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItdWktYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFbEQsTUFBTSxPQUFPLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBTSxnQkFBZ0IsQ0FBQztBQUV2RSxNQUFNLE9BQU8sYUFBYTs7OztJQTZDeEIsWUFBb0MsT0FBOEI7UUE1QzNELFlBQU8sR0FBRztZQUNmLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsT0FBTyxFQUFFLEdBQUc7WUFDWixRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsY0FBYztZQUN6QixTQUFTLEVBQUUsZUFBZTtZQUMxQixTQUFTLEVBQUUsT0FBTztZQUNsQixjQUFjLEVBQUUsR0FBRztZQUNuQixXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLEVBQUUsZUFBZTtZQUMzQixTQUFTLEVBQUUsUUFBUTtZQUNuQixXQUFXLEVBQUUsV0FBVyxDQUFDLGFBQWE7WUFDdEMsT0FBTyxFQUFFLFNBQVM7WUFDbEIsWUFBWTs7Ozs7WUFBRSxDQUFDLFFBQWEsRUFBRSxNQUFzQixFQUFFLEVBQUU7O3NCQUNoRCxXQUFXLEdBQ2YsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hFLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ2hCLGtDQUFrQztvQkFDbEMsT0FBTyxJQUFJLENBQUM7aUJBQ2I7Z0JBQ0QsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQUU7b0JBQ25DLE9BQU8sV0FBVyxDQUFDO2lCQUNwQjtnQkFDRCxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTtvQkFDbkMsa0NBQWtDO29CQUNsQyxPQUFPLElBQUksQ0FBQztpQkFDYjs7c0JBQ0ssYUFBYSxHQUNqQixNQUFNLENBQUMsU0FBUztvQkFDaEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTTs7Ozs7b0JBQUMsQ0FBQyxDQUFNLEVBQUUsQ0FBTSxFQUFFLEVBQUU7d0JBQ3BELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNkLENBQUMsR0FBRSxXQUFXLENBQUM7O3NCQUNYLEtBQUssR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUM3RixJQUFJLEtBQUssRUFBRTtvQkFDVCxPQUFPLEtBQUssQ0FBQztpQkFDZDtnQkFDRCw2RkFBNkY7Z0JBQzdGLHlEQUF5RDtnQkFDekQsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUE7WUFDRCxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7UUFHQSxJQUFJLENBQUMsT0FBTyxxQkFDUCxJQUFJLENBQUMsT0FBTyxFQUNaLE9BQU8sQ0FDWCxDQUFDO1FBQ0YsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsU0FBcUI7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLHFCQUNqQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxFQUM5QixTQUFTLENBQ2IsQ0FBQztRQUNGLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCx5QkFBeUI7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTtZQUNoRCxJQUFJLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHFCQUN0QixnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsRUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQy9CLENBQUM7YUFDSDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdkVGLFVBQVU7Ozs7NENBOENJLE1BQU0sU0FBQyxjQUFjOzs7O0lBNUNsQyxnQ0EwQ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ29uZmlnT3B0aW9ucywgSVBhcnRpYWxDb25maWdPcHRpb25zLCBJUHJvdmlkZXJzIH0gZnJvbSAnLi9jb25maWctaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBkZWZhdWx0UHJvdmlkZXJzIH0gZnJvbSAnLi9jb25maWctcHJvdmlkZXJzJztcbmltcG9ydCB7IFN0b3JhZ2VUeXBlIH0gZnJvbSAnLi9zdG9yYWdlLXR5cGUuZW51bSc7XG5cbmV4cG9ydCBjb25zdCBDT05GSUdfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdjb25maWcub3B0aW9ucycpO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xuICBwdWJsaWMgb3B0aW9ucyA9IHtcbiAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgIHRva2VuUm9vdDogbnVsbCxcbiAgICBiYXNlVXJsOiAnLycsXG4gICAgbG9naW5Vcmw6ICcvYXV0aC9sb2dpbicsXG4gICAgc2lnbnVwVXJsOiAnL2F1dGgvc2lnbnVwJyxcbiAgICB1bmxpbmtVcmw6ICcvYXV0aC91bmxpbmsvJyxcbiAgICB0b2tlbk5hbWU6ICd0b2tlbicsXG4gICAgdG9rZW5TZXBhcmF0b3I6ICdfJyxcbiAgICB0b2tlblByZWZpeDogJ25nMi11aS1hdXRoJyxcbiAgICBhdXRoSGVhZGVyOiAnQXV0aG9yaXphdGlvbicsXG4gICAgYXV0aFRva2VuOiAnQmVhcmVyJyxcbiAgICBzdG9yYWdlVHlwZTogU3RvcmFnZVR5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICBjb3Jkb3ZhOiB1bmRlZmluZWQsXG4gICAgcmVzb2x2ZVRva2VuOiAocmVzcG9uc2U6IGFueSwgY29uZmlnOiBJQ29uZmlnT3B0aW9ucykgPT4ge1xuICAgICAgY29uc3QgYWNjZXNzVG9rZW46IHN0cmluZyB8IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBudWxsIHwgdW5kZWZpbmVkID1cbiAgICAgICAgcmVzcG9uc2UgJiYgKHJlc3BvbnNlLmFjY2Vzc190b2tlbiB8fCByZXNwb25zZS50b2tlbiB8fCByZXNwb25zZS5kYXRhKTtcbiAgICAgIGlmICghYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKCdObyB0b2tlbiBmb3VuZCcpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgYWNjZXNzVG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBhY2Nlc3NUb2tlbjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgYWNjZXNzVG9rZW4gIT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybignTm8gdG9rZW4gZm91bmQnKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCB0b2tlblJvb3REYXRhID1cbiAgICAgICAgY29uZmlnLnRva2VuUm9vdCAmJlxuICAgICAgICBjb25maWcudG9rZW5Sb290LnNwbGl0KCcuJykucmVkdWNlKChvOiBhbnksIHg6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBvW3hdO1xuICAgICAgICB9LCBhY2Nlc3NUb2tlbik7XG4gICAgICBjb25zdCB0b2tlbiA9IHRva2VuUm9vdERhdGEgPyB0b2tlblJvb3REYXRhW2NvbmZpZy50b2tlbk5hbWVdIDogYWNjZXNzVG9rZW5bY29uZmlnLnRva2VuTmFtZV07XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfVxuICAgICAgLy8gY29uc3QgdG9rZW5QYXRoID0gdGhpcy50b2tlblJvb3QgPyB0aGlzLnRva2VuUm9vdCArICcuJyArIHRoaXMudG9rZW5OYW1lIDogdGhpcy50b2tlbk5hbWU7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ0V4cGVjdGluZyBhIHRva2VuIG5hbWVkIFwiJyArIHRva2VuUGF0aCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHByb3ZpZGVyczoge31cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENPTkZJR19PUFRJT05TKSBvcHRpb25zOiBJUGFydGlhbENvbmZpZ09wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAuLi50aGlzLm9wdGlvbnMsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICB0aGlzLm1lcmdlV2l0aERlZmF1bHRQcm92aWRlcnMoKTtcbiAgfVxuXG4gIHVwZGF0ZVByb3ZpZGVycyhwcm92aWRlcnM6IElQcm92aWRlcnMpIHtcbiAgICB0aGlzLm9wdGlvbnMucHJvdmlkZXJzID0ge1xuICAgICAgLi4uKHRoaXMub3B0aW9ucy5wcm92aWRlcnMgfHwge30pLFxuICAgICAgLi4ucHJvdmlkZXJzXG4gICAgfTtcbiAgICB0aGlzLm1lcmdlV2l0aERlZmF1bHRQcm92aWRlcnMoKTtcbiAgfVxuXG4gIG1lcmdlV2l0aERlZmF1bHRQcm92aWRlcnMoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5vcHRpb25zLnByb3ZpZGVycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKGtleSBpbiBkZWZhdWx0UHJvdmlkZXJzKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5wcm92aWRlcnNba2V5XSA9IHtcbiAgICAgICAgICAuLi5kZWZhdWx0UHJvdmlkZXJzW2tleV0sXG4gICAgICAgICAgLi4udGhpcy5vcHRpb25zLnByb3ZpZGVyc1trZXldXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
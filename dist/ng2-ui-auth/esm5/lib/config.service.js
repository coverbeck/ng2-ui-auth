/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { defaultProviders } from './config-providers';
import { StorageType } from './storage-type.enum';
/** @type {?} */
export var CONFIG_OPTIONS = new InjectionToken('config.options');
var ConfigService = /** @class */ (function () {
    function ConfigService(options) {
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
            function (response, config) {
                /** @type {?} */
                var accessToken = response && (response.access_token || response.token || response.data);
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
                var tokenRootData = config.tokenRoot &&
                    config.tokenRoot.split('.').reduce((/**
                     * @param {?} o
                     * @param {?} x
                     * @return {?}
                     */
                    function (o, x) {
                        return o[x];
                    }), accessToken);
                /** @type {?} */
                var token = tokenRootData ? tokenRootData[config.tokenName] : accessToken[config.tokenName];
                if (token) {
                    return token;
                }
                // const tokenPath = this.tokenRoot ? this.tokenRoot + '.' + this.tokenName : this.tokenName;
                // console.warn('Expecting a token named "' + tokenPath);
                return null;
            }),
            providers: {}
        };
        this.options = tslib_1.__assign({}, this.options, options);
        this.mergeWithDefaultProviders();
    }
    /**
     * @param {?} providers
     * @return {?}
     */
    ConfigService.prototype.updateProviders = /**
     * @param {?} providers
     * @return {?}
     */
    function (providers) {
        this.options.providers = tslib_1.__assign({}, (this.options.providers || {}), providers);
        this.mergeWithDefaultProviders();
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.mergeWithDefaultProviders = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.options.providers).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (key in defaultProviders) {
                _this.options.providers[key] = tslib_1.__assign({}, defaultProviders[key], _this.options.providers[key]);
            }
        }));
    };
    ConfigService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CONFIG_OPTIONS,] }] }
    ]; };
    return ConfigService;
}());
export { ConfigService };
if (false) {
    /** @type {?} */
    ConfigService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItdWktYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWxELE1BQU0sS0FBTyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQU0sZ0JBQWdCLENBQUM7QUFDdkU7SUE4Q0UsdUJBQW9DLE9BQThCO1FBNUMzRCxZQUFPLEdBQUc7WUFDZixlQUFlLEVBQUUsS0FBSztZQUN0QixTQUFTLEVBQUUsSUFBSTtZQUNmLE9BQU8sRUFBRSxHQUFHO1lBQ1osUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLGNBQWM7WUFDekIsU0FBUyxFQUFFLGVBQWU7WUFDMUIsU0FBUyxFQUFFLE9BQU87WUFDbEIsY0FBYyxFQUFFLEdBQUc7WUFDbkIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsVUFBVSxFQUFFLGVBQWU7WUFDM0IsU0FBUyxFQUFFLFFBQVE7WUFDbkIsV0FBVyxFQUFFLFdBQVcsQ0FBQyxhQUFhO1lBQ3RDLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFlBQVk7Ozs7O1lBQUUsVUFBQyxRQUFhLEVBQUUsTUFBc0I7O29CQUM1QyxXQUFXLEdBQ2YsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hFLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ2hCLGtDQUFrQztvQkFDbEMsT0FBTyxJQUFJLENBQUM7aUJBQ2I7Z0JBQ0QsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQUU7b0JBQ25DLE9BQU8sV0FBVyxDQUFDO2lCQUNwQjtnQkFDRCxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTtvQkFDbkMsa0NBQWtDO29CQUNsQyxPQUFPLElBQUksQ0FBQztpQkFDYjs7b0JBQ0ssYUFBYSxHQUNqQixNQUFNLENBQUMsU0FBUztvQkFDaEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTTs7Ozs7b0JBQUMsVUFBQyxDQUFNLEVBQUUsQ0FBTTt3QkFDaEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2QsQ0FBQyxHQUFFLFdBQVcsQ0FBQzs7b0JBQ1gsS0FBSyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQzdGLElBQUksS0FBSyxFQUFFO29CQUNULE9BQU8sS0FBSyxDQUFDO2lCQUNkO2dCQUNELDZGQUE2RjtnQkFDN0YseURBQXlEO2dCQUN6RCxPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQTtZQUNELFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztRQUdBLElBQUksQ0FBQyxPQUFPLHdCQUNQLElBQUksQ0FBQyxPQUFPLEVBQ1osT0FBTyxDQUNYLENBQUM7UUFDRixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELHVDQUFlOzs7O0lBQWYsVUFBZ0IsU0FBcUI7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLHdCQUNqQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxFQUM5QixTQUFTLENBQ2IsQ0FBQztRQUNGLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxpREFBeUI7OztJQUF6QjtRQUFBLGlCQVNDO1FBUkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEdBQUc7WUFDN0MsSUFBSSxHQUFHLElBQUksZ0JBQWdCLEVBQUU7Z0JBQzNCLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFDdEIsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEVBQ3JCLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUMvQixDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXZFRixVQUFVOzs7O2dEQThDSSxNQUFNLFNBQUMsY0FBYzs7SUEwQnBDLG9CQUFDO0NBQUEsQUF4RUQsSUF3RUM7U0F2RVksYUFBYTs7O0lBQ3hCLGdDQTBDRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDb25maWdPcHRpb25zLCBJUGFydGlhbENvbmZpZ09wdGlvbnMsIElQcm92aWRlcnMgfSBmcm9tICcuL2NvbmZpZy1pbnRlcmZhY2VzJztcbmltcG9ydCB7IGRlZmF1bHRQcm92aWRlcnMgfSBmcm9tICcuL2NvbmZpZy1wcm92aWRlcnMnO1xuaW1wb3J0IHsgU3RvcmFnZVR5cGUgfSBmcm9tICcuL3N0b3JhZ2UtdHlwZS5lbnVtJztcblxuZXhwb3J0IGNvbnN0IENPTkZJR19PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oJ2NvbmZpZy5vcHRpb25zJyk7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XG4gIHB1YmxpYyBvcHRpb25zID0ge1xuICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgdG9rZW5Sb290OiBudWxsLFxuICAgIGJhc2VVcmw6ICcvJyxcbiAgICBsb2dpblVybDogJy9hdXRoL2xvZ2luJyxcbiAgICBzaWdudXBVcmw6ICcvYXV0aC9zaWdudXAnLFxuICAgIHVubGlua1VybDogJy9hdXRoL3VubGluay8nLFxuICAgIHRva2VuTmFtZTogJ3Rva2VuJyxcbiAgICB0b2tlblNlcGFyYXRvcjogJ18nLFxuICAgIHRva2VuUHJlZml4OiAnbmcyLXVpLWF1dGgnLFxuICAgIGF1dGhIZWFkZXI6ICdBdXRob3JpemF0aW9uJyxcbiAgICBhdXRoVG9rZW46ICdCZWFyZXInLFxuICAgIHN0b3JhZ2VUeXBlOiBTdG9yYWdlVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgIGNvcmRvdmE6IHVuZGVmaW5lZCxcbiAgICByZXNvbHZlVG9rZW46IChyZXNwb25zZTogYW55LCBjb25maWc6IElDb25maWdPcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbjogc3RyaW5nIHwgeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IG51bGwgfCB1bmRlZmluZWQgPVxuICAgICAgICByZXNwb25zZSAmJiAocmVzcG9uc2UuYWNjZXNzX3Rva2VuIHx8IHJlc3BvbnNlLnRva2VuIHx8IHJlc3BvbnNlLmRhdGEpO1xuICAgICAgaWYgKCFhY2Nlc3NUb2tlbikge1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ05vIHRva2VuIGZvdW5kJyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBhY2Nlc3NUb2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2VuO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBhY2Nlc3NUb2tlbiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKCdObyB0b2tlbiBmb3VuZCcpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRva2VuUm9vdERhdGEgPVxuICAgICAgICBjb25maWcudG9rZW5Sb290ICYmXG4gICAgICAgIGNvbmZpZy50b2tlblJvb3Quc3BsaXQoJy4nKS5yZWR1Y2UoKG86IGFueSwgeDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9beF07XG4gICAgICAgIH0sIGFjY2Vzc1Rva2VuKTtcbiAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5Sb290RGF0YSA/IHRva2VuUm9vdERhdGFbY29uZmlnLnRva2VuTmFtZV0gOiBhY2Nlc3NUb2tlbltjb25maWcudG9rZW5OYW1lXTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9XG4gICAgICAvLyBjb25zdCB0b2tlblBhdGggPSB0aGlzLnRva2VuUm9vdCA/IHRoaXMudG9rZW5Sb290ICsgJy4nICsgdGhpcy50b2tlbk5hbWUgOiB0aGlzLnRva2VuTmFtZTtcbiAgICAgIC8vIGNvbnNvbGUud2FybignRXhwZWN0aW5nIGEgdG9rZW4gbmFtZWQgXCInICsgdG9rZW5QYXRoKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgcHJvdmlkZXJzOiB7fVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ09ORklHX09QVElPTlMpIG9wdGlvbnM6IElQYXJ0aWFsQ29uZmlnT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIC4uLnRoaXMub3B0aW9ucyxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIHRoaXMubWVyZ2VXaXRoRGVmYXVsdFByb3ZpZGVycygpO1xuICB9XG5cbiAgdXBkYXRlUHJvdmlkZXJzKHByb3ZpZGVyczogSVByb3ZpZGVycykge1xuICAgIHRoaXMub3B0aW9ucy5wcm92aWRlcnMgPSB7XG4gICAgICAuLi4odGhpcy5vcHRpb25zLnByb3ZpZGVycyB8fCB7fSksXG4gICAgICAuLi5wcm92aWRlcnNcbiAgICB9O1xuICAgIHRoaXMubWVyZ2VXaXRoRGVmYXVsdFByb3ZpZGVycygpO1xuICB9XG5cbiAgbWVyZ2VXaXRoRGVmYXVsdFByb3ZpZGVycygpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMucHJvdmlkZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoa2V5IGluIGRlZmF1bHRQcm92aWRlcnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnByb3ZpZGVyc1trZXldID0ge1xuICAgICAgICAgIC4uLmRlZmF1bHRQcm92aWRlcnNba2V5XSxcbiAgICAgICAgICAuLi50aGlzLm9wdGlvbnMucHJvdmlkZXJzW2tleV1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19
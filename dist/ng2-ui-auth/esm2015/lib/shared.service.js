/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage-service';
import { ConfigService } from './config.service';
export class SharedService {
    /**
     * @param {?} storage
     * @param {?} config
     */
    constructor(storage, config) {
        this.storage = storage;
        this.config = config;
        this.tokenName = this.config.options.tokenPrefix
            ? [this.config.options.tokenPrefix, this.config.options.tokenName].join(this.config.options.tokenSeparator)
            : this.config.options.tokenName;
    }
    /**
     * @return {?}
     */
    getToken() {
        return this.storage.get(this.tokenName);
    }
    /**
     * @param {?=} token
     * @return {?}
     */
    getPayload(token = this.getToken()) {
        if (token && token.split('.').length === 3) {
            try {
                /** @type {?} */
                const base64Url = token.split('.')[1];
                /** @type {?} */
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                return JSON.parse(this.b64DecodeUnicode(base64));
            }
            catch (e) {
                return undefined;
            }
        }
    }
    /**
     * @param {?} response
     * @return {?}
     */
    setToken(response) {
        if (!response) {
            // console.warn('Can\'t set token without passing a value');
            return;
        }
        /** @type {?} */
        let token;
        if (typeof response === 'string') {
            token = response;
        }
        else {
            token = this.config.options.resolveToken(response, this.config.options);
        }
        if (token) {
            /** @type {?} */
            const expDate = this.getExpirationDate(token);
            this.storage.set(this.tokenName, token, expDate ? expDate.toUTCString() : '');
        }
    }
    /**
     * @return {?}
     */
    removeToken() {
        this.storage.remove(this.tokenName);
    }
    /**
     * @param {?=} token
     * @return {?}
     */
    isAuthenticated(token = this.getToken()) {
        // a token is present
        if (token) {
            // token with a valid JWT format XXX.YYY.ZZZ
            if (token.split('.').length === 3) {
                // could be a valid JWT or an access token with the same format
                try {
                    /** @type {?} */
                    const base64Url = token.split('.')[1];
                    /** @type {?} */
                    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                    /** @type {?} */
                    const exp = JSON.parse(this.b64DecodeUnicode(base64)).exp;
                    // jwt with an optional expiration claims
                    if (exp) {
                        /** @type {?} */
                        const isExpired = Math.round(new Date().getTime() / 1000) >= exp;
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
    }
    /**
     * @param {?=} token
     * @return {?}
     */
    getExpirationDate(token = this.getToken()) {
        /** @type {?} */
        const payload = this.getPayload(token);
        if (payload && payload.exp && Math.round(new Date().getTime() / 1000) < payload.exp) {
            /** @type {?} */
            const date = new Date(0);
            date.setUTCSeconds(payload.exp);
            return date;
        }
        return null;
    }
    /**
     * @return {?}
     */
    logout() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.storage.remove(this.tokenName);
            observer.next();
            observer.complete();
        }));
    }
    /**
     * @param {?} type
     * @return {?}
     */
    setStorageType(type) {
        return this.storage.updateStorageType(type);
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    b64DecodeUnicode(str) {
        return decodeURIComponent(Array.prototype.map.call(atob(str), (/**
         * @param {?} c
         * @return {?}
         */
        c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))).join(''));
    }
}
SharedService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SharedService.ctorParameters = () => [
    { type: StorageService },
    { type: ConfigService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItdWktYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHakQsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBS3hCLFlBQW9CLE9BQXVCLEVBQVUsTUFBcUI7UUFBdEQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBSm5FLGNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ2hELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO1lBQzNHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFFMkMsQ0FBQzs7OztJQUV2RSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFTSxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDdkMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lB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Q0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RJLENBQUM7OztZQXpHRixVQUFVOzs7O1lBSEYsY0FBYztZQUNkLGFBQWE7Ozs7SUFJcEIsa0NBRWtDOzs7OztJQUV0QixnQ0FBK0I7Ozs7O0lBQUUsK0JBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmFnZVR5cGUgfSBmcm9tICcuL3N0b3JhZ2UtdHlwZS5lbnVtJztcbmltcG9ydCB7IFN1YnNjcmliZXIsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2hhcmVkU2VydmljZSB7XG4gIHB1YmxpYyB0b2tlbk5hbWUgPSB0aGlzLmNvbmZpZy5vcHRpb25zLnRva2VuUHJlZml4XG4gICAgPyBbdGhpcy5jb25maWcub3B0aW9ucy50b2tlblByZWZpeCwgdGhpcy5jb25maWcub3B0aW9ucy50b2tlbk5hbWVdLmpvaW4odGhpcy5jb25maWcub3B0aW9ucy50b2tlblNlcGFyYXRvcilcbiAgICA6IHRoaXMuY29uZmlnLm9wdGlvbnMudG9rZW5OYW1lO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2UsIHByaXZhdGUgY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBnZXRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldCh0aGlzLnRva2VuTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGF5bG9hZCh0b2tlbiA9IHRoaXMuZ2V0VG9rZW4oKSkge1xuICAgIGlmICh0b2tlbiAmJiB0b2tlbi5zcGxpdCgnLicpLmxlbmd0aCA9PT0gMykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgY29uc3QgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuYjY0RGVjb2RlVW5pY29kZShiYXNlNjQpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0VG9rZW4ocmVzcG9uc2U6IHN0cmluZyB8IG9iamVjdCkge1xuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIC8vIGNvbnNvbGUud2FybignQ2FuXFwndCBzZXQgdG9rZW4gd2l0aG91dCBwYXNzaW5nIGEgdmFsdWUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdG9rZW46IHN0cmluZztcbiAgICBpZiAodHlwZW9mIHJlc3BvbnNlID09PSAnc3RyaW5nJykge1xuICAgICAgdG9rZW4gPSByZXNwb25zZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9rZW4gPSB0aGlzLmNvbmZpZy5vcHRpb25zLnJlc29sdmVUb2tlbihyZXNwb25zZSwgdGhpcy5jb25maWcub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBjb25zdCBleHBEYXRlID0gdGhpcy5nZXRFeHBpcmF0aW9uRGF0ZSh0b2tlbik7XG4gICAgICB0aGlzLnN0b3JhZ2Uuc2V0KHRoaXMudG9rZW5OYW1lLCB0b2tlbiwgZXhwRGF0ZSA/IGV4cERhdGUudG9VVENTdHJpbmcoKSA6ICcnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlVG9rZW4oKSB7XG4gICAgdGhpcy5zdG9yYWdlLnJlbW92ZSh0aGlzLnRva2VuTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkKHRva2VuID0gdGhpcy5nZXRUb2tlbigpKSB7XG4gICAgLy8gYSB0b2tlbiBpcyBwcmVzZW50XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAvLyB0b2tlbiB3aXRoIGEgdmFsaWQgSldUIGZvcm1hdCBYWFguWVlZLlpaWlxuICAgICAgaWYgKHRva2VuLnNwbGl0KCcuJykubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIC8vIGNvdWxkIGJlIGEgdmFsaWQgSldUIG9yIGFuIGFjY2VzcyB0b2tlbiB3aXRoIHRoZSBzYW1lIGZvcm1hdFxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XG4gICAgICAgICAgY29uc3QgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gICAgICAgICAgY29uc3QgZXhwID0gSlNPTi5wYXJzZSh0aGlzLmI2NERlY29kZVVuaWNvZGUoYmFzZTY0KSkuZXhwO1xuICAgICAgICAgIC8vIGp3dCB3aXRoIGFuIG9wdGlvbmFsIGV4cGlyYXRpb24gY2xhaW1zXG4gICAgICAgICAgaWYgKGV4cCkge1xuICAgICAgICAgICAgY29uc3QgaXNFeHBpcmVkID0gTWF0aC5yb3VuZChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApID49IGV4cDtcbiAgICAgICAgICAgIGlmIChpc0V4cGlyZWQpIHtcbiAgICAgICAgICAgICAgLy8gZmFpbDogRXhwaXJlZCB0b2tlblxuICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKHRoaXMudG9rZW5OYW1lKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gcGFzczogTm9uLWV4cGlyZWQgdG9rZW5cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gcGFzczogTm9uLUpXVCB0b2tlbiB0aGF0IGxvb2tzIGxpa2UgSldUXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHBhc3M6IEFsbCBvdGhlciB0b2tlbnNcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBsYWlsOiBObyB0b2tlbiBhdCBhbGxcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0RXhwaXJhdGlvbkRhdGUodG9rZW4gPSB0aGlzLmdldFRva2VuKCkpIHtcbiAgICBjb25zdCBwYXlsb2FkID0gdGhpcy5nZXRQYXlsb2FkKHRva2VuKTtcbiAgICBpZiAocGF5bG9hZCAmJiBwYXlsb2FkLmV4cCAmJiBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkgPCBwYXlsb2FkLmV4cCkge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgICAgZGF0ZS5zZXRVVENTZWNvbmRzKHBheWxvYWQuZXhwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmUodGhpcy50b2tlbk5hbWUpO1xuICAgICAgb2JzZXJ2ZXIubmV4dCgpO1xuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTdG9yYWdlVHlwZSh0eXBlOiBTdG9yYWdlVHlwZSkge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UudXBkYXRlU3RvcmFnZVR5cGUodHlwZSk7XG4gIH1cblxuICBwcml2YXRlIGI2NERlY29kZVVuaWNvZGUoc3RyKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYXRvYihzdHIpLCBjID0+ICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpKS5qb2luKCcnKSk7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Created by Ron on 17/12/2015.
 * @param {?} baseUrl
 * @param {?} url
 * @return {?}
 */
export function joinUrl(baseUrl, url) {
    if (/^(?:[a-z]+:)?\/\//i.test(url)) {
        return url;
    }
    /** @type {?} */
    var joined = [baseUrl, url].join('/');
    return joined
        .replace(/[\/]+/g, '/')
        .replace(/\/\?/g, '?')
        .replace(/\/\#/g, '#')
        .replace(/\:\//g, '://');
}
/**
 * @param {?} obj
 * @return {?}
 */
export function buildQueryString(obj) {
    return Object.keys(obj)
        .map((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return (!!obj[key] ? encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]) : key); }))
        .join('&');
}
/**
 * @param {?=} w
 * @return {?}
 */
export function getWindowOrigin(w) {
    if (!w && typeof window !== 'undefined') {
        w = window;
    }
    try {
        if (!w || !w.location) {
            return null;
        }
        if (!w.location.origin) {
            return w.location.protocol + "//" + w.location.hostname + (w.location.port ? ':' + w.location.port : '');
        }
        return w.location.origin;
    }
    catch (error) {
        return null;
        // ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
        // error instanceof DOMException && error.name === 'SecurityError'
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItdWktYXV0aC8iLCJzb3VyY2VzIjpbImxpYi91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsTUFBTSxVQUFVLE9BQU8sQ0FBQyxPQUFlLEVBQUUsR0FBVztJQUNsRCxJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNsQyxPQUFPLEdBQUcsQ0FBQztLQUNaOztRQUVLLE1BQU0sR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBRXZDLE9BQU8sTUFBTTtTQUNWLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO1NBQ3RCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO1NBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO1NBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDN0IsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsR0FBVztJQUMxQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3BCLEdBQUc7Ozs7SUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLFNBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFqRixDQUFpRixFQUFDO1NBQzdGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNmLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxDQUFVO0lBQ3hDLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ3ZDLENBQUMsR0FBRyxNQUFNLENBQUM7S0FDWjtJQUNELElBQUk7UUFDRixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3RCLE9BQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLFVBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFFLENBQUM7U0FDeEc7UUFDRCxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0tBQzFCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQztRQUNaLHdGQUF3RjtRQUN4RixrRUFBa0U7S0FDbkU7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbi8qKlxuICogQ3JlYXRlZCBieSBSb24gb24gMTcvMTIvMjAxNS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gam9pblVybChiYXNlVXJsOiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XG4gIGlmICgvXig/OlthLXpdKzopP1xcL1xcLy9pLnRlc3QodXJsKSkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICBjb25zdCBqb2luZWQgPSBbYmFzZVVybCwgdXJsXS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuIGpvaW5lZFxuICAgIC5yZXBsYWNlKC9bXFwvXSsvZywgJy8nKVxuICAgIC5yZXBsYWNlKC9cXC9cXD8vZywgJz8nKVxuICAgIC5yZXBsYWNlKC9cXC9cXCMvZywgJyMnKVxuICAgIC5yZXBsYWNlKC9cXDpcXC8vZywgJzovLycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRRdWVyeVN0cmluZyhvYmo6IG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKVxuICAgIC5tYXAoa2V5ID0+ICghIW9ialtrZXldID8gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrZXldKX1gIDoga2V5KSlcbiAgICAuam9pbignJicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2luZG93T3JpZ2luKHc/OiBXaW5kb3cpIHtcbiAgaWYgKCF3ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdyA9IHdpbmRvdztcbiAgfVxuICB0cnkge1xuICAgIGlmICghdyB8fCAhdy5sb2NhdGlvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICghdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgIHJldHVybiBgJHt3LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3LmxvY2F0aW9uLmhvc3RuYW1lfSR7dy5sb2NhdGlvbi5wb3J0ID8gJzonICsgdy5sb2NhdGlvbi5wb3J0IDogJyd9YDtcbiAgICB9XG4gICAgcmV0dXJuIHcubG9jYXRpb24ub3JpZ2luO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBudWxsO1xuICAgIC8vIGlnbm9yZSBET01FeGNlcHRpb246IEJsb2NrZWQgYSBmcmFtZSB3aXRoIG9yaWdpbiBmcm9tIGFjY2Vzc2luZyBhIGNyb3NzLW9yaWdpbiBmcmFtZS5cbiAgICAvLyBlcnJvciBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiBlcnJvci5uYW1lID09PSAnU2VjdXJpdHlFcnJvcidcbiAgfVxufVxuIl19
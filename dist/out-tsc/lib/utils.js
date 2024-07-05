"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Ron on 17/12/2015.
 */
function joinUrl(baseUrl, url) {
    if (/^(?:[a-z]+:)?\/\//i.test(url)) {
        return url;
    }
    var joined = [baseUrl, url].join('/');
    return joined
        .replace(/[\/]+/g, '/')
        .replace(/\/\?/g, '?')
        .replace(/\/\#/g, '#')
        .replace(/\:\//g, '://');
}
exports.joinUrl = joinUrl;
function buildQueryString(obj) {
    return Object.keys(obj)
        .map(function (key) { return (!!obj[key] ? encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]) : key); })
        .join('&');
}
exports.buildQueryString = buildQueryString;
function getWindowOrigin(w) {
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
exports.getWindowOrigin = getWindowOrigin;
//# sourceMappingURL=utils.js.map
import { Observable } from 'rxjs';
import { IOauth1Options, IOauth2Options } from './config-interfaces';
import * as i0 from "@angular/core";
export declare class PopupService {
    open(url: string, options: IOauth2Options | IOauth1Options, cordova?: boolean): Observable<Window>;
    waitForClose(popupWindow: Window, cordova?: boolean, redirectUri?: string): Observable<any>;
    private eventListener;
    private pollPopup;
    private prepareOptions;
    private stringifyOptions;
    private parseQueryString;
    private isCordovaApp;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PopupService>;
}

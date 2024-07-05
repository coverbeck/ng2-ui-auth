import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOauth2Options } from './config-interfaces';
import { ConfigService } from './config.service';
import { IOauthService } from './oauth-service';
import { PopupService } from './popup.service';
import * as i0 from "@angular/core";
export declare class Oauth2Service implements IOauthService {
    private http;
    private popup;
    private config;
    constructor(http: HttpClient, popup: PopupService, config: ConfigService);
    open<T extends object | string = any>(oauthOptions: IOauth2Options, userData: object): Observable<T>;
    private exchangeForToken;
    private getAuthorizationData;
    static ɵfac: i0.ɵɵFactoryDeclaration<Oauth2Service, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Oauth2Service>;
}

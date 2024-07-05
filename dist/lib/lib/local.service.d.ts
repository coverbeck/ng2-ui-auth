import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class LocalService {
    private http;
    private shared;
    private config;
    constructor(http: HttpClient, shared: SharedService, config: ConfigService);
    login<T extends string | object>(user: string | object, url?: string): Observable<T>;
    signup<T = any>(user: string | object, url?: string): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocalService>;
}

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { SharedService } from './shared.service';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class JwtInterceptor implements HttpInterceptor {
    private shared;
    private config;
    constructor(shared: SharedService, config: ConfigService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<JwtInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<JwtInterceptor>;
}

import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CONFIG_OPTIONS, ConfigService } from './config.service';
import { StorageService } from './storage-service';
import { BrowserStorageService } from './browser-storage.service';
import { SharedService } from './shared.service';
import { JwtInterceptor } from './interceptor.service';
import { OauthService } from './oauth.service';
import { HttpClient } from '@angular/common/http';
import { PopupService } from './popup.service';
import { LocalService } from './local.service';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
export class Ng2UiAuthModule {
    static forRoot(configOptions, defaultJwtInterceptor = true) {
        return {
            ngModule: Ng2UiAuthModule,
            providers: [
                ...(configOptions ? [{ provide: CONFIG_OPTIONS, useValue: configOptions }] : []),
                { provide: ConfigService, useClass: ConfigService, deps: [CONFIG_OPTIONS] },
                { provide: StorageService, useClass: BrowserStorageService, deps: [ConfigService] },
                { provide: SharedService, useClass: SharedService, deps: [StorageService, ConfigService] },
                { provide: LocalService, useClass: LocalService, deps: [HttpClient, SharedService, ConfigService] },
                { provide: PopupService, useClass: PopupService, deps: [ConfigService] },
                { provide: OauthService, useClass: OauthService, deps: [HttpClient, SharedService, ConfigService, PopupService] },
                { provide: AuthService, useClass: AuthService, deps: [SharedService, LocalService, OauthService] },
                ...(defaultJwtInterceptor
                    ? [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true, deps: [SharedService, ConfigService] }]
                    : [])
            ]
        };
    }
}
Ng2UiAuthModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Ng2UiAuthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
Ng2UiAuthModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: Ng2UiAuthModule, imports: [HttpClientModule] });
Ng2UiAuthModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Ng2UiAuthModule, imports: [HttpClientModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Ng2UiAuthModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [HttpClientModule],
                    declarations: [],
                    exports: []
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXVpLWF1dGgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXVpLWF1dGgvc3JjL2xpYi9uZzItdWktYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQU83QyxNQUFNLE9BQU8sZUFBZTtJQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQXFDLEVBQUUscUJBQXFCLEdBQUcsSUFBSTtRQUNoRixPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNULEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ2hGLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUMzRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUNuRixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLEVBQUU7Z0JBQzFGLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDLEVBQUU7Z0JBQ25HLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUN4RSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUMsRUFBRTtnQkFDakgsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsRUFBRTtnQkFDbEcsR0FBRyxDQUFDLHFCQUFxQjtvQkFDdkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDO29CQUMvRyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ1I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7NkdBbEJVLGVBQWU7OEdBQWYsZUFBZSxZQUpoQixnQkFBZ0I7OEdBSWYsZUFBZSxZQUpoQixnQkFBZ0I7NEZBSWYsZUFBZTtrQkFMM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDM0IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSUNvbmZpZ09wdGlvbnMsIElQYXJ0aWFsQ29uZmlnT3B0aW9ucyB9IGZyb20gJy4vY29uZmlnLWludGVyZmFjZXMnO1xuaW1wb3J0IHsgQ09ORklHX09QVElPTlMsIENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHsgQnJvd3NlclN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9icm93c2VyLXN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQuc2VydmljZSc7XG5pbXBvcnQgeyBKd3RJbnRlcmNlcHRvciB9IGZyb20gJy4vaW50ZXJjZXB0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBPYXV0aFNlcnZpY2UgfSBmcm9tICcuL29hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFBvcHVwU2VydmljZSB9IGZyb20gJy4vcG9wdXAuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtIdHRwQ2xpZW50TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgTmcyVWlBdXRoTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnT3B0aW9ucz86IElQYXJ0aWFsQ29uZmlnT3B0aW9ucywgZGVmYXVsdEp3dEludGVyY2VwdG9yID0gdHJ1ZSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmcyVWlBdXRoTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZzJVaUF1dGhNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uKGNvbmZpZ09wdGlvbnMgPyBbeyBwcm92aWRlOiBDT05GSUdfT1BUSU9OUywgdXNlVmFsdWU6IGNvbmZpZ09wdGlvbnMgfV0gOiBbXSksXG4gICAgICAgIHsgcHJvdmlkZTogQ29uZmlnU2VydmljZSwgdXNlQ2xhc3M6IENvbmZpZ1NlcnZpY2UsIGRlcHM6IFtDT05GSUdfT1BUSU9OU10gfSxcbiAgICAgICAgeyBwcm92aWRlOiBTdG9yYWdlU2VydmljZSwgdXNlQ2xhc3M6IEJyb3dzZXJTdG9yYWdlU2VydmljZSwgZGVwczogW0NvbmZpZ1NlcnZpY2VdIH0sXG4gICAgICAgIHsgcHJvdmlkZTogU2hhcmVkU2VydmljZSwgdXNlQ2xhc3M6IFNoYXJlZFNlcnZpY2UsIGRlcHM6IFtTdG9yYWdlU2VydmljZSwgQ29uZmlnU2VydmljZV0gfSxcbiAgICAgICAgeyBwcm92aWRlOiBMb2NhbFNlcnZpY2UsIHVzZUNsYXNzOiBMb2NhbFNlcnZpY2UsIGRlcHM6IFtIdHRwQ2xpZW50LCBTaGFyZWRTZXJ2aWNlLCBDb25maWdTZXJ2aWNlXSB9LFxuICAgICAgICB7IHByb3ZpZGU6IFBvcHVwU2VydmljZSwgdXNlQ2xhc3M6IFBvcHVwU2VydmljZSwgZGVwczogW0NvbmZpZ1NlcnZpY2VdIH0sXG4gICAgICAgIHsgcHJvdmlkZTogT2F1dGhTZXJ2aWNlLCB1c2VDbGFzczogT2F1dGhTZXJ2aWNlLCBkZXBzOiBbSHR0cENsaWVudCwgU2hhcmVkU2VydmljZSwgQ29uZmlnU2VydmljZSwgUG9wdXBTZXJ2aWNlXSB9LFxuICAgICAgICB7IHByb3ZpZGU6IEF1dGhTZXJ2aWNlLCB1c2VDbGFzczogQXV0aFNlcnZpY2UsIGRlcHM6IFtTaGFyZWRTZXJ2aWNlLCBMb2NhbFNlcnZpY2UsIE9hdXRoU2VydmljZV0gfSxcbiAgICAgICAgLi4uKGRlZmF1bHRKd3RJbnRlcmNlcHRvclxuICAgICAgICAgID8gW3sgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBKd3RJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUsIGRlcHM6IFtTaGFyZWRTZXJ2aWNlLCBDb25maWdTZXJ2aWNlXSB9XVxuICAgICAgICAgIDogW10pXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19
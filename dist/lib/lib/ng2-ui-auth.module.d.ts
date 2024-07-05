import { ModuleWithProviders } from '@angular/core';
import { IPartialConfigOptions } from './config-interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export declare class Ng2UiAuthModule {
    static forRoot(configOptions?: IPartialConfigOptions, defaultJwtInterceptor?: boolean): ModuleWithProviders<Ng2UiAuthModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<Ng2UiAuthModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<Ng2UiAuthModule, never, [typeof i1.HttpClientModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<Ng2UiAuthModule>;
}

import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./shared.service";
import * as i2 from "./config.service";
export class JwtInterceptor {
    constructor(shared, config) {
        this.shared = shared;
        this.config = config;
    }
    intercept(req, next) {
        const { authHeader, authToken } = this.config.options;
        const token = this.shared.getToken();
        const isAuthenticated = this.shared.isAuthenticated();
        const newReq = isAuthenticated && !req.headers.has(authHeader) ? req.clone({ setHeaders: { [authHeader]: `${authToken} ${token}` } }) : req;
        return next.handle(newReq);
    }
}
JwtInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: JwtInterceptor, deps: [{ token: i1.SharedService }, { token: i2.ConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
JwtInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: JwtInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: JwtInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.SharedService }, { type: i2.ConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi11aS1hdXRoL3NyYy9saWIvaW50ZXJjZXB0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTzNDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQW9CLE1BQXFCLEVBQVUsTUFBcUI7UUFBcEQsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWU7SUFBRyxDQUFDO0lBRTVFLFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBQ2hELE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDdEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RELE1BQU0sTUFBTSxHQUNWLGVBQWUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLFNBQVMsSUFBSSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQy9ILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOzs0R0FWVSxjQUFjO2dIQUFkLGNBQWM7NEZBQWQsY0FBYztrQkFEMUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQuc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKd3RJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2hhcmVkOiBTaGFyZWRTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSkge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCB7IGF1dGhIZWFkZXIsIGF1dGhUb2tlbiB9ID0gdGhpcy5jb25maWcub3B0aW9ucztcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuc2hhcmVkLmdldFRva2VuKCk7XG4gICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gdGhpcy5zaGFyZWQuaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgY29uc3QgbmV3UmVxID1cbiAgICAgIGlzQXV0aGVudGljYXRlZCAmJiAhcmVxLmhlYWRlcnMuaGFzKGF1dGhIZWFkZXIpID8gcmVxLmNsb25lKHsgc2V0SGVhZGVyczogeyBbYXV0aEhlYWRlcl06IGAke2F1dGhUb2tlbn0gJHt0b2tlbn1gIH0gfSkgOiByZXE7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKG5ld1JlcSk7XG4gIH1cbn1cbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var interceptor_service_1 = require("./interceptor.service");
describe('InterceptorService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [interceptor_service_1.InterceptorService]
        });
    });
    it('should be created', testing_1.inject([interceptor_service_1.InterceptorService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=interceptor.service.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var oauth1_service_1 = require("./oauth1.service");
describe('Oauth1Service', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [oauth1_service_1.Oauth1Service]
        });
    });
    it('should be created', testing_1.inject([oauth1_service_1.Oauth1Service], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=oauth1.service.spec.js.map
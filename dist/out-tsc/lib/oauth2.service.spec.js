"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var oauth2_service_1 = require("./oauth2.service");
describe('Oauth2Service', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [oauth2_service_1.Oauth2Service]
        });
    });
    it('should be created', testing_1.inject([oauth2_service_1.Oauth2Service], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=oauth2.service.spec.js.map
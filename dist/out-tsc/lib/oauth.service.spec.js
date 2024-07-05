"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var oauth_service_1 = require("./oauth.service");
describe('OauthService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [oauth_service_1.OauthService]
        });
    });
    it('should be created', testing_1.inject([oauth_service_1.OauthService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=oauth.service.spec.js.map
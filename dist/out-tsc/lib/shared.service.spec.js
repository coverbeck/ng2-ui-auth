"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var shared_service_1 = require("./shared.service");
describe('SharedService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [shared_service_1.SharedService]
        });
    });
    it('should be created', testing_1.inject([shared_service_1.SharedService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=shared.service.spec.js.map
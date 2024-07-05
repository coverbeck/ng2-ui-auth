"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var local_service_1 = require("./local.service");
describe('LocalService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [local_service_1.LocalService]
        });
    });
    it('should be created', testing_1.inject([local_service_1.LocalService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=local.service.spec.js.map
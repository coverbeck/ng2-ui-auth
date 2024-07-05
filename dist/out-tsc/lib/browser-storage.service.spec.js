"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var browser_storage_service_1 = require("./browser-storage.service");
describe('BrowserStorageService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [browser_storage_service_1.BrowserStorageService]
        });
    });
    it('should be created', testing_1.inject([browser_storage_service_1.BrowserStorageService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=browser-storage.service.spec.js.map
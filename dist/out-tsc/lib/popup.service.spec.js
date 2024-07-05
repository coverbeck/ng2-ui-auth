"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var popup_service_1 = require("./popup.service");
describe('PopupService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [popup_service_1.PopupService]
        });
    });
    it('should be created', testing_1.inject([popup_service_1.PopupService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=popup.service.spec.js.map
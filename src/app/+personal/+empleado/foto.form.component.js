"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var ng2_bootstrap_1 = require("ng2-bootstrap");
var adjunto_1 = require("./adjunto");
var environment_1 = require("../../../environments/environment");
var FotoFormComponent = (function () {
    function FotoFormComponent() {
        this.localhost = environment_1.environment.backend;
        this.port = environment_1.environment.port;
        this.uploadSaveUrl = 'http://' + this.localhost + ':' + this.port + '/empleado/cargarArchivoDocumento';
        this.uploadRemoveUrl = 'http://' + this.localhost + ':' + this.port + '/empleado/eliminarArchivoDocumento';
        this.uploadValidation = { allowedExtensions: [".jpg", ".png"] };
        this.cancel = new core_1.EventEmitter();
        this.save = new core_1.EventEmitter();
        this.active = false;
        this.titulo = "";
        this.editForm = new forms_1.FormGroup({
            'Imagen': new forms_1.FormControl()
        });
    }
    Object.defineProperty(FotoFormComponent.prototype, "model", {
        set: function (dto) {
            this.file = dto;
            dto === undefined ? this.lgModal.hide() : this.lgModal.show();
        },
        enumerable: true,
        configurable: true
    });
    FotoFormComponent.prototype.onSuccessUpload = function (event) {
        debugger;
        this.file = event.response.json();
    };
    FotoFormComponent.prototype.onSave = function (e) {
        e.preventDefault();
        debugger;
        this.save.emit(this.file);
        this.active = false;
        this.lgModal.hide();
    };
    FotoFormComponent.prototype.onCancel = function (e) {
        e.preventDefault();
        this.lgModal.hide();
        this.cancel.emit(undefined);
    };
    FotoFormComponent.prototype.onClose = function () {
        this.lgModal.hide();
        this.cancel.emit(undefined);
    };
    FotoFormComponent.prototype.subirImagen = function () {
        this.model = new adjunto_1.Adjunto();
        this.lgModal.show();
    };
    FotoFormComponent.prototype.showChildModal = function () {
        this.lgModal.show();
    };
    FotoFormComponent.prototype.hideChildModal = function () {
        this.lgModal.hide();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', adjunto_1.Adjunto), 
        __metadata('design:paramtypes', [adjunto_1.Adjunto])
    ], FotoFormComponent.prototype, "model", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FotoFormComponent.prototype, "cancel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FotoFormComponent.prototype, "save", void 0);
    __decorate([
        core_1.ViewChild('lgModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], FotoFormComponent.prototype, "lgModal", void 0);
    FotoFormComponent = __decorate([
        core_1.Component({
            selector: 'foto-form',
            template: "\n    <div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n       aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" (click)=\"onClose()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h4 class=\"modal-title\">Foto Empleado</h4>\n        </div>\n        <div class=\"modal-body\">\n        \n          <form [formGroup]=\"editForm\" class=\"smart-form\">\n            \n            <div class=\"row\">\n            \n                 \n                 <section class=\"col col-md-12\">\n                  <label for=\"Imagen\">Imagen</label>\n                  <label class=\"input\"> \n                        <kendo-upload [saveUrl]=\"uploadSaveUrl\" [removeUrl]=\"uploadRemoveUrl\" [multiple]=\"false\" [validation]=\"uploadValidation\" (success)=\"onSuccessUpload($event)\"></kendo-upload>\n                  </label>\n                 </section>\n            \n            </div>\n          </form>\n          \n          </div>\n               \n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancel($event)\"> Cancelar\n            </button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSave($event)\"> Agregar\n            </button>\n          </div>\n          \n          </div>\n    </div>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], FotoFormComponent);
    return FotoFormComponent;
}());
exports.FotoFormComponent = FotoFormComponent;
//# sourceMappingURL=foto.form.component.js.map
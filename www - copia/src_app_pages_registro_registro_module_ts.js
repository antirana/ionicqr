"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_registro_registro_module_ts"],{

/***/ 6138:
/*!***********************************************************!*\
  !*** ./src/app/pages/registro/registro-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 1044);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 8712:
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 6138);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 1044);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 1044:
/*!*************************************************!*\
  !*** ./src/app/pages/registro/registro.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var C_Users_x_Desktop_starwar_proyecto_starwars_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.html?ngResource */ 4144);
/* harmony import */ var _login_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);









let RegistroPage = class RegistroPage {
  constructor(formBuilder, loadingCtrl, alertCtrl, authService, router) {
    this.formBuilder = formBuilder;
    this.loadingCtrl = loadingCtrl;
    this.alertCtrl = alertCtrl;
    this.authService = authService;
    this.router = router;
  }

  ngOnInit() {
    this.createForm();
  }

  get email() {
    return this.formularioRegistro?.get('email');
  }

  get password() {
    return this.formularioRegistro?.get('password');
  }

  createForm() {
    this.formularioRegistro = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]]
    });
  }

  register() {
    var _this = this;

    return (0,C_Users_x_Desktop_starwar_proyecto_starwars_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create();
      yield loading.present();
      const user = yield _this.authService.register(_this.formularioRegistro.value.email, _this.formularioRegistro.value.password);
      yield loading.dismiss();

      if (user) {
        _this.router.navigateByUrl('/login');
      } else {
        _this.alertPresent('Registro fallido', 'Revise bien los datos ingresado e inténtelo nuevamente...');
      }
    })();
  }

  alertPresent(header, message) {
    var _this2 = this;

    return (0,C_Users_x_Desktop_starwar_proyecto_starwars_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertCtrl.create({
        header: header,
        message: message,
        buttons: ['OK']
      });
      alert.present();
    })();
  }

};

RegistroPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];

RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-registro',
  template: _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegistroPage);


/***/ }),

/***/ 4144:
/*!**************************************************************!*\
  !*** ./src/app/pages/registro/registro.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content style=\" border-left: 7px solid #ff987b\">\n  <div class=\"header\">\n    <h3>Bienvenido!</h3>\n    <h1>Registro</h1>\n  </div>\n\n  <div class=\"form\">\n    <form  (ngSubmit)=\"register()\" [formGroup]=\"formularioRegistro\" >\n      <ion-item class=\"ion-margin-bottom\">\n        <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n        <ion-note slot=\"error\" *ngIf=\"(email?.dirty || email?.touched) && email?.errors\">Formato Email no válido</ion-note>\n      </ion-item>\n  \n      <ion-item class=\"ion-margin-bottom\">\n        <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n        <ion-note slot=\"error\" *ngIf=\"(password?.dirty || password?.touched) && password?.errors\">El password debe contener al menos 6 caracteres</ion-note>\n      </ion-item>\n    </form>\n  </div>\n\n  <div class=\"registro\" >\n    <ion-button (click)=\"register()\" style=\"--background: #ff987b; margin: 0 auto;\">Registro</ion-button>\n  </div>\n\n  <div class=\"footer registro-footer\">\n    <h3 routerLink=\"/login\">¿Tienes cuenta ya? <span>Inicia Aqui</span></h3>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro_module_ts.js.map
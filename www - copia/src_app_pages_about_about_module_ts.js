"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_about_about_module_ts"],{

/***/ 3423:
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 388);




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 8114:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 3423);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page */ 388);







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage]
    })
], AboutPageModule);



/***/ }),

/***/ 388:
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _about_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page.html?ngResource */ 5874);
/* harmony import */ var _about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss?ngResource */ 4229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AboutPage = class AboutPage {
    constructor() {
        this.about = [
            {
                id: '2',
                nombre: 'Nicolas Ruiz',
                descripcion: 'Tengo 19 años interesado en el   desarrollo de aplicaciones movil y web',
                imagen: 'assets/about_1.jpeg'
            },
            {
                id: '3',
                nombre: 'Cristhian Barreno',
                descripcion: 'Tengo 22 años interesado en   la ciberseguridad',
                imagen: 'assets/about_2.jpeg'
            }
        ];
    }
    ngOnInit() {
    }
};
AboutPage.ctorParameters = () => [];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _about_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutPage);



/***/ }),

/***/ 4229:
/*!********************************************************!*\
  !*** ./src/app/pages/about/about.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".logoabout {\n  height: 100px;\n}\n\n.titulo {\n  font-size: 1.3rem;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBSUE7RUFDSSwrQkFBQTtBQURKIiwiZmlsZSI6ImFib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvYWJvdXR7XG4gICAgaGVpZ2h0OiAxMDBweDtcblxuXG59XG4udGl0dWxve1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfSJdfQ== */";

/***/ }),

/***/ 5874:
/*!********************************************************!*\
  !*** ./src/app/pages/about/about.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>about</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <h1 class=\"ion-text-center\">Sobre nosotros</h1>\n <br>\n\n    <ion-img class=\"logoabout\" tyle=\"margin: 0 auto;\" src=\"../assets/logo.png\"></ion-img>\n\n  <h3 class=\"ion-text-center\">Equipo</h3>\n    <ion-list >\n    <ion-slides >\n\n      <ion-slide *ngFor=\"let nosotros of about\">\n\n          <ion-card>\n            <div >\n              <ion-img [src]=\"nosotros.imagen\" class=\"foto\"></ion-img>\n            <ion-card-header>\n              <ion-card-subtitle>Ingeniera en Informatica</ion-card-subtitle>\n              <ion-card-title class=\"titulo\">{{nosotros.nombre}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              {{nosotros.descripcion}}\n            </ion-card-content>\n            </div>\n          </ion-card>\n\n      </ion-slide>\n\n    </ion-slides>\n  </ion-list>\n\n  <ion-footer class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-title>Contacto</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n\n      <ion-text>Si te quieres comunicar con nosotros, puedes escribirnos directamente a contacto@duocuc.cl</ion-text>\n    </ion-toolbar>\n  </ion-footer>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-text>RegistrAPP | Version 1.0</ion-text>\n    </ion-toolbar>\n  </ion-footer> \n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about_about_module_ts.js.map
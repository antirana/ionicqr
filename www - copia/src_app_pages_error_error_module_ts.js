"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_error_error_module_ts"],{

/***/ 4727:
/*!*****************************************************!*\
  !*** ./src/app/pages/error/error-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPageRoutingModule": () => (/* binding */ ErrorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _error_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.page */ 2100);




const routes = [
    {
        path: '',
        component: _error_page__WEBPACK_IMPORTED_MODULE_0__.ErrorPage
    }
];
let ErrorPageRoutingModule = class ErrorPageRoutingModule {
};
ErrorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ErrorPageRoutingModule);



/***/ }),

/***/ 5204:
/*!*********************************************!*\
  !*** ./src/app/pages/error/error.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPageModule": () => (/* binding */ ErrorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _error_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-routing.module */ 4727);
/* harmony import */ var _error_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.page */ 2100);







let ErrorPageModule = class ErrorPageModule {
};
ErrorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _error_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErrorPageRoutingModule
        ],
        declarations: [_error_page__WEBPACK_IMPORTED_MODULE_1__.ErrorPage]
    })
], ErrorPageModule);



/***/ }),

/***/ 2100:
/*!*******************************************!*\
  !*** ./src/app/pages/error/error.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPage": () => (/* binding */ ErrorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _error_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.page.html?ngResource */ 9044);
/* harmony import */ var _error_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.page.scss?ngResource */ 688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ErrorPage = class ErrorPage {
    constructor() { }
    ngOnInit() {
    }
};
ErrorPage.ctorParameters = () => [];
ErrorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-error',
        template: _error_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_error_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ErrorPage);



/***/ }),

/***/ 688:
/*!********************************************************!*\
  !*** ./src/app/pages/error/error.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#fff!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FBQ0oiLCJmaWxlIjoiZXJyb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiNmZmYhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 9044:
/*!********************************************************!*\
  !*** ./src/app/pages/error/error.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Error</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-img src=\"../../../assets/img/error.svg\"></ion-img>\n\n  <ion-button expand=\"block\" class=\"ion-margin-top\" routerLink=\"/login\">\n    <ion-icon name=\"home\" slot=\"s\"></ion-icon>Volver\n  </ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_error_error_module_ts.js.map
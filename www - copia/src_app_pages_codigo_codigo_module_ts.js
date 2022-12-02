"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_codigo_codigo_module_ts"],{

/***/ 8398:
/*!*******************************************************!*\
  !*** ./src/app/pages/codigo/codigo-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigoPageRoutingModule": () => (/* binding */ CodigoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _codigo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigo.page */ 1584);




const routes = [
    {
        path: '',
        component: _codigo_page__WEBPACK_IMPORTED_MODULE_0__.CodigoPage
    }
];
let CodigoPageRoutingModule = class CodigoPageRoutingModule {
};
CodigoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CodigoPageRoutingModule);



/***/ }),

/***/ 8307:
/*!***********************************************!*\
  !*** ./src/app/pages/codigo/codigo.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigoPageModule": () => (/* binding */ CodigoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _codigo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigo-routing.module */ 8398);
/* harmony import */ var _codigo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codigo.page */ 1584);







let CodigoPageModule = class CodigoPageModule {
};
CodigoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _codigo_routing_module__WEBPACK_IMPORTED_MODULE_0__.CodigoPageRoutingModule
        ],
        declarations: [_codigo_page__WEBPACK_IMPORTED_MODULE_1__.CodigoPage]
    })
], CodigoPageModule);



/***/ }),

/***/ 1584:
/*!*********************************************!*\
  !*** ./src/app/pages/codigo/codigo.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigoPage": () => (/* binding */ CodigoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _codigo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigo.page.html?ngResource */ 6441);
/* harmony import */ var _codigo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codigo.page.scss?ngResource */ 208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let CodigoPage = class CodigoPage {
    constructor() { }
    ngOnInit() {
    }
};
CodigoPage.ctorParameters = () => [];
CodigoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-codigo',
        template: _codigo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_codigo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CodigoPage);



/***/ }),

/***/ 208:
/*!**********************************************************!*\
  !*** ./src/app/pages/codigo/codigo.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGlnby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKIiwiZmlsZSI6ImNvZGlnby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH0gIl19 */";

/***/ }),

/***/ 6441:
/*!**********************************************************!*\
  !*** ./src/app/pages/codigo/codigo.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Codigo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1>hola</h1>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_codigo_codigo_module_ts.js.map
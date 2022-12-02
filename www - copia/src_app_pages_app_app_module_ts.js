"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_app_app_module_ts"],{

/***/ 9454:
/*!*************************************************!*\
  !*** ./src/app/pages/app/app-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppPageRoutingModule": () => (/* binding */ AppPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.page */ 7026);




const routes = [
    {
        path: '',
        component: _app_page__WEBPACK_IMPORTED_MODULE_0__.AppPage
    }
];
let AppPageRoutingModule = class AppPageRoutingModule {
};
AppPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppPageRoutingModule);



/***/ }),

/***/ 4560:
/*!*****************************************!*\
  !*** ./src/app/pages/app/app.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppPageModule": () => (/* binding */ AppPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 9454);
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.page */ 7026);







let AppPageModule = class AppPageModule {
};
AppPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRoutingModule
        ],
        declarations: [_app_page__WEBPACK_IMPORTED_MODULE_1__.AppPage]
    })
], AppPageModule);



/***/ }),

/***/ 7026:
/*!***************************************!*\
  !*** ./src/app/pages/app/app.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppPage": () => (/* binding */ AppPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.page.html?ngResource */ 3116);
/* harmony import */ var _app_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.page.scss?ngResource */ 9724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppPage = class AppPage {
    constructor() {
        this.appPages = [
            { title: 'Home', url: '/home', icon: 'home' },
            { title: 'About', url: '/about', icon: 'information-circle' },
            { title: 'QR', url: '/codigo', icon: 'qr-code' },
            { title: 'Clima', url: '/clima', icon: 'sunny' },
            { title: 'Cuenta', url: '/folder/Cuenta', icon: 'person-circle' },
            { title: 'Salir', url: '/login', icon: 'log-out' },
        ];
    }
    ngOnInit() {
    }
};
AppPage.ctorParameters = () => [];
AppPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-app',
        template: _app_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppPage);



/***/ }),

/***/ 9724:
/*!****************************************************!*\
  !*** ./src/app/pages/app/app.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 3116:
/*!****************************************************!*\
  !*** ./src/app/pages/app/app.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-split-pane contentId=\"main-content\" (click)=\"getUserProfile()\">\n    <ion-menu  contentId=\"main-content\" type=\"overlay\"  >\n      <ion-content  >\n        <ion-list id=\"inbox-list\">\n          <ion-list-header>Inbox</ion-list-header>\n          <ion-note >{{email}}</ion-note>\n\n          <ion-menu-toggle  auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n      \n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_app_app_module_ts.js.map
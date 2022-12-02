"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_monedas_monedas_module_ts"],{

/***/ 2398:
/*!*********************************************************!*\
  !*** ./src/app/pages/monedas/monedas-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonedasPageRoutingModule": () => (/* binding */ MonedasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _monedas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monedas.page */ 4753);




const routes = [
    {
        path: '',
        component: _monedas_page__WEBPACK_IMPORTED_MODULE_0__.MonedasPage
    }
];
let MonedasPageRoutingModule = class MonedasPageRoutingModule {
};
MonedasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MonedasPageRoutingModule);



/***/ }),

/***/ 8830:
/*!*************************************************!*\
  !*** ./src/app/pages/monedas/monedas.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonedasPageModule": () => (/* binding */ MonedasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _monedas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monedas-routing.module */ 2398);
/* harmony import */ var _monedas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monedas.page */ 4753);







let MonedasPageModule = class MonedasPageModule {
};
MonedasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _monedas_routing_module__WEBPACK_IMPORTED_MODULE_0__.MonedasPageRoutingModule
        ],
        declarations: [_monedas_page__WEBPACK_IMPORTED_MODULE_1__.MonedasPage]
    })
], MonedasPageModule);



/***/ }),

/***/ 4753:
/*!***********************************************!*\
  !*** ./src/app/pages/monedas/monedas.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonedasPage": () => (/* binding */ MonedasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _monedas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monedas.page.html?ngResource */ 3378);
/* harmony import */ var _monedas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monedas.page.scss?ngResource */ 3001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_servicemonedas_servicemonedas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/servicemonedas/servicemonedas.service */ 4749);





let MonedasPage = class MonedasPage {
    constructor(coinAPi) {
        this.coinAPi = coinAPi;
        this.monedas = [];
    }
    ngOnInit() {
        this.getCoinData();
    }
    getCoinData() {
        this.coinAPi.getCoinData().subscribe((response) => {
            this.res = response;
            console.log(this.res);
        });
    }
};
MonedasPage.ctorParameters = () => [
    { type: src_app_services_servicemonedas_servicemonedas_service__WEBPACK_IMPORTED_MODULE_2__.ServicemonedasService }
];
MonedasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-monedas',
        template: _monedas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_monedas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MonedasPage);



/***/ }),

/***/ 4749:
/*!*******************************************************************!*\
  !*** ./src/app/services/servicemonedas/servicemonedas.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicemonedasService": () => (/* binding */ ServicemonedasService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



let ServicemonedasService = class ServicemonedasService {
    constructor(http) {
        this.http = http;
    }
    getCoinData() {
        let queryString = `https://mindicador.cl/api`;
        return this.http.get(queryString);
    }
};
ServicemonedasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ServicemonedasService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ServicemonedasService);



/***/ }),

/***/ 3001:
/*!************************************************************!*\
  !*** ./src/app/pages/monedas/monedas.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:linear-gradient(to right, #b91d73, #f95 );\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.content_div {\n  background: white;\n  width: 100%;\n  border-top-right-radius: 75px;\n  margin-top: 90px;\n  padding-top: 30px;\n}\n\n.content_div .label {\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n  padding-left: 5px;\n  margin-top: 10px;\n  color: black;\n}\n\n.content_div ion-grid {\n  padding: 0px;\n}\n\n.content_div .col_div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 150px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n\n.content_div .col_div .nombre {\n  color: black;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  font-size: large;\n}\n\n.content_div .col_div .precio {\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbmVkYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0RBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUVJO0VBQ0ksWUFBQTtBQUFSOztBQUdJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0FBRFI7O0FBR1E7RUFDSSxZQUFBO0VBQ0EsNkVBQUE7RUFDQSxnQkFBQTtBQURaOztBQUlRO0VBQ0ksV0FBQTtBQUZaIiwiZmlsZSI6Im1vbmVkYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2I5MWQ3MywgI2Y5NSApO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnRfZGl2e1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3NXB4O1xuICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG5cbiAgICAubGFiZWx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG5cbiAgICBpb24tZ3JpZHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cblxuICAgIC5jb2xfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cbiAgICAgICAgLm5vbWJyZXtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcmVjaW97XG4gICAgICAgICAgICBjb2xvcjojMzMzO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";

/***/ }),

/***/ 3378:
/*!************************************************************!*\
  !*** ./src/app/pages/monedas/monedas.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Monedas</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  [fullscreen]=\"true\">\n  <div class=\"main_content_div\">\n    <div class=\"content_div\">\n      <ion-label class=\"label\">Convertidor de monedas</ion-label>\n      <ion-grid fixed> \n        <ion-row>\n          <ion-col size=\"4\">\n            <div class=\"col_div\">\n              <img src=\"../../../assets/img/coin.png\" alt=\"\">\n              <span class=\"nombre\">{{res.dolar.nombre}}</span>\n              <span class=\"precio\">$ {{res.dolar.valor}}</span>\n            </div>\n          </ion-col>\n\n          <ion-col size=\"4\">\n            <div class=\"col_div\">\n              <img src=\"../../../assets/img/euro.png\" alt=\"\">\n              <span class=\"nombre\">{{res.euro.nombre}}</span>\n              <span class=\"precio\">$ {{res.euro.valor}}</span>\n            </div>\n          </ion-col>\n\n          \n          <ion-col size=\"4\">\n            <div class=\"col_div\">\n              <img src=\"../../../assets/img/bitcoin.png\" alt=\"\">\n              <span class=\"nombre\">{{res.bitcoin.nombre}}</span>\n              <span class=\"precio\">$ {{res.bitcoin.valor}}</span>\n            </div>\n          </ion-col>\n\n          <ion-col size=\"4\">\n            <div class=\"col_div\">\n              <span class=\"nombre\">{{res.ipc.nombre}}</span>\n              <span class=\"precio\">{{res.ipc.valor}}</span>\n            </div>\n          </ion-col>\n\n          <ion-col size=\"4\">\n            <div class=\"col_div\">\n              <span class=\"nombre\">{{res.uf.nombre}}</span>\n              <span class=\"precio\">{{res.uf.valor}}</span>\n            </div>\n          </ion-col>\n\n          \n          <ion-col size=\"4\">\n            <div class=\"col_div\">\n              <span class=\"nombre\">{{res.utm.nombre}}</span>\n              <span class=\"precio\">{{res.utm.valor}}</span>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_monedas_monedas_module_ts.js.map
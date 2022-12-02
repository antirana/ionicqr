"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_clima_clima_module_ts"],{

/***/ 2122:
/*!*****************************************************!*\
  !*** ./src/app/pages/clima/clima-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClimaPageRoutingModule": () => (/* binding */ ClimaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _clima_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clima.page */ 6824);




const routes = [
    {
        path: '',
        component: _clima_page__WEBPACK_IMPORTED_MODULE_0__.ClimaPage
    }
];
let ClimaPageRoutingModule = class ClimaPageRoutingModule {
};
ClimaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClimaPageRoutingModule);



/***/ }),

/***/ 6157:
/*!*********************************************!*\
  !*** ./src/app/pages/clima/clima.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClimaPageModule": () => (/* binding */ ClimaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _clima_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clima-routing.module */ 2122);
/* harmony import */ var _clima_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clima.page */ 6824);







let ClimaPageModule = class ClimaPageModule {
};
ClimaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _clima_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClimaPageRoutingModule
        ],
        declarations: [_clima_page__WEBPACK_IMPORTED_MODULE_1__.ClimaPage]
    })
], ClimaPageModule);



/***/ }),

/***/ 6824:
/*!*******************************************!*\
  !*** ./src/app/pages/clima/clima.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClimaPage": () => (/* binding */ ClimaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _clima_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clima.page.html?ngResource */ 8216);
/* harmony import */ var _clima_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clima.page.scss?ngResource */ 7136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_serviceclima_serviceclima_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/serviceclima/serviceclima.service */ 7376);





let ClimaPage = class ClimaPage {
    constructor(weatherAPI) {
        this.weatherAPI = weatherAPI;
    }
    ngOnInit() {
        this.getWeatherData();
    }
    getWeatherData() {
        this.weatherAPI.getWeatherData().subscribe((response) => {
            this.res = response;
            console.log(this.res);
        });
    }
    ;
};
ClimaPage.ctorParameters = () => [
    { type: src_app_services_serviceclima_serviceclima_service__WEBPACK_IMPORTED_MODULE_2__.ServiceclimaService }
];
ClimaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-clima',
        template: _clima_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_clima_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClimaPage);



/***/ }),

/***/ 7376:
/*!***************************************************************!*\
  !*** ./src/app/services/serviceclima/serviceclima.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceclimaService": () => (/* binding */ ServiceclimaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let ServiceclimaService = class ServiceclimaService {
    constructor(http) {
        this.http = http;
    }
    getWeatherData() {
        let lat = -33.3042517;
        let lon = -70.7028623;
        let queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=453a48cb8acfdae481c32b0282590ad8`;
        return this.http.get(queryString);
    }
};
ServiceclimaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ServiceclimaService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ServiceclimaService);



/***/ }),

/***/ 7136:
/*!********************************************************!*\
  !*** ./src/app/pages/clima/clima.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-font-family:\"Roboto\",sans-serif;\n}\n\nion-header {\n  --ion-text-color:#fff;\n}\n\nion-content {\n  --background:linear-gradient(#2980B9, #6DD5FA)!important;\n}\n\n.main {\n  display: block;\n  text-align: center;\n}\n\n.city {\n  display: block;\n  font-size: 3em;\n  font-weight: bold;\n  padding-top: 0.2em;\n}\n\n.date {\n  display: block;\n  font-size: 1.5em;\n  font-weight: bold;\n}\n\n.description {\n  display: block;\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.temperature {\n  display: block;\n  font-size: 2em;\n  padding: 0px;\n  margin: 0px;\n}\n\n.icon {\n  display: block;\n  font-size: 2em;\n  padding-top: 0px;\n}\n\nion-grid {\n  text-align: center;\n  bottom: 0%;\n  margin: 0 auto;\n}\n\n.day {\n  display: block;\n  font-weight: bold;\n}\n\n.precipitation {\n  display: block;\n}\n\n.icon-sm {\n  display: block;\n}\n\n.hi-sm {\n  display: block;\n}\n\n.lo-sm {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaW1hLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLHFDQUFBO0FBTko7O0FBU0E7RUFDSSxxQkFBQTtBQU5KOztBQVNBO0VBQ0ksd0RBQUE7QUFOSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVNBO0VBQ0ksY0FBQTtFQUNBLGNBeEJJO0VBeUJKLGlCQUFBO0VBQ0Esa0JBQUE7QUFOSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxnQkE3Qkk7RUE4QkosaUJBQUE7QUFOSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxjQXBDSTtFQXFDSixpQkFBQTtBQU5KOztBQVNBO0VBQ0ksY0FBQTtFQUNBLGNBMUNJO0VBMkNKLFlBQUE7RUFDQSxXQUFBO0FBTko7O0FBU0E7RUFDSSxjQUFBO0VBQ0EsY0FqREk7RUFrREosZ0JBQUE7QUFOSjs7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFOSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQU5KOztBQVNBO0VBQ0ksY0FBQTtBQU5KOztBQVNBO0VBQ0ksY0FBQTtBQU5KOztBQVNBO0VBQ0ksY0FBQTtBQU5KOztBQVNBO0VBQ0ksY0FBQTtBQU5KIiwiZmlsZSI6ImNsaW1hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzaXplMTogMTNlbTtcbiRzaXplMjogMy41ZW07XG4kc2l6ZTM6IDNlbTtcbiRzaXplNDogMmVtO1xuJHNpemU1OiAxLjVlbTtcbiRzaXplNjogMWVtO1xuXG5pb24tY29udGVudHtcbiAgICAtLWlvbi1mb250LWZhbWlseTonUm9ib3RvJyxzYW5zLXNlcmlmO1xufVxuXG5pb24taGVhZGVye1xuICAgIC0taW9uLXRleHQtY29sb3I6I2ZmZjtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgjMjk4MEI5LCAjNkRENUZBKSFpbXBvcnRhbnQ7XG59XG5cbi5tYWlue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNpdHl7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAkc2l6ZTM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy10b3A6IDAuMmVtO1xufVxuXG4uZGF0ZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6ICRzaXplNTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRlc2NyaXB0aW9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogJHNpemU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGVtcGVyYXR1cmV7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAkc2l6ZTQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4uaWNvbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6ICRzaXplNDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG5pb24tZ3JpZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm90dG9tOiAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmRheXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByZWNpcGl0YXRpb257XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pY29uLXNte1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGktc217XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sby1zbXtcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";

/***/ }),

/***/ 8216:
/*!********************************************************!*\
  !*** ./src/app/pages/clima/clima.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Clima</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"main\">\n    <span class=\"city\">{{res.name}}</span>\n    <span class=\"date\">01/12</span>\n\n    <div class=\"icon\">\n      <img src=\"../../../assets/img/cloudy.png\" alt=\"\">\n\n      <span class=\"description\">{{res.weather[0].description}}</span>\n      <span class=\"temperature\">{{(res.main.temp- 273.15).toFixed(0)}}°c</span>\n    </div>\n\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"day\">Viernes</ion-col>\n      <ion-col class=\"day\">Sabado</ion-col>\n      <ion-col class=\"day\">Domingo</ion-col>\n      <ion-col class=\"day\">Lunes</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"precipitation\">60%</ion-col>\n      <ion-col class=\"precipitation\">-</ion-col>\n      <ion-col class=\"precipitation\">20%</ion-col>\n      <ion-col class=\"precipitation\">60%</ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col class=\"icon-sm\"><img src=\"../../../assets/img/sunny(1).png\" alt=\"\"></ion-col>\n      <ion-col class=\"icon-sm\"><img src=\"../../../assets/img/sunny(1).png\" alt=\"\"></ion-col>\n      <ion-col class=\"icon-sm\"><img src=\"../../../assets/img/sunny(1).png\" alt=\"\"></ion-col>\n      <ion-col class=\"icon-sm\"><img src=\"../../../assets/img/sunny(1).png\" alt=\"\"></ion-col>\n    </ion-row>\n\n    <!--MAXIMA TEMPERATURA-->\n    <ion-row>\n      <ion-col class=\"hi-sm\">{{(res.main.temp_max - 273.15).toFixed(0)}}°c</ion-col>\n      <ion-col class=\"hi-sm\">25°c</ion-col>\n      <ion-col class=\"hi-sm\">25°c</ion-col>\n      <ion-col class=\"hi-sm\">25°c</ion-col>\n    </ion-row>\n\n    <!--MAXIMA TEMPERATURA-->\n    <ion-row>\n      <ion-col class=\"lo-sm\">{{(res.main.temp_min - 273.15).toFixed(0)}}°c</ion-col>\n      <ion-col class=\"lo-sm\">15°c</ion-col>\n      <ion-col class=\"lo-sm\">15°c</ion-col>\n      <ion-col class=\"lo-sm\">15°c</ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_clima_clima_module_ts.js.map
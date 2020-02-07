(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/pages/category/service/category.service.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/category/service/category.service.ts ***!
  \************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getcategory = function () {
        return this.http.get("http://fakrah.com/dashboard/category");
    };
    CategoryService.prototype.postcategory = function (client) {
        return this.http.post("http://fakrah.com/dashboard/category", client);
    };
    CategoryService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function CategoryService_Factory() { return new CategoryService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: CategoryService, providedIn: "root" });
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/pages/cities/service/city.service.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/cities/service/city.service.ts ***!
  \******************************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CityService = /** @class */ (function () {
    function CityService(http) {
        this.http = http;
    }
    CityService.prototype.getcity = function () {
        return this.http.get("http://fakrah.com/dashboard/cities");
    };
    CityService.prototype.postcity = function (city) {
        return this.http.post("http://fakrah.com/dashboard/cities", city);
    };
    CityService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function CityService_Factory() { return new CityService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: CityService, providedIn: "root" });
    return CityService;
}());



/***/ }),

/***/ "./src/app/pages/clients/service/clients.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/clients/service/clients.service.ts ***!
  \**********************************************************/
/*! exports provided: ClientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsService", function() { return ClientsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ClientsService = /** @class */ (function () {
    function ClientsService(http) {
        this.http = http;
    }
    ClientsService.prototype.getclients = function () {
        return this.http.get("http://fakrah.com/dashboard/clients");
    };
    ClientsService.prototype.postclients = function (client) {
        return this.http.post("http://fakrah.com/dashboard/clients", client);
    };
    ClientsService.prototype.getcity = function () {
        return this.http.get("http://fakrah.com/dashboard/cities");
    };
    ClientsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function ClientsService_Factory() { return new ClientsService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: ClientsService, providedIn: "root" });
    return ClientsService;
}());



/***/ }),

/***/ "./src/app/pages/country/service/country.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/country/service/country.service.ts ***!
  \**********************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



// import { environment } from 'src/environments/environment';
var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getcountry = function () {
        return this.http.get("http://fakrah.com/dashboard/countries");
    };
    CountryService.prototype.postcountry = function (country) {
        return this.http.post("http://fakrah.com/dashboard/countries", country);
    };
    CountryService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function CountryService_Factory() { return new CountryService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: CountryService, providedIn: "root" });
    return CountryService;
}());



/***/ }),

/***/ "./src/app/pages/service-provider/service/service-provider.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/service-provider/service/service-provider.service.ts ***!
  \****************************************************************************/
/*! exports provided: ServiceProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderService", function() { return ServiceProviderService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ServiceProviderService = /** @class */ (function () {
    function ServiceProviderService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
    }
    ServiceProviderService.prototype.setwithImageHeaders = function () {
        var headersConfig = {
            'Content-Type': 'multipart/form-data;charset=utf-8; boundary=' + Math.random().toString().substr(2),
            'Accept': 'application/json',
        };
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](headersConfig);
    };
    ServiceProviderService.prototype.upload = function (uploadFile) {
        console.log(this.setwithImageHeaders());
        return this.http.post("http://fakrah.com/api/upload/image", uploadFile, { headers: this.setwithImageHeaders() });
    };
    ServiceProviderService.prototype.getprovider = function () {
        return this.http.get("http://fakrah.com/dashboard/service-provider");
    };
    ServiceProviderService.prototype.postprovider = function (provider) {
        return this.http.post("http://fakrah.com/dashboard/service-provider", provider);
    };
    ServiceProviderService.prototype.onuploadSubmit = function (filedata) {
        this.headers.append('Accept', 'application/json');
        return this.http.post('http://fakrah.com/api/upload/image', filedata, { headers: this.headers });
    };
    ServiceProviderService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function ServiceProviderService_Factory() { return new ServiceProviderService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: ServiceProviderService, providedIn: "root" });
    return ServiceProviderService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map
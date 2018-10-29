(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid-grid-module"],{

/***/ "./src/app/layout/grid/grid-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/grid/grid-routing.module.ts ***!
  \****************************************************/
/*! exports provided: GridRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridRoutingModule", function() { return GridRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.component */ "./src/app/layout/grid/grid.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"]
    }
];
var GridRoutingModule = /** @class */ (function () {
    function GridRoutingModule() {
    }
    GridRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GridRoutingModule);
    return GridRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/grid/grid.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/grid/grid.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-currency></app-currency>"

/***/ }),

/***/ "./src/app/layout/grid/grid.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/grid/grid.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/grid/grid.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/grid/grid.component.ts ***!
  \***********************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () { };
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/layout/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/layout/grid/grid.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/layout/grid/grid.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/grid/grid.module.ts ***!
  \********************************************/
/*! exports provided: GridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _grid_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-routing.module */ "./src/app/layout/grid/grid-routing.module.ts");
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid.component */ "./src/app/layout/grid/grid.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _services_currency_currency_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/currency/currency.component */ "./src/app/services/currency/currency.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    GridModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _grid_routing_module__WEBPACK_IMPORTED_MODULE_2__["GridRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
            declarations: [_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], _services_currency_currency_component__WEBPACK_IMPORTED_MODULE_5__["CurrencyComponent"]]
        })
    ], GridModule);
    return GridModule;
}());



/***/ }),

/***/ "./src/app/services/currency/currency.component.html":
/*!***********************************************************!*\
  !*** ./src/app/services/currency/currency.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"start()\">START</button>\n<button (click)=\"stop()\">STOP</button>"

/***/ }),

/***/ "./src/app/services/currency/currency.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/services/currency/currency.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/currency/currency.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/currency/currency.component.ts ***!
  \*********************************************************/
/*! exports provided: CurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function() { return CurrencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency.service */ "./src/app/services/currency/currency.service.ts");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency */ "./src/app/services/currency/currency.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrencyComponent = /** @class */ (function () {
    function CurrencyComponent(service) {
        this.service = service;
        // url
        this.bithumb_ticker = 'https://api.bithumb.com/public/ticker/';
        this.upbit_ticker = 'https://api.upbit.com/v1/ticker?markets=';
        this.currencyUtil = new _currency__WEBPACK_IMPORTED_MODULE_2__["CurrencyUtil"]();
        this.test = 0;
    }
    ;
    CurrencyComponent.prototype.ngOnInit = function () {
    };
    CurrencyComponent.prototype.start = function () {
        console.log('start');
        var _this = this;
        this.intervalFunc = setInterval(function () {
            _this.test++;
            console.log(_this.test);
            _this.currencyUtil.currency.forEach(function (ele) {
                // getBithumb
                _this.service.getBithumb(_this.bithumb_ticker, ele)
                    .subscribe(function (res) {
                    console.log('_this.service.getBithumb', res);
                    // addBithumb
                    _this.service.addBithumb(res).subscribe(function (res) {
                        console.log(res);
                    }, function (error) { console.log(error); });
                    // end addBithumb
                }, function (error) {
                    console.log(error);
                });
                // end getBithumb
                // getUpbit
                _this.service.getUpbit(_this.upbit_ticker, 'KRW-' + ele)
                    .subscribe(function (res) {
                    console.log('_this.service.getUpbit', res);
                    // addUpbit
                    _this.service.addUpbit(res).subscribe(function (res) {
                        console.log(res);
                    }, function (error) { console.log(error); });
                    // end addUpbit
                }, function (error) {
                    console.log(error);
                });
                // end getUpbit
            });
        }, 2 * 60 * 1000); // 2분마다 요청
        // }, 1000);
    };
    CurrencyComponent.prototype.stop = function () {
        console.log('stop');
        clearInterval(this.intervalFunc);
    };
    CurrencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currency',
            template: __webpack_require__(/*! ./currency.component.html */ "./src/app/services/currency/currency.component.html"),
            styles: [__webpack_require__(/*! ./currency.component.scss */ "./src/app/services/currency/currency.component.scss")]
        }),
        __metadata("design:paramtypes", [_currency_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyService"]])
    ], CurrencyComponent);
    return CurrencyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=grid-grid-module.js.map
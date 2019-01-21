(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./under-construction/under-construction.component */ "./src/app/under-construction/under-construction.component.ts");





var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_4__["UnderConstructionComponent"] },
    { path: 'work', component: _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_4__["UnderConstructionComponent"] },
    { path: 'books', component: _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_4__["UnderConstructionComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'thomasnguyen';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./under-construction/under-construction.component */ "./src/app/under-construction/under-construction.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _work_work_component__WEBPACK_IMPORTED_MODULE_7__["WorkComponent"],
                _books_books_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_11__["UnderConstructionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blog works!\n</p>\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/books/books.component.html":
/*!********************************************!*\
  !*** ./src/app/books/books.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  books works!\n</p>\n"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BooksComponent = /** @class */ (function () {
    function BooksComponent() {
    }
    BooksComponent.prototype.ngOnInit = function () {
    };
    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 > a {\n    color:#151515;\n}\n\n.headerComponent {\n    display: flex;\n    justify-content: space-between;\n    padding-top:0;\n    padding-bottom:0;\n}\n\nnav {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    justify-content: space-between;\n}\n\nnav a {\n    font-size: 0.8em;\n    color: #151515;\n    padding: 1.2em;\n}\n\nnav a:hover {\n    color: #006BE8;\n}\n\n@media screen and (max-width: 400px) {\n    \n    nav a {\n        padding: 0.5em;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsb0JBQW9COztJQUVwQiwrQkFBK0I7Q0FDbEM7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUdEOztJQUVJO1FBQ0ksZUFBZTtLQUNsQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEgPiBhIHtcbiAgICBjb2xvcjojMTUxNTE1O1xufVxuXG4uaGVhZGVyQ29tcG9uZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXRvcDowO1xuICAgIHBhZGRpbmctYm90dG9tOjA7XG59XG5cbm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbm5hdiBhIHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGNvbG9yOiAjMTUxNTE1O1xuICAgIHBhZGRpbmc6IDEuMmVtO1xufVxuXG5uYXYgYTpob3ZlciB7XG4gICAgY29sb3I6ICMwMDZCRTg7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICBcbiAgICBuYXYgYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='headerComponent container'>\n  <div>\n    <h1>\n        <a routerLink=\"/\">tn</a> <br>\n    </h1>\n  </div> <!-- Logo -->\n  <nav>\n    <a routerLink=\"/\">Home</a> <br>\n    <a routerLink=\"/about\">About</a> <br>\n    <a routerLink=\"/work\">Portfolio</a> <br>\n    <a routerLink=\"/books\">Book Log</a>\n  </nav> <!-- Nav -->\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Intro */\n\n#intro {\n    padding: 2em 0;\n}\n\n.hero {\n    margin-top: 0;\n    display: flex;\n    justify-content: space-between;\n}\n\n.about-me {\n    margin: 2em 0;\n    width: 50%;\n}\n\n.about-me>p.sub-text {\n    font-size: .8em;\n    font-weight: 200;\n    color: #484848;\n    margin: 0;\n}\n\n.about-me>p.main-text {\n    font-size: 1.1em;\n    margin: 0 0 2.2em 0;\n}\n\n.about-me>p.main-text>em {\n    border-radius: 4px;\n    color: #555;\n    background: #f8f8f8;\n}\n\n.secondary-text {\n    font-size: .8em;\n    font-weight: 200;\n    color: #484848;\n}\n\n.hero-picture {\n    /* TEMP:TODO */\n    width: 365px;\n    height: 330px;\n    background: #006BE8;\n    border-radius: 30px;\n}\n\n/* portfolio */\n\nsection#portfolio {\n    width: 100%;\n    padding: 2em;\n    background: #222222;\n    padding-bottom:4em;\n}\n\n#portfolio>div>header {\n    text-align: center;\n}\n\n#portfolio>div>header>h3 {\n    font-size: 1.2em;\n    color: #FFFFFF;\n    line-height: 0em;\n}\n\n#portfolio>div>header>p {\n    font-weight: 300;\n    font-size: .8em;\n    color: #E6E6E6;\n}\n\n.portfolio-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.portfolio-item {\n    display: flex;\n    flex-direction: row;\n    height: 18em;\n}\n\n.portfolio-item__alternate {\n    flex-direction: row-reverse;\n}\n\n.portfolio-item__alternate>.portfolio-item__heading {\n    border-radius: 0px 30px 30px 0px;\n}\n\n.portfolio-item__alternate>.portfolio-item__preview {\n    border-radius: 30px 0px 0px 30px;\n}\n\n.portfolio-item__heading {\n    width: 20em;\n    background: white;\n    border-radius: 30px 0px 0px 30px;\n    padding: 1.5em;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.portfolio-item__preview {\n    width: calc(100% - 20em);\n    background: #191919;\n    border-radius: 0px 30px 30px 0px;\n}\n\n.portfolio-item__title {\n    font-size: 1.4em;\n    font-weight: 500;\n}\n\n.portfolio-item__description {\n    font-size: 0.7em;\n}\n\n.portfolio-item__subtitle {\n    padding-bottom: 0.7em;\n    font-size: 0.6em;\n}\n\n.portfolio-item__preview {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.portfolio-item__preview>img {\n    height: 10em;\n}\n\n@media screen and (max-width: 1100px) {\n    .about-me  {\n        width: 80%;\n    }\n}\n\n@media screen and (max-width: 1000px) {\n    .portfolio-item__heading{\n        width:15em;\n    }\n\n    .portfolio-item__preview {\n        width: calc(100% - 10em);\n    }\n\n\n    \n}\n\n@media screen and (max-width: 500px) {\n\n    .portfolio-container {\n        padding:0;\n    }\n    .portfolio-item   {\n        flex-direction: column-reverse;\n    }\n    \n    .portfolio-item__heading,.portfolio-item__preview{\n        width:100%;\n    }\n\n    .portfolio-item__preview {\n        background:none;\n    }\n\n    .portfolio-item__preview > img {\n        width:100%;\n        height:100%;\n    }\n\n    .portfolio-item__heading {\n        border-radius:0;\n        padding-bottom:4em;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVzs7QUFFWDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLCtCQUErQjtDQUNsQzs7QUFFRDtJQUNJLGNBQWM7SUFDZCxXQUFXO0NBQ2Q7O0FBR0Q7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsb0JBQW9CO0NBQ3ZCOztBQUVELGVBQWU7O0FBRWY7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGFBQWE7Q0FDaEI7O0FBR0Q7SUFDSSw0QkFBNEI7Q0FDL0I7O0FBRUQ7SUFDSSxpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSxpQ0FBaUM7Q0FDcEM7O0FBSUQ7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsY0FBYztJQUNkLHVCQUF1QjtJQUN2QiwrQkFBK0I7Q0FDbEM7O0FBRUQ7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGlDQUFpQztDQUNwQzs7QUFHRDtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUlEO0lBQ0k7UUFDSSxXQUFXO0tBQ2Q7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksV0FBVztLQUNkOztJQUVEO1FBQ0kseUJBQXlCO0tBQzVCOzs7O0NBSUo7O0FBQ0Q7O0lBRUk7UUFDSSxVQUFVO0tBQ2I7SUFDRDtRQUNJLCtCQUErQjtLQUNsQzs7SUFFRDtRQUNJLFdBQVc7S0FDZDs7SUFFRDtRQUNJLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLFdBQVc7UUFDWCxZQUFZO0tBQ2Y7O0lBRUQ7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0tBQ3RCOztDQUVKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJbnRybyAqL1xuXG4jaW50cm8ge1xuICAgIHBhZGRpbmc6IDJlbSAwO1xufVxuXG4uaGVybyB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmFib3V0LW1lIHtcbiAgICBtYXJnaW46IDJlbSAwO1xuICAgIHdpZHRoOiA1MCU7XG59XG5cblxuLmFib3V0LW1lPnAuc3ViLXRleHQge1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmFib3V0LW1lPnAubWFpbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIG1hcmdpbjogMCAwIDIuMmVtIDA7XG59XG5cbi5hYm91dC1tZT5wLm1haW4tdGV4dD5lbSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG5cbi5zZWNvbmRhcnktdGV4dCB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbi5oZXJvLXBpY3R1cmUge1xuICAgIC8qIFRFTVA6VE9ETyAqL1xuICAgIHdpZHRoOiAzNjVweDtcbiAgICBoZWlnaHQ6IDMzMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDZCRTg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLyogcG9ydGZvbGlvICovXG5cbnNlY3Rpb24jcG9ydGZvbGlvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgYmFja2dyb3VuZDogIzIyMjIyMjtcbiAgICBwYWRkaW5nLWJvdHRvbTo0ZW07XG59XG5cbiNwb3J0Zm9saW8+ZGl2PmhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcG9ydGZvbGlvPmRpdj5oZWFkZXI+aDMge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgbGluZS1oZWlnaHQ6IDBlbTtcbn1cblxuI3BvcnRmb2xpbz5kaXY+aGVhZGVyPnAge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGNvbG9yOiAjRTZFNkU2O1xufVxuXG4ucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucG9ydGZvbGlvLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBoZWlnaHQ6IDE4ZW07XG59XG5cblxuLnBvcnRmb2xpby1pdGVtX19hbHRlcm5hdGUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLnBvcnRmb2xpby1pdGVtX19hbHRlcm5hdGU+LnBvcnRmb2xpby1pdGVtX19oZWFkaW5nIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweDtcbn1cblxuLnBvcnRmb2xpby1pdGVtX19hbHRlcm5hdGU+LnBvcnRmb2xpby1pdGVtX19wcmV2aWV3IHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDBweCAwcHggMzBweDtcbn1cblxuXG5cbi5wb3J0Zm9saW8taXRlbV9faGVhZGluZyB7XG4gICAgd2lkdGg6IDIwZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAwcHggMHB4IDMwcHg7XG4gICAgcGFkZGluZzogMS41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBvcnRmb2xpby1pdGVtX19wcmV2aWV3IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBlbSk7XG4gICAgYmFja2dyb3VuZDogIzE5MTkxOTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweDtcbn1cblxuXG4ucG9ydGZvbGlvLWl0ZW1fX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wb3J0Zm9saW8taXRlbV9fZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi5wb3J0Zm9saW8taXRlbV9fc3VidGl0bGUge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjdlbTtcbiAgICBmb250LXNpemU6IDAuNmVtO1xufVxuXG4ucG9ydGZvbGlvLWl0ZW1fX3ByZXZpZXcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvcnRmb2xpby1pdGVtX19wcmV2aWV3PmltZyB7XG4gICAgaGVpZ2h0OiAxMGVtO1xufVxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgLmFib3V0LW1lICB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAucG9ydGZvbGlvLWl0ZW1fX2hlYWRpbmd7XG4gICAgICAgIHdpZHRoOjE1ZW07XG4gICAgfVxuXG4gICAgLnBvcnRmb2xpby1pdGVtX19wcmV2aWV3IHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwZW0pO1xuICAgIH1cblxuXG4gICAgXG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuXG4gICAgLnBvcnRmb2xpby1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgfVxuICAgIC5wb3J0Zm9saW8taXRlbSAgIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIH1cbiAgICBcbiAgICAucG9ydGZvbGlvLWl0ZW1fX2hlYWRpbmcsLnBvcnRmb2xpby1pdGVtX19wcmV2aWV3e1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cblxuICAgIC5wb3J0Zm9saW8taXRlbV9fcHJldmlldyB7XG4gICAgICAgIGJhY2tncm91bmQ6bm9uZTtcbiAgICB9XG5cbiAgICAucG9ydGZvbGlvLWl0ZW1fX3ByZXZpZXcgPiBpbWcge1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICB9XG5cbiAgICAucG9ydGZvbGlvLWl0ZW1fX2hlYWRpbmcge1xuICAgICAgICBib3JkZXItcmFkaXVzOjA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOjRlbTtcbiAgICB9XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"intro\">\n  <div class=\"hero container\">\n    <div class=\"about-me\">\n      <p class=\"sub-text\">HELLO WORLD</p>\n      <p class=\"main-text\">\n        I'm a <em>designer, developer, and engineer</em> based in Silicon Valley.\n        I first began creating websites when I was 13. Since then I love solving problems with technology.\n      </p>\n      <p class=\"secondary-text\"> I am currently a Front-Developer @ <a href=\"https://www.edelements.com/\">Education\n          Elements</a></p>\n      <a routerLink=\"/about\"><button class=\"btn btn-hot btn-large\"> Learn More</button></a>\n    </div>\n    <div class=\"hero-picture hidden\"></div>\n  </div>\n</section>\n<section id=\"portfolio\">\n  <div classs=\"container\">\n    <header>\n      <h3>My Recent Works</h3>\n      <p>Open-source web applications build within past year</p>\n    </header>\n    <div class=\"portfolio-container\">\n      <div class=\"portfolio-item container\">\n        <div class=\"portfolio-item__heading\">\n          <div class=\"portfolio-item__top\">\n            <div class=\"portfolio-item__title\">FoodCraft</div>\n            <div class=\"portfolio-item__description\">A simple web apppliaction to help you craft your favorite dishes.</div>\n          </div>\n          <div class=\"portfolio-item__bottom\">\n            <div class=\"portfolio-item__subtitle\"><em>React, Web Design</em></div>\n            <a href=\"https://github.com/thomasnguyen/FoodCraft\"><button class=\"btn btn-hot btn-med\"> View Project</button></a>\n          </div>\n        </div>\n        <div class=\"portfolio-item__preview\">\n          <img src=\"../../assets/portfolio_foodcraft.png\">\n        </div>\n      </div>\n\n      <!--  <div class=\"portfolio-item portfolio-item__alternate container\">\n        <div class=\"portfolio-item__heading\">\n          <div class=\"portfolio-item__top\">\n            <div class=\"portfolio-item__title\">FoodCraft</div>\n            <div class=\"portfolio-item__description\">A simple web apppliaction to help you craft your favorite dishes.</div>\n          </div>\n          <div class=\"portfolio-item__bottom\">\n            <div class=\"portfolio-item__subtitle\"><em>React, Web Design</em></div>\n            <a routerLink=\"/about\"><button class=\"btn btn-hot btn-large\"> Learn More</button></a>\n          </div>\n        </div>\n        <div class=\"portfolio-item__preview\"></div>\n      </div> -->\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/under-construction/under-construction.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/under-construction/under-construction.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".underConstruction {\n    width: 500px;\n    margin: auto;\n}\n\n@media screen and (max-width: 600px) {\n    .underConstruction {\n        width: 100%;\n        padding: 20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5kZXItY29uc3RydWN0aW9uL3VuZGVyLWNvbnN0cnVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSTtRQUNJLFlBQVk7UUFDWixjQUFjO0tBQ2pCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC91bmRlci1jb25zdHJ1Y3Rpb24vdW5kZXItY29uc3RydWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudW5kZXJDb25zdHJ1Y3Rpb24ge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLnVuZGVyQ29uc3RydWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/under-construction/under-construction.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/under-construction/under-construction.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"underConstruction\">\n  <h2> {{randomEmoji}} Under Construction</h2>\n  <p>This part of the website is currently under construction. Should be up within a few weeks. Thank you for your\n    patience.</p>\n</div>"

/***/ }),

/***/ "./src/app/under-construction/under-construction.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/under-construction/under-construction.component.ts ***!
  \********************************************************************/
/*! exports provided: UnderConstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderConstructionComponent", function() { return UnderConstructionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnderConstructionComponent = /** @class */ (function () {
    function UnderConstructionComponent() {
        this.emojis = ['😅', '😩', '🤐', '🤯'];
        this.randomEmoji = '';
    }
    UnderConstructionComponent.prototype.ngOnInit = function () {
        this.randomEmoji = this.emojis[Math.floor(Math.random() * Math.floor(3))];
    };
    UnderConstructionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-under-construction',
            template: __webpack_require__(/*! ./under-construction.component.html */ "./src/app/under-construction/under-construction.component.html"),
            styles: [__webpack_require__(/*! ./under-construction.component.css */ "./src/app/under-construction/under-construction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UnderConstructionComponent);
    return UnderConstructionComponent;
}());



/***/ }),

/***/ "./src/app/work/work.component.css":
/*!*****************************************!*\
  !*** ./src/app/work/work.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/work/work.component.html":
/*!******************************************!*\
  !*** ./src/app/work/work.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  work works!\n</p>\n"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/work/work.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/thomasnguyen/Desktop/thomasnguyen/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-page/index-page.component */ "./src/app/index-page/index-page.component.ts");
/* harmony import */ var _gogling_project_gogling_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gogling-project/gogling-project.component */ "./src/app/gogling-project/gogling-project.component.ts");
/* harmony import */ var _loggers_project_loggers_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loggers-project/loggers-project.component */ "./src/app/loggers-project/loggers-project.component.ts");
/* harmony import */ var _irc_bots_project_irc_bots_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./irc-bots-project/irc-bots-project.component */ "./src/app/irc-bots-project/irc-bots-project.component.ts");
/* harmony import */ var _tiny2_project_tiny2_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tiny2-project/tiny2-project.component */ "./src/app/tiny2-project/tiny2-project.component.ts");
/* harmony import */ var _utilities_project_utilities_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities-project/utilities-project.component */ "./src/app/utilities-project/utilities-project.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    // /
    { path: '', pathMatch: 'full', component: _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_2__["IndexPageComponent"] },
    // /projects/gogling
    { path: 'projects/gogling', pathMatch: 'full', component: _gogling_project_gogling_project_component__WEBPACK_IMPORTED_MODULE_3__["GoglingProjectComponent"] },
    // /projects/loggers
    { path: 'projects/loggers', pathMatch: 'full', component: _loggers_project_loggers_project_component__WEBPACK_IMPORTED_MODULE_4__["LoggersProjectComponent"] },
    // /projects/irc-bots
    { path: 'projects/irc-bots', pathMatch: 'full', component: _irc_bots_project_irc_bots_project_component__WEBPACK_IMPORTED_MODULE_5__["IrcBotsProjectComponent"] },
    // /projects/tiny2
    { path: 'projects/tiny2', pathMatch: 'full', component: _tiny2_project_tiny2_project_component__WEBPACK_IMPORTED_MODULE_6__["Tiny2ProjectComponent"] },
    // /projects/utilities
    { path: 'projects/utilities', pathMatch: 'full', component: _utilities_project_utilities_project_component__WEBPACK_IMPORTED_MODULE_7__["UtilitiesProjectComponent"] },
    // 404
    { path: '**', component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundPageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<site-navbar></site-navbar>\n\n<router-outlet></router-outlet>\n\n<div style=\"text-align: center\">\n  <span class=\"mat-caption\">\n    Nickolay Ilyushin (handicraftsman) <span style=\"display:inline-block; transform: rotate(180deg);\">&copy;</span> 2018\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'site';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'site-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index-page/index-page.component */ "./src/app/index-page/index-page.component.ts");
/* harmony import */ var _gogling_project_gogling_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gogling-project/gogling-project.component */ "./src/app/gogling-project/gogling-project.component.ts");
/* harmony import */ var _loggers_project_loggers_project_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loggers-project/loggers-project.component */ "./src/app/loggers-project/loggers-project.component.ts");
/* harmony import */ var _irc_bots_project_irc_bots_project_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./irc-bots-project/irc-bots-project.component */ "./src/app/irc-bots-project/irc-bots-project.component.ts");
/* harmony import */ var _tiny2_project_tiny2_project_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tiny2-project/tiny2-project.component */ "./src/app/tiny2-project/tiny2-project.component.ts");
/* harmony import */ var _utilities_project_utilities_project_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utilities-project/utilities-project.component */ "./src/app/utilities-project/utilities-project.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_11__["IndexPageComponent"],
                _gogling_project_gogling_project_component__WEBPACK_IMPORTED_MODULE_12__["GoglingProjectComponent"],
                _loggers_project_loggers_project_component__WEBPACK_IMPORTED_MODULE_13__["LoggersProjectComponent"],
                _irc_bots_project_irc_bots_project_component__WEBPACK_IMPORTED_MODULE_14__["IrcBotsProjectComponent"],
                _tiny2_project_tiny2_project_component__WEBPACK_IMPORTED_MODULE_15__["Tiny2ProjectComponent"],
                _utilities_project_utilities_project_component__WEBPACK_IMPORTED_MODULE_16__["UtilitiesProjectComponent"],
                _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundPageComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gogling-project/gogling-project.component.html":
/*!****************************************************************!*\
  !*** ./src/app/gogling-project/gogling-project.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"site-card\">\n  <mat-card-title>\n    Gogling\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      Gogling is an application server with Lua API I wrote back in 2016\n      and remade in August 2018. Simple example:\n    </p>\n\n    <pre><code class=\"language-lua\">{{ example1 }}</code></pre>\n\n    <p>\n      This will reply to your requests to / with <code>Hello, World!</code>.\n    </p>\n    <p>\n      Current version is a full rewrite, but you still can access\n      old one at <code>development</code> and <code>updpack-into-package</code>\n      branches\n    </p>\n    <p>\n      Gogling supports importing prebuilt (as plugins) Golang's standard library.\n      To build it, you must have ruby, bash and go.\n    </p>\n\n    <pre><code class=\"language-bash\">{{ example2 }}</code></pre>\n\n    <p>\n      Now you can find built standard library as a set of plugins.\n      (warning: they take ~860 MB on your disk so you shouldn't push all of them to the server)\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/gogling\">\n      GitHub\n    </a>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/gogling-project/gogling-project.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/gogling-project/gogling-project.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gogling-project/gogling-project.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/gogling-project/gogling-project.component.ts ***!
  \**************************************************************/
/*! exports provided: GoglingProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoglingProjectComponent", function() { return GoglingProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _prism_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prism.service */ "./src/app/prism.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoglingProjectComponent = /** @class */ (function () {
    function GoglingProjectComponent(prismService) {
        this.prismService = prismService;
        this.highlighted = false;
        this.example1 = "-- importing fmt package\nlocal fmt = gogling.U.import('fmt')\n\n-- adding a wrapped function as a handler for / route\ngogling.I.Router:HandleFunc('/', gogling.U.wrap(function(session)\n  -- replying with 'Hello, World!'\n  fmt.Fprintln(session.writer, 'Hello, World!')\nend))";
        this.example2 = "$ cd ~/path/to/gogling\n# This will generate Gopher-Lua bindings to Golang's standard library\n$ ruby ./get-gostdlib.rb\n# This will build generated bindgings so you could load them as plugins\n$ bash ./build-gostdlib.sh";
    }
    GoglingProjectComponent.prototype.ngOnInit = function () { };
    GoglingProjectComponent.prototype.ngAfterViewChecked = function () {
        if (!this.highlighted) {
            this.prismService.highlightAll();
            this.highlighted = true;
        }
    };
    GoglingProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'site-gogling-project',
            template: __webpack_require__(/*! ./gogling-project.component.html */ "./src/app/gogling-project/gogling-project.component.html"),
            styles: [__webpack_require__(/*! ./gogling-project.component.scss */ "./src/app/gogling-project/gogling-project.component.scss")]
        }),
        __metadata("design:paramtypes", [_prism_service__WEBPACK_IMPORTED_MODULE_1__["PrismService"]])
    ], GoglingProjectComponent);
    return GoglingProjectComponent;
}());



/***/ }),

/***/ "./src/app/index-page/index-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/index-page/index-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"site-card\">\n  <mat-card-content style=\"margin-bottom: 0\">\n    <span class=\"mat-display-1\" style=\"margin-bottom: 16px\">About</span><br/>\n\n    <p>\n      Hello. I am Nickolay Ilyushin, yet another developer.\n    </p>\n    <p>\n      I don't have much to say about myself.\n    </p>\n    <p>\n      You can find links to the corresponding project pages below and at navbar.\n    </p>\n\n    <span class=\"mat-display-1\" style=\"margin-bottom: 16px\">Contact</span>\n\n    <mat-list>\n      <mat-list-item class=\"site-contact-item\">\n        Email:&nbsp;<a href=\"mailto:nickolay.ilyushin@gmail.com\">nickolay.ilyushin@gmail.com</a>\n      </mat-list-item>\n      <mat-list-item class=\"site-contact-item\">\n        <span matLine>Email (secondary):&nbsp;<a href=\"mailto:nickolay02@inbox.ru\">nickolay02@inbox.ru</a></span>\n        <span matLine>Prefer the first one as an email service provider of the second one (mail.ru) is banned here in Ukraine.</span>\n      </mat-list-item>\n      <mat-list-item class=\"site-contact-item\">\n        Discord: handicraftsman_#9800\n      </mat-list-item>\n      <mat-list-item class=\"site-contact-item\">\n        IRC: handicraftsman at freenode and rusnet.\n      </mat-list-item>\n      <mat-list-item class=\"site-contact-item\">\n        XMPP: handicraftsman@xmpp.thehellverse.tk\n      </mat-list-item> \n    </mat-list>\n\n    <span class=\"mat-display-1\">Projects</span>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button color=\"primary\" routerLink=\"/projects/gogling\">\n      Gogling\n    </button>\n    <button mat-button color=\"primary\" routerLink=\"/projects/loggers\">\n      Loggers\n    </button>\n    <button mat-button color=\"primary\" routerLink=\"/projects/irc-bots\">\n      IRC Bots\n    </button>\n    <button mat-button color=\"primary\" routerLink=\"/projects/tiny2\">\n      tiny2\n    </button>\n    <button mat-button color=\"primary\" routerLink=\"/projects/utilities\">\n      Utilities/Other\n    </button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/index-page/index-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/index-page/index-page.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/index-page/index-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/index-page/index-page.component.ts ***!
  \****************************************************/
/*! exports provided: IndexPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageComponent", function() { return IndexPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexPageComponent = /** @class */ (function () {
    function IndexPageComponent() {
    }
    IndexPageComponent.prototype.ngOnInit = function () {
    };
    IndexPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'site-index-page',
            template: __webpack_require__(/*! ./index-page.component.html */ "./src/app/index-page/index-page.component.html"),
            styles: [__webpack_require__(/*! ./index-page.component.scss */ "./src/app/index-page/index-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexPageComponent);
    return IndexPageComponent;
}());



/***/ }),

/***/ "./src/app/irc-bots-project/irc-bots-project.component.html":
/*!******************************************************************!*\
  !*** ./src/app/irc-bots-project/irc-bots-project.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"site-card\">\n  <mat-card-title>\n    IRC Bots\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      I've written multiple IRC bots in various languages. My latest\n      (and one of most stable) bot is ParticleBot2.\n    </p>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"site-card\">\n  <mat-card-title>\n    ParticleBot2\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      ParticleBot2 is written in C++ and supports serving channels in multiple\n      IRC networks and extending using C++ plugins.\n    </p>\n\n    <p>\n      ParticleBot2 depends on Guosh, ParticleDI, ParticleINI, SQLite3 and CURL.\n    </p>\n\n    <p>\n      Optional dependencies include libxml++ and jsoncpp.\n    </p>\n\n    <p>\n      Building:\n    </p>\n\n    <pre><code class=\"language-bash\">{{ pb2build }}</code></pre>\n    \n    <p>\n      Example config (which loads all plugins and adds corresponding groups)\n    </p>\n\n    <pre><code class=\"language-ini\">{{ pb2config }}</code></pre>\n\n    <p>\n      Starting:\n    </p>\n\n    <pre><code class=\"language-bash\">{{ pb2starting }}</code></pre>\n\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/particlebot2\">\n      GitHub\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n\n<mat-card class=\"site-card\">\n  <mat-card-title>\n    Other bots\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      I have written some other bots. These may be unstable or partially unfinished.\n      This is the full list of them:\n    </p>\n\n    <mat-list>\n      <mat-list-item>\n        <a href=\"https://github.com/handicraftsman/particlebot\">ParticleBot</a>\n      </mat-list-item>\n      <mat-list-item>\n        <a href=\"https://github.com/handicraftsman/protonbot\">ProtonBot</a>\n      </mat-list-item>\n      <mat-list-item>\n        <a href=\"https://github.com/handicraftsman/photonbot\">PhotonBot</a>\n      </mat-list-item>\n      <mat-list-item>\n        <a href=\"https://github.com/handicraftsman/particlebot\">ParticleBot</a>\n      </mat-list-item>\n      <mat-list-item>\n        <a href=\"https://github.com/handicraftsman/wuon\">wuon</a>\n      </mat-list-item>\n      <mat-list-item>\n        <a href=\"https://github.com/handicraftsman/gluonbot\">gluonbot</a>\n      </mat-list-item>\n      <mat-list-item>\n        <a href=\"https://github.com/handicraftsman/tinyirc\">tinyirc</a>\n      </mat-list-item>\n      <mat-list-item>\n        <a href=\"https://github.com/handicraftsman/electronbot\">ElectronBot</a>        \n      </mat-list-item>\n    </mat-list>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/irc-bots-project/irc-bots-project.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/irc-bots-project/irc-bots-project.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/irc-bots-project/irc-bots-project.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/irc-bots-project/irc-bots-project.component.ts ***!
  \****************************************************************/
/*! exports provided: IrcBotsProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrcBotsProjectComponent", function() { return IrcBotsProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _prism_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prism.service */ "./src/app/prism.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IrcBotsProjectComponent = /** @class */ (function () {
    function IrcBotsProjectComponent(prismService) {
        this.prismService = prismService;
        this.highlighted = false;
        this.pb2build = "$ git clone https://github.com/handicraftsman/particlebot2\n$ cd particlebot2\n$ mkdir build && cd build\n$ cmake .. # -DCMAKE_BUILD_TYPE=(Release or Debug), depending on what you need\n           # May need to prepend CC=gcc-8 CXX=g++-8 on Ubuntu 18.04 as this uses\n           # some C++17 features\n$ make\n";
        this.pb2config = "[general]\nprefix = !\n\n[server/freenode]\naddr = irc.freenode.net/6667\naddr = chat.freenode.net/6667\n\nnick = YourAwesomeNickname\nuser = YourAwesomeUsername\npass = YourAwesomePassword\nrnam = Your amazing realname\n\njoin = \"##your-amazing-channel\"\njoin = \"##foo-bar-baz\"\n\n[plugin/chanop]\n[plugin/fun]\n[plugin/titler]\n[plugin/calcs]\n[plugin/urban]\n[plugin/quotes]\n\n[group/chanop]\nchanop = kick\nchanop = remove\nchanop = kban\nchanop = rban\nchanop = ban\nchanop = quiet\nchanop = op\nchanop = hop\nchanop = voice\n\n[group/fun]\nfun = poke\nfun = cookie\n\n[group/quotes]\nquotes = quote\nquotes = add-quote\nquotes = del-quote";
        this.pb2starting = "$ ./particlebot2 -c /path/to/config.ini -l debug\n# Messages below given level will not be printed\n# Level for all IRC messages is io/irc\n# See all levels by typing\n$ ./particlebot2 --help\n";
    }
    IrcBotsProjectComponent.prototype.ngOnInit = function () { };
    IrcBotsProjectComponent.prototype.ngAfterViewChecked = function () {
        if (!this.highlighted) {
            this.prismService.highlightAll();
            this.highlighted = true;
        }
    };
    IrcBotsProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'site-irc-bots-project',
            template: __webpack_require__(/*! ./irc-bots-project.component.html */ "./src/app/irc-bots-project/irc-bots-project.component.html"),
            styles: [__webpack_require__(/*! ./irc-bots-project.component.scss */ "./src/app/irc-bots-project/irc-bots-project.component.scss")]
        }),
        __metadata("design:paramtypes", [_prism_service__WEBPACK_IMPORTED_MODULE_1__["PrismService"]])
    ], IrcBotsProjectComponent);
    return IrcBotsProjectComponent;
}());



/***/ }),

/***/ "./src/app/loggers-project/loggers-project.component.html":
/*!****************************************************************!*\
  !*** ./src/app/loggers-project/loggers-project.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"site-card\">\n  <mat-card-title>\n    Loggers\n  </mat-card-title>\n  <mat-card-content>\n    I have written some loggers for various languages.\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"site-card\" id=\"logger-guosh\">\n  <mat-card-title>\n    Guosh\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      Guosh is a logger for C and C++, written in C++.\n    </p>\n\n    <p>\n      C++ example:\n    </p>\n    <pre><code class=\"language-cpp\">{{ guoshexample1 }}</code></pre>\n    \n    <p>\n      C example:\n    </p>\n    <pre><code class=\"language-c\">{{ guoshexample2 }}</code></pre>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/guosh\">\n      GitHub\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"site-card\" id=\"logger-tiny-log\">\n  <mat-card-title>\n    tiny-log\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      tiny-log is a logger for C.\n    </p>\n\n    <p>\n      Example:\n    </p>\n    <pre><code class=\"language-c\">{{ tinylogexample }}</code></pre>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/tiny-log\">\n      GitHub\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"site-card\" id=\"logger-particlelog\">\n  <mat-card-title>\n    ParticleLog\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      ParticleLog is a logger for Ruby.\n    </p>\n\n    <p>\n      Example:\n    </p>\n    <pre><code class=\"language-ruby\">{{ particlelogexample }}</code></pre>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/particlelog\">\n      GitHub\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"site-card\" id=\"logger-gluon\">\n  <mat-card-title>\n    Gluon\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      Gluon is a logger for crystal.\n    </p>\n\n    <p>\n      Example:\n    </p>\n    <pre><code class=\"language-crystal\">{{ gluonexample }}</code></pre>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/gluon\">\n      GitHub\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"site-card\" id=\"logger-positron\">\n  <mat-card-title>\n    Positron\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      Positron is a logger for Python.\n    </p>\n\n    <p>\n      Example:\n    </p>\n    <pre><code class=\"language-python\">{{ positronexample }}</code></pre>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/positron\">\n      GitHub\n    </a>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/loggers-project/loggers-project.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/loggers-project/loggers-project.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loggers-project/loggers-project.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/loggers-project/loggers-project.component.ts ***!
  \**************************************************************/
/*! exports provided: LoggersProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggersProjectComponent", function() { return LoggersProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _prism_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prism.service */ "./src/app/prism.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggersProjectComponent = /** @class */ (function () {
    function LoggersProjectComponent(prismService) {
        this.prismService = prismService;
        this.highlighted = false;
        this.guoshexample1 = "#include <guosh.hpp>\n\nint main() {\n  Guosh::Logger::main_level = Guosh::LogLevel::DEBUG;\n  Guosh::Logger log;\n  log.enable_file_logging(\"./\", \"test-c++\");\n\n  log.write(\"write()\");\n  log(\"operator()\");\n  log.debug(\"debug\");\n  log.io(\"io\");\n  log.info(\"info\");\n  log.warning(\"warning\");\n  log.error(\"error\");\n  log.important(\"important\");\n  log.critical(\"critical %s bar\", \"foo\");\n}";
        this.guoshexample2 = "#include <guosh.h>\n\nint main() {\n  guosh_set_main_level(GuoshLogLevel_DEBUG);\n  GuoshLogger* log = guosh_logger_new(\"log\", GuoshLogLevel_INFO);\n  guosh_logger_enable_file_logging(log, \"./\", \"test-c\");\n\n  guosh_logger_debug(log, \"debug\");\n  guosh_logger_io(log, \"io\");\n  guosh_logger_info(log, \"info\");\n  guosh_logger_warning(log, \"warning\");\n  guosh_logger_error(log, \"error\");\n  guosh_logger_important(log, \"important\");\n  guosh_logger_critical(log, \"critical %s bar\", \"foo\");\n  \n  guosh_logger_destroy(log);\n  return 0;\n}";
        this.tinylogexample = "#include <tiny-log.h>\n\nint main() {\n  tl_log_level = TLLevel_DEBUG;\n  \n  char* l = \"main\";\n  tl_write(l, \"tl_write()\");\n  tl_lwrite(TLLevel_INFO, l, \"tl_lwrite()\");\n  \n  tl_debug(l, \"tl_debug()\");\n  tl_io(l, \"tl_io()\");\n  tl_info(l, \"tl_info()\");\n  tl_warning(l, \"tl_warning()\");\n  tl_error(l, \"tl_error()\");\n  tl_important(l, \"tl_important()\");\n  tl_critical(l, \"tl_critical()\");\n  \n  tl_write(l, \"I also support %s\", \"formatted printing\");\n  return 0;\n}";
        this.particlelogexample = "require 'particlelog'\n\nlog = ParticleLog.new('main', ParticleLog::DEBUG)\nlog.write('Hello!')\nlog.debug('debug')\nlog.info('info')\nlog.warning('warning')\nlog.error('error')\nlog.critical('critical')\n";
        this.gluonexample = "require \"gluon\"\n\nGluon::Logger.main_log_level = Gluon::LogLevel::DEBUG\nl = Gluon::Logger.new(Gluon::LogLevel::DEBUG)\nl.write(\"Hello!\")\nl.debug(\"debug\")\nl.info(\"info\")\nl.warning(\"warning\")\nl.error(\"error\")\nl.critical(\"critical\")";
        this.positronexample = "import positron\n\npositron.main_level = positron.LogLevel.DEBUG\nlog = positron.Logger('log', positron.LogLevel.IMPORTANT)\nlog.enable_file_logging()\nlog.debug('debug')\nlog.io('io')\nlog.info('info')\nlog.warning('warning')\nlog.error('error')\nlog.important('important')\nlog.critical('critical')\nlog.iochars = 'MSG'\nlog.io('msg')";
    }
    LoggersProjectComponent.prototype.ngOnInit = function () { };
    LoggersProjectComponent.prototype.ngAfterViewChecked = function () {
        if (!this.highlighted) {
            this.prismService.highlightAll();
            this.highlighted = true;
        }
    };
    LoggersProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'site-loggers-project',
            template: __webpack_require__(/*! ./loggers-project.component.html */ "./src/app/loggers-project/loggers-project.component.html"),
            styles: [__webpack_require__(/*! ./loggers-project.component.scss */ "./src/app/loggers-project/loggers-project.component.scss")]
        }),
        __metadata("design:paramtypes", [_prism_service__WEBPACK_IMPORTED_MODULE_1__["PrismService"]])
    ], LoggersProjectComponent);
    return LoggersProjectComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z2 hide-on-small\">\n  <button mat-button routerLink=\"/\">\n    <img src=\"/favicon.png\" height=\"32\" style=\"margin-right: 4px; margin-bottom: 2px\">\n    Home\n  </button>\n  <button *ngFor=\"let link of links\" mat-button [routerLink]=\"link[1]\">\n    {{ link[0] }}\n  </button>\n</mat-toolbar>\n\n<mat-sidenav-container style=\"position: static\" clas class=\"show-on-small\">\n  <mat-sidenav #sidenav mode=\"over\" class=\"sidenav mat-elevation-z2 show-on-small\">\n    <button mat-button routerLink=\"/\" class=\"sidenav-btn\">\n      <img src=\"/favicon.png\" height=\"32\" style=\"margin-right: 4px; margin-bottom: 2px\">\n      Home\n    </button><br/>\n    <button *ngFor=\"let link of links\" mat-button [routerLink]=\"link[1]\" class=\"sidenav-btn\">\n      {{ link[0] }}\n    </button>\n  </mat-sidenav>\n\n  <button\n    mat-fab\n    class=\"show-on-small\"\n    style=\"z-index: 1000; position: fixed; bottom: 16px; right: 16px; color: white\"\n    (click)=\"sidenav.toggle()\"\n  >\n    <mat-icon aria-label=\"Show Sidebar\">menu</mat-icon>\n  </button>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  min-width: 78px;\n  width: 30vw; }\n\n.sidenav-btn {\n  width: 92%;\n  margin: 4px;\n  text-align: left; }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.links = [
            ['Gogling', '/projects/gogling'],
            ['Loggers', '/projects/loggers'],
            ['IRC Bots', '/projects/irc-bots'],
            ['tiny2', '/projects/tiny2'],
            ['Utilities/Other', '/projects/utilities'],
        ];
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'site-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 30vh; text-align: center\">\n  <span class=\"mat-display-1\">404</span><br/>\n  <span>Sorry, but I cannot find this page</span>\n</div>"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'site-not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.scss */ "./src/app/not-found-page/not-found-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/prism.service.ts":
/*!**********************************!*\
  !*** ./src/app/prism.service.ts ***!
  \**********************************/
/*! exports provided: PrismService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrismService", function() { return PrismService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar */ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js");
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */ "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js");
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_lua__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-lua */ "./node_modules/prismjs/components/prism-lua.js");
/* harmony import */ var prismjs_components_prism_lua__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_lua__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-bash */ "./node_modules/prismjs/components/prism-bash.js");
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_c__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-c */ "./node_modules/prismjs/components/prism-c.js");
/* harmony import */ var prismjs_components_prism_c__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_c__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_cpp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-cpp */ "./node_modules/prismjs/components/prism-cpp.js");
/* harmony import */ var prismjs_components_prism_cpp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_cpp__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_ruby__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-ruby */ "./node_modules/prismjs/components/prism-ruby.js");
/* harmony import */ var prismjs_components_prism_ruby__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_ruby__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_crystal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/components/prism-crystal */ "./node_modules/prismjs/components/prism-crystal.js");
/* harmony import */ var prismjs_components_prism_crystal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_crystal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prismjs_components_prism_python__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prismjs/components/prism-python */ "./node_modules/prismjs/components/prism-python.js");
/* harmony import */ var prismjs_components_prism_python__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_python__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prismjs_components_prism_ini__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prismjs/components/prism-ini */ "./node_modules/prismjs/components/prism-ini.js");
/* harmony import */ var prismjs_components_prism_ini__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_ini__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prismjs/components/prism-json */ "./node_modules/prismjs/components/prism-json.js");
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prismjs_components_prism_clojure__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prismjs/components/prism-clojure */ "./node_modules/prismjs/components/prism-clojure.js");
/* harmony import */ var prismjs_components_prism_clojure__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_clojure__WEBPACK_IMPORTED_MODULE_16__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







// Import language support for languages you need











var PrismService = /** @class */ (function () {
    function PrismService(platformId) {
        this.platformId = platformId;
    }
    PrismService.prototype.highlightAll = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            Prism.highlightAll();
        }
    };
    PrismService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object])
    ], PrismService);
    return PrismService;
}());



/***/ }),

/***/ "./src/app/tiny2-project/tiny2-project.component.html":
/*!************************************************************!*\
  !*** ./src/app/tiny2-project/tiny2-project.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"site-card\">\n  <mat-card-title>\n    tiny2-object\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      tiny2-object is a partial OOP implementation in C.\n    </p>\n\n    <p>\n      It supports method tables, virtual method tables, and inheritance.\n    </p>\n\n    <p>\n      It DOES NOT support such features as data encapsulation\n      (private/protected fields; but you can create a class with a pointer to a\n      private object) and multiple inheritance.\n    </p>\n\n    <p>\n      Greeter class:\n    </p>\n\n    <pre><code class=\"language-c\">{{ greeterc }}</code></pre>\n\n    <p>\n      TitleGreeter class:\n    </p>\n\n    <pre><code class=\"language-c\">{{ titlegreeterc }}</code></pre>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/tiny2-object\">\n      GitHub\n    </a>  \n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"site-card\">\n  <mat-card-title>\n    tiny2-object\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      tiny2-containers is a container implementation for tiny2-object.\n    </p>\n\n    <p>\n      It has string wrappers (for storing strigs) lists, vectors, queues and maps.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/tiny2-containers\">\n      GitHub\n    </a>  \n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/tiny2-project/tiny2-project.component.scss":
/*!************************************************************!*\
  !*** ./src/app/tiny2-project/tiny2-project.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tiny2-project/tiny2-project.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tiny2-project/tiny2-project.component.ts ***!
  \**********************************************************/
/*! exports provided: Tiny2ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tiny2ProjectComponent", function() { return Tiny2ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _prism_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prism.service */ "./src/app/prism.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Tiny2ProjectComponent = /** @class */ (function () {
    function Tiny2ProjectComponent(prismService) {
        this.prismService = prismService;
        this.highlighted = false;
        this.greeterc = "/*\n * test-greeter.h\n */\n\n// Include guard\n#pragma once\n\n// Inclue tiny2-object\n#include <tiny2-object.h>\n\n// Declare a class so you could define its methods.\n$class_decl(Greeter)\n\n// Define method signatures. (constructor, vtable initializer, greet and virtual greet)\ntypedef Greeter* (*GreeterConstructor)(Greeter* self);\ntypedef void (*GreeterInitVTable)(GreeterVTable* v);\ntypedef void (*GreeterGreet)(Greeter* self, const char* who);\ntypedef void (*GreeterVGreet)(Greeter* self, const char* who);\n\n// Define the class itself. In this example it inherits from TObject\n// which can be accessed by casting to it or by accessing self->_parent\n// member.\n$class(Greeter, TObject, _parent)\n$class_end(Greeter)\n\n// Define methods.\n$mtable(Greeter)\n  $mtable_method(GreeterGreet, greet)\n$mtable_end(Greeter)\n\n// Define virtual methods.\n$vtable(Greeter, TObject)\n  $vtable_method(GreeterVGreet, vgreet)\n$vtable_end(Greeter)\n\n/*\n * test-greeter.c\n */\n\n// Include the class definitio\n#include \"test-greeter.h\"\n\n// We'll need stdio.h for printf.\n#include <stdio.h>\n\n// Declare method implementations.\nstatic Greeter* greeter_constructor(Greeter* self);\nstatic void greeter_destructor(Greeter* self);\nstatic void greeter_init_vtable(GreeterVTable* v);\nstatic void greeter_greet(Greeter* self, const char* who);\nstatic void greeter_vgreet(Greeter* self, const char* who);\n\n// Declare method implementations as members of the Greeter class.\n$mtable_define(Greeter, greeter_constructor, greeter_destructor, greeter_init_vtable)\n  $mtable_define_method(GreeterGreet, greet, greeter_greet)\n$mtable_define_end(Greeter)\n\n// Do this with virtual method implementations. \n$vtable_define(Greeter)\n  $vtable_define_method(GreeterVGreet, vgreet)\n$vtable_define_end(Greeter)\n\nstatic Greeter* greeter_constructor(Greeter* self) {\n  // Initialize parent.\n  $init(TObject, self);\n  // Setup current instance and classes vtable.\n  $setup(Greeter, self, greeter_destructor);\n  // Return initialized instance so it could be used.\n  return self;\n}\n\nstatic void greeter_init_vtable(GreeterVTable* v) {\n  // Initialize this and parent vtable. \n  $vtable_init(v, Greeter, TObject);\n  // Declare vgreet as a method of this vtable.\n  $vtable_set(v, Greeter, GreeterVGreet, vgreet, greeter_vgreet);\n}\n\nstatic void greeter_destructor(Greeter* self) {\n  // Call parent destructor.\n  $destroy_parent(TObject, self);\n}\n\nstatic void greeter_greet(Greeter* self, const char* who) {\n  printf(\"Hello, %s\n\", who);\n}\n\nstatic void greeter_vgreet(Greeter* self, const char* who) {\n  printf(\"Hello, %s\n\", who);\n}\n";
        this.titlegreeterc = "/*\n * test-titlegreeter.h\n */\n\n#pragma once\n\n#include <tiny2-object.h>\n#include \"test-greeter.h\"\n\n$class_decl(TitleGreeter)\n\ntypedef TitleGreeter* (*TitleGreeterConstructor)(TitleGreeter*, const char*);\ntypedef void (*TitleGreeterInitVTable)(TitleGreeterVTable* v);\n\n$class(TitleGreeter, Greeter, _parent)\n  $class_property(const char*, title)\n$class_end(TitleGreeter)\n\n$mtable(TitleGreeter)\n$mtable_end(TitleGreeter)\n\n$vtable(TitleGreeter, Greeter)\n$vtable_end(TitleGreeter)\n\n/*\n * test-titlegreeter.c\n */\n\n#include \"test-titlegreeter.h\"\n\n#include <stdio.h>\n\nstatic TitleGreeter* titlegreeter_constructor(TitleGreeter* self, const char* title);\nstatic void titlegreeter_destructor(TitleGreeter* self);\nstatic void titlegreeter_init_vtable(TitleGreeterVTable* v);\nstatic void titlegreeter_vgreet(TitleGreeter* self, const char* who);\n\n$mtable_define(TitleGreeter, titlegreeter_constructor, titlegreeter_destructor, titlegreeter_init_vtable)\n$mtable_define_end(TitleGreeter)\n\n$vtable_define(TitleGreeter)\n$vtable_define_end(TitleGreeter)\n\nstatic TitleGreeter* titlegreeter_constructor(TitleGreeter* self, const char* title) {\n  $init(Greeter, self);\n  $setup(TitleGreeter, self, titlegreeter_destructor);\n  self->title = title;\n  return self;\n}\n\nstatic void titlegreeter_destructor(TitleGreeter* self) {\n  $destroy_parent(Greeter, self);\n}\n\nstatic void titlegreeter_init_vtable(TitleGreeterVTable* v) {\n  $vtable_init(v, TitleGreeter, Greeter);\n  $vtable_setp(v, TitleGreeter, Greeter, GreeterVGreet, vgreet, titlegreeter_vgreet);\n}\n\nstatic void titlegreeter_vgreet(TitleGreeter* self, const char* who) {\n  printf(\"Hello, %s%s\n\", self->title, who);\n}\n";
    }
    Tiny2ProjectComponent.prototype.ngOnInit = function () { };
    Tiny2ProjectComponent.prototype.ngAfterViewChecked = function () {
        if (!this.highlighted) {
            this.prismService.highlightAll();
            this.highlighted = true;
        }
    };
    Tiny2ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'site-tiny2-project',
            template: __webpack_require__(/*! ./tiny2-project.component.html */ "./src/app/tiny2-project/tiny2-project.component.html"),
            styles: [__webpack_require__(/*! ./tiny2-project.component.scss */ "./src/app/tiny2-project/tiny2-project.component.scss")]
        }),
        __metadata("design:paramtypes", [_prism_service__WEBPACK_IMPORTED_MODULE_1__["PrismService"]])
    ], Tiny2ProjectComponent);
    return Tiny2ProjectComponent;
}());



/***/ }),

/***/ "./src/app/utilities-project/utilities-project.component.html":
/*!********************************************************************!*\
  !*** ./src/app/utilities-project/utilities-project.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"site-card\">\n  <mat-card-title>\n    Axi\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      Axi is a data streaming library for Crystal.\n    </p>\n\n    <p>\n      Example:\n    </p>\n\n    <pre><code class=\"language-crystal\">{{ axidemo }}</code></pre>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/axi\">\n      GitHub\n    </a>\n    <a mat-button color=\"primary\" href=\"https://github.com/handicraftsman/axi/blob/master/spec/axi_spec.cr\">\n      Spec file\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"site-card\">\n  <mat-card-title>\n    NobleXML\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      NobleXML is an adapted for streaming XML generator/parser library.\n    </p>\n\n    <p>\n      Generating XML:\n    </p>\n\n    <pre><code class=\"language-javascript\">{{ nxmldemo1 }}</code></pre>\n\n    <p>\n      Parsing XML:\n    </p>\n\n    <pre><code class=\"language-javascript\">{{ nxmldemo2 }}</code></pre>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/noblexml\">\n      GitHub\n    </a>\n    <a mat-button color=\"primary\" href=\"https://github.com/handicraftsman/noblexml/blob/master/test.xml\">\n      test.xml\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"site-card\">\n  <mat-card-title>\n    particle_pool\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      particle_pool is a thread pool implementation written in Ruby which also\n      utilizes fibers for running multiple tasks in a same thread.\n    </p>\n\n    <p>\n      You can find demo code (also used for testing) below.\n    </p>    \n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/particle_pool\">\n      GitHub\n    </a>\n    <a mat-button color=\"primary\" href=\"https://github.com/handicraftsman/particle_pool/blob/master/bin/task.rb\">\n      task.rb\n    </a>\n    <a mat-button color=\"primary\" href=\"https://github.com/handicraftsman/particle_pool/blob/master/bin/test-task.rb\">\n      test-task.rb\n    </a>\n    <a mat-button color=\"primary\" href=\"https://github.com/handicraftsman/particle_pool/blob/master/bin/test-thread.rb\">\n      test-thread.rb\n    </a>\n    <a mat-button color=\"primary\" href=\"https://github.com/handicraftsman/particle_pool/blob/master/bin/test-pool.rb\">\n      test-pool.rb\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"site-card\">\n  <mat-card-title>\n    tiny-embed\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      tiny-embed is a small utility program which embeds given data into .c files.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/tiny-embed\">\n      GitHub\n    </a>\n    <a mat-button color=\"primary\" href=\"https://github.com/handicraftsman/tiny-embed/blob/master/tiny-embed.txt\">\n      Sample config\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"site-card\">\n  <mat-card-title>\n    ParticleMSG\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      ParticleMSG is a json messaging (not a chat!) protocol for various applications inspired by IRC and JSON-RPC.\n    </p>\n\n    <p>\n      It supports simple hashed password authentication and runs in a single TLS session.\n    </p>\n\n    <p>\n      It IS NOT designed for transferring big data or anything like that.\n    </p>\n\n    <p>\n      A sample session might look like this:\n    </p>\n\n    <pre><code class=\"language-json\">{{ pmsgsession }}</code></pre>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/particlemsg\">\n      More\n    </a>\n    <a mat-button color=\"primary\" href=\"https://github.com/handicraftsman/particlemsg_go\">\n      Implementation for Go\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"site-card\">\n  <mat-card-title>\n    particletest    \n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      particletest is a testing framework for C++.\n    </p>\n\n    <pre><code class=\"language-cpp\">{{ ptestdemo }}</code></pre>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/particletest\">\n      GitHub\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"site-card\">\n  <mat-card-title>\n    particledi\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      particledi is a partial implementation of the Context pattern for implementing dependency injection.\n    </p>\n\n    <pre><code class=\"language-cpp\">{{ pdidemo }}</code></pre>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/particledi\">\n      GitHub\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"site-card\">\n  <mat-card-title>\n    particleini\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      particleini is an .ini parser for C++.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/particleini\">\n      GitHub\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"site-card\">\n  <mat-card-title>\n    particlecmd\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      particlecmd is a CLI argument parser for ruby.\n    </p>\n\n    <p>\n      It supports extracting positionals, flags and options from given string.\n    </p>\n\n    <pre><code class=\"language-ruby\">{{ pcmddemo }}</code></pre>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/particlecmd\">\n      GitHub\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"site-card\">\n  <mat-card-title>\n    hake\n  </mat-card-title>\n  <mat-card-content>\n    <p>\n      hake is a task manager inspired by GNU Make.\n    </p>\n\n    <p>\n      It supports both Python and <a href=\"https://github.com/hylang/hy\">Hy</a> hakefiles.\n    </p>\n\n    <pre><code class=\"language-python\">{{ hakepydemo }}</code></pre>\n\n    <pre><code class=\"language-clojure\">{{ hakehydemo }}</code></pre>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" href=\"https://github.com/handicraftsman/hake\">\n      GitHub\n    </a>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/utilities-project/utilities-project.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/utilities-project/utilities-project.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/utilities-project/utilities-project.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/utilities-project/utilities-project.component.ts ***!
  \******************************************************************/
/*! exports provided: UtilitiesProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesProjectComponent", function() { return UtilitiesProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _prism_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prism.service */ "./src/app/prism.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilitiesProjectComponent = /** @class */ (function () {
    function UtilitiesProjectComponent(prismService) {
        this.prismService = prismService;
        this.highlighted = false;
        this.axidemo = "require \"./src/axi\"\n\ns = Axi::Stream(Int32, Int64).new\nputs s.send(2).inspect\ns.transform ->(val : Int32) { val.to_i64 }\ns.on_transform ->(ival : Int32, oval : Int64) { \"do something\"; nil }\nputs s.send(2).inspect\n\ns2 = Axi::Stream(Int32, Int32).new\ns2.transform ->(val : Int32) { val * 2 }\nputs s2.send(2).inspect\n\nclass Foo < Axi::Stream(Int32, Int32)\n  def i_transform(val)\n    return val ** 2\n  end\nend\n\ns3 = Foo.new\nputs s3.send(5).inspect";
        this.nxmldemo1 = "const nxml = require('noblexml');\nconst b = new nxml.XMLBuilder();\n\nb\n  .start_document()\n  .write_object({\n    name: 'hello',\n    attrs: {'hello': 'world'},\n    children: [\n      'asdf',\n      {\n        name: 'foo',\n        attrs: {'foo': 'bar'},\n        children: [],\n      },\n    ],\n  })\n  .start_element('foo')\n    .start_element('bar')\n      .write_cdata('Hello, holy ]]> world!')\n    .end_element()\n    .start_element('baz')\n      .start_element('quux')\n  .end_document()\nconsole.log(b.dump());";
        this.nxmldemo2 = "const fs = require('fs');\nconst nxml = require('./index');\n\nvar xg = new nxml.XMLObjectGetter('stream');\nxg.onelem = () => {\n  console.log(xg.stream[0]);\n  xg.stream.shift();\n}\nxg.onend = () => {\n  console.log('end');\n}\nxg.write(fs.readFileSync('./test.xml'));";
        this.pmsgsession = "C: {\"Type\": \"_register\", \"Data\": {\"Name\": \"pluginName\", \"Key\": \"a sha256-hashed key\"}}\nS: {\"Type\": \"_registered\", \"Data\": {\"Name\": \"pluginName\"}}\nOR\nS: {\"Type\": \"_alreadyRegistered\", \"Data\": {\"Name\": \"pluginName\"}}\nOR\nS: {\"Type\": \"_invalidKey\", \"Data\": {\"Key\": \"a sha256-hashed key\"}}\nOR\nS: {\"Type\": \"_blocked\", \"Data\": {}} // means that server blocks everybody except for core\n...\nS: {\"Type\": \"_ping\", \"Data\": {}}\nC: {\"Type\": \"_pong\", \"Data\": {}}\n...\nC: {\"Type\": \"_message\", \"Data\": {\"To\": \"pluginName\", \"Message\": {\"Type\": \"aMessage\", \"Data\": {\"Some\": \"data\"}}}}\nS: {\"Type\": \"_message\", \"Data\": {\"From\": \"pluginName\", \"Message\": {\"Type\": \"aMessage\", \"Data\": {\"Some\": \"data\"}}}}\n...\nC: {\"Type\": \"_quit\", \"Data\": {}}\nS: {\"Type\": \"_quit\", \"Data\": {\"Reason\": \"Client Quit\"}}";
        this.ptestdemo = "#include \"particletest.hpp\"\n\nclass sample_test : public particletest {\npublic:\n  sample_test() : particletest(\"sample_test\") {\n    ptest_register_test(\"1 + 1 == 2\", &sample_test::one_plus_one_is_two);\n  }\n  virtual ~sample_test() {}\n\n  bool one_plus_one_is_two() {\n    ptest_expect(1 + 1 == 2);\n\n    return true;\n  }\n};\n\nint main(int argc, char** argv) {\n  return particletest::run_all({sample_test()});\n}";
        this.pdidemo = "#include \"particledi.hpp\"\n\n#include <iostream>\n\nclass print_service : public particledi::dependency {\npublic:\n  print_service() {\n    std::cout << \"print_service initialized\" << std::endl;\n  }\n\n  virtual ~print_service() {\n    std::cout << \"print_service destroyed\" << std::endl;\n  }\n\n  void print(std::string msg) {\n    std::cout << msg << std::endl;\n  }\n};\n\nclass a_class {\npublic:\n  a_class(particledi::dm_ptr dm)\n  : ps(dm->get<print_service>())\n  {\n    std::cout << \"a_class initialized\" << std::endl;\n  }\n\n  ~a_class() {\n    std::cout << \"a_class destroyed\" << std::endl;\n  }\n\n  void do_something() {\n    ps->print(\"Hello, World!\");\n  }\n\n  std::shared_ptr<print_service> ps;\n};\n\nint main(int argc, char** argv) {\n  particledi::dm_ptr dm = particledi::dm::create();\n  dm->set<print_service>(new print_service());\n\n  a_class c(dm);\n  c.do_something();\n\n  return 0;\n}";
        this.pcmddemo = "require 'particlecmd'\n\nsample = ParticleCMD::Definition.new 'add' do |d|\n  d.positional 'a', description: 'First value'\n  d.positional 'b', description: 'Second value'\n\n  d.collect_extra\n\n  d.flag 'multiply', description: 'Multiply instead of adding'\n\n  d.option 'divide', argname: 'X', description: 'Divide the result by X'\nend\n\nrequire 'shellwords'\nputs (sample.match ParticleCMD::Info.new Shellwords.split '1 2 3 \\' 4 5 \"6 7' 8\" --multiply --divide=123').inspect\n# #<ParticleCMD::Result:0x000056286c6ab630 @extra=[\"3\", \"'\", \"4\", \"5\", \"6 7' 8\"], @positionals={\"a\"=>\"1\", \"b\"=>\"2\"}, @flags={\"multiply\"=>true}, @options={\"divide\"=>\"123\"}>\n# returns nil if definition and info do not match\n";
        this.hakepydemo = "#!/usr/bin/env python3\n\nfrom hake import start, task, default_task, run_tasks\n\n@default_task\ndef task_default():\n  run_tasks('build', 'install')\n\n@task('build')\ndef task_build():\n  print('Build')\n\n@task('install')\ndef task_install():\n  print('Install')\n\nstart()";
        this.hakehydemo = "#!/usr/bin/env hy\n\n(import [hake [start def-task def-default-task run-tasks]])\n\n(def-default-task (fn []\n  (run-tasks \"build\" \"install\")))\n\n(def-task \"build\" (fn []\n  (print \"Build\")))\n\n(def-task \"install\" (fn []\n  (print \"Install\")))\n\n(start)";
    }
    UtilitiesProjectComponent.prototype.ngOnInit = function () { };
    UtilitiesProjectComponent.prototype.ngAfterViewChecked = function () {
        if (!this.highlighted) {
            this.prismService.highlightAll();
            this.highlighted = true;
        }
    };
    UtilitiesProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'site-utilities-project',
            template: __webpack_require__(/*! ./utilities-project.component.html */ "./src/app/utilities-project/utilities-project.component.html"),
            styles: [__webpack_require__(/*! ./utilities-project.component.scss */ "./src/app/utilities-project/utilities-project.component.scss")]
        }),
        __metadata("design:paramtypes", [_prism_service__WEBPACK_IMPORTED_MODULE_1__["PrismService"]])
    ], UtilitiesProjectComponent);
    return UtilitiesProjectComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ancient/Projects/web/handicraftsman.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
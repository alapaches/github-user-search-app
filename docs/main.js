"use strict";
(self["webpackChunkgithub_user_search_app"] = self["webpackChunkgithub_user_search_app"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



const routes = [];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-google-tag-manager */ 9000);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3767);
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchbar/searchbar.component */ 9227);
var _class;






class AppComponent {
  constructor(gtmService, router) {
    this.gtmService = gtmService;
    this.router = router;
    this.title = 'github-user-search-app';
  }
  ngOnInit() {
    this.gtmEvent();
  }
  gtmEvent() {
    this.router.events.forEach(item => {
      if (item instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };
        this.gtmService.pushTag(gtmTag);
      }
    });
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_4__.GoogleTagManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 5,
  vars: 0,
  consts: [[1, "main"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-searchbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_1__.SearchbarComponent],
  styles: [".main[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-width: 40vw;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7RUFDQSxlQUFBO0FBRkoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zdHlsZXMvdmFyaWFibGVzJ1xyXG5cclxuXHJcbi5tYWluXHJcbiAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgIHRvcDogNDUlXHJcbiAgICBsZWZ0OiA1MCVcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXHJcbiAgICBtaW4td2lkdGg6IDQwdnciXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3767);
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchbar/searchbar.component */ 9227);
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/content.component */ 4438);
/* harmony import */ var _light_dark_mode_light_dark_mode_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./light-dark-mode/light-dark-mode.component */ 6863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;










class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [{
    provide: 'googleTagManagerId',
    useValue: 'GTM-WSHCFTWH'
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_3__.SearchbarComponent, _content_content_component__WEBPACK_IMPORTED_MODULE_4__.ContentComponent, _light_dark_mode_light_dark_mode_component__WEBPACK_IMPORTED_MODULE_5__.LightDarkModeComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule]
  });
})();

/***/ }),

/***/ 4438:
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentComponent: () => (/* binding */ ContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-google-tag-manager */ 9000);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;



const _c0 = function (a0) {
  return {
    "profil__infomations_disabled": a0,
    "": true
  };
};
function ContentComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "section", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5)(5, "div")(6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div")(12, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8)(16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9)(19, "div", 10)(20, "div")(21, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Repos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div")(26, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Followers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div")(31, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Following");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12)(36, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.profilDataResp.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.profilDataResp.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 17, ctx_r0.profilDataResp.login), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Joined ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 19, ctx_r0.profilDataResp.created_at, "d MMM y"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.profilDataResp.bio || "This profile has no bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.profilDataResp.public_repos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.profilDataResp.followers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.profilDataResp.following);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, !ctx_r0.profilDataResp.location));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 22, ctx_r0.profilDataResp.location || "Not available"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, !ctx_r0.profilDataResp.twitter_username));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 24, ctx_r0.profilDataResp.twitter_username || "Not available"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://", ctx_r0.profilDataResp.blog, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, !ctx_r0.profilDataResp.blog));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.profilDataResp.blog || "Not available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, !ctx_r0.profilDataResp.company));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 26, ctx_r0.profilDataResp.company || "Not available"));
  }
}
class ContentComponent {
  constructor(gtmService) {
    this.gtmService = gtmService;
  }
}
_class = ContentComponent;
_class.ɵfac = function ContentComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_1__.GoogleTagManagerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-content"]],
  inputs: {
    profilDataResp: "profilDataResp"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "content", 4, "ngIf"], [1, "content"], ["id", "profil"], [1, "profil__avatar"], ["alt", "", 1, "profil__avatar__img", 3, "src"], [1, "profil__identity"], [1, "profil__identity__id"], [1, "profil__identity__join"], [1, "profil__description"], [1, "profil__details"], [1, "profil__datas"], [1, "profil__datas__number", "font-style__h1"], [1, "profil__infomations"], [1, "profil__infomations_location", 3, "ngClass"], [1, "profil__infomations_twitter", 3, "ngClass"], ["target", "_blank", 1, "profil__infomations_website", 3, "ngClass", "href"], [1, "profil__infomations_company", 3, "ngClass"]],
  template: function ContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContentComponent_div_0_Template, 47, 36, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profilDataResp);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
  styles: [".content[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  background-color: var(--secondaryBgColor);\n  padding: 2rem;\n  border-radius: 15px;\n  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);\n}\n\n#profil[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-areas: \"av id id id\" \"av desc desc desc\" \".dt dt dt\" \".dt dt dt\";\n  grid-template-columns: auto repeat(3, 1fr);\n  grid-auto-rows: auto;\n}\n\n.profil__avatar[_ngcontent-%COMP%] {\n  grid-area: av;\n}\n\n.profil__avatar__img[_ngcontent-%COMP%] {\n  max-width: 7rem;\n  margin-right: 1.8rem;\n  border-radius: 50%;\n}\n\n.profil__description[_ngcontent-%COMP%] {\n  grid-area: desc;\n  margin-bottom: 2rem;\n}\n\n.profil__identity[_ngcontent-%COMP%] {\n  grid-area: id;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: top;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n}\n.profil__identity[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-right: 0.9rem;\n}\n.profil__identity[_ngcontent-%COMP%]   .profil__identity__id[_ngcontent-%COMP%] {\n  color: #0079FF;\n}\n\n.profil__details[_ngcontent-%COMP%] {\n  grid-area: dt;\n}\n\n.profil__datas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  background-color: var(--primaryBgColor);\n  border-radius: 10px;\n  padding: 1rem 0.5rem 1rem 0.5rem;\n  margin-bottom: 2rem;\n}\n\n.profil__datas__number[_ngcontent-%COMP%] {\n  color: var(--headingColor);\n}\n\n.profil__infomations[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  word-break: break-all;\n}\n.profil__infomations[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.profil__infomations_disabled[_ngcontent-%COMP%] {\n  opacity: 50%;\n  pointer-events: none;\n  text-decoration: none;\n}\n\n.profil__infomations_location[_ngcontent-%COMP%]::before {\n  content: url('icon-location.svg');\n  margin-right: 0.5em;\n}\n\n.profil__infomations_twitter[_ngcontent-%COMP%]::before {\n  content: url('icon-twitter.svg');\n  margin-right: 0.5em;\n}\n\n.profil__infomations_website[_ngcontent-%COMP%]::before {\n  content: url('icon-website.svg');\n  margin-right: 0.5em;\n}\n\n.profil__infomations_company[_ngcontent-%COMP%]::before {\n  content: url('icon-company.svg');\n  margin-right: 0.5em;\n}\n\n@media (max-width: 768px) {\n  #profil[_ngcontent-%COMP%] {\n    grid-template-areas: \"av id id id\" \"desc desc desc desc\" \"dt dt dt dt\" \"dt dt dt dt\";\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zYXNzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSx1QkFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkRDa0JLO0FEcEJUOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4RUFBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBR0o7QUFESTtFQUNJLG9CQUFBO0FBR1I7QUFESTtFQUNJLGNDekNFO0FENENWOztBQURBO0VBQ0ksYUFBQTtBQUlKOztBQUZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEE7RUFDSSwwQkFBQTtBQU1KOztBQUpBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLHFCQUFBO0FBT0o7QUFMSTtFQUNJLGFBQUE7QUFPUjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBUUo7O0FBTkE7RUFDSSxpQ0FBQTtFQUNBLG1CQUFBO0FBU0o7O0FBUEE7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0FBVUo7O0FBUkE7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0FBV0o7O0FBVEE7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0FBWUo7O0FBVkE7RUFDSTtJQUNJLG9GQUFBO0VBYU47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnXHJcblxyXG4uY29udGVudFxyXG4gICAgLy9kaXNwbGF5OiBmbGV4XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5QmdDb2xvcilcclxuICAgIHBhZGRpbmc6IDJyZW1cclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHhcclxuICAgIGJveC1zaGFkb3c6ICRzaGFkb3dcclxuICAgIFxyXG4jcHJvZmlsXHJcbiAgd2lkdGg6IDEwMCVcclxuICBkaXNwbGF5OiBncmlkXHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhdiBpZCBpZCBpZFwiIFwiYXYgZGVzYyBkZXNjIGRlc2NcIiBcIi5kdCBkdCBkdFwiIFwiLmR0IGR0IGR0XCJcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gcmVwZWF0KDMsIDFmcilcclxuICBncmlkLWF1dG8tcm93czogYXV0b1xyXG5cclxuLnByb2ZpbF9fYXZhdGFyXHJcbiAgICBncmlkLWFyZWE6IGF2XHJcblxyXG4ucHJvZmlsX19hdmF0YXJfX2ltZ1xyXG4gICAgbWF4LXdpZHRoOiA3cmVtXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuOHJlbVxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlXHJcblxyXG4ucHJvZmlsX19kZXNjcmlwdGlvblxyXG4gICAgZ3JpZC1hcmVhOiBkZXNjXHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtICBcclxuXHJcbi5wcm9maWxfX2lkZW50aXR5XHJcbiAgICBncmlkLWFyZWE6IGlkXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxuICAgIGFsaWduLWl0ZW1zOiB0b3BcclxuICAgIGZsZXgtd3JhcDogd3JhcFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbVxyXG5cclxuICAgICYgaDFcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuOXJlbVxyXG5cclxuICAgICYgLnByb2ZpbF9faWRlbnRpdHlfX2lkXHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5XHJcblxyXG4ucHJvZmlsX19kZXRhaWxzXHJcbiAgICBncmlkLWFyZWE6IGR0XHJcblxyXG4ucHJvZmlsX19kYXRhc1xyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvd1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlCZ0NvbG9yKVxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgcGFkZGluZzogMXJlbSAuNXJlbSAxcmVtIC41cmVtXHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtXHJcblxyXG4ucHJvZmlsX19kYXRhc19fbnVtYmVyXHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZ0NvbG9yKVxyXG5cclxuLnByb2ZpbF9faW5mb21hdGlvbnNcclxuICAgIGRpc3BsYXk6IGdyaWRcclxuICAgIGdyaWQtZ2FwOiAxcmVtXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsbWlubWF4KDIwMHB4LCAxZnIpKVxyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsXHJcbiAgICBcclxuICAgICYgPiAqXHJcbiAgICAgICAgZGlzcGxheTogZmxleFxyXG5cclxuLnByb2ZpbF9faW5mb21hdGlvbnNfZGlzYWJsZWRcclxuICAgIG9wYWNpdHk6IDUwJVxyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG5cclxuLnByb2ZpbF9faW5mb21hdGlvbnNfbG9jYXRpb246OmJlZm9yZVxyXG4gICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi1sb2NhdGlvbi5zdmcnKVxyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNWVtXHJcblxyXG4ucHJvZmlsX19pbmZvbWF0aW9uc190d2l0dGVyOjpiZWZvcmVcclxuICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24tdHdpdHRlci5zdmcnKVxyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNWVtXHJcblxyXG4ucHJvZmlsX19pbmZvbWF0aW9uc193ZWJzaXRlOjpiZWZvcmVcclxuICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24td2Vic2l0ZS5zdmcnKVxyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNWVtXHJcblxyXG4ucHJvZmlsX19pbmZvbWF0aW9uc19jb21wYW55OjpiZWZvcmVcclxuICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24tY29tcGFueS5zdmcnKVxyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNWVtXHJcblxyXG5AbWVkaWEgKCBtYXgtd2lkdGg6IDc2OHB4KVxyXG4gICAgI3Byb2ZpbFxyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYXYgaWQgaWQgaWRcIiBcImRlc2MgZGVzYyBkZXNjIGRlc2NcIiBcImR0IGR0IGR0IGR0XCIgXCJkdCBkdCBkdCBkdFwiXHJcbiAgICAiLCIvL0ZJWEVEIENPTE9SU1xyXG4kcHJpbWFyeTogIzAwNzlGRlxyXG4kcHJpbWFyeS1kaXNhYmxlZDogIzYwQUJGRlxyXG5cclxuLy9MSUdIVCBNT0RFIENPTE9SU1xyXG4kbGFiZWxfX2xpZ2h0OiAjNjk3QzlBXHJcbiR0ZXh0X19saWdodDogIzRCNkE5QlxyXG4kdG9nZ2xlX19saWdodDogIzY5N0M5QVxyXG4kdG9nZ2xlX19saWdodF9ob3ZlcjogIzIyMjczMVxyXG4kaGVhZGluZ19fbGlnaHQ6ICMyQjM0NDJcclxuJHByaW1hcnktYmdfX2xpZ2h0OiAjRjZGOEZGXHJcbiRzZWNvbmRhcnktYmdfX2xpZ2h0OiAjRkVGRUZFXHJcblxyXG4vL0RBUksgTU9ERSBDT0xPUlNcclxuJGxhYmVsX19kYXJrOiAjZmZmZmZmXHJcbiR0ZXh0X19kYXJrOiAjZmZmZmZmXHJcbiR0b2dnbGVfX2Rhcms6ICNGRkZGRkZcclxuJHRvZ2dsZV9fZGFya19ob3ZlcjogIzkwQTRENFxyXG4kaGVhZGluZ19fZGFyazogI2ZmZmZmZlxyXG4kcHJpbWFyeS1iZ19fZGFyazogIzFFMkE0N1xyXG4kc2Vjb25kYXJ5LWJnX19kYXJrOiAjMTQxRDJGXHJcblxyXG4vL0lOVEVSQUNUSVZFIENPTE9SXHJcbiRlcnJvcjogI0Y3NDY0NlxyXG5cclxuLy9TSEFET1dcclxuJHNoYWRvdzogMHB4IDE2cHggMzBweCAtMTBweCByZ2JhKDcwLCA5NiwgMTg3LCAwLjE5ODU2NykiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3767:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _light_dark_mode_light_dark_mode_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../light-dark-mode/light-dark-mode.component */ 6863);
var _class;


class HeaderComponent {}
_class = HeaderComponent;
_class.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-header"]],
  decls: 6,
  vars: 0,
  consts: [[1, "header"], ["href", "/", "title", "devfinder.com", 1, "header__logo", "font-style__h1"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "devfinder");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-light-dark-mode");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_light_dark_mode_light_dark_mode_component__WEBPACK_IMPORTED_MODULE_0__.LightDarkModeComponent],
  styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  background-color: var(--primaryBgColor);\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  color: var(--headingColor);\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFESjs7QUFHQTtFQUNJLDBCQUFBO0VBQ0EscUJBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnXHJcblxyXG4uaGVhZGVyXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW1cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlCZ0NvbG9yKVxyXG4gICAgXHJcbi5oZWFkZXJfX2xvZ29cclxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nQ29sb3IpXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6863:
/*!**************************************************************!*\
  !*** ./src/app/light-dark-mode/light-dark-mode.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightDarkModeComponent: () => (/* binding */ LightDarkModeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-google-tag-manager */ 9000);
var _class;


class LightDarkModeComponent {
  constructor(gtmService) {
    this.gtmService = gtmService;
    this.themeToSwitch = '';
    this.iconToSwitch = '';
    this.el = document.body;
  }
  ngOnInit() {
    this.detectPreferColorScheme();
  }
  detectPreferColorScheme() {
    let colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (colorSchemeQuery.matches) {
      this.toggleLightDarkMode(true);
    } else {
      this.toggleLightDarkMode(false);
    }
    colorSchemeQuery.addEventListener('change', e => {
      if (e.matches) {
        this.toggleLightDarkMode(true);
      } else {
        this.toggleLightDarkMode(false);
      }
    });
  }
  buttonSwitch() {
    if (!this.el.classList.contains('dark')) {
      this.toggleLightDarkMode(true);
    } else {
      this.toggleLightDarkMode(false);
    }
  }
  toggleLightDarkMode(theme) {
    if (theme && !this.el.classList.contains('dark')) {
      this.el.classList.add('dark');
      this.themeToSwitch = 'LIGHT';
      document.getElementById('header__darkmode')?.classList.add('header__darkmode_dark');
      document.getElementById('header__darkmode')?.classList.remove('header__darkmode_light');
    } else {
      this.el.classList.remove('dark');
      this.themeToSwitch = 'DARK';
      document.getElementById('header__darkmode')?.classList.add('header__darkmode_light');
      document.getElementById('header__darkmode')?.classList.remove('header__darkmode_dark');
    }
  }
}
_class = LightDarkModeComponent;
_class.ɵfac = function LightDarkModeComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_1__.GoogleTagManagerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-light-dark-mode"]],
  decls: 2,
  vars: 1,
  consts: [["id", "header__darkmode", 1, "header__darkmode", 3, "click"]],
  template: function LightDarkModeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LightDarkModeComponent_Template_button_click_0_listener() {
        return ctx.buttonSwitch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.themeToSwitch);
    }
  },
  styles: [".header__darkmode[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: none;\n  border: none;\n  color: var(--toggleColor);\n  font-weight: 600;\n  letter-spacing: 2.5px;\n}\n.header__darkmode[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: var(--toggleHoverColor);\n}\n\n.header__darkmode_light[_ngcontent-%COMP%]::after {\n  content: url('icon-moon.svg');\n  margin-left: 0.8rem;\n  display: inline-block;\n  line-height: 0;\n}\n\n.header__darkmode_dark[_ngcontent-%COMP%]::after {\n  content: url('icon-sun.svg');\n  margin-left: 0.8rem;\n  display: inline-block;\n  line-height: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGlnaHQtZGFyay1tb2RlL2xpZ2h0LWRhcmstbW9kZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7QUFDUjs7QUFHSTtFQUNJLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFBUjs7QUFHSTtFQUNJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFBUiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfX2Rhcmttb2RlXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICBiYWNrZ3JvdW5kOiBub25lXHJcbiAgICBib3JkZXI6IG5vbmVcclxuICAgIGNvbG9yOiB2YXIoLS10b2dnbGVDb2xvcilcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDBcclxuICAgIGxldHRlci1zcGFjaW5nOiAyLjVweCAgICBcclxuXHJcbiAgICAmOmhvdmVyXHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRvZ2dsZUhvdmVyQ29sb3IpXHJcbiAgICAgICAgXHJcblxyXG4uaGVhZGVyX19kYXJrbW9kZV9saWdodFxyXG4gICAgJjo6YWZ0ZXJcclxuICAgICAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uLW1vb24uc3ZnJylcclxuICAgICAgICBtYXJnaW4tbGVmdDogLjhyZW1cclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgICAgICBsaW5lLWhlaWdodDogMFxyXG5cclxuLmhlYWRlcl9fZGFya21vZGVfZGFya1xyXG4gICAgJjo6YWZ0ZXJcclxuICAgICAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uLXN1bi5zdmcnKVxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuOHJlbVxyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwXHJcbiAgXHJcbiAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9227:
/*!**************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchbarComponent: () => (/* binding */ SearchbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-google-tag-manager */ 9000);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content/content.component */ 4438);
var _class;






function SearchbarComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.err);
  }
}
class SearchbarComponent {
  constructor(http, gtmService) {
    this.http = http;
    this.gtmService = gtmService;
    this.username = '';
  }
  GetGithubProfil(data) {
    this.http.get('https://api.github.com/users/' + data).subscribe(response => {
      this.resp = response;
      console.log(this.resp);
    }, error => {
      this.err = error.error.message;
      console.log(this.err);
    });
  }
  onSubmit(form) {
    this.username = form.value['username'];
    this.GetGithubProfil(this.username);
  }
}
_class = SearchbarComponent;
_class.ɵfac = function SearchbarComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_3__.GoogleTagManagerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-searchbar"]],
  decls: 9,
  vars: 3,
  consts: [[3, "ngSubmit"], ["f", "ngForm"], [1, "form_icon"], ["type", "text", "name", "username", "id", "username", "placeholder", "Search GitHub username\u2026", "ngModel", "", "required", "", 1, "test-test-test"], ["class", "error", 4, "ngIf"], ["type", "submit", 3, "disabled"], [3, "profilDataResp"], [1, "error"]],
  template: function SearchbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SearchbarComponent_Template_form_ngSubmit_0_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSubmit(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2)(3, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SearchbarComponent_p_4_Template, 2, 1, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-content", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.err);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("profilDataResp", ctx.resp);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _content_content_component__WEBPACK_IMPORTED_MODULE_0__.ContentComponent],
  styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0.6rem 0.6rem 0.6rem 2rem;\n  border-radius: 15px;\n  background-color: var(--secondaryBgColor);\n  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);\n  margin-bottom: 1.3rem;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0079FF;\n  padding: 0.7rem 1.2rem 0.7rem 1.2rem;\n  border-radius: 10px;\n  color: #fff;\n  border: none;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: #60ABFF;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #60ABFF;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  border: none;\n  background-color: var(--secondaryBgColor);\n  color: var(--headingColor);\n  caret-color: #0079FF;\n  margin-right: 1rem;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background-color: var(--secondaryBgColor) !important;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--textColor);\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #F74646;\n  margin: 0 0.5rem 0 0.5rem;\n  font-weight: 600;\n}\n\n.form_icon[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n}\n.form_icon[_ngcontent-%COMP%]::before {\n  content: url('icon-search.svg');\n  margin-right: 0.8rem;\n  display: inline-block;\n  line-height: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuc2FzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSwyRENpQks7RURoQkwscUJBQUE7QUFESjtBQUdJO0VBQ0kseUJDWkU7RURhRixvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFEUjtBQUdRO0VBQ0kseUJDbEJPO0FEaUJuQjtBQUdRO0VBQ0csZUFBQTtFQUNBLHlCQ3RCUTtBRHFCbkI7QUFJSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQy9CRTtFRGdDRixrQkFBQTtBQUZSO0FBSVE7RUFDSSxhQUFBO0VBQ0Esb0RBQUE7QUFGWjtBQUlRO0VBQ0ksdUJBQUE7QUFGWjs7QUFJQTtFQUNJLGNDcEJJO0VEcUJKLHlCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQ1IiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzJ1xyXG5cclxuZm9ybSBcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIHBhZGRpbmc6IC42cmVtIC42cmVtIC42cmVtIDJyZW0gIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5QmdDb2xvcilcclxuICAgIGJveC1zaGFkb3c6ICRzaGFkb3dcclxuICAgIG1hcmdpbi1ib3R0b206IDEuM3JlbVxyXG4gICAgXHJcbiAgICAmIGJ1dHRvblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5XHJcbiAgICAgICAgcGFkZGluZzogLjdyZW0gMS4ycmVtIC43cmVtIDEuMnJlbVxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgICAgICBjb2xvcjogI2ZmZlxyXG4gICAgICAgIGJvcmRlcjogbm9uZVxyXG4gICAgICAgIFxyXG4gICAgICAgICY6ZGlzYWJsZWRcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktZGlzYWJsZWRcclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgJiBpbnB1dFxyXG4gICAgICAgIGZsZXgtZ3JvdzoyXHJcbiAgICAgICAgYm9yZGVyOiBub25lXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5QmdDb2xvcilcclxuICAgICAgICBjb2xvcjogdmFyKC0taGVhZGluZ0NvbG9yKVxyXG4gICAgICAgIGNhcmV0LWNvbG9yOiAkcHJpbWFyeVxyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbVxyXG5cclxuICAgICAgICAmOmZvY3VzXHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmVcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5QmdDb2xvcikhaW1wb3J0YW50XHJcblxyXG4gICAgICAgICY6OnBsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpXHJcblxyXG4uZXJyb3JcclxuICAgIGNvbG9yOiAkZXJyb3JcclxuICAgIG1hcmdpbjogMCAuNXJlbSAwIC41cmVtXHJcbiAgICBmb250LXdlaWdodDogNjAwXHJcblxyXG4uZm9ybV9pY29uXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICY6OmJlZm9yZVxyXG4gICAgICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24tc2VhcmNoLnN2ZycpXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuOHJlbVxyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwXHJcbiIsIi8vRklYRUQgQ09MT1JTXHJcbiRwcmltYXJ5OiAjMDA3OUZGXHJcbiRwcmltYXJ5LWRpc2FibGVkOiAjNjBBQkZGXHJcblxyXG4vL0xJR0hUIE1PREUgQ09MT1JTXHJcbiRsYWJlbF9fbGlnaHQ6ICM2OTdDOUFcclxuJHRleHRfX2xpZ2h0OiAjNEI2QTlCXHJcbiR0b2dnbGVfX2xpZ2h0OiAjNjk3QzlBXHJcbiR0b2dnbGVfX2xpZ2h0X2hvdmVyOiAjMjIyNzMxXHJcbiRoZWFkaW5nX19saWdodDogIzJCMzQ0MlxyXG4kcHJpbWFyeS1iZ19fbGlnaHQ6ICNGNkY4RkZcclxuJHNlY29uZGFyeS1iZ19fbGlnaHQ6ICNGRUZFRkVcclxuXHJcbi8vREFSSyBNT0RFIENPTE9SU1xyXG4kbGFiZWxfX2Rhcms6ICNmZmZmZmZcclxuJHRleHRfX2Rhcms6ICNmZmZmZmZcclxuJHRvZ2dsZV9fZGFyazogI0ZGRkZGRlxyXG4kdG9nZ2xlX19kYXJrX2hvdmVyOiAjOTBBNEQ0XHJcbiRoZWFkaW5nX19kYXJrOiAjZmZmZmZmXHJcbiRwcmltYXJ5LWJnX19kYXJrOiAjMUUyQTQ3XHJcbiRzZWNvbmRhcnktYmdfX2Rhcms6ICMxNDFEMkZcclxuXHJcbi8vSU5URVJBQ1RJVkUgQ09MT1JcclxuJGVycm9yOiAjRjc0NjQ2XHJcblxyXG4vL1NIQURPV1xyXG4kc2hhZG93OiAwcHggMTZweCAzMHB4IC0xMHB4IHJnYmEoNzAsIDk2LCAxODcsIDAuMTk4NTY3KSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
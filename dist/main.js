(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jenkins/Projects/github/bendita-ka/src/main.ts */"zUnb");


/***/ }),

/***/ "ANU3":
/*!********************************************!*\
  !*** ./src/app/services/dishes.service.ts ***!
  \********************************************/
/*! exports provided: DishesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishesService", function() { return DishesService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DishesService {
    //dishes$: BehaviorSubject<IDish[]> = new BehaviorSubject(null);
    //dishesObs: Observable<IDish[]>;
    constructor(http) {
        this.http = http;
    }
    getDishes() {
        console.log('bendita-ka/dist/assets/pratos-do-dia.json');
        return this.http.get('bendita-ka/dist/assets/pratos.json');
    }
    getTodaysSpecial() {
        return this.getDishes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((dishes) => {
            return this.http
                .get('bendita-ka/dist/assets/pratos-do-dia.json')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((ids) => {
                return dishes.filter((dish) => ids.includes(dish.id));
            }));
        }));
    }
    find(term) {
        return this.getDishes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((dishes) => {
            const filteredDishes = [];
            const dishesByName = dishes.filter((dish) => {
                return dish.nome.toLocaleLowerCase().indexOf(term) > -1;
            });
            filteredDishes.concat(dishesByName);
            const dishesByDescr = dishes.filter((dish) => {
                return dish.nome.toLocaleLowerCase().indexOf(term) > -1;
            });
            filteredDishes.concat(dishesByDescr);
            const dishesByTipoPrato = dishes.filter((dish) => {
                return ((dish.tipoPrato || '').toLocaleLowerCase().indexOf(term) >
                    -1);
            });
            filteredDishes.concat(dishesByDescr);
            const dishesBySecao = dishes.filter((dish) => {
                return ((dish.secao || '').toLocaleLowerCase().indexOf(term) > -1);
            });
            filteredDishes.concat(dishesByDescr);
            console.log('\n\n\n', filteredDishes);
            return filteredDishes;
        }));
    }
}
DishesService.ɵfac = function DishesService_Factory(t) { return new (t || DishesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DishesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DishesService, factory: DishesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dishes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dishes.service */ "ANU3");
/* harmony import */ var _dishes_list_dishes_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dishes-list/dishes-list.component */ "a2Jx");




class HomeComponent {
    constructor(dishesService) {
        this.dishesService = dishesService;
        this.todaysSpecialItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
    }
    ngOnInit() {
        this.todaysSpecialItems$ = this.dishesService.getTodaysSpecial();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_dishes_service__WEBPACK_IMPORTED_MODULE_2__["DishesService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 1, consts: [[3, "dishes$"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-dishes-list", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dishes$", ctx.todaysSpecialItems$);
    } }, directives: [_dishes_list_dishes_list_component__WEBPACK_IMPORTED_MODULE_3__["DishesListComponent"]], styles: ["[_nghost-%COMP%] {\n  padding: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICBwYWRkaW5nOiAuNWVtO1xufSJdfQ== */"] });


/***/ }),

/***/ "ER8q":
/*!******************************************************!*\
  !*** ./src/app/shared/material-components.module.ts ***!
  \******************************************************/
/*! exports provided: MaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");



















const modules = [
    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"],
];
class MaterialComponentsModule {
}
MaterialComponentsModule.ɵfac = function MaterialComponentsModule_Factory(t) { return new (t || MaterialComponentsModule)(); };
MaterialComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: MaterialComponentsModule });
MaterialComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[...modules], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](MaterialComponentsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"]] }); })();


/***/ }),

/***/ "RZmA":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_dishes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dishes.service */ "ANU3");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");











function SearchComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r2.nome, " - ", option_r2.descricao, " ");
} }
class SearchComponent {
    constructor(dishesService) {
        this.dishesService = dishesService;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.todaysSpecialItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        this.todaysSpecialItems = [];
        this.options = [];
        this.filteredOptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
    }
    ngOnInit() {
        this.searchCtrl.valueChanges.subscribe((val) => {
            this.onSearch.emit(val);
        });
        // this.filteredOptions = this.searchCtrl.valueChanges
        //   .pipe(
        //     startWith(''),
        //     map(value => typeof value === 'string' ? value : value.name),
        //     map(name => name ? this._filter(name) : this.options.slice())
        //   );
        // this.todaysSpecialItems$ = this.dishesService.getTodaysSpecial();
    }
    displayFn(dish) {
        return dish && dish.nome ? dish.nome : '';
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.options.filter((option) => option.nome.toLowerCase().indexOf(filterValue) === 0);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dishes_service__WEBPACK_IMPORTED_MODULE_3__["DishesService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], outputs: { onSearch: "onSearch" }, decls: 9, vars: 6, consts: [[1, "search-form", "d-flex"], ["type", "text", "placeholder", "Encontre seu prato", 1, "form-control", 3, "formControl", "matAutocomplete"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear"], [1, "material-icons"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-autocomplete", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchComponent_mat_option_7_Template, 2, 3, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchCtrl)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.filteredOptions));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".form-control[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  background-clip: padding-box;\n  border: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.search-form[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0VBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7QUFFRiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuLnNlYXJjaC1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












const _c0 = ["sidenav"];
function AppComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { active: a0 }; };
const _c2 = function () { return { "side-overlay-panel": null }; };
const _c3 = function (a0) { return { outlets: a0 }; };
const _c4 = function (a1) { return ["", a1]; };
class AppComponent {
    constructor(route, router, breakpointObserver, cdr) {
        this.route = route;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.cdr = cdr;
        // I can break the app title so I can show parts of it and show it according to screen size.
        this.appTitle = {
            appName: 'Bendita Ka',
            angularVersion: 'Angular ' + _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].full,
            author: 'Itamar Serafim',
        };
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('side');
        this.opened = true;
        this.mainPageClasses = {
            'default-host': 'default-host',
            'host-p-2em': 'host-p-2em',
            'bg-transparent': 'bg-transparent',
        };
        this.device = '';
        this.breakPointsMap = {
            '(min-width: 480px)': 'xSmall',
            '(min-width: 768px)': 'small',
            '(min-width: 992px)': 'medium',
            '(min-width: 1200px)': 'large',
            '(min-width: 1201px)': 'xlarge',
        };
        this.breakpointObserverSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.breakPoints = {};
        this.brkPoints = [];
        this.hostClass = '';
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this.route), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((route) => route.outlet === 'primary'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((route) => {
            return route.data;
        }))
            .subscribe((data) => {
            const className = data && data.hostClass;
            this.hostClass = this.mainPageClasses[className] || '';
        });
    }
    ngAfterViewInit() {
        this.breakpointObserverSubscription = this.breakpointObserver
            .observe(Object.keys(this.breakPointsMap))
            .subscribe((state) => {
            this.breakPoints = {};
            Object.entries(state.breakpoints)
                .filter((entry) => entry[1])
                .forEach((item) => {
                const brk = this.breakPointsMap[item[0]];
                this.breakPoints[brk] = true;
            });
            if (this.breakPoints.small && this.sidenav) {
                this.sidenav.open();
            }
            else {
                this.sidenav && this.sidenav.close();
            }
            this.brkPoints = Object.keys(state.breakpoints)
                .map((str) => ({ text: str, val: state.breakpoints[str] }))
                .filter(function (item) {
                return item.val;
            });
            const devices = Object.keys(this.breakPoints);
            ['xSmall', 'small', 'medium', 'large', 'xlarge'].forEach((str) => {
                const clazs = devices.indexOf(str) >= 0 ? str : this.device;
                this.device = clazs;
                this.mode.setValue('side');
                if (['xSmall', 'small'].indexOf(this.device) >= 0) {
                    this.mode.setValue('over');
                }
                console.log('this.devi: ', this.device);
            });
            console.log(this.device);
            this.cdr.detectChanges();
        });
    }
    onOverlayActivate($event) {
        console.log('Router outlet activated', $event);
    }
    onOverlayDeactivate($event) {
        console.log('Router outlet deactivated', $event);
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 30, vars: 21, consts: [["color", "primary", 1, "app-top-nav"], ["title", "home", "mat-icon-button", "", "routerLink", "/"], [1, "material-icons"], ["routerLink", "home", 1, "header-title"], [1, "app-name"], [1, "welcome-title"], ["title", "home", "mat-icon-button", "", "routerLink", "/search"], [1, "page-main"], [1, "d-flex", "side-nav-container"], [1, "flex", "page-main-content", "default-host", 3, "ngClass"], ["name", "rxjslearning"], ["name", "primary"], [1, "side-panel-overlay", 3, "ngClass"], [1, "forro"], [1, "side-overlay-panel-content", 3, "ngClass"], [3, "routerLink"], ["name", "side-overlay-panel", 3, "activate"], ["sideOverlayOutlet", "outlet"], ["color", "primary", 1, "example-footer"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " -\u00A0 seja bem vindo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-sidenav-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-sidenav-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Close da baga\u00E7a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "router-outlet", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_26_listener($event) { return ctx.onOverlayActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-toolbar", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AppComponent_span_29_Template, 2, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("app-header ", ctx.device, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.appTitle.appName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hostClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, _r0.isActivated));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, _r0.isActivated));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, _r0.activatedRouteData), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breakPoints == null ? null : ctx.breakPoints.small);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["JsonPipe"]], styles: ["@charset \"UTF-8\";\n.app-top-nav[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n@media (max-width: 480px) {\n  .welcome-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1071;\n}\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  color: #cbbde2;\n  outline: dashed 1px;\n  display: block;\n  padding: 0.5rem 1rem;\n}\n.user-widget-wrap[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.user-title[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 16px;\n}\n@media (max-width: 445px) {\n  .user-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.mr-8[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.user-img[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-family: \"Tangerine\";\n  font-size: 30px;\n  display: flex;\n}\n.header-title[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n@media (min-width: 768px) {\n  .header-title[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n    display: inherit;\n  }\n}\n@media (min-width: 1024px) {\n  .header-title[_ngcontent-%COMP%]   .angular-version[_ngcontent-%COMP%] {\n    display: inherit;\n  }\n}\n@media (max-width: 768px) {\n  .hide-small[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\np[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n.side-nav-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  \n  align-items: stretch;\n  \n  align-content: stretch;\n  \n  flex: 100%;\n}\n.app-side-nav[_ngcontent-%COMP%] {\n  min-width: 240px;\n  width: 240px;\n}\n.app-header[_ngcontent-%COMP%] {\n  left: 0;\n  top: 0;\n  width: 100%;\n  z-index: 99;\n  position: fixed;\n}\n  mat-list.mat-list.mat-list-base.side-menu {\n  position: fixed;\n}\n  mat-sidenav.mat-drawer-over.mat-drawer-opened .mat-list.side-menu {\n  background-color: #3f52b5;\n}\n.page-main[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: calc(100vh - 128px);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  \n  align-items: stretch;\n  \n  align-content: stretch;\n  \n  margin-top: 64px;\n}\n.side-menu[_ngcontent-%COMP%] {\n  padding-top: 0;\n  min-width: 240px;\n}\n.flex[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.page-main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 0.5em;\n  background-color: #f2f2f2;\n}\nmat-sidenav[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.menu-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.menu-icon[_ngcontent-%COMP%]:before {\n  content: \"\u2630\";\n}\n.side-menu[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: 1px;\n}\n.mat-drawer[_ngcontent-%COMP%], .mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.mat-drawer-side[_ngcontent-%COMP%] {\n  border-right: solid 1px transparent;\n  background-color: transparent;\n}\n.side-menu[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #a0aec0 !important;\n  cursor: pointer;\n}\n.header-title[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.side-panel-overlay[_ngcontent-%COMP%] {\n  transform: translateX(3110px);\n  transition: transform 1.5s, background-color 0.5s;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: transparent;\n  z-index: 9999;\n}\n.side-panel-overlay.active[_ngcontent-%COMP%] {\n  display: block;\n  background-color: rgba(0, 0, 0, 0.75);\n  transform: translateX(0px);\n  transition: transform 0.5s;\n}\n.side-overlay-panel-content[_ngcontent-%COMP%] {\n  transform: translateX(3110px);\n  transition: transform 1.5s;\n  top: 0;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  min-width: 70px;\n  background-color: #fff;\n  overflow-y: auto;\n  z-index: 9999;\n}\n.side-overlay-panel-content.active[_ngcontent-%COMP%] {\n  display: block;\n  transform: translateX(0px);\n  transition: transform 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3NoYXJlZC9zdHlsZXMvdXRpbGl0aWVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFHaEI7RUFDRSxlQUFBO0FBREY7QUFJQTtFQUNFO0lBQ0UsYUFBQTtFQURGO0FBQ0Y7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUFGRjtBQUdFO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQURKO0FBSUE7RUFDRSxlQUFBO0FBREY7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUFGO0FDeEJJO0VEc0JKO0lBS0ksYUFBQTtFQUNGO0FBQ0Y7QUFDQTtFQUNFLGlCQUFBO0FBRUY7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUdGO0FBREE7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBSUY7QUFIRTtFQUNFLGVBQUE7QUFLSjtBQ3pESTtFRHlERjtJQUVJLGdCQUFBO0VBRUo7QUFDRjtBQzlESTtFRCtERjtJQUVJLGdCQUFBO0VBQ0o7QUFDRjtBQzdESTtFRGlFRjtJQUNFLGFBQUE7RUFBRjtBQUNGO0FBR0E7RUFDRSxpQkFBQTtBQURGO0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUE2Qiw2QkFBQTtFQUM3QixvQkFBQTtFQUFzQiw4QkFBQTtFQUN0QixzQkFBQTtFQUF3Qiw4QkFBQTtFQUN4QixVQUFBO0FBRUY7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUdGO0FBREE7RUFDRSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUlGO0FBREU7RUFDRSxlQUFBO0FBSUo7QUFGRTtFQUNFLHlCQUFBO0FBSUo7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUE2Qiw2QkFBQTtFQUM3QixvQkFBQTtFQUFzQiw4QkFBQTtFQUN0QixzQkFBQTtFQUF3Qiw4QkFBQTtFQUN4QixnQkFBQTtBQU1GO0FBSkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFPRjtBQUpBO0VBQ0UsT0FBQTtBQU9GO0FBTEE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBUUY7QUFOQTtFQUNFLDZCQUFBO0FBU0Y7QUFOQTtFQUNFLGtCQUFBO0FBU0Y7QUFQQTtFQUNFLFlBQUE7QUFVRjtBQVBBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFVRjtBQVBBOztFQUVFLDZCQUFBO0FBVUY7QUFSQTtFQUNFLG1DQUFBO0VBQ0EsNkJBQUE7QUFXRjtBQVRBO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0FBWUY7QUFWQTtFQUNFLGtCQUFBO0FBYUY7QUFYQTtFQUNFLDZCQUFBO0VBQ0EsaURBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBY0Y7QUFiRTtFQUNFLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUFlSjtBQVpBO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFlRjtBQWRFO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUFnQkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vc2hhcmVkL3N0eWxlcy91dGlsaXRpZXMvX3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9zaGFyZWQvc3R5bGVzL3V0aWxpdGllcy9fbWl4aW5zLnNjc3NcIjtcblxuLmFwcC10b3AtbmF2IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteHNtYWxsLW1heCkge1xuICAud2VsY29tZS10aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDcxO1xuICAubmF2LWxpbmsge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICBjb2xvcjogI2NiYmRlMjtcbiAgICBvdXRsaW5lOiBkYXNoZWQgMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICB9XG59XG4udXNlci13aWRnZXQtd3JhcCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi51c2VyLXRpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBAaW5jbHVkZSBicmVha3BvaW50LW1heCg0NDVweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5tci04IHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4udXNlci1pbWcge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhlYWRlci10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRhbmdlcmluZVwiO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC5hcHAtbmFtZSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIC8vQGluY2x1ZGUgYnJlYWtwb2ludC1taW4oNTgwcHgpIHtcbiAgICAvL2Rpc3BsYXk6IGluaGVyaXQ7XG4gICAgLy99XG4gIH1cbiAgLmF1dGhvciB7XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludC1taW4oJGJyZWFrcG9pbnQtc21hbGwtbWF4KSB7XG4gICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgIH1cbiAgfVxuXG4gIC5hbmd1bGFyLXZlcnNpb24ge1xuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQtbWluKCRicmVha3BvaW50LW1lZGl1bS1tYXgpIHtcbiAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgfVxuICB9XG59XG4vLyBUT0RPOiByZW1vdmUgdGhpc1xuQGluY2x1ZGUgYnJlYWtwb2ludC1tYXgoJGJyZWFrcG9pbnQtc21hbGwtbWF4KSB7XG4gIC5oaWRlLXNtYWxsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbnAge1xuICBmb250LWZhbWlseTogTGF0bztcbn1cblxuLnNpZGUtbmF2LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgLyogYWxpZ24gaXRlbXMgaW4gTWFpbiBBeGlzICovXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoOyAvKiBhbGlnbiBpdGVtcyBpbiBDcm9zcyBBeGlzICovXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7IC8qIEV4dHJhIHNwYWNlIGluIENyb3NzIEF4aXMgKi9cbiAgZmxleDogMTAwJTtcbn1cbi5hcHAtc2lkZS1uYXYge1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICB3aWR0aDogMjQwcHg7XG59XG4uYXBwLWhlYWRlciB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG46Om5nLWRlZXAge1xuICBtYXQtbGlzdC5tYXQtbGlzdC5tYXQtbGlzdC1iYXNlLnNpZGUtbWVudSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG4gIG1hdC1zaWRlbmF2Lm1hdC1kcmF3ZXItb3Zlci5tYXQtZHJhd2VyLW9wZW5lZCAubWF0LWxpc3Quc2lkZS1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MmI1O1xuICB9XG59XG5cbi5wYWdlLW1haW4ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEyOHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAvKiBhbGlnbiBpdGVtcyBpbiBNYWluIEF4aXMgKi9cbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IC8qIGFsaWduIGl0ZW1zIGluIENyb3NzIEF4aXMgKi9cbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDsgLyogRXh0cmEgc3BhY2UgaW4gQ3Jvc3MgQXhpcyAqL1xuICBtYXJnaW4tdG9wOiA2NHB4O1xufVxuLnNpZGUtbWVudSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBtaW4td2lkdGg6IDI0MHB4O1xufVxuXG4uZmxleCB7XG4gIGZsZXg6IDE7XG59XG4ucGFnZS1tYWluLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cbm1hdC1zaWRlbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5tZW51LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWVudS1pY29uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwyNjMwXCI7XG59XG5cbi5zaWRlLW1lbnUgbWF0LWxpc3QtaXRlbSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5tYXQtZHJhd2VyLFxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnNpZGUtbWVudSBtYXQtbGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwYWVjMCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyLXRpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNpZGUtcGFuZWwtb3ZlcmxheSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMTEwcHgpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS41cywgYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gICYuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA3NSUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICB9XG59XG4uc2lkZS1vdmVybGF5LXBhbmVsLWNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzExMHB4KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNXM7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHotaW5kZXg6IDk5OTk7XG4gICYuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgfVxufVxuIiwiQG1peGluIGJyZWFrcG9pbnQtbWluKCRicmVha3BvaW50KSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50KSB7XG4gICAgICAgQGNvbnRlbnQ7XG4gICAgIH1cbiB9XG4gXG4gQG1peGluIGJyZWFrcG9pbnQtbWF4KCRicmVha3BvaW50KSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50KSB7XG4gICAgICAgQGNvbnRlbnQ7XG4gICAgIH1cbiB9XG4gXG4gQG1peGluIGJyZWFrcG9pbnQtYmV0d2VlbigkYnJlYWtwb2ludC1taW4sICRicmVha3BvaW50LW1heCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1taW4pICBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWF4KSB7XG4gICAgICAgQGNvbnRlbnQ7XG4gICAgIH1cbiB9Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_material_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/material-components.module */ "ER8q");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _services_dishes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/dishes.service */ "ANU3");
/* harmony import */ var _components_todays_special_todays_special_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/todays-special/todays-special.component */ "izQN");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search/search.component */ "RZmA");
/* harmony import */ var _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/search-page/search-page.component */ "oeti");
/* harmony import */ var _components_dishes_list_dishes_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dishes-list/dishes-list.component */ "a2Jx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_services_dishes_service__WEBPACK_IMPORTED_MODULE_6__["DishesService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _shared_material_components_module__WEBPACK_IMPORTED_MODULE_3__["MaterialComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_todays_special_todays_special_component__WEBPACK_IMPORTED_MODULE_7__["TodaysSpecialComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"], _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_12__["SearchPageComponent"], _components_dishes_list_dishes_list_component__WEBPACK_IMPORTED_MODULE_13__["DishesListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _shared_material_components_module__WEBPACK_IMPORTED_MODULE_3__["MaterialComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "a2Jx":
/*!*****************************************************************!*\
  !*** ./src/app/components/dishes-list/dishes-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: DishesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishesListComponent", function() { return DishesListComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





function DishesListComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "call");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "textsms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "mail_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.descricao, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("href", ctx_r0.itemWhatsUp(item_r1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "sms://5511961669777?body=Ol\u00E1 desejo encomendar ", item_r1.nome, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "mailto:angelica@email.com?subject=Encomenda card\u00E1pio&body=Ol\u00E1 desejo encomendar ", item_r1.nome, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class DishesListComponent {
    constructor() {
        this.greeting = 'Olá, desejo encomendar o prato ';
        this.dishes$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
    }
    itemWhatsUp(item) {
        let message = `
      ${this.greeting} \n${item.nome} (${item.id})
      `;
        return ('https://api.whatsapp.com/send?phone=+5511961669777&text=' +
            encodeURI(message));
    }
}
DishesListComponent.ɵfac = function DishesListComponent_Factory(t) { return new (t || DishesListComponent)(); };
DishesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DishesListComponent, selectors: [["app-dishes-list"]], inputs: { dishes$: "dishes$" }, decls: 3, vars: 3, consts: [[1, "cards"], ["class", "example-card", 4, "ngFor", "ngForOf"], [1, "example-card"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-mini-fab", "", "color", "green", "aria-label", "Via WhatsApp", "title", "Via WhatsApp"], ["width", "25", "height", "25", "src", "bendita-ka/dist/assets/images/icon-whatsapp.svg"], ["mat-mini-fab", "", "color", "green", "aria-label", "Via celular", "title", "Via celular"], ["href", "tel:+5511961669777"], [1, "material-icons"], ["mat-mini-fab", "", "color", "green", "aria-label", "Via sms celular", "title", "Via sms celular"], [3, "href"], ["mat-mini-fab", "", "color", "sdsd", "aria-label", "Via email", "title", "Via email"], [2, "flex", "1"], ["data-href", "https://developers.facebook.com/docs/plugins/", "data-layout", "button", "data-size", "small", 1, "fb-share-button"], ["mat-mini-fab", "", "color", "white", "aria-label", "Compartilhar", "data-href", "https://developers.facebook.com/docs/plugins/", "data-layout", "button", "data-size", "small", "title", "Compartilhar", 1, "fb-share-button"], ["target", "_blank", "href", "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&src=sdkpreparse", 1, "fb-xfbml-parse-ignore", "material-icons"]], template: function DishesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DishesListComponent_mat_card_1_Template, 36, 5, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.dishes$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1em;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  min-width: 280px;\n  max-width: 420px;\n}\n[_nghost-%COMP%]     .mat-card-header .mat-card-title {\n  font-family: \"Tangerine\";\n  font-size: 32px;\n}\n[_nghost-%COMP%]     .mat-card > .mat-card-actions {\n  display: flex;\n}\n[_nghost-%COMP%]     button a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rpc2hlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUVKO0FBRUU7RUFDRSx3QkFBQTtFQUNBLGVBQUE7QUFDSjtBQUNFO0VBQ0UsYUFBQTtBQUNKO0FBQ0U7RUFDRSxxQkFBQTtBQUNKIiwiZmlsZSI6ImRpc2hlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hdC1jYXJkIHtcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xuICAgIG1heC13aWR0aDogNDIwcHg7XG4gIH1cbn1cbjpob3N0IDo6bmctZGVlcHtcbiAgLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnVGFuZ2VyaW5lJztcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbiAgLm1hdC1jYXJkPi5tYXQtY2FyZC1hY3Rpb25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgYnV0dG9uIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG4iXX0= */"] });


/***/ }),

/***/ "izQN":
/*!***********************************************************************!*\
  !*** ./src/app/components/todays-special/todays-special.component.ts ***!
  \***********************************************************************/
/*! exports provided: TodaysSpecialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodaysSpecialComponent", function() { return TodaysSpecialComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dishes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dishes.service */ "ANU3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function TodaysSpecialComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Pedir: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "call");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "textsms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "mail_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.descricao, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://api.whatsapp.com/send?phone=+5511961669777&text=Ol\u00E1 desejo encomendar ", item_r2.nome, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "sms://5511961669777?body=Ol\u00E1 desejo encomendar ", item_r2.nome, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "mailto:angelica@email.com?subject=Encomenda card\u00E1pio&body=Ol\u00E1 desejo encomendar ", item_r2.nome, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TodaysSpecialComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r4.nome, " ");
} }
class TodaysSpecialComponent {
    constructor(dishesService) {
        this.dishesService = dishesService;
        this.todaysSpecialItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        this.todaysSpecialItems = [];
    }
    ngOnInit() {
        this.todaysSpecialItems$ = this.dishesService.getTodaysSpecial();
    }
}
TodaysSpecialComponent.ɵfac = function TodaysSpecialComponent_Factory(t) { return new (t || TodaysSpecialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_dishes_service__WEBPACK_IMPORTED_MODULE_2__["DishesService"])); };
TodaysSpecialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TodaysSpecialComponent, selectors: [["todays-special"]], decls: 8, vars: 6, consts: [[2, "margin-top", "0"], [1, "cards"], ["class", "example-card", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "example-card"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", "", "color", "primary"], ["mat-mini-fab", "", "color", "green", "aria-label", "Via WhatsApp", "title", "Via WhatsApp"], [3, "href"], ["width", "25", "height", "25", "src", "assets/images/icon-whatsapp.svg"], ["mat-mini-fab", "", "color", "green", "aria-label", "Via celular", "title", "Via celular"], ["href", "tel:+5511961669777"], [1, "material-icons"], ["mat-mini-fab", "", "color", "green", "aria-label", "Via sms celular", "title", "Via sms celular"], ["mat-mini-fab", "", "color", "sdsd", "aria-label", "Via email", "title", "Via email"]], template: function TodaysSpecialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Pratos do dia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TodaysSpecialComponent_mat_card_3_Template, 32, 5, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TodaysSpecialComponent_li_6_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx.todaysSpecialItems$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, ctx.todaysSpecialItems$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1em;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  min-width: 280px;\n  max-width: 420px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RvZGF5cy1zcGVjaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUVKIiwiZmlsZSI6InRvZGF5cy1zcGVjaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hdC1jYXJkIHtcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xuICAgIG1heC13aWR0aDogNDIwcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "oeti":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-page/search-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dishes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dishes.service */ "ANU3");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/search.component */ "RZmA");
/* harmony import */ var _dishes_list_dishes_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dishes-list/dishes-list.component */ "a2Jx");





class SearchPageComponent {
    constructor(dishesService) {
        this.dishesService = dishesService;
        this.filteredItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
    }
    ngOnInit() {
        this.filteredItems$ = this.dishesService.getTodaysSpecial();
    }
    onSearch(searchText) {
        const termText = (searchText || '').toLocaleLowerCase().trim();
        if (!termText) {
            return;
        }
        // console.log('\n\n', termText);
        // TODO: remove special characters here
        this.filteredItems$ = this.dishesService.find(termText);
    }
}
SearchPageComponent.ɵfac = function SearchPageComponent_Factory(t) { return new (t || SearchPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_dishes_service__WEBPACK_IMPORTED_MODULE_2__["DishesService"])); };
SearchPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchPageComponent, selectors: [["app-search-page"]], decls: 2, vars: 1, consts: [[3, "onSearch"], [3, "dishes$"]], template: function SearchPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSearch", function SearchPageComponent_Template_app_search_onSearch_0_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-dishes-list", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dishes$", ctx.filteredItems$);
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _dishes_list_dishes_list_component__WEBPACK_IMPORTED_MODULE_4__["DishesListComponent"]], styles: ["app-search[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXJjaC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoic2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtc2VhcmNoICB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'search', loadChildren: () => __webpack_require__.e(/*! import() | components-search-page-search-page-module */ "components-search-page-search-page-module").then(__webpack_require__.bind(null, /*! ./components/search-page/search-page.module */ "ClE/")).then(m => m.SearchPageModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
webpackJsonp([1,5],{

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 147;


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(169);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AboutPage = (function () {
    function AboutPage() {
    }
    return AboutPage;
}());
AboutPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__(333),
        styles: [__webpack_require__(324)],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations__["a" /* pageTransition */]]
    })
], AboutPage);

//# sourceMappingURL=about-page.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageTransition; });
// import { Component, Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';

var pageTransition = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('showPage', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => on', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in')
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('on => void', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }))
    ])
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { LocalStorage } from "./services/localstorage.service";
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-component',
        template: __webpack_require__(334),
        providers: []
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipe_recipe_index_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recipe_recipe_detail_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recipe_recipe_form_reactive_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_page_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_localstorage_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_toastr_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_services_recipe_guard_service__ = __webpack_require__(383);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Components





// Services



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__recipe_recipe_index_component__["a" /* RecipeIndexComponent */] },
                { path: 'recipe/:id', component: __WEBPACK_IMPORTED_MODULE_7__recipe_recipe_detail_component__["a" /* RecipeDetailComponent */] },
                { path: 'reactive',
                    component: __WEBPACK_IMPORTED_MODULE_8__recipe_recipe_form_reactive_component__["a" /* RecipeFormReactiveComponent */],
                    canDeactivate: [__WEBPACK_IMPORTED_MODULE_12_app_services_recipe_guard_service__["a" /* RecipeEditGuard */]] },
                { path: 'reactive/:id',
                    component: __WEBPACK_IMPORTED_MODULE_8__recipe_recipe_form_reactive_component__["a" /* RecipeFormReactiveComponent */],
                    canDeactivate: [__WEBPACK_IMPORTED_MODULE_12_app_services_recipe_guard_service__["a" /* RecipeEditGuard */]] },
                { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_page_component__["a" /* AboutPage */] },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '**', redirectTo: 'home', pathMatch: 'full' }
            ], { useHash: true })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__recipe_recipe_index_component__["a" /* RecipeIndexComponent */],
            __WEBPACK_IMPORTED_MODULE_7__recipe_recipe_detail_component__["a" /* RecipeDetailComponent */],
            // RecipeForm,
            __WEBPACK_IMPORTED_MODULE_9__about_about_page_component__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_8__recipe_recipe_form_reactive_component__["a" /* RecipeFormReactiveComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_localstorage_service__["a" /* LocalStorage */], __WEBPACK_IMPORTED_MODULE_11__services_toastr_service__["a" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_12_app_services_recipe_guard_service__["a" /* RecipeEditGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = (function () {
    function Recipe(recipeName, serves, ingredients, method, id) {
        if (recipeName === void 0) { recipeName = ''; }
        if (serves === void 0) { serves = '1'; }
        if (ingredients === void 0) { ingredients = [{ ingredient: '' }]; }
        if (method === void 0) { method = ''; }
        this.recipeName = recipeName;
        this.serves = serves;
        this.ingredients = ingredients;
        this.method = method;
        this.id = id;
    }
    return Recipe;
}());

//# sourceMappingURL=recipe.model.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_localstorage_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailComponent; });
/**
 *  This component renders the data for a single recipe
 *  It is only accessible from the recipe-index component with the ID as a URL parameter
 *  @function OnInit - uses the ID to get the recipe from local storage service
 *  @function deleteRecipe - removes recipe from local storage
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(route, router, store, toastr) {
        this.route = route;
        this.router = router;
        this.store = store;
        this.toastr = toastr;
        console.log(this.route.snapshot.params['id']);
        this.id = this.route.snapshot.params['id'];
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        this.recipe = this.store.getRecipeById(this.id);
        console.log(this.recipe);
    };
    RecipeDetailComponent.prototype.deleteRecipe = function (id) {
        this.store.deleteRecipeById(this.id);
        this.router.navigate(['/recipes']);
        this.toastr.info('Recipe deleted!');
    };
    return RecipeDetailComponent;
}());
RecipeDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__(335),
        styles: [__webpack_require__(325)],
        animations: [__WEBPACK_IMPORTED_MODULE_4__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_localstorage_service__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_localstorage_service__["a" /* LocalStorage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */]) === "function" && _d || Object])
], RecipeDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=recipe-detail.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_recipe_model__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeFormReactiveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RecipeFormReactiveComponent = (function () {
    function RecipeFormReactiveComponent(formBuilder, store, router, route, toastr) {
        this.formBuilder = formBuilder;
        this.store = store;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.formMode = 'Add';
        this.recipe = new __WEBPACK_IMPORTED_MODULE_3__models_recipe_model__["a" /* Recipe */](); // the data model
        this.validationMessages = {
            required: 'This field is required',
            minlength: 'Must be at least three characters',
            maxlength: 'Maximum length is 1000 characters'
        };
    }
    RecipeFormReactiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        // define the default form model
        this.recipeForm = this.formBuilder.group({
            recipeName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(50)]],
            serves: '1',
            method: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(1000)]],
            ingredients: this.formBuilder.array([this.buildIngredient()])
        });
        // create a separate reference for the form array
        this.ingredients = this.recipeForm.get('ingredients');
        // set listeners on recipe name and method fields for validation
        var recipeNameCtrl = this.recipeForm.get('recipeName');
        recipeNameCtrl.valueChanges.debounceTime(1000).subscribe(function (value) {
            console.log({ recipeNameCtrl: recipeNameCtrl });
            _this.setMessage(recipeNameCtrl, 'recipeName');
        });
        var methodCtrl = this.recipeForm.get('method');
        methodCtrl.valueChanges.debounceTime(1000).subscribe(function (value) {
            console.log({ methodCtrl: methodCtrl });
            _this.setMessage(methodCtrl, 'method');
        });
        // if form loads for editing a recipe:
        this.urlId = this.route.snapshot.params['id'];
        if (this.urlId) {
            this.patchForm();
        }
    };
    // create a FormGroup object for ingredient and amount
    RecipeFormReactiveComponent.prototype.buildIngredient = function (ingr, amt) {
        if (ingr === void 0) { ingr = ''; }
        if (amt === void 0) { amt = ''; }
        return this.formBuilder.group({
            ingredient: [ingr, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)]],
            amount: [amt, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]]
        });
    };
    // click handlers: add or remove a FormGroup object to / from the ingredients array (will render in UI)
    RecipeFormReactiveComponent.prototype.addIngredient = function () {
        console.log(this.ingredients);
        this.ingredients.push(this.buildIngredient());
    };
    RecipeFormReactiveComponent.prototype.removeIngredient = function () {
        this.ingredients.controls.pop();
    };
    // set validation messages from form control object
    RecipeFormReactiveComponent.prototype.setMessage = function (ctrl, name) {
        var _this = this;
        if (name === 'recipeName') {
            this.recipeNameError = '';
            if ((ctrl.touched || ctrl.dirty) && ctrl.errors) {
                this.recipeNameError = Object.keys(ctrl.errors).map(function (key) {
                    return _this.validationMessages[key];
                }).join(' ');
            }
        }
        if (name === 'method') {
            this.methodError = '';
            if ((ctrl.touched || ctrl.dirty) && ctrl.errors) {
                this.methodError = Object.keys(ctrl.errors).map(function (key) {
                    return _this.validationMessages[key];
                }).join(' ');
            }
        }
    };
    // in edit mode - update Form Model from Recipe object
    RecipeFormReactiveComponent.prototype.patchForm = function () {
        var _this = this;
        this.formMode = 'Edit';
        this.recipe = this.store.getRecipeById(this.urlId);
        console.log('recipe', this.recipe);
        // patch primitive properties
        this.recipeForm.patchValue({
            recipeName: this.recipe.recipeName,
            serves: this.recipe.serves,
            id: this.recipe.id
        });
        // patch the form array
        this.recipe.ingredients.forEach(function (item) {
            var ingr = _this.buildIngredient(item.ingredient, item.amount);
            _this.ingredients.push(ingr);
        });
        // remove the empty control
        this.ingredients.controls.shift();
        console.log('recipe form after patch', this.recipeForm.value);
    };
    RecipeFormReactiveComponent.prototype.save = function (recipeForm) {
        if (this.formMode === 'Add') {
            this.recipe = this.recipeForm.value;
            this.store.saveNewRecipe(this.recipe);
            this.exit('Recipe saved!');
        }
        else {
            // update the recipe with any new values
            this.recipe = Object.assign({}, this.recipe, this.recipeForm.value);
            this.store.editRecipe(this.recipe);
            this.exit('Recipe added!');
        }
    };
    RecipeFormReactiveComponent.prototype.exit = function (message) {
        console.log('id', this.recipe.id);
        this.formMode = 'Saved';
        this.router.navigate(['/recipe', this.recipe.id]);
        this.toastr.success(message);
    };
    return RecipeFormReactiveComponent;
}());
RecipeFormReactiveComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-recipe-form-reactive',
        template: __webpack_require__(336),
        styles: [__webpack_require__(326)],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__["a" /* LocalStorage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_toastr_service__["a" /* ToastrService */]) === "function" && _e || Object])
], RecipeFormReactiveComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=recipe-form-reactive.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_localstorage_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeIndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeIndexComponent = (function () {
    function RecipeIndexComponent(_localStorage) {
        this._localStorage = _localStorage;
    }
    RecipeIndexComponent.prototype.ngOnInit = function () {
        console.log('INIT RECIPE INDEX');
        console.log(__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* pageTransition */]);
        this.recipes = this._localStorage.initializeData();
        this.numberOfRecipes = this.recipes.length;
        this.plural = this.numberOfRecipes === 1 ? '' : 's';
    };
    return RecipeIndexComponent;
}());
RecipeIndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__(337),
        styles: [__webpack_require__(327)],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_localstorage_service__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_localstorage_service__["a" /* LocalStorage */]) === "function" && _a || Object])
], RecipeIndexComponent);

var _a;
//# sourceMappingURL=recipe-index.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "section {\r\n  background-color: rgba(255,255,255, 0.8);\r\n  padding: 25px;\r\n  border-radius: 5px;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.8em;\r\n  margin: 10px 0 20px 0;\r\n}\r\n\r\np {\r\n  line-height: 1.5em;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* p:last-child {\r\n  margin-top: 30px;\r\n} */\r\n\r\nul {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n\r\n/* MEDIA QUERIES */\r\n\r\n@media screen and (max-width: 500px) {\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "/* PANEL STYLES */\r\n\r\n.panel-heading {\r\n  background-color: #118AB2;\r\n}\r\n\r\n.panel-heading > h1 {\r\n  padding: 0;\r\n  margin: 5px 0;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.panel-body {\r\n  padding: 25px;\r\n}\r\n\r\n.panel-body h2 {\r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n}\r\n\r\n.rb-serves {\r\n  font-style: italic;\r\n}\r\n\r\n.rb-table-cell {\r\n  padding: 15px 0 15px 15px;\r\n}\r\n\r\n.rb-method p {\r\n  white-space: pre-line;\r\n  line-height: 1.8em;\r\n}\r\n\r\n/* BUTTON STYLES */\r\n\r\nbutton.btn-lg {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btn-danger {\r\n  background-color: #EF476F;\r\n}\r\n\r\n.btn-back {\r\n  float: right;\r\n}\r\n\r\n.rb-index-btns > button:first-child {\r\n  margin-right: 5px !important;\r\n}\r\n\r\n\r\n/* MEDIA QUERIES */\r\n\r\n@media screen and (max-width: 500px) {\r\n  button.btn.btn-lg {\r\n    display: block;\r\n    float: left;\r\n    width: 100%;\r\n  }\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "\r\n/* PANEL STYLES */\r\n\r\n.panel-heading {\r\n  background-color: #118AB2;\r\n}\r\n\r\n.panel-heading > h3 {\r\n  margin: 3px;\r\n}\r\n\r\ndiv.panel-body {\r\n  padding: 30px;\r\n}\r\n\r\n\r\n/* FORM STYLES */\r\n\r\nform label {\r\n  color: #118AB2\r\n}\r\n\r\nhr {\r\n  /* border: 0; */\r\n  height: 1px;\r\n  background-color: lightgrey;\r\n}\r\n\r\n.rb-required-label {\r\n  color: darkred;\r\n  float: right;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.rb-radio-label {\r\n  color: #118AB2\r\n}\r\n\r\n.rb-radio-btns label {\r\n  margin-right: 10px;\r\n}\r\n\r\n.rb-ingredient-input,\r\n.rb-amount-input {\r\n  margin-top: 5px;\r\n  display: inline-block;\r\n\r\n}\r\n\r\n.rb-ingredient-input {\r\n  width: 40%;\r\n}\r\n\r\n.rb-amount-input {\r\n  width: 40%;\r\n}\r\n\r\n.rb-ingredient-label {\r\n  width: 40%;\r\n}\r\n\r\n.rb-amount-label {\r\n  width: 30%;\r\n}\r\n\r\n.ingredientBtn {\r\n  margin-top: 10px;\r\n}\r\n\r\n.rb-form-btns > button:first-child {\r\n  margin-right: 5px;\r\n}\r\n\r\ndiv.alert.alert-danger {\r\n  height: 30px;\r\n  font-size: 0.8em;\r\n  padding: 5px;\r\n}\r\n\r\n\r\n/* MEDIA QUERIES */\r\n\r\n@media only screen and (max-width: 500px) {\r\n\r\n  div.panel-body {\r\n    padding: 10px;\r\n  }\r\n\r\n  .rb-ingredient-input {\r\n    width: 50%;\r\n  }\r\n\r\n  .rb-amount-input {\r\n    width: 45%;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, ".myTableCell {\r\n  padding: 15px 0 15px 15px;\r\n}\r\n\r\n.panel-heading {\r\n  background-color: #118AB2;\r\n}\r\n\r\n.panel-heading > h3 {\r\n  margin: 3px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = "<section [@showPage]=\"'on'\">\r\n  <h1>Recipe Book</h1>\r\n  <p>This application was built with Angular 4.0, Typescript 2.2, and Bootstrap 3.3.7 to meet the criteria of the FreeCodeCamp challenge\r\n    <a href=\"https://www.freecodecamp.com/challenges/build-a-recipe-box\" target=\"_blank\" rel=\"noopener noreferrer\">Build a Recipe Box</a>.\r\n    An alternative version of this app, built with React, can be seen\r\n    <a href=\"https://recipe-book-arwl.herokuapp.com\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.</p>\r\n    <p>Application features:</p>\r\n    <ul>\r\n      <li>Application data cached in browser local storage</li>\r\n      <li>Form implemented using the Angular reactive form style</li>\r\n      <li>Notifications created with Toastr</li>\r\n      <li>Page animations require the @angular/animations module</li>\r\n    </ul>\r\n    <p>The source code can be found on\r\n      <a href=\"https://github.com/ARWL2016/recipe-book-app-ng\" target=\"_blank\" rel=\"noopener noreferrer\">Github</a>.\r\n      For more projects, see my <a href=\"https://alistair-willis.herokuapp.com/overview\">portfolio</a>.\r\n    </p>\r\n    <p><b>Coded by Alistair Willis</b></p>\r\n</section>\r\n"

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = "    <header>\r\n      <nav class=\"navbar navbar-default\">\r\n        <div class=\"container-fluid\">\r\n\r\n          <a [routerLink]=\"['/home']\" class=\"navbar-brand\"><b>RECIPE BOOK</b></a>\r\n            <ul class=\"nav nav-tabs\">\r\n              <li><a [routerLink]=\"['/home']\">RECIPES</a></li>\r\n              <li><a [routerLink]=\"['/reactive']\">ADD RECIPE</a></li>\r\n              <li><a [routerLink]=\"['/about']\">ABOUT</a></li>\r\n            </ul>\r\n        </div>\r\n      </nav>\r\n    </header>\r\n\r\n    <main class=\"page-wrapper\">\r\n      <div class=\"container\" >\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </main>\r\n"

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports = "<section [@showPage]=\"'on'\">\r\n  <div class=\"panel panel-primary\" >\r\n    <div class=\"panel-heading\">\r\n      <h1>{{recipe.recipeName}}</h1>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n      <p class=\"rb-serves\">serves {{recipe.serves}}</p>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th><h2>Ingredients</h2></th>\r\n          <th><h2>Amount</h2></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of recipe.ingredients\">\r\n          <td class=\"rb-table-cell\">{{item.ingredient}}</td>\r\n          <td class=\"rb-table-cell\">{{item.amount}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"rb-method\">\r\n      <p>\r\n         {{recipe.method}}\r\n      </p>\r\n\r\n    </div>\r\n\r\n    </div>\r\n  </div>\r\n  <!-- end of panel -->\r\n\r\n  <div class=\"rb-index-btns\">\r\n    <button class=\"btn btn-lg btn-warning\" [routerLink]=\"['/reactive', recipe.id]\">Edit Recipe</button>\r\n    <button class=\"btn btn-lg btn-danger\" (click)=\"deleteRecipe()\">Delete Recipe</button>\r\n    <button [routerLink]=\"['/recipes']\" class=\"btn btn-lg btn-success btn-back\">Back to Recipe List</button>\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = "<section [@showPage]=\"'on'\">\r\n  <form\r\n    (ngSubmit)=\"save()\"\r\n    [formGroup]=\"recipeForm\"\r\n    class=\"myForm\"\r\n    novalidate >\r\n\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      <h3>{{formMode}} Recipe <span *ngIf=\"formMode==='Edit'\">- {{recipe.recipeName}}</span></h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n\r\n    <!-- recipe name: field -->\r\n    <div class=\"form-group\" [ngClass]=\"{'has-error': recipeNameError}\" >\r\n      <label for=\"recipeNameId\" class=\"control-label\">Recipe Name</label>\r\n      <span class=\"rb-required-label\">required</span>\r\n      <input\r\n        id=\"recipeNameId\" type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"e.g. Spaghetti Carbonara\"\r\n        formControlName=\"recipeName\">\r\n      <div class=\"alert alert-danger\" *ngIf=\"recipeNameError\" >{{ recipeNameError }}</div>\r\n    </div>\r\n\r\n\r\n    <!-- serves: radio buttons -->\r\n    <label class=\"rb-radio-label\">Serves</label>\r\n    <div class=\"rb-radio-btns\">\r\n      <input type=\"radio\" id=\"serves1\" value=\"1\" formControlName=\"serves\">\r\n      <label for=\"serves1\">1</label>\r\n\r\n      <input type=\"radio\" id=\"serves2\" value=\"2\" formControlName=\"serves\">\r\n      <label for=\"serves2\">2</label>\r\n\r\n      <input type=\"radio\" id=\"serves4\" value=\"4\" formControlName=\"serves\">\r\n      <label for=\"serves4\">4</label>\r\n\r\n      <input type=\"radio\" id=\"serves6\" value=\"6\" formControlName=\"serves\">\r\n      <label for=\"serves6\">6</label>\r\n\r\n      <input type=\"radio\" id=\"serves8\" value=\"8\" formControlName=\"serves\">\r\n      <label for=\"serves6\">8</label>\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <!-- ingredients, amount: input array -->\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{'has-error': recipeForm.get('ingredients').errors}\">\r\n      <label class=\"control-label rb-ingredient-label\">Ingredients</label>\r\n      <label class=\"control-label rb-amount-label\">Amount</label>\r\n\r\n      <div formArrayName=\"ingredients\" *ngFor=\"let ingredient of ingredients.controls; let i = index\">\r\n        <div [formGroupName]=\"i\">\r\n          <input\r\n            class=\"form-control rb-ingredient-input\"\r\n            id=\"{{ 'ingredient' + i }}\"\r\n            placeholder=\"e.g. Pasta\"\r\n            formControlName=\"ingredient\">\r\n          <input\r\n            class=\"form-control rb-amount-input\"\r\n            id=\"{{ 'amount' + i }}\"\r\n            placeholder=\"e.g. 500g\"\r\n            formControlName=\"amount\">\r\n        </div>\r\n      </div>\r\n      <button\r\n        class=\"btn ingredientBtn\"\r\n        type=\"button\"\r\n        [disabled]=\"ingredients.invalid\"\r\n        (click)=\"addIngredient()\">Add New\r\n      </button>\r\n      <button\r\n        class=\"btn ingredientBtn\"\r\n        type=\"button\"\r\n        [disabled]=\"ingredients.length < 2\"\r\n        (click)=\"removeIngredient()\">Remove\r\n      </button>\r\n        <!-- <div class=\"alert alert-danger\" *ngIf=\"inp2.touched && inp2.invalid\" [@invalid]=\"'displayed'\" >You must enter at least one ingredient</div> -->\r\n    </div>\r\n    <!-- end ingredient-fields -->\r\n    <hr>\r\n\r\n    <!-- method: form input -->\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"method\" class=\"control-label\">Method</label>\r\n      <span class=\"rb-required-label\">required</span>\r\n      <textarea\r\n        id=\"method\"\r\n        rows=\"5\"\r\n        formControlName=\"method\"\r\n        class=\"form-control\">\r\n      </textarea>\r\n      <div class=\"alert alert-danger\" *ngIf=\"methodError\" >{{ methodError }}</div>\r\n    </div>\r\n\r\n\r\n    </div>\r\n    <!-- end of .panel-body -->\r\n\r\n  </div>\r\n    <div class=\"rb-form-btns\">\r\n      <button type=\"submit\"\r\n              class=\"btn btn-lg btn-primary\"\r\n              [disabled]=\"!recipeForm.valid\">\r\n        Save\r\n      </button>\r\n      <button [routerLink]=\"['/recipes']\" class=\"btn btn-lg btn-warning\">Cancel</button>\r\n    </div>\r\n  </form>\r\n</section>\r\n\r\n    <!-- FORM MODEL OUTPUT -->\r\n      <!-- <br>Dirty: {{ recipeForm.dirty }}\r\n      <br>touched: {{ recipeForm.touched }}\r\n      <br>valid: {{ recipeForm.valid }}\r\n      <br>value: {{ recipeForm.value | json }}\r\n      <br>name valid: {{ recipeForm.get('recipeName').valid }} -->\r\n\r\n\r\n"

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = "<section [@showPage]=\"'on'\">\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      <h3>Recipe List</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th><h4>You have {{numberOfRecipes}} recipe{{plural}}. Click below to see the details.</h4></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let recipe of recipes\">\r\n            <td class=\"myTableCell\"><a [routerLink]=\"['/recipe', recipe.id]\">{{recipe.recipeName}} {{recipe.id}}</a></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      </div>\r\n    </div>\r\n\r\n  <button class=\"btn btn-lg btn-primary\" [routerLink]=\"['/reactive']\">Add New Recipe</button>\r\n</section>\r\n"

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(148);


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeEditGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RecipeEditGuard = (function () {
    function RecipeEditGuard() {
    }
    RecipeEditGuard.prototype.canDeactivate = function (component) {
        // don't check when form is submitted - only on click links or cancel
        if (component.formMode !== 'Saved' && component.recipeForm.dirty) {
            return confirm('Navigate away and lose changes?');
        }
        return true;
    };
    return RecipeEditGuard;
}());
RecipeEditGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], RecipeEditGuard);

//# sourceMappingURL=recipe-guard.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
/**
 *  This service contains basic CRUD functions for setting and getting recipes to local storage
 *  If LS is empty when the app loads, the starter recipes will be loaded as examples
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LocalStorage = (function () {
    function LocalStorage() {
        this.starterRecipes = [
            {
                recipeName: 'Pumpkin Pie',
                serves: '4',
                ingredients: [
                    { ingredient: 'pumpkin', amount: '1 15oz can' },
                    { ingredient: 'condensed milk', amount: '1 14oz can' },
                    { ingredient: 'eggs', amount: '2 large' },
                    { ingredient: 'ground cinnamon', amount: '1 tsp' },
                    { ingredient: 'ground ginger', amount: '1/2 tsp' },
                    { ingredient: 'condensed milk', amount: '1 14oz can' },
                    { ingredient: 'condensed milk', amount: '1 14oz can' },
                ],
                method: '',
                id: __WEBPACK_IMPORTED_MODULE_1_underscore__["uniqueId"]()
            },
        ];
    }
    // return recipe list or set from JSON file if empty
    LocalStorage.prototype.initializeData = function () {
        var recipeList = this.getRecipes();
        console.log({ recipeList: recipeList });
        if (recipeList.length < 1) {
            this.setRecipes(this.starterRecipes);
        }
        return this.getRecipes();
    };
    // get all recipes from LS
    LocalStorage.prototype.getRecipes = function () {
        return JSON.parse(localStorage.getItem('recipeList')) || [];
    };
    // set LS with recipe list
    LocalStorage.prototype.setRecipes = function (list) {
        localStorage.setItem('recipeList', JSON.stringify(list));
    };
    // get a single recipe
    LocalStorage.prototype.getRecipeById = function (id) {
        return (this.getRecipes()
            .filter(function (recipe) { return recipe.id === id; }))[0];
    };
    // save a recipe without an id (a new recipe)
    LocalStorage.prototype.saveNewRecipe = function (recipe) {
        recipe.id = __WEBPACK_IMPORTED_MODULE_1_underscore__["uniqueId"]();
        // recipe.ingredientsArray = recipe.ingredientsString.split(',');
        var recipeList = this.getRecipes();
        recipeList.push(recipe);
        this.setRecipes(recipeList);
    };
    // remove and replace a record
    LocalStorage.prototype.editRecipe = function (editedRecipe) {
        // remove the old record
        var filteredList = this.getRecipes()
            .filter(function (recipe) { return recipe.id !== editedRecipe.id; });
        // editedRecipe.ingredientsArray = editedRecipe.ingredientsString.split(',');
        filteredList.push(editedRecipe);
        this.setRecipes(filteredList);
    };
    // remove recipe with an ID
    LocalStorage.prototype.deleteRecipeById = function (id) {
        var filteredList = this.getRecipes().filter(function (recipe) { return recipe.id !== id; });
        this.setRecipes(filteredList);
    };
    return LocalStorage;
}());
LocalStorage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], LocalStorage);

//# sourceMappingURL=localstorage.service.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

toastr.options = {
    "positionClass": "toast-top-right",
    "timeOut": "2500",
};
var ToastrService = (function () {
    function ToastrService() {
    }
    ToastrService.prototype.success = function (message, title) {
        toastr.success(message, title);
    };
    ToastrService.prototype.info = function (message, title) {
        toastr.info(message, title);
    };
    ToastrService.prototype.warning = function (message, title) {
        toastr.warning(message, title);
    };
    ToastrService.prototype.error = function (message, title) {
        toastr.error(message, title);
    };
    return ToastrService;
}());
ToastrService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ToastrService);

//# sourceMappingURL=toastr.service.js.map

/***/ })

},[379]);
//# sourceMappingURL=main.bundle.js.map
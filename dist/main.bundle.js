webpackJsonp([1,5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
        template: __webpack_require__(181),
        styles: [__webpack_require__(172)]
    })
], AboutPage);

//# sourceMappingURL=about-page.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageTransition; });
// import { Component, Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';

var pageTransition = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('showPage', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => on', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'scale(1.0)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(400)
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('on => void', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }))
    ])
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
        selector: 'rb-app',
        template: __webpack_require__(182),
        providers: []
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipe_recipe_index_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recipe_recipe_detail_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_page_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_localstorage_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_toastr_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__recipe_recipe_form_reactive_component__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { RecipeForm } from './recipe/recipe-form.component';





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
                { path: 'recipes', component: __WEBPACK_IMPORTED_MODULE_6__recipe_recipe_index_component__["a" /* RecipeIndexComponent */] },
                { path: 'recipe/:id', component: __WEBPACK_IMPORTED_MODULE_7__recipe_recipe_detail_component__["a" /* RecipeDetailComponent */] },
                // { path: 'form', component: RecipeForm },
                { path: 'reactive', component: __WEBPACK_IMPORTED_MODULE_11__recipe_recipe_form_reactive_component__["a" /* RecipeFormReactiveComponent */] },
                { path: 'reactive/:id', component: __WEBPACK_IMPORTED_MODULE_11__recipe_recipe_form_reactive_component__["a" /* RecipeFormReactiveComponent */] },
                // { path: 'form/:id', component: RecipeForm },
                { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_page_component__["a" /* AboutPage */] },
                { path: '', redirectTo: 'recipes', pathMatch: 'full' },
                { path: '**', redirectTo: 'recipes', pathMatch: 'full' }
            ], { useHash: true })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__recipe_recipe_index_component__["a" /* RecipeIndexComponent */],
            __WEBPACK_IMPORTED_MODULE_7__recipe_recipe_detail_component__["a" /* RecipeDetailComponent */],
            // RecipeForm,
            __WEBPACK_IMPORTED_MODULE_8__about_about_page_component__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_11__recipe_recipe_form_reactive_component__["a" /* RecipeFormReactiveComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_localstorage_service__["a" /* LocalStorage */], __WEBPACK_IMPORTED_MODULE_10__services_toastr_service__["a" /* ToastrService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = (function () {
    function Recipe(recipeName, serves, ingredients, id) {
        if (recipeName === void 0) { recipeName = ''; }
        if (serves === void 0) { serves = '1'; }
        if (ingredients === void 0) { ingredients = [{ ingredient: '' }]; }
        this.recipeName = recipeName;
        this.serves = serves;
        this.ingredients = ingredients;
        this.id = id;
    }
    return Recipe;
}());

//# sourceMappingURL=recipe.model.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_localstorage_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__ = __webpack_require__(37);
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
        template: __webpack_require__(183),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_localstorage_service__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_localstorage_service__["a" /* LocalStorage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */]) === "function" && _d || Object])
], RecipeDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=recipe-detail.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_recipe_model__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
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
            minlength: 'Must be at least three characters'
        };
    }
    RecipeFormReactiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        // define the default form model
        this.recipeForm = this.formBuilder.group({
            recipeName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(50)]],
            serves: '1',
            ingredients: this.formBuilder.array([this.buildIngredient()])
        });
        // create a separate reference for the form array
        this.ingredients = this.recipeForm.get('ingredients');
        // set listener on recipe name field for validation
        var recipeNameCtrl = this.recipeForm.get('recipeName');
        recipeNameCtrl.valueChanges.debounceTime(1000).subscribe(function (value) {
            console.log({ recipeNameCtrl: recipeNameCtrl });
            _this.setMessage(recipeNameCtrl, 'recipeName');
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
        this.router.navigate(['/recipe', this.recipe.id]);
        this.toastr.success(message);
    };
    return RecipeFormReactiveComponent;
}());
RecipeFormReactiveComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-recipe-form-reactive',
        template: __webpack_require__(184),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__["a" /* LocalStorage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_toastr_service__["a" /* ToastrService */]) === "function" && _e || Object])
], RecipeFormReactiveComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=recipe-form-reactive.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_localstorage_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(108);
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
        this.recipes = this._localStorage.initializeData();
        this.numberOfRecipes = this.recipes.length;
        this.plural = this.numberOfRecipes === 1 ? '' : 's';
    };
    return RecipeIndexComponent;
}());
RecipeIndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__(185),
        styles: [__webpack_require__(175)],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_localstorage_service__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_localstorage_service__["a" /* LocalStorage */]) === "function" && _a || Object])
], RecipeIndexComponent);

var _a;
//# sourceMappingURL=recipe-index.component.js.map

/***/ }),

/***/ 115:
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

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".myAboutPage {\r\n  background-color: rgba(255,255,255, 0.8); \r\n  padding: 25px; \r\n  border-radius: 5px; \r\n}\r\n\r\n.myAboutPage h2 {\r\n  font-size: 2em; \r\n  margin: 10px 0 20px 0; \r\n}\r\n\r\n.myAboutPage p {\r\n  font-size: 1.2em; \r\n  line-height: 1.5em; \r\n  margin-bottom: 10px; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".panel-heading {\r\n  background-color: #118AB2;\r\n}\r\n\r\n.panel-heading > h3 {\r\n  padding: 0;\r\n  margin: 5px 0;\r\n}\r\n\r\n.rb-serves {\r\n  font-style: italic;\r\n}\r\n\r\n.myTableCell {\r\n  padding: 15px 0 15px 15px;\r\n}\r\n\r\n.btn-danger {\r\n  background-color: #EF476F;\r\n}\r\n\r\n.btn-back {\r\n  float: right;\r\n}\r\n\r\n.rb-index-btns > button:first-child {\r\n  margin-right: 5px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "div.alert.alert-danger {\r\n  height: 30px;\r\n  font-size: 0.8em;\r\n  padding: 5px;\r\n}\r\n\r\n.panel-heading {\r\n  background-color: #118AB2;\r\n}\r\n\r\n.panel-heading > h3 {\r\n  margin: 3px;\r\n}\r\n\r\n.rb-radio-btns label {\r\n  margin-right: 10px;\r\n}\r\n\r\n.rb-ingredient-input,\r\n.rb-amount-input {\r\n  margin-top: 5px;\r\n  display: inline-block;\r\n\r\n}\r\n\r\n.rb-ingredient-input {\r\n  width: 40%;\r\n}\r\n\r\n.rb-amount-input {\r\n  width: 30%;\r\n}\r\n\r\n.rb-ingredient-label {\r\n  width: 40%;\r\n}\r\n\r\n.rb-amount-label {\r\n  width: 30%;\r\n}\r\n\r\n.ingredientBtn {\r\n  margin-top: 10px;\r\n}\r\n\r\n.rb-form-btns > button:first-child {\r\n  margin-right: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".myTableCell {\r\n  padding: 15px 0 15px 15px;\r\n}\r\n\r\n.panel-heading {\r\n  background-color: #118AB2;\r\n}\r\n\r\n.panel-heading > h3 {\r\n  margin: 3px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<div class=\"myAboutPage\">\r\n<h2>Angular 2 Recipe Book App</h2>\r\n<p>This application was built with Angular 2, Typescript, and Bootstrap to meet the criteria of the FreeCodeCamp challenge\r\n  <a href=\"https://www.freecodecamp.com/challenges/build-a-recipe-box\" target=\"_blank\">Build a Recipe Box</a>.\r\n  An alternative version of this app, built with React, can be seen\r\n  <a href=\"https://recipe-book-arwl.herokuapp.com\" target=\"_blank\">here</a>.</p>\r\n  <p>The data for this application is kept in the browser local storage, and will persist between sessions.</p>\r\n  <p>The form is implemented using the reactive form style.</p>\r\n  <p>The source code for can be found on <a href=\"https://github.com/ARWL2016/recipe-book-app-ng\" target=\"_blank\">Github</a>.</p>\r\n  <p><b>Coded by Alistair Willis</b></p>\r\n</div>\r\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "    <div>\r\n      <nav class=\"navbar navbar-default\">\r\n        <div class=\"myNavbar\">\r\n          <a class=\"navbar-brand\"><b>RECIPE BOOK</b></a>\r\n            <ul class=\"nav navbar-nav\">\r\n              <li><a [routerLink]=\"['/recipes']\">RECIPES</a></li>\r\n              <li><a [routerLink]=\"['/reactive']\">ADD RECIPE</a></li>\r\n              <li><a [routerLink]=\"['/about']\">ABOUT</a></li>\r\n\r\n          </ul>\r\n          <ul class=\"nav navbar-nav about-link\">\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"container myContainer\" >\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" >\r\n  <div class=\"panel-heading\">\r\n    <h3>{{recipe.recipeName}}</h3>\r\n  </div>\r\n\r\n  <div class=\"panel-body\">\r\n    <p class=\"rb-serves\">serves {{recipe.serves}}</p>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th><h4>Ingredients</h4></th>\r\n        <th><h4>Amount</h4></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of recipe.ingredients\">\r\n        <td class=\"myTableCell\">{{item.ingredient}}</td>\r\n        <td class=\"myTableCell\">{{item.amount}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"rb-index-btns\">\r\n  <button class=\"btn btn-lg btn-warning\" [routerLink]=\"['/reactive', recipe.id]\">Edit Recipe</button>\r\n  <button class=\"btn btn-lg btn-danger\" (click)=\"deleteRecipe()\">Delete Recipe</button>\r\n  <button [routerLink]=\"['/recipes']\" class=\"btn btn-lg btn-success btn-back\">Back to Recipe List</button>\r\n</div>\r\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<form\r\n  (ngSubmit)=\"save()\"\r\n  [formGroup]=\"recipeForm\"\r\n  class=\"myForm\"\r\n  novalidate >\r\n\r\n<div class=\"panel panel-primary\">\r\n  <div class=\"panel-heading\">\r\n    <h3>{{formMode}} Recipe <span *ngIf=\"formMode==='Edit'\">- {{recipe.recipeName}}</span></h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n\r\n  <!-- recipe name field -->\r\n  <div class=\"form-group\" [ngClass]=\"{'has-error': recipeNameError}\" >\r\n    <label for=\"recipeNameId\" class=\"control-label myFormLabel\">Recipe Name</label>\r\n    <input\r\n      id=\"recipeNameId\" type=\"text\"\r\n      class=\"form-control myRecipeNameInput\"\r\n      placeholder=\"enter a recipe name\"\r\n      formControlName=\"recipeName\">\r\n    <div class=\"alert alert-danger\" *ngIf=\"recipeNameError\" >{{ recipeNameError }}</div>\r\n  </div>\r\n\r\n  <!-- serves radio buttons -->\r\n  <label>Serves</label>\r\n  <div class=\"rb-radio-btns\">\r\n    <input type=\"radio\" id=\"serves1\" value=\"1\" formControlName=\"serves\">\r\n    <label for=\"serves1\">1</label>\r\n\r\n    <input type=\"radio\" id=\"serves2\" value=\"2\" formControlName=\"serves\">\r\n    <label for=\"serves2\">2</label>\r\n\r\n    <input type=\"radio\" id=\"serves4\" value=\"4\" formControlName=\"serves\">\r\n    <label for=\"serves4\">4</label>\r\n\r\n    <input type=\"radio\" id=\"serves6\" value=\"6\" formControlName=\"serves\">\r\n    <label for=\"serves6\">6</label>\r\n\r\n    <input type=\"radio\" id=\"serves8\" value=\"8\" formControlName=\"serves\">\r\n    <label for=\"serves6\">8</label>\r\n  </div>\r\n\r\n  <!-- ingredients fields -->\r\n  <div class=\"form-group\" [ngClass]=\"{'has-error': recipeForm.get('ingredients').errors}\">\r\n    <label class=\"control-label rb-ingredient-label\">Ingredients</label>\r\n    <label class=\"control-label rb-amount-label\">Amount</label>\r\n\r\n    <div formArrayName=\"ingredients\" *ngFor=\"let ingredient of ingredients.controls; let i = index\">\r\n      <div [formGroupName]=\"i\">\r\n        <input\r\n          class=\"form-control rb-ingredient-input\"\r\n          id=\"{{ 'ingredient' + i }}\"\r\n          placeholder=\"enter an ingredient\"\r\n          formControlName=\"ingredient\">\r\n        <input\r\n          class=\"form-control rb-amount-input\"\r\n          id=\"{{ 'amount' + i }}\"\r\n          placeholder=\"enter an amount\"\r\n          formControlName=\"amount\">\r\n      </div>\r\n    </div>\r\n    <button\r\n      class=\"btn btn-primary ingredientBtn\"\r\n      type=\"button\"\r\n      [disabled]=\"ingredients.invalid\"\r\n      (click)=\"addIngredient()\">Add Another Ingredient\r\n    </button>\r\n    <button\r\n      class=\"btn btn-warning ingredientBtn\"\r\n      type=\"button\"\r\n      [disabled]=\"ingredients.length < 2\"\r\n      (click)=\"removeIngredient()\">Remove Ingredient\r\n    </button>\r\n\r\n\r\n      <!-- <div class=\"alert alert-danger\" *ngIf=\"inp2.touched && inp2.invalid\" [@invalid]=\"'displayed'\" >You must enter at least one ingredient</div> -->\r\n\r\n  </div>\r\n    <br>Dirty: {{ recipeForm.dirty }}\r\n    <br>touched: {{ recipeForm.touched }}\r\n    <br>valid: {{ recipeForm.valid }}\r\n    <br>value: {{ recipeForm.value | json }}\r\n    <br>name valid: {{ recipeForm.get('recipeName').valid }}\r\n  </div>\r\n\r\n</div>\r\n  <div class=\"rb-form-btns\">\r\n    <button type=\"submit\"\r\n            class=\"btn btn-lg btn-primary\"\r\n            [disabled]=\"!recipeForm.valid\">\r\n      Save\r\n    </button>\r\n    <button [routerLink]=\"['/recipes']\" class=\"btn btn-lg btn-warning\">Cancel</button>\r\n  </div>\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" [@showPage]=\"'on'\">\r\n  <div class=\"panel-heading\">\r\n    <h3>Recipe List</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th><h4>You have {{numberOfRecipes}} recipe{{plural}}. Click below to see the details.</h4></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let recipe of recipes\">\r\n          <td class=\"myTableCell\"><a [routerLink]=\"['/recipe', recipe.id]\">{{recipe.recipeName}} {{recipe.id}}</a></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    </div>\r\n  </div>\r\n\r\n<button class=\"btn btn-lg btn-primary\" [routerLink]=\"['/reactive']\">Add New Recipe</button>\r\n"

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(221);
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
                serves: '2',
                ingredients: [
                    { ingredient: 'pumpkins', amount: '1' },
                    { ingredient: 'pie', amount: '2kg' },
                ],
                id: __WEBPACK_IMPORTED_MODULE_1_underscore__["uniqueId"]()
            },
        ];
    }
    // return recipe list or set from JSON file if empty
    LocalStorage.prototype.initializeData = function () {
        var recipeList = this.getRecipes();
        if (!recipeList) {
            this.setRecipes(this.starterRecipes);
        }
        return this.getRecipes();
    };
    // get all recipes from LS
    LocalStorage.prototype.getRecipes = function () {
        return JSON.parse(localStorage.getItem('recipeList'));
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

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 93;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(115);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.bundle.js.map
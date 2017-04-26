webpackJsonp([1,5],{

/***/ 108:
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

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_localstorage_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.brand = 'RECIPE BOOK';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'rb-app',
        template: __webpack_require__(182),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_localstorage_service__["a" /* LocalStorage */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipe_recipe_index_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recipe_recipe_form_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recipe_recipe_detail_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_page_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_localstorage_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_toastr_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












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
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'recipes', component: __WEBPACK_IMPORTED_MODULE_6__recipe_recipe_index_component__["a" /* RecipeIndex */] },
                { path: 'recipes/:id', component: __WEBPACK_IMPORTED_MODULE_8__recipe_recipe_detail_component__["a" /* RecipeDetail */] },
                { path: 'form', component: __WEBPACK_IMPORTED_MODULE_7__recipe_recipe_form_component__["a" /* RecipeForm */] },
                { path: 'form/:id', component: __WEBPACK_IMPORTED_MODULE_7__recipe_recipe_form_component__["a" /* RecipeForm */] },
                { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_page_component__["a" /* AboutPage */] },
                { path: '', redirectTo: 'recipes', pathMatch: 'full' },
                { path: '**', redirectTo: 'recipes', pathMatch: 'full' }
            ], { useHash: true })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__recipe_recipe_index_component__["a" /* RecipeIndex */],
            __WEBPACK_IMPORTED_MODULE_8__recipe_recipe_detail_component__["a" /* RecipeDetail */],
            __WEBPACK_IMPORTED_MODULE_7__recipe_recipe_form_component__["a" /* RecipeForm */],
            __WEBPACK_IMPORTED_MODULE_9__about_about_page_component__["a" /* AboutPage */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_localstorage_service__["a" /* LocalStorage */], __WEBPACK_IMPORTED_MODULE_11__services_toastr_service__["a" /* ToastrService */]],
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
    function Recipe(recipeName, ingredientsString, ingredientsArray, id) {
        this.recipeName = recipeName;
        this.ingredientsString = ingredientsString;
        this.ingredientsArray = ingredientsArray;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_localstorage_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetail; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeDetail = (function () {
    function RecipeDetail(_route, _router, _localStorage, _toastr) {
        this._route = _route;
        this._router = _router;
        this._localStorage = _localStorage;
        this._toastr = _toastr;
        console.log(this._route.snapshot.params['id']);
        this.id = this._route.snapshot.params['id'];
    }
    RecipeDetail.prototype.ngOnInit = function () {
        this.recipe = this._localStorage.fetchRecipeById(this.id);
        console.log(this.recipe);
    };
    RecipeDetail.prototype.deleteRecipe = function (id) {
        this._localStorage.deleteRecipeById(this.id);
        this._router.navigate(['/recipes']);
        this._toastr.info('Recipe deleted!');
    };
    return RecipeDetail;
}());
RecipeDetail = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__(183),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_localstorage_service__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_localstorage_service__["a" /* LocalStorage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */]) === "function" && _d || Object])
], RecipeDetail);

var _a, _b, _c, _d;
//# sourceMappingURL=recipe-detail.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_recipe_model__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_localstorage_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toastr_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeForm; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecipeForm = (function () {
    function RecipeForm(_localStorage, _toastr, _router, _route) {
        this._localStorage = _localStorage;
        this._toastr = _toastr;
        this._router = _router;
        this._route = _route;
        this.recipe = new __WEBPACK_IMPORTED_MODULE_2__models_recipe_model__["a" /* Recipe */]('', '', [], '');
        this.state = 'displayed';
        this.id = this._route.snapshot.params['id'];
    }
    RecipeForm.prototype.ngOnInit = function () {
        console.log('init', this.recipe);
        if (this.id) {
            this.recipe = this._localStorage.fetchRecipeById(this.id);
            this.recipe.ingredientsString = this.recipe.ingredientsArray.join(', ');
            console.log(this.recipe);
        }
    };
    RecipeForm.prototype.submitForm = function () {
        if (!this.id) {
            console.log('submit form', this.recipe);
            this._localStorage.saveRecipe(this.recipe);
            this._router.navigate(['/recipes']);
            this._toastr.success('Recipe added!');
        }
        else {
            this._localStorage.editRecipe(this.recipe);
            this._router.navigate(['/recipes']);
            this._toastr.success('Changes saved!');
        }
    };
    return RecipeForm;
}());
RecipeForm = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__(184),
        styles: [__webpack_require__(174)],
        animations: [__WEBPACK_IMPORTED_MODULE_4__animations__["a" /* pageTransition */],
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* trigger */])('invalid', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* state */])('displayed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* style */])({ transform: 'translateY(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* transition */])('void => displayed', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* animate */])('500ms ease-in')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* transition */])('displayed => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* animate */])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* style */])({ opacity: 0 }))
                ])
            ]),
        ] //anim
    }) //component
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_localstorage_service__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_localstorage_service__["a" /* LocalStorage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_toastr_service__["a" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], RecipeForm);

var _a, _b, _c, _d;
//# sourceMappingURL=recipe-form.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_localstorage_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeIndex; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeIndex = (function () {
    function RecipeIndex(_localStorage) {
        this._localStorage = _localStorage;
    }
    RecipeIndex.prototype.ngOnInit = function () {
        console.log('INIT RECIPE INDEX');
        this.recipes = this._localStorage.fetchRecipes();
        this.numberOfRecipes = this.recipes.length;
        this.plural = this.numberOfRecipes === 1 ? '' : 's';
    };
    return RecipeIndex;
}());
RecipeIndex = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'index',
        template: __webpack_require__(185),
        styles: [__webpack_require__(175)],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_localstorage_service__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_localstorage_service__["a" /* LocalStorage */]) === "function" && _a || Object])
], RecipeIndex);

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
exports.push([module.i, ".panel-heading {\r\n  background-color: #118AB2; \r\n}\r\n\r\n.myTableCell {\r\n  padding: 15px 0 15px 15px; \r\n}\r\n\r\n.btn-danger {\r\n  background-color: #EF476F; \r\n}\r\n\r\n.btn-back {\r\n  float: right; \r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".panel-heading {\r\n  background-color: #118AB2; \r\n}\r\n\r\n.myRecipeNameInput {\r\n  font-size: 1.2em; \r\n  height: 50px; \r\n}\r\n\r\n.myIngredientsInput {\r\n  font-size: 1.2em; \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".myTableCell {\r\n  padding: 15px 0 15px 15px; \r\n}\r\n\r\n.panel-heading {\r\n  background-color: #118AB2; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
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
                recipeName: "Pumpkin Pie",
                ingredientsArray: ["pumpkins", "milk", "eggs", "salt", "cinnamon"],
                ingredientsString: '',
                id: __WEBPACK_IMPORTED_MODULE_1_underscore__["uniqueId"]()
            },
            {
                recipeName: "Peshwari Naan",
                ingredientsArray: ["flour", "yeast", "yoghurt", "coconut", "almonds"],
                ingredientsString: '',
                id: __WEBPACK_IMPORTED_MODULE_1_underscore__["uniqueId"]()
            },
            {
                recipeName: "Spaghetti Carbonara",
                ingredientsArray: ["spaghetti", "eggs", "bacon", "cheese", "black pepper"],
                ingredientsString: '',
                id: __WEBPACK_IMPORTED_MODULE_1_underscore__["uniqueId"]()
            },
            {
                recipeName: "French Onion Soup",
                ingredientsArray: ["onions", "butter", "sugar", "dry sherry", "beef stock", "thyme"],
                ingredientsString: '',
                id: __WEBPACK_IMPORTED_MODULE_1_underscore__["uniqueId"]()
            }
        ];
    }
    LocalStorage.prototype.fetchRecipeList = function () {
        console.log('FETCH RECIPES');
        return JSON.parse(localStorage.getItem("recipeList"));
    };
    LocalStorage.prototype.setRecipeList = function (list) {
        localStorage.setItem("recipeList", JSON.stringify(list));
    };
    LocalStorage.prototype.fetchRecipes = function () {
        var recipeList = this.fetchRecipeList();
        if (!recipeList) {
            this.setRecipeList(this.starterRecipes);
        }
        return this.fetchRecipeList();
    };
    LocalStorage.prototype.fetchRecipeById = function (id) {
        return (this.fetchRecipeList()
            .filter(function (recipe) { return recipe.id === id; }))[0];
    };
    LocalStorage.prototype.saveRecipe = function (recipe) {
        recipe.id = __WEBPACK_IMPORTED_MODULE_1_underscore__["uniqueId"]();
        recipe.ingredientsArray = recipe.ingredientsString.split(',');
        var recipeList = this.fetchRecipeList();
        recipeList.push(recipe);
        this.setRecipeList(recipeList);
    };
    LocalStorage.prototype.deleteRecipeById = function (id) {
        var filteredList = this.fetchRecipeList().filter(function (recipe) { return recipe.id !== id; });
        this.setRecipeList(filteredList);
    };
    LocalStorage.prototype.editRecipe = function (editedRecipe) {
        var filteredList = this.fetchRecipeList()
            .filter(function (recipe) { return recipe.id !== editedRecipe.id; });
        editedRecipe.ingredientsArray = editedRecipe.ingredientsString.split(',');
        filteredList.push(editedRecipe);
        this.setRecipeList(filteredList);
    };
    return LocalStorage;
}());
LocalStorage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], LocalStorage);

//# sourceMappingURL=localstorage.service.js.map

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<div class=\"myAboutPage\">\r\n<h2>Angular 2 Recipe Book App</h2>\r\n<p>This application was built with Angular 2, Typescript, SystemJS and Bootstrap to meet the criteria of the FreeCodeCamp challenge \r\n  <a href=\"https://www.freecodecamp.com/challenges/build-a-recipe-box\" target=\"_blank\">Build a Recipe Box</a>. \r\n  That challenge specifies the React framework, and an alternative version of this app, built with React, can be seen \r\n  <a href=\"https://recipe-book-arwl.herokuapp.com\" target=\"_blank\">here</a>.</p>\r\n  <p>Because of the flakiness of the React framework, I decided to rebuild the whole app in Angular as a comparison.</p>\r\n  <p>The data for this application is kept in the browser local storage, and will persist between sessions.</p>\r\n  <p>The source code for can be found on <a href=\"https://github.com/ARWL2016/recipe-book-app-ng\" target=\"_blank\">Github</a>.</p>\r\n  <p><b>Coded by Alistair Willis</b></p>\r\n</div>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "    <div>\r\n      <nav class=\"navbar navbar-default\">\r\n        <div class=\"myNavbar\">\r\n          <a class=\"navbar-brand\"><b>{{brand}}</b></a>\r\n            <ul class=\"nav navbar-nav\">\r\n              <li><a [routerLink]=\"['/recipes']\">RECIPES</a></li>\r\n              <li><a [routerLink]=\"['/form']\">ADD RECIPE</a></li>\r\n              <li><a [routerLink]=\"['/about']\">ABOUT</a></li>\r\n\r\n          </ul>\r\n          <ul class=\"nav navbar-nav about-link\">\r\n            <li><a href=\"https://github.com/ARWL2016/recipe-book-app-ng\" target=\"_blank\">View on Github</a></li>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n    <div class=\"container myContainer\" >\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" >\r\n  <div class=\"panel-heading\">\r\n    <h3>{{recipe.recipeName}}</h3>\r\n  </div>\r\n\r\n  <div class=\"panel-body\">\r\n  <table class=\"table\">\r\n    <thead> \r\n      <tr>\r\n        <th><h4>Ingredients</h4></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let ingredient of recipe.ingredientsArray\">\r\n        <td class=\"myTableCell\">{{ingredient}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  </div>\r\n  \r\n</div>\r\n<button class=\"btn btn-lg btn-warning\" [routerLink]=\"['/form', recipe.id]\">Edit Recipe</button>\r\n<button class=\"btn btn-lg btn-danger\" (click)=\"deleteRecipe()\">Delete Recipe</button>\r\n<button [routerLink]=\"['/recipes']\" class=\"btn btn-lg btn-success btn-back\">Back to Recipe List</button>\r\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<form #form=\"ngForm\" (submit)=\"submitForm(form)\" class=\"myForm\" novalidate > \r\n\r\n<div class=\"panel panel-primary\" [@showPage]=\"'on'\">\r\n  <div class=\"panel-heading\">\r\n    <h3>Add Recipe</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n  <div class=\"form-group\" [class.has-error]=\"inp1.touched && inp1.invalid\" > \r\n    <label class=\"control-label myFormLabel\">Recipe Name</label>\r\n    <input \r\n      type=\"text\" \r\n      class=\"form-control myRecipeNameInput\"\r\n      required\r\n      placeholder=\"enter a name for your recipe\"\r\n      name=\"recipeName\" \r\n      [(ngModel)]=\"recipe.recipeName\"\r\n      #inp1=\"ngModel\" >\r\n      <div class=\"alert alert-danger\" *ngIf=\"inp1.touched && inp1.invalid\" [@invalid]=\"'displayed'\" >You must enter a recipe name</div>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-group\" [class.has-error]=\"inp2.touched && inp2.invalid\"> \r\n    <label class=\"control-label myFormLabel\">Ingredients</label>\r\n    <textarea rows=\"7\" cols=\"20\" \r\n      class=\"form-control myIngredientsInput\"\r\n      name=\"ingredients\"\r\n      required\r\n      placeholder=\"enter your ingredients, separated by commas\"\r\n      [(ngModel)]=\"recipe.ingredientsString\"\r\n      #inp2=\"ngModel\"></textarea>\r\n      <div class=\"alert alert-danger\" *ngIf=\"inp2.touched && inp2.invalid\" [@invalid]=\"'displayed'\" >You must enter at least one ingredient</div>\r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-lg btn-primary\" [disabled]=\"form.invalid\">Save</button>\r\n  <button [routerLink]=\"['/recipes']\" class=\"btn btn-lg btn-warning\">Cancel</button>\r\n\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" [@showPage]=\"'on'\">\r\n  <div class=\"panel-heading\">\r\n    <h3>Recipe List</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <table class=\"table\">\r\n      <thead> \r\n        <tr>\r\n          <th><h4>You have {{numberOfRecipes}} recipe{{plural}}. Click below to see the details.</h4></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let recipe of recipes\">\r\n          <td class=\"myTableCell\"><a [routerLink]=\"['/recipes', recipe.id]\">{{recipe.recipeName}}</a></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    </div>\r\n  </div>\r\n\r\n<button class=\"btn btn-lg btn-primary\" [routerLink]=\"['/form']\">Add New Recipe</button>\r\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }),

/***/ 36:
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

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageTransition; });
// import { Component, Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';

var pageTransition = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('showPage', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => on', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'scale(0.9)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(400)
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('on => void', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }))
    ])
]);
//# sourceMappingURL=animations.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(115);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.bundle.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var recipe_model_1 = require("../models/recipe.model");
var localstorage_service_1 = require("../services/localstorage.service");
var animations_1 = require("../animations");
var toastr_service_1 = require("../services/toastr.service");
var RecipeForm = (function () {
    function RecipeForm(_localStorage, _toastr, _router, _route) {
        this._localStorage = _localStorage;
        this._toastr = _toastr;
        this._router = _router;
        this._route = _route;
        this.recipe = new recipe_model_1.Recipe('', '', [], '');
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
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'recipe-form.html',
        styleUrls: ['recipe-form.css'],
        animations: [animations_1.pageTransition,
            core_1.trigger('invalid', [
                core_1.state('displayed', core_1.style({ transform: 'translateY(0)' })),
                core_1.transition('void => displayed', [
                    core_1.style({ opacity: 0 }),
                    core_1.animate('500ms ease-in')
                ]),
                core_1.transition('displayed => void', [
                    core_1.animate(500, core_1.style({ opacity: 0 }))
                ])
            ]),
        ] //anim
    }) //component 
    ,
    __metadata("design:paramtypes", [localstorage_service_1.LocalStorage,
        toastr_service_1.ToastrService,
        router_1.Router,
        router_1.ActivatedRoute])
], RecipeForm);
exports.RecipeForm = RecipeForm;
//# sourceMappingURL=recipe-form.component.js.map
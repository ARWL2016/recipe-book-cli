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
var localstorage_service_1 = require("../services/localstorage.service");
var toastr_service_1 = require("../services/toastr.service");
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
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'recipe-detail.html',
        styleUrls: ['recipe-detail.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        localstorage_service_1.LocalStorage,
        toastr_service_1.ToastrService])
], RecipeDetail);
exports.RecipeDetail = RecipeDetail;
//# sourceMappingURL=recipe-detail.component.js.map
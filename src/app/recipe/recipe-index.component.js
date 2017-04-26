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
var localstorage_service_1 = require("../services/localstorage.service");
var animations_1 = require("../animations");
var RecipeIndex = (function () {
    function RecipeIndex(_localStorage) {
        this._localStorage = _localStorage;
    }
    RecipeIndex.prototype.ngOnInit = function () {
        this.recipes = this._localStorage.fetchRecipes();
        this.numberOfRecipes = this.recipes.length;
        this.plural = this.numberOfRecipes === 1 ? '' : 's';
    };
    return RecipeIndex;
}());
RecipeIndex = __decorate([
    core_1.Component({
        selector: 'index',
        moduleId: module.id,
        templateUrl: 'recipe-index.html',
        styleUrls: ['recipe-index.css'],
        animations: [animations_1.pageTransition]
    }),
    __metadata("design:paramtypes", [localstorage_service_1.LocalStorage])
], RecipeIndex);
exports.RecipeIndex = RecipeIndex;
//# sourceMappingURL=recipe-index.component.js.map
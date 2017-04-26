"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _ = require("underscore");
var LocalStorage = (function () {
    function LocalStorage() {
        this.starterRecipes = [
            {
                recipeName: "Pumpkin Pie",
                ingredientsArray: ["pumpkins", "milk", "eggs", "salt", "cinnamon"],
                ingredientsString: '',
                id: _.uniqueId()
            },
            {
                recipeName: "Peshwari Naan",
                ingredientsArray: ["flour", "yeast", "yoghurt", "coconut", "almonds"],
                ingredientsString: '',
                id: _.uniqueId()
            },
            {
                recipeName: "Spaghetti Carbonara",
                ingredientsArray: ["spaghetti", "eggs", "bacon", "cheese", "black pepper"],
                ingredientsString: '',
                id: _.uniqueId()
            },
            {
                recipeName: "French Onion Soup",
                ingredientsArray: ["onions", "butter", "sugar", "dry sherry", "beef stock", "thyme"],
                ingredientsString: '',
                id: _.uniqueId()
            }
        ];
    }
    LocalStorage.prototype.fetchRecipeList = function () {
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
        recipe.id = _.uniqueId();
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
    core_1.Injectable()
], LocalStorage);
exports.LocalStorage = LocalStorage;
//# sourceMappingURL=localstorage.service.js.map
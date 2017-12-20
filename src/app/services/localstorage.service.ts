/**
 *  This service contains basic CRUD functions for setting and getting recipes to local storage
 *  If LS is empty when the app loads, the starter recipes will be loaded as examples
 */

import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import { Recipe } from '../models/recipe.model';

@Injectable()

export class LocalStorage {
  starterRecipes: Recipe[] = [
    {
      recipeName: 'Pumpkin Pie',
      serves: '2',
      ingredients: [
        {ingredient: 'pumpkins', amount: '1'},
        {ingredient: 'pie', amount: '2kg'},
      ],
      id: _.uniqueId()
    },

  ]

  // return recipe list or set from JSON file if empty
  public initializeData(): Recipe[] {
    const recipeList = this.getRecipes();
    console.log({recipeList});
    if (recipeList.length < 1) {
      this.setRecipes(this.starterRecipes);
    }
    return this.getRecipes();
  }

  // get all recipes from LS
  private getRecipes(): Recipe[] {
    return JSON.parse(localStorage.getItem('recipeList'));
  }

  // set LS with recipe list
  private setRecipes(list: Recipe[]): void {
    localStorage.setItem('recipeList', JSON.stringify(list));
  }

  // get a single recipe
  public getRecipeById(id:string): Recipe {
    return (this.getRecipes()
      .filter((recipe:Recipe) => recipe.id === id))[0];
  }

  // save a recipe without an id (a new recipe)
  public saveNewRecipe(recipe: Recipe): void {
    recipe.id = _.uniqueId();
    // recipe.ingredientsArray = recipe.ingredientsString.split(',');
    const recipeList = this.getRecipes();
    recipeList.push(recipe);
    this.setRecipes(recipeList);
  }

  // remove and replace a record
  public editRecipe(editedRecipe: Recipe): void {
    // remove the old record
    const filteredList = this.getRecipes()
        .filter((recipe: Recipe) => recipe.id !== editedRecipe.id);

    // editedRecipe.ingredientsArray = editedRecipe.ingredientsString.split(',');
    filteredList.push(editedRecipe);
    this.setRecipes(filteredList);
  }

  // remove recipe with an ID
  public deleteRecipeById(id: string): void {
    const filteredList = this.getRecipes().filter((recipe: Recipe) => recipe.id !== id);
    this.setRecipes(filteredList);
  }
}


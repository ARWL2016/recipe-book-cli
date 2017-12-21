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
      serves: '4',
      ingredients: [
        {ingredient: 'pumpkin', amount: '1 15oz can'},
        {ingredient: 'condensed milk', amount: '1 14oz can'},
        {ingredient: 'eggs', amount: '2 large'},
        {ingredient: 'ground cinnamon', amount: '1 tsp'},
        {ingredient: 'ground ginger', amount: '1/2 tsp'},
        {ingredient: 'salt', amount: '1/2 tsp'},
        {ingredient: 'unbaked pie crust', amount: '9 inch'},
      ],
      method: `
        Preheat oven to 425 degrees F. Whisk pumpkin, sweetened condensed milk, eggs, spices and salt in medium bowl until smooth. Pour into crust. Bake 15 minutes.
        Reduce oven temperature to 350 degrees F and continue baking 35 to 40 minutes or until knife inserted 1 inch from crust comes out clean. Cool. Garnish as desired. Store leftovers covered in refrigerator.
      `,
      id: _.uniqueId()
    },
  ]

  // return recipe list or set from JSON file if empty
  public initializeData(): Recipe[] {
    const recipeList = this.getRecipes();
    if (recipeList.length < 1) {
      this.setRecipes(this.starterRecipes);
    }
    return this.getRecipes();
  }

  // get all recipes from LS
  private getRecipes(): Recipe[] {
    return JSON.parse(localStorage.getItem('recipeList')) || [];
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


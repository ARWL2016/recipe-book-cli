import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../services/localstorage.service';
import { Recipe } from '../models/recipe.model';
import { pageTransition } from '../animations';

@Component({
  selector: 'app-index',
  templateUrl: './recipe-index.html',
  styleUrls: ['./recipe-index.css'],
  animations: [ pageTransition ]
})
export class RecipeIndexComponent implements OnInit {
  recipes: Recipe[];
  numberOfRecipes: number;
  plural: string;


  constructor(private _localStorage: LocalStorage) {}

  ngOnInit(): void {
    console.log('INIT RECIPE INDEX');
    this.recipes = this._localStorage.fetchRecipes();
    this.numberOfRecipes = this.recipes.length;
    this.plural = this.numberOfRecipes === 1 ? '' : 's';

  }
}

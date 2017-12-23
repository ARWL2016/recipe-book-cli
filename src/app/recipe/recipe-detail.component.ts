/**
 *  This component renders the data for a single recipe
 *  It is only accessible from the recipe-index component with the ID as a URL parameter
 *  @function OnInit - uses the ID to get the recipe from local storage service
 *  @function deleteRecipe - removes recipe from local storage
 *
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../models/recipe.model';
import { LocalStorage } from '../services/localstorage.service';
import { ToastrService } from '../services/toastr.service';
import { pageTransition } from '../animations';

@Component({
  templateUrl: './recipe-detail.html',
  styleUrls: ['./recipe-detail.css'],
  animations: [pageTransition]
})
export class RecipeDetailComponent implements OnInit {
  id: string;
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: LocalStorage,
    private toastr: ToastrService
    ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.recipe = this.store.getRecipeById(this.id);
  }

  deleteRecipe(): void {
    this.store.deleteRecipeById(this.id);
    this.router.navigate(['/recipes']);
    this.toastr.info('Recipe deleted!');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-form-reactive',
  templateUrl: './recipe-form-reactive.component.html',
  styleUrls: ['./recipe-form-reactive.component.css']
})
export class RecipeFormReactiveComponent implements OnInit {
  recipeForm: FormGroup; // the form model
  recipe: Recipe = new Recipe(); // the data model

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.recipeForm = this.formBuilder.group({
      recipeName: ['',
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      ingredients: ['',
        [Validators.required, Validators.minLength(3)]]
    });
    console.log(this.recipeForm);
  }

  save() {
    console.log('save');
    console.log(this.recipeForm.value);
  }

}

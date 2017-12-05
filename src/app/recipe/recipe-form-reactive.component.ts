import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Recipe } from '../models/recipe.model';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-recipe-form-reactive',
  templateUrl: './recipe-form-reactive.component.html',
  styleUrls: ['./recipe-form-reactive.component.css']
})
export class RecipeFormReactiveComponent implements OnInit {
  recipeForm: FormGroup; // the form model
  recipe: Recipe = new Recipe(); // the data model
  private validationMessages = {
    required: 'This field is required',
    minlength: 'Must be at least three characters'
  };
  recipeNameMessage;
  get ingredients(): FormArray {
    return <FormArray>this.recipeForm.get('ingredients');
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.recipeForm = this.formBuilder.group({
      recipeName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      ingredients: this.formBuilder.array([this.buildIngredient()]
      )
    });

    console.log(this.recipeForm);

    const recipeNameControl = this.recipeForm.get('recipeName');
    recipeNameControl.valueChanges.debounceTime(1000).subscribe(value => {
      this.setMessage(recipeNameControl, 'recipeName');
    });
  }

  buildIngredient(): FormGroup {
    return this.formBuilder.group({
      ingredient: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  addIngredient(): void {
    console.log(this.ingredients);
    this.ingredients.push(this.buildIngredient());
  }

  setMessage(ctrl: AbstractControl, name: String): void {
    if (name === 'recipeName') {
      this.recipeNameMessage = '';
      if ((ctrl.touched || ctrl.dirty) && ctrl.errors) {
        this.recipeNameMessage = Object.keys(ctrl.errors).map(key =>
          this.validationMessages[key]).join(' ');
      }
    }
  }

  save() {
    console.log('save');
    console.log(this.recipeForm.value);
  }

}

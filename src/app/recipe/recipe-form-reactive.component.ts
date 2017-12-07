import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../models/recipe.model';
import { LocalStorage } from '../services/localstorage.service';
import { ToastrService } from '../services/toastr.service';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-recipe-form-reactive',
  templateUrl: './recipe-form-reactive.component.html',
  styleUrls: ['./recipe-form-reactive.component.css']
})
export class RecipeFormReactiveComponent implements OnInit {
  formMode = 'Add';
  recipeForm: FormGroup; // the form model
  ingredients: FormArray;
  recipeNameError: string;

  urlId: string | undefined;
  recipe: Recipe = new Recipe(); // the data model
  validationMessages = {
    required: 'This field is required',
    minlength: 'Must be at least three characters'
  };

  constructor(
    private formBuilder: FormBuilder,
    private store: LocalStorage,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    // define the default form model
    this.recipeForm = this.formBuilder.group({
      recipeName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      serves: '1',
      ingredients: this.formBuilder.array([this.buildIngredient()])
    });

    // create a separate reference for the form array
    this.ingredients = <FormArray>this.recipeForm.get('ingredients');

    // set listener on recipe name field for validation
    const recipeNameCtrl = this.recipeForm.get('recipeName');
    recipeNameCtrl.valueChanges.debounceTime(1000).subscribe(value => {
      console.log({recipeNameCtrl});
      this.setMessage(recipeNameCtrl, 'recipeName');
    });

    // if form loads for editing a recipe:
    this.urlId = this.route.snapshot.params['id'];
    if (this.urlId) {this.patchForm(); }
  }

  // create a FormGroup object for ingredient and amount
  buildIngredient(ingr = '', amt = ''): FormGroup {
    return this.formBuilder.group({
      ingredient: [ingr, [Validators.required, Validators.minLength(3)]],
      amount: [amt, [Validators.required]]
    });
  }

  // click handlers: add or remove a FormGroup object to / from the ingredients array (will render in UI)
  addIngredient(): void {
    console.log(this.ingredients);
    this.ingredients.push(this.buildIngredient());
  }

  removeIngredient(): void {
    this.ingredients.controls.pop();
  }

  // set validation messages from form control object
  setMessage(ctrl: AbstractControl, name: String): void {
    if (name === 'recipeName') {
      this.recipeNameError = '';
      if ((ctrl.touched || ctrl.dirty) && ctrl.errors) {
        this.recipeNameError = Object.keys(ctrl.errors).map(key =>
          this.validationMessages[key]).join(' ');
      }
    }
  }

  // in edit mode - update Form Model from Recipe object
  patchForm() {
    this.formMode = 'Edit';
    this.recipe = this.store.getRecipeById(this.urlId);
    console.log('recipe', this.recipe);

    // patch primitive properties
    this.recipeForm.patchValue({
      recipeName: this.recipe.recipeName,
      serves: this.recipe.serves,
      id: this.recipe.id
    });

    // patch the form array
    this.recipe.ingredients.forEach(item => {
      const ingr = this.buildIngredient(item.ingredient, item.amount);
      this.ingredients.push(ingr);
    });
    // remove the empty control
    this.ingredients.controls.shift();

    console.log('recipe form after patch', this.recipeForm.value);
  }

  save(recipeForm: FormGroup): void {
    if (this.formMode === 'Add') {
      this.recipe = this.recipeForm.value;
      this.store.saveNewRecipe(this.recipe);
      this.exit('Recipe saved!');
    } else {
      // update the recipe with any new values
      this.recipe = Object.assign({}, this.recipe, this.recipeForm.value);
      this.store.editRecipe(this.recipe);
      this.exit('Recipe added!');
    }
  }

  exit(message: string): void {
    this.router.navigate(['/recipe', this.recipe.id]);
    this.toastr.success(message);
  }

}

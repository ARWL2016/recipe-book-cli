/**
 * This component uses the Angular reactive form style. The form model (@prop recipeForm)
 * is created explicitly on the component class rather than implicitly from the template.
 *
 * The formbuilder.group() method is used to create the basic form object with property names,
 * default values, and validators. The form model properties are bound to the template input
 * fields using the formControlName directive.
 */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../models/recipe.model';
import { LocalStorage } from '../services/localstorage.service';
import { ToastrService } from '../services/toastr.service';
import { pageTransition } from '../animations';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-recipe-form-reactive',
  templateUrl: './recipe-form-reactive.component.html',
  styleUrls: ['./recipe-form-reactive.component.css'],
  animations: [pageTransition]
})
export class RecipeFormReactiveComponent implements OnInit {
  formMode = 'Add';
  recipeForm: FormGroup; // the form model
  ingredients: FormArray;
  recipeNameError: string;
  methodError: string;

  urlId: string | undefined;
  recipe: Recipe = new Recipe(); // the data model
  validationMessages = {
    required: 'This field is required',
    minlength: 'Must be at least three characters',
    maxlength: 'Maximum length is 1000 characters'
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
      method: ['', [Validators.required, Validators.maxLength(1000)]],
      ingredients: this.formBuilder.array([this.buildIngredient()])
    });

    // create a separate reference for the form array
    this.ingredients = <FormArray>this.recipeForm.get('ingredients');

    // set listeners on recipe name and method fields for validation
    const recipeNameCtrl = this.recipeForm.get('recipeName');
    recipeNameCtrl.valueChanges.debounceTime(1000).subscribe(value => {
      this.setMessage(recipeNameCtrl, 'recipeName');
    });

    const methodCtrl = this.recipeForm.get('method');
    methodCtrl.valueChanges.debounceTime(1000).subscribe(value => {
      this.setMessage(methodCtrl, 'method');
    })

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
    if (name === 'method') {
      this.methodError = '';
      if ((ctrl.touched || ctrl.dirty) && ctrl.errors) {
        this.methodError = Object.keys(ctrl.errors).map(key =>
          this.validationMessages[key]).join(' ');
      }
    }
  }

  // in edit mode - update Form Model from Recipe object
  patchForm() {
    this.formMode = 'Edit';
    this.recipe = this.store.getRecipeById(this.urlId);

    // patch primitive properties
    this.recipeForm.patchValue({
      recipeName: this.recipe.recipeName,
      serves: this.recipe.serves,
      method: this.recipe.method,
      id: this.recipe.id
    });

    // patch the form array
    this.recipe.ingredients.forEach(item => {
      const ingr = this.buildIngredient(item.ingredient, item.amount);
      this.ingredients.push(ingr);
    });
    // remove the empty control
    this.ingredients.controls.shift();
  }

  save(): void {
    if (this.formMode === 'Add') {
      this.recipe = this.recipeForm.value;
      this.store.saveNewRecipe(this.recipe);
      this.exit('Recipe saved!');
    } else {
      // update the recipe with any new values
      this.recipe = Object.assign({}, this.recipe, this.recipeForm.value);
      this.store.editRecipe(this.recipe);
      this.exit('Changes saved!');
    }
  }

  exit(message: string): void {
    this.formMode = 'Saved';
    this.router.navigate(['/recipe', this.recipe.id]);
    this.toastr.success(message);
  }

}

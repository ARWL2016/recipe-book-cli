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
  private urlId: string | undefined;
  formMode = 'Add';
  recipeForm: FormGroup; // the form model
  private recipe: Recipe = new Recipe(); // the data model
  private validationMessages = {
    required: 'This field is required',
    minlength: 'Must be at least three characters'
  };
  recipeNameMessage;
  get ingredients(): FormArray {
    return <FormArray>this.recipeForm.get('ingredients');
  }

  constructor(
    private formBuilder: FormBuilder,
    private store: LocalStorage,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.urlId = this.route.snapshot.params['id'];

    this.recipeForm = this.formBuilder.group({
      recipeName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      serves: '1',
      ingredients: this.formBuilder.array([this.buildIngredient()]
      )
    });

    // set listener on recipe name field for validation
    const recipeNameControl = this.recipeForm.get('recipeName');
    recipeNameControl.valueChanges.debounceTime(1000).subscribe(value => {
      this.setMessage(recipeNameControl, 'recipeName');
    });

    if (this.urlId) {
      this.patchForm();
    }
  }

  // create a FormGroup object for ingredient and amount
  buildIngredient(): FormGroup {
    return this.formBuilder.group({
      ingredient: ['', [Validators.required, Validators.minLength(3)]],
      amount: ''
    });
  }

  // add a FormGroup object to the ingredients array (render new fields)
  addIngredient(): void {
    console.log(this.ingredients);
    this.ingredients.push(this.buildIngredient());
  }

  // set validation messages from form control object
  setMessage(ctrl: AbstractControl, name: String): void {
    if (name === 'recipeName') {
      this.recipeNameMessage = '';
      if ((ctrl.touched || ctrl.dirty) && ctrl.errors) {
        this.recipeNameMessage = Object.keys(ctrl.errors).map(key =>
          this.validationMessages[key]).join(' ');
      }
    }
  }

  // in edit mode - update Form Model from Recipe object
  patchForm() {
    this.formMode = 'Edit';
    this.recipe = this.store.getRecipeById(this.urlId);
    console.log(this.recipe);

    this.recipeForm.patchValue({
      recipeName: this.recipe.recipeName,
      serves: this.recipe.serves,
      ingredients: this.recipe.ingredients,
      id: this.recipe.id
    });
  }

  save(recipeForm: FormGroup): void {
    this.recipe = this.recipeForm.value;

    console.log(this.recipe);
    if (!this.recipe.id) {
      this.store.saveNewRecipe(this.recipe);
      this.router.navigate(['/recipes']);
      this.toastr.success('Recipe added!');
    }
  }

}

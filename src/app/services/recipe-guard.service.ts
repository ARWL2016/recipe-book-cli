import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RecipeFormReactiveComponent } from 'app/recipe/recipe-form-reactive.component';

@Injectable()
export class RecipeEditGuard implements CanDeactivate<RecipeFormReactiveComponent> {

  canDeactivate(component: RecipeFormReactiveComponent): boolean {

    // don't check when form is submitted - only on click links or cancel
    if (component.formMode !== 'Saved' && component.recipeForm.dirty) {
      return confirm('Navigate away and lose changes?');
    }
    return true;
  }
}

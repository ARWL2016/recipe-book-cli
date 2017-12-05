import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RecipeIndexComponent } from './recipe/recipe-index.component';
import { RecipeForm } from './recipe/recipe-form.component';
import { RecipeDetail } from './recipe/recipe-detail.component';
import { AboutPage } from './about/about-page.component';
import { LocalStorage } from './services/localstorage.service';
import { ToastrService } from './services/toastr.service';

import { RecipeFormReactiveComponent } from './recipe/recipe-form-reactive.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'recipes', component: RecipeIndexComponent },
      { path: 'recipes/:id', component: RecipeDetail},
      { path: 'form', component: RecipeForm },
      { path: 'reactive', component: RecipeFormReactiveComponent },
      { path: 'form/:id', component: RecipeForm },
      { path: 'about', component: AboutPage },
      { path: '', redirectTo: 'recipes', pathMatch: 'full'},
      { path: '**', redirectTo: 'recipes', pathMatch: 'full'}
    ], { useHash: true})
     ],
  declarations: [
    AppComponent,
    RecipeIndexComponent,
    RecipeDetail,
    RecipeForm,
    AboutPage,
    RecipeFormReactiveComponent
     ],
  providers: [LocalStorage, ToastrService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

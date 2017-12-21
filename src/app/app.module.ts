import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RecipeIndexComponent } from './recipe/recipe-index.component';
import { RecipeDetailComponent } from './recipe/recipe-detail.component';
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
      { path: 'home', component: RecipeIndexComponent },
      { path: 'recipe/:id', component: RecipeDetailComponent},
      { path: 'reactive', component: RecipeFormReactiveComponent },
      { path: 'reactive/:id', component: RecipeFormReactiveComponent },
      { path: 'about', component: AboutPage },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ], { useHash: true})
     ],
  declarations: [
    AppComponent,
    RecipeIndexComponent,
    RecipeDetailComponent,
    // RecipeForm,
    AboutPage,
    RecipeFormReactiveComponent
     ],
  providers: [LocalStorage, ToastrService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

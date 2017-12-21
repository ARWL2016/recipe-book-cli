import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { RecipeIndexComponent } from './recipe/recipe-index.component';
import { RecipeDetailComponent } from './recipe/recipe-detail.component';
import { RecipeFormReactiveComponent } from './recipe/recipe-form-reactive.component';
import { AboutPage } from './about/about-page.component';

// Services
import { LocalStorage } from './services/localstorage.service';
import { ToastrService } from './services/toastr.service';
import { RecipeEditGuard } from 'app/services/recipe-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'home', component: RecipeIndexComponent },
      { path: 'recipe/:id', component: RecipeDetailComponent},
      { path: 'reactive',
        component: RecipeFormReactiveComponent,
        canDeactivate: [RecipeEditGuard] },
      { path: 'reactive/:id',
        component: RecipeFormReactiveComponent,
        canDeactivate: [RecipeEditGuard] },
      { path: 'about', component: AboutPage },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ], { useHash: true})
     ],
  declarations: [
    AppComponent,
    RecipeIndexComponent,
    RecipeDetailComponent,
    AboutPage,
    RecipeFormReactiveComponent
     ],
  providers: [LocalStorage, ToastrService, RecipeEditGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var recipe_index_component_1 = require("./recipe/recipe-index.component");
var recipe_form_component_1 = require("./recipe/recipe-form.component");
var recipe_detail_component_1 = require("./recipe/recipe-detail.component");
var about_page_component_1 = require("./about/about-page.component");
var localstorage_service_1 = require("./services/localstorage.service");
var toastr_service_1 = require("./services/toastr.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: 'recipes', component: recipe_index_component_1.RecipeIndex },
                { path: 'recipes/:id', component: recipe_detail_component_1.RecipeDetail },
                { path: 'form', component: recipe_form_component_1.RecipeForm },
                { path: 'form/:id', component: recipe_form_component_1.RecipeForm },
                { path: 'about', component: about_page_component_1.AboutPage },
                { path: '', redirectTo: 'recipes', pathMatch: 'full' },
                { path: '**', redirectTo: 'recipes', pathMatch: 'full' }
            ], { useHash: true })
        ],
        declarations: [
            app_component_1.AppComponent,
            recipe_index_component_1.RecipeIndex,
            recipe_detail_component_1.RecipeDetail,
            recipe_form_component_1.RecipeForm,
            about_page_component_1.AboutPage
        ],
        providers: [localstorage_service_1.LocalStorage, toastr_service_1.ToastrService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormReactiveComponent } from './recipe-form-reactive.component';

describe('RecipeFormReactiveComponent', () => {
  let component: RecipeFormReactiveComponent;
  let fixture: ComponentFixture<RecipeFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

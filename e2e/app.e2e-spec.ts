import { RecipeBookCliPage } from './app.po';

describe('recipe-book-cli App', () => {
  let page: RecipeBookCliPage;

  beforeEach(() => {
    page = new RecipeBookCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

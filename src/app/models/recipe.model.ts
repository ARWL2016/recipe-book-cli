export interface Ingredient {
  ingredient: string;
  amount?: string;
}

export class Recipe {
  constructor(
    public recipeName: string = '',
    public serves: string = '',
    public ingredients: Ingredient[] = [{ ingredient: '' }],
    public method: string = '',
    public id?: string
  ) { }
}

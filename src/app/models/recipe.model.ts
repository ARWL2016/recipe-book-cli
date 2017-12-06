export class Recipe {
  constructor(
    public recipeName: string = '',
    public serves: string = '1',
    public ingredients: [{
      ingredient: string,
      amount?: string
    }] = [{ingredient: ''}],
    public id?: string
  ) {}
}

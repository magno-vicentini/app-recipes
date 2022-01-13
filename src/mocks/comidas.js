const mockComida = [
  {
    idMeal: '52768',
    strMeal: 'Apple Frangipan Tart',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
    strCategory: 'Dessert',
    strIngredient1: 'digestive biscuit',
    strMeasure1: '175g/6oz',
    strInstruction: 'Preheat the oven',
  },
  {
    idMeal: '52893',
    strMeal: 'Apple e Blackberry',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg',
  },
  {
    idMeal: '52894',
    strMeal: 'Apple e Blackberry52893',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719183.jpg',
  },
  {
    idMeal: '52895',
    strMeal: 'Apple e Blackberry52895',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719184.jpg',
  },
  {
    idMeal: '52896',
    strMeal: 'Apple e Blackberry52896',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719185.jpg',
  },
  {
    idMeal: '52897',
    strMeal: 'Apple e Blackberry52897',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719186.jpg',
  },
  {
    idMeal: '52898',
    strMeal: 'Apple e Blackberry52898',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719187.jpg',
  },
  {
    idMeal: '52899',
    strMeal: 'Apple e Blackberry52899',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719188.jpg',
  },
  {
    idMeal: '528910',
    strMeal: 'Apple e Blackberry528910',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719189.jpg',
  },
  {
    idMeal: '528911',
    strMeal: 'Apple e Blackberry528911',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719190.jpg',
  },
  {
    idMeal: '528912',
    strMeal: 'Apple e Blackberry528912',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719191.jpg',
  },
  {
    idMeal: '528913',
    strMeal: 'Apple e Blackberry528913',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719192.jpg',
  },
  {
    idMeal: '5289314',
    strMeal: 'Apple e Blackberry5289314',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719193.jpg',
  },
  {
    idMeal: '5289315',
    strMeal: 'Apple e Blackberry5289315',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719194.jpg',
  },
];

export const categoryFood = [
  { strCategory: 'feijao' },
  { strCategory: 'ovo' },
  { strCategory: 'pao' },
  { strCategory: 'queijo' },
  { strCategory: 'azeite' },
];

export const ingradados = [
  'ovo',
  'carne',
  'salada',
];

export const doneRecipes = [{
  id: '52977',
  type: 'comida',
  area: 'Turkish',
  category: 'Side',
  alcoholicOrNot: '',
  name: 'Corba',
  image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
  doneDate: '12/01/2022',
  tags: ['Soup'],
},
{
  alcoholicOrNot: 'Optional alcohol',
  area: '',
  category: 'Ordinary Drink',
  doneDate: '12/01/2022',
  id: '15997',
  image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
  name: 'GG',
  tags: [],
  type: 'bebida',
}];

export const inProgressRecipes = {
  cocktails: {
    15997: ['Galliano - 2 1/2 shots ', 'Ginger ale - -', 'Ice - -'],
  },
  meals: {
    52977: [
      'Lentils - 1 cup ',
      'Onion - 1 large',
      'Carrots - 1 large',
      'Sea Salt - Pinch',
      'Water - 1 cup ',
    ],
  },
};

export const favoriteRecipes = [
  {
    alcoholicOrNot: '',
    area: 'Turkish',
    category: 'Side',
    id: '52977',
    image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
    name: 'Corba',
    type: 'comida',
  },
  {
    alcoholicOrNot: 'Alcoholic',
    area: '',
    category: 'Cocktail',
    id: '17222',
    image: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
    name: 'A1',
    type: 'bebida',
  },
];

export const mockMeals = {
  meals: [
    {
      idMeal: '52768',
      strMeal: 'Apple Frangipan Tart',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
      strCategory: 'Dessert',
      strIngredient1: 'digestive biscuit',
      strMeasure1: '175g/6oz',
      strInstruction: 'Preheat the oven',
      strArea: 'area1',
    },
    { strArea: 'area2' },
    { strArea: 'area3' },
    { strArea: 'area4' },
    { strArea: 'area5' },
    { strArea: 'area6' },
    { strArea: 'area7' },
    { strArea: 'area8' },
    { strArea: 'area9' },
    { strArea: 'area10' },
    { strArea: 'area11' },
    { strArea: 'area12' },
    { strArea: 'area13' },
    { strArea: 'area14' },
    { strArea: 'area15' },
    { strArea: 'area16' },
    { strArea: 'area17' },
    { strArea: 'area18' },
    { strArea: 'area19' },
    { strArea: 'area20' },
    { strArea: 'area21' },
  ],
};

export default mockComida;

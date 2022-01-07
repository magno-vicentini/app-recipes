import mockBebidas from '../mocks/bebidas';
import mockComida from '../mocks/comidas';
import { fetchDrinkApi, fetchMealApi, fetchRecipe } from "../services/fetchAPI";

describe('Verifica FetchApi', () => {
  it('Verifica FetchApi fetchMealApi', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockComida),
    });
    
    const fetch = await fetchMealApi('f', 'a')
    expect(fetch).toBe(mockComida);

    const fetchTwo = await fetchMealApi('i', 'bacon')
    expect(fetchTwo).toBe(mockComida);
  });

  it('Verifica FetchApi fetchDrinkApi', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockBebidas),
    });
    
    const fetch = await fetchDrinkApi('f', 'a')
    expect(fetch).toBe(mockBebidas);

    const fetchTwo = await fetchDrinkApi('i', 'lime')
    expect(fetchTwo).toBe(mockBebidas);
  });

  it('Verifica FetchApi fetchRecipe', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockComida),
    });
    
    const fetch = await fetchRecipe('food', '123')
    expect(fetch).toBe(mockComida);

    const fetchTwo = await fetchRecipe('drink', '456')
    expect(fetchTwo).toBe(mockComida);
  });
});

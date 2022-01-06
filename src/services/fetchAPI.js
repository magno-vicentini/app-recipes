const fetchDrinkApi = async (type, search) => {
  const filter = await type === 'i' ? 'filter' : 'search';
  const url = `https://www.thecocktaildb.com/api/json/v1/1/${filter}.php?${type}=${search}`;
  const response = await fetch(url);
  const result = await response.json();
  return (result);
};

const fetchMealApi = async (type, search) => {
  const filter = await type === 'i' ? 'filter' : 'search';
  const url = `https://www.themealdb.com/api/json/v1/1/${filter}.php?${type}=${search}`;
  const response = await fetch(url);
  const result = await response.json();
  return (result);
};

export { fetchDrinkApi, fetchMealApi };

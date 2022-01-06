const fetchDrinkApi = async (type, search) => {
  const url = `www.thecocktaildb.com/api/json/v1/1/search.php?${type}=${search}`;
  const response = await fetch(url);
  const result = await response.json();
  return (result);
};

const fetchMealApi = async (type, search) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${type}=${search}`);
  const result = await response.json();
  return (result);
};

export { fetchDrinkApi, fetchMealApi };

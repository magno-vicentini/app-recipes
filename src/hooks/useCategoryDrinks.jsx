import { useEffect } from 'react';

export default function useCategoryDrinks(setCategories) {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setCategories(result.drinks);
    };
    fetchDrinks();
  }, []);
}

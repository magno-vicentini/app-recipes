import { useEffect } from 'react';

export default function useCategoryMeals(setCategories) {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setCategories(result.meals);
    };
    fetchMeals();
  }, []);
}

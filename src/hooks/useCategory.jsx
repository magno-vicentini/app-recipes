import { useEffect } from 'react';

export default function useCategory(typeAPI, setCategories, typeCategory) {
  const FIVE = 5;

  const url = `https://www.${typeAPI}.com/api/json/v1/1/list.php?c=list`;
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setCategories(result[typeCategory].slice(0, FIVE));
    };
    fetchMeals();
  }, []);
}

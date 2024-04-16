import { useState, useEffect } from "react";
import { getCategories } from "../../../../Services/Services";

export function useCategories() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(null);
  const [Categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const CategoriesData = await getCategories();
        setCategories(CategoriesData);
        setIsLoading(false);
      } catch (error) {
        setIsError(error);
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { Categories, isLoading, error };
}

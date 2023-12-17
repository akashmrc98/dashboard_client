import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_CATEGORIES } from "../services/transactions";

export const useCategory = () => {
  const categoriesApi = useQuery(GET_CATEGORIES);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (categoriesApi.data) {
      const c = categoriesApi.data.categories.categories;
      setCategories(c);
    }
  }, [categoriesApi]);

  return categories;
};

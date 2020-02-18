import api from "../services/api";
import { useEffect, useState } from "react";

export const useApiGet = (url, dependences) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await api.get(url);
      if (response) {
        setFetchedData(response.data);
        console.log(response);
      } else {
        console.log(response.status);
      }
      setIsLoading(false);
    };
    getData();
  }, dependences);

  return [isLoading, fetchedData];
};

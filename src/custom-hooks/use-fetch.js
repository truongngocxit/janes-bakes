import { useState, useCallback } from "react";

const useFetch = function () {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async function (url, errorMessage, bodyData) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        url,
        !bodyData
          ? null
          : {
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(bodyData),
            }
      );
      if (!response.ok) throw new Error(errorMessage);

      const returnedData = await response.json();
      setIsLoading(false);
      return returnedData;
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);
  return {
    isLoading,
    error,
    fetchData,
  };
};

export default useFetch;

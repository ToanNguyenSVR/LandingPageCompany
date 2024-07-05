import { useState, useCallback } from "react";

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

const useApi = <T>() => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const callApi = useCallback(
    async (
      url: string,
      method: string = "GET",
      body: any = null
    ): Promise<T | void> => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result: T = await response.json();
        setData(result);
        return result;
      } catch (error: any) {
        setError(error.message);
        console.error("Error calling API:", error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { loading, error, data, callApi };
};

export default useApi;

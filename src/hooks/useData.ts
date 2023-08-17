import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

interface ApiClientType {
  key: any | any[];
  endpoint: string;
  params?: any | undefined;
  queryExtra?: any | undefined;
}

const useData = <T>(config: ApiClientType) => {
  const apiClient = new ApiClient<FetchResponse<T>>(
    config.endpoint,
    config.params
  );
  return useQuery<FetchResponse<T>, Error>({
    queryKey: config.key,
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000, // 10 seconds
    ...config.queryExtra,
  });
};

export default useData;

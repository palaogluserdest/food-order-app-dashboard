import useSWR from 'swr';
import { fetcher } from '@/utils/helpers';

type useDataProps = {
  endpoint: string;
};

type useDataReturn<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

const useData = <T>({ endpoint }: useDataProps): useDataReturn<T> => {
  // => Fetch data
  const { data, error } = useSWR(endpoint, fetcher, {
    revalidateOnReconnect: false,
  });

  // => Check if data is loading
  const loading = !data && !error;

  // => Check if data is in local storage, get data from local storage
  if (localStorage.getItem(`${endpoint}`) !== null && localStorage.getItem(`${endpoint}`) !== 'undefined') {
    return {
      data: JSON.parse(localStorage.getItem(`${endpoint}`) || 'null'),
      loading: loading,
      error: error || null,
    };
  }

  // => Save data to local storage
  localStorage.setItem(`${endpoint}`, JSON.stringify(data));

  // => Return data(it will work once time)
  return { data: data || null, loading: loading, error: error || null };
};

export default useData;

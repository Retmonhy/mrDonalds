import { useEffect, useState } from "react";

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() =>
    (async () => {
      try {
        const result = await fetch("/DB.json") //получаем данные с хостинга, из файла "DB.json"
            .then(response => response.json())
            .then(data => data);
        setResponse(result); //устанавливаем значение response равное res
      } catch (err) {
        setError(err);
      }
    })()
  , []);
  return { response, error };
};
export default useFetch;

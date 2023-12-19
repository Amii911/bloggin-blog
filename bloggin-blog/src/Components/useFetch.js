import { useState, useEffect } from 'react';

//this is for a GET REQUEST - passing URL. not a Post like in component useFetch

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
      .then(res => {
        if (!res.ok) { 
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error / catch is if promise is rejected
        setIsPending(false);
        setError(err.message);
      })
    }, 1000);
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;
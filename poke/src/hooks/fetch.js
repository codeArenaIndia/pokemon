import { useState, useEffect } from 'react';

function useFetch(url,limit) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [navigation, setNavigation] = useState({next:"",previous:"",count:0});

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
        try{
            const initial = await fetch(url);
            const initialJson = await initial.json();
            
            setNavigation({next :initialJson.next, previous :initialJson.previous, count:initialJson.count });
            const detailsData = initialJson.results.map(async (i) => {
                const preFetchData = await fetch(i.url);
                return preFetchData.json();
            });

            let payload = [];
            (await Promise.all(detailsData)).forEach((item) => {
                let capability = item.abilities?.map(item=>item.ability.name);
                item.abilities = capability.join(',');
                item.image = item['sprites']['other']['official-artwork']['front_default']
                payload[item.id] = {...item}
            });

            setData(payload);

        } catch (err) {
            console.log(err);
          } finally {
            setLoading(false);
          } 
    };
    fetchData();
  }, [url])

  return { data, loading ,navigation }
}

export default useFetch;


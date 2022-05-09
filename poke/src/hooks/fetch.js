import { useState, useEffect } from 'react';
import { createBrowserHistory } from "history";
import {createUrl} from '../util'


function useFetch(url,limit) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [navigation, setNavigation] = useState({next:"",previous:"",count:0});
  let {location}  = createBrowserHistory();

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
        try{
            let searchParams = new URLSearchParams(location.search);
            let count = searchParams.get('count');
            limit = count ? count : limit;
            let offset = searchParams.get('offset');
            offset = offset?offset:0;
            let newUrl =  createUrl(url,offset,limit)

            const initial = await fetch(newUrl);
            const initialJson = await initial.json();
            
            setNavigation({next :initialJson.next, previous :initialJson.previous, count:initialJson.count, offset,limit });
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


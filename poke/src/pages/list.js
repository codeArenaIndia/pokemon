import React, {useState, useEffect} from 'react';
import useFetch from "../hooks/fetch";

import CardList from '../components/card-list';

import {CONFIG} from '../config'
import {customSearch, customSort} from '../util'
import { createBrowserHistory } from "history";
import { useNavigate } from "react-router-dom";
 
const  List=()=>{
    const [query, setQuery] = useState("");
    const [limit, setLimit] = useState(20);
    const [filerValue, setFilerValue] = useState('')
    const [offset,setOffset] = useState(0);
    const [url,setUrl] = useState(CONFIG.BASE_URL)
    let { data, loading ,navigation, offsetVal } = useFetch(url,limit);
    let history  = createBrowserHistory();
    let {location} = history;
    let navaigate = useNavigate();

    useEffect(()=>{
        let searchParams = new URLSearchParams(location.search);
        let seachQuery = searchParams.get('searchQuery');
        let filterValue = searchParams.get('filterValue');
        let count = searchParams.get('count');
        let offsetVal = searchParams.get('offset');
        if(seachQuery){
            setQuery(seachQuery);
        }
        if(filterValue){
            setFilerValue(filterValue);
        }
        if(count){
            setLimit(count);
        }
        if(offsetVal){
            setOffset(offsetVal);
        }
    },[])
    



    
    const handleDetails = (id)=>{
        let item = data[id];
        item.goBack = `/list?searchQuery=${query}&count=${limit}&filterValue=${filerValue}&offset=${offset}`;  
        navaigate('/details',{ state: {...item }})
    }

 

    return (
        <>
            <h2 className="logo">Pokemon</h2>

            <section className="card-body">
                {
                    loading ?  <div className="m-40">Loading...</div> : <CardList data={data} offsetVal={offsetVal} showDetails={handleDetails}/>
                }
            </section>

        </>

    );
}


export default List;
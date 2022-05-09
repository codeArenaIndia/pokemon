import React, {useState, useEffect} from 'react';
import useFetch from "../hooks/fetch";

import CustomSelect from '../components/select';
import CustomSearch from '../components/search';
import Pagination from '../components/pagination';
import CardList from '../components/card-list';

import {CONFIG, FILTER_OPTIONS, CARD_COUNT} from '../config'
import {customSearch, customSort, extractParamFromUrl } from '../util'
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
    
    const handlePagination = (e)=>{
        let url = e.target.getAttribute('url');
        let val = extractParamFromUrl(url,'offset');
        setOffset(val);
        createPersistanceObj("offset",val);
        setUrl(url)
    }

    const modifyUrl = (count) =>{
       let url = `https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=0`;
       setUrl(url);
    }

    const searchAndSort = (items)=>{
        let output = items && [...items]
        if(output){         
            if(query && query !== ''){
                output =  customSearch(output, CONFIG.SEARCH_TEXT, query);
            }
            if(filerValue && filerValue !== ''){
                output = customSort(filerValue, output);
            }
        }
        return output;
    }

    const createPersistanceObj = (type,val) =>{
        let searchParams = new URLSearchParams(location.search);
        searchParams.set(type, val);
        let search = searchParams.toString();
        history.push({search:search })
    }

    const handleFiler = (e)=>{
        let val = e.target.value;
        createPersistanceObj("filterValue",val);
        setFilerValue(val)
    }

    const handleQuery = (e) =>{
        let val = e.target.value;
        createPersistanceObj("searchQuery",val);
        setQuery(val)
    }

    const handleLimit = (e) =>{
        let val = e.target.value;
        createPersistanceObj("count",val);
        modifyUrl(val);
        setLimit(val)
    }
    
    const handleDetails = (id)=>{
        let item = data[id];
        item.goBack = `/list?searchQuery=${query}&count=${limit}&filterValue=${filerValue}&offset=${offset}`;  
        navaigate('/details',{ state: {...item }})
    }

    const handleReset = () =>{
        navaigate('/');
        setUrl(CONFIG.BASE_URL);
    }

    return (
        <>
            <h2 className="logo">Pokemon</h2>
            <header >   
                <CustomSearch value={query} handleChange={handleQuery} name="search-form" />
                <CustomSelect options={CARD_COUNT} handleChange={handleLimit} filerValue={limit} name="card-count" title="Count"/>
                <CustomSelect options={FILTER_OPTIONS} handleChange={handleFiler} filerValue={filerValue} name="sorting"  title="Sort"/>
                <Pagination navigation={navigation}  handlePagination={handlePagination} offsetVal={offsetVal} handleReset={handleReset}/>
            </header>
            <section className="card-body">
                {
                    loading ?  <div className="m-40">Loading...</div> : <CardList searchAndSort={searchAndSort} data={data} offsetVal={offsetVal} showDetails={handleDetails}/>
                }
            </section>
            <footer>
                <Pagination navigation={navigation} handlePagination={handlePagination} handleReset={handleReset}/>
            </footer>
        </>

    );
}


export default List;
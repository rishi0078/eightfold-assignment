import React from 'react'

import {useState,useEffect} from 'react'


const useApiSearch=(term) => {
    const[data,setData]=useState(null);

   console.log(1+2+3);
   console.log(data);

    useEffect(()=>{
       if(term!=null){
        fetch(
            `https://www.omdbapi.com/?s=${term}&apikey=a714616d`
        )
        .then(response=>response.json())
        .then(result=>{
            if(result.Response==="True"){
                
                
            setData(result);
            }
        })
    
    }
    
    }, [term])


    return {data}
};

export default useApiSearch;

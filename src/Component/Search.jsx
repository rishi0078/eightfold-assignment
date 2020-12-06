import React,{useState,useRef,useEffect } from 'react'
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import{ useHistory } from "react-router-dom";
import Result from "./Result";
 import "./Search.css"

function Search() {
    const [display, setDisplay] = useState(false);
    const [{} ,dispatch]=useStateValue();
    const[input,setInput]=useState("");
    const history=useHistory();
    const wrapperRef = useRef(null);

    const search=(e)=>{
        setInput(e.target.value);
        console.log(input);
       dispatch({
           type:actionTypes.SET_SEARCH_TERM,
           term:input
       })

       
        
    }
    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
          window.removeEventListener("mousedown", handleClickOutside);
        };
      });

      const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
          setDisplay(false);
        }
      };


    return (
        <div className="search">

            <div ref={wrapperRef} className="flex-container flex-column pos-rel" >
            <input onClick={()=>setDisplay(!display)} className="search_input" value={input} onChange={search}  />
            </div>
           { display && (
               
           <div className="autoContainer">
            
             <Result className="option" onClick={()=>setDisplay(!display)} />

             </div>
           )}
        </div>
    )
}

export default Search

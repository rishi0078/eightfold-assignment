import React from 'react'
import {useStateValue} from "../StateProvider";
import useApiSearch from "../useApiSearch";


function Result() {
    const [{term}]=useStateValue();
    const{ data }=useApiSearch(term);
       console.log(`"term" ${term}`);
       console.log(data)

       let itemsToRender;
       if (data!=null && term!=null) {
        itemsToRender = data?.Search.map(item => {
 return <div><strong>{item.Title}</strong></div>;
       })
     } 
     
    return (
        <div>
            {itemsToRender}
        </div>
    )
}

export default Result

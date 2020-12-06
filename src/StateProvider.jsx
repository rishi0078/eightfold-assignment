import React,{createContext,useContext,useReducer} from "react";


//preparing for data Layer//
export const StateContext=createContext();

export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>

        {children}
    </StateContext.Provider>
);

//this is hook allow us to pull information from data layer
export const useStateValue =()=>useContext(StateContext);
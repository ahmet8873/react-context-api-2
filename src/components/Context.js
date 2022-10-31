import React , { useState,useEffect, useContext } from "react";


// const CounterContext = React.createContext();
// const IncreaseContext = React.createContext();
// const DecreaseContext = React.createContext();
// const newStateContext = React.createContext();

const AppContext=React.createContext()



// export const useCounter = () => {
//   return useContext(CounterContext);
// };

// export const useIncrease = () => {
//   return useContext(IncreaseContext);
// };
// export const useDecrease = () => {
//   return useContext(DecreaseContext);
// };
// export const useNewState = () => {
//   return useContext(newStateContext);
// };

const url='https://randomuser.me/api/?results=5'
// fetch le cekip new state e attik, sonra new state i NewComp.js de kullandik

const AppProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  const decrease = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  const [newState, setNewState] = useState([]);


  const getUsers=async()=>{
    const response=await fetch(url)
    const data=await response.json()
    setNewState(data.results)
  }
  useEffect(()=>{
    getUsers()
  },[])

  return (
     <AppContext.Provider value={{counter,increase,decrease,newState}}>
      {children}
     </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext=()=>{
  return useContext(AppContext)
}

export  {AppProvider};

import React, { useState,useContext} from "react"


const  CounterContext = React.createContext()
const IncreaseContext=React.createContext()
const DecreaseContext=React.createContext()

export const useCounter=()=>{
    return useContext(CounterContext)
}

export const useIncrease=()=>{
    return useContext(IncreaseContext)
}
export const useDecrease=()=>{
    return useContext(DecreaseContext)
}


const CounterProvider=({children})=>{

    const [counter,setCounter]=useState(0)

  const increase=()=>{
    setCounter(prevCount=>prevCount+1)
    
  }
  const decrease=()=>{
    setCounter(prevCount=>prevCount-1)
  }

  return(

    <CounterContext.Provider value={counter}>
            <IncreaseContext.Provider value={increase}>
                <DecreaseContext.Provider value={decrease}>
                    {children}
                </DecreaseContext.Provider>

            </IncreaseContext.Provider>

    </CounterContext.Provider>

  )

}

export default CounterProvider
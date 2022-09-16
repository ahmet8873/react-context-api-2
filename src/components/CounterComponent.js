
import { useCounter,useIncrease,useDecrease } from './CounterContext'

const CounterComponent = () => {

  
  const increase=useIncrease()
  const counter=useCounter()
  const decrease =useDecrease()


  const counterStyles={
    backgroundColor:'#333',
    color: '#CCC' ,
    padding:'2rem',
    margin: '2rem',
    height:'2rem',
    width:'2rem'
}


  return (
    <>
     <button onClick={increase}>increase</button>
     <div style={counterStyles}>{counter}</div>
     <button onClick={decrease}>decrease</button>
    </>
   
  )
}

export default CounterComponent
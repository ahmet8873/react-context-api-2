
import { useGlobalContext} from './Context'

const CounterComponent = () => {

  
  const {increase,decrease,counter}=useGlobalContext()

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
import { useGlobalContext } from "./Context"

const NewComp = () => {

   const {increase,newState}=useGlobalContext()
   
  return (
    <div>
        <h1>new component</h1>
        <button onClick={increase}> new button</button>
        {newState.map((person,index)=>(
            <p key={index}>{person.email}</p>
        ))}
    </div>
  )
}

export default NewComp
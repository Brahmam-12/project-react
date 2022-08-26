import React,{useState,useEffect} from 'react'
import PostData from './PostData'
const App = () => {
  const [users,setUsers]=useState([])
  const [name,setName]=useState("")
  const handler=async()=>{
    const data=await fetch("https://jsonplaceholder.typicode.com/users")
    const alldata= await data.json()
    setUsers(alldata)
    console.log(alldata)
  }
  useEffect(()=>{
    handler()
  },[])
  console.log(name)
  return (

    <div className='data'>
      <div className='box'>
                    <input type="text"  onChange={(e)=>setName(e.target.value)}></input>
                    <button type='submit'>Search</button>
                </div>
      {users.map((values)=>{
            return(
                <>
                <div>
                  {(if{user==values.name}{
                    console.log(values.name)
                  })}
                </div>
                </>
            )
        })}
    </div>
  )
}

export default App

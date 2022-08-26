import React,{useState,useEffect} from 'react'
import PostData from './PostData'
const App = () => {
  const [users,setUsers]=useState([])
  const handler=async()=>{
    const data=await fetch("https://jsonplaceholder.typicode.com/users")
    const alldata= await data.json()
    setUsers(alldata)
    console.log(alldata)
  }
  useEffect(()=>{
    handler()
  },[])
  return (
    <div className='data'>
      {users.map((user,index)=>{
        <PostData key={index} config={user} />
      })}
    </div>
  )
}

export default App
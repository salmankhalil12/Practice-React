import {useEffect, useState} from 'react'


const LocalStorage = () => {
const [name,setName] = useState("")
useEffect(()=>{
    const saveName = localStorage.getItem("userName")
    if(saveName){
        setName(saveName)
    }
},[])

useEffect(()=>{
    localStorage.setItem("userName",name);
},[name])
    return (
    <div>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='enter youe name' />
        <h3>Your Name is {name}</h3>
    </div>
  )
}

export default LocalStorage
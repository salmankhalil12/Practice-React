import {useState,useEffect} from 'react'

const Example1 = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=> setUsers(data))
    },[])

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
         <h1 className="text-3xl font-bold text-center mb-6">User List (API)</h1>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-5 bg-white shadow-md rounded-xl hover:shadow-xl transition"
          >
            <p className="text-gray-500">{user.id}</p>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-500">{user.phone}</p>
            <p className="text-gray-500">{user.address.city}</p>
            <p className="text-gray-500">{user.address.zipcode}</p>
            <p className="text-gray-500">{user.address.street}</p>
          </div>
        ))}
      </div>
  

    </div>
  )
}

export default Example1
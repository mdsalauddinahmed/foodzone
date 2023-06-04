import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] =useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
  });

   console.log(users)
  const handleMakeAdmin =id=>{
    fetch(`http://localhost:5000/users/admin/${id}`,{
        method:"PATCH"
    })
    .then(res=>res.json())
    .then(data =>{
        console.log(data)
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: 'User logged In',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }
  const handleDelete =(user)=>{

  }
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro-boss||All users</title>
      </Helmet>

      <h2 className="text-3xl font-semibold my-8">All users : {users.length}</h2>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index) =>  <tr key={user._id}>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role === "admin"?"admin": <button  onClick={()=>handleMakeAdmin(user._id)}   className="btn btn-ghost btn-lg text-red-400 "><FaUserShield></FaUserShield></button>}</td>
            <td>
        <button  onClick={()=>handleDelete(user)}   className="btn btn-ghost btn-lg text-red-400 "><FaTrashAlt></FaTrashAlt></button>
      </td>
          </tr> )
      }
     
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AllUsers;

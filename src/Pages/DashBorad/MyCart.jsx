import React from 'react';
import useCart from '../../Hooks/useCart';
import { Helmet } from 'react-helmet';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart,refetch]=useCart()
    console.log(cart)
    const total = cart.reduce((sum,item) => item.price + sum,0)
    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${item._id}`,{
                method:"DELETE",
                headers:{

                'content-type':'application/json'
                },
                body:JSON.stringify()
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount>0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          }) 
    }
    return (
  // todo for scrolling
        <div className="w-full ">
             <Helmet>
                <title>Bistro Boss | My cart</title>
             </Helmet>
 
             <div className='uppercase font-semibold flex justify-evenly items-center gap-4'>
                <h3 className='text-3xl'>Total Items: {cart.length}</h3>
                <h3 className='text-3xl'>Total price: ${total}</h3>
                <button className='btn btn-warning btn-sm'>PAY</button>
             </div>
         
          
             <div className='overflow-x-auto'>
  <table className="table w-full">
    {/* head */}
    <thead  >
      <tr >
        <th>
         #
        </th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className='sticky'>
      { 
      cart.map((item,index)=><tr key={item._id}>
      <td>
         {index+1}
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item.image} alt=" " />
            </div>
          </div>
          </div>
      </td>
      <td>
        {item.name}
      </td>
      <td className='text-start'>${item.price}</td>
      <td>
        <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-lg text-red-400 "><FaTrashAlt></FaTrashAlt></button>
      </td>
    </tr> )
      }
      
      
    </tbody>
    
    
  </table>
</div>

        </div>
    );
};

export default MyCart;
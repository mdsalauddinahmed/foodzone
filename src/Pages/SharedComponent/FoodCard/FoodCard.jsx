import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate} from 'react-router-dom';
import useCart from '../../../Hooks/useCart';

const FoodCard = ({items}) => {
    const{image,price,recipe,name,_id}=items
    const {user}=useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const [,refetch]=useCart()
    const handleAddToCart =(item)=>{
      
     if(user && user.email){
      const orderItem ={
        itemId:_id,
        name,
        image,
        price,
        email: user.email
      }
      fetch('http://localhost:5000/carts',{
        method:'POST',
        headers:{

        'content-type': 'application/json'
        },
        body:JSON.stringify(orderItem)

      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'item food added on the cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
     }else{
      Swal.fire({
        title: 'Please Log In',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Log In'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from:location}} )
        }
      })
     }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src= {image}/></figure>
        <p className="bg-slate-900 rounded right-0 px-4 text-white mr-4 mt-4 absolute">${price}</p>
          <div className='text-center '>
          <h2 className=" text-2xl font-bold">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center my-4">
          <button onClick={()=>handleAddToCart(items)} className=' btn btn-outline mt-4 border-0 border-b-4 border-orange-400 '>Order Now</button>
          </div>
          </div>
          
         

        </div>
      
    );
};

export default FoodCard;
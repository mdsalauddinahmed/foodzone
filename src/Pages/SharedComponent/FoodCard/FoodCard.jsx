import React from 'react';

const FoodCard = ({items}) => {
    const{image,price,recipe,name}=items
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src= {image}/></figure>
        <p className="bg-slate-900 rounded right-0 px-4 text-white mr-4 mt-4 absolute">${price}</p>
          <div className='text-center '>
          <h2 className=" text-2xl font-bold">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center my-4">
          <button className=' btn btn-outline mt-4 border-0 border-b-4 border-orange-400 '>View all Food</button>
          </div>
          </div>
          
         

        </div>
      
    );
};

export default FoodCard;
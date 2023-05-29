import React from 'react';

const MenuHome = ({menu}) => {
    const{image,price,recipe,name}=menu
    return (
        <section>
        <div className='flex space-x-5'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px]' src={image} alt="" />
            <div>
              <h3 className='uppercase'>{name}---------------</h3>
              <p>{recipe}</p>
            </div>
            <p className='text-yellow-600 font-bold'>${price}</p>
        </div>
        </section>
    );
};

export default MenuHome;
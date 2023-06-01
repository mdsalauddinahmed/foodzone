import React from 'react';
import FoodCard from '../SharedComponent/FoodCard/FoodCard';
// todo:implementation pagination
const OrderTab = ({items}) => {
    return (
       <section className='my-10'>
         <div className="grid md:grid-cols-3  gap-4">
        {
            items.map(item=><FoodCard items={item} key={item._id}></FoodCard>)
        }
        </div>
       </section>
    );
};

export default OrderTab;
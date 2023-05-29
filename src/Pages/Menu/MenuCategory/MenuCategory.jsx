import React from 'react';
import MenuHome from '../../SharedComponent/MenuItems/MenuHome';
import Cover from '../../SharedComponent/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,coverImg}) => {
    return (
        <div>
         {title &&  <Cover img={coverImg} title={title}></Cover>}
         <div className='my-10'>
         <div className='grid md:grid-cols-2 gap-10 '>
                {
                     items.map(menu=><MenuHome menu={menu} key={menu._id}></MenuHome>)
                }
            </div>
         </div>
         <Link to={`/order/${title}`}>
         <button className='btn btn-outline mt-4 border-0 border-b-4 mb-4'>Order now</button>
         </Link>
        </div>
    );
};

export default MenuCategory;
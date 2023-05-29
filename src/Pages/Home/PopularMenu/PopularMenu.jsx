import React, { useEffect, useState } from 'react';
import SectionTitle from '../../SharedComponent/SectionTitle/SectionTitle';
import MenuHome from '../../SharedComponent/MenuItems/MenuHome';
import { useMenu } from '../../../Hooks/UseMenu/UseMenu';

const PopularMenu = () => {
   
 const [menu]=useMenu()
 const popular=menu.filter(item=>item.category == 'popular')

    return (
         <section className='mb-12'>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"}>

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(menu=><MenuHome menu={menu} key={menu._id}></MenuHome>)
                }
            </div>
            <div className='text-center mt-4'>
            <button className=' btn btn-outline mt-4 border-0 border-b-4 '>View all Food</button>
            </div>
         </section>
    );
};

export default PopularMenu;
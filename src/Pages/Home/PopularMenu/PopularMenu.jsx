import React, { useEffect, useState } from 'react';
import SectionTitle from '../../SharedComponent/SectionTitle/SectionTitle';
import MenuHome from '../../SharedComponent/MenuItems/MenuHome';

const PopularMenu = () => {
   
  const [menu,setMenu]=useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item=>item.category == "popular")
            setMenu(popularItems)})
    },[])
    return (
         <section className='mb-12'>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"}>

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(menu=><MenuHome menu={menu} key={menu._id}></MenuHome>)
                }
            </div>
            <div className='text-center mt-4'>
            <button className=' btn btn-outline mt-4 border-0 border-b-4 '>View all Food</button>
            </div>
         </section>
    );
};

export default PopularMenu;
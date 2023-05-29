import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../SharedComponent/Cover/Cover';
import menuImg from '../../assets/assets/menu/banner3.jpg'
import dessertImg from '../../assets/assets/menu/dessert-bg.jpeg'
import offeredImg from '../../assets/assets/menu/salad-bg.jpg'
import saladImg from '../../assets/assets/menu/salad-bg.jpg'
import soupImg from '../../assets/assets/menu/soup-bg.jpg'
import pizzaImg from '../../assets/assets/menu/pizza-bg.jpg'
import { useMenu } from '../../Hooks/UseMenu/UseMenu';
import SectionTitle from '../SharedComponent/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
 
 
const Menu = () => {
    const [menu]=useMenu()
    const dessert=menu.filter(item=>item.category == 'dessert')
    const soup=menu.filter(item=>item.category == 'soup')            
    const salad=menu.filter(item=>item.category == 'salad')            
    const offered=menu.filter(item=>item.category == 'offered')            
    const pizza=menu.filter(item=>item.category == 'pizza')            
    const drinks=menu.filter(item=>item.category == 'drinks')            
    return (
        <div>
        <Helmet>
        <title>Bistro-boss||menu</title>
       </Helmet>
       <Cover img={menuImg} title="Our menu"></Cover>
       {/* main cover */}
       <SectionTitle heading={"Todays offer"} subHeading={"Don't miss"}></SectionTitle>
       <MenuCategory coverImg={offeredImg} items={offered} title={"Todays best combination"}></MenuCategory>
       {/* offered cover */}
       <MenuCategory items={dessert} coverImg={dessertImg} title={"dessert"}></MenuCategory>
       {/* dessert menu item */}
       <MenuCategory items={soup} coverImg={soupImg} title={"soup"}></MenuCategory>
         {/* soup items */}
         <MenuCategory items={salad} coverImg={saladImg} title={"salad"}></MenuCategory> 
         {/* salad items */}
         <MenuCategory items={pizza} coverImg={pizzaImg} title={"pizza"}></MenuCategory> 
         {/* pizza items */}
         <MenuCategory items={drinks} coverImg={pizzaImg} title={"drinks"}></MenuCategory> 
           {/* drinks items */}
        </div>
    );
};

export default Menu;
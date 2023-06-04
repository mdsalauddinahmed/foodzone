import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart,FaWallet,FaHome, FaUtensils, FaUsers, FaBook } from 'react-icons/fa';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
  const [cart]=useCart()
  // TOdo:load data from server the to dynamic
   const [isAdmin] = useAdmin();
  // const isAdmin = true;
    return (
      <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">

        
        {
          isAdmin? <>
           <li><NavLink to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink></li>
         
          <li><NavLink to="/dashboard/reservation"><FaUtensils></FaUtensils> Add Items</NavLink></li> 
          <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
         
          <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Booking</NavLink></li>
          <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers> All users</NavLink></li>
          </>:<></>
           
        }
          
        
          <div className='divider'></div>
          <li><NavLink to='/'><FaHome> </FaHome>Home</NavLink></li>
          <li>
            <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Cart
            <div className="badge badge-secondary">+{cart.length || 0}</div>
            
            </NavLink>
          </li>
          <li><NavLink to="/menu">Our Menu</NavLink></li>
          <li><NavLink to="/order/salad">Our Food</NavLink></li>
          </ul>

      </div>
  </div>
    );
};

export default Dashboard;
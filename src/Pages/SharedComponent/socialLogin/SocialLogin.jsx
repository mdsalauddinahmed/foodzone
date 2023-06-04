import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Result } from 'postcss';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext)
    const navigate =useNavigate();
   
    const location =useLocation();
    const from = location.state?.from?.pathname ||  "/";

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            const saveUser = {name:loggedUser.displayName,email:loggedUser.email}
            fetch(`http://localhost:5000/users`,{
             method:"POST",
             headers:{
               'content-type':'application/json'
             },
             body:JSON.stringify(saveUser)

            })
            .then(res=>res.json())
            .then(()=>{
          
                navigate(from,{replace:true});
        
            })
           
          

       }) 
        
    }
    return (
        <div className='text-center '> 
            <div className='divider'></div>
            <div className='flex gap-9 justify-center'>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <FaGoogle></FaGoogle>
            </button>
            <button className="btn btn-circle btn-outline">
                 <FaFacebook></FaFacebook>
            </button>
            </div>

        </div>
    );
};

export default SocialLogin;
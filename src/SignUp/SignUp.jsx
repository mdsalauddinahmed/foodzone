import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import imgBg from '../assets/assets/Login/loginbg.png';
import img1 from '../assets/assets/Login/login.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SocialLogin from '../Pages/SharedComponent/socialLogin/SocialLogin';

const SignUp = () => {
const {createUser,updateUserProfile}=useContext(AuthContext)

const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
const navigate = useNavigate()
    const onSubmit = data =>{
         
        createUser(data.email,data.password)
        .then(result=>{
            const createdUser=result.user;
            console.log(createdUser)
            updateUserProfile(data.name,data.photo)
            .then(()=>{
              const saveUser = {name:data.name,email:data.email}
                 fetch(`http://localhost:5000/users`,{
                  method:"POST",
                  headers:{
                    'content-type':'application/json'
                  },
                  body:JSON.stringify(saveUser)

                 })
                 .then(res=>res.json()
                 .then(data=>{
                  if(data.insertedId){
                    reset();
                    Swal.fire({
                      position: 'User profile updated ',
                      icon: 'success',
                      title: 'profile updated',
                      showConfirmButton: false,
                      timer: 1500
                    })
                    navigate("/")

                  }
                 }))
                
               

            }).catch((error)=>{
                console.log(error)
               })
        })
    }
     

    return (
        <div className="hero  border-4 min-h-screen " style={{backgroundImage: `url(${imgBg})`}}>
        <div className="hero-content   md:flex">
         <div className="card  w-full max-w-sm    ">
         <h3 className='text-center font-bold text-4xl'>Sign Up</h3>
            <form  onSubmit={handleSubmit(onSubmit)}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" {...register("name",{ required: true })} placeholder="name" name='name' className="input input-bordered" />
                {errors.name && <span className='text-red-600'> Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input type="photo" {...register("photo",{ required: true })} placeholder="photo" name='photo' className="input input-bordered" />
                {errors.photo && <span className='text-red-600'> photo is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email",{ required: true })} placeholder="email" name='email' className="input input-bordered" />
                {errors.email && <span className='text-red-600'> Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password",
                { required: true,
                    minLength:6,
                    maxLength:20,
                    pattern:/(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                }
                )} name='password' placeholder="password" className="input input-bordered" />
                {errors.password?.type ==='required' && <span className='text-red-600'>  password required</span>}
                {errors.password?.type ==='minLength' && <span className='text-red-600'> password is less than 6 character</span>}
                {errors.password?.type ===' maxLength' && <span className='text-red-600'>  password   hightest 20 character</span>}
                {errors.password?.type ==='pattern' && <span className='text-red-600'> password is must bs special character and small letter and a capital letter</span>}
               
                 
              </div>
               
              <div className="form-control mt-6">
                 
                <input type="submit"  value={"register"} className="btn bg-orange-900"  />
              </div>
            </form>
            <p> Already have an account?please <Link className='text-orange-600' to="/login">Login In</Link></p>
            <SocialLogin></SocialLogin>
          </div>
          <div className="text-center lg:text-center">
             <img src={img1} alt="" />
          </div>
        </div>
      </div>
    );
};

export default SignUp;
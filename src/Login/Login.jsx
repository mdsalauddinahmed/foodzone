 
import { useContext } from 'react';
import img1 from '../../src/assets/assets/Login/login.png';
import imgBg from '../../src/assets/assets/Login/loginbg.png';
 
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Pages/SharedComponent/socialLogin/SocialLogin';

const Login = () => {



  // const [disabled,setDisabled]=useState(true)
  const {signIn}=useContext(AuthContext)
  const navigate =useNavigate();
   
   const location =useLocation();
   const from = location.state?.from?.pathname ||  "/";

 

   const handleLogin = event=>{
    event.preventDefault();
    const form =event.target
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    signIn(email,password)
    .then(result =>{
      const user = result.user;
       console.log(user)
       Swal.fire({
        position: 'User logged In',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from,{replace:true});
    })
    
   }
  //  const validateCaptchaBtn=e=>{
  //   const user_captcha_value=e.target.value;
  // if(validateCaptcha(user_captcha_value)) {
  //   setDisabled(false)
  // } else{
  //   setDisabled(true)
  // }


  //  }
    return (
        <div className="hero  border-4 min-h-screen " style={{backgroundImage: `url(${imgBg})`}}>
        <div className="hero-content   md:flex">
          <div className="text-center lg:text-center">
             <img src={img1} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm    ">
            <h3 className='text-center font-bold text-4xl'>Login</h3>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                 
              </div>
              
                 
               
                 
              
              <div className="form-control mt-6">
                 
                <input   type="submit" value={"Login"}  className="btn bg-orange-900"  />
              </div>
              
            </form>
            <p>Are You new in this Resturant ?please <Link className='text-orange-600' to="/signUp">Register now</Link></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    );
};

export default Login;
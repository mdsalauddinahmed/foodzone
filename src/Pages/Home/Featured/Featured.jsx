import React from 'react';
import SectionTitle from '../../SharedComponent/SectionTitle/SectionTitle';
import FeaturedImg from '../../../assets/assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle heading={"Featured Item"} subHeading={"check it out"}>

            </SectionTitle>
            <div className='md:flex justify-center items-center px-36  pt-12 pb-20 bg-slate-300 bg-opacity-40'>
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20,2029</p>
                    <p className='uppercase text-3xl font-bold my-2'>where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorum dolore consequuntur dolores aut deserunt vitae, ab aspernatur possimus modi eum perspiciatis temporibus natus quasi ad qui maxime. Ea molestiae iusto corrupti autem sapiente mollitia assumenda velit quasi ratione alias.</p>
                    <button className='btn btn-outline mt-4 border-0 border-b-4 text-white'>Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
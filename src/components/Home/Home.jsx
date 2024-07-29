import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <Banner></Banner>
            <div>
                <h1 className='text-center text-4xl'>SECTION 1</h1>
            </div>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <div className='text-left max-w-7xl mx-auto'>
                <Featured></Featured>
                
            </div>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;

import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
// import slide6 from '../../assets/home/slide6.jpg'

const Category = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto '>
                <Swiper

                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className='text-4xl text-center -mt-16 text-white'>SALAD</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className='text-4xl text-center -mt-16 text-white'>SALAD</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className='text-4xl text-center -mt-16 text-white'>SALAD</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className='text-4xl text-center -mt-16 text-white'>SALAD</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className='text-4xl text-center -mt-16 text-white'>SALAD</h3>
                    </SwiperSlide>
                   


                </Swiper>
            </div>
        </>
    );
};

export default Category;
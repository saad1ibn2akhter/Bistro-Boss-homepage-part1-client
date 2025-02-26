import React from 'react';

const Featured = () => {
    return (
        <div>

            <section
                className="bg-fixed relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-gray-900/75 from-gray-900/95 to-gray-900/25 bg-gradient-to-r "
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className='flex justify-between items-center w-full'>
                        <div className="max-w-xl text-left ">
                            <h1 className="text-3xl font-extrabold sm:text-5xl">
                                Let us find your

                                <strong className="block font-extrabold text-rose-700"> Forever Home. </strong>
                            </h1>

                            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                                numquam ea!
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                <a
                                    href="#"
                                    className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                >
                                    Get Started
                                </a>

                                <a
                                    href="#"
                                    className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div>
                            <img className='w-[600px] h-[400px] bg-fixed' src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;
import React from 'react';

const MenuItem = ({item}) => {
    const {image , price ,recipe, name} = item;
    return (
        <div className='flex space-x-3'>
            <img style={{borderRadius:'0 200px 200px 200px'}} src={image} className='w-[100px]' alt="" />
            <div>
                <h3 className='uppercase'>{name} ----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'></p>
        </div>
    );
};

export default MenuItem;
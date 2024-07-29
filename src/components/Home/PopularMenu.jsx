import React, { useEffect, useState } from 'react';
import MenuItem from '../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
                // setMenu(data)
            })
    }, [])
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-center text-6xl font-bold p-3'>Popular items</h1>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;
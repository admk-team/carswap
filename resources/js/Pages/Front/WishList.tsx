import React from 'react'
import NavBar2 from '@/Components/Navbar/NabBar2'
import PricingCard from '@/Components/Cards/PricingCard';

export default function WishList({ auth, success, errors, wishlist }: any) {
    // console.log('wl: ', wishlist);

    return (
        <div>
            <NavBar2 auth={auth} />
            <div className="mx-auto max-w-screen-xl w-full h-full mt-10 ">
                <p className='text-bold text-3xl text-gray-950 text-uppercase'>WishList</p>

                {!wishlist && 
                <p className='text-bold text-2xl  mt-2'>Create your first wishlist now </p>}

                {wishlist && <PricingCard cars={wishlist} />}
            </div>
        </div>
    )
}

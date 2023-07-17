import React from 'react'
import NavBar2 from '@/Components/Navbar/NabBar2'

export default function WishList({ auth, success, errors }: any) {
    return (
        <div>
            <NavBar2 auth={auth} />
            <div className="mx-auto max-w-screen-xl w-full h-full mt-10 ">
                <p className='text-bold text-3xl text-gray-950 text-uppercase'>WishList</p>
                <p className='text-bold text-2xl  mt-2'>Create your first wishlist now </p>
            </div>
        </div>
    )
}

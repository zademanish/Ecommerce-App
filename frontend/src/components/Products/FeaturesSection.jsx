import React from 'react'
import { HiArrowPath, HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi2"

const FeaturesSection = () => {
  return (
    <section className='py-16 px-4 bg-white'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            {/* featured 1 */}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-4'>
                    <HiShoppingBag className="text-xl "/>
                </div>
                <h4 className='tracking-tighter mb-2'>
                    FREE INTERNATIONAL SHIPPING
                </h4>
                <p className="text-gray-600 text-sm tracking-tighter">
                    On all orders over $100.00
                </p>
            </div>

            {/* featured 2 */}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-4'>
                    <HiArrowPathRoundedSquare className="text-xl "/>
                </div>
                <h4 className='tracking-tighter mb-2'>
                    45 DAYS RETURN
                </h4>
                <p className="text-gray-600 text-sm tracking-tighter">
                    Money back guarantee
                </p>
            </div>
            {/* featured 3 */}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-4'>
                    <HiOutlineCreditCard className="text-xl "/>
                </div>
                <h4 className='tracking-tighter mb-2'>
                    SECURE CHECKOUT
                </h4>
                <p className="text-gray-600 text-sm tracking-tighter">
                   100% secure checkout process
                </p>
            </div>
        </div>

    </section>
  )
}

export default FeaturesSection
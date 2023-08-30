import React from 'react'
import { Roll } from 'react-awesome-reveal'

function RollEffect() {
    return (
        <div className='flex justify-center items-center h-screen px-2'>
            <div className=' border-2 mb-5 text-white w-[50em]'>
                <h1 className=' bg-gray-300 pl-1 text-xl font-bold text-black'>Roll Effect</h1>
                <div className="slide p-2">
                    <Roll >
                        <p className='text-2xl font-bold'>I am Roll</p>
                        <p>...then comes my turn...</p>
                        <p>...and finally you see me!</p>
                    </Roll>
                </div>
            </div>
        </div>
    )
}

export default RollEffect
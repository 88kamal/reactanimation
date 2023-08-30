import React from 'react'
import { Hinge } from 'react-awesome-reveal'

function HingeEffect() {
    return (
        <div className='flex justify-center items-center h-screen px-2'>
            <div className=' border-2 mb-5 text-white w-[50em]'>
                <h1 className=' bg-gray-300 pl-1 text-xl font-bold text-black'>Hinge Effect</h1>
                <div className="slide p-2">
                    <Hinge direction={'left'}>
                        <p className='text-2xl font-bold'>I am Hinge</p>
                        <p>...then comes my turn...</p>
                        <p>...and finally you see me!</p>
                    </Hinge>
                </div>
            </div>
        </div>
    )
}

export default HingeEffect
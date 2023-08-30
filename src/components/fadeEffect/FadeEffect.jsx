import React from 'react'
import { Fade } from 'react-awesome-reveal'

function FadeEffect() {
    return (
        <div className="flex justify-center items-center h-screen px-2">
            <div className=' border-2 mb-5 text-white w-[50em]'>
                <h1 className=' bg-gray-300 pl-1 text-xl font-bold text-black'>Fade Effect</h1>
                <div className="slide p-2">
                    <Fade direction={'left'} cascade damping={0.1}>
                        <p className='text-2xl font-bold'>I am Fade</p>
                        <p>...then comes my turn...</p>
                        <p>...and finally you see me!</p>
                    </Fade>
                </div>
            </div>

        </div>
    )
}

export default FadeEffect
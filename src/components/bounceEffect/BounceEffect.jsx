import React from 'react'
import { Bounce } from 'react-awesome-reveal'

function BounceEffect() {
  return (
    <div className="flex justify-center items-center h-screen px-2 ">
      <div className=' border-2 mb-5 text-white w-[50em]'>
        <h1 className=' bg-gray-300 text-black pl-1 text-xl font-bold'>Bounce Effect</h1>
        <div className="slide p-2">
          <Bounce >
            <p className='text-2xl font-bold'>I am Bounce</p>
            <p>...then comes my turn...</p>
            <p>...and finally you see me!</p>
          </Bounce>
        </div>
      </div>
    </div>
  )
}

export default BounceEffect
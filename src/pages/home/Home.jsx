import React from 'react'
import { Link } from 'react-router-dom'
import RollEffect from '../../components/rollEffect/RollEffect'

function Home() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 lg:py-20 mx-auto">
                    <div className="flex flex-wrap w-full  flex-col items-center text-center mb-4">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-100">
                            React Animation By Devknus
                        </h1>
                        <p className='text-lg text-white font-semibold'>
                            <span className='text-[#75edff] text-2xl' >React </span>
                            <span className='text-[#b4a3ff] text-2xl' >Awesome </span>
                            <span className='text-[#8dffc6] text-2xl' >Reveal</span>
                        </p>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/3 md:w-1/2 p-2 w-full  ">
                            <Link to={'/bounce'}>
                                <div
                                    className="border border-gray-200 p-2 rounded-lg
                                 bg-[#0f312f] hover:bg-gray-00 text-white">
                                    <div className="flex items-center space-x-2 justify-center">
                                        <img
                                            className='w-10 App-logo'
                                            src="/react.png"
                                            alt="img"
                                        />
                                        <h2 className="text-lg font-medium title-font">
                                            Bounce Effect
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-2 w-full  ">
                            <Link to={'/fade'}>
                                <div
                                    className="border border-gray-200 p-2 rounded-lg
                                 bg-[#0f312f] hover:bg-gray-00 text-white">
                                    <div className="flex items-center space-x-2 justify-center">
                                        <img
                                            className='w-10 App-logo'
                                            src="/react.png"
                                            alt="img"
                                        />
                                        <h2 className="text-lg font-medium title-font">
                                            Fade Effect
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-2 w-full  ">
                            <Link to={'/flip'}>
                                <div
                                    className="border border-gray-200 p-2 rounded-lg
                                 bg-[#0f312f] hover:bg-gray-00 text-white">
                                    <div className="flex items-center space-x-2 justify-center">
                                        <img
                                            className='w-10 App-logo'
                                            src="/react.png"
                                            alt="img"
                                        />
                                        <h2 className="text-lg font-medium title-font">
                                            Flip Effect
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-2 w-full  ">
                            <Link to={'/hinge'}>
                                <div
                                    className="border border-gray-200 p-2 rounded-lg
                                 bg-[#0f312f] hover:bg-gray-00 text-white">
                                    <div className="flex items-center space-x-2 justify-center">
                                        <img
                                            className='w-10 App-logo'
                                            src="/react.png"
                                            alt="img"
                                        />
                                        <h2 className="text-lg font-medium title-font">
                                            Hinge Effect
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-2 w-full  ">
                            <Link to={'/jackInTheBox'}>
                                <div
                                    className="border border-gray-200 p-2 rounded-lg
                                 bg-[#0f312f] hover:bg-gray-00 text-white">
                                    <div className="flex items-center space-x-2 justify-center">
                                        <img
                                            className='w-10 App-logo'
                                            src="/react.png"
                                            alt="img"
                                        />
                                        <h2 className="text-lg font-medium title-font">
                                            JackInTheBox Effect
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-2 w-full  ">
                            <Link to={'/roll'}>
                                <div
                                    className="border border-gray-200 p-2 rounded-lg
                                 bg-[#0f312f] hover:bg-gray-00 text-white">
                                    <div className="flex items-center space-x-2 justify-center">
                                        <img
                                            className='w-10 App-logo'
                                            src="/react.png"
                                            alt="img"
                                        />
                                        <h2 className="text-lg font-medium title-font">
                                            Roll Effect
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-2 w-full  ">
                            <Link to={'/rotate'}>
                                <div
                                    className="border border-gray-200 p-2 rounded-lg
                                 bg-[#0f312f] hover:bg-gray-00 text-white">
                                    <div className="flex items-center space-x-2 justify-center">
                                        <img
                                            className='w-10 App-logo'
                                            src="/react.png"
                                            alt="img"
                                        />
                                        <h2 className="text-lg font-medium title-font">
                                            Rotate Effect
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-2 w-full  ">
                            <Link to={'/slide'}>
                                <div
                                    className="border border-gray-200 p-2 rounded-lg
                                 bg-[#0f312f] hover:bg-gray-00 text-white">
                                    <div className="flex items-center space-x-2 justify-center">
                                        <img
                                            className='w-10 App-logo'
                                            src="/react.png"
                                            alt="img"
                                        />
                                        <h2 className="text-lg font-medium title-font">
                                            Slide Effect
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-2 w-full  ">
                            <Link to={'/zoom'}>
                                <div
                                    className="border border-gray-200 p-2 rounded-lg
                                 bg-[#0f312f] hover:bg-gray-00 text-white">
                                    <div className="flex items-center space-x-2 justify-center">
                                        <img
                                            className='w-10 App-logo'
                                            src="/react.png"
                                            alt="img"
                                        />
                                        <h2 className="text-lg font-medium title-font">
                                            Zoom Effect
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
import React from "react";
import portrait from "../assets/img/portrait.jpg"
import {AiOutlineArrowDown} from "react-icons/ai";

const Home = () => {
    return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-green-100 via-white to-green-100">
       
       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
            <div className="flex flex-col justify-center h-2/3 mx-auto">
                <h2 className="text-4xl sm:text-7xl font-bold">
                    Welcome! I'm Calvin
                </h2>
                <p className="py-4 max-w-md">
                    I'm a fullstack developer from Toronto. Hoping to gain valuable skills!
                </p>

                <div>
                    <button className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-300">
                        Portfolio  
                        <span className="inline-block transform transition duration-200 group-hover:scale-150">
                            <AiOutlineArrowDown/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                {/* screen size greater than md, portrait will be full. Otherwise it will be smaller on smaller screens*/}
                <img src={portrait} alt="portrait"  className="rounded-2xl w-2/3 md:w-full"/>
            </div>
       </div>
    </div>
    )
}

export default Home;
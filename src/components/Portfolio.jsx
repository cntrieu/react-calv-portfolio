import React from "react";
import codingquiz from '../assets/img/codingquiz.png';
import socialmedapi from '../assets/img/socialmedapi.png';
import employeetracker from '../assets/img/employeetracker.png';
import melodymatch from '../assets/img/melodymatch.png';
import nomadnebula from '../assets/img/nomadnebula.jpg';
import weatherdashboard from '../assets/img/weatherdashboard.png';


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: nomadnebula,
        },
        {
            id: 2,
            src: melodymatch,
        },
        {
            id: 3,
            src: weatherdashboard,
        },
        {
            id: 4,
            src: codingquiz,
        },
        {
            id: 5,
            src: socialmedapi,
        },
        {
            id: 6,
            src: employeetracker,
        },
    ]
    return (
        <div name="portfolio" className="bg-gradient-to-b from-green-100 via-white to-green-100 w-full py-40">
           
           <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-400">Portfolio</p>
                    <p className="py-4">Below you can find some of my projects as well as checking out the live demos and code</p>
                </div>

     

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                    portfolios.map(({id, src}) => {
                        return <div className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt="" className="rounded-md hover:scale-105 duration-200" />
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                        </div>
                    </div>
                    })
                    }
                </div>
            
           </div>
        </div>
    )
}
export default Portfolio;
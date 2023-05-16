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
            title: nomadnebula,
            repo: "https://github.com/utgroup3/Nomad-Nebula",
            demo: "https://the-nomad-nebula.herokuapp.com/"
        },
        {
            id: 2,
            title: melodymatch,
            repo: "https://github.com/team-2-project/Melody-Match",
            demo: "https://team-2-project.github.io/Melody-Match/",
        },
        {
            id: 3,
            title: weatherdashboard,
            repo: "https://github.com/cntrieu/weather-dashboard",
            demo: "https://cntrieu.github.io/weather-dashboard/"
        },
        {
            id: 4,
            title: codingquiz,
            repo: "https://github.com/cntrieu/coding-quiz",
            demo: "https://cntrieu.github.io/coding-quiz/"
        },
        {
            id: 5,
            title: socialmedapi,
            repo: "https://github.com/cntrieu/socialmed-api",
            demo: "https://drive.google.com/file/d/1pCb2qCGMCbKSH8-cwBY9DExjAHt2AicH/view"
        },
        {
            id: 6,
            title: employeetracker,
            repo: "https://github.com/cntrieu/SQL-employee-tracker",
            demo: "https://drive.google.com/file/d/1ZjEn-aPqYaBtpKjXYceLei_8n4CJBqoK/view?usp=sharing"
        },
    ]
    return (
        <div name="portfolio" className="bg-gradient-to-b from-green-100 via-white to-green-100 w-full py-40">
           
           <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-400">Portfolio</p>
                    <p className="py-4">Below you can find some of my projects as well as checking out the live demos and code</p>
                </div>

     

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                    portfolios.map(({id, title, repo, demo}) => {
                        return <div className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={title} alt="" className="rounded-md hover:scale-105 duration-200" />
                        <div className="flex items-center justify-center">
                            <a href={demo}>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                            </a>
                            <a href={repo}>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                            </a>
                          
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
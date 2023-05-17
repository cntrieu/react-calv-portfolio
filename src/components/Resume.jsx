import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import JS from '../assets/img/skills/js.png'
import HTML from '../assets/img/skills/html-5.png'
import API from '../assets/img/skills/api.png'
import CSS from '../assets/img/skills/css-3.png'
import reactIcon from '../assets/img/skills/atom.png'
import nodejs from '../assets/img/skills/nodejs.png'
import graphql from '../assets/img/skills/graphql.png'
import handlebars from '../assets/img/skills/handlebars.png'
import heroku from '../assets/img/skills/heroku.png'
import mongodb from '../assets/img/skills/mongodb.png'
import mysql from '../assets/img/skills/mysql.png'
import PWA from '../assets/img/skills/PWA.png'
import tailwind from "../assets/img/skills/Tailwind_CSS_Logo.svg.png"
import resumePlaceholder from "../assets/resume/resume.docx"

const style = {
item: {
    width: '100px', 
    height: '100px', 
    textAlign: 'center',
  }
}


const Resume = () => {
 
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
      
    return (
       <section className="resume bg-gradient-to-b from-green-100 via-white to-green-100 w-full py-40" id="resume">
            <div className="skill-box max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full">
                <h2 className="text-4xl font-bold inline border-b-4 border-gray-400 py-3">Technologies</h2>
                <p className="py-6 text-2xl">Here are some technologies that I have used: </p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider py-20" >

                    <div className="item" style={style.item}>
                        <img src={JS} alt="JavaScript" />
                        <h4 className="font-bold">JavaScript</h4>
                    </div>
                    

                    <div className="item" style={style.item}>
                        <img src={HTML} alt="HTML" />
                        <h4 className="font-bold">HTML</h4>
                    </div>

                    <div className="item" style={style.item}>
                        <img src={CSS} alt="CSS" />
                        <h4 className="font-bold">Advanced CSS</h4> 
                    </div>

                    <div className="item" style={style.item}>
                        <img src={tailwind} alt="Tailwind CSS" />
                        <h4 className="font-bold">Tailwind</h4>
                    </div>

                    <div className="item" style={style.item}>
                        <img src={API} alt="API" />
                        <h4 className="font-bold">Web, Server-side, Third-party APIs</h4>
                    </div>

                    <div className="item" style={style.item}>
                        <img src={nodejs} alt="Node.js" />
                        <h4 className="font-bold">Node.js</h4>
                    </div>

                    <div className="item" style={style.item}>
                        <img src={reactIcon} alt="React" />
                        <h4 className="font-bold">React</h4> 
                    </div>

                    <div className="item" style={style.item}>
                        <img src={graphql} alt="GraphQL" />
                        <h4 className="font-bold">GraphQL</h4>
                    </div>

                    <div className="item" style={style.item}>
                        <img src={handlebars} alt="Handlebars.js" />
                        <h4 className="font-bold">Handlebars.js</h4>
                    </div>

                    <div className="item" style={style.item}>
                        <img src={heroku} alt="Heroku" />
                        <h4 className="font-bold">Heroku</h4> 
                    </div>

                    <div className="item" style={style.item}>
                        <img src={PWA} alt="Progressive Web Applications" />
                        <h4 className="font-bold">Progressive Web Applications</h4> 
                    </div>

                    <div className="item" style={style.item}>
                        <img src={mongodb} alt="MongoDB" />
                        <h4 className="font-bold">MongoDB</h4> 
                    </div>

                    <div className="item" style={style.item}>
                        <img src={mysql} alt="MySQL" />
                        <h4 className="font-bold">MySQL</h4> 
                    </div>
                </Carousel>

                <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full mt-10">
            <a href={resumePlaceholder}><h2 className="hover:text-sky-700 text-3xl font-bold">Click me to download my resume!</h2></a>
           </div>
            </div>
       </section>
    )
}

export default Resume;
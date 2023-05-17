import React from "react";
import {BsInstagram, BsLinkedin, BsGithub} from "react-icons/bs";

const Footer = () => {
    return (
        <footer className='h-20 flex justify-center items-center'>
            <div id='icons' className='flex justify-center'>

        
                <a href='https://github.com/cntrieu' className='mx-3 text-4xl hover:scale-105 duration-300'><BsGithub /></a>

                <a href='https://www.linkedin.com/in/calvin-trieu-076a4b212/' className='mx-3 text-4xl hover:scale-105 duration-300'><BsLinkedin /></a>

                <a href='https://www.instagram.com/cntrieu/' className='mx-3 text-4xl hover:scale-105 duration-300'><BsInstagram /></a>

            </div>
        </footer>
    )
}

export default Footer;
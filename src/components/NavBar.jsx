import React, { useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [nav, setNav] = useState(false)

    // const links = [
    //     {
    //         id: 1,
    //         link: 'home'
    //     },
    //     {
    //         id: 2,
    //         link: 'about'
    //     },
    //     {
    //         id: 3,
    //         link: 'portfolio'
    //     },
    //     {
    //         id: 4,
    //         link: 'resume'
    //     },
    //     {
    //         id: 5,
    //         link: 'contact'
    //     }
    // ]
    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div>
                <h1 className="text-5xl ml-2">Calvin Trieu</h1>
            </div>

            <ul className="hidden md:flex">
                {/* {links.map(({id, link}) => {
                    return <li key={id} className="px-4 cursor-pointer font-medium text-gray-300 hover:scale-105 duration-100 capitalize">
                        <LinkScroll to={link} smooth duration={400}>{link}</LinkScroll>
                        </li>
                })} */}
                <li className="px-4 cursor-pointer font-medium text-gray-300 hover:scale-105 duration-100 capitalize">
                    <Link to="/react-calv-portfolio">home</Link>
                </li>

                <li className="px-4 cursor-pointer font-medium text-gray-300 hover:scale-105 duration-100 capitalize">
                    <Link to="/portfolio">portfolio</Link>
                </li>

                <li className="px-4 cursor-pointer font-medium text-gray-300 hover:scale-105 duration-100 capitalize">
                    <Link to="/resume">resume</Link>
                </li>

                <li className="px-4 cursor-pointer font-medium text-gray-300 hover:scale-105 duration-100 capitalize">
                    <Link to="/contact">contact</Link>
                </li>
               
            </ul>

                {/* If nav is true, FaTimes (X) will be present. If false, FaBars will be present
                Also set the navbar to hidden and replaced with burger when screen is smaller*/}
            <div 
            onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden">
             {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 text-gray-300">

                {/* {links.map(({id, link}) => {
                    return <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                        <LinkScroll onClick={() => setNav(!nav)} to={link} smooth duration={400}>{link}</LinkScroll>
                        </li>
                })} */}

                <li className="px-4 cursor-pointer font-medium text-gray-300 hover:scale-105 duration-100 capitalize">
                    <Link to="/react-calv-portfolio">home</Link>
                </li>

                <li className="px-4 cursor-pointer font-medium text-gray-300 hover:scale-105 duration-100 capitalize">
                    <Link to="/portfolio">portfolio</Link>
                </li>

                <li className="px-4 cursor-pointer font-medium text-gray-300 hover:scale-105 duration-100 capitalize">
                    <Link to="/resume">resume</Link>
                </li>

                <li className="px-4 cursor-pointer font-medium text-gray-300 hover:scale-105 duration-100 capitalize">
                    <Link to="/contact">contact</Link>
                </li>
            </ul>

            )}
        </div>
    )
}

export default NavBar;
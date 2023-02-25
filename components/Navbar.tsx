/* eslint-disable @next/next/no-img-element */

import { styled } from '@mui/system';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";

import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, screenBasedAttribute } from '../lib/mediaQuery';

const Navbar = () => {

    const [lastScrollTop, setScrollTop] = useState(0)
    const [showNavbar, setShowNavbar] = useState(true)

    useEffect(() => {
        let eventListener = () => {
            var scrollTop = document.documentElement.scrollTop
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                setShowNavbar(false)
            } else {
                setShowNavbar(true)
            }
            setScrollTop(scrollTop)
        }
        window.addEventListener('scroll', eventListener)
    }, [lastScrollTop])

    return (
		<>
			<motion.div
            transition={{
                y: { type: "spring", stiffness: 500, damping: 50 },
                duration: 1.5
            }}
            variants={{
                hidden: {
                    y: '-100px'
                },
                visible: {
                    y: 0
                }
            }}
            initial={"visible"}
            className="h-[70px] ml-5 mr-5 md:ml-10 md:mr-10 z-50 backdrop-blur-sm"
            style={{
                y: showNavbar ? '0' : '-100px',
                transition: 'all .25s ease-in-out',
                }}>
                <div className='h-[70px] w-full grid grid-cols-2 md:grid-cols-3'>
                    {/* Left Side Text */}
                    <div className='hidden md:flex items-center'>
                        <h1 className='font-body font-extralight text-white uppercase text-xs tracking-wide md:tracking-wider'><span className='font-display opacity-100'>×</span> ENTER THE HIDEOUTS</h1>
                    </div>
                    
                    {/* Logo */}
                    <div className='flex items-center md:justify-center'>
                        <img alt='logo' className='hidden md:block w-auto h-8 cursor-pointer opacity-70' src={"/images/logov2.png"}></img>
                        <img alt='logo-mobile' className='block md:hidden w-auto h-20 cursor-pointer' src={"/images/ATHER_white_logo.png"}></img>
                    </div>

                    {/* Socials */}
                    <div className='hidden md:flex justify-end items-center mr-4 gap-5'>
                        <img className='hover:scale-110 mt-[2px] cursor-pointer h-auto w-4' onClick={() => {
                            window.open("https://discord.gg/ather")
                        }} src="/images/discord.avif" alt="discord" />
                        <img className='hover:scale-110 mt-[2px] cursor-pointer h-auto w-4' onClick={() => {
                            window.open("https://twitter.com/PlanetAtherNFT")
                        }} src="/images/twitter.avif" alt="twitter" />
                        <img className='hover:scale-110 mt-[2px] cursor-pointer h-auto w-4' onClick={() => {
                            window.open("https://www.instagram.com/planetathernft/")
                        }} src="/images/instagram.svg" alt="instagram" />
                    </div>

                    {/* Menu */}
                    <div className='flex md:hidden items-center justify-end'>
                        <div className='flex items-center justify-center'>
                            <i className='gg-menu-right invert'></i>
                        </div>
                    </div>
                </div>
            </motion.div>
		</>
	)
}

export default Navbar
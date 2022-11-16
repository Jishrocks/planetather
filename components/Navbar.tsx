/* eslint-disable @next/next/no-img-element */

import { styled } from '@mui/system';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";

import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, screenBasedAttribute } from '../lib/mediaQuery';

const TabItem = styled('p')({
    font: '400 0.7rem / 80% FFMark',
    fontFamily: 'FFMark',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginLeft: '21px',
    marginRight: '21px',
    // background: 'linear-gradient(56deg, #f3a5da 0%, #c0baeb 100%)',
    // WebkitBackgroundClip: 'text',
    // color: 'transparent',
    color: '#fbfbfb',
    transition: '0.15s ease-in-out',
    ":hover": {
        textShadow: "0 0 16px rgb(255, 255, 255, 0.6)"
    }
})

const Tab = styled('div')({
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
})

const Navbar = () => {

    let {screen_sm, screen_md, screen_lg, screen_xl, screens} = useMediaQuery()

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
            // animate={animation}
            style={{
                height: '70px', 
                // position: 'sticky',
                // top: 0,
                y: showNavbar ? '0' : '-100px',
                transition: 'all .25s ease-in-out',
                // background: 'linear-gradient(to bottom, #21212195, transparent)',
                // background: '#fbfbfb',
                marginLeft: '36px',
                marginRight: '36px',
                backdropFilter: 'blur(30px)',
                // borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                zIndex: 999,
                }}>
                <div style={{height: 'inherit', width: '100%', marginLeft: '0px', display: 'grid', gridTemplateColumns: screenBasedAttribute(screens, {
                    screen_sm: '1fr 1fr',
                    screen_md: '1fr 1fr 1fr',
                    screen_lg: '1fr 1fr 1fr',
                    screen_xl: '1fr 1fr 1fr'
                })}}>
                    {/* Left Side Text */}
                    <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                        <h1 style={{fontFamily: 'Mono', color: 'silver', fontSize: screenBasedAttribute(screens, {
                            screen_sm: '8px',
                            screen_md: '10px',
                            screen_lg: '10px',
                            screen_xl: '10px'
                        }), marginBlock: 0, textTransform: 'uppercase', letterSpacing: '0.5px'}}>× ENTER COLLECTIVE REALITY.</h1>
                    </div>
                    
                    {/* Logo */}
                    <div style={{display: screenBasedAttribute(screens, {
                        screen_sm: 'none',
                        screen_md: 'flex',
                        screen_lg: 'flex',
                        screen_xl: 'flex'
                    }), justifyContent: 'center', alignItems: 'center'}}>
                        <img onClick={() => {
                            // if (parallaxRef) {
                            //     (parallaxRef.current as any).scrollTo(0)
                            // }
                        }} width={"auto"} height={"36px"} src={"/images/logov2.png"} style={{cursor: 'pointer', filter: '', opacity: 0.7}}></img>
                        {/* <Typography onClick={() => {
                            // if (parallaxRef) {
                            //     (parallaxRef.current as any).scrollTo(0)
                            // }
                        }} style={{color: 'white', fontFamily: 'FFMark', fontSize: '1.5rem', cursor: 'pointer'}}>planet</Typography>
                        <Typography onClick={() => {
                            // if (parallaxRef) {
                            //     (parallaxRef.current as any).scrollTo(0)
                            // }
                        }} style={{color: 'white', fontFamily: 'FFMark', fontWeight: 'bold', fontSize: '1.5rem', cursor: 'pointer'}}>ather</Typography> */}
                    </div>

                    {/* Socials */}
                    <div style={{display: screenBasedAttribute(screens, {
                        screen_sm: 'none',
                        screen_md: 'flex',
                        screen_lg: 'flex', 
                        screen_xl: 'flex',
                    }), justifyContent: 'right', alignItems: 'center', gap: 25, marginRight: '16px', opacity: 1}}>
                        <motion.img onClick={() => {
                            window.open("https://discord.gg/xjETANVKBe")
                        }} whileHover={{scale: 1.1}} src="/images/discord.avif" style={{marginTop: '2px', cursor: 'pointer', filter: ''}} width={"18px"} height={"auto"} alt="discord" />
                        <motion.img onClick={() => {
                            window.open("https://twitter.com/planetather")
                        }} whileHover={{scale: 1.1}} src="/images/twitter.avif" style={{cursor: 'pointer', filter: ''}} width={"18px"} height={"auto"} alt="twitter" />
                        <motion.img onClick={() => {
                            window.open("https://www.instagram.com/planetather/")
                        }} whileHover={{scale: 1.1}} src="/images/instagram.svg" style={{cursor: 'pointer', filter: ''}} width={"18px"} height={"auto"} alt="instagram" />
                    </div>

                    {/* Menu */}
                    <div style={{display: screenBasedAttribute(screens, {
                        screen_sm: 'flex',
                        screen_md: 'none',
                        screen_lg: 'none',
                        screen_xl: 'none'
                    }),  alignItems: 'center', justifyContent: 'right'}}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <i style={{filter: 'invert()'}} className='gg-menu-right'></i>
                        </div>
                    </div>
                </div>
            </motion.div>
		</>
	)
}

export default Navbar
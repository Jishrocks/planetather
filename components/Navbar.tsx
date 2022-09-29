/* eslint-disable @next/next/no-img-element */
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { styled } from '@mui/system';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";

import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';

const TabItem = styled('p')({
    fontSize: '0.8rem',
    fontFamily: 'FFMark',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#fff',
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
    gap: '3.5rem',
})

const Navbar = () => {

    let isMobile = useMediaQuery('(max-width: 1200px)')

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
                height: '4.5rem', 
                position: 'sticky',
                top: 0,
                y: showNavbar ? '0' : '-100px',
                transition: 'all .25s ease-in-out',
                // background: 'linear-gradient(to bottom, #21212195, transparent)',
                background: 'rgb(0, 0, 0, 0.2)',
                backdropFilter: 'blur(30px)',
                // borderBottom: '1px solid rgba(255, 255, 255, 0.9)',
                zIndex: '999'}}>
                <div style={{height: 'inherit', width: 'auto', position: 'sticky', top: 0, marginLeft: '4rem', marginRight: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
                    {/* Navigation */}
                    <div style={{display: !isMobile ? 'flex' : 'none', justifyContent: 'left', alignItems: 'center'}}>
                        <Tab>
                            <TabItem onClick={() => {
                                // if (parallaxRef) {
                                //     (parallaxRef.current as any).scrollTo(1)
                                // }
                            }}>Prologue</TabItem>
                            <TabItem onClick={() => {
                                // if (parallaxRef) {
                                //     (parallaxRef.current as any).scrollTo(2)
                                // }
                            }}>Vision</TabItem>
                            <TabItem onClick={() => {
                                // if (parallaxRef) {
                                //     (parallaxRef.current as any).scrollTo(3)
                                // }
                            }}>Starquest</TabItem>
                            <TabItem onClick={() => {
                                // if (parallaxRef) {
                                //     (parallaxRef.current as any).scrollTo(4)
                                // }
                            }}>Creators</TabItem>
                        </Tab>
                    </div>
                    
                    {/* Logo */}
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img onClick={() => {
                            // if (parallaxRef) {
                            //     (parallaxRef.current as any).scrollTo(0)
                            // }
                        }} width={"auto"} height={"40px"} src={"/images/logov2.png"} style={{marginRight: '10px', cursor: 'pointer'}}></img>
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
                    <div style={{display: !isMobile ? 'flex' : 'none', justifyContent: 'right', alignItems: 'center', gap: 4}}>
                        <motion.img onClick={() => {
                            window.open("https://discord.gg/xjETANVKBe")
                        }} whileHover={{scale: 1.1}} src="/images/discord.avif" style={{marginTop: '2px', cursor: 'pointer'}} width={"18px"} height={"auto"} alt="discord" />
                        <motion.img onClick={() => {
                            window.open("https://twitter.com/planetather")
                        }} whileHover={{scale: 1.1}} src="/images/twitter.avif" style={{cursor: 'pointer'}} width={"18px"} height={"auto"} alt="twitter" />
                        <motion.img onClick={() => {
                            window.open("https://www.instagram.com/planetather/")
                        }} whileHover={{scale: 1.1}} src="/images/instagram.svg" style={{cursor: 'pointer'}} width={"18px"} height={"auto"} alt="instagram" />
                    </div>

                    {/* Menu */}
                    <div style={{display: !isMobile ? 'none' : 'flex', alignItems: 'center', justifyContent: 'right', width: '70%'}}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <MenuIcon style={{color: 'white', fontSize: '32px'}}></MenuIcon>
                        </div>
                    </div>
                </div>
            </motion.div>
		</>
	)
}

export default Navbar
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { styled } from '@mui/system';
import { motion, useAnimation } from "framer-motion";
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
    color: 'white',
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

    const animation = useAnimation()

    useEffect(() => {
        let eventListener = () => {
            var scrollTop = document.documentElement.scrollTop
            if (scrollTop > lastScrollTop) {
                animation.start('hidden')
            } else {
                animation.start('visible')
            }
            setScrollTop(scrollTop)
        }
        window.addEventListener('scroll', eventListener)
    }, [lastScrollTop])

    return (
		<>
			<motion.div
            transition={{
                y: { type: "spring", stiffness: 300, damping: 50 },
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
                height: '5rem', 
                position: 'sticky',
                top: 0,
                background: 'linear-gradient(to bottom, #080913, 70%, transparent)',
                zIndex: '999'}}>
                <Box sx={{height: 'inherit', width: 'auto', position: 'sticky', top: 0, marginLeft: '10%', marginRight: '10%', display: 'flex'}}>
                    {/* Logo */}
                    <Box style={{display: 'flex', justifyContent: 'left', alignItems: 'center', width: '30%'}}>
                        <img onClick={() => {
                            // if (parallaxRef) {
                            //     (parallaxRef.current as any).scrollTo(0)
                            // }
                        }} width={"auto"} height={"42px"} src={"/images/logo.png"} style={{marginRight: '5px', cursor: 'pointer', color: 'white'}}></img>
                        <Typography onClick={() => {
                            // if (parallaxRef) {
                            //     (parallaxRef.current as any).scrollTo(0)
                            // }
                        }} sx={{color: 'white', fontFamily: 'FFMark', fontSize: '1.5rem', cursor: 'pointer'}}>planet</Typography>
                        <Typography onClick={() => {
                            // if (parallaxRef) {
                            //     (parallaxRef.current as any).scrollTo(0)
                            // }
                        }} sx={{color: 'white', fontFamily: 'FFMark', fontWeight: 'bold', fontSize: '1.5rem', cursor: 'pointer'}}>ather</Typography>
                    </Box>

                    {/* Navigation */}
                    <Box style={{display: !isMobile ? 'flex' : 'none', width: '1000%', justifyContent: 'center', alignItems: 'center'}}>
                        <Tab>
                            <TabItem onClick={() => {
                                // if (parallaxRef) {
                                //     (parallaxRef.current as any).scrollTo(1)
                                // }
                            }}>Epilogue</TabItem>
                            <TabItem onClick={() => {
                                // if (parallaxRef) {
                                //     (parallaxRef.current as any).scrollTo(2)
                                // }
                            }}>Vision</TabItem>
                            <TabItem onClick={() => {
                                // if (parallaxRef) {
                                //     (parallaxRef.current as any).scrollTo(3)
                                // }
                            }}>Roadmap</TabItem>
                            <TabItem onClick={() => {
                                // if (parallaxRef) {
                                //     (parallaxRef.current as any).scrollTo(4)
                                // }
                            }}>Creators</TabItem>
                        </Tab>
                    </Box>

                    {/* Socials */}
                    <Box sx={{display: !isMobile ? 'flex' : 'none', justifyContent: 'right', alignItems: 'center', gap: 4, width: '30%'}}>
                        <motion.img onClick={() => {
                            window.open("https://discord.gg/xjETANVKBe")
                        }} whileHover={{scale: 1.1}} src="/images/discord.avif" style={{marginTop: '2px', cursor: 'pointer'}} width={"18px"} height={"auto"} alt="discord" />
                        <motion.img onClick={() => {
                            window.open("https://twitter.com/planetather")
                        }} whileHover={{scale: 1.1}} src="/images/twitter.avif" style={{cursor: 'pointer'}} width={"18px"} height={"auto"} alt="twitter" />
                        <motion.img onClick={() => {
                            window.open("https://www.instagram.com/planetather/")
                        }} whileHover={{scale: 1.1}} src="/images/instagram.svg" style={{cursor: 'pointer'}} width={"18px"} height={"auto"} alt="instagram" />
                    </Box>

                    {/* Menu */}
                    <Box sx={{display: !isMobile ? 'none' : 'flex', alignItems: 'center', justifyContent: 'right', width: '70%'}}>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <MenuIcon sx={{color: 'white', fontSize: '32px'}}></MenuIcon>
                        </Box>
                    </Box>
                </Box>
            </motion.div>
		</>
	)
}

export default Navbar
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { NextPage } from "next";

import { styled } from '@mui/system';
import { motion, useAnimation } from "framer-motion";
import { MutableRefObject, useEffect, useState } from "react";
import React from "react";

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

const Navbar: NextPage = () => {

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
            animate={animation}
            style={{
                height: '5rem', 
                position: 'sticky',
                top: 0,
                backgroundColor: '#080913',
                borderBottom: '1px solid #171725',
                zIndex: '999'}}>
                <Grid container sx={{height: 'inherit', width: 'auto', position: 'sticky', top: 0, marginLeft: '10%', marginRight: '10%'}}>
                    <Grid item xs={2}>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                            <img onClick={() => {
                                // if (parallaxRef) {
                                //     (parallaxRef.current as any).scrollTo(0)
                                // }
                            }} width={"auto"} height={"50px"} src={"/images/logo.png"} style={{marginRight: '5px', marginTop: '3px', cursor: 'pointer'}}></img>
                            <Typography onClick={() => {
                                // if (parallaxRef) {
                                //     (parallaxRef.current as any).scrollTo(0)
                                // }
                            }} sx={{color: 'white', fontFamily: 'Regular', fontSize: '1.5rem', cursor: 'pointer'}}>planet</Typography>
                            <Typography onClick={() => {
                                // if (parallaxRef) {
                                //     (parallaxRef.current as any).scrollTo(0)
                                // }
                            }} sx={{color: 'white', fontFamily: 'Bold', fontSize: '1.5rem', cursor: 'pointer'}}>ather.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs>
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
                    </Grid>
                    <Grid item xs={1.5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3}}>
                        <motion.img onClick={() => {
                            window.open("https://discord.gg/xjETANVKBe")
                        }} whileHover={{scale: 1.1}} src="/images/discord.png" style={{marginTop: '2px', cursor: 'pointer'}} width={"18px"} height={"auto"} alt="discord" />
                        <motion.img onClick={() => {
                            window.open("https://twitter.com/planetather")
                        }} whileHover={{scale: 1.1}} src="/images/twitter.png" style={{cursor: 'pointer'}} width={"18px"} height={"auto"} alt="twitter" />
                        <motion.img onClick={() => {
                            window.open("https://www.instagram.com/planetather/")
                        }} whileHover={{scale: 1.1}} src="/images/instagram.svg" style={{cursor: 'pointer'}} width={"18px"} height={"auto"} alt="instagram" />
                    </Grid>
                </Grid>
            </motion.div>
		</>
	)
}

export default Navbar
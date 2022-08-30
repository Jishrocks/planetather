import { NextPage } from 'next'

import Head from 'next/head'

import Box from '@mui/material/Box'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Landing from '../components/Home/Landing'
import Prologue from '../components/Home/Prologue'
import Collection from '../components/Home/Collection'
import Creators from '../components/Home/Creators'
import StarQuest from '../components/Home/StarQuest'
import Vision from '../components/Home/Vision'

import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import React from 'react'
import { motion } from 'framer-motion'

import assetsStyles from '../styles/assets.module.css'

const Home: NextPage = () => {

	return (
		<>
			<Head>
				<title>Planet Ather | Home</title>
				<meta name="description" content="idk right now I'll change this later" />

				{/* <!-- Facebook Meta Tags --> */}
				<meta property="og:url" content="https://example.com"/>
				<meta property="og:type" content="website"/>
				<meta property="og:title" content="Ather"/>
				<meta property="og:description" content="undefined"/>
				<meta property="og:image" content=""/>

				{/* <!-- Twitter Meta Tags --> */}
				<meta name="twitter:card" content="summary_large_image"/>
				<meta property="twitter:domain" content="example.com"/>
				<meta property="twitter:url" content="https://example.com"/>
				<meta name="twitter:title" content="Ather"/>
				<meta name="twitter:description" content="undefined"/>
				<meta name="twitter:image" content=""/>

				<link rel="icon" href="/favicon.ico" />

				{Array.from({length: 22}, (_, i) => <link key={i} rel="preload" as="image" href={`/images/atherians/${i+1}.png`} />)}

				<link rel="preload" as="font" href="/fonts/Mandalore.woff2" />
				<link rel="preload" as="font" href="/fonts/Poppins-Bold.woff2" />
				<link rel="preload" as="font" href="/fonts/Poppins-Regular.woff2" />
				<link rel="preload" as="font" href="/fonts/SpaceMono-Regular.woff2" />
				<link rel="preload" as="font" href="/fonts/FFMark.woff2" />
				<link rel="preload" as="font" href="/fonts/subheading.woff2" />

			</Head>

			<Navbar />
			<Box sx={{overflowX: 'hidden'}}>
				<ParallaxProvider>
					<Box sx={{overflowX: 'hidden'}}>
						{/* Landing page korean text and characters */}
						<h1 style={{position: 'absolute', width: 'auto', marginLeft: '45%', opacity: 0.1, transform: 'translateY(-11rem) translateX(0rem)', fontFamily: 'Mandalore', color: '#13141e', fontSize: '13rem', letterSpacing: '3px', textTransform: 'uppercase', textShadow: `-2px -2px 200px #595488, 2px -2px 10px #595488, -2px 2px 10px #595488, 2px 2px 10px #595488`}}>시작시시작시시작시시작시시작시시작시시작시시작시시작시시작시</h1>	
						{/* <Box style={{overflowX: 'hidden', background: 'linear-gradient(56deg, rgba(35,38,59,0) 0%, rgba(19,20,30,1) 90%)', width: '30rem', height: '100rem', position: 'absolute', marginLeft: '75%', transform: 'translateY(-10rem)'}}></Box>  */}
						<Parallax className={assetsStyles.overlayElement} speed={20} style={{marginLeft: '45%'}}>
								<motion.img
								// animate={{
								//     y: 20,
								//     // scale: 1.05,
								//     transition: {
								//         duration: 4,
								//         yoyo: Infinity,
								//     }
								// }}
								style={{width: '51rem', position: 'absolute', transform: 'translateY(9rem) translateX(2rem)'}}
								src="/images/atherians-island.png"
								></motion.img>
								
								{/* <motion.img
								// animate={{
								//     y: 20,
								//     // scale: 1.05,
								//     transition: {
								//         duration: 4,
								//         yoyo: Infinity,
								//     }
								// }}
								style={{width: '50rem', position: 'absolute', transform: 'translateY(13rem)'}}
								src="/images/atherians-hero.png"
								></motion.img> */}
								
								{/* <motion.img
								// animate={{
								//     y: 20,
								//     // scale: 1.05,
								//     transition: {
								//         duration: 4,
								//         yoyo: Infinity,
								//     }
								// }}
								style={{width: '29rem', position: 'absolute', transform: 'translateY(13rem) translateX(30rem)'}}
								src="/images/naruto3.png"
								></motion.img>
								<motion.img
								// animate={{
								//     y: 20,
								//     // scale: 1.05,
								//     transition: {
								//         duration: 4,
								//         yoyo: Infinity,
								//     }
								// }}
								style={{width: '21rem', position: 'absolute', transform: 'translateY(13rem) translateX(-2rem)'}}
								src="/images/naruto2.png"
								></motion.img>
								<motion.img
								// animate={{
								//     y: 20,
								//     // scale: 1.05,
								//     transition: {
								//         duration: 4,
								//         yoyo: Infinity,
								//     }
								// }}
								style={{width: '18rem', position: 'absolute', transform: 'translateY(10rem) translateX(12rem)'}}
								src="/images/naruto.png"
								></motion.img> */}
						</Parallax>

						<Parallax style={{overflow: 'hidden'}}>
							<Landing />
						</Parallax>

						<Box sx={{marginBottom: '5rem', display: 'flex', flexDirection: 'column'}}>
							
							{/* Used clip path to make a shape-cut  */}

							<Box className={assetsStyles.whiteBackground} style={{height: '45rem', position: 'relative'}}>
								<Prologue />
							</Box>

							<Box style={{height: '40rem', position: 'relative'}}>
								<Vision />
							</Box>

							<Box className={assetsStyles.whiteBackground} style={{height: '57rem', position: 'relative'}}>
								<StarQuest />
							</Box>
							
							<Box style={{height: '45rem', position: 'relative'}}>
								<Collection />
							</Box>

							<Box className={assetsStyles.whiteBackground} style={{height: '45rem', position: 'relative'}}>
								<Creators />
							</Box>
						</Box>

						<Footer />
					</Box>
				</ParallaxProvider>
			</Box>
		</>
	)
}

export default Home
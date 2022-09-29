import { NextPage } from 'next'

import Head from 'next/head'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Landing from '../components/Home/Landing'
import Prologue from '../components/Home/Prologue'
import Collection from '../components/Home/Collection'
import Creators from '../components/Home/Creators'
import StarQuest from '../components/Home/StarQuest'
import Vision from '../components/Home/Vision'

import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

import assetsStyles from '../styles/assets.module.css'
import StickyFooter from '../components/StickyFooter'

import Lottie from 'react-lottie';
import scrollDown from '../public/scroll-down.json'

import Scrollbar from "react-smooth-scrollbar";
import SmoothScrollbar from 'smooth-scrollbar';

const Home: NextPage = () => {

	useEffect(() => {
		let options = {
			damping: 0.04,
			thumbMinSize: 20,
			renderByPixels: true,
			continuousScrolling: true,
		}
		// SmoothScrollbar.init(document.body, options)
		SmoothScrollbar.initAll(options)
	}, [])

	return (
		<>
			<Head>
				<title>Ather</title>
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

			<div style={{overflowX: 'hidden'}}>
				<ParallaxProvider>
					<div style={{overflowX: 'hidden'}}>
						{/* Landing page korean text and characters */}

						<motion.img
						style={{width: '100%', position: 'absolute', transform: 'translateX(-10rem) translateY(-17rem)', opacity: 1}}
						src="/images/meshgradient.jpeg"
						></motion.img>


						<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100vw', transform: 'translateY(45rem)'}}>
							<Lottie
								style={{opacity: 0.5}}
								options={{animationData: scrollDown, autoplay: true, loop: true}}
								height={50}
								width={50}
							/>
							<h1 style={{fontFamily: 'Mono', color: 'silver', fontSize: '0.5625rem', marginBlock: 0, textTransform: 'uppercase', marginTop: '0.5625rem', letterSpacing: '0.5px'}}>Scroll to view more</h1>
						</div>
						
						<motion.img
						style={{width: '150rem', position: 'absolute', transform: 'translateX(-10rem) translateY(-13rem)', opacity: 0.1}}
						src="/images/graffitti.png"
						>
						</motion.img>

						<Parallax style={{overflow: 'visible'}}>
							<Landing />
						</Parallax>

						<div style={{marginBottom: '5rem', display: 'flex', flexDirection: 'column'}}>
							
							{/* Used clip path to make a shape-cut  */}

							
							<div style={{height: '30rem', marginTop: '30rem', marginBottom: '1rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 3}}>
								<motion.h1 style={{fontFamily: 'FKScreamer', fontSize: '4.8rem', textTransform: 'uppercase', color: 'silver', textAlign: 'center', letterSpacing: '2px'}}>
									<span style={{fontSize: '6rem', color: 'transparent', backgroundImage: 'linear-gradient(56deg, #f3a5da 0%, #81cefd 100%)', WebkitBackgroundClip: 'text'}}>Nostalgia meets web3.</span>
									<br></br>
									A quest for the survival of<br></br> <span style={{opacity: 0.7}}>10000 Atherians</span> is in your<br></br> hands now.
								</motion.h1>
							</div>
							
							{/* <div style={{width: '130%', height: '15rem', position: 'absolute', transform: 'translateY(50rem) translateX(-10rem) rotate(-5deg)', background: 'linear-gradient(to bottom, #fff, #fff, transparent)', zIndex: 2}}>

							</div> */}
							{/* <motion.img
							style={{width: '140rem', position: 'absolute', transform: 'translateX(-5rem) translateY(25rem) rotate(-6deg)', opacity: 0.05}}
							src="/images/mystique.png"
							>
							</motion.img> */}

							<div style={{display: 'flex', clipPath: 'polygon(100% 0, 100% 93%, 0 100%, 0 7%)', height: '50rem', marginBottom: '15rem', justifyContent: 'center', alignItems: 'center', transform: 'translateY(5rem)', zIndex: 4}}>
								<div style={{position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 2}}>
									<h1 style={{fontFamily: 'Mono', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.4)', marginBlock: 0}}>THE STORY BEHIND</h1>
									<h1 style={{fontFamily: 'FKScreamer', fontSize: '10rem', color: '#fff', marginBlock: 0}}>THE ORIGIN</h1>

									<div style={{background: 'rgba(7, 14, 29, 0.6)', color: 'white', width: '10rem', height: '48px', marginTop: '2.5rem', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'FFMark', letterSpacing: '1px'}}>EXPLORE</div>
								</div>
								<Parallax translateY={[30, -15]} style={{clipPath: 'polygon(100% 0, 100% 93%, 0 100%, 0 7%)'}}>
									{/* <motion.img
									style={{width: '140rem', position: 'absolute', transform: 'translateX(-5rem) translateY(-18rem) rotate(1deg)', opacity: 1, zIndex: 5}}
									src="/images/papercut.png"
									>
									</motion.img> */}
									<video loop autoPlay muted style={{width: 'auto', height: '150%', position: 'relative'}} src="/videos/spaceship.mp4"></video>
									{/* <motion.img
									style={{width: '140rem', position: 'absolute', transform: 'translateX(-125rem) translateY(43rem) rotate(180deg)', opacity: 1, zIndex: 5}}
									src="/images/papercut.png"
									>
									</motion.img> */}
								</Parallax>
							</div>

							<Collection />

							{/* <div className={assetsStyles.whiteBackground} style={{height: '45rem', position: 'relative'}}>
								<Prologue />
							</div> */}

							<Vision />

							<StarQuest />

							{/* <Creators /> */}
						</div>
					</div>

					<Footer />
				</ParallaxProvider>
			</div>

			<StickyFooter />
		</>
	)
}

export default Home
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

import gsap from 'gsap'

import StickyFooter from '../components/StickyFooter'

const Home: NextPage = () => {

	// useEffect(() => {
	// 	var
	// 	animRequestID,
	// 	settingsStr = document.getElementById('smooth-scroll')?.dataset.scrollSettings,
	// 	settings = parseSettings(settingsStr);

	// 	function parseSettings(str): any {
	// 	var r = {};
	// 	str.split(' ').forEach(s => {
	// 		var t = s.split(':');
	// 		r[t[0]] = t[1];
	// 	});
	// 	return r;
	// 	};

	// 	function addListeners(element, events, callback) {
	// 	events.split(' ').forEach(e => element.addEventListener(e, callback, false));
	// 	};

	// 	function handleResize() {
	// 	var bodyHeight = document.getElementById('smooth-scroll')?.offsetHeight;
	// 	gsap.set('body', { height: bodyHeight });
	// 	cancelAnimationFrame(animRequestID);
	// 	};

	// 	function handleScroll() {
	// 	scrollTo(window.scrollY);
	// 	};

	// 	function scrollTo(y) {
	// 	cancelAnimationFrame(animRequestID);
	// 	animRequestID = requestAnimationFrame(function() {
	// 		gsap.to('#smooth-scroll', {
	// 		duration: settings.duration,
	// 		y: -y,
	// 		ease: settings.ease
	// 		});
	// 	});
	// 	};

	// 	gsap.set('#smooth-scroll', {
	// 	force3D: true
	// 	});

	// 	if(settings.smoother == 'on') {
	// 	// gsap.set('.viewport', { perspective: 1000 });
	// 	gsap.set('#smooth-scroll', {
	// 		rotation: .001
	// 		// z: .01
	// 	});
	// 	};

	// 	addListeners(window, 'load resize', handleResize);
	// 	addListeners(window, 'scroll', handleScroll);
	// }, [])

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

			<div id="smooth-scroll" data-scroll-settings="duration:.5 ease:power2.out smoother:on" style={{overflowX: 'hidden'}}>
				<Navbar />
				<ParallaxProvider>
					<div style={{overflowX: 'hidden', position: 'relative'}}>
						{/* <motion.img
							style={{width: '145%', position: 'absolute', transform: 'translateX(-3rem) translateY(0rem)', filter: 'hue-rotate(-40deg)', opacity: 1}}
							src="/images/meshgradient.jpeg"
						></motion.img> */}
						<Parallax style={{overflow: 'visible'}}>
							<Landing />
						</Parallax>

						<div style={{marginBottom: '5rem', display: 'flex', flexDirection: 'column'}}>
							
							{/* Used clip path to make a shape-cut  */}

							
							<div style={{height: '30rem', marginTop: '25rem', marginBottom: '1rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 3}}>
								<motion.img
									style={{width: '130vw', position: 'absolute', filter: 'invert()', transform: 'translateX(3rem) translateY(3rem)', opacity: 0.05}}
									src="/images/graffitti.png"
								></motion.img>
								<motion.h1 style={{fontFamily: 'FKScreamer', fontSize: '4.5rem', textTransform: 'uppercase', color: '#fbfbfb', textAlign: 'center', letterSpacing: '2px'}}>
									<span className='text-gradient'>Extraterrestial alert</span>
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

							<div style={{display: 'flex', height: '40rem', marginBottom: '15rem', justifyContent: 'center', alignItems: 'center', transform: 'translateY(5rem)', WebkitClipPath: 'polygon(100% 0, 100% 93%, 0 100%, 0 7%)', zIndex: 4}}>
								<div style={{position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 2}}>
									<h1 style={{fontFamily: 'Mono', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.4)', marginBlock: 0}}>WHERE THE STORY BEGINS</h1>
									<h1 style={{fontFamily: 'FKScreamer', fontSize: '10rem', color: '#fff', marginBlock: 0}}>THE SUBWAY</h1>

									<div style={{background: 'rgba(0, 0, 0, 0.1)', fontSize: '0.8rem', color: 'white', backdropFilter: 'blur(1em)', width: 'fit-content', paddingLeft: '15px', paddingRight: '15px', height: '48px', marginTop: '2.5rem', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Mono'}}>LAUNCHES ON 9 NOV/22</div>
								</div>
								<Parallax translateY={[30, -15]}>
									{/* <motion.img
									style={{width: '140rem', position: 'absolute', transform: 'translateX(-5rem) translateY(-18rem) rotate(1deg)', opacity: 1, zIndex: 5}}
									src="/images/papercut.png"
									>
									</motion.img> */}
									{/* <video loop autoPlay muted style={{width: 'auto', height: '150%', position: 'relative', opacity: 1}} src="/videos/spaceship.mp4"></video> */}
									<img style={{width: 'auto', height: '150%', position: 'relative', opacity: 1}} src="https://cdn1.epicgames.com/ue/product/Screenshot/5-1920x1080-b89469a8e3ed0a92179002e8ba35b5d7.jpg" alt="" />
									{/* <motion.img
									style={{width: '140rem', position: 'absolute', transform: 'translateX(-125rem) translateY(43rem) rotate(180deg)', opacity: 1, zIndex: 5}}
									src="/images/papercut.png"
									>
									</motion.img> */}
								</Parallax>
							</div>

							{/* <div className={assetsStyles.whiteBackground} style={{height: '45rem', position: 'relative'}}>
								<Prologue />
							</div> */}

							<Vision />

							<StarQuest />

							<Collection />

							<Creators />

							
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
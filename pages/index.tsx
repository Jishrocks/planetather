/* eslint-disable @next/next/no-img-element */
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
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import gsap from 'gsap'

import twitterAnimationData from '../public/twitter.json'

import StickyFooter from '../components/StickyFooter'
import Sidebar from '../components/Sidebar'

import Lottie from 'react-lottie';
import {useMediaQuery, screenBasedAttribute} from '../lib/mediaQuery'
import Article from '../components/Article'

const Home: NextPage = () => {

	let {screen_sm, screen_md, screen_lg, screen_xl, screens} = useMediaQuery()

	const [landingScrolled, setLandingScrolled] = useState(true)

    useEffect(() => {
        let eventListener = () => {
            var scrollTop = document.documentElement.scrollTop
            if (scrollTop > 25) {
                setLandingScrolled(true)
            } else {
                setLandingScrolled(false)
            }
        }
        window.addEventListener('scroll', eventListener)
    }, [])

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
				<Sidebar />
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

							
							<div style={{height: '30rem', marginTop: screenBasedAttribute(screens, {
								screen_sm: '10rem',
								screen_md: '10srem',
								screen_lg: '25rem',
								screen_xl: '25rem'
							}), marginBottom: '1rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 3}}>
								<motion.img
									style={{width: '130vw', position: 'absolute', filter: 'invert()', transform: 'translateX(3rem) translateY(3rem)', opacity: 0.05}}
									src="/images/graffitti.png"
								></motion.img>
								<motion.h1 style={{fontFamily: 'FKScreamer', fontSize: screenBasedAttribute(screens, {
									screen_sm: '2.5rem',
									screen_md: '3.5rem',
									screen_lg: '4.5rem',
									screen_xl: '4.5rem'
								}), textTransform: 'uppercase', color: '#fbfbfb', textAlign: 'center', letterSpacing: '2px'}}>
									<span className='text-gradient'>Enter collective reality</span>
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

							<div style={{display: 'flex', 
									height: screenBasedAttribute(screens, {
										screen_sm: '30rem',
										screen_md: '40rem',
										screen_lg: '40rem',
										screen_xl: '40rem'
									}), 
									marginTop: screenBasedAttribute(screens, {
										screen_sm: '0rem',
										screen_md: '4rem',
										screen_lg: '8rem',
										screen_xl: '8rem'
									}), marginBottom: '15rem', justifyContent: 'center', alignItems: 'center', WebkitClipPath: 'polygon(100% 0, 100% 93%, 0 100%, 0 7%)', zIndex: 4}}>
								<div style={{position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 2}}>
									<h1 style={{fontFamily: 'Mono', fontSize: screenBasedAttribute(screens, {
										screen_sm: '0.6rem',
										screen_md: '0.8rem',
										screen_lg: '0.8rem',
										screen_xl: '0.8rem'
									}), color: 'rgba(255, 255, 255, 0.4)', marginBlock: 0}}>WHERE THE STORY BEGINS</h1>
									<h1 style={{fontFamily: 'FKScreamer', fontSize: screenBasedAttribute(screens, {
										screen_sm: '6rem',
										screen_md: '8.5rem',
										screen_lg: '10rem',
										screen_xl: '10rem'
									}), color: '#fff', marginBlock: 0}}>THE SUBWAY</h1>

									<div style={{background: 'rgba(0, 0, 0, 0.1)', fontSize: screenBasedAttribute(screens, {
										screen_sm: '0.6rem',
										screen_md: '0.8rem',
										screen_lg: '0.8rem',
										screen_xl: '0.8rem'
									}), color: 'white', backdropFilter: 'blur(1em)', width: 'fit-content', paddingLeft: '15px', paddingRight: '15px',
										height: screenBasedAttribute(screens, {
											screen_sm: '40px',
											screen_md: '48px',
											screen_lg: '48px',
											screen_xl: '48px'
										}), marginTop: '2.5rem', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Mono'}}>LAUNCHES ON 9 NOV/22</div>
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

							<Article align={"right"} image={"https://cdn.discordapp.com/attachments/934914135613931593/1042068056702189568/Untitled_Artwork.png"} imageStyle={{}} heading={"Lorem ipsum"} subheading={"dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ligula nulla. Aliquam sit amet maximus sapien. Phasellus sagittis fringilla justo non ultricies. Integer pulvinar ultricies erat quis lacinia. Duis sed finibus velit. Praesent gravida, diam quis blandit lacinia, neque nunc fringilla justo, vel molestie sem libero ut neque. Aenean vehicula, nisi in fermentum facilisis, urna lorem accumsan augue, vitae imperdiet arcu metus vel ipsum."}></Article>

							{/* <Vision />

							<StarQuest />

							<Collection />

							<Creators /> */}

							
						</div>
					</div>

					<Footer />
				</ParallaxProvider>
			</div>
			<div style={{display: screenBasedAttribute(screens, {
                    screen_sm: 'none',
                    screen_md: 'flex',
                    screen_lg: 'flex',
                    screen_xl: 'flex'
                }), opacity: landingScrolled ? 0 : 1, transition: 'opacity 0.25s', justifyContent: 'start', alignItems: 'center', marginLeft: '8rem', 
				width: screenBasedAttribute(screens, {
					screen_sm: '444px',
					screen_md: '350px',
					screen_lg: '400px',
					screen_xl: '444px'
				}), 
				height: screenBasedAttribute(screens, {
					screen_sm: '444px',
					screen_md: '56px',
					screen_lg: '72px',
					screen_xl: '72px'
				}), border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '10px', position: 'sticky', bottom: 70, zIndex: 999}}>
				<img src="/images/atherians2/1.png" style={{marginLeft: '8px', height: screenBasedAttribute(screens, {
					screen_sm: null,
					screen_md: '90px',
					screen_lg: '125px',
					screen_xl: '125px'
				}), marginBottom: screenBasedAttribute(screens, {
					screen_sm: null, 
					screen_md: '35px',
					screen_lg: '50px',
					screen_xl: '50px'
				})}} alt="" />
				<div style={{width: screenBasedAttribute(screens, {
					screen_sm: null, 
					screen_md: 'calc(100% - 130px)',
					screen_lg: 'calc(100% - 170px)',
					screen_xl: 'calc(100% - 170px)'
				})}}>
					<h1 style={{fontFamily: 'FFMark', fontSize: screenBasedAttribute(screens, {
						screen_sm: null,
						screen_md: '0.7rem',
						screen_lg: '0.8rem',
						screen_xl: '0.8rem'
					// eslint-disable-next-line react/no-unescaped-entities
					}), color: '#fff', marginBlock: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Just in case you missed out, there's a new baddie out in the town. </h1>
					<h1 style={{fontFamily: 'FFMark', fontSize: screenBasedAttribute(screens, {
						screen_sm: null,
						screen_md: '0.7rem',
						screen_lg: '0.8rem',
						screen_xl: '0.8rem'
					}), color: '#fff', marginBlock: 0, opacity: 0.5}}>Keep an eye out for her.</h1>
				</div>
			</div>
			<StickyFooter />
		</>
	)
}

export default Home
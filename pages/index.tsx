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

import twitterAnimationData from '../public/twitter.json'

import StickyFooter from '../components/StickyFooter'
import Sidebar from '../components/Sidebar'

import {useMediaQuery, screenBasedAttribute} from '../lib/mediaQuery'
import Article from '../components/Article'

import Tilt from 'react-parallax-tilt'

import Fade from 'react-reveal/Fade';

import { TextScramble } from '../components/ScrambledText'
import { useInView } from 'react-spring'


const Home: NextPage = () => {

	let {screen_sm, screen_md, screen_lg, screen_xl, screens} = useMediaQuery()

	const [landingScrolled, setLandingScrolled] = useState(false)
	const [navbarOverflow, setNavbarOverflow] = useState(true)

	const [clipPath, setClipPath] = useState('')

    useEffect(() => {
        let eventListener = () => {
            var scrollTop = document.documentElement.scrollTop
            if (scrollTop > 25) {
                setLandingScrolled(true)
            } else {
                setLandingScrolled(false)
            }

			if (scrollTop > 100) {
				setNavbarOverflow(false)
			} else {
				setNavbarOverflow(true)
			}
        }
        window.addEventListener('scroll', eventListener)
    }, [clipPath])

	useEffect(() => {
		setClipPath('polygon(100% 0, 100% 88%, 0 100%, 0 12%)')
	}, [])

	let [transitionInViewRef, transitionInView] = useInView()
	let [transitionScale, setTransitionScale] = useState(1)
	let [transitionOffset, setTransitionOffset] = useState(undefined)
	let transitionRange = 1600
	
	useEffect(() => {
		let eventListener = () => {
			if(!transitionOffset) {
				setTransitionOffset(transitionInViewRef.current.offsetTop)
			} else {
				var scrollTop = document.documentElement.scrollTop
				let i = scrollTop - 1040 - transitionOffset
				let scale = Math.min(Math.max((i / transitionRange) * 100, 1), 100)
				setTransitionScale(scale)
			}
		}

		window.addEventListener('scroll', eventListener)
		return () => {
			window.removeEventListener('scroll', eventListener)
		}
	})

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

			<div>

				{/* Landing background */}

				<div style={{position: 'absolute', opacity: 1, backgroundColor: '#ca2135', height: '300vh', width: '100vw', clipPath: 'polygon(100% 0, 100% 95%, 0 100%, 0 0%)'}}></div>
				<div style={{position: 'absolute', background: 'linear-gradient(1turn, #8d1725 55%,transparent)', height: '300vh', width: '100vw', clipPath: 'polygon(100% 0, 100% 95%, 0 100%, 0 0%)'}}></div>
				{/* <div style={{position: 'absolute', background: '#8d1725', height: '20vh', width: '100vw', marginTop: '190vh', filter: 'blur(300px)', opacity: 0.8, transform: 'rotate(-4deg)'}}></div> */}

				<Navbar />
				<Sidebar />

				<iframe style={{borderRadius: '12px', opacity: landingScrolled ? 0 : 1, transition: '0.25s all', position: 'fixed', width: '450px', zIndex: '1000', right: '28px', bottom: '-30px'}} src="https://open.spotify.com/embed/album/30WNa86MJsrzTlki1YHI6A?utm_source=generator" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

				<ParallaxProvider>
					<div style={{overflowX: navbarOverflow ? 'hidden' : 'visible', position: 'relative'}}>
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
								screen_sm: '0rem',
								screen_md: '10rem',
								screen_lg: '25rem',
								screen_xl: '15rem'
							}), marginBottom: '1rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 3}}>
								<motion.img
									style={{width: '130vw', position: 'absolute', filter: 'invert()', transform: 'translateX(3rem) translateY(3rem)', opacity: 0.05}}
									src="/images/graffitti.png"
								></motion.img>
								<Parallax translateY={['100px', '-100px']} style={{fontFamily: 'GalderGlynn', fontSize: screenBasedAttribute(screens, {
											screen_sm: '2rem',
											screen_md: '3.5rem',
											screen_lg: '4.5rem',
											screen_xl: '3rem'
									}), textTransform: 'uppercase', color: '#f7f7f7', textAlign: 'center', letterSpacing: '2px', lineHeight: 0.5}}>
									<Fade bottom opposite cascade>
										Your digital gateway<br></br>
										To comics pop culture<br></br>
										Created & owned by many
									</Fade>
								</Parallax>
							</div>

							<div style={{height: '120vh', marginTop: '-5rem', display: 'flex', justifyContent: 'center', alignItems: 'start'}}>
								<div style={{height: `100vh`, width: `100vw`, position: 'sticky', bottom: 0, top: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									<div ref={transitionInViewRef} style={{width: `${transitionScale * 100}px`, height: `${transitionScale * 100}px`, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', clipPath: 'polygon(0 0, 0 88%, 12% 100%, 100% 100%, 100% 12%, 88% 0)'}}>
										<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
											<div style={{borderTop: '1px solid rgba(255, 255, 255, 0.15)', width: `${transitionScale * 100}px`}}></div>
											<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '100px', backgroundColor: 'rgba(255, 255, 255, 0.15)', clipPath: 'polygon(0 0, 0 88%, 12% 100%, 100% 100%, 100% 12%, 88% 0)'}}>
												<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '98.5px', height: '98.5px', backgroundColor: '#000', clipPath: 'polygon(0 0, 0 88%, 12% 100%, 100% 100%, 100% 12%, 88% 0)'}}>
													<img style={{width: '48px', height: 'auto', position: 'absolute'}} src="/images/logov2.png" alt="" />
												</div>
											</div>
											<div style={{borderTop: '1px solid rgba(255, 255, 255, 0.15)', width: `${transitionScale * 100}px`}}></div>
											<Parallax translateY={['400px', '200px']} style={{position: 'absolute', fontFamily: 'GalderGlynn', fontSize: screenBasedAttribute(screens, {
														screen_sm: '2rem',
														screen_md: '3.5rem',
														screen_lg: '4.5rem',
														screen_xl: '5rem'
												}), textTransform: 'uppercase', color: '#f7f7f7', textAlign: 'center', letterSpacing: '2px', lineHeight: 0.4}}>
												<Fade bottom opposite cascade>
													Welcome to the Hideouts.
													<span style={{fontFamily: 'Mono', marginTop: '-2rem', fontSize: screenBasedAttribute(screens, {
														screen_sm: '0.6rem',
														screen_md: '0.8rem',
														screen_lg: '0.8rem',
														screen_xl: '0.8rem'
													}), color: 'rgba(255, 255, 255, 0.4)', marginBlock: 0}}>Ever thought you could be a part of a different reality?</span>
												</Fade>
											</Parallax>
										</div>
									</div>
								</div>
							</div>

							<div>
								<Article align={"left"} image={"/images/manifestoHand.pn"} imageStyle={{position: 'absolute', left: '-350px', top: '-350px', width: '800px'}} heading={"The Lore"} subheading={"01"} description={
									`The Atherians, a powerful and mystical race, lived in harmony on the enchanted planet Ather.
									However, a group attempted to extract the planet's core for energy, causing instability and the eventual doom of Ather.
										In race to save their species, masterminds set out to find a new home and eventually discovered Earth.
									The Atherians set out on a journey in search of a new home and after facing many atrocities of space, they finally landed on the surface of the mysterious planet Earth in the year 2017.
									It's been 5 years since their arrival and they are still trying to explore and understand the new planet.`}
								></Article>

								
								<img style={{position: 'absolute', width: '30rem', filter: 'saturate(0%)', right: 0, borderRadius: '3px', transform: 'translateY(-47rem) translateX(-15rem)'}} src="https://media.comicbook.com/wp-content/uploads/2012/07/legion-of-superheroes-11-page-3.jpg" alt="" />
							</div>

							{/* Starquest Ambience */}
							{/* <div> 
								<video loop autoPlay muted style={{width: '120rem', height: 'auto', position: 'absolute', filter: 'blur(100px)', opacity: 0.3}} src="/videos/nyc.mp4"></video>
							</div> */}
							{/* Starquest Landing */}
							<div style={{display: 'flex',
									height: screenBasedAttribute(screens, {
										screen_sm: '30rem',
										screen_md: '40rem',
										screen_lg: '40rem',
										screen_xl: '50rem'
									}), 
									marginTop: screenBasedAttribute(screens, {
										screen_sm: '0rem',
										screen_md: '4rem',
										screen_lg: '8rem',
										screen_xl: '8rem'
									}), marginBottom: '8rem', justifyContent: 'center', alignItems: 'center', WebkitClipPath: clipPath, clipPath: clipPath, zIndex: 4}}>
								<div style={{position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 2}}>
									<h1 style={{fontFamily: 'Mono', fontSize: screenBasedAttribute(screens, {
										screen_sm: '0.6rem',
										screen_md: '0.8rem',
										screen_lg: '0.8rem',
										screen_xl: '0.8rem'
									}), color: 'rgba(255, 255, 255, 0.4)', marginBlock: 0}}>THY COLLECTIVE BELIEF OF ROADMAPS BEING PRIMITIVE</h1>
									<h1 style={{fontFamily: 'GalderGlynn', fontSize: screenBasedAttribute(screens, {
										screen_sm: '6rem',
										screen_md: '8.5rem',
										screen_lg: '10rem',
										screen_xl: '7rem'
									}), color: '#fff', marginBlock: 0}}>
										STARQUEST
									</h1>

									<div onClick={() => {
										window.open('https://twitter.com/PlanetAtherNFT/status/1618843872108347392')
									}} style={{background: 'rgba(0, 0, 0, 0.1)', fontSize: screenBasedAttribute(screens, {
										screen_sm: '0.6rem',
										screen_md: '0.8rem',
										screen_lg: '0.8rem',
										screen_xl: '0.8rem'
									}), cursor: 'pointer', color: 'white', backdropFilter: 'blur(1em)', width: 'fit-content', paddingLeft: '15px', paddingRight: '15px',
										height: screenBasedAttribute(screens, {
											screen_sm: '40px',
											screen_md: '48px',
											screen_lg: '48px',
											screen_xl: '48px'
										}), marginTop: '2.5rem', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Mono'}}>EXPLORE NOW</div>
								</div>
								<Parallax translateY={[15, -15]}>
									{/* <motion.img
									style={{width: '140rem', position: 'absolute', transform: 'translateX(-5rem) translateY(-18rem) rotate(1deg)', opacity: 1, zIndex: 5}}
									src="/images/papercut.png"
									>
									</motion.img> */}
									<video loop autoPlay muted style={{width: '150rem', height: 'auto', position: 'relative', filter: 'brightness(70%)', opacity: 1}} src="/videos/nyc.mp4"></video>
									{/* <img style={{width: 'auto', height: '150%', position: 'relative', filter: 'blur(5px)', transform: 'scale(-1)', opacity: 1}} src="/images/TheBeginnings.jpeg" alt="" /> */}
									{/* <img style={{width: 'auto', height: '100rem', position: 'relative', filter: 'blur(2px) saturate(70%)', opacity: 1}} src="/images/alley-red.png" alt="" /> */}
									{/* <motion.img
									style={{width: '140rem', position: 'absolute', transform: 'translateX(-125rem) translateY(43rem) rotate(180deg)', opacity: 1, zIndex: 5}}
									src="/images/papercut.png"
									>
									</motion.img> */}
								</Parallax>
							</div>


							<div>
								<Article align={"left"} image={"/images/manifestoHand.png"} imageStyle={{position: 'absolute', left: '-350px', top: '-220px', width: '800px'}} heading={"Vision"} subheading={"02"} description={
								`Amidst NFT's bright and dazzling light, A firm doth rise with might and might.
									Decentralized, it brings a show, in digital realms, its fame doth grow.
									Comics, series, and merchandise bold, Cosplays, games, a tale untold.
									With community's zeal and spirit rare, its mission to bring forth a world fair.
									To weave a tapestry, with hands entwine, and zip the bounds of thy imagination's vine.
									In this new world, our spirits shall converge, and creativity, passion, and zeal shall surge.`}></Article>
							</div>

							{/* Spreading the word Ambience */}
							{/* <div> 
								<video loop autoPlay muted style={{width: '120rem', height: 'auto', position: 'absolute', filter: 'blur(100px)', opacity: 0.3}} src="/videos/spread.mp4"></video>
							</div> */}
							{/* Spreading the word landing */}
							<div style={{display: 'flex',
									height: screenBasedAttribute(screens, {
										screen_sm: '30rem',
										screen_md: '40rem',
										screen_lg: '40rem',
										screen_xl: '50rem'
									}), 
									marginTop: screenBasedAttribute(screens, {
										screen_sm: '0rem',
										screen_md: '4rem',
										screen_lg: '8rem',
										screen_xl: '8rem'
									}), marginBottom: '8rem', justifyContent: 'center', alignItems: 'center', WebkitClipPath: clipPath, clipPath: clipPath, zIndex: 4}}>
								<div style={{position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 2}}>
									<h1 style={{fontFamily: 'Mono', fontSize: screenBasedAttribute(screens, {
										screen_sm: '0.6rem',
										screen_md: '0.8rem',
										screen_lg: '0.8rem',
										screen_xl: '0.8rem'
									}), color: 'rgba(255, 255, 255, 0.4)', marginBlock: 0}}>NO RULES FOLLOWED</h1>
									<h1 style={{fontFamily: 'GalderGlynn', fontSize: screenBasedAttribute(screens, {
										screen_sm: '6rem',
										screen_md: '8.5rem',
										screen_lg: '10rem',
										screen_xl: '7rem'
									}), color: '#fff', marginBlock: 0}}>SPREADING THE WORD</h1>

									<div onClick={() => {
										window.open('https://twitter.com/PlanetAtherNFT/status/1618843872108347392')
									}} style={{background: 'rgba(0, 0, 0, 0.1)', fontSize: screenBasedAttribute(screens, {
										screen_sm: '0.6rem',
										screen_md: '0.8rem',
										screen_lg: '0.8rem',
										screen_xl: '0.8rem'
									}), cursor: 'pointer', color: 'white', backdropFilter: 'blur(1em)', width: 'fit-content', paddingLeft: '15px', paddingRight: '15px',
										height: screenBasedAttribute(screens, {
											screen_sm: '40px',
											screen_md: '48px',
											screen_lg: '48px',
											screen_xl: '48px'
										}), marginTop: '2.5rem', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Mono'}}>WATCH NOW</div>
								</div>
								<Parallax translateY={[15, -15]}>
									{/* <motion.img
									style={{width: '140rem', position: 'absolute', transform: 'translateX(-5rem) translateY(-18rem) rotate(1deg)', opacity: 1, zIndex: 5}}
									src="/images/papercut.png"
									>
									</motion.img> */}
									<video loop autoPlay muted style={{width: '150rem', height: 'auto', position: 'relative', filter: 'brightness(50%) contrast(110%)', opacity: 1}} src="/videos/spread.mp4"></video>
									{/* <img style={{width: 'auto', height: '150%', position: 'relative', filter: 'blur(5px)', transform: 'scale(-1)', opacity: 1}} src="/images/TheBeginnings.jpeg" alt="" /> */}
									{/* <img style={{width: 'auto', height: '100rem', position: 'relative', filter: 'blur(2px) saturate(70%)', opacity: 1}} src="/images/alley-red.png" alt="" /> */}
									{/* <motion.img
									style={{width: '140rem', position: 'absolute', transform: 'translateX(-125rem) translateY(43rem) rotate(180deg)', opacity: 1, zIndex: 5}}
									src="/images/papercut.png"
									>
									</motion.img> */}
								</Parallax>
							</div>

							<Collection />

							<Creators />
							
						</div>
					</div>

					<Footer />
				</ParallaxProvider>
			</div>
			{/* <div style={{display: screenBasedAttribute(screens, {
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
			</div> */}
			<StickyFooter />
		</>
	)
}

export default Home
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
import { useInView, useSpring, useSpringValue } from 'react-spring'
import useSmoothScroll from '../lib/smoothScroll'

const Home: NextPage = () => {

	let {screen_sm, screen_md, screen_lg, screen_xl, screens} = useMediaQuery()

	const [landingScrolled, setLandingScrolled] = useState(false)
	const [navbarOverflow, setNavbarOverflow] = useState(true)

	const [starquestOpen, setStarquestOpen] = useState(false)

	const [clipPath, setClipPath] = useState('')

	useSmoothScroll()

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
				let i = scrollTop - (window.innerHeight * 0.8) - 100 - transitionOffset
				let scale = Math.min(Math.max((i / transitionRange) * 100, 1), 100)
				setTransitionScale(scale)
			}
		}

		window.addEventListener('scroll', eventListener)
		return () => {
			window.removeEventListener('scroll', eventListener)
		}
	})

	// useSmoothScroll()

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

				<div className='absolute bg-red-100 h-[300vh] w-[100vw]' style={{clipPath: 'polygon(100% 0, 100% 95%, 0 100%, 0 0%)'}}></div>
				<div className='absolute h-[300vh] w-[100vw]' style={{background: 'linear-gradient(1turn, #8d1725 55%,transparent)', clipPath: 'polygon(100% 0, 100% 95%, 0 100%, 0 0%)'}}></div>
				{/* <div style={{position: 'absolute', background: '#8d1725', height: '20vh', width: '100vw', marginTop: '190vh', filter: 'blur(300px)', opacity: 0.8, transform: 'rotate(-4deg)'}}></div> */}

				<Navbar />
				<Sidebar />

				{/* <iframe style={{borderRadius: '12px', opacity: landingScrolled ? 0 : 1, transition: '0.25s all', position: 'fixed', width: '450px', zIndex: '1000', right: '28px', bottom: '-30px'}} src="https://open.spotify.com/embed/album/30WNa86MJsrzTlki1YHI6A?utm_source=generator" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}

				<ParallaxProvider>
					<div className='relative' style={{overflowX: navbarOverflow ? 'hidden' : 'visible'}}>

						<Parallax className='overflow-hidden md:overflow-visible'>
							<Landing />
						</Parallax>

						<div className='hidden md:flex flex-col mb-20'>
							
							{/* Used clip path to make a shape-cut  */}
							
							<div className='flex flex-col justify-center align-center relative h-[15rem] md:mt-40 lg:mt-96 xl:mt-60 mb-4 z-[3]'>
								<img
									className="w-[250vw] hidden lg:block absolute invert ml-8 mt-16 opacity-5"
									src="/images/graffitti.png"
								></img>
								<Parallax className='font-display uppercase text-white text-center text-4xl lg:text-5xl leading-6 lg:leading-8' translateY={['100px', '-100px']}>
									<Fade bottom opposite cascade>
										Your digital gateway<br></br>
										To comics pop culture<br></br>
										Created & owned by many
									</Fade>
								</Parallax>
							</div>

							<div className='h-[120vh] -mt-20 flex items-center justify-center'>
								<div className='h-[100vh] w-[100vw] sticky bottom-0 top-0 flex items-center justify-center'>
									<div className='flex justify-center items-center bg-black' ref={transitionInViewRef} style={{width: `${transitionScale * 100}px`, height: `${transitionScale * 100}px`, clipPath: 'polygon(0 0, 0 88%, 12% 100%, 100% 100%, 100% 12%, 88% 0)'}}>
										<div className='flex justify-center items-center'>
											<div style={{borderTop: '1px solid rgba(255, 255, 255, 0.15)', width: `${transitionScale * 100}px`}}></div>
											<div className='flex justify-center items-center w-[100px] height-[100px] ' style={{backgroundColor: 'rgba(255, 255, 255, 0.15)', clipPath: 'polygon(0 0, 0 88%, 12% 100%, 100% 100%, 100% 12%, 88% 0)'}}>
												<div className='flex justify-center items-center w-[98.5px] h-[98.5px] bg-black ' style={{clipPath: 'polygon(0 0, 0 88%, 12% 100%, 100% 100%, 100% 12%, 88% 0)'}}>
													<img className='w-[48px] h-auto absolute overflow-visible' src="/images/logov2.png" alt="" />
												</div>
											</div>
											<div style={{borderTop: '1px solid rgba(255, 255, 255, 0.15)', width: `${transitionScale * 100}px`}}></div>
											<Parallax className='absolute font-display text-4xl lg:text-5xl uppercase text-white text-center tracking-wide' translateY={['400px', '200px']}>
												<Fade bottom opposite cascade>
													Welcome to the Hideouts.
													<span className='font-body -mt-8 text-sm text-gray'>Ever thought you could be a part of a different reality?</span>
												</Fade>
											</Parallax>
										</div>
									</div>
								</div>
							</div>

							<div>
								<Article align={"left"} image={"https://cdn.discordapp.com/attachments/934914135613931593/1077323147143020594/Untitled_Artwork.png"} imageStyle={{}} heading={"The Lore"} subheading={"01"} description={
									`The Atherians, a powerful and mystical race, lived in harmony on the enchanted planet Ather.\n\n` +
									`However, a group attempted to extract the planet's core for energy, causing instability and the eventual doom of Ather.\n\n` +
									`In race to save their species, masterminds set out to find a new home and eventually discovered Earth.\n\n` +
									`The Atherians set out on a journey in search of a new home and after facing many atrocities of space, they finally landed on the surface of the mysterious planet Earth in the year 2017.\n\n` +
									`It's been 5 years since their arrival and they are still trying to explore and understand the new planet.`}
								></Article>
							</div>

							{/* Starquest Ambience */}
							{/* <div> 
								<video loop autoPlay muted style={{width: '120rem', height: 'auto', position: 'absolute', filter: 'blur(100px)', opacity: 0.3}} src="/videos/nyc.mp4"></video>
							</div> */}
							{/* Starquest Landing */}
							<div className='flex h-[40rem] mt-16 lg:mt-32 mb-32 justify-center items-center z-40' style={{WebkitClipPath: clipPath, clipPath}}>
								<div className='absolute flex flex-col justify-center items-center z-20'>
									<h1 className='font-body text-gray text-sm'>THY COLLECTIVE BELIEF OF ROADMAPS BEING PRIMITIVE</h1>
									<h1 className='font-display text-white text-8xl'>
										STARQUEST
									</h1>

									<div onClick={() => {
										setStarquestOpen(true)
									}}
									className="cursor-pointer text-sm text-white backdrop-blur-lg w-fit px-4 h-12 mt-10 rounded-md flex justify-center items-center font-body"
									>EXPLORE NOW</div>
								</div>
								<Parallax translateY={[15, -15]}>
									<video loop autoPlay muted style={{width: '150rem', height: 'auto', position: 'relative', filter: 'brightness(70%)', opacity: 1}} src="/videos/nyc.mp4"></video>
								</Parallax>
							</div>


							<div>
								<Article align={"left"} image={"/images/manifestoHand.png"} imageStyle={{position: 'absolute', left: '-350px', top: '-220px', width: '800px'}} heading={"Vision"} subheading={"02"} description={
								`Amidst NFT's bright and dazzling light, A firm doth rise with might and might. Decentralized, it brings a show, in digital realms, its fame doth grow.\n\n` +
								`Comics, series, and merchandise bold, Cosplays, games, a tale untold. With community's zeal and spirit rare, its mission to bring forth a world fair.\n\n` +
								`To weave a tapestry, with hands entwine, and zip the bounds of thy imagination's vine.\n\n` +
								`In this new world, our spirits shall converge, and creativity, passion, and zeal shall surge.`}></Article>
							</div>

							{/* Spreading the word Ambience */}
							{/* <div> 
								<video loop autoPlay muted style={{width: '120rem', height: 'auto', position: 'absolute', filter: 'blur(100px)', opacity: 0.3}} src="/videos/spread.mp4"></video>
							</div> */}
							{/* Spreading the word landing */}
							<div className='flex h-[40rem] mt-16 lg:mt-32 mb-32 justify-center items-center z-40' style={{WebkitClipPath: clipPath, clipPath}}>
								<div className='absolute flex flex-col justify-center items-center z-20'>
									<h1 className='font-body text-gray text-sm'>WE FEAR NO RULES</h1>
									<h1 className='font-display text-white text-8xl'>
										REVELATION
									</h1>

									<div onClick={() => {
										setStarquestOpen(true)
									}}
									className="cursor-pointer text-sm text-white backdrop-blur-lg w-fit px-4 h-12 mt-10 rounded-md flex justify-center items-center font-body"
									>WATCH NOW</div>
								</div>
								<Parallax translateY={[15, -15]}>
									<video className='scale-150' loop autoPlay muted style={{width: '250rem', height: 'auto', position: 'relative', filter: 'brightness(50%)', opacity: 1}} src="/videos/revelation.mp4"></video>
								</Parallax>
							</div>

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
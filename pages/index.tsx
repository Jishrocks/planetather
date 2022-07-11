import { NextPage } from 'next'

import Head from 'next/head'

import Box from '@mui/material/Box'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Landing from '../components/Home/Landing'
import Epilogue from '../components/Home/Epilogue'
import Creators from '../components/Home/Creators'
import Roadmap from '../components/Home/Roadmap'
import Vision from '../components/Home/Vision'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const Home: NextPage = () => {

	return (
		<>
			<Head>
				<title>Planet Ather | Home</title>
				<meta name="description" content="idk right now I'll change this later" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box>
				<ParallaxProvider>
					<Navbar />
					<Box sx={{overflowX: 'hidden'}}>
						<Parallax scale={[0.9, 1.05]} speed={10} style={{overflowX: 'hidden'}}>
							<Landing />
						</Parallax>
						<Box sx={{marginTop: '7.6rem', marginBottom: '5rem', display: 'flex', flexDirection: 'column', gap: '12rem'}}>
							<Parallax scale={[1, 0.95]}>
								<Epilogue />
							</Parallax>
							<Parallax scale={[1, 0.95]}>
								<Vision />
							</Parallax>
							<Parallax scale={[1, 0.95]}>
								<Roadmap />
							</Parallax>
							<Parallax scale={[1, 0.95]}>
								<Creators />
							</Parallax>
						</Box>
						<Footer />
					</Box>
				</ParallaxProvider>
			</Box>
		</>
	)
}

export default Home
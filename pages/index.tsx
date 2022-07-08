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

const Home: NextPage = () => {

	return (
		<>
			<Head>
				<title>Planet Ather | Home</title>
				<meta name="description" content="idk right now I'll change this later" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box>
				<Navbar />
				<Landing />
				<Box sx={{marginTop: '5rem', marginBottom: '5rem', display: 'flex', flexDirection: 'column', gap: '10rem'}}>
					<Epilogue />
					<Vision />
					<Roadmap />
					<Creators />
				</Box>
				<Footer />
			</Box>
		</>
	)
}

export default Home
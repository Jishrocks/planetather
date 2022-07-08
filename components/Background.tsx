import Box from "@mui/material/Box"
import { motion } from "framer-motion"
import { NextPage } from "next"
import { ReactNode } from "react"
import Navbar from "./Navbar"

const Background: NextPage = ({children}: any) => {
    return (
		<>{children}</>
        // <Box sx={{
        //     height: '100vh',
        //     overflow: 'auto',
        //     backgroundColor: '#101010',
        // }}>

		// 	<Box sx={{position: 'fixed', height: '100vh', width: '100vw'}}>
		// 		<Box sx={{opacity: 0.5}}>
		// 			{/* <motion.img
		// 			width={"100%"}
		// 			height={"100%"}
		// 			style={{opacity: '0.2', filter: 'grayscale(100%) blur(5px)'}}
		// 			src={"/images/background.jpg"}
		// 			>
		// 			</motion.img> */}
		// 			{/* <motion.img
		// 			style={{
		// 				position: 'fixed',
		// 				margin: 'auto',
		// 				top: 0,
		// 				left: 0,
		// 				bottom: 0,
		// 				right: 25,
		// 			}}
		// 			width={"1300px"}
		// 			src={"/images/hero-background-circle.png"}
		// 			animate={{
		// 				y: 50,
		// 				scale: 0.99,
		// 				transition: {
		// 					duration: 10,
		// 					yoyo: Infinity,
		// 				}
		// 			}}
		// 			></motion.img>
		// 			<motion.img 
		// 			style={{
		// 				position: 'fixed',
		// 				margin: 'auto',
		// 				top: 0,
		// 				left: 0,
		// 				bottom: 0,
		// 				right: 0,
		// 			}}
		// 			width={"1300px"}
		// 			src={"/images/hero-smoke.png"}
		// 			animate={{
		// 				// y: 15,
		// 				scale: 0.95,
		// 				transition: {
		// 					duration: 10,
		// 					yoyo: Infinity,
		// 				}
		// 			}}
		// 			></motion.img>
		// 			<motion.img 
		// 			style={{
		// 				position: 'fixed',
		// 				margin: 'auto',
		// 				top: 0,
		// 				left: 0,
		// 				bottom: 0,
		// 				right: 0,
		// 			}}
		// 			width={"1300px"}
		// 			src={"/images/home-hero.png"}
		// 			></motion.img> */}
		// 		</Box>
		// 	</Box>

        //     <Box>
		// 		{/* <Navbar></Navbar> */}
                
        //     </Box>
        // </Box>
    )
}

export default Background
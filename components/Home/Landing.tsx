import { TextScramble } from "../ScrambledText";
import { motion } from "framer-motion";

import React from "react";
import Lottie from 'react-lottie';
import scrollDown from '../../public/scroll-down.json'

const Landing = ({children}: any) => {
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh', marginLeft: '0rem', overflow: 'visible', background: `radial-gradient(ellipse at bottom, #e5e3cf, transparent), radial-gradient(ellipse at top, #fff, transparent)`}}>
            <motion.img
            style={{width: '100%', height: '100vh', position: 'absolute', filter: 'blur(1px)'}}
            // src="/images/imageedit_1_3446488580.png"
            src="/images/landing-background2.png"
            ></motion.img>
            {/* <motion.img
				style={{width: '130vw', position: 'absolute', transform: 'translateX(3rem) translateY(5rem)', opacity: 0.7}}
				src="/images/graffitti.png"
            ></motion.img> */}
            <h1 style={{fontFamily: 'FKScreamer', opacity: 0.9, textAlign: 'center', color: '#fff', fontSize: '7.5rem', marginBlock: '0rem', textTransform: 'uppercase', letterSpacing: '2px', textShadow: '0 0 100px rgb(19 23 30 / 18%), 0 50px 32px rgb(19 23 30 / 12%)', lineHeight: 1}}>
                We are
            </h1>
            <h1 style={{fontFamily: 'Mandalore', textAlign: 'center', color: '#fff', fontSize: '15rem', marginBlock: '0rem', textTransform: 'lowercase', lineHeight: 0.78, letterSpacing: '2px', textShadow: '0 0 150px rgb(19 23 30 / 18%), 0 50px 32px rgb(19 23 30 / 12%)', zIndex: 0}}>
                <TextScramble text="ather"></TextScramble>
            </h1>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100vw', transform: 'translateY(17.25rem)'}}>
				<Lottie
					style={{opacity: 1, filter: 'invert()'}}
					options={{animationData: scrollDown, autoplay: true, loop: true}}
					height={50}
					width={50}
				/>
				<h1 style={{fontFamily: 'Mono', color: 'silver', fontSize: '0.5625rem', marginBlock: 0, textTransform: 'uppercase', marginTop: '0.5625rem', letterSpacing: '0.5px'}}>Scroll to view more</h1>
			</div>
            <motion.img
            style={{width: '20rem', position: 'absolute', marginLeft: '620px', marginTop: '330px', filter: 'drop-shadow(-12px 12px 30px rgba(0, 0, 0, 0.3))'}}
            src="/images/girl2.png"
            >
            </motion.img>
            <motion.img
            style={{width: '15rem', position: 'absolute', marginRight: '660px', marginTop: '270px', filter: 'drop-shadow(12px 12px 30px rgba(0, 0, 0, 0.3))'}}
            src="/images/salvo3.png"
            >
            </motion.img>
            
        </div>
    )
}

export default Landing
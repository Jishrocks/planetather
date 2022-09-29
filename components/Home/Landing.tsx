import { TextScramble } from "../ScrambledText";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";


import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const Landing = ({children}: any) => {

    let isMobile = useMediaQuery('(max-width: 450px)')
    let isTablet = useMediaQuery('(max-width: 900px)')
    let isDesktop = useMediaQuery('(max-width: 1200px)')
    
    return (
        <>
        {/* <img src="../images/synthpop.jpeg" style={{height: '120vh', position: 'absolute', opacity: 0.1}} alt="" /> */}
            {!isMobile ? <div style={{display: 'flex', height: '49rem', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: '10%', marginRight: '10%', gap: 8}}>
            <Grid container gap={6}>
                <Grid item style={{display: 'flex', flexDirection: 'column'}} xs>
                    {/* <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '1rem', gap: 2}}>
                        <motion.div
                        initial={{
                            divShadow: '#fa4454 0px 0px 1px 0px'
                        }}
                        animate={{
                            divShadow: '#fa4454 0px 0px 10px 1px',
                            transition: {
                                duration: 1,
                                yoyo: Infinity,
                            }
                        }}
                        style={{width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: '#fa4454'}}>
                        </motion.div>
                        <h1 style={{fontFamily: 'Mono', color: '#fa4454', fontSize: '1.1rem', letterSpacing: '3px', textTransform: 'uppercase'}}>ACT I : Prologue - AYR 1</h1>	
                    </div> */}
                    <div style={{justifyContent: 'center'}}>
                        <h1 style={{fontFamily: 'FKScreamer', opacity: 1, textAlign: 'center', color: '#fff', fontSize: '10rem', marginBlock: '0rem', textTransform: 'uppercase', letterSpacing: '2px', textShadow: '0 0 100px rgb(19 23 30 / 18%), 0 50px 32px rgb(19 23 30 / 12%)', lineHeight: 1}}>
                            We are
                        </h1>
                        <h1 style={{fontFamily: 'Mandalore', textAlign: 'center', color: '#fff', fontSize: '20rem', marginBlock: '0rem', textTransform: 'lowercase', lineHeight: 0.78, letterSpacing: '2px', textShadow: '0 0 150px rgb(19 23 30 / 18%), 0 50px 32px rgb(19 23 30 / 12%)'}}>
                            <TextScramble text="ather"></TextScramble>
                        </h1>
                        <motion.img
						style={{width: '34rem', position: 'absolute', transform: 'translateX(50vw) translateY(-30.5rem)'}}
						src="/images/landing-syke-cropped2.png"
						>
						</motion.img>
                        {/* <motion.img
						style={{width: '35rem', position: 'absolute', transform: 'translateX(10rem) translateY(135rem) rotate(4deg)'}}
						src="/images/kid.png"
						>
						</motion.img> */}
                        <motion.img
                        style={{width: '39rem', position: 'absolute', transform: 'translateX(-6vw) translateY(-36.5rem)'}}
                        src="/images/salvo2.png"
                        >
                        </motion.img>

                        {/* <div style={{width: '100vw', borderBottom: '1px solid black', position: 'absolute', transform: 'translateY(39rem)'}}>

                        </div> */}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
                        {/* <div style={{border: '1px solid #ffffff30', clipPath: 'polygon(8% 0, 100% 0, 100% 70%, 92% 100%, 0 100%, 0 30%)', width: '23.5rem', height: '5rem', marginLeft: '0rem', marginTop: '1rem'}}>
                            <div style={{display: 'flex', backgroundColor: '#fa4454', justifyContent: 'center', alignItems: 'center', textTransform: 'uppercase', color: '#ece8e1', fontSize: '1.3rem', fontFamily: 'FFMark', letterSpacing: '1px', margin: '5px', height: 'calc(5rem - 10px)'}}>
                                Explore
                            </div>
                        </div> */}
                        {/* <motion.img 
                        // initial={{
                        //     transform: 'rotate(0deg)'
                        // }}
                        // animate={{
                        //     transform: 'rotate(359deg)',
                        //     transition: {
                        //         duration: 10,
                        //         yoyo: Infinity,
                        //     }
                        // }}
                        onClick={() => {
                            // if (parallaxRef) {
                            //     (parallaxRef.current as any).scrollTo(0)
                            // }
                        }} width={"auto"} height={"100px"} src={"/images/logov2.png"} style={{cursor: 'pointer', opacity: 0.15, filter: 'invert()'}}></motion.img> */}
                    </div>
                </Grid>
                {/* <Grid item style={{display: 'flex', alignItems: 'center'}} xs>
                </Grid> */}
            </Grid>
        </div> 
        : 
        <div style={{marginRight: '10%', marginLeft: '10%', height: '25rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 2, marginTop: '5rem'}}>
                <motion.div
                initial={{
                    boxShadow: '#fa4454 0px 0px 1px 0px'
                }}
                animate={{
                    boxShadow: '#fa4454 0px 0px 10px 1px',
                    transition: {
                        duration: 1,
                        yoyo: Infinity,
                    }
                }}
                style={{width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: '#fa4454'}}>
                </motion.div>
                <h1 style={{fontFamily: 'Mono', color: '#fa4454', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase'}}>ACT I : Prologue - AYR 1</h1>	
            </div>
            <h1 style={{fontFamily: 'Mandalore', color: '#ece8e1', fontSize: '8rem', marginBlock: '1rem', textTransform: 'lowercase'}}>
                <TextScramble text="ather"></TextScramble>
            </h1>
        </div>
        }
        </>
    )
}

export default Landing
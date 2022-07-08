import { TextScramble } from "@a7sc11u/scramble";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

import { NextPage } from "next";

const Landing: NextPage = ({children}: any) => {
    return (
        <Box sx={{display: 'flex', height: '80vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: '8rem', marginRight: '8rem', gap: 8}}>
            <Grid container gap={6}>
                <Grid item sx={{display: 'flex', flexDirection: 'column'}} xs>
                    <Box sx={{display: 'flex', alignItems: 'center', marginLeft: '1rem', gap: 2}}>
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
                        <h1 style={{fontFamily: 'Mono', color: '#ece8e1', fontSize: '1rem', letterSpacing: '3px', textTransform: 'uppercase'}}>ACT I : Epilogue - AYR 1</h1>	
                    </Box>
                    <h1 style={{fontFamily: 'Mandalore', color: '#ece8e1', fontSize: '12rem', marginBlock: '1rem', textTransform: 'lowercase'}}>
                        <TextScramble text="ather"></TextScramble>
                    </h1>
                    <h1 style={{width: '85%', fontFamily: 'Mono', color: '#c7c3bb', fontSize: '0.875rem', letterSpacing: '1px', marginBlockStart: '1rem'}}>A planet rich in power and mystique consumed by death and disaster. A race against time to find a new home.</h1>
                </Grid>
                <Grid item sx={{display: 'flex', alignItems: 'center'}} xs>
                    <motion.img 
                    style={{
                        marginTop: '7rem',
                        marginLeft: '38rem',
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
                    animate={{
                        y: 25,
                        scale: 1.05,
                        transition: {
                            duration: 7,
                            yoyo: Infinity,
                        }
                    }}
                    height='auto'
                    width={"900px"}
                    src={"/images/ather_00240.png"}
                    ></motion.img>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Landing
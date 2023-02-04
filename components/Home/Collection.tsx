import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion, useAnimation } from "framer-motion";

import Image from 'next/image'

import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

const Collection = ({children}: any) => {

    const animation = useAnimation()
    const [ref, inView] = useInView()

    let isMobile = useMediaQuery('(max-width: 450px)')
    let isTablet = useMediaQuery('(max-width: 900px)')
    let isDesktop = useMediaQuery('(max-width: 1200px)')

    const animationVariants = {
        hidden: {
            y: 50,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    }

    const transition = {
        type: 'spring',
        // delay: 0.7,
        duration: 1
    }

    useEffect(() => {
        if (inView) {
            animation.start("visible")
            return
        }
    }, [animation, inView])

    const headingAnimationVariants = {
        hidden: {
            y: 150,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const headingTransition = {duration: 1, type: 'spring'}

    return (
        <motion.div 
        transition={transition}
        ref={ref}
        variants={animationVariants}
        initial={"hidden"}
        animate={animation}
        style={{display: 'flex', flexDirection: 'column', marginTop: '7.5rem', marginBottom: '7.5rem', height: 'auto', zIndex: 2}}>
            
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '2.5rem', zIndex: 3}}>
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    className='text-gradient-two'
                    style={{font: '400 0.9rem/100% Mono', letterSpacing: '2px', textTransform: 'uppercase', marginBlock: 0}}>
                        10000 Atherians
                </motion.h1>
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    className='text-gradient-two'
                    style={{font: '400 5rem/100% GalderGlynn', letterSpacing: '4px', textTransform: 'uppercase', marginBlock: 0}}>
                        COLLECTION
                </motion.h1>
            </div>

            <article style={{display: 'flex', width: '200%'}}>
                <div style={{position: 'absolute', opacity: 0.5}}>
                    <ul style={{display: 'flex', listStyleType: 'none', filter: 'blur(100px)', paddingLeft: 0, animation: 'bannermove 60s linear infinite', gap: 20}}>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#4a2d31'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069698944453574757/IMG_1925.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#e0f9f8'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699749176950884/New_NFT_Body.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#ffdb57'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699956723683358/Untitled_Artwork.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#cdcccc'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699890684379247/IMG_8042.JPG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#4a2d31'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1070717652089192639/Untitled_Artwork.png" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#e0f9f8'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1070716006646943754/Untitled_Artwork.png" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#ffdb57'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699956723683358/Untitled_Artwork.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#cdcccc'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699890684379247/IMG_8042.JPG" alt="" /></li>

                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#4a2d31'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069698944453574757/IMG_1925.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#e0f9f8'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699749176950884/New_NFT_Body.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#ffdb57'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699956723683358/Untitled_Artwork.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#cdcccc'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699890684379247/IMG_8042.JPG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#4a2d31'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1070717652089192639/Untitled_Artwork.png" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#e0f9f8'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1070716006646943754/Untitled_Artwork.png" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#ffdb57'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699956723683358/Untitled_Artwork.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#cdcccc'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699890684379247/IMG_8042.JPG" alt="" /></li>
                    </ul>
                </div>

                <div>
                    <ul style={{display: 'flex', listStyleType: 'none', paddingLeft: 0, animation: 'bannermove 30s linear infinite', gap: 20}}>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#4a2d31'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069698944453574757/IMG_1925.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#e0f9f8'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699749176950884/New_NFT_Body.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#ffdb57'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699956723683358/Untitled_Artwork.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#cdcccc'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699890684379247/IMG_8042.JPG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#4a2d31'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1070717652089192639/Untitled_Artwork.png" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#e0f9f8'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1070716006646943754/Untitled_Artwork.png" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#ffdb57'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699956723683358/Untitled_Artwork.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#cdcccc'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699890684379247/IMG_8042.JPG" alt="" /></li>

                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#4a2d31'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069698944453574757/IMG_1925.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#e0f9f8'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699749176950884/New_NFT_Body.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#ffdb57'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699956723683358/Untitled_Artwork.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#cdcccc'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699890684379247/IMG_8042.JPG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#4a2d31'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1070717652089192639/Untitled_Artwork.png" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#e0f9f8'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1070716006646943754/Untitled_Artwork.png" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#ffdb57'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699956723683358/Untitled_Artwork.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#cdcccc'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1069699890684379247/IMG_8042.JPG" alt="" /></li>
                    </ul>
                </div>
            </article>

        </motion.div>
    )
}

export default Collection
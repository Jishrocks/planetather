import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Fade from "react-reveal/Fade";

const Creators = ({ children, viewRef }: any) => {
    return (
        <section
            ref={viewRef}
            data-scroll-section
            className='flex flex-col m-28 h-auto z-20'
        >
            <Fade bottom>
                <div className='flex flex-col justify-center items-center mb-10 z-30'>
                    <h1 className='text-white font-body tracking-widest uppercase text-xs lg:text-sm opacity-70'>
                        The makers
                    </h1>
                    <h1 className='text-white font-display tracking-wide uppercase text-6xl lg:text-7xl'>
                        Creators
                    </h1>
                </div>

                <div className='flex flex-row gap-5 justify-center items-center'>
                    <div className='flex justify-center items-end w-[325px]'>
                        <img
                            className='grayscale rounded-md'
                            src='https://cdn.discordapp.com/attachments/934914135613931593/1033142127691055264/unknown.png'
                            alt=''
                        />
                        <h1 className='text-white absolute font-body text-xs lg:text-sm tracking-wide uppercase z-10 mb-6'>
                            ThrottleMonk{" "}
                            <span style={{ opacity: 0.7 }}>/ Brain</span>
                        </h1>
                    </div>
                    <div className='flex justify-center items-end w-[325px]'>
                        <img
                            className='grayscale rounded-md'
                            src='https://cdn.discordapp.com/attachments/934914135613931593/1033144036569133056/unknown.png'
                            alt=''
                        />
                        <h1 className='text-white absolute font-body text-xs lg:text-sm tracking-wide uppercase z-10 mb-6'>
                            Nitro <span style={{ opacity: 0.7 }}>/ Techie</span>
                        </h1>
                    </div>
                    <div className='flex justify-center items-end w-[325px]'>
                        <img
                            className='grayscale rounded-md'
                            src='https://cdn.discordapp.com/attachments/934914135613931593/1033145177239466074/IMG_0417.jpg'
                            alt=''
                        />
                        <h1 className='text-white absolute font-body text-xs lg:text-sm tracking-wide uppercase z-10 mb-6'>
                            Kraken{" "}
                            <span style={{ opacity: 0.7 }}>/ Picasso</span>
                        </h1>
                    </div>
                </div>
                <div className='flex flex-row gap-5 justify-center items-center mt-5'>
                    <div className='flex justify-center items-end w-[325px]'>
                        <img
                            className='grayscale rounded-md'
                            src='https://cdn.discordapp.com/attachments/934914135613931593/1033396677408731268/aman_Cropped.jpg'
                            alt=''
                        />
                        <h1 className='text-white absolute font-body text-xs lg:text-sm tracking-wide uppercase z-10 mb-6'>
                            Hades <span style={{ opacity: 0.7 }}>/ Author</span>
                        </h1>
                    </div>
                    {/* <div className='flex justify-center items-end w-[325px]'>
                        <img
                            className='grayscale rounded-md w-full'
                            src='https://cdn.discordapp.com/attachments/934914135613931593/1033395131493142559/Moo_Cropped.png'
                            alt=''
                        />
                        <h1 className='text-white absolute font-body text-xs lg:text-sm tracking-wide uppercase z-10 mb-6'>
                            Moo <span style={{ opacity: 0.7 }}>/ Animator</span>
                        </h1>
                    </div> */}
                    <div className='flex justify-center items-end w-[325px]'>
                        <img
                            className='grayscale rounded-md w-full'
                            src='https://pbs.twimg.com/media/FrFhSFFaQAAdWRv?format=jpg&name=large'
                            alt=''
                        />
                        <h1 className='text-white absolute font-body text-xs lg:text-sm tracking-wide uppercase z-10 mb-6'>
                            Leo{" "}
                            <span style={{ opacity: 0.7 }}>
                                / Director of Fun
                            </span>
                        </h1>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default Creators;

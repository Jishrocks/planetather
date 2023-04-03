import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Fade from "react-reveal/Fade";

import Image from "next/image";

const CreatorImage = ({ image, name, role }: any) => {
    return (
        <div
            style={{ aspectRatio: "4 / 5" }}
            className='flex justify-center items-end h-[18rem] lg:h-[20rem] xl:h-[28rem] relative grayscale transition-all'
        >
            <Image
                layout='fill'
                className='rounded-md'
                objectFit='cover'
                src={image}
                alt=''
            />
            <h1 className='text-white absolute font-body text-xs lg:text-sm tracking-wide uppercase z-10 mb-6'>
                {name} <span style={{ opacity: 0.7 }}>/ {role}</span>
            </h1>
        </div>
    );
};

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
                    <CreatorImage
                        image='https://cdn.discordapp.com/attachments/934914135613931593/1033142127691055264/unknown.png'
                        name='Monk'
                        role='Brain'
                    ></CreatorImage>
                    <CreatorImage
                        image='https://cdn.discordapp.com/attachments/934914135613931593/1033144036569133056/unknown.png'
                        name='Nitro'
                        role='Techie'
                    ></CreatorImage>
                    <CreatorImage
                        image='https://cdn.discordapp.com/attachments/934914135613931593/1033145177239466074/IMG_0417.jpg'
                        name='Kraken'
                        role='Picasso'
                    ></CreatorImage>
                </div>
                <div className='flex flex-row gap-5 justify-center items-center mt-5'>
                    <CreatorImage
                        image='https://cdn.discordapp.com/attachments/934914135613931593/1033396677408731268/aman_Cropped.jpg'
                        name='Hades'
                        role='Author'
                    ></CreatorImage>
                    <CreatorImage
                        image='https://cdn.discordapp.com/attachments/934914135613931593/1091757583481704538/C74B8C45-CDE5-4E95-BDA2-6C9260A620AA.jpg'
                        name='Leo'
                        role='Director of Mischief'
                    ></CreatorImage>
                </div>
            </Fade>
        </section>
    );
};

export default Creators;

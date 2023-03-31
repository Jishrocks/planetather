import Image from "next/image";
import React from "react";
import Fade from "react-reveal/Fade";

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeCollection(
    urls: string[],
    blur: boolean,
    animationDirection: "left" | "right"
) {
    return (
        <div className={blur ? "absolute opacity-70" : ""}>
            <ul
                className={`flex list-none gap-5 ${blur ? "blur-[120px]" : ""}`}
                style={{
                    animation: "bannermove 60s linear infinite",
                    animationDirection:
                        animationDirection == "right" ? "reverse" : "normal",
                }}
            >
                {urls.map((url, index) => (
                    <>
                        <li
                            className='w-[100%]'
                            style={{
                                clipPath:
                                    "polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)",
                            }}
                        >
                            <div className='w-[40vw] h-[40vw] lg:w-[34vw] lg:h-[34vw] xl:w-[28vw] xl:h-[28vw] max-w-none relative'>
                                <Image
                                    layout='fill'
                                    style={{
                                        clipPath:
                                            "polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)",
                                    }}
                                    src={url}
                                    alt={index.toString()}
                                />
                            </div>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    );
}

const Collection = ({ children, viewRef }: any) => {
    return (
        <section
            ref={viewRef}
            data-scroll-section
            className='flex flex-col my-40 h-auto z-20'
        >
            <Fade bottom>
                <div className='flex flex-col justify-center items-center mb-10 z-30'>
                    <h1 className='text-white font-body tracking-widest uppercase text-xs lg:text-sm opacity-70'>
                        10000 Atherians
                    </h1>
                    <h1 className='text-white font-display tracking-wide uppercase text-6xl lg:text-7xl'>
                        COLLECTION
                    </h1>
                </div>

                <article className='flex w-[200%]'>
                    {makeCollection(
                        [
                            "https://cdn.discordapp.com/attachments/934914135613931593/1078656767023656972/Male_Hair_Part_1.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1078067539453689986/Untitled_Artwork.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1070717652089192639/Untitled_Artwork.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1078064869808545872/Untitled_Artwork.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1078060534806614126/Untitled_Artwork.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1078058003527372970/Untitled_Artwork.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1078055575805501500/Untitled_Artwork.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1078065929134559313/IMG_2173.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1077674089801596989/IMG_2158.PNG",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1076599435854893098/13.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1076599436236558346/14.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1076599236780638398/10.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1076599072099672174/3.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1076599237158117416/11.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1076599072766562415/4.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1075725019809845329/Female_Hair_2.png",
                        ],
                        true,
                        "left"
                    )}
                    {makeCollection(
                        [
                            "https://cdn.discordapp.com/attachments/934914135613931593/1078656767023656972/Male_Hair_Part_1.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1078067539453689986/Untitled_Artwork.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1070717652089192639/Untitled_Artwork.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1078064869808545872/Untitled_Artwork.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1078060534806614126/Untitled_Artwork.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1078058003527372970/Untitled_Artwork.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1078055575805501500/Untitled_Artwork.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1078065929134559313/IMG_2173.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1077674089801596989/IMG_2158.PNG",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1076599435854893098/13.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1076599436236558346/14.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1076599236780638398/10.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1076599072099672174/3.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1076599237158117416/11.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1076599072766562415/4.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1075725019809845329/Female_Hair_2.png",
                        ],
                        false,
                        "right"
                    )}
                </article>
            </Fade>
        </section>
    );
};

export default Collection;
export { makeCollection };

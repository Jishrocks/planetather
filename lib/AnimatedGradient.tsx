import React from "react";
import { makeCollection } from "../components/Home/Collection";

const AnimatedGradient = ({ animationDirection }: any) => {
    return (
        <div style={{ width: "200vw" }} className={"absolute opacity-70"}>
            <ul
                className={`flex list-none gap-5 blur-[120px] w-full`}
                style={{
                    animation: "bannermove 30s linear infinite",
                    animationDirection:
                        animationDirection == "right" ? "reverse" : "normal",
                }}
            >
                <div
                    style={{
                        background: `linear-gradient(45deg, rgba(117,246,232,1) 0%, rgba(252,155,202,1) 26%, rgba(255,255,153,1) 51%, rgba(56,177,161,1) 80%, rgba(153,153,255,1) 100%)`,
                    }}
                    className='w-full h-[40vw] lg:h-[34vw] xl:h-[28vw] max-w-none relative'
                />
            </ul>
        </div>
        // <>
        //     {makeCollection(
        //         [
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1078656767023656972/Male_Hair_Part_1.png",
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1078067539453689986/Untitled_Artwork.png",
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1070717652089192639/Untitled_Artwork.png",
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1078064869808545872/Untitled_Artwork.png",
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1078060534806614126/Untitled_Artwork.png",
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1078058003527372970/Untitled_Artwork.png",
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1078055575805501500/Untitled_Artwork.png",
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1078065929134559313/IMG_2173.png",
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1077674089801596989/IMG_2158.PNG",
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1076599435854893098/13.png",
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1076599436236558346/14.png",
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1076599236780638398/10.png",
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1076599072099672174/3.png",
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1076599237158117416/11.png",
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1076599072766562415/4.png",
        //             "https://cdn.discordapp.com/attachments/934914135613931593/1075725019809845329/Female_Hair_2.png",
        //         ],
        //         true,
        //         "left"
        //     )}
        // </>
    );
};

export default AnimatedGradient;

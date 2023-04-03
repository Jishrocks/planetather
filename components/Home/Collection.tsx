import Image from "next/image";
import React from "react";
import Fade from "react-reveal/Fade";

function shuffleArray(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

type MakeCollectionProps = {
    urls: string[];
    blur: boolean;
    animationDirection: "left" | "right";
};
const MakeCollection = (props: MakeCollectionProps) => {
    const [urls, _] = React.useState<string[]>(shuffleArray(props.urls));
    return (
        <div className={props.blur ? "absolute opacity-70" : ""}>
            <ul
                className={`flex list-none gap-5 ${
                    props.blur ? "blur-[120px]" : ""
                }`}
                style={{
                    animation: "bannermove 60s linear infinite",
                    animationDirection:
                        props.animationDirection == "right"
                            ? "reverse"
                            : "normal",
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
};

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
                    <MakeCollection
                        urls={[
                            "https://media.discordapp.net/attachments/934914135613931593/1092107535508590632/Untitled_Artwork.jpg",
                            "https://media.discordapp.net/attachments/934914135613931593/1092106821872926720/Untitled_Artwork.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1092105477447483472/Untitled_Artwork.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1092104738297872424/Untitled_Artwork.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1092102555921821777/Untitled_Artwork.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1092097894091333702/IMG_2561.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091791264409718784/IMG_2526.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091791264090959983/IMG_2529.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1092108176922509312/Untitled_Artwork.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091783967872663673/IMG_2523.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091783968325636176/IMG_2536.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091783967423860898/IMG_2522.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091783966555643946/IMG_2517.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091783965943283893/IMG_2516.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091783968719912980/IMG_2537.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1091784641624682566/Untitled_Artwork.png",
                        ]}
                        blur={true}
                        animationDirection={"left"}
                    ></MakeCollection>

                    <MakeCollection
                        urls={[
                            "https://media.discordapp.net/attachments/934914135613931593/1092107535508590632/Untitled_Artwork.jpg",
                            "https://media.discordapp.net/attachments/934914135613931593/1092106821872926720/Untitled_Artwork.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1092105477447483472/Untitled_Artwork.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1092104738297872424/Untitled_Artwork.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1092102555921821777/Untitled_Artwork.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1092097894091333702/IMG_2561.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091791264409718784/IMG_2526.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091791264090959983/IMG_2529.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091783967872663673/IMG_2523.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091783968325636176/IMG_2536.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091783967423860898/IMG_2522.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091783966555643946/IMG_2517.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091783965943283893/IMG_2516.png",
                            "https://media.discordapp.net/attachments/934914135613931593/1091783968719912980/IMG_2537.png",
                            "https://cdn.discordapp.com/attachments/934914135613931593/1091784641624682566/Untitled_Artwork.png",
                        ]}
                        blur={false}
                        animationDirection={"right"}
                    ></MakeCollection>
                </article>
            </Fade>
        </section>
    );
};

export default Collection;

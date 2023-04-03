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
                        urls={Array.from({ length: 15 }, (_, i) => i + 1).map(
                            (i) => `/images/collection/${i}.png`
                        )}
                        blur={true}
                        animationDirection={"left"}
                    ></MakeCollection>

                    <MakeCollection
                        urls={Array.from({ length: 15 }, (_, i) => i + 1).map(
                            (i) => `/images/collection/${i}.png`
                        )}
                        blur={false}
                        animationDirection={"right"}
                    ></MakeCollection>
                </article>
            </Fade>
        </section>
    );
};

export default Collection;

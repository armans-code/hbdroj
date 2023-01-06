import React, { useEffect, useRef, useState } from 'react';
import clown_dance from '../images/clown_dance.gif';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from '../styles.module.css';
import troll from '../images/TROLL.JPG';
import { Link } from 'react-router-dom';
function Home() {
    const alignCenter = { display: 'flex', alignItems: 'center' };

    const [angle, setAngle] = useState(0);

    const parallaxRef = useRef();

    function handleClick() {
        // console.log(parallaxRef);
    }

    let gradient = `linear-gradient(${angle}deg, #e66465, #9198e5)`;

    const onScroll = () => {
        let scroll = parallaxRef.current.current / parallaxRef.current.space;
        console.log(360 / (scroll + 1));
        setAngle(360 / (scroll + 1));
        gradient = `linear-gradient(${angle}deg, #e66465, #9198e5)`;
    };

    useEffect(() => {
        if (!parallaxRef.current || !parallaxRef.current.container.current)
            return;
        parallaxRef.current.container.current.onscroll = onScroll;
    }, []);

    let bgStyle = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100vw',
        height: '1000px',
        background: gradient,
    };

    return (
        <div>
            <div style={bgStyle} />
            <Parallax pages={10} ref={parallaxRef}>
                <ParallaxLayer
                    offset={0}
                    speed={0.5}
                    style={{
                        ...alignCenter,
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <h2>Hello Rohil "Roj" Agarwal.</h2>
                    <p className={styles.scrollText}>
                        Take a scroll down, ya bum.
                    </p>
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 1, end: 3.5 }}
                    style={{
                        ...alignCenter,
                        justifyContent: 'flex-start',
                    }}
                >
                    <div
                        className={`${styles.card} ${styles.sticky}`}
                        onClick={handleClick}
                    >
                        <img src={clown_dance} />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.5}
                    speed={1.5}
                    style={{ ...alignCenter, justifyContent: 'flex-end' }}
                >
                    <div
                        className={`${styles.card} ${styles.parallax} ${styles.purple}`}
                    >
                        <p>
                            As you may have already noticed, there is a dancing
                            clown at the left side of the page that will follow
                            you no matter how far you scroll. Do not try to
                            escape it and scroll too far or else you will have
                            regrets (no fr).
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    speed={1.5}
                    style={{ ...alignCenter, justifyContent: 'flex-end' }}
                >
                    <div
                        className={`${styles.card} ${styles.parallax} ${styles.blue}`}
                    >
                        <p>
                            Hopefully your IQ and self-realization skills are
                            large enough for you to have realized that this
                            clown is actually YOU. Yes, YOU. ROHIL AGARWAL. One
                            day, while I was spying on you, I saw you dancing
                            like a clown and decided to animate it (jk this is
                            not my animation but instead a live video
                            recording).
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3.5}
                    speed={1.5}
                    style={{ ...alignCenter, justifyContent: 'flex-end' }}
                >
                    <div
                        className={`${styles.card} ${styles.parallax} ${styles.black}`}
                    >
                        <p style={{ color: 'white' }}>
                            Because your IQ is so low, ik this may have come to
                            you as a surprise. Therefore, I am giving you a
                            chance to redeem yourself. You may escape this true
                            clown version of yourself, but it will cost you...
                            Keep scrolling to find out.
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4}
                    speed={1.5}
                    style={{ ...alignCenter, justifyContent: 'center' }}
                >
                    <p style={{ color: 'white' }}>
                        I see. So you're ready, hm?
                    </p>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={5}
                    speed={0.5}
                    style={{ ...alignCenter, justifyContent: 'center' }}
                >
                    <h1 styles={{ color: 'white' }}>Well then...</h1>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={7}
                    speed={0.5}
                    style={{
                        backgroundImage: `url(${troll})`,
                        backgroundSize: 'contain',
                    }}
                >
                    {/* <img src={troll} /> */}
                </ParallaxLayer>
                <ParallaxLayer
                    offset={8}
                    speed={1.5}
                    style={{ ...alignCenter, justifyContent: 'center' }}
                >
                    <h1
                        className={`${styles.scrollText}`}
                        style={{ color: 'white' }}
                    >
                        TROLLEDDD!!!!
                    </h1>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={9}
                    speed={1.5}
                    style={{
                        ...alignCenter,
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <p
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            padding: '300px',
                        }}
                    >
                        I warned you not to scroll too far, man. But what did
                        you do? Ya done scrolled too far, ya bum, and now you're
                        sitting here embarrassed with everyone around you
                        judging you in their heads. Too bad, so sad.
                    </p>
                    <Link to="/game">
                        <button className="learn-more">
                            Click here to redeem youreslf.
                        </button>
                    </Link>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default Home;

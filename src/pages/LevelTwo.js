import React, { useEffect, useState } from 'react';
import Guess from '../components/Guess';
import PuzzleStore from '../stores/PuzzleStore';
import { useLocalObservable, observer } from 'mobx-react-lite';
import Qwerty from '../components/Qwerty';
import roj_win from '../images/roj_win.png';
import clown_dance from '../images/clown_dance.gif';
import troll from '../images/TROLL.JPG';
import roj_sus from '../images/roj_sus.png';
import roj_suit from '../images/roj_suit.png';
import roj2 from '../images/roj2.png';
import roj_young from '../images/roj_young.png';
import roj_zoom from '../images/roj_zoom.png';
import roj_nhd from '../images/roj_nhd.png';
import './LevelTwo.css';
import { Link, useNavigate } from 'react-router-dom';

export default observer(function LevelTwo() {
    const store = useLocalObservable(() => PuzzleStore);
    const navigate = useNavigate();

    useEffect(() => {
        store.init();
        window.addEventListener('keyup', store.handleKeyup);
        return () => {
            window.removeEventListener('keyup', store.handleKeyup);
        };
    }, []);

    const Snowflake = (props) => {
        return (
            <p className="Snowflake" id={`item${props.id}`} style={props.style}>
                <img className="object-cover" src={props.image} />
            </p>
        );
    };

    class Snow extends React.Component {
        snow = () => {
            let animationDelay = '0s';
            let fontSize = '100px';
            let image;
            let images = [
                roj_win,
                clown_dance,
                troll,
                roj_sus,
                roj_suit,
                roj2,
                roj_young,
                roj_zoom,
                roj_nhd,
            ];
            let arr = Array.from(Array(90).keys());
            return arr.map((el, i) => {
                animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
                fontSize = `${Math.floor(Math.random() * 40) + 10}px`;
                image = images[Math.floor(Math.random() * images.length)];
                let style = {
                    animationDelay,
                    width: fontSize,
                    height: fontSize,
                };
                return <Snowflake key={i} id={i} style={style} image={image} />;
            });
        };
        render() {
            return <div className="App">{this.snow()}</div>;
        }
    }

    return !store.salet ? (
        <div className="flex justify-between overflow-hidden h-screen">
            {store.lost ? (
                <div className="bg-red-400 w-screen h-screen flex justify-center items-center flex-col">
                    <h2 className="text-white text-6xl font-bold">
                        Should've practiced when I warned you.
                    </h2>
                    <img src={clown_dance} />
                    <button
                        onClick={store.init}
                        className="hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    >
                        I'm sorry, I'm begging you to give me another chance to
                        play again.
                    </button>
                </div>
            ) : (
                <div>
                    <div className="top-0 left-0 absolute z-0 flex h-screen w-screen flex-col items-center justify-center bg-gray-500">
                        <h1 className="bg-gradient-to-br from-orange-300 to-orange-800 bg-clip-text text-6xl font-bold uppercase text-transparent">
                            LEVEL TWO
                        </h1>
                        <p className="text-white text-center px-40">
                            I've been warning you recently to practice your
                            wordle. You laughed at me. You told me no one plays
                            anymore. Well, you should've. Let's see how you do
                            now.
                        </p>
                        {store.guesses.map((_, i) => (
                            <Guess
                                key={i}
                                word={store.word}
                                guess={store.guesses[i]}
                                isGuessed={i < store.currentGuess}
                            />
                        ))}
                        {store.won && navigate('/level-three')}
                        <Qwerty store={store} />
                    </div>
                    <Snow className="absolute z-10 top-0 left-0" />
                    <Link to="/">
                        <p className="absolute z-20 bottom-0 left-0 text-white text-lg">
                            Psst! Don't click me! &lt;:)
                        </p>
                    </Link>
                </div>
            )}
        </div>
    ) : (
        <div className="flex items-center justify-center h-screen bg-red-600">
            <div className="bg-white salet p-20 border rounded-3xl flex items-center flex-col ">
                <h1 className="text-3xl">
                    YOU ACTUALLY USED <b>SALET</b>? NAH REDO IT, YA BUM.
                </h1>
                <button
                    onClick={() => store.init()}
                    className="hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                    I apologize and solemnly swear that I will not use "Salet"
                    anymore.
                </button>
            </div>
        </div>
    );
});

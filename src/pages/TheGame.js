import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './particles.scss';
import { useNavigate } from 'react-router-dom';

function TheGame() {
    let arr = Array.from(Array(400).keys());
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const content = {
        animate: {
            transition: { staggerChildren: 0.3, delayChildren: 2.8 },
        },
    };

    const gameText = {
        initial: {
            height: '50vh',
            opacity: 0,
        },
        animate: {
            height: '0',
            opacity: 100,
            marginTop: '6rem',
            transition: {
                duration: 1.5,
                ease: [0.87, 0, 0.13, 1],
                delay: 1,
            },
        },
    };

    const newStart = {
        initial: {
            height: '200vw',
            width: '200vw',
        },
        animate: {
            height: '0',
            width: '0',
            transition: {
                when: 'afterChildren',
                duration: 1.5,
                ease: [0.5, 0, 0.13, 1],
            },
        },
    };

    const endBox = {
        hidden: {
            height: 0,
            width: 0,
        },
        visible: {
            height: '200vh',
            width: '200vw',
            transition: {
                duration: 1.5,
                ease: [0.5, 0, 0.13, 1],
            },
        },
    };

    function handleComplete(e) {
        if (e == 'visible') navigate('/level-one');
    }

    const EndTransition = () => {
        return (
            <div className="absolute z-30">
                <motion.div
                    variants={endBox}
                    animate={open ? 'visible' : 'hidden'}
                    className="bg-black rounded-full"
                    onAnimationComplete={(e) => handleComplete(e)}
                />
            </div>
        );
    };

    const NewInitial = () => {
        return (
            <div className="absolute">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={newStart}
                    className="bg-black rounded-full"
                />
            </div>
        );
    };

    return (
        <div>
            <motion.section
                exit={{ opacity: 0 }}
                className="flex items-center justify-center"
            >
                <EndTransition />
                <NewInitial />
                {/* <InitialTransition /> */}
                <div className="h-screen flex flex-col items-center overflow-hidden">
                    <motion.div
                        variants={content}
                        initial="initial"
                        animate="animate"
                        className="h-screen overflow-hidden flex flex-col items-center"
                    >
                        <motion.h1
                            variants={gameText}
                            initial="initial"
                            animate="animate"
                            className="text-6xl flex flex-col items-center justify-end text-blue-500 font-bold"
                        >
                            Welcome to The Game.
                        </motion.h1>
                        <div className="absolute top-1/2 flex flex-col items-center justify-center">
                            <button
                                onClick={() => setOpen(true)}
                                className="absolute w-max z-10 hover:underline bg-blue-500 text-white font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                            >
                                I'm ready
                            </button>
                            <div className="absolute z-0 m-0 h-screen w-screen">
                                {arr.map((key) => (
                                    <div className="particle" />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default TheGame;

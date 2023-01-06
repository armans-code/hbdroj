import React from 'react';
import './Level.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function LevelOne() {
    const newStart = {
        initial: {
            height: '200vw',
            width: '200vw',
        },
        animate: {
            height: '0',
            width: '0',
            transition: {
                duration: 1.5,
                ease: [0.5, 0, 0.13, 1],
            },
        },
    };

    return (
        <div className="flex items-center justify-center h-max w-screen">
            <motion.div
                initial="initial"
                animate="animate"
                variants={newStart}
                className="bg-black rounded-full absolute z-10"
            />
            <div className="bg-yellow-300 h-max flex flex-col items-center">
                <div className="mt-10 p-5 border-black border-4 bg-white flex items-center justify-center h-min flex-col">
                    <h1 className="text-black text-4xl font-extrabold text-center">
                        WELCOME, ROHIL, TO LEVEL ONE!
                    </h1>
                    <p>no instructions here, figure it out, ya bum.</p>
                </div>
                <div className="flex">
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                </div>
                <div className="flex">
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                </div>
                <div className="flex">
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                </div>
                <div className="flex">
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                </div>
                <div className="flex">
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                </div>
                <div className="flex">
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                </div>
                <div className="flex">
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                </div>
                <div className="flex">
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                </div>
                <div className="flex">
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                </div>
                <div className="flex">
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                </div>
                <div className="flex">
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                </div>
                <div className="flex">
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <Link to="/level-two">
                        <div className="bg-blue-500 winner w-14 h-14 m-3 hover:bg-green-500" />
                    </Link>
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                </div>
                <div className="flex">
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                </div>
                <div className="flex">
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                </div>
                <div className="flex">
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                    <div className="bg-blue-500 loser w-14 h-14 m-3 hover:bg-red-500" />
                </div>
            </div>
        </div>
    );
}

export default LevelOne;

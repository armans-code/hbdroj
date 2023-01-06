import React, { useEffect, useState } from 'react';
import './particles.scss';
function LevelFour() {
    return (
        <div className="py-8 flex flex-col text-white items-center h-screen bg-[#313131]">
            <h1 className="font-bold text-6xl">LEVEL FOUR</h1>
            <p className="mt-4 text-center px-36 mb-4">
                Welcome to level four, Rohil. This is the final level, and you
                are so close to redeeming yourself. The final challenge is to
                watch the video below. DO NOT SKIP AHEAD OR LOOK AT ANYTHING. At
                the end of the video, check the comments.
            </p>
            <div>
                <iframe
                    width="1000"
                    height="562"
                    src="https://youtube.com/embed/yap7p7ZiIR0"
                ></iframe>
            </div>
        </div>
    );
}

export default LevelFour;

import React from 'react';

import edam from "../Assets/Images/eDAM-Sq.png"

const Banner = () => {
    return (
        <div className="w-[50%] bg-[#252525] hidden lg:flex flex-col justify-around items-center h-[100vh]">
            <img src={edam} alt="e-DAM" className="w-[60%]"/>
            <div id="logoSecInfo" className="flex flex-col justify-center items-center w-[90%] space-y-4">
                <p className="text-[#fff] text-2xl font-semibold text-center">
                e - Designing and Marketing
                </p>
                <p className="text-[#fff] text-lg font-medium text-center">
                Learn <span className='text-[#C85CFA]'>|</span> Grow{" "}
                <span className='text-[#C85CFA]'>|</span> Network
                </p>
            </div>
        </div>
    )
}

export default Banner;
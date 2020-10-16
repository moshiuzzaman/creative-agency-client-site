import React from 'react';
import './Works.css'
import WorksSlider from './WorksSlider';

const Works = () => {
    return (
        <div className="worksSection ">
            <div  align="center py-5" >
                <h2 className="text-white py-5"> Here are some of <span className="text-success">our works</span></h2>
                <WorksSlider />
            </div>
        </div>
    );
};

export default Works;
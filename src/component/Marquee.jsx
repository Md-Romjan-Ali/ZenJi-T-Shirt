import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueePage = () => {
    return (
        <div className='z-20'>
            <Marquee>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default MarqueePage;
import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <div className="relative h-screen overflow-hidden">


        <iframe
          className="absolute top-1/2 left-1/2 w-[177.78vh] h-[110vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/Xdz09cSPOWI?autoplay=1&mute=1&loop=1&playlist=Xdz09cSPOWI&controls=0&modestbranding=1&rel=0"
          title="Background video"
          allow="autoplay"
          frameBorder="0"
        />


        <div className="absolute inset-0 bg-black/30" />


        <div className="relative z-10 flex h-screen items-center justify-center text-white">
          <h1 className="text-5xl font-bold">
            Welcome to Our Store
          </h1>
        </div>

      </div>
        </div>
    );
};

export default HeroSection;
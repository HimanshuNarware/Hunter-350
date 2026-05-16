"use client";

import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";

export function CosmicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Subtle purple/pink glow effects */}
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(192,132,252,0.3) 0%, transparent 70%)",
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(244,114,182,0.25) 0%, transparent 70%)",
        }}
      />
      
      {/* Stars background layer */}
      <StarsBackground
        starDensity={0.0002}
        allStarsTwinkle={true}
        twinkleProbability={0.8}
        minTwinkleSpeed={0.5}
        maxTwinkleSpeed={1.5}
        className="opacity-70"
      />
      
      {/* Multiple shooting stars for more activity */}
      <ShootingStars
        minSpeed={15}
        maxSpeed={35}
        minDelay={800}
        maxDelay={3000}
        starColor="#c084fc"
        trailColor="#f472b6"
        starWidth={12}
        starHeight={2}
      />
      <ShootingStars
        minSpeed={10}
        maxSpeed={25}
        minDelay={1500}
        maxDelay={4500}
        starColor="#d8b4fe"
        trailColor="#fbcfe8"
        starWidth={8}
        starHeight={1}
      />
      <ShootingStars
        minSpeed={20}
        maxSpeed={40}
        minDelay={2000}
        maxDelay={5000}
        starColor="#f0abfc"
        trailColor="#a5b4fc"
        starWidth={15}
        starHeight={2}
      />
    </div>
  );
}

export default CosmicBackground;

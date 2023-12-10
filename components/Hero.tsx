"use client";

import Image from "next/image";
import logoImg from "../public/assets/logoCar.png";
import heroImg from "../public/assets/hero.png";
import { CustomButton } from "./";

const Hero = () => {

  const handleScroll = () =>  {

  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero-title">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="hero-subtitle">
          Streamline your car rental experience with our 
          effortless  booking proceess.
        </p>

        <CustomButton 
          title="Explore Cars"
          containerStyles="bg-red-700 text-white 
            rounded-full mt-10 py-3 px-6"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero-image-container">
        <Image
          src={heroImg}
          width={900}
          height={900}
          alt="Hero"
          className="object-contain"
        />
        <div className="hero-image-overlay" />
      </div>
    </div>
  );
};

export default Hero;

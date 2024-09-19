import Image from "next/image";
import React from "react";
import heroImage from "../../../assets/images/slider-1.png";
import subTitle from "../../../assets/images/subtitle.png";

const Hero = () => {
  return (
    <>
      <div className="flex items-center py-6 gap-6">
        <div>
          <Image src={subTitle} width={230} height={50} alt="header-image" />
          <h2 className="text-7xl font-semibold pb-4">
            The Online
            <br /> Grocery Store
          </h2>
          <button className="btn btn-outline btn-success">Shop Now</button>
        </div>
        <div>
          <Image src={heroImage} width={600} height={450} alt="header-image" />
        </div>
      </div>
    </>
  );
};

export default Hero;

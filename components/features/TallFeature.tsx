import Image from "next/image";
import React from "react";

interface Feature {
  title: string;
  description: string;
  image: string;
  alt:string
  titlebig?:string
}

function TallFeature({ title, description, image , alt , titlebig }: Feature) {
  return (
    <div className="relative w-[400px] flex flex-col cursor-pointer overflow-hidden imghover">
      <div className={`absolute top-0 bg-white w-full ${titlebig} h-24 flex flex-col gap-5 z-10`}>
        <h3>{title}</h3>
        <h1 className="text-2xl max-w-[330px] h-fit">{description}</h1>
      </div>

      <div className="overflow-hidden">
        <img
          className="w-full h-[600px] object-cover navlinks_transition"
          src={image}
          alt={alt}
        />
      </div>
    </div>
  );
}

export default TallFeature;

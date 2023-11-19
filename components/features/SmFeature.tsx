import React from "react";

interface Feature {
  title: string;
  description: string;
  image: string;
  alt: string;
}

function SmFeature({ title, description, image, alt }: Feature) {
  return (
    <div className="relative flex flex-col w-[500px] cursor-pointer imghover">
      <div className="bg-white w-full h-24 flex flex-col gap-5">
        <h3>{title}</h3>
        <h1 className="text-2xl">{description}</h1>
      </div>

      <div className="relative overflow-hidden">
        <img
          className="w-full h-[280px] object-cover navlinks_transition"
          src={image}
          alt={alt}
        />
      </div>
    </div>
  );
}

export default SmFeature;

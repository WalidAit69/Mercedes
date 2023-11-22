import TallFeature from "@/components/features/TallFeature";
import React from "react";
import SmFeature from "../features/SmFeature";

function Features() {
  return (
    <section className="my-44 flex justify-center xl:max-w-6xl max-w-5xl mx-auto">
      <div className="xl:grid xl:gap-y-40 xl:grid-cols-2 flex gap-16 flex-col w-full px-10">
        <div>
          <TallFeature
            title="Responsibility"
            description="Inclusion is unstoppable."
            image="./features/features1.avif"
            alt="A woman in a wheelchair poses in front a Mercedes-Benz"
          />
        </div>
        <div className="xl:mt-80 self-end">
          <SmFeature
            title="Future Mobility"
            description="Neon Dreams."
            image="./features/features2.avif"
            alt="A man walking in clouds"
          />
        </div>
        <div>
          <TallFeature
            title="Exclusive"
            description="Mercedes-Benz' new Sustainability Prize."
            image="./features/features3.avif"
            alt="Mercedes-Benz Prize"
            titlebig="h-32"
          />
        </div>
        <div className="xl:mt-40 self-end">
          <SmFeature
            title="Milestones"
            description="Defining Class since 1886."
            image="./features/features4.avif"
            alt="Retro students posing with a mercedes car"
          />
        </div>
        <div>
          <TallFeature
            title="Vehicles"
            description="The MANUFAKTUR - Icons of Unique."
            image="./features/features5.avif"
            alt="Mercedes-Benz G-class"
            titlebig="h-32"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;

import featuresBg from "./assets/features-bg.svg";

export default function Features() {
  return (
    <section className="bg-[#5C4EAE] relative">
      <ul className="flex gap-[60px] justify-center py-12">
        <li>
          <h4 className="text-white font-bold text-[42px] leading-[54px] tracking-[0px] text-center font-publicsans pb-[11px]">
            10K+
          </h4>
          <p className=" text-[#C5BFED] font-medium text-[14px] text-center  font-inter leading-[22px]">
            Satisfied Costumers
          </p>
          <p className=" text-[#C5BFED] font-medium text-[14px] text-center  font-inter leading-[22px]">
            All Great Over The World
          </p>
        </li>

        <div className="w-px h-[124px] bg-[#C5C5C5]" />

        <li>
          <h4 className="text-white font-bold text-[42px] leading-[54px] tracking-[0px] text-center font-publicsans pb-[11px]">
            4M
          </h4>
          <p className=" text-[#C5BFED] font-medium text-[14px] text-center  font-inter leading-[22px]">
            Healthy Dishes Sold
          </p>
          <p className=" text-[#C5BFED] font-medium text-[14px] text-center  font-inter leading-[22px]">
            Including Milk Shakes Smooth
          </p>
        </li>

        <div className="w-px h-[124px] bg-[#C5C5C5]" />

        <li>
          <h4 className="text-white font-bold text-[42px] leading-[54px] tracking-[0px] text-center font-publicsans pb-[11px]">
            99.99%
          </h4>
          <p className=" text-[#C5BFED] font-medium text-[14px] text-center  font-inter leading-[22px]">
            Reliable Customer Support
          </p>
          <p className=" text-[#C5BFED] font-medium text-[14px] text-center  font-inter leading-[22px]">
            We Provide Great Experiences
          </p>
        </li>
      </ul>

      <img src={featuresBg} alt="" className="absolute top-0 left-0 z-10" />
    </section>
  );
}

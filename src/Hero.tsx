import heroLines1 from "./assets/hero-lines-1.svg";
import heroLines2 from "./assets/hero-lines-2.svg";
import heroArrow from "./assets/hero-arrow.svg";

export default function Hero() {
  return (
    <section className="pt-[118px] flex justify-between">
      <div>
        <div className="flex gap-5 items-center opacity-20">
          <div className="h-px bg-[#201F1F] w-[54px]" />
          <span className="text-[#201F1F]  font-semibold text-[16px] tracking-[2px]">
            OVER 1000 USERS
          </span>
        </div>

        <h1 className="font-semibold text-[76px] tracking-[-3px] w-[567px] leading-[120%] text-left">
          Enjoy Foods All Over The <span className="text-[#5C4EAE]">World</span>
        </h1>
        <p className="text-lg text-[#676767] leading-[28px] w-[500px] text-left mt-[14px]">
          EatLy help you set saving goals, earn cash back offers, Go to
          disclaimer for more details and get paychecks up to two days early.
          Get a&nbsp;
          <a href="/bonus" className="text-[#6155AE] font-medium">
            $20 bonus.
          </a>
        </p>
        <div className="mt-[54px] flex gap-5">
          <a
            href="/start"
            className="bg-[#6C5FBC] text-white font-medium text-[16px] px-[30px] py-[18px] rounded-[12px]"
          >
            Get Started
          </a>
          <a
            href="/pro"
            className="border-[1.5px] border-[#6C5FBC] text-[#6C5FBC] font-medium text-[16px] px-[30px] py-[18px] rounded-[12px]"
          >
            Go Pro
          </a>
        </div>
      </div>

      <div className="w-[680px] h-[607px] relative grid">
        <img src="/hero-food.png" alt="" className="place-self-center" />
        <img
          src="/hero-graph.png"
          alt=""
          className="absolute bottom-[-18px] left-[12px]"
        />
        <img src={heroLines1} alt="" className="absolute top-0 right-0" />
        <img src={heroLines2} alt="" className="absolute bottom-0 left-0" />
        <img
          src={heroArrow}
          alt=""
          className="absolute top-[154px] right-[64px] -z-10"
        />
        <div className="absolute top-[31px] right-[39px]">
          <div className="bg-white min-w-[330px] h-[90px] shadow-xl shadow-black/15 rounded-2xl relative flex gap-[17px] px-[15px] py-[8px]">
            <img src="/hero-card-food.png" alt="" />
            <div className="flex gap-1 flex-col justify-center">
              <span className="font-semibold leading-[140%] text-[16px]">
                Chicken Hell
              </span>
              <span>On The Way</span>
              <span className="absolute bottom-[9px] right-[23px] text-[#ACADB9] text-[10px] font-medium">
                3:09 PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

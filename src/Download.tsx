import downloadArrow from "./assets/download-arrow.svg";
import downloadLines from "./assets/download-lines.svg";
import btnArrow from "./assets/btn-arrow.svg";

export default function Download() {
  return (
    <section className="grid grid-cols-2 py-[106px] max-w-[1280px] mx-auto">
      <div className="place-self-center relative">
        <img src="download-screen.png" alt="" />
        <img
          src={downloadLines}
          alt=""
          className="absolute -top-[16px] -right-[60px]"
        />
      </div>

      <div className="w-[544px] flex flex-col gap-[60px] justify-self-end self-center relative">
        <h2 className="capitalize text-[50px] leading-[58px] text-gray-900 font-bold">
          Premium <span className="text-[#5C4EAE]">quality</span> for your
          health
        </h2>
        <ul className="list-disc list-inside leading-[30px] gap-[25px] flex flex-col font-inter">
          <li>
            Premium quality food is made with ingredients that are packed with
            essential vitamins, minerals.
          </li>
          <li>
            These foods promote overall wellness by support healthy digestion
            and boosting immunity
          </li>
        </ul>

        <a
          href="/start"
          className="bg-[#6C5FBC] max-w-fit text-white font-medium text-[16px] px-[30px] py-[18px] rounded-[12px] flex items-center gap-[13px]"
        >
          Download
          <img src={btnArrow} alt="" />
        </a>

        <img
          src={downloadArrow}
          alt=""
          className="absolute left-[160px] bottom-[-48px]"
        />
      </div>
    </section>
  );
}

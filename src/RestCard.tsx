import ratingStar from "./assets/rating-star.svg";

export default function RestCard() {
  return (
    <div className="rounded-[30px] shadow-2xl overlay-hidden shadow-black/15 mb-[228px] border-b-[#CBCBCB] border-b">
      <img
        src="/the-chicken-king.png"
        alt=""
        className="w-full rounded-t-[30px]"
      />
      <div className="px-[34px] py-[10px]">
        <div className="py-[3px] px-[6px] bg-[#F7EDD0] rounded-[5px] text-[12px] text-[#DAA31A] max-w-fit">
          Pizza
        </div>
        <h4 className="text-[#323142] text-[26px] font-semibold leading-[42px]">
          The Chicken King
        </h4>
        <div className="flex gap-[3px]">
          <span className="font-[Manrope] text-[20px] text-[#8E97A6]">
            24min •
          </span>
          <img src={ratingStar} alt="" />
          <span className="font-[Manrope] text-[20px] text-[#8E97A6]">4.8</span>
        </div>
      </div>
    </div>
  );
}

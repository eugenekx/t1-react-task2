import RestCard from "./RestCard";

export default function TopRestaraunts() {
  return (
    <section className="max-w-[1280px] mx-auto   border-b-[#CBCBCB] border-b">
      <h4 className="text-[#323142] font-semibold text-[45px] leading-[25px] text-center mt-[104px] mb-[87px]">
        Our Top <span className="text-[#5C4EAE]">Lunch</span>
      </h4>
      <div className="grid grid-cols-3 gap-[25px]">
        <RestCard />
        <RestCard />
        <RestCard />
      </div>
    </section>
  );
}

export default function ControlPurchases() {
  return (
    <section className="max-w-[1280px] mx-auto pt-[130px] pb-[136px]   border-b-[#CBCBCB] border-b">
      <div className="grid grid-cols-2">
        <div className="max-w-[560px]">
          <h2 className="capitalize text-[50px] leading-[58px] text-gray-900 font-bold mb-[47px]">
            Control <span className="text-[#5C4EAE]">Purchases</span> Via
            Dashboard
          </h2>

          <div className="flex flex-col gap-[13px]">
            <div className="bg-white w-[330px] h-[90px] shadow-xl shadow-black/15 rounded-2xl relative flex gap-[17px] px-[15px] py-[8px]">
              <img src="/hero-card-food.png" alt="" />
              <div className="flex gap-1 flex-col justify-center">
                <span className="font-semibold leading-[140%] text-[16px]">
                  Chicken Hell
                </span>
                <span className="text-[10px]">On The Way</span>
                <span className="absolute bottom-[9px] right-[23px] text-[#ACADB9] text-[10px] font-medium">
                  3:09 PM
                </span>
              </div>
            </div>

            <div className="bg-white w-[330px] h-[90px] rounded-2xl relative flex gap-[17px] px-[15px] py-[8px]">
              <img src="/swe-dish.png" alt="" />
              <div className="flex gap-1 flex-col justify-center">
                <span className="font-semibold leading-[140%] text-[16px]">
                  Swe Dish
                </span>
                <span className="text-[10px]">Delivered</span>
                <span className="absolute bottom-[9px] right-[23px] text-[#ACADB9] text-[10px] font-medium">
                  Yesterday
                </span>
              </div>
            </div>

            <div className="bg-white w-[330px] h-[90px] rounded-2xl relative flex gap-[17px] px-[15px] py-[8px]">
              <img src="/fish-hell-veg.png" alt="" />
              <div className="flex gap-1 flex-col justify-center">
                <span className="font-semibold leading-[140%] text-[16px]">
                  Fish Hell Veg
                </span>
                <span className="text-[10px] text-[#FB471D]">Cancelled</span>
                <span className="absolute bottom-[9px] right-[23px] text-[#ACADB9] text-[10px] font-medium">
                  Yesterday
                </span>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/purchases.png"
          alt=""
          className="justify-self-end shadow-2xl shadow-black/15 rounded-[25px]"
        />
      </div>
    </section>
  );
}

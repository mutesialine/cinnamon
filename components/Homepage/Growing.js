import Button from "../Common/Button";
import Text from "../Common/Text";
export default function Growing() {
  let positions = [
    " Android Developer",
    "Android Developer",
    "Backend Developments Team",
  ];
  return (
    <div className="max-w-full h-full bg-fullblack bg-[url(/image/noise.png)] ">
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32 lg:flex  justify-between items-center ">
        <div className="space-y-8  pb-16 lg:pb-0 lg:w-[45%]">
          <h2 class="text-[40px] lg:text-[54px] text-white font-montBold  lg:leading-[72px] lg:mb-6">
            we re growing
          </h2>
          <p className="font-sans text-base text-[#CFCFCF] ">
            Jump on board with Cinnamon and get the privilege of working on
            challenging projects for leading global companies! Make the world a
            better, more connected place.
          </p>
          <Button text="See All Positions" />
        </div>
        <div className="flex flex-col gap-4 lg:gap-8 lg:col-start-8 lg:col-end-13">
          {positions.map((position, index) => (
            <div
              className="flex justify-between items-center  border-b border-[#2e2e2e]"
              key={index}
            >
              <p className="text-2xl py-5 pr-3 pl-1  text-[#f9f9f9] font-montSemibold leading-[2rem]">
                {position}
              </p>
              <img className="w-12 h-7" src="/image/arrowRightWhite.webp" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

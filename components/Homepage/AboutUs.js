import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";
import Button from "../Common/Button";
import Text from "../Common/Text";
export default function About(){
  let products = [
    "Product design",
    "Web development",
    "Mobile development",
    "Marketing",
    "Quality assurance",
    "Marketing",
    "Project management",
    "Sales",
    "Fluffy friends"
  ];
  return (
    <div className="max-w-full relative bg-[#f6f6f6] ">
      <div className=" max-w-6xl relative lg:py-[245px]  mx-auto py-24 px-6 space-y-6 ">
        <div className=" lg:w-[40%]">
          <h2 class="text-[40px] lg:text-[54px] font-montBold  lg:leading-[72px] lg:mb-6">
            Who we are
          </h2>
          <p className="font-sans text-base ">
            Meet our international teams made up of 86 innovators, branched into
            8 departments, that influence the market throughout 20 different
            countries
          </p>
        </div>

        <div className="lg:grid grid-cols-2 space-y-4  w-3/4 py-8  font-montBold text-[20px] text-[#222222] leading-9 hidden">
          {products.map((product, index) => (
              <p  key={index}>{product}</p>
           
          ))}
        </div>
        <img
          className="w-[280px] h-[444px]  block lg:hidden "
          src="/image/whoweare.webp"
          alt=""
        />
        <Button text="Read About us" />
        <img
          className=" absolute -right-16 top-64 w-[340px] h-[539px] hidden lg:block "
          src="/image/whoweare.webp"
          alt=""
        />
      </div>
    </div>
  );
}
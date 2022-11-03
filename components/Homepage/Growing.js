import Button from "../Common/Button";
import Text from "../Common/Text";
export default function  Growing(){
  return (
    <div className="max-w-full h-full bg-fullblack bg-[url(/image/noise.png)]">
      <div className="max-w-6xl mx-auto px-6 py-24 lg:flex">
        <div className="space-y-6">
          <Text
            variant="bigger"
            title="We 're growing"
            subtitle="Jump on board with Cinnamon and get the privilege of working on challenging projects for leading global companies! Make the world a better, more connected place."
          />
          <Button text="See All Positions" />
        </div>
        <div>
          <div className="flex justify-between items-center pt-16">
            <p className="text-2xl  text-white font-montBold leading-[2rem]">
              Android Developer
            </p>
            <img className="w-12 h-7" src="/image/arrowRightWhite.webp" />
          </div>
          <div className="w-full mx-auto h-[1px] bg-gray-800 mt-4 px-10"></div>
          <div className="flex justify-between items-center pt-8">
            <p className="text-2xl  text-white font-montBold leading-[2rem]">
              Android Developer
            </p>
            <img className="w-12 h-7" src="/image/arrowRightWhite.webp" />
          </div>
          <div className="w-full mx-auto h-[1px] bg-gray-800 mt-4 px-10"></div>
          <div className="flex justify-between items-center pt-8">
            <p className="text-2xl  text-white font-montBold leading-[2rem]">
              Backend Developments Team
            </p>
            <img className="w-12 h-7" src="/image/arrowRightWhite.webp" />
          </div>
          <div className="w-full mx-auto h-[1px] bg-gray-800 mt-4 px-10"></div>
        </div>
      </div>
    </div>
  );
}
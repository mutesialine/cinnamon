import Text from "../Common/Text";
import Navbar from "../Common/Navbar";

export default function Hero() {
  return (
    <div className="max-w-full  h-full  bg-fullblack bg-[url(/image/noise.png)] ">
      <div className=" max-w-6xl mx-auto text-primary pt-20">
        <div className="pt-0 lg:pt-[118px] pb-32   mb-28  px-6 mx-auto space-y-8   ">
          <Text
            variant="bigger"
            title="Results focused design & development agency."
            subtitle="Extend your team with our high performing specialists or hire us to shape your product from scratch. Either way, we’ll get your product off the ground and build a momentum for your success."
          />
        </div>
      </div>
    </div>
  );
}

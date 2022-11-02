import Text from "../Common/Text";
export default function Communication(){
  return (
    <div className="max-w-6xl mx-auto pt-20  pb-24 px-6 lg:grid grid-cols-2 items-center lg:justify-end">
      <Text
        variant="medium"
        title="They’re consistent, and the communication is good."
        subtitle="When I have a deadline, they would work extra hours on the weekend and after hours. Cinnamon gives the impression of being a smaller team that’s focused on customers."
      />
      <div className="  hidden lg:block">
        <img
          className="w-[200px] h-16"
          src="/image/pingLogo.webp"
          alt="pinglogo"
        />
      </div>
      <div className="pt-24 lg:flex lg:space-x-8  lg:col-span-2 ">
        <img className="w-16" src="/image/GarinProfile.webp" alt="profile" />

        <div>
          <p className="text-[20px] text-black font-montBold">Garin Toren,</p>
          <p className="text-base text-[#525252] font-sans ">CEO, ping</p>
        </div>
      </div>
      <div className="flex space-x-14 pt-12">
        <img
          className="w-12 h-7"
          src="/image/arrow-left.webp"
          alt="arrow left"
        />
        <img
          className="w-12 h-7 "
          src="/image/arrow-right.webp"
          alt="arrow right"
        />
      </div>
      <div className="flex space-x-3 items-center pt-12">
        <img
          className="w-2 h-3"
          src="/icons/arrowRight2.svg"
          alt="arrowright"
        />
        <p className="text-[#5135ff] text-base font-montBold border-b-2 border-[#5135ff]">
          VIEW CASE STUDY
        </p>
      </div>
    </div>
  );
  }
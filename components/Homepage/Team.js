import Button from "../Common/Button";
import Text from "../Common/Text";
export default function Team() {
  return (
    <div className=" relative max-w-full bg-[#f6f6f6] ">
      <div className=" max-w-6xl  lg:grid grid-cols-2 gap-8 lg:items-center mx-auto py-24 px-6">
        <p className=" text-[40px] w-1/4 lg:w-full leading-[56px] lg:text-[54px] font-montBold lg:leading-[72px]">
          Agile Team<br/>
          on demand
        </p>
        <img
          className="w-[275px] h-[197px] block lg:hidden"
          src="/image/team.webp"
          alt="team and demand"
        />
        <div className=" flex flex-col lg:w-1/2 gap-6 ">
          <Text
            variant="medium"
            subtitle="By hiring and managing talented people with skills specific to your project, we build you a team that's accomplished, agile and scalable in both directions."
          />
          <Button text="See How It Works" />
        </div>
      </div>
      <div className="hidden  absolute bottom-0 right-0 lg:block">
        <img
          className="w-[275px] h-[197px] "
          src="/image/team.webp"
          alt="team and demand"
        />
      </div>
    </div>
  );
}

import Button from "../Common/Button";
import Text from "../Common/Text";
export default function Team() {
  return (
    <div className="max-w-full bg-[#f6f6f6] ">
      <div className=" max-w-6xl  lg:flex lg:items-center justify-bettween mx-auto py-24 px-6">
        <Text variant="medium" title={"Agile Team \n and Demand"} />
        <img
          className="w-[275px] h-[197px] block lg:hidden"
          src="/image/team.webp"
          alt="team and demand"
        />
        <div className=" flex flex-col gap-6 ">
          <Text
            variant="medium"
            subtitle="By hiring and managing talented people with skills specific to your project, we build you a team that's accomplished, agile and scalable in both directions."
          />
          <Button text="See How It Works" />
        </div>
      </div>
      <div className="hidden lg:flex justify-end">
        <img
          className="w-[275px] h-[197px] "
          src="/image/team.webp"
          alt="team and demand"
        />
      </div>
    </div>
  );
}

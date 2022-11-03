import Button from "../Common/Button";
import Text from "../Common/Text";
export default function About(){
  return (
    <div className="max-w-full bg-[#f6f6f6] ">
      <div className=" max-w-6xl   mx-auto py-24 px-6 space-y-6">
        <Text
          variant="medium"
          subtitle="Meet our international teams made up of 86 innovators, branched into 8 departments, that influence the market throughout 20 different countries"
          title="Who we are"//must be 40px instead 32px
        />
        <img
          className="w-[280px] h-[444px] "
          src="/image/whoweare.webp"
          alt=""
        />
        <Button text="Read About us" />
        
      </div>
    </div>
  );
}
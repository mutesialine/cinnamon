import Text from "../Common/Text";
import Button from "../Common/Button";
export default function College(){
  return (
    <div className=" max-w-6xl mx-auto px-6 space-y-6 py-24 lg:flex  items-center ">
      <div>
        <img
          className="w-[300px]  object-coverh-[198px]"
          src="/image/cinn-college.webp"
          alt="college"
        />
      </div>
      <div className=" space-y-4 lg:w-1/4">
        <Text
          variant="medium"
          subtitle="Seize the unique opportunity to participate in a wide range of courses conducted by professionals with an impeccable reputation in the digital industry."
        />
        <Button text="See How It works" />
      </div>
    </div>
  );
}
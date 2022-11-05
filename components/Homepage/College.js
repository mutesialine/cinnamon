import Text from "../Common/Text";
import Button from "../Common/Button";
export default function College(){
  return (
    <section className=" relative px-6  py-32 overflow-hidden">
      <div className=" relative max-w-6xl mx-auto space-y-6 lg:flex lg:gap-44 items-center ">
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
      <div className="absolute right-0 max-w-139 max-h-100.5  -bottom-10  hidden lg:block ">
        <img
          className="w-[556px] h-[350]"
          src="/image/cinn-college-illustration.webp"
        />
      </div>
    </section>
  );
}
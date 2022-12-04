
import Button from "../Common/Button";
export default function Contact(){
  return (
    <div className="  relative max-w-full bg-[#f6f6f6]  overflow-hidden ">
      <div className=" relative max-w-6xl px-6 py-20 lg:py-40 mx-auto flex flex-col gap-10 items-center justify-center ">
        <div className="font-montBold text-[40px] lg:text-[54px] text-center leading-[56px] lg:leading-[72px]">
          <p className="hidden lg:block ">
            Have a project in mind?
            <br />
            Let's work together
          </p>
          <p className="block lg:hidden ">
            Let's work together
          </p>
        </div>

        <div>
          <Button text="Contact us" />
        </div>
      </div>
      <div className="absolute left-0  -bottom-5 ">
        <img
          className="w-[120px] h-[94px] lg:w-[428px] lg:h-[338px]"
          src="image/image.png"
        />
      </div>
    </div>
  );
}
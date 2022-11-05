import Link from "next/link";
import Button from "../Common/Button";
export default function Footer(){
  let linkList=['Home','Blog', 'Project', 'Services' ,'About Us', 'Careers','Blog']
  return (
    <div className="max-w-full  bg-fullblack bg-[url(/image/noise.png)] text-white  ">
      <div className="  max-w-6xl mx-auto px-6 pt-[90px] pb-[50px]  flex flex-col justify-between ">
        <div className="lg:flex  items-center pb-8 justify-between lg:border-b border-b-[#8f8f8f66] border-solid  ">
          <div className="flex flex-col ">
            <img
              className="w-40 h-5"
              src="	https://cinnamon.agency/_next/static/media/logo-white.97f0c2c8.svg"
              alt="logo"
            />
            <div className="block  pt-12 lg:hidden">
              <p className="text-2xl leading-8 font-montBold">
                All software,
                <br /> zero bullshit.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 mt-11 mb-16 text-base text-[#CFCFCF] leading-6 font-sans">
              <Link href="">Home</Link>
              <Link href="">Blog</Link>
              <Link href="">Project</Link>
              <Link href="">Services</Link>
              <Link href="">About us</Link>
              <Link href="">Crees</Link>
            </div>
            <div className="mt-[100px]  hidden lg:block ">
              <p>hello@cinnamon.agency</p>
            </div>
          </div>
          <div className="flex flex-col  lg:w-[60%]   justify-between">
            <div className="hidden lg:block">
              <p className=" text-[32px] font-montBold">
                All software, zero bullshit.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3  gap-6   mb-16">
              <div className="mt-[30px] mr-11 space-y-1">
                <h2 className="text-base font-montBold ">Zagreb</h2>
                <p className="text-[#CFCFCF] text-sm font-sans">
                  Slavonska avenija 6,{" "}
                </p>
                <p className="text-[#CFCFCF] text-sm  font-sans">
                  10000, Zagreb, Croatia
                </p>
                <p className="text-[#CFCFCF] text-sm  font-sans">
                  +385 99 347 3103
                </p>
              </div>
              <div className="mt-[30px] mr-11">
                <h2 className="text-base font-montBold">Zagreb</h2>
                <p className="text-[#CFCFCF] text-sm font-sans ">
                  Slavonska avenija 6,{" "}
                </p>
                <p className="text-[#CFCFCF] text-sm font-sans ">
                  10000, Zagreb, Croatia
                </p>
                <p className="text-[#CFCFCF] text-sm font-sans ">
                  +385 99 347 3103
                </p>
              </div>
              <div className="mt-[30px] mr-11">
                <h2 className="text-base font-montBold">Zagreb</h2>
                <p className="text-[#CFCFCF] text-sm font-sans ">
                  Slavonska avenija 6,{" "}
                </p>
                <p className="text-[#CFCFCF] text-sm  font-sans">
                  10000, Zagreb, Croatia
                </p>
                <p className="text-[#CFCFCF] text-sm font-sans">
                  +385 99 347 3103
                </p>
              </div>
            </div>

            <div class=" space-y-8  lg:flex justify-between mt-10 mb-10">
              <div class="flex flex-col lg:w-full">
                <p className="mb-6 font-montBold">Our newsletter</p>
                <input
                  type="text"
                  placeholder="Your email"
                  className="bg-transparent placeholder:text-base border-solid   text-[#CFCFCF] border-b border-[#CFCFCF]   pb-3 mb-6"
                />
                <Button text="subscribe" />
              </div>
              <div className="flex flex-col items-center pt-6 lg:pt-0  gap-6 lg:justify-between">
                <img
                  className="w-[200px]"
                  src="https://cinnamon.agency/_next/static/media/pangea-badge.7734fbc8.svg"
                />
                <img
                  className="w-[200px]"
                  src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclutch-badge.cc332fa4.png&w=640&q=100"
                />
              </div>
            </div>
          </div>
          <div className="block lg:hidden text-center pt-6 ">
            <p>hello@cinnamon.agency</p>
          </div>
        </div>
        <div className="  flex flex-col-reverse     lg:justify-between lg:pt-8  lg:pb-8">
          <div className=" pt-6 py-2 lg:pt-0  flex gap-24 lg:gap-4 tex-base  text-[#a1a1a1] font-sans">
            <p>© 2022 Cinnamon</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex justify-between lg:justify-start px-14 lg:px-0 gap-6 py-6 lg:py-0 border-y border-y-[#8f8f8f66] border-solid lg:border-none">
            <img src="/icons/linkedln.svg" alt="linkedin" />
            <img src="/icons/cinnamonbe.svg" alt="behance" />
            <img src="/icons/instagram.svg" alt="instagram" />
            <img src="/icons/facebook.svg" alt="facebook" />
            <img src="/icons/cinnamonrss.svg" alt="rss" />
          </div>
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  function handleScrollChange() {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollChange);
    return () => {
      window.removeEventListener("scroll", setScrolling);
    };
  }, []);

  return (
    <div
      className={`fixed w-full  z-50 top-0  ${
        scrolling ? "bg-white" : "bg-transparent"
      } `}
    >
      <div className="px-4 lg:px-6 py-6 max-w-6xl   mx-auto  flex justify-between items-center ">
        {scrolling ? (
          <img className="w-40 h-5" src="/image/logo-dark..svg" alt="logo" />
        ) : (
          <img
            className="w-40 h-5"
            src="	https://cinnamon.agency/_next/static/media/logo-white.97f0c2c8.svg"
            alt="logo"
          />
        )}

        <div
          className={` hidden text-base  items-center font-semibold  lg:flex gap-10  ${
            scrolling ? "text-black" : "text-white"
          }`}
        >
          <ul className="flex gap-10">
            <li>
              <Link href="">Product</Link>
            </li>
            <li>
              <Link href="">Services</Link>
            </li>
            <li>
              <Link href="">About us</Link>
            </li>
            <li>
              <Link href="">Carrers</Link>
            </li>
            <li>
              <Link href="">Blog</Link>
            </li>
          </ul>
          <img
            className="w-12 hidden lg:block "
            src="/icons/play.svg"
            alt="circle play"
          />

          <Button text="Contact us" />
        </div>
        {scrolling ? (
          <img
            src="	https://cinnamon.agency/_next/static/media/mobile-menu-icon-dark.d2469ff9.svg
          "
            alt="white icon"
          />
        ) : (
          <img
            className="w-8 h-8 block lg:hidden"
            src="https://cinnamon.agency/_next/static/media/mobile-menu-icon-light.0de793a8.svg"
            alt="menu icon"
          />
        )}
      </div>
    </div>
  );
}

import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="px-4 lg:px-6 py-6 z-99 sticky top-0 flex justify-between items-center">
      <img
        className="w-40 h-4"
        src="	https://cinnamon.agency/_next/static/media/logo-white.97f0c2c8.svg"
        alt="logo"
      />
      <div className=" hidden text-base  items-center font-semibold text-primary lg:flex gap-10 ">
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
      <img
        className="w-8 h-8  block lg:hidden"
        src="	https://cinnamon.agency/_next/static/media/mobile-menu-icon-light.0de793a8.svg"
        alt="menu icon"
      />
    </div>
  );
}

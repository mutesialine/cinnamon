import Services from "../components/Homepage/Services";
import Fiona from "../components/Homepage/Fiona";
import Hero from "../components/Homepage/Hero";
import Optimal from "../components/Homepage/Optimal";
import Ukulele from "../components/Homepage/Ukulele";
import Team from "../components/Homepage/Team";
import Communication from "../components/Homepage/Communication";
import AboutUs from "../components/Homepage/AboutUs";
import College from "../components/Homepage/College";
import Growing from "../components/Homepage/Growing";
import Navbar from "../components/Common/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Optimal/>
      <Fiona/>
      <Ukulele/>
      <Services/>
      <Team/>
      <Communication/>
      <AboutUs/>
      <College/>
      <Growing/>

    </>
  );
}

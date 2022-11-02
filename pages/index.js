import Services from "../components/Homepage/Services";
import Fiona from "../components/Homepage/Fiona";
import Hero from "../components/Homepage/Hero";
import Optimal from "../components/Homepage/Optimal";
import Ukulele from "../components/Homepage/Ukulele";
import Team from "../components/Homepage/Team";
import Communication from "../components/Homepage/Communication";

export default function Home() {
  return (
    <>
      <Hero />
      <Optimal/>
      <Fiona/>
      <Ukulele/>
      <Services/>
      <Team/>
      <Communication/>
    </>
  );
}

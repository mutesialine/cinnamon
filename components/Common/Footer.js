import Button from "./Button";
import Text from "./Text";
export default function Footer(){
  return (
    <div className="mx-auto flex flex-col justify-between lg:grid grid-cols-2 gap-6 pt-24 bg-fullblack px-6 xl:px-40">
        <Text variant="bigger" title="Our services" />
      <div className="flex flex-col lg:grid grid-cols-2  gap-16">
        <div className="flex flex-col space-y-6">
          <img className="w-12" src="/icons/icon1.webp" alt="" />
          <Text
            variant="Base"
            title="Product design"
            subtitle="Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes."
          />
        </div>
        <div className=" flex flex-col space-y-6">
          <img className="w-12" src="/icons/icon2.webp" alt="" />
          <Text
            variant="Base"
            title="Quality assurance"
            subtitle="By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."
          />
        </div>
        <div className="flex flex-col space-y-6">
          <img className="w-12" src="/icons/icon3.webp" alt="" />
          <Text
            variant="Base"
            title="Quality assurance"
            subtitle="By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."
          />
        </div>
        <div className="flex flex-col space-y-6">
          <img className="w-12" src="/icons/icon4.webp" alt="" />
          <Text
            variant="Base"
            title="Marketing & growth"
            subtitle="By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people."
          />
        </div>
      </div>
      <Button text="See Our Services"/>
    </div>
  );
}
import Button from "../Common/Button";
import Text from "../Common/Text";
export default function Services(){
  return (
    <div className="max-w-full h-full bg-fullblack bg-[url(/image/noise.png)]">
      <div className="max-w-6xl mx-auto flex flex-col lg:grid grid-cols-2 gap-4 lg:gap-0 pt-24 px-6 lg:px-40">
        <Text variant="bigger" title="Our services" />
        <div className="flex flex-col lg:grid grid-cols-2 gap-20  pb-24 w-full">
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
              title="Developments"
              subtitle="By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."
            />
          </div>
          <div className="flex flex-col space-y-6">
            <img className="w-12" src="/icons/icon3.webp" alt="" />
            <Text
              variant="Base"
              title="Quality assurance"
              subtitle="Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing."
            />
            <div className="hidden lg:block">
              <Button text=" See Our services" />
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <img className="w-12" src="/icons/icon4.webp" alt="" />
            <Text
              variant="Base"
              title="Marketing & growth"
              subtitle="By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people."
            />
            <div className="block lg:hidden">
              <Button text=" See Our services" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
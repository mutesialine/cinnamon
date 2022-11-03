import CardContainer from "../Common/CardContainer";
import Text from "../Common/Text";
export default function Fiona(){
  return (
    <div className="max-w-6xl mx-auto px-6 pt-20   lg:pt-20">
      <CardContainer
        color="bg-[#52247f]"
        pic="/image/fiona.webp"
        paragraphy1="PRODUCTION DESIGN"
        paragraphy2="WEB DEVELOPMENT"
      />
      <div className="pt-6 lg:w-3/5">
        <Text
          variant="medium"
          title={"Fiona: Engage & \n Decide"}
          subtitle="Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations."
        />
      </div>
    </div>
  );
}
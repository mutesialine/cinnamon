import CardContainer from "../Common/CardContainer";
import Text from "../Common/Text";
export default function Optimal(){
  return (
    <div className="max-w-6xl mx-auto px-6 lg:pt-20">
      <CardContainer
        color="bg-light-green"
        pic="/image/optimal.webp"
        paragraphy1="PRODUCTION DESIGN"
        paragraphy2="QUALITY ASSURANCE"
      />
      <div className="pt-6 lg:w-3/5">
        <Text
          variant="medium"
          title={"Corrily: Optimize prices \n to maximize revenue"}
          subtitle="Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign."
        />
      </div>
    </div>
  );
}
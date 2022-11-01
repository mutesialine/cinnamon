import CardContainer from "../Common/CardContainer";
import Text from "../Common/Text";
export default function Ukulele(){
  return (
    <div className="max-w-full mx-auto px-6 py-24  lg:pt-20">
      <CardContainer
        color="bg-[#ffcb49]"
        pic="/image/optimal.webp"
        paragraphy1="PRODUCTION DESIGN"
        paragraphy2="WEB DEVELOPMENT"
      />
      <div className="pt-6 lg:w-3/5">
        <Text
          variant="medium"
          title="Ukulele:The largest ukulele tabs archive"
          subtitle="Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website.Our services Product design"
        />
      </div>
    </div>
  );
}


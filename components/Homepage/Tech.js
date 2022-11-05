import CardBlog from "../Common/CardBlog";

export default function Tech(){
  
  return (
    <div className="max-w-6xl mx-auto py-24 lg:py-36 px-6">
     
        <h2 className="font-montBold text-[40px] leading-[56px] lg:leading:[72px] lg:text-[54px]">
          Stay in the loop
          <br className=" hidden lg:block" /> on tech topics
        </h2>
    
      <div className=" cardScroll flex gap-8 overflow-x-auto lg:overflow-hidden">
        <CardBlog
          pic="https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F4z4OPjERGBRoMzBhMFKHPE%2Fd29f2e92e90c78f6427c1eba8517b9ae%2FFreelance_VS._Agency_blog_illustration.png&w=1920&q=75"
          category="SALES"
          name="Matija Bermanec & Lorena Ujević"
          date="2022-10-3"
          min="6min"
          desc="Differences in Hiring an Agency vs. Freelancers 2.0"
        />
        <CardBlog
          pic="https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F3zWnPZ05ZNw8AmNrhgFfW%2Fd74e0c4a8f8a8a117bbb3094fc296284%2FFlutter_Template.png&w=1920&q=75"
          category="DEVELOPMENT"
          name="Samantha Holstead"
          date="2022-10-13"
          min="3min"
          desc="Cinnamon Flutter Template Overview"
        />
        <CardBlog
          pic="https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F24GZhGCgX2qB0dHVfXOpPt%2F91d8876c0bc4ae8790cc8e6d61c66192%2FTinder_blog.png&w=1920&q=75"
          category="DESIGN"
          name="Jan Marin"
          date="2022-10-09"
          min="10min"
          desc="How Tinder Swindled User Experience"
        />
      </div>
      <div className="flex gap-3 items-center pt-12 lg:pt-20">
        <img
          className="w-2 h-3"
          src="/icons/arrowRight2.svg"
          alt="arrowright"
        />
        <p className="text-[#5135ff] text-base font-montBold border-b-2 border-[#5135ff]">
          VIEW MORE BLOGS
        </p>
      </div>
    </div>
  );
    
}
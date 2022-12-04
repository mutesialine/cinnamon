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
          pic="/image/zagrebcity.webp"
          category="SALES"
          name="Matija Bermanec & Lorena Ujević"
          date="2022-10-3"
          min="6min"
          desc="Differences in Hiring an Agency vs. Freelancers 2.0"
        />
        <CardBlog
          pic="/image/new-yorkcity.webp"
          category="DEVELOPMENT"
          name="Samantha Holstead"
          date="2022-10-13"
          min="3min"
          desc="Cinnamon Flutter Template Overview"
        />
        <CardBlog
          pic="/image/zagrebcity.webp"
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
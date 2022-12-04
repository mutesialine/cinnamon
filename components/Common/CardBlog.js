import Link from "next/link";
export default function CardBlog({pic, category, name, date,min,desc}){
  return (
    <div className=" w-[250px] lg:w-[352px]">
      <div className="pt-20 space-y-4">
        <img src={pic} />
        <p className="font-montBold text-xs text-black">
          <Link className="hover:text-[#5135ff]  hover:underline" href="">
            {category}
          </Link>
        </p>
      </div>
      <div className=" grid grid-flow-col gap-3 text-base font-sans pt-4 text-[#525252]">
        <p className="truncate hidden lg:block">{name}</p>
        <div className="bg-yellow-400 w-[0.4rem] h-[0.4rem] my-auto rounded-full"></div>
        <p className="w-max">{date}</p>
        <div className="bg-yellow-400  w-[0.4rem] h-[0.4rem] my-auto rounded-full"></div>
        <p>{min}</p>
      </div>
      <h5 className=" text-xl lg:text-2xl  text-[#222222] font-montBold  mt-2   text-case-title">
        <Link className="hover:text-[#5135ff] " href="">
          {desc}
        </Link>
      </h5>
    </div>
  );
}
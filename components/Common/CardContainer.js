export default function CardContainer({color,paragraphy1, paragraphy2, paragraphy3,pic}){
  const subTitleStylesBold=" flex flex-col lg:flex gap-4 text-xs font-montBold text-[#666666] leading-3 pt-6";
  return (
    <>
      <div className={`${color} overflow-hidden  group`}>
        <img
          className="group-hover:scale-105 transition-all  duration-300"
          src={pic}
          alt="optimal image"
        />
      </div>
      <div className={subTitleStylesBold}>
        <p>{paragraphy1}</p>
        <p>{paragraphy2}</p>
        <p>{paragraphy3}</p>
      </div>
    </>
  );
}

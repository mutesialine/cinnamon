export default function CardContainer({color,paragraphy1, paragraphy2,pic}){
  const subTitleStylesBold="flex gap-4 text-xs font-montBold text-[#666666] leading-3 pt-6";
  return (
    <>
      <div className={`${color}  group`}>
        <img
          className="group-hover:scale-105 transition-all duration-300"src={pic} alt="optimal image"
        />
      </div>
      <div className={subTitleStylesBold}>
        <p>{paragraphy1}</p>
        <p>{paragraphy2}</p>
      </div>
    </>
  );
}

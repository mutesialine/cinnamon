export default function CardContainer({color,paragraphy1, paragraphy2,pic}){
  const subTitleStylesBold="flex gap-4 text-xs font-bold text-[#666666] leading-3 pt-4";
  return(
    <>
    <img className={color} src={pic} alt="optimal image"/>
    <div className={subTitleStylesBold}>
      <p>{paragraphy1}</p>
      <p>{paragraphy2}</p>
    </div>
    </> 
  );
}
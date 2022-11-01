export default function Text({ variant, title, subtitle }) {
  let titleStyles = "";
  let subTitleStyles = "";

  switch (variant) {
    case "bigger": {
      titleStyles ="leading-[58px]  font-bold text-[40px] text-white lg:text-[80px] lg:leading-[105px]";
      subTitleStyles = "text-twenty lg:w-3/5";
      break;
    }
    case "medium": {
      titleStyles = "leading-[44px]  text-[32px] font-bold text-black ";
      subTitleStyles = "text-[#525252]  text-lg leading-[26px]";
      break;
    }
    case "Base": {
      titleStyles = "text-[20px] text-white font-bold leading-[30px]";
      subTitleStyles = "text-base leading-[20px] text-[#CFCFCF]";
      break;
    }
  }
  return (
    <div className="flex flex-col gap-4 w-full ">
      <h2 className={titleStyles}>{title}</h2>
      <p className={subTitleStyles}>{subtitle}</p>
    </div>
  );
}

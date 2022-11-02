export default function Text({ variant, title, subtitle }) {
  let titleStyles = "";
  let subTitleStyles = "";

  switch (variant) {
    case "bigger": {
      titleStyles =
        "leading-[58px] font-normal font-montBold text-[40px] text-[#F6F6F6] lg:text-[80px] lg:leading-[105px]";
      subTitleStyles = "leading-[30px] font-[600] font-sans text-[18px] text-[#CFCFCF] lg:w-3/5";
      break;
    }
    case "medium": {
      titleStyles = "leading-[44px]  text-[32px] font-montBold text-[#222222] ";
      subTitleStyles = "text-[#525252]  text-base leading-[26px] font-sans";
      break;
    }
    case "Base": {
      titleStyles = "text-[20px] text-white font-montBold leading-[30px]";
      subTitleStyles = "text-base leading-[26px] text-[#CFCFCF] font-sans";
      break;
    }
  }
  return (
    <div className="flex flex-col gap-6  ">
      <h1 className={`${titleStyles} whitespace-pre-line`}>{title}</h1>
      <p className={subTitleStyles}>{subtitle}</p>
    </div>
  );
}

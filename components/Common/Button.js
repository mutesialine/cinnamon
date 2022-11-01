export default function Button({text}){
  return (
    <div className=" hidden lg:block bg-blue-700 text-white px-10 py-3 cursor-pointer hover:text-blue-600 hover:bg-white border-2  hover:border-2 border-blue-700 ">{text}</div>
  );
}
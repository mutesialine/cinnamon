export default function Button({ text }) {
  return (
    <button className="self-start bg-[#5135ff] text-white px-8 text-center py-2.5  cursor-pointer hover:text-[#5135ff] hover:bg-white border-2  hover:border-2 border-blue-700 inline">
      {text}
    </button>
  );
}

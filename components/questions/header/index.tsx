import { HiMagnifyingGlass } from "react-icons/hi2";

export default function QuestionsHeader() {
  return (
    <>
      <div className="flex items-center w-1/3">
        <input
          type="text"
          className="bg-gray py-2 rounded-lg px-4 w-full focus:outline-none"
          placeholder="جستجو کنید.."
        />
        <HiMagnifyingGlass className="text-2xl -mr-8 text-gray-700" />
      </div>
    </>
  );
}

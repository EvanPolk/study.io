import { ChangeEvent, useState } from "react";
import instance from "../axiosInstance.ts";

interface Props {
  fetchFlashcardSets: () => void;
}

function AddFlashcardSet({ fetchFlashcardSets }: Props) {
  const [input, setInput] = useState("");

  const handleAdd = async () => {
    try {
      await instance.post("/flashcardSets", {
        setName: input,
      });
      fetchFlashcardSets();
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="flex items-center justify-center aspect-[5/3] w-72 bg-zinc-600 rounded-xl m-4 shadow-lg">
      <div className="flex flex-col items-center justify-evenly w-[100%] h-[100%]">
        <div>
          <button
            className="rounded-l bg-zinc-700 transition-colors duration-300 ease-in-out hover:text-amber-400 text-white p-2"
            onClick={() => handleAdd()}
          >
            Add
          </button>
          <input
            key="AddFlashcard"
            type="text"
            className="rounded-r p-2 outline-none"
            placeholder="Set name"
            onChange={handleChange}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default AddFlashcardSet;

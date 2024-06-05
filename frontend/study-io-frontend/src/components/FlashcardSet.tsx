import "./FlashcardSet.css";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import FaSearch from "./Icons/FaSearch";
import FaPen from "./Icons/FaPen";
import FaTrash from "./Icons/FaTrash";
import FaCheck from "./Icons/FaCheck";

interface Props {
  flashcardSet: {
    id: string;
    setName: string;
    flashcards: Array<{
      id: string;
      front: string;
      back: string;
    }>;
  };
  onDelete: (deletedId: string) => void;
}

function FlashcardSet({ flashcardSet, onDelete }: Props) {
  const { id, setName, flashcards } = flashcardSet;
  const [nameChange, toggleNameChange] = useState(false);
  const [nameInput, setNameInput] = useState(setName);

  const handleDelete = async (id: string): Promise<void> => {
    try {
      await axios.delete("http://localhost:8080/api/v1/flashcardSets/" + id);
      onDelete(id);
    } catch (err) {
      throw err;
    }
  };

  const handleChangeName = async () => {
    if (nameChange) {
      flashcardSet.setName = nameInput;
      await axios.put(
        "http://localhost:8080/api/v1/flashcardSets/" +
          id +
          "?setName=" +
          nameInput
      );
      toggleNameChange(false);
    } else {
      toggleNameChange(true);
    }
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  };

  return (
    <div
      className="flex items-center justify-center aspect-[5/3] w-72 bg-zinc-600 text-white rounded-xl m-4 shadow-lg"
      id={id}
    >
      <div className="flex flex-col justify-around items-center w-[100%] h-[100%]">
        {nameChange ? (
          <div>
            <input
              key="setInputs"
              value={nameInput}
              type="text"
              className="outline-none text-black"
              placeholder={setName}
              onChange={handleChangeInput}
            ></input>
          </div>
        ) : (
          <h4 className="text-amber-400">{setName}</h4>
        )}
        {nameChange ? <></> : <p className="">{flashcards.length} cards</p>}
        <div className="flex flex-row w-[90%] p-2 m-2 rounded justify-around bg-zinc-500">
          {nameChange ? (
            <></>
          ) : (
            <>
              <a href={"http://localhost:5173/flashcardSet/" + id}>
                <FaSearch />
              </a>
              <i onClick={() => handleDelete(id)}>
                <FaTrash />
              </i>
            </>
          )}
          {nameChange ? (
            <i onClick={handleChangeName}>
              <FaCheck />
            </i>
          ) : (
            <i onClick={handleChangeName}>
              <FaPen />
            </i>
          )}
        </div>
      </div>
    </div>
  );
}

export default FlashcardSet;

import { ChangeEvent, useState } from "react";
import "./Flashcard.css";
import instance from "../axiosInstance";
import BiLeftArrow from "./Icons/BiLeftArrow";
import BiRightArrow from "./Icons/BiRightArrow";
import FaPen from "./Icons/FaPen";
import FaTrash from "./Icons/FaTrash";
import FaCheck from "./Icons/FaCheck";
import FaPlus from "./Icons/FaPlus";

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
  fetchFlashcardSet: () => Promise<void>;
}

// TODO: PLEASE FIX WHEN EMPTY

function Flashcard({ flashcardSet, fetchFlashcardSet }: Props) {
  const [counter, setCounter] = useState(0);
  const [edit, toggleEdit] = useState(false);
  const [add, toggleAdd] = useState(false);
  const [flip, toggleFlip] = useState(true);
  const [frontInput, setFrontInput] = useState("");
  const [backInput, setBackInput] = useState("");

  const handleDelete = async (flashcardId: string) => {
    await instance.delete(
      "/flashcardSets/" + flashcardSet.id + "/" + flashcardId
    );
    await fetchFlashcardSet();
    setCounter(Math.max(counter - 1, 0));
  };

  const handleEdit = async () => {
    if (edit) {
      flashcardSet.flashcards[counter].front = frontInput;
      flashcardSet.flashcards[counter].back = backInput;
      await instance.put(
        "/flashcards/" +
        flashcardSet.flashcards[counter].id +
        "?front=" +
        frontInput +
        "&back=" +
        backInput
      );
      toggleEdit(false);
    } else {
      toggleEdit(true);
    }
  };

  const handleAdd = async () => {
    if (add || flashcardSet.flashcards.length === 0) {
      try {
        await instance.post("/flashcardSets/" + flashcardSet.id, {
          front: frontInput,
          back: backInput,
        });
        fetchFlashcardSet();
      } catch (err) {
        throw err;
      }
      toggleAdd(false);
    } else {
      toggleAdd(true);
    }
  };

  const handleChangeFront = (event: ChangeEvent<HTMLInputElement>) => {
    setFrontInput(event.target.value);
  };

  const handleChangeBack = (event: ChangeEvent<HTMLInputElement>) => {
    setBackInput(event.target.value);
  };

  const handleLeftButton = () => {
    if (counter <= 0) {
      setCounter(flashcardSet.flashcards.length - 1);
    } else {
      setCounter((counter - 1) % flashcardSet.flashcards.length);
    }
    toggleFlip(true);
  };

  const handleRightButton = () => {
    setCounter((counter + 1) % flashcardSet.flashcards.length);
    toggleFlip(true);
  };

  const handleFlip = (event: any) => {
    if (flip && !add && !edit && event.target === event.currentTarget) {
      toggleFlip(false);
    } else if (!add && !edit && event.target === event.currentTarget) {
      toggleFlip(true);
    }
  };

  return (
    <div className="mx-auto my-auto">
      <div className="relative aspect-[5/3] h-72 mx-auto transition-transform [transform-style:perserve-3d]">
        <div
          className="absolute h-full w-full flex flex-col items-center justify-around bg-zinc-600 text-white rounded-xl shadow-lg transition-transform ease-in-out [backface-visibility:hidden]"
          onClick={handleFlip}
        >
          <div className="flex flex-col items-center justify-center">
            {edit || add || flashcardSet.flashcards.length === 0 ? (
              <>
                <input
                  className="p-2 m-2 outline-none rounded text-black"
                  type="text"
                  placeholder={
                    edit || add || flashcardSet.flashcards.length !== 0
                      ? flashcardSet.flashcards[counter].front
                      : ""
                  }
                  onChange={handleChangeFront}
                ></input>
                <input
                  className="p-2 m-2 outline-none rounded text-black"
                  type="text"
                  placeholder={
                    flashcardSet.flashcards.length !== 0
                      ? flashcardSet.flashcards[counter].back
                      : ""
                  }
                  onChange={handleChangeBack}
                ></input>
              </>
            ) : (
              <h1 className="font-semibold text-xl">
                {flashcardSet.flashcards[counter].front}
              </h1>
            )}
          </div>
          <div className="flex flex-col justify-center items-center">
            {edit ? (
              <button className="p-2 bg-zinc-500 rounded" onClick={handleEdit}>
                <FaCheck />
              </button>
            ) : add ? (
              <button className="p-2 bg-zinc-500 rounded" onClick={handleAdd}>
                <FaCheck />
              </button>
            ) : flashcardSet.flashcards.length === 0 ? (
              <button className="p-2 bg-zinc-500 rounded" onClick={handleAdd}>
                <FaCheck />
              </button>
            ) : (
              <div className="bg-zinc-500 rounded">
                <button className="p-2" onClick={handleAdd}>
                  <FaPlus />
                </button>
                <button className="p-2" onClick={handleEdit}>
                  <FaPen />
                </button>
                <button
                  className="p-2"
                  onClick={() =>
                    handleDelete(flashcardSet.flashcards[counter].id)
                  }
                >
                  <FaTrash />
                </button>
              </div>
            )}
            <p>
              {flashcardSet.flashcards.length !== 0 ? counter + 1 : 0}/
              {flashcardSet.flashcards.length}
            </p>
          </div>
        </div>
        <div
          className={
            flip
              ? "absolute h-full w-full flex items-center justify-around bg-zinc-600 text-white rounded-xl shadow-lg flex-col transition-transform ease-in-out [backface-visibility:hidden] is-flipped"
              : "absolute h-full w-full flex items-center justify-around bg-zinc-600 text-white rounded-xl shadow-lg flex-col transition-transform ease-in-out [backface-visibility:hidden]"
          }
          onClick={handleFlip}
        >
          <div className="flex flex-col items-center justify-center">
            {edit || add || flashcardSet.flashcards.length === 0 ? (
              <>
                <input
                  className="p-2 m-2 outline-none rounded text-black"
                  type="text"
                  placeholder={
                    edit || add || flashcardSet.flashcards.length !== 0
                      ? flashcardSet.flashcards[counter].front
                      : ""
                  }
                  onChange={handleChangeFront}
                ></input>
                <input
                  className="p-2 m-2 outline-none rounded text-black"
                  type="text"
                  placeholder={
                    flashcardSet.flashcards.length !== 0
                      ? flashcardSet.flashcards[counter].back
                      : ""
                  }
                  onChange={handleChangeBack}
                ></input>
              </>
            ) : (
              <h1 className="font-semibold text-xl">
                {flashcardSet.flashcards[counter].back}
              </h1>
            )}
          </div>
          <div className="flex flex-col justify-center items-center">
            {edit ? (
              <button className="p-2 bg-zinc-500 rounded" onClick={handleEdit}>
                <FaCheck />
              </button>
            ) : add ? (
              <button className="p-2 bg-zinc-500 rounded" onClick={handleAdd}>
                <FaCheck />
              </button>
            ) : flashcardSet.flashcards.length === 0 ? (
              <button className="p-2 bg-zinc-500 rounded" onClick={handleAdd}>
                <FaCheck />
              </button>
            ) : (
              <div className="bg-zinc-500 rounded">
                <button className="p-2" onClick={handleAdd}>
                  <FaPlus />
                </button>
                <button className="p-2" onClick={handleEdit}>
                  <FaPen />
                </button>
                <button
                  className="p-2"
                  onClick={() =>
                    handleDelete(flashcardSet.flashcards[counter].id)
                  }
                >
                  <FaTrash />
                </button>
              </div>
            )}
            <p>
              {flashcardSet.flashcards.length !== 0 ? counter + 1 : 0}/
              {flashcardSet.flashcards.length}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto">
        <button
          className="bg-zinc-600 hover:bg-zinc-500 p-4 m-8 rounded-xl shadow flex items-center justify-center"
          onClick={handleLeftButton}
        >
          <BiLeftArrow />
        </button>
        <button
          className="bg-zinc-600 hover:bg-zinc-500 p-4 m-8 rounded-xl shadow flex items-center justify-center"
          onClick={handleRightButton}
        >
          <BiRightArrow />
        </button>
      </div>
    </div>
  );
}

export default Flashcard;

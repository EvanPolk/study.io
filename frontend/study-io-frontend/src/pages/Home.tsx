import { useState, useEffect } from "react";
import instance from "../axiosInstance";

import FlashcardSet from "../components/FlashcardSet";
import AddFlashcardSet from "../components/AddFlashcardSet";

interface FlashcardSet {
  id: string;
  setName: string;
  flashcards: Array<{
    id: string;
    front: string;
    back: string;
  }>;
}

function Home() {
  const [flashcardSets, setFlashcardSets] = useState([]);
  useEffect(() => {
    fetchFlashcardSets();
  }, []);

  const fetchFlashcardSets = () => {
    instance
      .get("/flashcardSets")
      .then((res: any) => {
        setFlashcardSets(res.data);
      })
      .catch((err: any) => {
        fetchFlashcardSets()
        console.error(err)
      });
  };

  const onDelete = (deletedId: string) => {
    const previousSet = [...flashcardSets];
    setFlashcardSets(
      previousSet.filter((set: FlashcardSet) => set.id !== deletedId)
    );
  };

  return (
    flashcardSets.length == 0 ?
      <div className="flex flex-wrap flex-row">
        <div className="p-2 m-2 rounded bg-zinc-600 text-white">
          <h1>This site is partially hosted on Azure. Please be patient as the Backend spins up!</h1>
        </div>
      </div> :
      <div className="flex flex-wrap flex-row">
        <AddFlashcardSet fetchFlashcardSets={fetchFlashcardSets} />
        {flashcardSets.map((flashcardSet: any, idx: number) => (
          <FlashcardSet
            key={idx}
            flashcardSet={flashcardSet}
            onDelete={onDelete}
          />
        ))}
      </div>
  );
}

export default Home;

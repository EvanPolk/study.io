import { useEffect, useState } from "react";
import instance from "../axiosInstance";
import { useParams } from "react-router-dom";
import Flashcard from "../components/Flashcard";

interface FlashcardSet {
  id: string;
  setName: string;
  flashcards: Array<{
    id: string;
    front: string;
    back: string;
  }>;
}

function ExploreSet() {
  const [flashcardSet, setFlashcardSet] = useState<FlashcardSet | null>(null);
  const { setId } = useParams();

  useEffect(() => {
    fetchFlashcardSet();
  }, []);

  const fetchFlashcardSet = async () => {
    await instance
      .get("/flashcardSets/" + setId)
      .then((res: any) => {
        setFlashcardSet(res.data);
      })
      .catch((err: any) => {
        throw err;
      });
  };

  return (
    <>
      {flashcardSet !== null ? (
        <Flashcard
          flashcardSet={flashcardSet}
          fetchFlashcardSet={fetchFlashcardSet}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default ExploreSet;

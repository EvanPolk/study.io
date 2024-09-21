package dev.evanpolk.study.io.flashcardSet;

import dev.evanpolk.study.io.flashcard.Flashcard;
import dev.evanpolk.study.io.flashcard.FlashcardRepository;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class FlashcardSetService {
    private final FlashcardSetRepository flashcardSetRepository;
    private final FlashcardRepository flashcardRepository;

    public FlashcardSetService(FlashcardRepository flashcardRepository, FlashcardSetRepository flashcardSetRepository) {
        this.flashcardRepository = flashcardRepository;
        this.flashcardSetRepository = flashcardSetRepository;
    }

    public List<FlashcardSet> getAllFlashcardSets() {
        return flashcardSetRepository.findAll();
    }

    public FlashcardSet findFlashcardSetById(String id) {
        return flashcardSetRepository.findById(id).orElse(null);
    }

    public void addNewFlashcardSet(FlashcardSet flashcardSet) {
        flashcardSet.setId(null);
        flashcardSetRepository.save(flashcardSet);
    }

    public void addNewFlashcardToFlashcardSet(String flashcardSetId, Flashcard flashcard) {
        FlashcardSet flashcardSet = flashcardSetRepository.findById(flashcardSetId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "FlashcardSet with id: " + flashcardSetId + ", does not exist"
                ));
        flashcard.setId(null);
        flashcardRepository.save(flashcard);
        flashcardSet.addFlashcard(flashcard);
        flashcardSetRepository.save(flashcardSet);
    }

    public void deleteFlashcardSetByID(String flashcardSetId) {
        FlashcardSet flashcardSet = flashcardSetRepository.findById(flashcardSetId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "FlashcardSet with id: " + flashcardSetId + ", does not exist"
                ));
        for (Flashcard flashcard : flashcardSet.getFlashcards()) {
            flashcardRepository.delete(flashcard);
        }
        flashcardSetRepository.delete(flashcardSet);
    }

    public void deleteFlashcardInFlashcardSet(String flashcardSetId, String flashcardId) {
        FlashcardSet flashcardSet = flashcardSetRepository.findById(flashcardSetId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "FlashcardSet with id: " + flashcardSetId + ", does not exist"
                ));
        Flashcard flashcard = flashcardRepository.findById(flashcardId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "Flashcard with id: " + flashcardId + ", does not exist"
                ));
        flashcardSet.removeFlashcard(flashcard);
        flashcardRepository.delete(flashcard);
        flashcardSetRepository.save(flashcardSet);
    }

    public void updateFlashcardSet(String flashcardSetId, String setName) {
        FlashcardSet flashcardSet = flashcardSetRepository.findById(flashcardSetId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "FlashcardSet with id: " + flashcardSetId + ", does not exist"
                ));
        if (setName != null &&
                !setName.isEmpty() &&
                !flashcardSet.getSetName().equals(setName)) {
            flashcardSet.setSetName(setName);
        }
        flashcardSetRepository.save(flashcardSet);
    }
}

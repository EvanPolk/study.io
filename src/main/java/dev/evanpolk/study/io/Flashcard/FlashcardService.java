package dev.evanpolk.study.io.Flashcard;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlashcardService {
    private FlashcardRepository flashcardRepository;

    public FlashcardService(FlashcardRepository flashcardRepository) {
        this.flashcardRepository = flashcardRepository;
    }

    public List<Flashcard> getAllFlashcards() {
        return flashcardRepository.findAll();
    }

    public Flashcard getFlashcardById(String id) {
        return flashcardRepository.findFlashcardById(id).orElse(null);
    }

    public void addNewFlashcard(Flashcard flashcard) {
        flashcardRepository.save(flashcard);
    }

    public void deleteFlashcardById(String id) {
        flashcardRepository.deleteById(id);
    }

    public void updateFlashcardById(String id, String front, String back) {
        Flashcard flashcard = flashcardRepository.findFlashcardById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "Flashcard with id: " + id + ", does not exist"));

        if (front != null && !front.isEmpty() && !front.equals(flashcard.getFront())) {
            flashcard.setFront(front);
        }

        if (back != null && !back.isEmpty() && !back.equals(flashcard.getBack())) {
            flashcard.setBack(back);
        }
    }
}

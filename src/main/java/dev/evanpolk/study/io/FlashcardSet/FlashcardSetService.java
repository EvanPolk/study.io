package dev.evanpolk.study.io.Flashcard;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FlashcardSetService {
    private final FlashcardSetRepository flashcardSetRepository;

    public FlashcardSetService(FlashcardSetRepository flashcardSetRepository) {
        this.flashcardSetRepository = flashcardSetRepository;
    }

    public List<FlashcardSet> getAllFlashcardSets() {
        return flashcardSetRepository.findAll();
    }
}

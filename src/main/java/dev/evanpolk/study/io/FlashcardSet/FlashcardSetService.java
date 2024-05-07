package dev.evanpolk.study.io.FlashcardSet;

import dev.evanpolk.study.io.Flashcard.FlashcardRepository;
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
}

package dev.evanpolk.study.io.FlashcardSet;

import dev.evanpolk.study.io.Flashcard.Flashcard;
import dev.evanpolk.study.io.Flashcard.FlashcardRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class FlashcardSetConfig {
    @Bean
    CommandLineRunner commandLineRunner(FlashcardRepository flashcardRepository, FlashcardSetRepository flashcardSetRepository) {
        return args -> {
            FlashcardSet set1 = new FlashcardSet("Example");
            FlashcardSet set2 = new FlashcardSet("Example 2");

            Flashcard flashcard1 = new Flashcard("Front1", "Back1");
            Flashcard flashcard2 = new Flashcard("Front2", "Back2");
            Flashcard flashcard3 = new Flashcard("Front3", "Back3");

            flashcardRepository.saveAll(
                    List.of(
                        flashcard1, flashcard2, flashcard3
                    )
            );

            set1.addFlashcard(flashcard1);
            set1.addFlashcard(flashcard2);
            set1.addFlashcard(flashcard3);

            set2.addFlashcard(flashcard1);
            set2.addFlashcard(flashcard2);
            set2.addFlashcard(flashcard3);

            flashcardSetRepository.saveAll(List.of(
                    set1,
                    set2
            ));
        };
    }
}

package dev.evanpolk.study.io.Config;

import dev.evanpolk.study.io.Flashcard.Flashcard;
import dev.evanpolk.study.io.Flashcard.FlashcardRepository;
import dev.evanpolk.study.io.FlashcardSet.FlashcardSet;
import dev.evanpolk.study.io.FlashcardSet.FlashcardSetRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class FlashcardConfig {
    @Bean
    CommandLineRunner commandLineRunner(FlashcardRepository flashcardRepository, FlashcardSetRepository flashcardSetRepository) {
        return args -> {
            FlashcardSet set1 = new FlashcardSet("Geography");
            FlashcardSet set2 = new FlashcardSet("History");

            Flashcard flashcard1 = new Flashcard("What Latin American country is famously home to an ocean spanning canal", "Panama's Panama Canal");
            Flashcard flashcard2 = new Flashcard("What Latin American country is home to the world's largest rainforest", "Brazil's Amazon Rainforest");
            Flashcard flashcard3 = new Flashcard("What African country is home to the worlds longest river", "Egypt's Nile River");

            Flashcard flashcard4 = new Flashcard("Who was Ancient Egypt's first pharaoh", "Hatshepsut");
            Flashcard flashcard5 = new Flashcard("What document written by Thomas Jefferson declared the American Colonies Independent", "The Declaration of Independence");
            Flashcard flashcard6 = new Flashcard("What was the first Latin American country to gain independence", "Haiti");

            flashcardRepository.saveAll(
                    List.of(
                        flashcard1, flashcard2, flashcard3, flashcard4, flashcard5, flashcard6
                    )
            );

            set1.addFlashcard(flashcard1);
            set1.addFlashcard(flashcard2);
            set1.addFlashcard(flashcard3);

            set2.addFlashcard(flashcard4);
            set2.addFlashcard(flashcard5);
            set2.addFlashcard(flashcard6);

            flashcardSetRepository.saveAll(List.of(
                    set1,
                    set2
            ));
        };
    }
}

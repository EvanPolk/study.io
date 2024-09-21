package dev.evanpolk.study.io.flashcardSet;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FlashcardSetRepository extends MongoRepository<FlashcardSet, String> {
    Optional<FlashcardSet> findById(String id);
}

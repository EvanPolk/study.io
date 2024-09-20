package dev.evanpolk.study.io.Flashcard;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FlashcardRepository extends MongoRepository<Flashcard, String> {
    Optional<Flashcard> findById(String id);
}

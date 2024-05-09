FROM openjdk:17-jdk
COPY ./target/study.io-0.0.1-SNAPSHOT.jar .
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "study.io-0.0.1-SNAPSHOT.jar"]
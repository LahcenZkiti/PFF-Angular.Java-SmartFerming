FROM openjdk:8-jdk-alpine
EXPOSE 8080
ARG JAR_FILE=target/docker-diagnoplant.jar
ADD ${JAR_FILE} docker-diagnoplant.jar
ENTRYPOINT [ "java", "-jar", "docker-diagnoplant.jar"]
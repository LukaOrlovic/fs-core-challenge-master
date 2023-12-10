FROM amazoncorretto:17
EXPOSE 8888
ARG JAR_FILE=target/backend-service-0.0.1.jar
ADD ${JAR_FILE} app.jar
EXPOSE 8888
ENTRYPOINT ["java","-jar","app.jar"]
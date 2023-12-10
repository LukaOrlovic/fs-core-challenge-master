# The challenge (Fullstack Engineer)

This is a chat application built using Java and React.js.
Frontend and backend are connected using WebSockets because of the bidirectional way of working and because they eliminate the need for frequent requests and responses.
For the database, MongoDB has been chosen because of the flexible and schema-less document model. Also, it is designed to scale horizontally by distributing data across multiple servers. 

Things not addressed in the current version:

1. No tests have been written
2. User interface could be more responsive, and tested on more browsers
3. Timezone issue is not addressed (e.g. date and time saved are server's, and could potentially be wrong for a client in a different timezone)
4. Health check has not been implemented and could cause issues
5. Handling errors is not done
6. Login (authentication/authorization) is not implemented
7. Saving messages could be done in a separate thread or caching messages (point 8) and then saving to the database
8. Caching messages in Redis could be a potential for future improvements
9. Sending media is not available and could be potentially requested by clients (AWS S3 could be used, especially due to its speed and being able to upload directly using the signed URL and also due to the announcement of Amazon S3 Express One Zone)
10. This is a chat application with only one chatroom, users could request 1:1 chats, which is currently not developed


Starting the application:

```
1. Download the project
2. Have Docker running locally
3. Open your CLI and navigate to the root of the downloaded project
4. Run command: docker-compose build
5. After it has finished run: docker-compose up
6. Open http://localhost:3000/ and login

```

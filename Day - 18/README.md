## IT2234_Practicals

Web Services and Server Technologies - Practicals

## Project Management API

Overview

This is a RESTful API for managing a project management system, built using Node.js, Express,
MongoDB, and Mongoose. The system consists of three models:

- User (manages multiple projects)
- Project (contains multiple tasks)
- Task (assigned to a user)
  
The API provides endpoints for retrieving users, projects, tasks, as well as querying specific project details like tasks, managers, and assigned users.

### 1. Create an endpoint to retrieve all data from the User, Project, and Task collections.
### Implement this task with code reusability.

services ---> getall.js

![SS1](https://github.com/user-attachments/assets/ca6b420f-cb8b-4448-8e33-431bfe4d2c87)


add to all routes like below

![SS2](https://github.com/user-attachments/assets/37768ee2-1880-4bb0-b210-604085f89f0c)


OUTPUTS :

![SS3](https://github.com/user-attachments/assets/cc2d326a-c0b8-4f1e-9d86-dacadbdab6de)

![SS4](https://github.com/user-attachments/assets/572f9c37-deae-401d-b652-b7d482dd1819)

![SS5](https://github.com/user-attachments/assets/a91a7d9b-7030-4770-a360-dca59cda29a4)


### 2. Create an endpoint to retrieve all tasks associated with a specific project ID.
### Endpoint: GET /project/{projectId}/tasks

![SS6](https://github.com/user-attachments/assets/1e1b28a4-7936-4e3d-895c-4a01a09bded2)


### 3. Create an endpoint to retrieve the manager of a given project ID. Return only the project  name, manager name, and email address.

### Endpoint: GET /project/{projectId}/manager

![SS7](https://github.com/user-attachments/assets/9cf7bb3d-04bf-43fe-9663-3109bdb0ef43)


### 4. Create an endpoint to retrieve the tasks and the users they are assigned to for a 
specific project ID. The result should contain only the task name and user name. 
### Endpoint: GET /project/{projectId}/tasks-users

![SS8](https://github.com/user-attachments/assets/8c5fef4a-1f13-4d4b-a2f0-4e3613869449)


### 5. Ensure your API handles errors gracefully and returns appropriate HTTP status codes. 

![SS9](https://github.com/user-attachments/assets/ade4b4af-85dc-419a-8703-a43a55d523b7)


### 6. Include validation for the request parameters where necessary.

![SS10](https://github.com/user-attachments/assets/3101cefe-7bb6-428c-b90f-234c4dc83f1c)






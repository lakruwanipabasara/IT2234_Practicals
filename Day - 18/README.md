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



add to all routes like below


OUTPUTS :


### 2. Create an endpoint to retrieve all tasks associated with a specific project ID.
### Endpoint: GET /project/{projectId}/tasks


### 3. Create an endpoint to retrieve the manager of a given project ID. Return only the project  name, manager name, and email address.

### Endpoint: GET /project/{projectId}/manager


### 4. Create an endpoint to retrieve the tasks and the users they are assigned to for a 
specific project ID. The result should contain only the task name and user name. 
### Endpoint: GET /project/{projectId}/tasks-users


### 5. Ensure your API handles errors gracefully and returns appropriate HTTP status codes. 




### 6. Include validation for the request parameters where necessary.






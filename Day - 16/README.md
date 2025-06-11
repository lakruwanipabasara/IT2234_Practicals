# IT2234_Practicals
Web Services and Server Technologies - Practical Sessions

# Employee App

## Setup Instructions

To set up the project, follow these steps:

- Initialize npm:
  
 ``` bash

     npm init

```


- Install dependencies:

````bash
   npm install express mongoose nodemon
````

![SS1](https://github.com/user-attachments/assets/5735fb81-956e-412d-88b4-ff112b470ac7)

![SS2](https://github.com/user-attachments/assets/365cfd96-6955-450f-8812-9e47484e6363)


- Update package.json:

````json
  "scripts": {
   "start": "nodemon index.js"
}
````


## API Routes & Functionality

### Department Route

- Get all department details.

  ![SS3](https://github.com/user-attachments/assets/c526dda7-5c3a-4857-a558-be2910c5d9c8)


- Get employees by department ID.

![SS4](https://github.com/user-attachments/assets/7e991f58-d6a0-41f0-a355-f79b26854b16)

  
- Get the employee count per department.

![SS5](https://github.com/user-attachments/assets/433ac911-e5b4-466e-b97e-9cf1fb8ba459)


### Employee Route
- Retrieve all employee details.

![SS9](https://github.com/user-attachments/assets/2e6f4fcb-52bf-46df-8c6e-aed2744bce92)

  
- Get project counts per employee.


  
- List project names with employee details.
  
- Find distinct employee positions.
  
- Count employees per position.
  
- Find employees with roles like "Engineer" or "Software Engineer."

  
### Project Route

- Retrieve all project details.

![SS10](https://github.com/user-attachments/assets/a184e0ba-6294-4d98-9bcb-9ecf5c36d69f)

  
- List employees associated with each project.




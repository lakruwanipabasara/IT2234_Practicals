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

  

- Get employees by department ID.


  
- Get the employee count per department.



### Employee Route
- Retrieve all employee details.


  
- Get project counts per employee.
  
- List project names with employee details.
  
- Find distinct employee positions.
  
- Count employees per position.
  
- Find employees with roles like "Engineer" or "Software Engineer."

  
### Project Route

- Retrieve all project details.

  
- List employees associated with each project.


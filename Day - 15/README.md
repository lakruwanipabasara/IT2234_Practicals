# IT2234_Practicals

Web Services and Server Technologies - Practical Sessions

## API Endpoint  

### **GET /Student/course**  
- **Purpose:** Fetch a list of students with their degree and enrolled course details.  
- **Method:** `GET`  
- **URL:** `/Student/course`  

### **Response Structure**  

####  **Success (200 OK)**  
Returns an array of student objects, each containing:  
- **Student Details:** (ID, Name, Date of Birth, Gender)  
- **Degree Information:** (Degree Name, Credits, Duration, Faculty)  
- **Enrolled Courses:** (Code, Name, Credits, Description)  

#### **No Data Found (404 Not Found)**  
If no students exist, the API returns:  
```
{
  "message": "Sorry, No Data Found!"
}
```

#### **Server Error (500 Internal Server Error)**  
For unexpected errors, the API responds with:  
```
{
  "message": "Server Error!"
}
```

## Student.js

![SS1](https://github.com/user-attachments/assets/4fb74911-92b5-4bc3-916d-bb63a1e4ff04)


## studentRoute.js

![SS2](https://github.com/user-attachments/assets/9eaff2f1-daf7-4fea-ba67-5a0859c01550)


## Postman OUTPUT-:

![SS3](https://github.com/user-attachments/assets/a29e993d-afaa-4134-a0bc-fb7a02cbc9e1)




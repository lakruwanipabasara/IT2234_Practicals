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

## studentRoute.js

## Postman OUTPUT-:





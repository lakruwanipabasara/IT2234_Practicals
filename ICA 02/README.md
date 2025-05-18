# IT2234_Practicals
Web Services and Server Technologies - Practical Sessions

## ICA - 02


1. Create the students and grades collections and insert the sample documents into both collections. 

   ➤ Create Database - School

   ➤ Create Collections - students and grdaes

   ➤ Insert Documents: Use the data.txt document provided data.

![SS 1](https://github.com/user-attachments/assets/c2e84cf2-cbbf-48c0-9d02-62fe2c436098)

![SS 2](https://github.com/user-attachments/assets/f52bd7fa-05d4-4cf9-a816-2300dad7d1bd)

![SS 3](https://github.com/user-attachments/assets/1fc579a8-c6ce-4324-a938-b03b30268efc)

![SS 4](https://github.com/user-attachments/assets/41c13cf2-af0d-4cf3-8add-04a2b42f73b1)

![SS 5](https://github.com/user-attachments/assets/af9487d3-7716-4b2c-9606-44d30b66bd2e)

![SS 6](https://github.com/user-attachments/assets/2725ef1b-6c8d-4afa-912d-605e3e24eaff)

![SS 7](https://github.com/user-attachments/assets/1e4a5d2b-5d23-4c06-a04e-e6d650cff741)

![SS 8](https://github.com/user-attachments/assets/8dcd439a-69ba-47b0-8085-0043f040dbce)


2. Show both collections in table view.

![SS 9](https://github.com/user-attachments/assets/aa631e18-3c97-4842-80ca-06e409ef63cc)

![SS 10](https://github.com/user-attachments/assets/ada28332-eb39-4f6c-92f9-b7f1be57318f)

   
3. Find the female students and only display their name, age and gender. 

   ```javascript
   
    db.students.find(
      { gender: "Female" },
      { name: 1, age: 1, gender: 1, _id: 0 }
    )

   ```

![SS 11](https://github.com/user-attachments/assets/cb96493e-34e1-4a6d-9d35-75b7c8082f4f)


4. Find the students who are younger than 22 and enrolled after 2020.

   ```javascript
    db.students.find(
     { age: { $lt: 22 }, enrollmentYear: { $gt: 2020 } }
    )
   ```
![SS 12](https://github.com/user-attachments/assets/7c3d11af-e08f-4f8a-964b-103f09671b18)

![SS 13](https://github.com/user-attachments/assets/10355ee1-0f2e-42db-a31b-cbe7f6581f47)


5. Find all grades for "Alice Johnson".

```javascript

  db.students.aggregate([
    { $match: { name: "Alice Johnson" } },
    {
      $lookup: {
      from: "grades",
      localField: "_id",
      foreignField: "studentId",
      as: "grades"
      }
  },
  {
    $project: {
      name: 1,
      grades: 1,
      _id: 0 
     }
  }
  ])

```

![SS 14](https://github.com/user-attachments/assets/b23af8e8-b5db-409a-938d-9fd21faae103)

![SS 15](https://github.com/user-attachments/assets/5f110fac-46ca-49ec-b8b4-601e425c8e10)


6. Find how many students followed the subject “Mathematics”.

```javascript

   db.grades.aggregate([
  {
    $match: { subject: "Mathematics" } 
  }	,
  {
    $group: {
      _id: "$studentId" 
	  }
  },
  {
    $count: "mathStudentsCount"
  }
])

```

![SS 16](https://github.com/user-attachments/assets/41b349cb-6001-4b57-a750-fef83021b211)


7. Find all students with grades in the term "Fall 2022". 

```javascript
db.grades.aggregate([
  { $match: { term: "Fall 2022" } },
  {
    $lookup: {
      from: "students",
      localField: "studentId",
      foreignField: "_id",
      as: "student"
    }
  },
  { $unwind: "$student" },
  {
    $project: {
      _id: 0,
      subject: 1,
      score: 1,
      term: 1,
      studentName: "$student.name",
      studentEmail: "$student.email",
      studentMajor: "$student.major",
      studentAge: "$student.age"
    }
  }
])

```

![SS 17](https://github.com/user-attachments/assets/645a42c2-5362-48cc-9802-0056dfc292a9)

![SS 18](https://github.com/user-attachments/assets/a6770779-08c7-480f-809b-df7f26e21803)

![SS 19](https://github.com/user-attachments/assets/89856868-38f1-446a-a2b7-fb9d056d6c0a)


//JSON
//{key:value}

console.log("JSON Intro")

let student={regno:'2021/ICT/124',name:'Pabasara',age:24,course:'IT',skills:['java','JS','c++']}
console.log(student)
console.log(student.name)

//Define 10 students JSON
//Store it in an Array
//Find the female students
//Find the students who are following IT course
//Find the max and average GPA among the students

console.log("Questions:")
console.log(" ")

let students=[
{regno:'2021/ICT/01',name:'Peter',age:23,gender:'Male',course:'IT',gpa:3.1},
{regno:'2021/ICT/02',name:'Smith',age:22,gender:'Male',course:'IT',gpa:3.0},
{regno:'2021/ICT/03',name:'Kenny',age:21,gender:'Female',course:'Maths',gpa:3.3},
{regno:'2021/ICT/04',name:'Rose',age:23,gender:'Female',course:'Maths',gpa:3.1},
{regno:'2021/ICT/05',name:'Emma',age:22,gender:'Female',course:'IT',gpa:3.6},
{regno:'2021/ICT/06',name:'Daniel',age:22,gender:'Male',course:'Bio',gpa:2.9},
{regno:'2021/ICT/07',name:'Edward',age:23,gender:'Male',course:'Bio',gpa:3.3},
{regno:'2021/ICT/08',name:'Sophia',age:22,gender:'Female',course:'IT',gpa:3.7},
{regno:'2021/ICT/09',name:'Ann',age:21,gender:'Female',course:'Maths',gpa:3.4},
{regno:'2021/ICT/10',name:'Krish',age:23,gender:'Male',course:'Maths',gpa:2.9},
]

console.log(students)

let femaleStudents = [];
for (let i=0;i<students.length;i++) {
    if (students[i].gender == 'Female') {
        femaleStudents.push(students[i]);
    }
}
console.log("Female Students:", femaleStudents);

let itStudents = [];
for (let j=0;j<students.length;j++) {
    if (students[j].course == 'IT') {
        itStudents.push(students[j]);
    }
}
console.log("IT Students:", itStudents);

let totalGPA = 0;
let maxGPA = students[0].gpa;

for (let k=0;k<students.length;k++) {
    totalGPA += students[k].gpa;
    if (students[k].gpa>maxGPA) {
        maxGPA = students[k].gpa;
    }
}

let avgGPA = totalGPA / students.length;
console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA.toFixed(2));
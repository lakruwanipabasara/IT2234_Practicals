//Array Operations

array=['a','b','d']
console.log(array)
array.push('c')
console.log(array)
array.pop()
console.log(array)

//reverse the array using push and pop
//a b c d -> d c b a 

console.log("Reverese the array using push and pop")
let array1=['a','b','c','d']

let array2=[]
for(let i=array1.length;i>0;i--)
{
   array2.push(array1.pop())
}
console.log(array2)
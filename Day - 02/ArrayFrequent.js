//[4,8,3,4,3,2,1,8,4]
//Find the most frequent element in the array

let numarray =[4, 8, 3, 4, 3, 2, 1, 8, 4];

let max = 0;

let mostFrequent;
for (let i=0;i<numarray.length;i++) {
    let count = 0;
    for (let j=0;j<numarray.length;j++) {
        if(numarray[i]==numarray[j]) 
		{
            count++;
        }
    }
    if(count > max) 
	{
        max=count;
        mostFrequent=numarray[i];
    }
}
console.log("Most Frequent Element:", mostFrequent);
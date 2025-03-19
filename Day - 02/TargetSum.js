//array=[1,2,3,4,5,6]
//target=7
//Write a code find the all pairs that sum up to target

let array=[1,2,3,4,5,6]

let target=7

for(let i=0;i<array.length;i++)
{
	for(let j=0;j<array.length;j++)
	{
		if(array[i]+array[j]==target)
		{
			console.log(array[i]+","+array[j])
		}
	}
}
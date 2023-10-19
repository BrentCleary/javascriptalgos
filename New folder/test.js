
testArray = [1,2,3,4,5];
const map1 = new Map();

function checkMap(nums)
{
  let index = 0;

  for(let i = 0; i < nums.length; i++)
  {
    map1.set(index, i);
    index++;
  }

  map1.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
  });

}

checkMap(testArray);

console.log("------------------")
console.log(map1.get(0))
console.log(map1.get(1))
console.log(map1.get(2))
console.log(map1.get(3))
console.log(map1.get(4))
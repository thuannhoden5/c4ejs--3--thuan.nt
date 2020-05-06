//tim so trong mang
const arr = [3,4,6,-9,10,-88,22,3];
let x = Number(prompt('enter a number'));
let n = arr.length;
let dem=0;
for(let i=0;i<n;i++){
    if(arr[i]===x){
        console.log(`${x} is FOUND in my index at ${i}`)
        dem++;
    }
}if(dem===0){
    console.log(`${x} is NOT FOUND in my index`);
    }
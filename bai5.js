let x = prompt('enter a sequence of Nuber, separated by comas');
let a = new Array();
let sum =0;
a = x.split(',');
let n = a.length;
for(let i=0;i<n;i++){
    
    sum +=Number(a[i]); 
}
console.log(sum);

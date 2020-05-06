//tim so nho nhat
let x = prompt('enter a sequence of Nuber, separated by comas');
let a = new Array();
a = x.split(',');
let n = a.length;
let min 
for(let i=1;i<n;i++){
    min=Math.min(...a)
}
console.log(min);
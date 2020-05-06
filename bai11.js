let x = prompt('enter number, separated by comas');
let a = new Array;
a=x.split(',');
let x2=a.filter(x=>x%2==0);
console.log(a+' => '+ x2);


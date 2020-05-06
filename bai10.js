let x= prompt('enter sequence of namename,separated by comas');
let a= new Array;
a=x.split(',');

let map1=a.map(x=>'<'+x+'>');
console.log(x+' => '+map1);

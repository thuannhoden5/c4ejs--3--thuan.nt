//vd1
let a =5;
let b =6;
[a,b]=[b,a];
console.log(a,b);
//vd2
let c =10;
let d =3;
d = [c, c = d][0];
console.log(c,d);
// vd3
let e=10;
let f=11;
let temp;
temp=e;
e=f;
f=temp;
console.log(e,f);
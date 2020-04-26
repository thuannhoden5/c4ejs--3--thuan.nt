//bai 1
// 1.1// var : trong hầu hết trường hợp làm việc như let
        // var là 1 older version của let
        // const = constant hang so, no hoat dong gan nhu let, nhung khong the thay doi gia tri
// 1.2//difference between let and var
// phạm vi hoạt động của var lớn hơn, let có phạm vi hoạt động nhỏ hơn rất nhiều,
// let không thể thoát khỏi scope
// var thì có khả năng cho biến đi qua scope va cho biến có thể tồn tại ra bên ngoài
//1.3 let vs const: giá trị của biến khi sử dụng let có thể thay đổi còn giá trị của const không thể thay đổi, nó chỉ thay đổi khi ta sửa giá trị trên code
//1.4: dùng const khi không muốn giá trị của biến thay đổi
// dùng var khi muốn biến có thể hoạt động trong một phạm vi rộng
//có thể dùng var khi muốn ngăn  truy cập của các biến có cùng tên phạm vi cao hơn trong phạm vi hiện tại vi 

//bai 2
     //2.a boolean là những biểu thức hoặc biến chỉ có 2 giá trị true or false
     //2.b: giá trị của boolean chính là giá trị true hoặc false 

//bai 3
// 3.a: print out 6 numbers , starting from 0.
// c1: dùng while
let i=0;
while(i<6){
    console.log(i);
    i++;
}
//c2: dùng for
let x=0;
for(x;x<6;x++){
    console.log(x);
}

//3.b: print nb numbers, nb by enter users, starting from 0
let nb = prompt('Enter a number ?');
let numberb=0;
while (numberb<nb){
    console.log(numberb);
    numberb++;
}
//3.c print starting from 3 to number before nc;
let nc = prompt('Enter a number ?');
let numberc = 3;
while (numberc<nc){
    console.log(numberc);
    numberc++;
}
//3.d:print stating from sNumberd to ending before eNumberd , sNumber and eNumber enter by users
let sNumberd = prompt('start number is ?');
let eNumberd = prompt('end number is ?');
while(sNumberd<eNumberd){
    console.log(sNumberd);
    sNumber++;
}
//3.e: print starting from sNumbere to ending befor eNumbere, stepping 3
let sNumbere = prompt('start number is ?');
let eNumbere = prompt('end number is?');
while(sNumbere<eNumbere){
    console.log(sNumbere);
    sNumbere+=3;
}

//3.f: print starting from sNumberf to ending befor eNumberf, stepping is step
let sNumberf = prompt('start number is ?');
let eNumberf = prompt('end number is ?');
let step = prompt('step is ?');
while (sNumberf<eNumberf){
    console.log(sNumberf);
    sNumber+=step;
}

//bai 4: asking age, printf enough to view a 14+ content
let age = prompt('Hoe old are you ?');
while (age>=14){
    console.log('Enjoy');
}
console.log('You are not old enough to view this content');

//bai 5: check x is the lower half or higher half of 0-9 range
// let x5;
// do {
//     x5 = prompt('Enter a number from 1 to 9');
// }
// while (x5>9||x5<0)
        //     if (x5>4.5){
        //         console.log('Higher half of 9');
        //     }
        //     if (x5<4.5){
        //         console.log('Lower half of 9');
        //     }
        //     if (x5 == 4.5) {
        //         console.log(' half of 9');
        //     }
//bai 5:cach khac tuong tu bai 6
//bai 6: asking two numbers, print look like bai 5
let x6,n6;
x6 = prompt('Enter a number ');
do{
    n6 = prompt(`enter a number from 0 to ${x6}`);
}
while (n6>x6||n6<0)
            if(n6>(x6/2)){
                console.log(`${n6} is in higher of ${n6} `);
            }
            if(n6<(x6/2)){
                        console.log(`${n6} is lower half of ${x6}`);
                    }
                    if(n6==(x6/2)){
                                console.log(`${n6} is half of ${x6}`);
                            }
// bai 6://thu lam cach khac
let x61 = prompt('Enter a number ');
let n61;
do{
 n61 = prompt(`enter a number from 0 to ${x61}`);
  }
while (n61>x61||n61<0)
        e = `${n61} is half higher of ${x61}`;
        f = `${n61}is halfvlower of ${x61}`;
        g = `${n61} is half of ${x61}`;
        let y=(n61>=(x61/2))?((n61>x61/2)?e:g):f;
        console.log(y);
        // bai 7: check even or odd number
        let n7 = prompt('Enter a number');
        if(n7%2==0){
                    console.log(`${n7} is an even number`);
} else {
    console.log(`${n7} is an odd number`);
// }

//bai 9: caculate BMI// co the lam nhu cach khac bai 6
let weight = prompt('Your weight in kg ?');
let height = prompt('Your height in cm ?');
let BMI =(weight/(height*height/10000));
BMI = BMI.toFixed(1)
alert(`Your BMI is ${BMI} `);

if(BMI<16){
        alert('You are serverely underweight');
}

if((BMI>=16)&&(BMI<18.5)){
        alert('You are underweight');
}

if((BMI>=18.5)&&(BMI<25)){
        alert('You are normal');
}

if((BMI>=25)&&(BMI<=30)){
        alert('You are overweight');
}

if(BMI > 30){
        alert('You are obese');
}
//bai 10:
//10.a: a square
setshape('rocket');
let i=0;
while(i<4){
  fd(100);
  rt(90)
  i++
}
//10.b: a triangle
setshape('rocket');
let i=0;
while(i<3){
  fd(100);
  rt(120);
  i++;
}
//10.c: a pentagon
setshape('rocket');
let i=0;
while(i<6){
  fd(100);
  rt(72);
  i++;
}
//10.d
setshape('rocket');
let i=0;
while(i<6){
  fd(100);
  rt(60);
  i++;
}

//bai 11: draw a polygon , the mumber of polygon'edges entered by users
setshape('rocket');
clear();
let x = prompt(' enter number of edges ');
let i=0;
while (i<x){
  fd(100/(0.2*x));
  rt(360/x);
  i++
}
//
//bai 12: draw n polygons , n enterd by users
setshape ('rocket');
clear();
let x = prompt('How many polygons?');
let i=0,j=0;
while(i<x){//de in ra so hinh
  while (j <3+i){
    fd(100);
    rt(360/(3+i));
    j++;
  }
j=0; 
i++;
}

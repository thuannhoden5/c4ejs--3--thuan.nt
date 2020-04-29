//bai 9: caculate BMI// co the lam nhu cach khac bai 6
let weight = prompt('Your weight in kg ?');
let height = prompt('Your height in cm ?');
let BMI =(weight/(height*height/10000));
BMI = BMI.toFixed(1)
console.log(`Your BMI is ${BMI} `);

if(BMI<16){
        console.log('You are serverely underweight');
}else if(BMI<18.5){
       console.log('You are underweight');
}else if(BMI<25){
        console.log('You are normal');
}else if(BMI<=30){
     console.log('You are overweight');
}else {
        console.log('You are obese');
}

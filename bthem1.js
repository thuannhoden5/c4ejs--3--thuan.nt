//tinh chi so BMI sau do in ra thong bao tuong ung
let height = Number(prompt('what is your height?(m)'));
let weight = Number(prompt('What is your weight?'));
let BMI = weight/(height*height);
if(BMI<18.5){
    console.log('gầy');
}else if(BMI<25){
    console.log('bình thường');
}else if(BMI<30){
    console.log('hơi béo');
}else if(BMI<35){
    console.log('Béo phì cấp độ 1');
}else if(BMI<40){
    console.log('Béo phì cấp độ 2');
}else{
    console.log('Béo phì cấp độ 3');
}


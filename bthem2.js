// hien thi so nghiem cua phuong trinh bac 2
let a = Number(prompt('nhap vao he so a'));
let b = Number(prompt('nhap vao he so b'));
let c = Number(prompt('nhap vao he so c'));
let delta = b*b-4*a*c;
if(delta>0){
    console.log('phuong trinh co 2 nghiem phan biet');
}else if(delta<0){
    console.log('phuong trinh vo nghiem');
}else{
    console.log('phuong trinh co nghiem duy nhat');
}

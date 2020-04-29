//bai 8
//a:6 L’s and H’s, half L’s, half H’s ​(L means low, H means high)

for(let i=0 ;i<6;i++){
    if(i<3){
        console.log('L');
    }else{
        console.log('H');
    }
}
//b:n​ L’s and H’s in total, n entered by user
let n81 = prompt('enter the total number of L and H');
for(let i=0;i<n81;i++){
    if(i<Math.ceil(n81/2)){
        console.log('L');
    }else{
        console.log('H');
    }
}
//c:8 1’s and 0’s in total, consecutively
for(let i = 0;i<4;i++){
    console.log('0');
    console.log('1');
}
//d:n​ 1’s and 0’s in total, consecutively, ​n​ entered by user
let n8 = Number(prompt('enter a number'));
for(let i=0;i<n8;i++){
    if(i<n8){
        console.log('0');
        i++;
    }
    if(i<n8){
        console.log('1');
    }
}


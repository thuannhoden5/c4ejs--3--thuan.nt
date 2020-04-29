//bai 6: asking user to enter two numbers, ​x​ and ​n​, then check if ​x​ is in lower half or higher half of ​n

let n6 = Number(prompt('Nhap vao 1 so'));
while (true){
    let x6 = Number(prompt(`enter a number from 0 to ${n6}`));
    if((x6>n6)||(x6<0)){
        break;
    }
    if(x6>(n6/2)){
        console.log(`${x6} is in higher half of ${n6}`);
    }else if(x6<(n6/2)){
        console.log(`${x6} is in lower half of ${n6}`);
    }else{
        console.log(`${x6} is half of ${n6}`);
    }
    break;
}


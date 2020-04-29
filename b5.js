//bai 5:lower half or higher half

while (true){
    let x = Number(prompt('enter a number from 0 to 9'));
    if((x>9)||(x<0)){
        break;
    }
    if(x>4.5){
        console.log('Higher half of 9');
    }else if(x<4.5){
        console.log('Lower half of 9');
    }else{
        console.log('half of 9');
    }
    break;
}

//8.1: creat 
let a=[5,7,300,90,24,50,75];
let n= a.length;
let x2='After shearing, here is my flock';
let x3='One month has, passed, my sheeps have grown, here are their sizes';
console.log('hello, my name is Thuan and here is my sheep sizes');
console.log(...a);

//8.2// tim max
console.log(`Now my biggest sheep has size ${Math.max(...a)}, let's shave it`);
//8.3
let stt;
stt=a.lastIndexOf(Math.max(...a));
a[stt]=8;
console.log(...a);

//8.4: increase 50;
console.log('MONTH 1');
console.log(x3);
a=a.map(a=>a+50)
console.log(...a);

//8.5 và 8.6: 4 MONTH

console.log(`Now my biggest sheep has size ${Math.max(...a)} let's shave it`);
stt=a.lastIndexOf(Math.max(...a));
a[stt]=8;
console.log(x2);
console.log(...a);

for(let j=2;j<5;j++){
    console.log('');
    let x4 = `MONTH ${j}`;
    console.log(x4);
    //cộng thêm 50
    a=a.map(a=>a+50);
    console.log(x3);
    console.log(...a);
    // tìm lớn nhất
    stt=a.lastIndexOf(Math.max(...a));
    console.log(`Now my biggest sheep has size ${a[stt]}, let's shave it`);
    

    // chuyển max thành 8
    if(j!==4){
        a[stt]=8;
        console.log(...a);
       
    } else{
        let sum=0;
        for(i=0;i<n;i++){
            sum+=Number(a[i]);
        }
        console.log(`My flock has size in total: ${sum}`);
        console.log(`I would get ${sum} * 2$ = ${sum*2}`);
    }


}



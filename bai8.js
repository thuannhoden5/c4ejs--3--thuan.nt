//8.1: creat 
let a=[5,7,300,90,24,50,75];
let s='';
let n= a.length;
let x2='After shearing, here is my flock';
let x3='One month has, passed, my sheeps have grown, here are their sizes';
for(let i=0;i<n;i++){
    s+=a[i]+' ';
}
console.log('hello, my name is Thuan and here is my sheep sizes');
console.log(s);
s='';
//8.2
let maxSize;
maxSize=Math.max(...a);
console.log(`Now my biggest sheep has size ${maxSize}, let's shave it`);
//8.3
let stt;
stt=a.lastIndexOf(Math.max(...a));
for(i=0;i<n;i++){
    a[stt]=8;
    s+=a[i]+' ';
}
console.log(x2);
console.log(s);
s='';
console.log('');
//8.4: increase 50;
for(i=0;i<n;i++){
    a[i]+=50;
    s+=a[i]+' ';
}
console.log('MONTH 1');
console.log(x3);
console.log(s);
s='';
//8.5 và 8.6: 4 MONTH
stt=a.lastIndexOf(Math.max(...a));
let x1=`Now my biggest sheep has size ${a[stt]}, let's shave it`
stt=a.lastIndexOf(Math.max(...a));
console.log(x1);
s+=a[i]+' ';
s='';
for(i=0;i<n;i++){
        a[stt]=8;
        s+=a[i]+' ';
}
console.log(x2);
console.log(s);
s='';
for(let j=2;j<5;j++){
    console.log('');
    let x4 = `MONTH ${j}`;
    console.log(x4);
    //cộng thêm 50
    for(i=0;i<n;i++){
        a[i]+=50;
        s+=a[i]+' ';
    }
    console.log(x3);
    console.log(s);
    s='';

    stt=a.lastIndexOf(Math.max(...a));
    x1=`Now my biggest sheep has size ${a[stt]}, let's shave it`// tim lớn nhất
    console.log(x1);

    // chuyển max thành 8
    if(j!==4){
        for(i=0;i<n;i++){
            a[stt]=8;
            s+=a[i]+' ';
         }
        console.log(x2);
        console.log(s);
        s='';
    } else{
        let sum1=0, sum=0;
        for(i=0;i<n;i++){
            sum+=Number(a[i]);
        }
        sum1=sum*2;
        console.log(`My flock has size in total: ${sum}`);
        console.log(`I would get ${sum} * 2$ = ${sum1}`);
    }

}




let item = ['Jeans', 'T-shirt', 'Short'];
let n = item.length;
let newItem;
let newName;
let itemDelte;
while (true){
    let choose = prompt('Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?')
    // r: recent items
// c: creat items
// u : update items
// d: delete items
if((choose==='R')||(choose==='r')){
    console.log('The current items are:');
    for(let i=0;i<n;i++){
        console.log(`${i+1}. ${item[i]}`);
    }
}else if((choose==='C')||(choose==='c')){
    newItem = prompt('enter the name of the new item');
    item.push(newItem);
    console.log('done');
    n++;
}else if((choose==='U')||(choose==='u')){
    newName = Number(prompt('enter the postion you want to update'));
    item[newName-1] = prompt('enter the new name');
    console.log('done');
}else if((choose==='d')||(choose==='D')){
    itemDelte = Number(prompt('you want to delete item thu'));
    console.log('done');
    item.splice(itemDelte-1,1);
    n--;
}else{
    console.log('This command is not supported');
    break;
}
}
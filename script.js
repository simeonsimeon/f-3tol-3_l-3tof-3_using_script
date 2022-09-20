// let a=123456;
// let b=a.toString().split("");
// console.log(b);
// let number=b[3]+b[4]+b[5]+b[0]+b[1]+b[2];
// let N=parseInt(number)
// console.log(N);
/*for(let i=0;i<b.length;i++){
    console.log(b[i])
}*/
function method(easy){
    return easy > 3
}
let a=123456;
let b=a.toString().split("").filter(method);
console.log(b);
function meth(e){
    return e < 4;
}
let c=a.toString().split("").filter(meth);
console.log(c);
let first="";
let second="";
for(let i=0;i<b.length;i++){
   first+=b[i];
}
console.log(first);
for(let j=0;j<c.length;j++){
    second+=c[j];
 }
 console.log(second);
 let whole=parseInt(first+second);
 console.log(whole);






// let now=[10,23,45];
// now.forEach((easy,index,arr)=> {
//     console.log(easy,index,arr);
// } );
// for(let key in now){
//     console.log(now[key])
// }
// for(let key of now){
//     console.log(key)
//     console.log(now[key])
// }



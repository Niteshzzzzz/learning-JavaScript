let x = new Date(2020, 4, 23, 13, 34, 32, 44);
let y = new Date();
x.setFullYear(x.getFullYear()+2)
console.log(x);
if(x > y){
    console.log("x is future year");
}
else if(x < y){
    console.log("x is past year");
}
else{
    console.log("both x and y are same year");
}
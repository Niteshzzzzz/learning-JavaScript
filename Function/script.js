function add(){
   
    let sum = 0;
    if(arguments==0){
        console.log("No arguments passed");
    }
    else{
        for(let i=0;i<arguments.length;i++){
            sum+=arguments[i];
        }
        console.log(sum);
    }
}
add(3,8,45,78);
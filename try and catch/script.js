try{
    console.log(a);
}
catch(err){
    console.log(err);
    console.dir(err);
    console.dir(err.name);
    console.dir(err.message);
}
finally{
    console.log("try and catch completed")
}
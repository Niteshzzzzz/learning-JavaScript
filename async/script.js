async function makeRequest(){
    let a = await fetch('https://fakestoreapi.com/products')
    let data = await a.json();
    console.log(data[0])
}
makeRequest();
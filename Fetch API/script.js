// fetch api using GET method
fetch('https://dummyjson.com/products')
    .then((req) => req.json())
    .then((data) => data.products)

// fetch api using POST method
fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
    /* other product data */
  })
})
.then(res => res.json())
.then(console.log);

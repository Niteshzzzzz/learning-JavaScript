function makeHttpRequest(method, url){
    let xhr = new XMLHttpRequest();
    xhr.responseType ='json';

    let myPromise = new Promise((resolve, reject) => {
        xhr.addEventListener('load', () => {
            resolve(xhr.response);
        })
        xhr.addEventListener('error', () => {
            reject("Request rejected, error found!");
        })
    })
    
    xhr.open(method, url);
    xhr.send();
    return myPromise;
}

// using XMLHttpRequest 
// makeHttpRequest('GET', 'https://dummyjson.com/users', (users_data) => {
//     console.log(users_data)
//     makeHttpRequest('GET', `https://dummyjson.com/posts/${users_data.users[0].id}`, (users_posts) => {
//         console.log(users_posts);
//         makeHttpRequest('GET', `https://dummyjson.com/comments/${users_posts.id}`, (users_comments) => {
//             console.log(users_comments);
//             makeHttpRequest('GET', `https://dummyjson.com/users/${users_comments.id}`, (user_data) => {
//                 console.log(user_data);
//             });
//         });
//     });
// });

// using promise 
// makeHttpRequest('GET', 'https://dummyjson.com/users')
//     .then((users_data) => makeHttpRequest('GET', `https://dummyjson.com/posts/${users_data.users[0].id}`))
//     .then((users_posts) => makeHttpRequest('GET', `https://dummyjson.com/comments/${users_posts.id}`))
//     .then((users_comments) => makeHttpRequest('GET', `https://dummyjson.com/users/${users_comments.id}`))
//     .then((user_data) => console.log(user_data))
//     .catch((error) => console.log(error))

// usig fetch API
fetch('https://dummyjson.com/users')
    .then((req) => req.json())
    .then((users_data) => `https://dummyjson.com/posts/${users_data.users[0].id}`)
    .then((req) => console.log(req))
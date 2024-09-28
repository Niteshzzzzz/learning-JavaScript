function makeHttpRequest(method, url, callback){
    let xhr = new XMLHttpRequest();
    xhr.responseType ='json';
    xhr.addEventListener('load', () => {
        callback(xhr.response);
    })
    xhr.open(method, url);
    xhr.send();
}

makeHttpRequest('GET', 'https://dummyjson.com/users', (users_data) => {
    console.log(users_data)
    makeHttpRequest('GET', `https://dummyjson.com/posts/${users_data.users[0].id}`, (users_posts) => {
        console.log(users_posts);
        makeHttpRequest('GET', `https://dummyjson.com/comments/${users_posts.id}`, (users_comments) => {
            console.log(users_comments);
            makeHttpRequest('GET', `https://dummyjson.com/users/${users_comments.id}`, (user_data) => {
                console.log(user_data);
            });
        });
    });
});
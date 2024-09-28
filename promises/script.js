const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

let myPromise = new Promise((Resolved, Rejected) => {
    btn1.addEventListener('click', () => Resolved("Promise resolved"))
    btn2.addEventListener('click', () => Rejected("Promise Rejected"))
})

myPromise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
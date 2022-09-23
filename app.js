const postsEl = document.getElementById("post");

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => data.forEach((posts) => {
    

let user = document.createElement("div");
let aIdp = document.createElement('p');
let bidp = document.createElement('p');
let title = document.createElement('p');
user.classList.add("post");

aIdp.innerText = "UserId: " + posts.userId;
bidp.innerText = "Id: " + posts.id;
title.innerText = posts.title;

user.appendChild(aIdp);
user.appendChild(bidp);
user.appendChild(title);

postsEl.appendChild(user);
}))
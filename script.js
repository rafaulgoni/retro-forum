const newsCard = async () =>{
    document.getElementById("loading-spinar").style.display = "block";
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const showNews = document.getElementById('show-news')
    data.posts.forEach((news) => {
        document.getElementById("loading-spinar").style.display = "none";
    const div =document.createElement('div');
    div.classList = `card lg:card-side bg-base-100 shadow-xl`;
    div.innerHTML =`
    <figure class ="max-w-[220px] rounded-full p-3 mx-auto"><img src="${news.image}" alt="Movie"/></figure>
    <div class="card-body">
        <div class="flex justify-around">
            <h1># <samp class="font-bold">${news.category}</samp></h1>
            <h1>Author: <span class="font-bold">${news.author.name}</span></h1>
        </div>
            <h2 class="card-title">${news.title}</h2>
            <p>${news.description}</p>
        <hr class="border-dashed">
        <div class="card-actions flex justify-around">
            <button class ="flex"><img src="images/icon-message.svg" alt="">${news.comment_count}</button>
            <button class ="flex"><img src="images/icon-eye.svg" alt="">${news.view_count}</button>
            <button class ="flex"><img src="images/icon-clock-hour.svg" alt="">${news.posted_time}</button>
            <div class="flex justify-end">
                <button onclick="buttonOutput()"><img src="images/email.svg" alt=""></button>
            </div>
        </div>
    </div>
    `;
    showNews.appendChild(div);
    });
}   
const buttonOutput= async()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await res.json();
    const buttonClick = document.getElementById('btn-click');
    const div = document.createElement('div');
    data.posts.forEach (item =>{
    
    div.innerHTML = `
            <div class="flex bg-[#fff] shadow-xl p-6 mb-4 rounded-md justify-around">
                <p class="font-bold">${item.title}</p>
                <p class="flex items-center">
                <img src="images/icon-eye.svg" alt="" />${item.view_count}
                </p>
            </div>
            `;
            buttonClick.appendChild(div);
      });
}

const searchBer = async (searchText) =>{
    document.getElementById("loading-spinar").style.display = "block";
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const showNews = document.getElementById('show-news')
    showNews.textContent ='';
    data.posts.forEach((news) => {
    document.getElementById("loading-spinar").style.display = "none";
    const div =document.createElement('div');
    div.classList = `card lg:card-side bg-base-100 shadow-xl`;
    div.innerHTML =`
    <figure class ="max-w-[220px] rounded-full p-3 mx-auto"><img src="${news.image}" alt="Movie"/></figure>
    <div class="card-body">
        <div class="flex justify-around">
            <h1># <samp class="font-bold">${news.category}</samp></h1>
            <h1>Author: <span class="font-bold">${news.author.name}</span></h1>
        </div>
            <h2 class="card-title">${news.title}</h2>
            <p>${news.description}</p>
        <hr class="border-dashed">
        <div class="card-actions flex justify-around">
            <button class ="flex"><img src="images/icon-message.svg" alt="">${news.comment_count}</button>
            <button class ="flex"><img src="images/icon-eye.svg" alt="">${news.view_count}</button>
            <button class ="flex"><img src="images/icon-clock-hour.svg" alt="">${news.posted_time}</button>
            <div class="flex justify-end">
                <button onclick="buttonOutput()"><img src="images/email.svg" alt=""></button>
            </div>
        </div>
    </div>
    `;
    showNews.appendChild(div);
    });
}

const handleSearch = () =>{
    const searchfield = document.getElementById('search-box');
    const searchText = searchfield.value;
    console.log(searchText);
    searchBer(searchText)
}


const loadCard = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const cards = data;
    displayCards(cards);
}

const displayCards = cards => {
    const cardContainer = document.getElementById('card-container');
    cards.forEach(card =>{
        const createCard =document.createElement('div');
        createCard.classList =`card card-compact lg:w-96 bg-base-100 shadow-xl`;
        createCard.innerHTML =`
        <figure><img src="${card.cover_image}" alt="Shoes" /></figure>
        <div class="flex pl-[10px]">
        <img src="images/time.svg" alt="">
        <P>${card.author?.posted_date?card.author?.posted_date:"No publish date"}</P>
        </div>
        <div class="card-body">
            <h2 class="card-title">${card.title}</h2>
            <p>${card.description}</p>
            <div class="flex gap-x-2">
            <div>
            <img class="w-[44px] rounded-full" src="${card.profile_image}" alt="">
            </div>
            <div>
            <h2 class="font-bold text-xl">${card.author.name}</h2>
            <p class="text-black">${card.author?.designation?card.author?.designation:"Unknown"}</p>
            </div>
            </div>
        </div>
        `;
        cardContainer.appendChild(createCard)
    })
}
newsCard();
loadCard();
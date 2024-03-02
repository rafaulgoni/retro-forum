
const loadCard = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const cards = data;
    displyCards(cards);
}

const displyCards = cards => {
    const cardContaiber = document.getElementById('card-container');
    cards.forEach(card =>{
        console.log(card);
        const createCard =document.createElement('div')
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
        cardContaiber.appendChild(createCard)
    })
}
loadCard();
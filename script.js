var cardList = document.querySelector('.main-right__card-list');
var cardTitle = document.querySelector('.main-left__input-title');
var cardURL = document.querySelector('.main-left__input-URL');
var enterBtn = document.querySelector('.main-left__button-enter');

enterBtn.addEventListener('click', appendCard);

function Card(title, url) {
 this.title = cardTitle.value;
 console.log(cardTitle.value)
 this.url = cardURL.value;
}  

function createNewCard(title, url){
  var newCard = new Card (title, url)  
}

function appendCard() {
var createCard = document.createElement('li');  

cardList.appendChild(createCard); 
     createCard.innerHTML =`
     <li>
        <h3 
          class="main-right__card-title">
          ${cardTitle.value}
        </h3>
        <a 
          class="main-right__card-link" 
          href="">${cardURL.value}
        </a>
        <button 
          class= "main-right__card-button main-right__card-button-read">
          Read
        </button>
        <button 
          class= "main-right__card-button main-right__card-button-delete">
          Delete
        </button>
      </li>`;

  createNewCard(cardTitle.value, cardURL.value);
}




var deleteAllBtn = document.querySelector('.main-left__button-delete-read');
var cardTitle = document.querySelector('.main-left__input-title');
var enterBtn = document.querySelector('.main-left__button-enter');
var cardList = document.querySelector('.main-right__card-list');
var cardURL = document.querySelector('.main-left__input-URL');

deleteAllBtn.addEventListener('click', deleteAllRead);
cardTitle.addEventListener('keyup', disabledButton);
cardURL.addEventListener('keyup', disabledButton);
enterBtn.addEventListener('click', appendCard);
cardList.addEventListener('click', deleteCard);
cardList.addEventListener('click', markAsRead);



function appendCard() {
if (cardTitle.value.length != 0 &&  cardURL.value.length != 0){
  var createCard = document.createElement('li');  

  createCard.innerHTML = `
    <div class= 'card__container-title'>
      <h3 
        class="main-right__card-title">
        ${cardTitle.value}
      </h3>
    </div>
    <div class= 'card__container-link'>
      <a 
        class="main-right__card-link" 
        href="">${cardURL.value}
      </a>
    </div>
    <div class= 'card__container-button'>
      <button 
        class= "main-right__card-button main-right__card-button-read">
        Read
      </button>
      <button 
        class= "main-right__card-button main-right__card-button-delete">
        Delete
      </button>
    </div>
   `;

  cardList.appendChild(createCard);
  clearInputs(); 
  disableOnEnter();
  numUnreadLink();
  totalLinkCount();
 
  } else {
  alert('Error, you must fill out both input fields!')
  }
}

function clearInputs() {
  cardURL.value = '';
  cardTitle.value = '';
  console.log(clearInputs);
}

function totalLinkCount() {
  var totalLinks = document.querySelectorAll('.card__container-title').length;
  var totalLinkCounter = document.querySelector('.main-left__counter-on-page');
  totalLinkCounter.innerText = totalLinks;   
}

function numUnreadLink() {
  var totalLinks = document.querySelectorAll('.card__container-title').length;
  var numReadLinks = document.querySelectorAll('.read').length;
  var numUnreadLinks = document.querySelector('.main-left__counter-unread');
  var numUnread = totalLinks - numReadLinks;
  numUnreadLinks.innerText = numUnread;
}

function numReadLinks() {
  var numReadLinks = document.querySelectorAll('.read').length;
  document.querySelector('.main-left__counter-read').innerText = numReadLinks;
}

function deleteCard(event) {
  if(event.target && event.target.matches('.main-right__card-button-delete')){
    event.target.closest('li').remove();
  }
    totalLinkCount();
    numReadLinks();
    numUnreadLink();
}

function markAsRead(event) {
  if (event.target && event.target.matches('.main-right__card-button-read')){
    var card = event.target.closest('li');
    console.log(card)
    card.classList.toggle('read');

    event.target.classList.toggle('main-right__card-button-read-clicked');

    numReadLinks();
    numUnreadLink();
    disableDeleteAllBtn();
  }
}

function deleteAllRead() {
  var totalReadCards = document.querySelectorAll('.read');
  console.log(totalReadCards);
  for(var i = 0 ; i < totalReadCards.length ; i++){
    totalReadCards[i].remove();
    
    disableDeleteAllBtn();
    totalLinkCount();
    numReadLinks();
    numUnreadLink();
    disableDeleteAllBtn()
  }
}

function disableOnEnter() {
  enterBtn.setAttribute('disabled', true)
}

function disabledButton() {
  if (cardURL.value.length > 0 || cardTitle.value.length > 0 ) {
    enterBtn.removeAttribute('disabled');
  } else { 
    enterBtn.setAttribute('disabled', true); 
  }
}

function disableDeleteAllBtn() {
  var totalReadCards = document.querySelectorAll('.read').length;
  if (totalReadCards === 0){
    deleteAllBtn.setAttribute('disabled', true);
  } else {
    deleteAllBtn.disabled = false;
  }
}




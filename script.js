var cardList = document.querySelector('.main-right__card-list');
var cardTitle = document.querySelector('.main-left__input-title');
var cardURL = document.querySelector('.main-left__input-URL');
var enterBtn = document.querySelector('.main-left__button-enter');

// enterBtn.addEventListener('click', appendCard);
cardTitle.addEventListener('keyup', disabledButton);
cardURL.addEventListener('keyup', disabledButton);
enterBtn.addEventListener('click', appendCard);
// enterBtn.addEventListener('click', totalLinkCount);
// enterBtn.addEventListener('click', numUnreadIncrement);
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
  numUnreadIncrement();
  totalLinkCount();
 
  } else {
  alert('Error, you must fill out both input fields!')
  }
}

function deleteAllRead() {
  var totalReadCards = document.querySelectorAll('.read');
  console.log(totalReadCards);
  for(var i = 0 ; i < totalReadCards.length ; i++){
    totalReadCards[i].remove();
  }
}


function totalLinkCount() {
  var totalLinks = document.querySelectorAll('.card__container-title').length;
  var totalLinkCounter = document.querySelector('.main-left__counter-on-page');
  totalLinkCounter.innerText = totalLinks;   
}

function numUnreadIncrement() {
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
    numUnreadIncrement();

}

function markAsRead(event) {
  if (event.target && event.target.matches('.main-right__card-button-read')){
    var card = event.target.closest('li');
    console.log(card)
    card.classList.toggle('read');

  event.target.classList.toggle('main-right__card-button-read-clicked');

  numReadLinks();
  numUnreadIncrement();
  }
}

 
// ------------------------------
  // var sibling = document.querySelector('.main-right__card-button-read').nextSibling
  // var trueSibling = document.querySelector('.main-right__card-button-read').nextSibling
   // var deleteBtn = document.querySelector('.main-right__card-button-delete');
   // console.log(deleteBtn)
   // deleteBtn.classList.toggle('main-right__card-button-delete-read');

// function unmarkAsRead() {
//   document.querySelector('.main-right__card-button-read').style.color = '#445A64'
// }
// --------------------------------

function clearInputs() {
  cardURL.value = '';
  cardTitle.value = '';
  console.log(clearInputs);
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




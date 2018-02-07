var cardList = document.querySelector('.main-right__card-list');
var cardTitle = document.querySelector('.main-left__input-title');
var cardURL = document.querySelector('.main-left__input-URL');
var enterBtn = document.querySelector('.main-left__button-enter');
var onPageCount = 0;
var onPageRead = 0;
var onPageUnread = 0;


// enterBtn.addEventListener('click', appendCard);
cardList.addEventListener('keyup', disabledButton);
cardURL.addEventListener('keyup', disabledButton);
enterBtn.addEventListener('click', appendCard);
enterBtn.addEventListener('click', numOnPageIncrement);
enterBtn.addEventListener('click', numUnreadIncrement);
cardList.addEventListener('click', deleteCard);
cardList.addEventListener('click', markAsRead);



function appendCard() {
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
  disableOnEnter()
}

function numOnPageIncrement() {
  onPageCount++
  var numOnPage = document.querySelector('.main-left__counter-on-page')
  numOnPage.innerText = onPageCount;
}

function numUnreadIncrement() {
  onPageUnread++
  var numUnread = document.querySelector('.main-left__counter-unread')
  numUnread.innerText = onPageUnread;
}

function numReadIncrement() {
  onPageRead++
  var numOfRead = document.querySelector('.main-left__counter-read')
  numOfRead.innerText = onPageRead;
}

function deleteCard(event) {
  if(event.target && event.target.matches('.main-right__card-button-delete')){
    event.target.closest('li').remove();
  }
}

function markAsRead(event) {
  if (event.target && event.target.matches('.main-right__card-button-read')){
    var card = event.target.closest('li');
    console.log(card)
    card.classList.toggle('read');

  event.target.classList.toggle('main-right__card-button-read-clicked');

  numReadIncrement();
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
  if (cardURL.value === '' && cardTitle.value === '') {
    alert('Error, empty field')
    enterBtn.setAttribute('disabled', true)
  } else if (cardURL.value === '' || cardTitle.value === '') {
    alert('Error, empty field')
    enterBtn.setAttribute('disabled', true)
  } else {
    enterBtn.disabled = false;
  }
}



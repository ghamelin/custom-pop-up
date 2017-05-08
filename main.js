// select dom elements
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const showModal = document.querySelector('.show-modal');
const displayW = window.innerWidth;
const displayH = window.innerHeight;

// create function handlers
function modalDisplay() { 
  this.showSuccess = function() {
    overlay.style.display = 'block';
    modal.style.display = 'block';
    overlay.style.height = displayH+'px';
    modal.style.left = (displayW/2) -   (modal.clientWidth/2)+"px";
    modal.innerHTML = `<div class="modal-content">
      <div class="modal-top">
      <h1>Thank You!</h1>
      </div>
      <div class="modal-main">
      <p>Your request has been received, we will be contacting you shortly.</p>
      </div>
      <button class="modal-confirm">OK</button>
    </div>`;
    document.querySelector('.modal-confirm').addEventListener('click', myModal.confirm);
  };
  this.showFailure = function(){
    overlay.style.display = 'block';
    modal.style.display = 'block';
    overlay.style.height = displayH+'px';
    modal.style.left = (displayW/2) -   (modal.clientWidth/2)+"px";
    modal.innerHTML = `<div class="modal-content">
      <div class="modal-top">
      <h1>Uh Oh!</h1>
      </div>
      <div class="modal-main">
      <p>Looks like your request could not be processed at this time. Please press 'ok' to refresh and try again.</p>
      </div>
      <button class="modal-confirm">OK</button>
    </div>`;
    document.querySelector('.modal-confirm').addEventListener('click', myModal.confirm);
  };
    this.confirm = function() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
  };
}

// create new object
var myModal = new modalDisplay;

// add event listeners
showModal.addEventListener('click', myModal.showFailure);
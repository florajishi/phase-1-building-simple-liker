// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//Manipulate the DOM
//Recognize JS Events
//Communicate with the Server

//GOAL: Mimic the "Like" functionality
//Do NOT look at previous code

//WHEN User clicks on empty heart
  //Invoke mimicServerCall to make server request
//When "server" returns a failure status
  //Respond to error by using a .catch(() => {}) block after your .then(() => {}) block
  //Display the error modal by removing the .hidden class
  //Display server error message in the modal
  //Use setTimeout to hide the modal after 3 seconds (add .hidden class)
//When the server returns a success status
  //Change the heart to a full heart
  //Add the .activated-heart class to make the heart appear red
//WHEN USER clicks on a full heart
  //Change the heart back to an empty heart
  //Remove the .activated-heart class

//Manipulate the DOM ONLY when the server request reponds. Do not make the heart full until you're inside a successful .then block

document.addEventListener(`DOMContentLoaded`, (e) => {
  const hearts = document.querySelectorAll("span.like-glyph")
  console.log(hearts)
  hearts.forEach(hearts => hearts.addEventListener('click', likeSystem))

  const modal = document.querySelector('#modal')
modal.classList.add('hidden');

  function likeSystem(hearts){
    console.log(hearts.target)
    mimicServerCall()
    .then(() => {
      if(hearts.target.textContent === EMPTY_HEART){
        hearts.target.textContent = FULL_HEART
      }else if(hearts.target.textContent === FULL_HEART){
        hearts.target.textContent = EMPTY_HEART
      }
    })
    .catch(error => {
      modal.classList.remove('hidden')
      const modalMessage = document.querySelector('#modal-message')
      modalMessage.innerText = error
      setTimeout(() => {
        modal.hidden = true}, 2000)}
    )}
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

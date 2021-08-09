// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeHearts = document.querySelectorAll(".like-glyph")

function likeAction(e) { //e is the target
  const heartSymbol = e.target
  // debugger;
  mimicServerCall("lol")
    .then(function(serverMessage){
      if (e.target.innerHTML == EMPTY_HEART) {
      heartSymbol.innerText = FULL_HEART
      heartSymbol.setAttribute("class", "activated-heart")
    }
      else {
        heartSymbol.innerText = EMPTY_HEART
        heartSymbol.className = ""
        heartSymbol.setAttribute("class", "like-glyph")
      }})
    .catch(function(error) {
      const modal = document.getElementById("modal")
      modal.className = ""
      modal.innerText = error
      setTimeout( () => modal.className = "hidden", 3000)
    })
}

for (const glyph of likeHearts) { //iterate over all the likeHearts
  glyph.addEventListener("click", likeAction);
}

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

/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(input) {
  const greetTime = parseInt(input) 
  if (greetTime < 12) 
  return "Good Morning"
  if (greetTime >= 12 && greetTime < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening" 
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
 document.getElementById("greeting").textContent = message
}

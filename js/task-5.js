
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  console.log(getRandomHexColor);
  
  const body = document.querySelector('body')
console.log(body);
  
  const button = document.querySelector(".change-color") 
  button.addEventListener("click", () => {
    
    body.style.backgroundColor = `${getRandomHexColor()}`
  })

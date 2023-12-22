const body = document.querySelector('body');
console.log(body)
const buttons = document.querySelectorAll(".button")
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
      body.style.backgroundColor = e.target.id;
    })
})

const body = document.body;
const start = document.querySelector("#Start");
const stop = document.querySelector("#Stop")
let  intervelRefrence;

const backgroundColor = ()=>{
   const hax = "0123456789ABCDEF";
   let color = "#"
   for (let index = 0; index < 6; index++) {
    color+=hax[Math.floor(Math.random()*16)]
    
   }
   return color;
}

const startChangingColor = ()=>{
if (!intervelRefrence) {
   intervelRefrence = setInterval(()=>{
      body.style.backgroundColor = backgroundColor()
   },1000)
}
}

start.addEventListener('click', startChangingColor);

const stopChangingColor  = ()=>{
   clearInterval(intervelRefrence);
   intervelRefrence=null;
}
stop.addEventListener('click', stopChangingColor);

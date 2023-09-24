function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  
  const startBtn = document.querySelector("[data-start]");
  const stopBtn = document.querySelector("[data-stop]");
  
  let timerID = null;
  
  stopBtn.disabled = true;
  
  startBtn.addEventListener('click', ()=>{
      timerID = setInterval(()=>{
          document.body.style.backgroundColor = getRandomHexColor();
          startBtn.disabled = true;
          stopBtn.disabled = false;
      },1000)
  });
  
  stopBtn.addEventListener('click', ()=>{
      clearInterval(timerID);
      startBtn.disabled = false;
      stopBtn.disabled = true;
  })


const form = document.querySelector(".form");


form.addEventListener("submit", (event)=>{
  event.preventDefault();

  const delay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  for (let i = 0; i<amount; i++){
    const position = i + 1;
    const promiseDelay = delay + (i * step);
    setTimeout(()=>{
      createPromise(position, promiseDelay)
      .then(({position,delay})=>{
         console.log (`✅ Fulfilled promise ${position} in ${delay}ms`);
        
       
      })
      .catch (({position, delay})=>{
         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        
      })
    }, promiseDelay)
  }
  
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promiseObject = {position, delay};

  return new Promise ((resolve, reject)=>{
    if(shouldResolve){
      resolve(promiseObject)
    } else{
      reject(promiseObject)
    }
  })
  
}
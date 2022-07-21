import { fromEvent, Observable } from 'rxjs';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let trigger1 = true;
let trigger2 = true;
let trigger3 = true;


const stream$ = Observable.create((observer) => {
  let result = setInterval(() => {
    observer.next({
      x: (getRandomInt(-300,300)),
      y: (getRandomInt(-300,300))
    })
  }, 1000)
  result
  
  return function unsubscribe(){
    clearInterval(result);
  }
});

function movementLogic(elem, obj){
  elem.style.transition = 'all .3s ease-in-out'
  elem.style.position = 'relative';
  elem.style.left = `${obj.x}px`;
  elem.style.top = `${obj.y}px`
}

let subscription1;
let subscription2;
let subscription3;
fromEvent(document.querySelector('main'), 'click').subscribe((e) => {
  if(e.target.hasAttribute('data-ads')){
    switch(e.target.dataset.ads){
      case 'netflix':
        console.log('netflix')
        if(trigger1){
          subscription1 = stream$.subscribe((obj) => {
            movementLogic(e.target, obj)
          });
          trigger1 = false;
        } else {
          subscription1.unsubscribe();
          trigger1 = true;
        }
        break;
      case 'instagram':
        console.log('instagram')
        if(trigger2){
          subscription2 = stream$.subscribe((obj) => {
            movementLogic(e.target, obj)
          });
          trigger2 = false;
        } else {
          subscription2.unsubscribe();
          trigger2 = true;
        }
        break;
      case 'telegram':
        console.log('telegram')
        if(trigger3){
          subscription3 = stream$.subscribe((obj) => {
            movementLogic(e.target, obj)
          });
          trigger3 = false;
        } else {
          subscription3.unsubscribe();
          trigger3 = true;
        }
        break;
    }
  }
})
















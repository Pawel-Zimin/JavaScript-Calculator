const equationDiv = document.querySelector('.equation');
const resultDiv = document.querySelector('.result');

const keyboardBtns = document.querySelectorAll('.keyboard-btn');
const keyboardBtnsArr = [...keyboardBtns];

let dotUsed = false;
let wasActionLastUsed = false;
let wasNumberLastUsed = false;

const dotPressed = () => {
   if(!dotUsed){
      dotUsed = true;
      equationDiv.textContent = resultDiv.textContent + '.';
      resultDiv.textContent = equationDiv.textContent;
   }
}

const numberPressed = (number) => {
   wasActionLastUsed = false;
   wasNumberLastUsed = true;

   equationDiv.textContent = equationDiv.textContent + number;
   resultDiv.textContent = equationDiv.textContent;

}


const actionPressed = (action) => {
   if(action === 'X'){
      action = '*';
   }

   if(equationDiv.textContent === '=NAN'){
      equationDiv.textContent = 'NAN' + action;
      resultDiv.textContent = action;

      wasActionLastUsed = true;
   }
   
   // Checking if action was NOT the last button pressed
   if(equationDiv.textContent[equationDiv.textContent.length - 1] !== action && !wasActionLastUsed){
      wasActionLastUsed = true;
      dotUsed = false;

      equationDiv.textContent = equationDiv.textContent + action;
      resultDiv.textContent = equationDiv.textContent;

      switch(action){
         case '+':
   
            break;
         case '-':
   
            break;
         case '*':
   
            break;
         case '/':
   
            break;
         default:
            console.log('Unknown action');
      }
   }

   wasActionLastUsed = true;
}

const equalSignPressed = () => {
   if(equationDiv.textContent[0] === 'N'){
      equationDiv.textContent = equationDiv.textContent + '=NAN';
      resultDiv.textContent = 'NAN';
   }else if(equationDiv.textContent.length === 1 && wasActionLastUsed){
      equationDiv.textContent = '=NAN';
      resultDiv.textContent = 'NAN';
   }else if(wasActionLastUsed){
      
   }else if(wasNumberLastUsed){
      
   }
   
   dotUsed = false;
   wasActionLastUsed = false;
   wasNumberLastUsed = false;
}

const clearPressed = () => {
   dotUsed = false;
   wasActionLastUsed = false;
   wasNumberLastUsed = false;

   equationDiv.textContent = '';
   resultDiv.textContent = 0;
}

window.addEventListener('DOMContentLoaded', () => {
   equationDiv.textContent = '';
   resultDiv.textContent = 0;

   keyboardBtnsArr.forEach(btn => {
      if(btn.classList.contains('dot-btn')){
         btn.addEventListener('click', dotPressed);
      }else if(btn.classList.contains('primary')){
         btn.addEventListener('click', () => numberPressed(btn.textContent));
      }else if(btn.classList.contains('secondary')){
         btn.addEventListener('click', () => actionPressed(btn.textContent));
      }else if(btn.classList.contains('blue')){
         btn.addEventListener('click', equalSignPressed);
      }else if(btn.classList.contains('red')){
         btn.addEventListener('click', clearPressed);
      }else{
         console.log('Something\'s wrong with the classes');
      }
   });

});
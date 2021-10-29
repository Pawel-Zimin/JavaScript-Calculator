const equationDiv = document.querySelector('.equation');
const resultDiv = document.querySelector('.result');

const keyboardBtns = document.querySelectorAll('.keyboard-btn');
const keyboardBtnsArr = [...keyboardBtns];

const dotPressed = () => {


   console.log('Dot button was pressed');
}

const numberPressed = (number) => {
   // equationDiv.textContent += number;
   // resultDiv.textContent += number;

   console.log(`${number} was pressed`);
}

const actionPressed = () => {


   console.log('Action was pressed');
}

const equalSignPressed = () => {


   console.log('Equal sign was pressed');
}

const clearPressed = () => {


   console.log('Clear button was pressed');
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
         btn.addEventListener('click', actionPressed);
      }else if(btn.classList.contains('blue')){
         btn.addEventListener('click', equalSignPressed);
      }else if(btn.classList.contains('red')){
         btn.addEventListener('click', clearPressed);
      }else{
         console.log('Something\'s wrong with the classes');
      }
   });

});
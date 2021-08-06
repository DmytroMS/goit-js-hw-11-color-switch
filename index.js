const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const refs = {
    startButton: document.querySelector('[data-action="start"]'),
    stopButton: document.querySelector('button[data-action="stop"]')
}

// генератор случайных чисел 

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// функция смены темы 

let intervalId = null;
function changeColor () {

    intervalId = setInterval(() => {
        let colorsNumber = colors[randomIntegerFromInterval(0, colors.length - 1)];      
        document.body.style.backgroundColor = colorsNumber;
        refs.startButton.setAttribute("disabled", "disabled");
        // console.log(colorsNumber);
         
  }, 1000);
   
};

// оставнока смены темы 

function stopChangeColor() {
    clearInterval(intervalId);
    refs.startButton.removeAttribute("disabled");
}


refs.startButton.addEventListener("click", changeColor);
refs.stopButton.addEventListener("click", stopChangeColor);

 

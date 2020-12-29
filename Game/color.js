//getting the words by ID
const word1 = document.getElementById('word1');
const word2 = document.getElementById('word2');
 //getting start button by ID
const start = document.getElementById('start');
//start onclick to start playing;
start.onclick = startPlaying
//getting the boxes --- and on click calling checkMatch
const boxes = document.querySelectorAll('.colorbox');

//the scourCouner
let scoreCounter = 0;
let tries = 0;





 const colorsArray = ['Blue', 'Green', 'Red' , 'Yellow','Blue', 'Green', 'Red' , 'Yellow']

 //function that play the game
function startPlaying(){
    changeWords()
    startTimer()
    boxes.forEach((ele)=>{
        ele.addEventListener('click', checkMatch) ; 
    })
    tries =0;
    scoreCounter=0;


};

// shuffle words 
function changeWords(){
    let randomNumber = Math.ceil(Math.random()*5)
    word1.style.color = colorsArray[randomNumber];
    word2.style.color = colorsArray[randomNumber+1];

// adding color text to display
word1.innerText = colorsArray[randomNumber+2];
word2.innerText = colorsArray[randomNumber];};

//check Match --- 
function checkMatch(val){
    //getting pressed box color name
    let currentBoxValue = val.target.id.toString()

    //getting words values
    let colorOfWord1 = word1.style.getPropertyValue('color').toString();
    let colorOfWord2 = word2.style.getPropertyValue('color').toString();
    let textWord1 = word1.innerText.toString();
    let textWord2 = word2.innerText.toString();
    
if (colorOfWord1 === currentBoxValue) { scoreCounter++ ; 
    
 }

setTimeout(changeWords,100)
tries++

document.getElementById('tries').innerText = tries;
let stateOnButton = document.getElementById('okbutton');
let scoreBytires = Math.ceil(scoreCounter/tries*100);
if (tries < '8' || scoreBytires < '50'){stateOnButton.innerText = "POOR! Try agin";
console.log(tries, scoreBytires)
} else 
if (scoreBytires < 80) {
    stateOnButton.innerText = "Good! try again"}
     else 
     {stateOnButton.innerText = 'Excellent!'}


document.getElementById('yourscore').innerText = `${scoreBytires}%`;
};

let time = 0;

function startTimer(){
    timer()
int =  setInterval(timer, 1000);

};


function timer (){
   
    if (time < 15) {time ++} else {
        //alert('Game Over');
        clearInterval(int);
        time =0;        
        boxes.forEach((ele)=>{
            ele.removeEventListener('click', checkMatch) ; 

        });
        
        document.getElementById('timeOutDiv').classList.remove('hidden');
        
    
    } 

    document.getElementById('counter').innerText = time;
    
}

document.getElementById('okbutton').onclick = ()=>{
    document.getElementById('timeOutDiv').classList.add('hidden');
    
}








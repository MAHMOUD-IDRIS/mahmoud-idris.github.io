const boxes = document.querySelectorAll('.colorbox');
const counter = document.getElementById('counter');
const start = document.getElementById('start');

let word1 = document.getElementById('word1');
    let word2 = document.getElementById('word2');
    const colors = ['Blue','Blue', 'Red', 'Green', 'Yellow'];

    word1.innerText = colors[0]
    word1.style.color = colors[1]
    word2.innerText = colors[1]
    word2.style.color = colors[0]





function play (wordd,i){
       
}

function timer (){
    let time = 0;
    time++ 
    console.log(time)
}


let time = 0;
 let int;

function plaay(){
    timer()
int =  setInterval(timer, 1000);

}
function timer (){
   
    if (time < 5) {time ++} else {
        alert('Game Over');
        clearInterval(int);
        time =0;
        changewords();
    } 
    counter.innerText = time
}

start.onclick = plaay; 

function changewords(){ 
    
let random = Math.floor(Math.random()*4)
    word1.innerText = colors[random]
    word1.style.color = colors[random+1]
    word2.innerText = colors[random+1]
    word2.style.color = colors[random]
}
boxes.forEach((el)=>{
el.onclick = checkmatch
})
function checkmatch(event){
    let element = event.target.getAttribute('value');
    let word1color = word1.style.getPropertyValue('color')
    let word2color = word2.style.getPropertyValue('color')

    let word1text = word1.innerText;
    let word2text = word2.innerText;
    console.log(element)
    console.log(word1color + " : " + word1text);
    console.log(word2color + " : " + word2text)
    
    let case1 = word1color === word2text;
    let case2 = word1color === word2color;
    let check = element === word1color || element == word2color || element == word2text || element == word1text;
    
    let checking = case1 && check;
    let checking2 =  case2 && check;
    console.log(checking2 , checking);

    if (checking || checking2){ alert('how come')};

    //changewords()
} 


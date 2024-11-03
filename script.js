let score = 0;
let order = {};
let flippedCards = [];
let flippedIdNums = [];
let numOfFlippedCards = 0;
let pairedCards = 0;
let scoreMessage;

function initialize(){
    scoreMessage = document.getElementById('scoreOut');
    const cards = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"];
    const track = [];
    for(let i = 0; i < cards.length; i ++){
        let idNum = Math.floor(Math.random() * 16) + 1;
        if(!isInList(track, idNum)){
            track.push(idNum);
            order[idNum] = cards[i];
        }else{
            i --;
        }
    }
}

const isInList = (list, num) =>{
    for(let i = 0; i < list.length; i ++){
        if(list[i] === num){
            return true;
        }
    }
    return false;
}

function changeImage(idNum){
    if(numOfFlippedCards < 2 && !isInList(flippedIdNums, idNum)){
        changeScore();
        let image = "assets/" + order[idNum];
        document.getElementById('img' + idNum).src = image;
        numOfFlippedCards ++;
        flippedCards.push(image);
        flippedIdNums.push(idNum);
    }
    if(flippedCards.length === 2){
        checkImage();
    }
}

const changeScore = () =>{
    score ++;
    scoreMessage.innerHTML = `Score: ${score}`;
}

function checkImage(){
    if(flippedCards[0] !== flippedCards[1]){
        setTimeout(function(){
            document.getElementById('img' + flippedIdNums[0]).src = "assets/back.png";
            document.getElementById('img' + flippedIdNums[1]).src = "assets/back.png";
            numOfFlippedCards = 0;
            flippedCards = [];
            flippedIdNums = [];
        }, 1000)
    }else{
        pairedCards += 2;
        numOfFlippedCards = 0;
        flippedCards = [];
        flippedIdNums = [];
    }
    if(pairedCards === 16){
        finalMessage();
        numOfFlippedCards = 2;
    }
}

const finalMessage = () =>{
    let result = (score === 16) ? `Your score was ${score}. HOW???`: (score < 40) ? `Your score was ${score}. Good try.`: `Your score was ${score}. Better luck next time.`;
    scoreMessage.innerHTML = result;
}

const reset = () =>{
    score = 0;
    order = {};
    flippedCards = [];
    flippedIdNums = [];
    numOfFlippedCards = 0;
    scoreMessage.innerHTML = `Score: ${score}`;
    pairedCards = 0;
    for(let i = 1; i <= 16; i ++){
        document.getElementById('img' + i).src = "assets/back.png";
    }
    initialize();
}

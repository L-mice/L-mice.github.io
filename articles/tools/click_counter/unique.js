const HIGH_SCORE_ID = "Click Counter Highscore";

const countTime = 3000;
const counterId = "counter";

let counter;

const countList = [];
let counting = false;
let highscore;

(function(){
    highscore = localStorage.getItem(HIGH_SCORE_ID);
    if(!highscore instanceof String) highscore = 0;
    else highscore = Number(highscore);

    counter = document.getElementById(counterId);
    counter.onclick = function(){
        if(!counting){
            counting = true;
            countList.push(0);
            setTimeout(function(){
                counting = false;

                let clicks = countList[countList.length -1];
                let sec = countTime/1000;
                let score = Math.floor((clicks/sec)*100)/100;

                if(score > highscore) localStorage.setItem(HIGH_SCORE_ID, (highscore = score));

                let d = makeDialogue(`count-${countList.length}`);
                document.body.insertAdjacentElement("afterbegin", d.getDialogue());
                d.setTitle("Your score");
                d.setMessage(`This time, you clicked ${clicks} times in ${sec} seconds. <br> This is ${score} clicks per 1 second.<br><br> Your highest score is ${highscore}/s.`);
                
                counter.innerText = "Click";               
            }, countTime);
        }
        countList[countList.length -1]++;
        counter.innerText = countList[countList.length -1];
    };
})();

const HIGH_SCORE_ID = "Click Counter Highscore";

const countTime = 10000;
const filterId = "click_filter";
const displayId = "count";

let display;
let filter;

const countList = [];
let counting = false;
let highscore;

(function(){
    highscore = localStorage.getItem(HIGH_SCORE_ID);
    if(!highscore instanceof String) highscore = 0;
    else highscore = Number(highscore);

    display = document.getElementById(displayId);
    filter = document.getElementById(filterId);
    filter.onclick = function(){
        if(!counting){
            countList.push(0);
            setTimeout(function(){
                counting = false;

                let clicks = countList[countList.length -1];
                let sec = countTime/1000;

                let d = makeDialogue(`count-${countList.length}`);
                d.setTitle("Your score");
                d.setMessage(`This time, you clicked ${clicks} times in ${sec} seconds. <br> This is ${clicks/sec} clicks per 1 second.<br><br> Your highest score is ${highscore}/s.`);
                document.body.insertAdjacentElement("afterbegin", d.getDialogue());

                if(clicks/sec > highscore){
                    highscore = clicks/sec;
                    localStorage.setItem(HIGH_SCORE_ID, clicks/sec);
                }
            }, countTime);
        }
        countList[countList.length -1]++;
        display.innerText = countList[countList.length -1];
    };
})();

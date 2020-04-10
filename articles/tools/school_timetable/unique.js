let subjects;
let timetable;
let classtime;

let date;

let pBtn;
let nBtn;
let dateDisplay;

(function(){
    date = new Date();

    pBtn = document.getElementById("previousBtn");
    pBtn.onclick = function(){
        toPreviousday();
    };
    nBtn = document.getElementById("nextBtn");
    nBtn.onclick = function(){
        toNextday();
    };
    dateDisplay = document.getElementById("dateDisplay");
    dateDisplay.innerText = date.toString();

    //config button
    let confBtn = document.createElement("div");
    confBtn.classList.add("floatBtn");
    confBtn.onclick = function(){
        location.href = "config";
    };

    let icon = document.createElement("img");
    icon.src = "/images/gear.png";
    icon.classList.add("btnIcon");
    confBtn.appendChild(icon);

    document.body.insertAdjacentElement("afterbegin", confBtn);

    timetableDataSetup();
    timetableBuild(true);
})();

function timetableDataSetup(){
    subjects = getSubjectList();
    timetable = getTimetable();
    classtime = getClassTime(); 
}

function timetableDataSave(){
    setSubjectList(subjects);
    setTimeTable(timetable);
    setClassTime(classtime);
}

function timetableBuild(next){
    let day = date.getDay();
    let classes = timetable[day] || [];

    let aaaa = next ? "nextday" : "previousday";
    let bbbb = !next ? "nextday" : "previousday";

    let table = document.getElementById("table");
    let listItem = table.children;

    for(let k = 0; k < listItem.length; k++){
        listItem[k].classList.add(bbbb);
        setTimeout(function(){
            listItem[k].remove();
        }, 600);
    }

    for(let k = 0; k < classtime.length; k++){
        let subject = subjects[classes[k]];
        let item = createTableItem(subject, k);
        item.classList.add(aaaa);
        setTimeout(function(){
            item.classList.remove(aaaa);
        }, 300*(k+1));

        table.appendChild(item);
    }
}

function toNextday(){
    date.setDate(date.getDate()+1);
    dateDisplay.innerText = date.toString();
    timetableBuild(true);
}

function toPreviousday(){
    date.setDate(date.getDate()-1);
    dateDisplay.innerText = date.toString();
    timetableBuild(false);
}

function createTableItem(subject, time){
    let back = document.createElement("div");
    back.classList.add("item");

    let start  = classtime[time].start;
    let end = classtime[time].end;
    let sub = subject.name;
    time++;

    let inside = document.createElement("div");
    inside.classList.add("inside");
    inside.style.color = subject.colour;
    inside.innerText = ` ${time} ${start} - ${end} | ${sub}`;

    back.appendChild(inside);

    return back;
}
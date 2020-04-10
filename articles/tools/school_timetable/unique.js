let subjects;
let timetable;
let classtime;


let tableitems = [];

let date;

(function(){
    date = new Date();

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
    timetableBuild();
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

function timetableBuild(){
    let day = date.getDay();

    let classes = timetable[day] || [];

    let table = document.getElementById("table");
    for(let k = 0; k < classtime.length; k++){
        let subject = subjects[classes[k]];
        let item = createTableItem(subject, k);
        item.classList.add("previousday");
        setTimeout(function(){
            item.classList.remove("previousday");
        }, 300*(k+1));

        tableitems.push(item);
        table.appendChild(item);
    }
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
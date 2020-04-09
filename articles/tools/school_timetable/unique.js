let subjects;
let timetable;
let classtime;


let tableitems = [];

(function(){
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
    subjects = JSON.parse(localStorage.getItem(subject_list_name)) || [];
    timetable = JSON.parse(localStorage.getItem(timetable_name)) || [[],[],[],[],[],[],[]];
    classtime = JSON.parse(localStorage.getItem(classtime_list_name)) || [];    
}

function timetableDataSave(){
    localStorage.setItem(subject_list_name, JSON.stringify(subjects));
    localStorage.setItem(timetable_name, JSON.stringify(timetable));
    localStorage.setItem(classtime_list_name, JSON.stringify(classtime));
}

function timetableBuild(){
    let date = new Date();
    let day = date.getDay();

    let classes = timetable[day] || [];

    let table = document.getElementById("table");
    for(let k = 0; k < classes.length; k++){
        let subject = subjects[classes[k]];
        let item = createTableItem(subject, k);
        item.classList.add("nextday");
        setTimeout(function(){
            item.classList.remove("nextday");
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
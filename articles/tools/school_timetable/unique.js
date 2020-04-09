const subject_list_name = "Class Subjects";
const timetable_name = "School Time Table";
const classtime_list_name = "Class Time List";

let subjects;
/*
    [
        {
            name: "subject name",
            background: "table item background for this subject"
        }
    ]
*/

let timetable;
/*
    timetable[sunday, monday, - , saturday]
    [
        [
            0,  //index of subject
            2,
            5,
        ]
    ]
*/

let classtime;
/*
    [
        {
            start: "8:50",
            end: "9:40"
        }
    ]
*/

let tableitems = [];

(function(){
    timetableDataSetup();
    timetableBuild();
})();

function timetableDataSetup(){
    subjects = JSON.parse(localStorage.getItem(subject_list_name)) || [];
    timetable = JSON.parse(localStorage.getItem(stimetable_name)) || [];
    classtime = JSON.parse(localStorage.getItem(sclasstime_list_name)) || [];    
}

function timetableDataSave(){
    localStorage.setItem(JSON.stringify(subject_list_name), subjects);
    localStorage.setItem(JSON.stringify(timetable_name), timetable);
    localStorage.setItem(JSON.stringify(classtime_list_name), classtime);
}

function timetableBuild(){
    let date = new Date();
    let day = date.getDay();

    let classes = timetable[day];

    for(let k = 0; k < classes.length; k++){
        let subject = subjects[classes[k]];
        let item = createTableItem(subject, k);
        item.classList.add("nextday");
        setTimeout(function(){
            item.classList.remove("nextday")
        }, 50);

        tableitems.push(item);
    }
}

function createTableItem(subject, time){
    let back = document.createElement("div");
    back.classList.add("item");
    back.style.background = subject.background;

    let start  = classtime[time].start;
    let end = classtime[time].end;
    let sub = subject.name;

    let inside = document.createElement("div");
    inside.classList.add("inside");
    inside.innerText = ` ${time} ${start} - ${end} | ${sub}`;

    back.appendChild(inside);

    return back;
}
const subject_list_name = "Class Subjects";
/*
    [
        {
            name: "subject name",
            colour: "colour for this subject"
        }
    ]
*/

const timetable_name = "School Time Table";
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

const classtime_list_name = "Class Time List";
/*
    [
        {
            start: "8:50",
            end: "9:40"
        }
    ]
*/


function makeSubjectProfile(name = "New Subject", colour = "#000000", classroom = "", teacher = ""){
    return {
        name: name,
        colour: colour,
        classroom: classroom,
        teacher: teacher
    };
}

function getSubjectList(){
    return (JSON.parse(localStorage.getItem(subject_list_name)) || [makeSubjectProfile("No class")]);
}

function setSubjectList(subjects){
    localStorage.setItem(subject_list_name, JSON.stringify(subjects));
}

function addSubject(subject){
    let subjects = getSubjectList();
    let index = subjects.indexOf(subject); 
    if(index == -1) subjects.push(subject);

    return index;
}



function getTimetable(){
    return (JSON.parse(localStorage.getItem(timetable_name) || (new Array(7)).fill((new Array(getClassTime().length)).fill(0)) ));
}

function setTimetable(timetable){
    localStorage.setItem(timetable_name, JSON.stringify(timetable));
}


function makeClassTimeProfile(start, end){
    return {
        start: start,
        end: end
    };
}

function getClassTime(){
    return (JSON.parse(localStorage.getItem(classtime_list_name)) || []);
}

function setClassTime(classtimelist){
    localStorage.setItem(classtime_list_name, JSON.stringify(classtimelist));
}


function resetData(){
    localStorage.removeItem(subject_list_name);
    localStorage.removeItem(timetable_name);
    localStorage.removeItem(classtime_list_name);
}
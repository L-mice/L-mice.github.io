const subject_list_name = "Class Subjects";
const timetable_name = "School Time Table";
const classtime_list_name = "Class Time List";

let subjects;
let timetable;
let classtime;

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
}
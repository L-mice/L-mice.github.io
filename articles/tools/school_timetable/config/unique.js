const backBtnId = "backBtn";
const editSubjectBtnId = "editSubjectBtn";
const editTimeBtnId = "editTimeBtn";
const editTimeTableBtnId = "editTimetableBtn";

const editSubjectLabelId = "editSubjectLabel";
const editTimeLabelId = "editTimeLabel";
const editTimetableLabelId = "editTimetableLabel";

const editSubjectId = "subjectEditor";
const editTimeId = "timeEditor";
const editTimeTableId = "timetableEditor";

const editSubjectClass = "editSubject";
const editTimeClass = "editTime";
const editTimeTableClass = "editTimetable";

const editorId = "editor";

const selectedId = "selected";

let backBtn;
let editor;
let editSubjectBtn;
let editTimeBtn;
let editTimetableBtn;

let editSubjectLabel;
let editTimeLabel;
let editTimetableLabel;


(function(){
    backBtn = document.getElementById(backBtnId);
    backBtn.onclick = function(){
        location.href = "../";
    };

    editor = document.getElementById(editorId);

    editSubjectBtn = document.getElementById(editSubjectBtnId);
    editSubjectBtn.onclick = function(){
        editor.classList.add(editSubjectClass);
        editor.classList.remove(editTimeClass);
        editor.classList.remove(editTimeTableClass);

        editSubjectLabel.classList.add(selectedId);
        editTimeLabel.classList.remove(selectedId);
        editTimeTableLabel.classList.remove(selectedId);
    };

    editTimeBtn = document.getElementById(editTimeBtnId);
    editTimeBtn.onclick = function(){
        editor.classList.remove(editSubjectClass);
        editor.classList.add(editTimeClass);
        editor.classList.remove(editTimeTableClass);

        editSubjectLabel.classList.remove(selectedId);
        editTimeLabel.classList.add(selectedId);
        editTimetableLabel.classList.remove(selectedId);
    };

    editTimeTableBtn = document.getElementById(editTimeTableBtnId);
    editTimeTableBtn.onclick = function(){
        editor.classList.remove(editSubjectClass);
        editor.classList.remove(editTimeClass);
        editor.classList.add(editTimeTableClass);

        editSubjectLabel.classList.remove(selectedId);
        editTimeLabel.classList.remove(selectedId);
        editTimetableLabel.classList.add(selectedId);
    };

    editSubjectLabel = document.getElementById(editSubjectLabelId);
    editTimeLabel = document.getElementById(editTimeLabelId);
    editTimetableLabel = document.getElementById(editTimetableLabelId);
})();
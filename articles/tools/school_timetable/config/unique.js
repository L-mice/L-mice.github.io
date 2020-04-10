const backBtnId = "backBtn";
const editSubjectBtnId = "editSubjectBtn";
const editTimeBtnId = "editTimeBtn";
const editTimeTableBtnId = "editTimetableBtn";

const editSubjectId = "subjectEditor";
const editTimeId = "timeEditor";
const editTimeTableId = "timetableEditor";

const editSubjectClass = "editSubject";
const editTimeClass = "editTime";
const editTimeTableClass = "editTimeTable";

const editorId = "editor";

const selectedId = "selected";

let backBtn;
let editor;
let editSubjectBtn;
let editTimeBtn;
let editTimetableBtn;


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

        editSubjectBtn.classList.add(selectedId);
        editTimeBtn.classList.remove(selectedId);
        editTimeTableBtn.classList.remove(selectedId);
    };

    editTimeBtn = document.getElementById(editTimeBtnId);
    editTimeBtn.onclick = function(){
        editor.classList.remove(editSubjectClass);
        editor.classList.add(editTimeClass);
        editor.classList.remove(editTimeTableClass);

        editSubjectBtn.classList.remove(selectedId);
        editTimeBtn.classList.add(selectedId);
        editTimeTableBtn.classList.remove(selectedId);
    };

    editTimeTableBtn = document.getElementById(editTimeTableBtnId);
    editTimeTableBtn.onclick = function(){
        editor.classList.remove(editSubjectClass);
        editor.classList.remove(editTimeClass);
        editor.classList.add(editTimeTableClass);

        editSubjectBtn.classList.remove(selectedId);
        editTimeBtn.classList.remove(selectedId);
        editTimeTableBtn.classList.add(selectedId);
    };
})();
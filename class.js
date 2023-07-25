const classesForm = document.getElementById('classesForm');
const classTakenContainer = document.querySelector('.classTaken');
const studentClassInput = classesForm['studentClass'];
const teacherEmailInput = classesForm['teacherEmail'];
const dayInput = classesForm['day'];
const startTimeInput = classesForm['startTime'];
const finishTimeInput = classesForm['finishTime'];

const classTaken = JSON.parse(localStorage.getItem("classTaken")) || [];
	
const submitClass = (studentClass, teacherEmail, day, startTime, finishTime) => {
	classTaken.push({
		studentClass,
		teacherEmail,
		day,
		startTime,
		finishTime,
	});
	
	localStorage.setItem("classTaken", JSON.stringify(classTaken));
	
	return { studentClass, teacherEmail, day, startTime, finishTime }
}

const createClassElement = () => {
	
	//create elements
	const classTakenDiv = document.createElement('div');
	const pStudentClass = document.createElement('h5');
	const pTeacherEmail = document.createElement ('p');
	const pDay = document.createElement ('p');
	const pStartTime = document.createElement ('p');
	const pFinishTime = document.createElement ('p');
	
	//fill the content
	pStudentClass.innerHTML = "" + studentClass;
	pTeacherEmail.innerHTML = "" + teacherEmail;
	pDay.innerHTML = "" + day;
	pStartTime.innerHTML = "" + startTime;
	pFinishTime.innerHTML = "" + finishTime;
	
	//add to the DOM
	classTakenDiv.append(pStudentClass, pTeacherEmail, pDay, pStartTime, pFinishTime);
	classTakenContainer.appendChild(classTakenDiv);
	
	classTakenContainer.style.display = classTaken.length === 0 ? "none" : "flex";
}

classTakenContainer.style.display = classTaken.length === 0 ? "none" : "flex";

classTaken.forEach(createClassElement);

classesForm.onsubmit = e => {
	e.preventDefault();
	
	const newClass = submitClass(
	studentClassInput.value,
	teacherEmailInput.value,
	dayInput.value,
	startTimeInput.value,
	finishTimeInput.value
	);
	
	createClassElement(newClass);
	
	studentClass.value = "";
	teacherEmailInput.value = "";
	dayInput.value = "";
	startTimeInput.value = "";
	finishTimeInput.value = "";
}
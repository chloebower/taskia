function handleSubmit(){
	const myText = document.getElementById('myText').value;
	sessionStorage.setItem("NAME", myText);
	return;
}
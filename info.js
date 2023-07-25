window.addEventListener('load', () => {
	const myText = sessionStorage.getItem('NAME');
	document.getElementById('result-name').innerHTML = myText;
})
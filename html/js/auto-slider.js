const activeItemClass = 'slider-img-active';
const nextItem = document.getElementById('slider-next');
const previousItem = document.getElementById('slider-prev');
const slides = document.getElementsByClassName('slider-img');

var index = 0;
var intervalId = -1;
var switchDelay = 5000;

//document.addEventListener('keydown', keyDown);


function nextSlide() {
	let started = stopPresentation();
	slides[index].classList.remove(activeItemClass);

	if(index < slides.length - 1){
		index++;
	} else{
		index = 0;
	}

	slides[index].classList.add(activeItemClass);
	if(started) startPresentation(switchDelay);
}
function prevSlide() {
	let started = stopPresentation();
	slides[index].classList.remove(activeItemClass);

	if(index > 0){
		index--;
	} else{
		index = slides.length - 1;
	}

	slides[index].classList.add(activeItemClass);
	console.log(index);
	if(started) startPresentation(switchDelay);
}

function keyDown(e) {
	e = e || window.event;
	
	if (e.keyCode == '37'){
		prevSlide();
	} else if (e.keyCode == '39'){
		nextSlide();
	}
}

function startPresentation(delay) {
	if(intervalId == -1){
		intervalId = setInterval('nextSlide()', delay);
		return intervalId;
	}
	else console.log('Presentation has been already started');
	return -1;
}
function stopPresentation() {
	if(intervalId == -1) console.log('Presentation has been already stopped');
	else{
		clearInterval(intervalId);
		intervalId = -1;
		return true;
	}
	return false;
}
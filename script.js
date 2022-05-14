//SMOOTH SCROLL

var navMenuAnchorTags = document.querySelectorAll('#nav-bar li a');
var interval;

for(var i=0; i< navMenuAnchorTags.length; i++) {

navMenuAnchorTags[i].addEventListener('click', function(event){
	event.preventDefault();

var TargetSectionID = this.textContent.trim();

var TargetSection = document.getElementById(TargetSectionID);

interval = setInterval(scrollVertically, 12, TargetSection);
});

}

function scrollVertically(TargetSection){
var TargetSectionCoordinates = TargetSection.getBoundingClientRect();
		if(TargetSectionCoordinates.top <= 0)
		{  
			clearInterval(interval);
			return; 
		}
	window.scrollBy(0, 20);
}



// SKILL BAR

var progressBars = document.querySelectorAll('.skill-progress div');

var SkillsContainer = document.getElementById('skills-container');

window.addEventListener('scroll', checkScroll);

var animationDone = false;

function initialiseBars() {
	for( let bar of progressBars){
		bar.style.width = 0 + "%";
	}
}

initialiseBars();

function fillBars(){

	for(let bar of progressBars){

		let targetWidth = bar.getAttribute('data-bar-width');
		let currentWidth = 0; 
		let interval = setInterval(function(){

			if(currentWidth > targetWidth)
			{
				clearInterval(interval);
				return;
			}
				currentWidth++;
				bar.style.width = currentWidth + '%';

		}, 10);
		
	}
}


function checkScroll() {
	
	var SkillsContainerCoordinates = SkillsContainer.getBoundingClientRect();
	if (!animationDone && SkillsContainerCoordinates.top <= window.innerHeight) {
				animationDone = true;
				fillBars();
			}
	else if (SkillsContainerCoordinates.top > window.innerHeight) {
				animationDone = false;
				initialiseBars();
	}
}




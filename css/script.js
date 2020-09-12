const checkboxes = document.querySelectorAll('.inbox input[ type="checkbox"]');

let lastChecked;

function handleCheck(e) {
	// Check if they had the shift key pressed
	//AND check that they are checking the checkbox
	
	let inBetween = false;
	
	if(e.shiftKey && this.checked) {
		//go ahead and do what we ask
		//loop over every single checkbox
		checkboxes.forEach(checkbox => {
		console.log(checkbox);
		if(checkbox === this || checkbox === lastChecked){
		inBetween = !inBetween;
		console.log('Checking the inBetween');
		}
		if(inBetween) {
			checkbox.checked = true;
		}
	});
}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
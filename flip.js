function flip(event){
	//console.log("reach")
	//console.log(event.currentTarget)
	var element = event.currentTarget;
	//console.log(element.className)

	if (element.className === "col" || element.className === "col white-text") {
		//console.log('reach')
		if(element.style.transform == "rotateY(180deg)") {
			element.style.transform = "rotateY(0deg)";
		}
		else {
			element.style.transform = "rotateY(180deg)";
		}
	}
}
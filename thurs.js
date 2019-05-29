function thursday() {
	// get the current time
	var now = new Date()
	// get the current day of the week
	// 0 is sunday, 6 is saturday (silly americans)
	var weekday = now.getDay();

	var message;
	if (weekday === 4) {
		// if today is thursday, say so
		message = "Yes."
	} else if (weekday === 3 || weekday === 2) {
		// tuesday and wednesday are close enough
		message = "Almost...";
	} else {
		message = "No.";
	}

	// set text
	document.getElementById("indicator").textContent = message;
}

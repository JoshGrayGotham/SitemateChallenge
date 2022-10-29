function loadModal(msg) {
	openPopup(msg);
}

function loadHome() {
	document.getElementById("popupButton").addEventListener("click", function() {
		loadModal("Are you sure you want to continue?")
	}, false);
	document.getElementById("popupYesButton").addEventListener("click", function() {
	    closePopup("Yes");
	}, false);
	document.getElementById("popupNoButton").addEventListener("click", function() {
	    closePopup("Cancel");
	}, false);	
}
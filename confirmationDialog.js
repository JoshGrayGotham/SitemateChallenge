var response;

function togglePopup() {
	document.getElementById("confirmationModal").classList.toggle("show-modal");
}

function openPopup(msg) {
	document.getElementById("dialogText").textContent = msg;
	togglePopup();
}

function closePopup(msg) {
	togglePopup();
	response = msg;
}

function returnResponse() {
	return response;
}

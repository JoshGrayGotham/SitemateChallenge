function togglePopup() {
	document.getElementById("confirmation-modal").classList.toggle("show-modal");
}

function openPopup(msg) {
	document.getElementById("dialogText").textContent = msg;
	togglePopup();
}

function closePopup(msg) {
	togglePopup();
	return msg;
}

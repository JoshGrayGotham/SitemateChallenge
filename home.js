function loadModal(msg) {
	openPopup(msg);
}

function loadHome() {
	document.getElementById("popupButton").addEventListener("click", function() {
		loadModal("Are you sure you want to continue?")
	}, false);
	document.getElementById("popupButton2").addEventListener("click", function() {
		loadModal("Do you like this message?")
	}, false);
	document.getElementById("popupYesButton").addEventListener("click", function() {
	    closePopup("Yes");
	}, false);
	document.getElementById("popupNoButton").addEventListener("click", function() {
	    closePopup("Cancel");
	}, false);	
	observer.observe(document.getElementById("confirmationModal"), options)
}

function watcher(mutationList, observer) {
  mutationList.forEach(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
     	if(!mutation.target.classList.contains('show-modal')) {
			document.getElementById("displayText").textContent = "You just clicked \"" + returnResponse() + "\".";
     	}
    }
  })
}

const observer = new MutationObserver(watcher);
const options = {
	attributes: true
};
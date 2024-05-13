let selectedText; // On déclare la variable pour que le scope soit bon

let speech = new SpeechSynthesisUtterance("fr-FR", "1.2");
speech.lang = "fr-FR";
speech.rate = 1.2;


function getSelectedText() {
	let selection = window.getSelection(); // Obtenir le texte sélectionné
	if (selection.rangeCount > 0) { // Si il y a quelque chose
		let range = selection.getRangeAt(0); // Dire que la selection commence à partir du début 
		selectedText = range.toString(); // Convertir en chaine de caractères
	}
}

document.addEventListener('keydown', async function (event) {
	if ((event.ctrlKey || event.metaKey) && event.key === 'm') { // Vérifie que ctrl + m sont enfoncés
		await getSelectedText(); // Pour que get SelectedText soit activé
		console.log(selectedText); // Afficher le texte
		await sendTextToBackground(selectedText); // Active la fonction sendTextToBackground
	}
});


function sendTextToBackground(text) {
	// chrome.runtime.sendMessage({ action: "sendText", text: text }); // Communique le texte sélectionné à background.js
	speech.text = text; // Le texte sélectionné est lu directement par l'api du navigateur
	window.speechSynthesis.speak(speech);
}

chrome.runtime.onMessage.addListener((message) => {
	if (message.command === "pause") {
		window.speechSynthesis.pause();
		console.log("Pause");
	} else if (message.command === "resume") {
		window.speechSynthesis.resume();
		console.log("Resume");
	} else if (message.command === "cancel") {
		window.speechSynthesis.cancel();
		console.log("Stop");
	}
});













  
  


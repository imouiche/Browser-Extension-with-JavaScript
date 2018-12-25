console.log("Background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
	console.log(tab);
	let msg = {
		txt: "hello"
	};
	//chrome API to send message to tabs
	chrome.tabs.sendMessage(tab.id, msg);
}
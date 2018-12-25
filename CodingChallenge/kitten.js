console.log("kitten of the world, unite as one");

let filenames  = [
				"kitten1.jpg",
				"kitten2.jpg",
				"kitten3.jpg",
				"kitten4.jpg",
				"kitten5.jpg"
			];

let imgs = document.getElementsByTagName('img');

for (imgElt of imgs){
	let r = Math.floor(Math.random()*filenames.length);
	let file = 'kittens/' + filenames[r];
	let url = chrome.extension.getURL(file);
	imgElt.src = url;
	console.log(url);
}
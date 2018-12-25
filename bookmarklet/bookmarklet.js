(function(){
	console.log("bookmarklet");
	let paragraphs = document.getElementsByTagName('p');
	for(let i=0; i<paragraphs.length; i++){
		paragraphs[i].innerHTML = 'Nsangou';
	}
})();

/* add script element to the webpage that will change 
the source code to point/run our code

*/
//(function(){let script = document.createElement('script');script.src = 'bookmarklet.js';document.body.appendChild(script);})()

// change the background color of all elts on the webpage
/*
var elts = document.getElementsByTagName('p');
for (var i = 0; i < elts.length; i++) {
  elts[i].style['background-color'] = '#F0C';
}
*/
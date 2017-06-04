document.getElementById("box").addEventListener("click", function(){
	document.getElementById("instructions").style.display = "none";

	var a = Math.floor(Math.random() * 74);
	var b = data[a]["words"];
	var c = "\x2D " + data[a]["speaker"];

	if (document.getElementById("quote").lastChild){
		document.getElementById("quote").removeChild(document.getElementById("quote").lastChild);
	}
	if (document.getElementById("quoted").lastChild){
		document.getElementById("quoted").removeChild(document.getElementById("quoted").lastChild);
	}
	document.getElementById("quote").appendChild(document.createTextNode(b));
	document.getElementById("quoted").appendChild(document.createTextNode(c));

	document.getElementById('frame').src = 'iframe.html';
	document.getElementsByClassName('twitter-share-button')[0].dataText=b+" "+c;
}, false);

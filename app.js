document.getElementById("box").addEventListener("click", function(){
	document.getElementById("instructions").style.display = "none";

	var a = Math.floor(Math.random() * 74);
	var b = data[a]["words"];
	var c = "\x2D " + data[a]["speaker"];
	var tweetdiv = document.getElementById('twtbox');

	if (document.getElementById("quote").lastChild){
		document.getElementById("quote").removeChild(document.getElementById("quote").lastChild);
	}
	if (document.getElementById("quoted").lastChild){
		document.getElementById("quoted").removeChild(document.getElementById("quoted").lastChild);
	}
	document.getElementById("quote").appendChild(document.createTextNode(b));
	document.getElementById("quoted").appendChild(document.createTextNode(c));

	document.getElementById('frame').src = 'iframe.html';

	var myNode = document.getElementById('twtbox');
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }

	var link = document.createElement('a');
	link.setAttribute('href', 'https://twitter.com/share');
	link.setAttribute('class', 'twitter-share-button');
	link.setAttribute('id', 'twitterbutton');
	link.setAttribute('style', 'margin-top:5px;');
	link.setAttribute('data-text', b + " " + c);
	link.setAttribute('data-via', 'rachaelcodes');
	link.setAttribute('data-size', 'large');


	tweetdiv.appendChild(link);

	twttr.widgets.load();
}, false);

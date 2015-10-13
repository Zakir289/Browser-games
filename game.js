(function(){
	var defaultImage = 'backimage.jpeg';
	var newGameButton = 'newgame.jpeg'
	var imgDir = "tilesimages/"
	var tiles = [imgDir+'image1.png',imgDir+'image2.gif',imgDir+'image3.gif',
		imgDir+'image4.gif',imgDir+'image5.jpg',imgDir+'image6.gif',
		imgDir+'image7.jpg',imgDir+'image8.gif',imgDir+'image9.gif',
		imgDir+'image10.gif',imgDir+'image11.gif',imgDir+'image12.gif',
		imgDir+'image13.gif',imgDir+'image14.gif',imgDir+'image15.gif'];

var images = [];
 for (var i = 0; i < 15; i++) {
  	images[i] = new Image();
  	images[i].src = tiles[i];
  	 tiles[i] = '<img src="'+tiles[i]+'" width="60" height="60" alt="tile" \/>';
  	 tiles[i+15] = tiles[i];
  	}

	var hit1, hit2, tileHitCount, lag,cnt=0;

function shuffleArray(){
	tiles.sort(function(){return .5 - Math.random()});
}


	function start() {
		shuffleArray()
 	for (var i = 0; i <= 29 ;i++){
 		displayDefault(i);
	}
		 tileHitCount = 0;
 }

	function show(sel) {
		if (tileHitCount>1) {
			clearTimeout(lag);
			verdict();
		}

		document.getElementById('t'+sel).innerHTML = tiles[sel];
		if (tileHitCount==0) {
			hit1 = sel;
		}
		else {
			hit2 = sel;
			lag = setTimeout(verdict, 900);
		}
		tileHitCount++;
	}

	function verdict() {
		tileHitCount = 0;
		if (tiles[hit1] != tiles[hit2]) {
			displayDefault(hit1);
			displayDefault(hit2);
		}
		else {
			cnt++;
		}
		if (cnt >= 15){
			alert("you win");
		}
	}




	function createPlot(nm) {
 	 	var d = document.createElement('div');
 	 	d.align = 'center';
 	 	var t = document.createElement('table');
 	 	t.cellpadding = 0;t.cellspacing = 0;t.borders = 0;
 	 	t.className = "top75 bottom30"


 	 	for (var a = 0; a <= 5; a++) {
 	 		t.insertRow(a);
 	 		for (var b = 0; b <= 4; b++) {
 	 			t.rows[a].insertCell(b);
 	 			t.rows[a].cells[b].className = 'blk';
 	 			t.rows[a].cells[b].id = 't'+((5*a)+b);
 	 			t.rows[a].cells[b].align = 'center';
 	 		}
 	 		}

 	 		d.appendChild(t);

		var newGameBtn = document.createElement('div');
		newGameBtn.innerHTML= '<img src="'+newGameButton+'"width="150" height="60" alt="New Game" \/>';
		newGameBtn.onclick = start

		d.appendChild(newGameBtn)
 	 		document.getElementById(nm).appendChild(d);


 	 	}


 	 	 function displayDefault(i) {
			document.getElementById('t'+i).innerHTML = '<img src="'+defaultImage+'" width="60" height="60" alt="back" \/>';
			document.getElementById('t'+i).onclick=function(){show(i)};
}



createPlot('container');
start();
})()
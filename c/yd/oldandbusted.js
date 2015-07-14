// Event Actions
		document.addEventListener('click', clicky, false);
		document.getElementById('start').addEventListener('click', audioWind, false);
		document.getElementById('introSong').volume = 0.5;
		document.getElementById('50cal').volume = 0.2;
		document.getElementById('wind').volume = 0.7;
		document.getElementById('dot').style.visibility = 'hidden';
		// document.getElementById('dot').style.top = (Math.floor((Math.random() * 60)) + 30)+"%";
		// document.getElementById('dot').style.left = (Math.floor((Math.random() * 90)))+"%";
		
		if (document.images) {
				var img1 = new Image();
				img1.src = "rio.jpg";
		}
		
		
		var playing = false;
		
		// document.addEventListener('keydown', audioBrrap);
		// document.addEventListener('keypress', audioNuts);
		

		document.onkeydown = function(evt) {
    		evt = evt || window.event;
    		if (evt.keyCode == 66) { //to get a keycode: http://dmauro.github.io/Keypress/ and look for it in the corner
        		var brrap = document.getElementById('horn');
				brrap.load();
				brrap.play();
    		}
    		if (evt.keyCode == 68) {
				var goteen = document.getElementById('nuts');
				goteen.load();
				goteen.play();
			}
			if (evt.keyCode == 32) {
				var hitmarker = document.getElementById('hm');
				hitmarker.load(); 
				hitmarker.play();
			}
		}
	
		// document.addEventListener('click',audioBeep, false);
	 	 var randomtime = Math.floor((Math.random() * 5000)+20000);
		 var wint = null;
		 var wintr = null;
		function startGame() {
			document.body.style.background = "#f3f3f3 url('rio.jpg') no-repeat center center fixed";
			document.body.style.backgroundSize = "cover";
			document.getElementById('menu').style.display = 'none';
			document.getElementById('mission').style.display = 'none';
			document.getElementById('background').style.display = 'none';
			document.getElementById('introSong').pause();
			document.getElementById('link').style.display = 'none';
			document.getElementById('hm').play();
			document.getElementById('bird').play();
			setTimeout(function() { dotlocaton()},1000);
			wint = setTimeout(function() { spooky() }, randomtime);
			wintr = setTimeout(function() { gameover() }, randomtime+6000);
			playing = true;
			
			
		}
		
		function brief(){
			document.getElementById('brief').style.display = 'none';
			document.getElementById('mission').style.display = 'block';
			document.getElementById('hm').play();
		}
		
		function clicky() {
			
			setTimeout(function() { casingdrop() }, 750);
			if (playing) {
				audioShoot();
			} else {
				//TODO
			}
			
		}
		
		function audioShoot() {
			var hitmarker = document.getElementById('hm');
			var triggerfinger = document.getElementById('50cal');
			document.getElementById('casing').play();
			if (triggerfinger.currentTime > 0.7 || triggerfinger.currentTime === 0) {
				triggerfinger.load();
				triggerfinger.play();
			}
		}
		function audioWind(){
			document.getElementById('wind').play();
			
		}
		function audioBrrapLoop(){
				var brraploop = document.getElementById('hornloop');
				brraploop.load();
				brraploop.play();
				alert('commence brraploop')
			
		}
			function audioBird(){
			document.getElementById('bird').play();
		}
		 function audioBeep(){
			var beeper = document.getElementById('hm');
			beeper.load();
			beeper.play();
		}
		 function audioNuts(){
			var goteen = document.getElementById('nuts');
			goteen.load();
			goteen.play();
		}
			
		 function audioNutz(){
			document.getElementById('nutz').play();
			setTimeout(function() { mlgparty()},15000);
		}
		
		function newtabb() {
  			var win = window.open("https://screamy-yung-deb.c9.io/no.html", '_blank');
  			win.focus();
		}
	
		function casingdrop(){
			document.getElementById('casing').play();
		}
		
		function spooky() {
        document.getElementById('dot').style.visibility = 'hidden';
        document.getElementById('spookymusic').load();
        document.getElementById('spookymusic').play();
        document.getElementById('spooky').visibility = 'visible';
        
        setTimeout(function() {blinkId('spooky')}, 0);
	}		// Test Script
	
	
	var ending = null;
	
	function blinkId(id) {
        	
			var i = document.getElementById(id);
			var e = document.getElementById('black');
			if(i.style.visibility=='hidden') {
				i.style.visibility='visible';
				e.style.visibility='hidden';
			} else {
				i.style.visibility='hidden';
				e.style.visibility='visible';
			}
  		  ending = setTimeout("blinkId('"+id+"')",70);
   	}	
   	
   	function gameover(){
   		document.getElementById('spookymusic').pause();
   		document.getElementById('dot').style.visibility = 'hidden';
   		document.getElementById('spooky').style.visibility = 'hidden';
   		document.getElementById('sap').play();
   		document.getElementById('wind').pause();
   		document.getElementById('bird').pause();
   		document.getElementById('tryagain').style.visibility = 'visible';
   		// document.getElementById('link').style.display = 'block';
   		clearInterval(ending);
   	}
	
	function triggerdot(){
		document.getElementById('dot').style.visibility = 'hidden';
		clearInterval(wint);
		clearInterval(wintr);
		document.getElementById('wind').pause();
		document.getElementById('black').style.visibility = 'visible';
		document.getElementById('bird').pause();
		setTimeout(function() { audioNutz()},3500);
		document.getElementsByTagName('head').style.cursor.url= 'reddot.png';
	}	
	function reload(){
		location.reload();
	}
	
	function dotlocaton(){
		document.getElementById('dot').style.visibility = 'visible';
		document.getElementById('dot').style.top = (Math.floor((Math.random() * 60)) + 30)+"%";
		document.getElementById('dot').style.left = (Math.floor((Math.random() * 90)))+"%";
	}
	
	function mlgparty(){
		document.getElementById('win').play();
		document.getElementById('noice').style.visibility = 'visible';
		document.getElementById('noice2').style.visibility = 'visible';
		document.getElementById('noice3').style.visibility = 'visible';
		document.getElementById('noice33').style.visibility = 'visible';
		document.getElementById('noice4').style.visibility = 'visible';
		document.getElementById('illboys').style.visibility = 'visible';
		document.getElementById('tryagain').style.visibility = 'visible';
		setTimeout(function() { audioBrrapLoop()},62000);
	}
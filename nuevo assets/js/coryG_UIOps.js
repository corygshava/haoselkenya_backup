/*
	* Author: Cornelius Shava
	* Organisation: Haosel Kenya
	* Date: 27/07/2025
	* Time: 2:59
	* Email: corygprod@duck.com
	* File: coryG_UIOps.js
*/

/*
	* NOTE:
		DONT, and i repeat DONT CHANGE ANYTHING unless you know what youre doing and you've been given recorded permission to do so.
		this code relies heavily on coryG_UIOps.css and w3.css to display certain items correctly
		if you want to modify how the items look you should do so via the css file and only modify here if no other way is convenient
		also its alot easier to change via css than over here so no need to go through the trouble
*/

// UI components
let scrollers = [];

// Startup functions - these must run before everything else

	// makes reference elements to be used by the Ops
	function createextras() {
		let m = undefined;
		let container = document.body;

		// height reference
		m = document.createElement('div');
		m.className = "heightguy w3-red";
		m.style.height = "100vh";
		m.style.width = "100vw";
		m.style.pointerEvents = "none";
		container.appendChild(m);
		console.log("created height reference");

		// back to top guy
		m = undefined;
		m = document.createElement('div');
		m.className = 'upbtn';
		// data-scrollstart="0%" data-scrollend="100%" data-classtoggle="showme" data-scroller
		m.dataset.scrollstart = '0';
		m.dataset.scrollend = '90%';
		m.dataset.classtoggle = 'showme';
		m.dataset.scroller = '';
		m.innerHTML = `<div class="cap w3-black w3-btn">Go to top</div>
			<button class="w3-btn w3-black w3-text-white themehover" onclick="window.location.assign('#')"><i class="fa fa-arrow-up"></i></button>
		`;
		container.appendChild(m);
		console.log("created the back to top anchor");
	}

// Ops - these do stuff

	// initialiser
	function uis_init() {
		console.log("running initialiser");

		// scrollers
		scrollers = document.querySelectorAll('[data-scroller]');
		scrollers.forEach(el => {el.dataset['picker'] = 'scrollers';});
	}

	// handles scroller functionality
	function handle_scrollers(e) {
		// the idea is to run through all scrollers find out what to do once they are chosen and do it
	}

// runtime events and helpers

	// start the functions as soon as the page is loaded
	window.addEventListener('load',() => {
		createextras();
		uis_init();
	})

	window.addEventListener('scroll',event => {
		console.log(event);
		handle_scrollers(event);
	})
	function refreshUI(){
		uis_init();
	}

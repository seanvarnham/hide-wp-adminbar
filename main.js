document.addEventListener("readystatechange", (e) => {
	if (document.readyState === "complete") {
		/**
		 * Hide the WP admin-bar with a slide up/down motion
		 */
		// admin-bar class is in the body tag
		const admin = document.querySelector(".admin-bar");
		// wpadminbar id is the wrapper for our admin-bar
		const adminBar = document.querySelector("#wpadminbar");
		// If both exist on the page
		if (admin && adminBar) {
			// Add the css class to move our bar out of the window
			adminBar.classList.add("up");
			// Set-up a function to check if the admin-bar is hidden by our "up" class
 			const isHidden = () => {
				return adminBar.classList.contains("up");
			};

			// Then get (or set) the height from the top of the window (in px) that we want to open the admin bar if we enter that area of the window 
			// const openBarRegion = 32;	// Set
			const openBarRegion = adminBar.getBoundingClientRect().height;	// Get
			
			// Add an on mousemove event listener
			window.onmousemove = (e) => {
				// on mouse move, if the mouse distance from the top is less than or equal to the openBarRegion
				if (e.clientY <= openBarRegion) {
					// Check if the admin-bar is hidden and remove our class if isHidden returns true, else do nothing
					isHidden() ? adminBar.classList.remove("up") : null;
				} else {
					// If our admin-bar isn't hidden, add the 'up' class to hide it
					if (!isHidden()) {
						adminBar.classList.add("up");
					}
				}
			};
		}
	}
});

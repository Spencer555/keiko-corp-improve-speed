
document.addEventListener("DOMContentLoaded", function () {
	// Navigation menu scrollTo
	document.querySelectorAll("header nav ul li a").forEach(function (link) {
		link.addEventListener("click", function (event) {
			event.preventDefault();
			const section = document.querySelector(this.getAttribute("href"));
			if (section) {
				window.scrollTo({
					top: section.offsetTop,
					left: 0,
					behavior: "smooth",
				});
			}
		});
	});

	document.querySelectorAll(".app_link").forEach(function (appLink) {
		appLink.addEventListener("click", function (event) {
			event.preventDefault();
			const hero = document.querySelector("#hero");
			if (hero) {
				window.scrollTo({
					top: hero.offsetTop,
					left: 0,
					behavior: "smooth",
				});
			}
		});
	});




	// Show & Hide menu on mobile
	const burgerIcon = document.querySelector(".burger_icon");
	const nav = document.querySelector("header nav");

	if (burgerIcon && nav) {
		burgerIcon.addEventListener("click", function () {
			nav.classList.toggle("show");
			this.classList.toggle("active");
		});
	}





	// wow.js on scroll animations initialization
	new WOW({
		animateClass: "animated",
		mobile: false,
		offset: 50,
	}).init();




	//parallax effect initialization
	$('.hero').parallax("50%", 0.3);








	//Nice scroll initialization
	
	$("html").niceScroll({
		scrollspeed: 50,
		autohidemode : false,
		cursorwidth : 8,
		cursorborderradius: 8,
		cursorborder : "0",
		background : "rgba(48, 48, 48, .4)",
		cursorcolor : '#1f1f1f',
		zindex : 999
	});








	//Testimonials slider initialization
	$("#tslider").owlCarousel({
		items : 1,
		navigation : true,
		pagination : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		responsive: true,
		autoPlay : true,
		transitionStyle : "fade"
	});




	// Mailchimp subscription form initialization
	const submitForm = document.querySelector("#submit_form");
	const mcSubmit = document.querySelector("#mc_submit");
	const mcEmail = document.querySelector("#submit_form #mc-email");
	const successMsg = document.querySelector("#success_msg");
	const errorMsg = document.querySelector("#error_msg");

	if (submitForm) {
		submitForm.addEventListener("submit", function (event) {
			event.preventDefault();
			mcSubmit.disabled = true;
			processing("icon", "loading");

			// Simulated AJAXChimp (use fetch/axios for real implementation)
			setTimeout(() => {
				const success = Math.random() > 0.5; // Simulated success/failure
				if (success) {
					processing("loading", "icon");
					mcSubmit.disabled = false;
					if (mcEmail) mcEmail.value = "";
					if (successMsg) successMsg.style.display = "block";
					if (errorMsg) errorMsg.style.display = "none";
				} else {
					processing("loading", "icon");
					mcSubmit.disabled = false;
					if (successMsg) successMsg.style.display = "none";
					if (errorMsg) errorMsg.style.display = "block";
				}
			}, 1000); // Simulate response delay
		});
	}




	function processing(hide, show) {
		const icon = mcSubmit.querySelector("i");
		if (icon) {
			icon.classList.remove(hide);
			icon.classList.add(show);
		}
	}

	// Popup video
	const playVideo = document.querySelector("#play_video");
	const closeVideo = document.querySelector(".close_video");
	const aboutVideo = document.querySelector(".about_video");

	if (playVideo && aboutVideo) {
		playVideo.addEventListener("click", function (event) {
			event.preventDefault();
			const videoLink = this.dataset.video;
			if (videoLink) {
				const iframe = document.createElement("iframe");
				iframe.src = videoLink;
				iframe.width = 500;
				iframe.height = 208;
				iframe.frameBorder = 0;
				iframe.allowFullscreen = true;
				aboutVideo.appendChild(iframe);
				aboutVideo.style.display = "block";
			}
		});
	}

	if (closeVideo && aboutVideo) {
		closeVideo.addEventListener("click", function (event) {
			event.preventDefault();
			aboutVideo.style.display = "none";
			aboutVideo.innerHTML = ""; // Remove iframe
		});
	}

});
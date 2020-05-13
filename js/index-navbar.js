// Reveal header after scrolling 
	const header = document.querySelector('header');
	const worksGrid = document.querySelector('.works-grid');
	let worksGridPos = worksGrid.getBoundingClientRect();
	let worksGridY = worksGridPos.top + window.scrollY;
	const aboutGrid = document.querySelector('.about-grid');
	let aboutGridPos = aboutGrid.getBoundingClientRect();
	let aboutGridY = aboutGridPos.top + window.scrollY;
	var prevScrollpos = window.pageYOffset;

	function revealHeader() {
		var currentScrollPos = window.pageYOffset;
		if (window.pageYOffset < (worksGridY / 5) * 3 || (prevScrollpos < currentScrollPos && window.innerWidth < 700)){
				header.classList.remove('header-reveal');
		}
		else if (window.pageYOffset > (worksGridY / 5) * 3 || window.pageYOffset > (worksGridY / 5) * 3 && prevScrollpos > currentScrollPos)  {
			header.classList.add('header-reveal');
		}
		prevScrollpos = currentScrollPos;
	}
	window.addEventListener('scroll', revealHeader);
	window.addEventListener('resize', revealHeader);

	window.addEventListener('scroll', revealHeader);

// Header links color changes when section shown
	const contactGrid = document.querySelector('.contact-grid');
	let contactGridPos = contactGrid.getBoundingClientRect();
	let contactGridY = contactGridPos.top + window.scrollY;

	const aboutLink = document.querySelector('#header-pres');
	const worksLink = document.querySelector('#header-comp');
	const contactLink = document.querySelector('#header-cont');

	function headerLinksTag() {
		if (window.pageYOffset > (worksGridY - (window.innerHeight / 2))) {
			aboutLink.classList.remove('header-link-active');
			contactLink.classList.remove('header-link-active');
			worksLink.classList.add('header-link-active');
		}
		if (window.pageYOffset > (aboutGridY - (window.innerHeight / 2))) {
			worksLink.classList.remove('header-link-active');
			contactLink.classList.remove('header-link-active');
			aboutLink.classList.add('header-link-active');
		}
		if (window.pageYOffset > (contactGridY - (window.innerHeight / 2))) {
			aboutLink.classList.remove('header-link-active');
			worksLink.classList.remove('header-link-active');
			contactLink.classList.add('header-link-active');
		}
	}

	window.addEventListener('scroll', headerLinksTag);
	window.addEventListener('resize', headerLinksTag);

// Header anchor links scrolling
	const aboutLinkTwo = document.querySelector('#header-pres-2');
	const worksLinkTwo = document.querySelector('#header-comp-2');
	const contactLinkTwo = document.querySelector('#header-cont-2');

	function scrollToAbout() {
		window.scroll({
			top: (aboutGridY - (window.innerHeight / 3)), 
			left: 0, 
			behavior: 'smooth'
		});
	}
	function scrollToWorks() {
		window.scroll({
			top: (worksGridY - (window.innerHeight / 3)), 
			left: 0, 
			behavior: 'smooth'
		});
	}
	function scrollToContact() {
		window.scroll({
			top: (contactGridY - (window.innerHeight / 3)), 
			left: 0, 
			behavior: 'smooth'
		});
	}

	aboutLink.addEventListener('click', scrollToAbout);
	worksLink.addEventListener('click', scrollToWorks);
	contactLink.addEventListener('click', scrollToContact);
	aboutLinkTwo.addEventListener('click', scrollToAbout);
	worksLinkTwo.addEventListener('click', scrollToWorks);
	contactLinkTwo.addEventListener('click', scrollToContact);

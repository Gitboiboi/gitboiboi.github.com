// Reveal Presentation text
	const aboutIntroBtn = document.querySelector('.about-intro-btn');
	const aboutIntroCtn = document.querySelector('.about-intro-ctn');
	const aboutIntro = document.querySelector('.about-intro');
	const aboutIntroAfter = document.querySelector('.about-intro-after');

	let aboutIntroRevealed= false;

	function revealAboutIntro() {
		if (aboutIntroRevealed == false) {
			aboutIntroCtn.style.height = `${aboutIntro.clientHeight+ 50}px`;
			aboutIntroAfter.style.opacity = 0;
			aboutIntroRevealed = true;
			aboutIntroBtn.innerHTML = 'Réduire';
		} else {
			aboutIntroCtn.style.height = 'calc(300px - 8vw)';
			aboutIntroAfter.style.opacity = 1;
			aboutIntroRevealed = false;
			aboutIntroBtn.innerHTML = 'En savoir plus';
		}
	}

	aboutIntroBtn.addEventListener('click', revealAboutIntro);
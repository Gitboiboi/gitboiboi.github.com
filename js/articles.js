// Article hover animation
	const projectCtn = document.querySelectorAll('.article-ctn');

	function projectPlusActive() {
        var projectBtn = this.querySelector('.project-plus');
		projectBtn.classList.add('project-plus-active');
	}
    function removeProjectPlusActive() {
        var projectBtn = this.querySelector('.project-plus');
		projectBtn.classList.remove('project-plus-active');
	}
    for (let i = 0; i < projectCtn.length; i++) {
        projectCtn[i].addEventListener('mouseenter', projectPlusActive);
        projectCtn[i].addEventListener('mouseleave', removeProjectPlusActive);
    }
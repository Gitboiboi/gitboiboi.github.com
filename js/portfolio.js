// Project hover animation
	const projectCtn = document.querySelectorAll('.project-ctn');

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

// Reveal slide when project is clicked
    const portfolioMain = document.querySelector('.portfolio-main');
    const slidesCtn = document.querySelector('.slides-ctn');
    const slidesBg = document.querySelector('.dark-bg');
    var activeSlide;

    function revealSlide(i) {
        slidesBg.classList.add('dark-bg-active');
        projectSlides[i].classList.add('slide-card-active');
        if (window.innerWidth < 700) {
            header.classList.remove('header-reveal');

        }
        // Blocking background scroll
        portfolioMain.style.top = `-${window.scrollY}px`;  
        portfolioMain.style.position = 'fixed'; 
    }
    function hideSlide() {
        slidesBg.classList.remove('dark-bg-active');
        for (let i = 0; i < projectCtn.length; i++) {
            projectSlides[i].classList.remove('slide-card-active');
            setTimeout(function() {projectSlides[i].scrollTo(0,0)}, 1000);
        }
        // Blocking background scroll
        const scrollY = portfolioMain.style.top;
        portfolioMain.style.position = '';
        portfolioMain.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    for (var i = 0; i < projectCtn.length; i++) {
        projectCtn[i].addEventListener('click', revealSlide.bind(this, i));
    }
    slidesBg.addEventListener('click', hideSlide);

// Filters system
    const filterBtns = document.querySelectorAll('.filter-btn');
    const brandingProjects = document.querySelectorAll('.project-ctn-branding');
    const uiuxProjects = document.querySelectorAll('.project-ctn-uiux');
    const printProjects = document.querySelectorAll('.project-ctn-print');
    const devProjects = document.querySelectorAll('.project-ctn-dev');
    const illuProjects = document.querySelectorAll('.project-ctn-illu');

    const allProjectsBtn = document.querySelector('.all-projects-btn');
    const brandingBtn = document.querySelector('.branding-btn');
    const uiuxBtn = document.querySelector('.uiux-btn');
    const printBtn = document.querySelector('.print-btn');
    const devBtn = document.querySelector('.dev-btn');
    const illuBtn = document.querySelector('.illu-btn');

    function filterNone() {
        for (let i = 0; i < projectCtn.length; i++) {
            projectCtn[i].style.display = 'block';
        } 

        for (let i = 0; i < filterBtns.length; i++) {
            filterBtns[i].classList.remove('portfolio-filter-active');
        }
        allProjectsBtn.classList.add('portfolio-filter-active');
    }
    function filterBranding() {
        for (let i = 0; i < projectCtn.length; i++) {
            projectCtn[i].style.display = 'none';
        } 
        for (let i = 0; i < brandingProjects.length; i++) {
            brandingProjects[i].style.display = 'block';
        }

        for (let i = 0; i < filterBtns.length; i++) {
            filterBtns[i].classList.remove('portfolio-filter-active');
        }
        brandingBtn.classList.add('portfolio-filter-active');
    }
    function filterUiux() {
        for (let i = 0; i < projectCtn.length; i++) {
            projectCtn[i].style.display = 'none';
        } 
        for (let i = 0; i < uiuxProjects.length; i++) {
            uiuxProjects[i].style.display = 'block';
        }

        for (let i = 0; i < filterBtns.length; i++) {
            filterBtns[i].classList.remove('portfolio-filter-active');
        }
        uiuxBtn.classList.add('portfolio-filter-active');
    }
    function filterPrint() {
        for (let i = 0; i < projectCtn.length; i++) {
            projectCtn[i].style.display = 'none';
        } 
        for (let i = 0; i < printProjects.length; i++) {
            printProjects[i].style.display = 'block';
        }

        for (let i = 0; i < filterBtns.length; i++) {
            filterBtns[i].classList.remove('portfolio-filter-active');
        }
        printBtn.classList.add('portfolio-filter-active');
    }
    function filterDev() {
        for (let i = 0; i < projectCtn.length; i++) {
            projectCtn[i].style.display = 'none';
        }
        for (let i = 0; i < devProjects.length; i++) {
            devProjects[i].style.display = 'block';
        }

        for (let i = 0; i < filterBtns.length; i++) {
            filterBtns[i].classList.remove('portfolio-filter-active');
        }
        devBtn.classList.add('portfolio-filter-active');
    }
    function filterIllu() {
        for (let i = 0; i < projectCtn.length; i++) {
            projectCtn[i].style.display = 'none';
        }
        for (let i = 0; i < illuProjects.length; i++) {
            illuProjects[i].style.display = 'block';
        }

        for (let i = 0; i < filterBtns.length; i++) {
            filterBtns[i].classList.remove('portfolio-filter-active');
        }
        illuBtn.classList.add('portfolio-filter-active');
    }

    allProjectsBtn.addEventListener('click', filterNone);
    brandingBtn.addEventListener('click', filterBranding);
    uiuxBtn.addEventListener('click', filterUiux);
    printBtn.addEventListener('click', filterPrint);
    devBtn.addEventListener('click', filterDev);
    illuBtn.addEventListener('click', filterIllu);

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector("header").offsetHeight;
                const oneEm = parseFloat(getComputedStyle(document.documentElement).fontSize);
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerHeight - oneEm;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const gearButton = document.getElementById("gear-btn");
    const settingsMenu = document.getElementById("settings-menu");

    const closeAllMenus = () => {
        navMenu.classList.remove("active");
        settingsMenu.classList.remove("active");
    };

    menuToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        settingsMenu.classList.remove("active");
        navMenu.classList.toggle("active");
    });

    gearButton.addEventListener("click", (event) => {
        event.stopPropagation();
        navMenu.classList.remove("active");
        settingsMenu.classList.toggle("active");
    });

    document.addEventListener("click", () => {
        closeAllMenus();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeAllMenus();
            navMenu.style.display = "flex";
        } else {
            navMenu.style.display = "";
        }
    });

    const btnSwitch = document.querySelector("#switch");
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark");
        btnSwitch.classList.add("active");
    }

    btnSwitch.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        btnSwitch.classList.toggle("active");
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    const languageToggle = document.getElementById("language-toggle");
    let currentLanguage = "en";

    const translations = {
        en: {
            header: { aboutMe: "About Me", projects: "Projects", studies: "Studies", contact: "Contact" },
            aboutMe: {
                title: "Welcome to my Portfolio",
                description: "Hello! I'm Lautaro Casal, a web developer who loves programming and creating interactive and engaging applications. Below, you will see the projects I have done so far. Enjoy it!",
                resume: "Download My Resume",
            },
            projects: {
                title: "Projects",
                project1: { title: "M&M Multimedia", description: "A web project that uses HTML, PHP, and Bootstrap to create an interactive application." },
                project2: { title: "Teatro Opera", description: "This is a project where I update the website of Teatro Opera using HTML, PHP, JavaScript, and CSS." },
                project3: { title: "Placeholder Project", description: "An additional example project to showcase skills and creativity." },
            },
            studies: {
                title: "Studies and Courses",
                study1: { title: "Web design course with WordPress", description: "I will learn to create and develop websites, integrating them with social media to enhance advertising campaigns using WordPress.", span: "2025 - Present | National Technological University of Buenos Aires" },
                study2: { title: "Higher Technician in Programming", description: "A tertiary program focused on programming and algorithms, covering the principles of software design and development.", span: "2024 - Present | Teclab Higher Technical Institute" },
                study3: { title: "Microsoft Office Course", description: "Developed skills in Microsoft Office applications, including Word, Excel, and PowerPoint, for creating documents, spreadsheets, and presentations.", span: "2023 | ACE Morón Educational Community" },
                study4: { title: "Programming Course", description: "Learned to develop web and desktop applications using Visual Basic, HTML, PHP, and MySQL, with a focus on building dynamic, database-driven projects.", span: "2019 - 2020 | ACE Morón Educational Community" },
            },
            footer: { contact: "Contact Me!", copyright: "© 2024 | Designed by Lautaro Casal" },
        },
        es: {
            header: { aboutMe: "Sobre mí", projects: "Proyectos", studies: "Estudios", contact: "Contacto" },
            aboutMe: {
                title: "Bienvenido a mi Portafolio",
                description: "¡Hola! Soy Lautaro Casal, un desarrollador web al que le encanta programar y crear aplicaciones interactivas y atractivas. A continuación, verás los proyectos que he realizado hasta ahora. ¡Disfrútalo!",
                resume: "Descargar Mi CV",
            },
            projects: {
                title: "Proyectos",
                project1: { title: "M&M Multimedia", description: "Un proyecto web que utiliza HTML, PHP y Bootstrap para crear una aplicación interactiva." },
                project2: { title: "Teatro Opera", description: "Este es un proyecto donde actualicé el sitio web del Teatro Opera usando HTML, PHP, JavaScript y CSS." },
                project3: { title: "Proyecto de Ejemplo", description: "Un proyecto adicional para mostrar habilidades y creatividad." },
            },
            studies: {
                title: "Estudios y Cursos",
                study1: { title: "Curso de Diseño Web con WordPress", description: "Aprenderé a crear y desarrollar sitios web, integrándolos con redes sociales para optimizar las campañas publicitarias usando WordPress.", span: "2025 - Presente | Universidad Tecnológica Nacional de Buenos Aires" },
                study2: { title: "Técnico Superior en Programación", description: "Un programa terciario enfocado en programación y algoritmos, cubriendo los principios del diseño y desarrollo de software.", span: "2024 - Presente | Instituto Técnico Superior Teclab" },
                study3: { title: "Curso de Microsoft Office", description: "Desarrollé habilidades en aplicaciones de Microsoft Office, incluyendo Word, Excel y PowerPoint, para crear documentos, hojas de cálculo y presentaciones.", span: "2023 | Comunidad Educativa ACE Morón" },
                study4: { title: "Curso de Programación", description: "Aprendí a desarrollar aplicaciones web y de escritorio usando Visual Basic, HTML, PHP y MySQL, con un enfoque en proyectos dinámicos basados en bases de datos.", span: "2019 - 2020 | Comunidad Educativa ACE Morón" },
            },
            footer: { contact: "¡Contáctame!", copyright: "© 2024 | Diseñado por Lautaro Casal" },
        },
    };

    const switchLanguage = (language) => {
        document.querySelector('nav a[href="#aboutme"]').textContent = translations[language].header.aboutMe;
        document.querySelector('nav a[href="#projects"]').textContent = translations[language].header.projects;
        document.querySelector('nav a[href="#studies"]').textContent = translations[language].header.studies;
        document.querySelector('nav a[href="#contact"]').textContent = translations[language].header.contact;
        document.querySelector(".aboutme h1").textContent = translations[language].aboutMe.title;
        document.querySelector(".desc").textContent = translations[language].aboutMe.description;
        document.querySelector(".download-btn button").innerHTML = `<i class="fa-solid fa-circle-down"></i> ${translations[language].aboutMe.resume}`;
        document.getElementById("download-resume").href = language === "en" ? "assets/cv/resume.pdf" : "assets/cv/cv.pdf";
        document.querySelector(".projects h2").textContent = translations[language].projects.title;
        const projectItems = document.querySelectorAll(".project");
        projectItems[0].querySelector("h3").textContent = translations[language].projects.project1.title;
        projectItems[0].querySelector("p").textContent = translations[language].projects.project1.description;
        projectItems[1].querySelector("h3").textContent = translations[language].projects.project2.title;
        projectItems[1].querySelector("p").textContent = translations[language].projects.project2.description;
        projectItems[2].querySelector("h3").textContent = translations[language].projects.project3.title;
        projectItems[2].querySelector("p").textContent = translations[language].projects.project3.description;
        document.querySelector(".studies h2").textContent = translations[language].studies.title;
        const studyItems = document.querySelectorAll(".study-item");
        studyItems[0].querySelector("h3").textContent = translations[language].studies.study1.title;
        studyItems[0].querySelector("p").textContent = translations[language].studies.study1.description;
        studyItems[0].querySelector("span").textContent = translations[language].studies.study1.span;
        studyItems[1].querySelector("h3").textContent = translations[language].studies.study2.title;
        studyItems[1].querySelector("p").textContent = translations[language].studies.study2.description;
        studyItems[1].querySelector("span").textContent = translations[language].studies.study2.span;
        studyItems[2].querySelector("h3").textContent = translations[language].studies.study3.title;
        studyItems[2].querySelector("p").textContent = translations[language].studies.study3.description;
        studyItems[2].querySelector("span").textContent = translations[language].studies.study3.span;
        studyItems[3].querySelector("h3").textContent = translations[language].studies.study4.title;
        studyItems[3].querySelector("p").textContent = translations[language].studies.study4.description;
        studyItems[3].querySelector("span").textContent = translations[language].studies.study4.span;
        document.querySelector(".contact-title h4").textContent = translations[language].footer.contact;
        document.querySelector(".footer-bottom p").textContent = translations[language].footer.copyright;
    };

    languageToggle.addEventListener("click", () => {
        currentLanguage = currentLanguage === "en" ? "es" : "en";
        languageToggle.textContent = currentLanguage.toUpperCase();
        switchLanguage(currentLanguage);
    });
});

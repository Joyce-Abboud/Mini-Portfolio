const projects = document.querySelectorAll(".project");
const links = document.querySelectorAll(".link");

function goTo(event) {
    const project = event.currentTarget;

    switch (true) {
        case project.classList.contains("sketch"):
            window.open(
                "https://joyce-abboud.github.io/Etch-a-sketch-odin/",
                "_blank"
            );
            break;
        case project.classList.contains("calculator"):
            window.open(
                "https://joyce-abboud.github.io/Calculator/",
                "_blank"
            );
            break;
        case project.classList.contains("rock"):
            window.open(
                "https://joyce-abboud.github.io/Rock-Paper-Scissors/",
                "_blank"
            );
            break;
        case project.classList.contains("wscreations"):
            window.open(
                "https://wscreations.netlify.app/",
                "_blank"
            );
            break;

    }
}

projects.forEach((project) =>
    project.addEventListener("click", goTo));


function openProfile(event) {
    const link = event.currentTarget;

    switch (true) {
        case link.classList.contains("github"):
            window.open("https://github.com/Joyce-Abboud", "_blank");
            break;
        case link.classList.contains("linkedIn"):
            window.open("https://www.linkedin.com/in/joyce-abboud-752a4a3b1/", "_blank");
            break;
        case link.classList.contains("email"):
            window.open("https://mailto:joyce.abboud2025@gmail.com", "_blank");
            break;
    }
}

links.forEach((link) =>
    link.addEventListener("click", openProfile));
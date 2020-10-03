//Accordion
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    let div = acc[i];
    div.addEventListener('click', displayAccordion);
}
function displayAccordion(e) {

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

//Changer les background color des main div
let selectedMainDivs = document.querySelectorAll('#pageContent div');

for (let i = 0; i < selectedMainDivs.length; i++) {
    let div = selectedMainDivs[i];
    div.addEventListener('mouseenter', displayBackgroundImage);
    div.addEventListener('mouseleave', hideBackgroundImage);
}

function displayBackgroundImage(e) {
    var divMain = e.target;
    divMain.style.backgroundImage = 'url(img/greyzz.png)';
    // console.log(accordeon);
    var accordeon = divMain.querySelectorAll('section h2');
    for (let i = 0; i < accordeon.length; i++) {
        accordeon[i].style.fontSize = '250%'; 
    }
}

function hideBackgroundImage(e) {
    var divMain = e.target;
    divMain.style.backgroundImage = 'none';
    // e.target.style.fontSize = 'none';
    var accordeon = divMain.querySelectorAll('section h2');
    for (let i = 0; i < accordeon.length; i++) {
        accordeon[i].style.fontSize = '200%'; 
    }
}

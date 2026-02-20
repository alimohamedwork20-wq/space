let MOON = document.getElementById('MOON')
let MARS = document.getElementById('MARS')
let EUROPA = document.getElementById('EUROPA')
let TITAN = document.getElementById('TITAN')
let img = document.getElementById('img')
let h1 = document.getElementById('h1')

function moon(){
    img.src = 'image-moon.png'
    h1.innerHTML ='MOON'
    MOON.style.borderBottom = 'solid white 3px'
    MARS.style.borderBottom = 'solid transparent 3px'
    EUROPA.style.borderBottom = 'solid transparent 3px'
    TITAN.style.borderBottom = 'solid transparent 3px'
}
function mars(){
    img.src = 'image-mars.png'
    MOON.style.borderBottom = 'solid transparent 3px'
    h1.innerHTML ='MARS'
    MARS.style.borderBottom = 'solid white 3px'
    EUROPA.style.borderBottom = 'solid transparent 3px'
    TITAN.style.borderBottom = 'solid transparent 3px'
}
function europa(){
    img.src = 'image-europa.png'
    MOON.style.borderBottom = 'solid transparent 3px'
    h1.innerHTML ='EUROPA'
    MARS.style.borderBottom = 'solid transparent 3px'
    EUROPA.style.borderBottom = 'solid white 3px'
    TITAN.style.borderBottom = 'solid transparent 3px'
}
function titan(){
    img.src = 'image-titan.png'
    h1.innerHTML ='TITAN'
    MOON.style.borderBottom = 'solid transparent 3px'
    MARS.style.borderBottom = 'solid transparent 3px'
    EUROPA.style.borderBottom = 'solid transparent 3px'
    TITAN.style.borderBottom = 'solid white 3px'
}
let menu = document.getElementById('menu');
let oopen = document.getElementById('open');
let cclose = document.getElementById('close');
let screenWidth = window.innerWidth;

function openn(){
    menu.style.display = 'block'
    oopen.style.display = 'none'
    cclose.style.display = 'block'

}
function closee(){
    menu.style.display = 'none'
    oopen.style.display = 'block'
    cclose.style.display = 'none'

}
if(screenWidth >838){
    oopen.style.display = 'none'
}
function checkScreen() {
    if (window.innerWidth > 838) {
        oopen.style.display = 'none';
        cclose.style.display = 'none';
        menu.style.display = 'none';
    } else {
        oopen.style.display = 'block';
    }
}

checkScreen(); // أول تحميل
window.addEventListener('resize', checkScreen);

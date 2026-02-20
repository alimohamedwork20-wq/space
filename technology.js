let one = document.getElementById('one')
let two = document.getElementById('tow')
let three = document.getElementById('three')
let h1 = document.getElementById('h1')
let img = document.getElementById('img')
function onee(){
    img.src = 'image-launch-vehicle-portrait.jpg'
    one.style.background = 'white'
    two.style.background = 'transparent'
    three.style.background = 'transparent'
    one.style.color = 'black'
    two.style.color = 'white'
    three.style.color = 'white'
    h1.innerHTML = 'LAUNCH VEHICLE'
}
function twoo(){
    img.src = 'image-space-capsule-portrait.jpg'
    one.style.background = 'transparent'
    two.style.background = 'white'
    three.style.background = 'transparent'
    two.style.color = 'black'
    one.style.color = 'white'
    three.style.color = 'white'
    h1.innerHTML = 'SATELLITE BASE'
}
function threee(){
    img.src = 'image-spaceport-portrait.jpg'
    one.style.background = 'transparent'
    two.style.background = 'transparent'
    three.style.background = 'white'
    three.style.color = 'black'
    two.style.color = 'white'
    one.style.color = 'white'
    h1.innerHTML = 'MISSILE  BASE'
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
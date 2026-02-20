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
var section = document.querySelector('section');
window.addEventListener('scroll', function(){
    var value = window.scrollY;
    section.style.clipPath = "circle("+ value +"px at center)"})

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%"
}
const header = document.getElementById('header');
const bars = document.getElementById('bars');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const menu = document.getElementById('menu');
const search = document.getElementById('search');

const play = document.getElementById('play');
const trailer = document.getElementById('trailer');
const video = document.getElementById('video');
const close = document.getElementById('close');

bars.addEventListener('click', function(){
    header.classList.toggle('headerActive');
    bar1.classList.toggle('activeLine1');
    bar2.classList.toggle('activeLine2');
    bar3.classList.toggle('activeLine3');
    menu.classList.toggle('menuActive');
    search.classList.toggle('searchActive');
});
play.addEventListener('click', function(){
    trailer.classList.toggle('videoActive');
    video.currentTime=0;
    video.play();
});
close.addEventListener('click', function(){
    trailer.classList.remove('videoActive');
    video.pause();
    video.currentTime=0;
});




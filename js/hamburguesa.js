document.querySelector('#button-menu').addEventListener('click', animateBars);

var linea1_barra = document.querySelector('.linea1');
var linea2_barra = document.querySelector('.linea2');
var linea3_barra = document.querySelector('.linea3');
const container_menu = document.querySelector('.nav-links');

function animateBars(){
    linea1_barra.classList.toggle('active-linea1');
    linea2_barra.classList.toggle('active-linea2');
    linea3_barra.classList.toggle('active-linea3');
    container_menu.classList.toggle('menu-active');
}
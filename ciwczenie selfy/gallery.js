// console.log("helo");
//pobieranie elementu po klasie css
let divText = document.querySelector('.text')
//pobranie elementu po nazwie znacznika

// divText.innerHTML = "Hello world!"
// divText.innerHTML = divText.innerHTML + "Hello world!"

// zmiana stylu elementu

let subheader = document.querySelector('.aleo')
subheader.style.background = '#aaa';
subheader.style.paddingRight = '10px';

//zmiana klas css elementu
let header4 = document.querySelector('h4')
header4.classList.add('bigger')
header4.classList.add('animate')
//usuwanie klay
header4.classList.remove('bigger')
//przełączanie klesy
header4.classList.toggle('bigger')

//pobieramy button
let butonKlik = document.querySelector('#nieklik')
butonKlik.addEventListener('click', onButonKlikClick)

function onButonKlikClick(event) {
    // console.log(event)
    header4.classList.toggle('bigger')
}

// //lightbox
// //pobierz zdjęcie jedno
// let img = document.querySelector('.lightbox')
// //dodaj obsługę kliknięcia w zdjęcie
// img.addEventListener('click', showLightbox)
// //funkcja pokazujaca lightboxa
// function showLightbox(event) {
//     let lightboxDiv = document.querySelector('#lightbox')
//     lightboxDiv.style.display = "flex";

//lightbox
//pobierz zdjęcia wszystkie
let imgs = document.querySelectorAll('.lightbox')
for ( let img of imgs) {
img.addEventListener('click', showLightbox)
}
//funkcja pokazujaca lightboxa
function showLightbox(event) {
    let lightboxDiv = document.querySelector('#lightbox')
    lightboxDiv.style.display = "flex"
    let imgsrc = event.target.src
    let lightboxImg = document.querySelector('#lightbox-img')
    lightboxImg.src = imgsrc

}
//obsługa zamykania lightboxa
let lightboxDiv = document.querySelector('#lightbox')
lightboxDiv.addEventListener('click', hideLightbox)
function hideLightbox(event) {
    lightboxDiv.style.display = "none"
}
class Carousel {

    constructor(image, def, url) {
        this.Image = image;
        this.Def = def;
        this.Url = url
    }
}

const carouselObject = [
    {
        Image: "imagem_1.jpg",
        Def: "Esta é a nova Ranger Ford 2022. Verifique novidades.",
        Url: "lancamento.html"
    },
    {
        Image: "imagem_2.jpg",
        Def: "Ford a nossa história",
        Url: "#",
    },
    {
        Image: "imagem_3.jpg",
        Def: "Nova Ford Bronco Sport 2022",
        Url: "lancamento.html"
    }
]

const track = document.querySelector('#carousel-track');
const items = document.querySelectorAll('.carousel-item');
const nextBtn = document.querySelector('#next-button')
const prevBtn = document.querySelector('#prev-button')
const titleElement = document.querySelector('#carousel-title');
let autoPlayInterval;

// Isso torna o carrossel responsivo. Não importa o tamanho da tela,
//o JS sempre saberá a distância correta para mover.
const itemWidth = items[0].getBoundingClientRect().width

//Controla qual item está visível no momento. Começa com o primeiro (índice 0).
let currentIndex = 0;

function moveItem(targetIndex) {
    const qtdToMove = targetIndex * itemWidth;
    // Aplica um estilo CSS 'transform' para mover o trilho horizontalmente.
    track.style.transform = `translateX(-${qtdToMove}px)`;
    currentIndex = targetIndex;

    updateTitle(currentIndex)
}

function nextItem() {
    startAutoPlay()
    let nextIndex = currentIndex + 1;
    if (nextIndex >= items.length) {
        nextIndex = 0
    }
    moveItem(nextIndex)
}

function prevItem() {
    startAutoPlay()
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
        prevIndex = items.length - 1;
    }
    moveItem(prevIndex)
}

function updateTitle(index) {
    const currentData = carouselObject[index];
    titleElement.textContent = currentData.Def;

}

function startAutoPlay() {
    clearInterval(autoPlayInterval)
    autoPlayInterval = setInterval(nextItem, 3000)
}

prevBtn.addEventListener('click', prevItem);
nextBtn.addEventListener('click', nextItem);

startAutoPlay();
moveItem(currentIndex);

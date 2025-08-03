const itens = document.querySelectorAll(".item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const marcaPosicao = document.querySelectorAll(".posicao");
const btnMenu = document.querySelector(".btn-menu");
const iconeMenu = document.querySelector(".icone-menu");
const menu = document.querySelector(".menu-ul");

// função para mostar e esconder  o menu
const mostraMenu = () => {
    if (iconeMenu.classList.contains("fa-bars")) {
        iconeMenu.classList.remove("fa-bars");
        iconeMenu.classList.add("fa-xmark");
        menu.style.display = "flex";
    } else {
        iconeMenu.classList.remove("fa-xmark");
        iconeMenu.classList.add("fa-bars");
        menu.style.display = "none";
    }
};

btnMenu.addEventListener("click", () => {
    mostraMenu();
});

// ***********início do carolsel****************
let active = 0;
const total = itens.length;
let timer;

const trocaItem = (direcao) => {
    document.querySelector(".item.active").classList.remove("active");
    document.querySelector(".posicao.active").classList.remove("active");

    if (direcao > 0) {
        active = active + 1;

        if (active === total) {
            active = 0;
        }
    } else if (direcao < 0) {
        active = active - 1;
        if (active < 0) active = total - 1;
    }

    itens[active].classList.add("active");
    marcaPosicao[active].classList.add("active");
};

clearInterval(timer);
timer = setInterval(() => {
    trocaItem(1);
}, 8000);

nextBtn.addEventListener("click", () => {
    trocaItem(1);
});

prevBtn.addEventListener("click", () => {
    trocaItem(-1);
});
// **********fim do carolsel*******************

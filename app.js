const zaposleni = [
  {
    name: "Sead Karisik",
    job: "digital manager",
    opis: "Poznavalac digitalnog marketinga.",
    img: "./slike/slika1.jpg",
  },
  {
    name: "Alma Karisik",
    job: "vaspitac-pedagog",
    opis: "Radi i vodi vrtic Kolibri",
    img: "./slike/slika2.jpg",
  },
  {
    name: "Demir Karisik",
    job: "stolar",
    opis: "Proizvodi, sklapa i prodaje plocasti namestaj.",
    img: "./slike/slika3.jpg",
  },
  {
    name: "Dzemil Karisk",
    job: "senior programing",
    opis: "Front-end developer",
    img: "./slike/slika4.jpg",
  },
];

const slika = document.getElementById("person-img");
const imePrezime = document.getElementById("name");
const posao = document.getElementById("job");
const opisPosla = document.getElementById("jobDescription");

const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const btnAny = document.getElementById("btn-any");

var trenutniZaposleni = 0;

// ucitavanje stranice i jednog radnika
window.addEventListener("DOMContentLoaded", ucitavanjeRadnika());

// Next button i f-ja ucitavanje radnika
btnRight.addEventListener("click", function () {
  if (trenutniZaposleni < zaposleni.length - 1) {
    trenutniZaposleni++;
  } else {
    trenutniZaposleni = 0;
  }
  ucitavanjeRadnika();
});

// Prev button i f-ja ucitavanje radnika
btnLeft.addEventListener("click", function () {
  if (trenutniZaposleni > 0) {
    trenutniZaposleni--;
  } else {
    trenutniZaposleni = zaposleni.length - 1;
  }
  ucitavanjeRadnika();
});
// f-ja za ucitavanje radnika
function ucitavanjeRadnika() {
  let radnik = zaposleni[trenutniZaposleni];
  slika.src = radnik.img;
  imePrezime.textContent = radnik.name;
  posao.textContent = radnik.job;
  opisPosla.textContent = radnik.opis;
}

btnAny.addEventListener("click", function () {
  trenutniZaposleni = Math.floor(Math.random() * zaposleni.length);
  ucitavanjeRadnika();
  console.log(trenutniZaposleni);
});

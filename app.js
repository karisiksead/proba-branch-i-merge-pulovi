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

var trenutniZaposleni = 0;

window.addEventListener("DOMContentLoaded", function () {
  let radnik = zaposleni[trenutniZaposleni];
  slika.src = radnik.img;
  imePrezime.textContent = radnik.name;
  posao.textContent = radnik.job;
  opisPosla.textContent = radnik.opis;
});
btnRight.addEventListener("click", function () {
  if (trenutniZaposleni < zaposleni.length - 1) {
    trenutniZaposleni++;
  } else {
    trenutniZaposleni = 0;
  }
  let radnik = zaposleni[trenutniZaposleni];
  slika.src = radnik.img;
  imePrezime.textContent = radnik.name;
  posao.textContent = radnik.job;
  opisPosla.textContent = radnik.opis;
  console.log(trenutniZaposleni);
});

btnLeft.addEventListener("click", function () {
  if (trenutniZaposleni > 0) {
    trenutniZaposleni--;
  } else {
    trenutniZaposleni = zaposleni.length - 1;
  }

  let radnik = zaposleni[trenutniZaposleni];
  slika.src = radnik.img;
  imePrezime.textContent = radnik.name;
  posao.textContent = radnik.job;
  opisPosla.textContent = radnik.opis;
  console.log(trenutniZaposleni);
});

"use strict";

const translations = {
  en: {
    title: "Hi 😉, I'm Maciej — a future front-end developer",
    description:
      "On this website, you can find the projects that helped me learn and a bit more about me.",
    buttonSASS: "Projects for learning SASS",
    buttonJS: "Projects for learning JS",
    buttonReact: "Projects for learning React",
    buttonMyProjects: "My projects",
    aboutMe: "About me",
    aboutMeHeading: "Nice to meet you! 😁",
    aboutMeText1:
      "I'm still a beginner in front-end development. I started learning in 2020, and since then I've been taking small but consistent steps forward almost every day. Continuous improvement has always been a part of me. My goal is to become a full-stack developer and do all kinds of magic with code – but hey, one step at a time!",
    aboutMeText2:
      "As a person, I'm calm and open-minded. I'm rather quiet, but I truly enjoy working in a good team and being around positive people.",
    aboutMeText3:
      "Outside of coding, my hobbies include rugby, gym workouts… and video games 🎮",
    skills: "Skills",
    skillsHeading: "Here are my skills: ",
    english: `<i class="fa-solid fa-comment-dots"></i> English B2/B1`,
    contact: "Contact info",
    contactHeading: "Contact me: ",
    phone: `<i class="fa-solid fa-phone"></i> Phone: 510871509`,
    email: "e-mail: wielgosz.mac@gmail.com",
    footerThanks: "Thank you for visting my website!",
    courses: `If you are also learning programming, I encourage you to take Jonnas Schmetmann's <a href="https://codingheroes.io/" class="footer__link">courses</a> `,
    icons: "Icons used",
  },
  pl: {
    title: "Cześć 😉, jestem Maciej — przyszły front-end developer",
    description:
      "Na tej stronie znajdziesz projekty, które pomogły mi się uczyć, oraz trochę więcej o mnie.",
    buttonSASS: "Projekty do nauki SASS",
    buttonJS: "Projekty do nauki JS",
    buttonReact: "Projekty do nauki React",
    buttonMyProjects: "Moje projekty",
    aboutMe: "O mnie",
    aboutMeHeading: "Miło Cię poznać! 😁",
    aboutMeText1:
      "Wciąż jestem początkujący w front-endzie. Zacząłem naukę w 2020 roku i od tego czasu robię małe, ale regularne postępy prawie każdego dnia. Ciągłe doskonalenie zawsze było częścią mnie. Moim celem jest zostanie full-stack developerem i robienie wszelkiej magii z kodem – ale hej, krok po kroku!",
    aboutMeText2:
      "Jako osoba jestem spokojny i otwarty. Jestem raczej cichy, ale naprawdę lubię pracować w dobrym zespole i przebywać wśród pozytywnych ludzi.",
    aboutMeText3:
      "Poza kodowaniem interesuję się rugby, treningiem siłowym… i grami wideo 🎮",
    skills: "Umiejętności",
    skillsHeading: "Oto moje umiejętności: ",
    english: `<i class="fa-solid fa-comment-dots"></i> Angielski B2/B1`,
    contact: "Dane kontaktowe",
    contactHeading: "Skontaktuj się ze mną: ",
    phone: `<i class="fa-solid fa-phone"></i>Telefon: 510871509`,
    footerThanks: "Dziękuję za odwiedzenie mojej strony!",
    courses:
      'Jeśli też uczysz się programowania, zachęcam Cię do skorzystania z kursów <a href="https://codingheroes.io/" class="footer__link">Jonnasa Schmetmanna</a>',
    icons: "Użyte ikony",
  },
};

// /////////////// Accordeon functionality
const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("open");
  });
});

// /////////////// MENU FUNCTIONS
const menu = document.querySelector(".options");
const toggleBtn = document.getElementById("toggle-menu");
const langBtn = document.getElementById("toggle-lang");
const closeBtn = document.getElementById("close-accordions");

const themeMenuBtn = document.getElementById("toggle-themeMenu");
const themeMenu = document.querySelector(".themeMenu__list");
const themeBtn = document.getElementById("toggle-theme");

const darkModeBtn = document.getElementById("darkModeBtn");
const funModeBtn = document.getElementById("funModeBtn");
const lightModeBtn = document.getElementById("lightModeBtn");

/* //////////////////////////////////////////////////////////////
// Menu open/close
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  menu.classList.toggle("closed");
  // themeMenu.className = "themeMenu__list closed";
});

// // // themeMenu open/close
// themeMenuBtn.addEventListener("click", () => {
//   themeMenu.classList.toggle("open");
//   themeMenu.classList.toggle("closed");
// });

// Theme change
function deleteBodyClass() {
  document.body.className = "";
}

// Sets the theme passed as an argument
const handleMode = function (mode) {
  if (document.body.classList.length > 0) {
    deleteBodyClass();
    document.body.classList.toggle(mode);
  } else {
    document.body.classList.toggle(mode);
  }
};

// Sets dark-mode
darkModeBtn.addEventListener("click", function () {
  handleMode("dark-mode");
});

// Sets light-mode
lightModeBtn.addEventListener("click", function () {
  handleMode("light-mode");
});

// Sets fun-mode
// funModeBtn.addEventListener("click", deleteBodyClass); 
*/ //////////////////////////////////////////////////////////////

// Menu open/close
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  menu.classList.toggle("closed");
  // themeMenu.className = "themeMenu__list closed";
});

function deleteBodyClass() {
  document.body.className = "";
}

// Sets the theme passed as an argument
const handleMode = function (mode) {
  if (document.body.classList.length > 0) {
    deleteBodyClass();
    document.body.classList.toggle(mode);
  } else {
    document.body.classList.toggle(mode);
  }
};

// Sets dark-mode
// darkModeBtn.addEventListener("click", function () {
//   handleMode("dark-mode");
// });

// // Sets light-mode
// lightModeBtn.addEventListener("click", function () {
//   handleMode("light-mode");
// });

// Sets fun-mode
// funModeBtn.addEventListener("click", deleteBodyClass);

// ///////////////// Mode change

// console.log("Użytkownik preferuje tryb:", theme);

// let currentMode = "dark"; // domyślny tryb
const moonIcon = document.querySelector("#darkModeBtn");
const sunIcon = document.querySelector("#lightModeBtn");

function changeModeIcon() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const theme = prefersDarkMode ? "dark" : "light";

  if (theme === "dark") {
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
  }

  if (theme === "light") {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", changeModeIcon());

themeBtn.addEventListener("click", () => {
  const newTheme = theme === "dark" ? "light" : "dark";
  handleMode(newTheme);
  changeModeIcon(newTheme);
});

// ///////////////// PAGE CONTENT CLOSE
closeBtn.addEventListener("click", () => {
  const allContents = document.querySelectorAll(".accordion-content.open");
  allContents.forEach((content) => {
    content.classList.remove("open");
  });
});

// ///////////////// TRANSLATION

let currentLang = "en"; // domyślny język
const enIcon = document.querySelector("#EN-icon");
const plIcon = document.querySelector("#PL-icon");

function changeFlag() {
  const currentLang = document.documentElement.getAttribute("lang");
  if (currentLang === "en") {
    enIcon.classList.remove("hidden");
    plIcon.classList.add("hidden");
  }

  if (currentLang === "pl") {
    plIcon.classList.remove("hidden");
    enIcon.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", changeFlag());

function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (value) {
      el.innerHTML = value; // <- kluczowe!
    }
  });
  document.documentElement.setAttribute("lang", lang);
  currentLang = lang;
}

langBtn.addEventListener("click", () => {
  const newLang = currentLang === "en" ? "pl" : "en";
  updateLanguage(newLang);
  changeFlag();
});

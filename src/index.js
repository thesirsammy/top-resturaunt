// index.js
import "./styles.css"

import switchHome from "./home.js";
import switchMenu from "./menu.js";
import switchAbout from "./about.js";

(function() {
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const aboutButton = document.getElementById('about');

    homeButton.addEventListener('click', switchHome);
    menuButton.addEventListener('click', switchMenu);
    aboutButton.addEventListener('click', switchAbout);

    switchHome();
})();
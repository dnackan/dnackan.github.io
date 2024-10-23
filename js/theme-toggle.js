const toggle = document.getElementById("theme-switch");

function updateIcon() {
    if (localStorage.getItem("theme")=="dark") {
        document.getElementById('btn').src='images/dark.png';
    } else {
        document.getElementById('btn').src='images/light.png';
    }
}

function switchTheme() {
    if (document.documentElement.getAttribute("data-theme") === "light") {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

// set theme to 'light' or 'dark'
function setTheme(targetTheme) {
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
    updateIcon();
}

// detect theme based on local storage or OS setting, if applicable
function detectColorScheme() {
    var theme = "light"; // default

    if (localStorage.getItem("theme")){
        // theme previously saved in local storage
        if (localStorage.getItem("theme") == "dark"){
            var theme = "dark";
        }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        // OS in dark mode
        var theme = "dark";
    }

    setTheme(theme);
}


detectColorScheme();

toggle.addEventListener('click', switchTheme);

// update theme if OS theme changes
window.matchMedia("(prefers-color-scheme: dark)").addListener(
  e => e.matches && setTheme('dark') 
);
window.matchMedia("(prefers-color-scheme: light)").addListener(
  e => e.matches && setTheme('light') 
);
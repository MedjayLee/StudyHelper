const darkThemeBtn = document.querySelector("#darkThemeBtn")

darkThemeBtn.addEventListener('click', darkThemeBtnWork)
darkThemeBtn.addEventListener('touch', darkThemeBtnWork)


function darkThemeBtnWork() {
    changeBtn();
    changeTheme()
}

function changeTheme() {
    let lightTheme = "css/style.css";
    let darkTheme = "css/dark.css";

    var currTheme = document.querySelector(".style").getAttribute("href");
    console.log(currTheme);
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    document.querySelector(".style").setAttribute("href", currTheme);
}

function changeBtn () {
    darkThemeBtn.classList.toggle("dark-theme-btn-active")
    darkThemeBtn.classList.toggle("btn-dark")
    darkThemeBtn.classList.toggle("btn-light")
    darkThemeBtn.classList.toggle("text-dark")
    darkThemeBtn.classList.toggle("border-dark")
    
}
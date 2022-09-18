document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );
        
        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };
    
    document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));
    document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('touch', () => getSort(event)));
    
});

const darkThemeBtn = document.querySelector("#darkThemeBtn")

darkThemeBtn.addEventListener('click', darkThemeBtnWork)
darkThemeBtn.addEventListener('touch', darkThemeBtnWork)

function darkThemeBtnWork() {
    changeBtn();
    changeTheme()
}

function changeTheme() {
    let lightTheme = "style.css";
    let darkTheme = "dark.css";

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
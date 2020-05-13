let allLinks = document.querySelectorAll('.my-nav-menu > li > a');
// allLinks.onclick
console.log(allLinks);

for (let index = 0; index < allLinks.length; index++) {
    const menuItem = allLinks[index];

    //[element].[event]=[function]
    menuItem.onclick = menuItemClick;

}


function menuItemClick() {
    let menuItem = this;

    //--------------------------
    //li
    let li = menuItem.parentElement;

    //ul
    let ul = li.parentElement;

    let li_s = ul.children;
    console.log(li_s);

    for (let index = 0; index < li_s.length; index++) {
        const liEl = li_s[index];
        liEl.classList.remove('active');
    }

    //------------------------------------

    //li
    let perentOfMenuItem = menuItem.parentElement;

    perentOfMenuItem.classList.add('active');

    console.log(this);
}



let toggleButton = document.querySelector('.sidebar .toggle-button');

toggleButton.onclick = toggleMenu;

function toggleMenu() {
    let btn = this;

    let div = btn.parentElement;

    let sidebar = div.parentElement;

    let result = sidebar.classList.contains('show');

    if(result==true)
    {
        sidebar.classList.remove('show');
    }
    else
    {
        sidebar.classList.add('show'); 
    }
    
    console.log(result);
    


}
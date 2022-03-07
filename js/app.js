const menu = document.querySelector('#menu')
const menuClose = document.querySelector('#menu-close')

const clickMenu = () => {
    const itemMenu = document.querySelector('header > nav.nav-bar > ul')
    itemMenu.classList.toggle('mobile')
}

menu.addEventListener('click', clickMenu)
menuClose.addEventListener('click', clickMenu)
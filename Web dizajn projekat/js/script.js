const toggleButton = document.getElementsByClassName('hamburger-menu')[0]
const navBarLinks = document.getElementsByClassName('header-nav')[0]

toggleButton.addEventListener('click', () =>{
    navBarLinks.classList.toggle('active')
})
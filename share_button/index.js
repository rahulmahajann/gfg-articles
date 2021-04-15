const links = document.querySelector('.links')
const o_c = document.querySelector('.o_c_btns')

links.addEventListener('click',function(){
    links.classList.toggle('active')
    o_c.classList.toggle('active')
})
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        
    } else {
        menuMobile.classList.add('open');
       
    }
}

//Pintar o item selecionado no menu//

const menuItem = document.querySelectorAll('.nav-item');

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)
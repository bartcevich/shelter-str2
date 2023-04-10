

const B_menu = document.getElementById('b_menu');
const Menu = document.getElementById('menu');
const Burger = document.getElementById('burger');
let active_burger=false;
Burger.addEventListener('click', () => {
    console.log(active_burger);
    if(active_burger==false){
        active_burger=true;
        document.getElementById('b_menu').classList.add('menu_open');
        document.getElementById('menu').classList.add('menu_open2');
        document.getElementById('burger').classList.add('burger_90');
    }else if(active_burger==true){
        active_burger=false;
        document.getElementById('b_menu').classList.remove('menu_open');
        document.getElementById('menu').classList.remove('menu_open2');
        document.getElementById('burger').classList.remove('burger_90');
    }
});
Menu.addEventListener('click', () => {
    console.log(active_burger);
    if(active_burger==false){
        active_burger=true;
        document.getElementById('b_menu').classList.add('menu_open');
        document.getElementById('menu').classList.add('menu_open2');
        document.getElementById('burger').classList.add('burger_90');
    }else if(active_burger==true){
        active_burger=false;
        document.getElementById('b_menu').classList.remove('menu_open');
        document.getElementById('menu').classList.remove('menu_open2');
        document.getElementById('burger').classList.remove('burger_90');
    }
});


const Active2 = document.getElementsByClassName('active2');
console.log(Active2);
const Pop_close = document.getElementById('pop_close');
const Pop_button = document.getElementById('pop_button');
/*BASICS.addEventListener('click', () => { //слушаю клик в длоке через ид который привязан к константе
    document.getElementById('ul-block').classList.add('hidden');// добавил класс с дисплей нан
    document.getElementById('on-basics').classList.remove('open-basics');// убрал клас с нан = изменил кнопку
});*/
for(let i=0; i<Active2.length; i++){
    Active2[i].addEventListener('click', () => {
        document.getElementById('pop_close').classList.remove('class_close');
    });
}
/*Active2.addEventListener('click', () => {
    console.log(Active2);
    document.getElementById('pop_close').classList.remove('class_close');
});*/
Pop_button.addEventListener('click', () => {
    document.getElementById('pop_close').classList.add('class_close');
});
const btn__sub = document.getElementById('btn-sub');
const btn__reset = document.getElementById('btn-reset');
const btn__add = document.getElementById('btn-add');
const counter__number = document.querySelector('.counter-number');

btn__sub.addEventListener('click', function () {
   
    counter__number.innerHTML--;
})
btn__add.addEventListener('click', function () {
    counter__number.innerHTML++;
});
btn__reset.addEventListener('click', function () {
    counter__number.innerHTML = 0;
});
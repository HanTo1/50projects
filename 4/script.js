const search = document.querySelector('.search');
console.log('search: ', search);

const input = document.querySelector('.input');
console.log('input: ', input);
const button = document.querySelector('.btn');
console.log('button: ', button);

button.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
})



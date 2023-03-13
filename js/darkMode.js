const btnSwitch = document.querySelector('#switch');
let  modoOscuro = JSON.parse(localStorage.getItem("modoOscuro")) || false;

if(modoOscuro){
  document.body.classList.add('dark')
}else{
  document.body.classList.remove('dark')
  btnSwitch.classList.toggle('active');
}
btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');  
    if(modoOscuro){
    modoOscuro = false;
  } else {
    modoOscuro = true;
  }
  localStorage.setItem('modoOscuro', JSON.stringify(modoOscuro))
});
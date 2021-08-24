const option = document.getElementById("user-option");
const optionMenu = document.querySelector(".back-nav-bar");
const backButon = document.getElementById('back-btn');

option.addEventListener("click", openProfile);

function openProfile() {
  optionMenu.style.display = 'block';
 
}

backButon.addEventListener('click',function(){
  optionMenu.style.display = 'none';
  
})
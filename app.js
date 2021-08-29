const option = document.getElementById("user-option");
const optionMenu = document.querySelector(".back-nav-bar");
const backButon = document.getElementById('back-btn');

const picture = document.querySelector(".picture");
const optionProfile = document.getElementById("optionProfile");

option.addEventListener("click", openProfile);
function openProfile() {
  optionMenu.style.display = 'block';
 
}
backButon.addEventListener('click',function(){
  optionMenu.style.display = 'none';
  optionProfile.style.display = 'none';
  
})

picture.addEventListener('click', function(){
 optionProfile.style.display = 'block';
});

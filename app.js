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

document.onclick = (e) => {
  if (!e.target.closest(".option-choose-profile") && e.target.id != "change-profile-pic") {
      optionProfile.style.display = "none";
  }
}
let editPen = document.getElementById("editPen");
editPen.addEventListener('click',function(){
  document.getElementById("ed-name").focus();
 
  
})
const option = document.getElementById("user-option");
const optionMenu = document.querySelector(".menu-section");

option.addEventListener("click", openProfile);

function openProfile() {
  optionMenu.innerHTML = `
    
    <div class="back-nav-bar">
    <div class="top-nav">
      <div class="nav-button">
        <i id="back-btn" class="material-icons back-icon" style="font-size:25px ; color: #fff;">arrow_back</i>
        <p class="header-nav">Profile</p>
      </div>
    </div>
    <div class="choose-profile">
        <img src="picture/profile-picture.jpg" class="picture"/>
    </div>
    <div class="username-profile">
      <p class="head-user">Your Name</p>
      <div class="edit-username">
        <p class="ed-name">Username</p>
        <i class='fas fa-pen pen-icon'></i>
      </div>
    </div>
    <div class="description-username">
      <p>
        This is not your username or pin.
        This name will be visible to your WhatsApp contacts.
      </p>
    </div>

    <div class="aboutUs-profile">
      <p class="about-user">About</p>
      <div class="edit-about">
        <p class="ed-status">Status</p>
        <i class='fas fa-pen pen-icon-status'></i>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</div>
    `;
}

function signUpPageAllfn() {
  signUpButton.addEventListener("click", () => {
    if (
      signUpPhoneNumberInput.value &&
      signUpPasswordInput.value &&
      signUpUsernameInput.value
    ) {
      localStorage.setItem("phoneNumber", signUpPhoneNumberInput.value);
      localStorage.setItem("user", signUpUsernameInput.value);
      localStorage.setItem("password", signUpPasswordInput.value);

      location.hash = "#signedInHomePage";
    }

    signUpPhoneNumberInput.value = "";
    signUpUsernameInput.value = "";
    signUpPasswordInput.value = "";
  });
}

function signedInArtistUserName() {
  const signedName = localStorage.getItem("user");
  const signedInArtistName = document.querySelector(".signedInArtistName");
  signedInArtistName.innerHTML = `Hi, ${signedName}`;
}

function hamburgerMenuSlider() {
  const ulList = document.querySelector(".stylingTheHamMenuHome");
  const hamburgerSignedArtist = document.querySelector(
    "#hamburgerSignedArtist"
  );
  const activeOpacity = document.querySelector(".activeOpacity");

  hamburgerSignedArtist.addEventListener("click", () => {
    if (isClicked) {
      ulList.style.display = "none";
      ulList.classList.remove("active");
    } else {
      ulList.style.display = "block";
      ulList.classList.add("active");
    }
    isClicked = !isClicked;
  });
}
function clickedTheHomeButtonWhenSigned() {
  const homeButton = document.querySelector(".homeButton");
  const ulList = document.querySelector(".stylingTheHamMenuHome");

  homeButton.addEventListener("click", (e) => {
    e.preventDefault();

    isClicked = false;
    ulList.style.display = "none";
    ulList.classList.remove("active");
  });
}

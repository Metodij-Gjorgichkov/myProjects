function signInPageAllfn() {
  const user = localStorage.getItem("user");
  const password = localStorage.getItem("password");

  loginButton.addEventListener("click", () => {
    if (
      signInUsernameInput.value === user &&
      signInPasswordInput.value === password
    ) {
      location.hash = "signedInHomePage";
      signInUsernameInput.value = "";
      signInUsernameInput.style.border = "1px solid green";
      signInPasswordInput.value = "";
      signInPasswordInput.style.border = "1px solid green";
    } else {
      signInUsernameInput.value = "";
      signInPasswordInput.value = "";
    }
  });
}

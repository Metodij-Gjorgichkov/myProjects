function handleRoute() {
  const joinAsVisitor = document.querySelector(".join-as-visitor");
  const joinAsArtist = document.querySelector(".join-as-artist");

  joinAsVisitor.addEventListener("click", () => {
    location.hash = "visitorHomePage";
  });

  joinAsArtist.addEventListener("click", () => {
    if (currentUser) {
      location.hash = "artistHomePage";
    }
  });

  document
    .querySelectorAll(".allSectionPages")
    .forEach((section) => (section.style.display = "none"));

  const hash = location.hash;

  switch (hash) {
    case "":
      landingPage.style.display = "block";
      if (!artistOptionsPopulated) {
        populateSelect(".selectArtist");
      }
      break;
    case "#visitorHomePage":
      visitorHomePage.style.display = "block";
      logoAndContent.style.display = "block";
      vectorImg.style.display = "block";
      bottomLine.style.display = "block";
      visitorHomePageAllFn();
      break;
    case "#visitorListingPage":
      visitorListingPage.style.display = "block";
      logoAndContent.style.display = "block";
      vectorImg.style.display = "block";
      bottomLine.style.display = "block";
      visitorListingPageAllFn();
      break;
    case "#visitorFiltersPage":
      visitorFiltersPage.style.display = "block";
      logoAndContent.style.display = "block";
      vectorImg.style.display = "block";
      bottomLine.style.display = "block";
      populateType("#byType");
      populateSelectFilter("#byArtist");
      break;
    case "#artistHomePage":
      artistHomePage.style.display = "block";
      logoAndContent.style.display = "block";
      bottomLine.style.display = "block";
      hamMenu.style.display = "block";
      artistHomePageAllfn();
      break;
    case "#artistItemPage":
      artistItemPage.style.display = "block";
      logoAndContent.style.display = "block";
      bottomLine.style.display = "block";
      hamMenu.style.display = "block";
      artistItemPageAllfn();
      break;
    case "#artistAddNewItemPage":
      artistAddNewItemPage.style.display = "block";
      logoAndContent.style.display = "block";
      bottomLine.style.display = "block";
      hamMenu.style.display = "block";
      showArtistName();
      dropDownMenu();
      homeOptionClicked();
      populateType("#newItemType");
      break;
    case "#captureImagePopup":
      captureImagePopup.style.display = "block";
      logoAndContent.style.display = "block";
      bottomLine.style.display = "block";
      hamMenu.style.display = "block";
      showArtistName();
      dropDownMenu();
      homeOptionClicked();
      captureImagePopupAllfn();
      break;
    case "#auctionPage":
      auctionPage.style.display = "block";
      logoAndContent.style.display = "block";
      bottomLine.style.display = "block";
      vectorImg.style.display = "block";
      auctionPageAllfn();
      break;
    case "#signInPage":
      signInPage.style.display = "block";
      signInPageAllfn();
      break;
    case "#signUpPage":
      signUpPage.style.display = "block";
      signUpPageAllfn();
      signedInArtistUserName();
      break;
    case "#signedInHomePage":
      signedInHomePage.style.display = "block";
      signedInArtistUserName();
      hamburgerMenuSlider();
      clickedTheHomeButtonWhenSigned();
      break;
    default:
      landingPage.style.display = "block";
  }
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute);

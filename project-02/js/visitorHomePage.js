function visitorHomePageAllFn() {
  slider();
  auctionPageNavigator();
}

function slider() {
  const sliderToRight = document.querySelector(".slide-right");
  const sliderToLeft = document.querySelector(".slide-left");

  const filterImg = items.filter((item) => item.image);

  function showSliderImg(div) {
    filterImg.forEach((item) => {
      div.innerHTML += `
          <img 
          class="slide-images" 
          src=${item.image}
           alt=${item.title}/>`;
    });

    const sliderImg = document.querySelectorAll(".slide-images");

    sliderImg.forEach((img) =>
      img.addEventListener("click", function () {
        location.hash = "#visitorListingPage";
      })
    );
  }

  showSliderImg(sliderToRight);
  showSliderImg(sliderToLeft);
}

function auctionPageNavigator() {
  vectorImg.addEventListener("click", () => {
    location.hash = "#auctionPage";
  });
}

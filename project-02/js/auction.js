function auctionPageAllfn() {
  getBackToHomePage.addEventListener("click", () => {
    location.hash = "#visitorHomePage";
  });

  if (currentUser) {
    confirmBidderPriceBtn.disabled = true;
  }

  if (isItemAuctioning) {
    liveAuctionOn.style.display = "block";
    noLiveAuction.style.display = "none";
  } else {
    liveAuctionOn.style.display = "none";
    noLiveAuction.style.display = "block";
  }

  function placeBid(bidAmount) {
    const formData = new FormData();
    formData.set("amount", bidAmount);

    fetch("https://projects.brainster.tech/bidding/api", {
      method: "POST",
      body: formData,
    })
      .then((rawData) => rawData.json())
      .then((data) => {
        if (data.isBidding) {
          highestBid = data.bidAmount;
          secondsRemaining += 60;
        }
      })
      .catch((error) => {
        console.error("Bidding API error:", error);
      });
  }

  confirmBidderPriceBtn.addEventListener("click", () => {
    const bidAmount = parseInt(biddingPriceInput.value);
    if (!isNaN(bidAmount)) {
      placeBid(bidAmount);
      biddingPriceInput.value = "";
      confirmBidderPriceBtn.disabled = true;
    }
  });
}

function startTheCountDown() {
  const interval = setInterval(() => {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    countDownElement.innerHTML = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;

    if (secondsRemaining === 0) {
      localStorage.removeItem("remainingSeconds");
      localStorage.removeItem("auctionInfo");
      clearInterval(interval);
      auctionText.textContent = "The auction is over";
      countDownElement.textContent = "";
      countDownElement.classList.add("bg-danger");
      countDownElement.classList.remove("bg-success");
      bidderColumn.style.display = "none";
      isItemAuctioning = false;
      noLiveAuction.style.display = "block";

      const disablingAllSendToAuctionBtns = document.querySelectorAll(
        ".send-to-auction-btns"
      );
      disablingAllSendToAuctionBtns.forEach((btn) => {
        btn.setAttribute("disabled", false);
      });
    } else {
      secondsRemaining--;
      localStorage.setItem("remainingSeconds", secondsRemaining);
    }
  }, 1000);
}

window.addEventListener("load", () => {
  const storedAuctionInfo = localStorage.getItem("auctionInfo");
  const secondsLeft = localStorage.getItem("remainingSeconds");

  if (storedAuctionInfo) {
    const { item, isAuctioning } = JSON.parse(storedAuctionInfo);

    const auctionImage = document.querySelector(".auction-image");
    const auctionTitle = document.querySelector(".auction-title");
    const auctionDescription = document.querySelector(".auction-description");
    const auctionPrice = document.querySelector(".auction-price");

    auctionImage.src = item.image;
    auctionTitle.textContent = item.title;
    auctionDescription.textContent = item.description;
    auctionPrice.textContent = `$${item.price}`;
    isItemAuctioning = isAuctioning;

    if (isAuctioning) {
      secondsRemaining = secondsLeft;
      startTheCountDown();
    }
    if (secondsLeft === 0) {
      localStorage.removeItem(secondsLeft);
    }
  }
});

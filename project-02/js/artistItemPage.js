function artistItemPageAllfn() {
  showArtistName();
  dropDownMenu();
  homeOptionClicked();
  addNewItem();
  cancelItem();
  addingNewItemToTheList();
  scrolledAtBottom("#slideUpIconArtist", "#slideDownArtist");
}

function createArtistCard(item) {
  const parentDiv = document.createElement("div");
  parentDiv.id = item.id;

  const imageArtist = document.createElement("img");
  imageArtist.classList.add("d-block");
  imageArtist.src = item.image;

  const mainDiv = document.createElement("div");
  mainDiv.classList.add("background-light", "p-2");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "pb-3"
  );
  const divForHeaderAndSpan = document.createElement("div");

  const headerFive = document.createElement("h5");
  headerFive.classList.add("mb-0");
  headerFive.textContent = item.title;

  const span = document.createElement("span");
  span.textContent = formatDate(item.dateCreated);

  const priceButton = document.createElement("button");
  priceButton.classList.add("font-roboto", "button-price", "border-0");
  priceButton.textContent = `$${item.price}`;

  const paragraph = document.createElement("p");
  paragraph.classList.add("font-roboto", "mb-0");
  paragraph.textContent = item.description;

  const buttons = document.createElement("div");
  buttons.classList.add(
    "buttons",
    "px-0",
    "py-2",
    "default-bg",
    "d-flex",
    "justify-content-around",
    "align-content-center"
  );

  const sendToAuctionBtn = document.createElement("button");
  sendToAuctionBtn.classList.add(
    "btn-sm",
    "light-color",
    "send-to-auction-btns",
    "sendToAuction",
    "bg-primary",
    "border-0"
  );
  sendToAuctionBtn.textContent = "Send to Auction";

  sendToAuctionBtn.addEventListener("click", () => {
    disableAllSendToAuctionButtons();
    location.hash = "#auctionPage";
    fillAuctionPage(item);
  });

  const isPubslishedBtn = document.createElement("button");
  isPubslishedBtn.classList.add(
    "btn-sm",
    "border-0",
    "light-color",
    `btn-${item.isPublished ? "success" : "secondary"}`
  );
  isPubslishedBtn.textContent = `${item.isPublished ? "Unpublish" : "Publish"}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn-sm", "bg-danger", "light-color", "border-0");
  deleteBtn.textContent = "Remove";

  const editBtn = document.createElement("button");
  editBtn.classList.add("btn-sm", "background-light", "border-0");
  editBtn.textContent = "Edit";

  editBtn.addEventListener("click", () => {
    populateTheItemForm(item);
    location.hash = "artistAddNewItemPage";
  });

  deleteBtn.addEventListener("click", (event) => {
    const removeBtn = event.target.parentElement.parentElement;

    let isConfirmed = confirm("Are you sure you want to remove the card?");
    if (isConfirmed) {
      removeBtn.remove();
      items = items.filter((e) => e.id !== item.id);
      showArtistListofCards();
    } else {
      return;
    }
  });

  isPubslishedBtn.addEventListener("click", () => {
    if (item.isPublished) {
      isPubslishedBtn.textContent = "Publish";
      isPubslishedBtn.classList.add("btn-success");
      isPubslishedBtn.classList.remove("btn-secondary");
      item.isPublished = false;
    } else {
      isPubslishedBtn.textContent = "Unpublish";
      isPubslishedBtn.classList.add("btn-secondary");
      isPubslishedBtn.classList.remove("btn-success");
      item.isPublished = true;
    }
    showArtistListofCards();
  });

  buttons.append(sendToAuctionBtn, isPubslishedBtn, deleteBtn, editBtn);
  divForHeaderAndSpan.append(headerFive, span);
  contentDiv.append(divForHeaderAndSpan, priceButton);
  mainDiv.append(contentDiv, paragraph);
  parentDiv.append(imageArtist, mainDiv, buttons);

  return parentDiv;
}

function addNewItem() {
  const addNewItemBox = document.querySelector(".box-add-new-item");

  addNewItemBox.addEventListener("click", () => {
    location.hash = "#artistAddNewItemPage";
  });
}
function cancelItem() {
  const cancelItem = document.querySelector(".cancelItem");

  const isPublishedCheckbox = document.querySelector("#isPublishedCheckbox");
  const titleNewItem = document.querySelector("#titleNewItem");
  const descriptionNewItem = document.querySelector("#descriptionNewItem");
  const newItemType = document.querySelector("#newItemType");
  const newItemPrice = document.querySelector("#newItemPrice");
  const newItemImageUrl = document.querySelector("#newItemImageUrl");

  cancelItem.addEventListener("click", () => {
    isPublishedCheckbox.value = "";
    titleNewItem.value = "";
    descriptionNewItem.value = "";
    newItemType.value = "";
    newItemPrice.value = "";
    newItemImageUrl.value = "";
    location.hash = "#artistItemPage";
  });
}

function addingNewItemToTheList() {
  const isPublishedCheckbox = document.querySelector("#isPublishedCheckbox");
  const titleNewItem = document.querySelector("#titleNewItem");
  const descriptionNewItem = document.querySelector("#descriptionNewItem");
  const newItemType = document.querySelector("#newItemType");
  const newItemPrice = document.querySelector("#newItemPrice");
  const newItemImageUrl = document.querySelector("#newItemImageUrl");
  const addNewItemForm = document.querySelector(".add-item-form");
  const previewImage = document.querySelector("#preview");
  const addNewItem = document.querySelector(".addNewItem");
  addNewItem.textContent = "Add";

  addNewItemForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (addNewItem.textContent === "Add") {
      if (captureImage) {
        newItemImageUrl.value = "";
        previewImage.src = "";
        captureCameraSnap.style.display = "block";
        snapTitle.style.display = "block";
        dashedBox.classList.add("p-5");
      }

      if (
        isPublishedCheckbox.value ||
        titleNewItem.value ||
        descriptionNewItem.value ||
        newItemType.value ||
        newItemPrice.value ||
        newItemImageUrl.value
      ) {
        const newItem = {
          id: new Date().valueOf(),
          artist: currentUser,
          title: titleNewItem.value,
          description: descriptionNewItem.value,
          type: newItemType.value,
          price: newItemPrice.value,
          dateCreated: new Date(),
          image: newItemImageUrl.value || captureImage,
          isPublished: isPublishedCheckbox.checked,
          isAuctioning: false,
        };
        items.unshift(newItem);
        showArtistListofCards();
        location.hash = "artistItemPage";
      }
    }

    isPublishedCheckbox.value = "";
    titleNewItem.value = "";
    descriptionNewItem.value = "";
    newItemType.value = "";
    newItemPrice.value = "";
    newItemImageUrl.value = "";
  });
}

function populateTheItemForm(item) {
  const addNewItem = document.querySelector(".addNewItem");
  addNewItem.textContent = "Update";

  const isPublishedCheckbox = document.querySelector("#isPublishedCheckbox");
  const newItemTitle = document.querySelector("#titleNewItem");
  const newItemDescription = document.querySelector("#descriptionNewItem");
  const newItemType = document.querySelector("#newItemType");
  const newItemPrice = document.querySelector("#newItemPrice");
  const newItemImageUrl = document.querySelector("#newItemImageUrl");
  const previewImage = document.querySelector("#preview");

  isPublishedCheckbox.checked = item.isPublished;
  newItemTitle.value = item.title;
  newItemDescription.value = item.description;
  newItemType.value = item.type;
  newItemPrice.value = item.priceSold;
  newItemImageUrl.value = item.image;

  addNewItem.addEventListener("click", () => {
    if (addNewItem.textContent === "Update") {
      if (captureImage) {
        newItemImageUrl.value = "";
        previewImage.src = "";
        captureCameraSnap.style.display = "block";
        snapTitle.style.display = "block";
        dashedBox.classList.add("p-5");
      }

      item.isPublished = isPublishedCheckbox.checked;
      item.title = newItemTitle.value;
      item.description = newItemDescription.value;
      item.type = newItemType.value;
      item.priceSold = newItemPrice.value;
      item.image = newItemImageUrl.value || captureImage;

      showArtistListofCards();
      location.hash = "artistItemPage";
    }
  });
}

function fillAuctionPage(item) {
  const auctionImage = document.querySelector(".auction-image");
  const auctionTitle = document.querySelector(".auction-title");
  const auctionDescription = document.querySelector(".auction-description");
  const auctionPrice = document.querySelector(".auction-price");

  auctionImage.src = item.image;
  auctionTitle.textContent = item.title;
  auctionDescription.textContent = item.description;
  auctionPrice.textContent = `$${item.price}`;
  item.isAuctioning = true;
  isItemAuctioning = true;

  localStorage.setItem(
    "auctionInfo",
    JSON.stringify({
      item: item,
      isAuctioning: true,
    })
  );

  startTheCountDown();
}

function disableAllSendToAuctionButtons() {
  const disablingAllSendToAuctionBtns = document.querySelectorAll(
    ".send-to-auction-btns"
  );

  disablingAllSendToAuctionBtns.forEach((btn) => {
    btn.setAttribute("disabled", true);
  });
}

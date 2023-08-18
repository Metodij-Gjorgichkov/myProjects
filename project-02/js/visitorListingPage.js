function visitorListingPageAllFn() {
  renderListingPage();
  visitorFilterRendering();
  filter();
  populateType("#byType");
  populateSelectFilter("#byArtist");
  scrolledAtBottom();
}

function renderListingPage() {
  const renderCards = document.querySelector(".renderCards");

  const publishedItems = items.filter((item) => item.isPublished);
  renderCards.innerHTML = "";

  publishedItems.forEach((item) => {
    renderCards.innerHTML += `
          <div class="col-12 cardEvenOdd px-0 pb-3 mb-5">
            <img src="${item.image}" class="d-block" alt="" />
            <div class="content-box p-3">
              <div class="d-flex justify-content-between align-items-center">
                <h3>${item.artist}</h3>
                <button class="font-roboto button-price border-0">
                  $${item.price}
                </button>
              </div>
              <p class="mb-0 font-roboto">${item.title}</p>
              <p class="font-roboto mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi, sit, suscipit nulla beatae porro deleniti
              </p>
            </div>
          </div>`;
    evenOrOddCard();
  });
}

function visitorFilterRendering() {
  const checkMark = document.querySelector(".check-mark");
  const exitIcon = document.querySelector(".exit-icon");

  checkMark.addEventListener("click", () => {
    location.hash = "#visitorListingPage";
    filter();
  });

  exitIcon.addEventListener("click", () => {
    location.hash = "#visitorListingPage";
  });
}

function evenOrOddCard() {
  const cardEvenOrOdd = document.querySelectorAll(".cardEvenOdd");

  cardEvenOrOdd.forEach((item, index) => {
    if (index % 2 === 0) {
      item.classList.add("card-one");
    } else {
      item.classList.add("card-two");
    }
  });
}

function filter() {
  const renderCards = document.querySelector(".renderCards");
  const itemTitle = document.querySelector("#itemTitle").value.toLowerCase();
  const byArtist = document.querySelector("#byArtist").value;
  const min = document.querySelector("#min").value;
  const max = document.querySelector("#max").value;
  const byType = document.querySelector("#byType").value;

  const publishedItems = items.filter((item) => item.isPublished);

  let filtered = publishedItems.filter(
    (item) =>
      (itemTitle ? item.title.toLowerCase().includes(itemTitle) : true) &&
      (byArtist ? item.artist === byArtist : true) &&
      (min ? item.price >= min : true) &&
      (max ? item.price <= max : true) &&
      (byType ? item.type === byType : true)
  );

  renderCards.innerHTML = "";

  filtered.forEach((item) => {
    renderCards.innerHTML += `
      <div class="col-12 cardEvenOdd px-0 pb-3 mb-5">
        <img src="${item.image}" class="d-block" alt="" />
        <div class="content-box p-3">
          <div class="d-flex justify-content-between align-items-center">
            <h3>${item.artist}</h3>
            <button class="font-roboto button-price border-0">
              $${item.price}
            </button>
          </div>
          <p class="mb-0 font-roboto">${item.title}</p>
          <p class="font-roboto mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Excepturi, sit, suscipit nulla beatae porro deleniti
          </p>
        </div>
      </div>`;
    evenOrOddCard();
  });
}

function populateType(selectType) {
  const selectArtist = document.querySelector(selectType);

  selectArtist.innerHTML = "";
  selectArtist.innerHTML = ` <option value="" class='light-color' disabled selected>Choose</option>`;
  itemTypes.forEach((user) => {
    selectArtist.innerHTML += `
      <option value="${user}" >${user}</option>`;
  });
}
function populateSelectFilter(selectItem) {
  const selectArtist = document.querySelector(selectItem);

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      selectArtist.innerHTML = "";
      selectArtist.innerHTML = ` <option value="" disabled selected>Choose</option>`;
      data.forEach((user) => {
        selectArtist.innerHTML += `
              <option value="${user.name}" >${user.name}</option>
            `;
      });
    });
}

function scrolledAtBottom() {
  const slideUpIcon = document.querySelector("#slideUpIcon");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= window.innerHeight) {
      slideUpIcon.style.display = "block";
    } else {
      slideUpIcon.style.display = "none";
    }

    slideUpIcon.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

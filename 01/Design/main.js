document
  .querySelector("#filter-marketing")
  .addEventListener("change", filterMarketing);
document
  .querySelector("#filter-coding")
  .addEventListener("change", filterCoding);
document
  .querySelector("#filter-design")
  .addEventListener("change", filterDesign);

function filterMarketing() {
  hideAllCards();

  if (document.querySelector("#filter-marketing").checked) {
    let marketingChecked = document.querySelectorAll(".marketing-checked");
    marketingChecked.forEach((element) => {
      element.style.background = "#ff0000";
      element.style.color = "#343a40";
    });

    let marketingCards = document.querySelectorAll(".marketing");
    marketingCards.forEach((marketingCard) => {
      marketingCard.style.display = "inline-block";
    });

    document.querySelector("#filter-design").checked = false;
    document.querySelector("#filter-coding").checked = false;

    let codingChecked = document.querySelectorAll(".coding-checked");
    codingChecked.forEach((element) => {
      element.style.background = "#343a40";
      element.style.color = "#fff";
    });
    let designChecked = document.querySelectorAll(".design-checked");
    designChecked.forEach((element) => {
      element.style.background = "#343a40";
      element.style.color = "#fff";
    });
  } else {
    showAllCards();
    let marketingChecked = document.querySelectorAll(".marketing-checked");
    marketingChecked.forEach((element) => {
      element.style.background = "#343a40";
      element.style.color = "#fff";
    });
  }
}

function filterCoding() {
  hideAllCards();

  if (document.querySelector("#filter-coding").checked) {
    let codingChecked = document.querySelectorAll(".coding-checked");
    codingChecked.forEach((element) => {
      element.style.background = "#ff0000";
      element.style.color = "#343a40";
    });

    let codingCards = document.querySelectorAll(".coding");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "inline-block";
    });

    document.querySelector("#filter-design").checked = false;
    document.querySelector("#filter-marketing").checked = false;

    let designChecked = document.querySelectorAll(".design-checked");
    designChecked.forEach((element) => {
      element.style.background = "#343a40";
      element.style.color = "#fff";
    });
    let marketingChecked = document.querySelectorAll(".marketing-checked");
    marketingChecked.forEach((element) => {
      element.style.background = "#343a40";
      element.style.color = "#fff";
    });
  } else {
    showAllCards();
    let codingChecked = document.querySelectorAll(".coding-checked");
    codingChecked.forEach((element) => {
      element.style.background = "#343a40";
      element.style.color = "#fff";
    });
  }
}

function filterDesign() {
  hideAllCards();

  if (document.querySelector("#filter-design").checked) {
    let designChecked = document.querySelectorAll(".design-checked");
    designChecked.forEach((element) => {
      element.style.background = "#ff0000";
      element.style.color = "#343a40";
    });

    let designCards = document.querySelectorAll(".design");
    designCards.forEach((designCard) => {
      designCard.style.display = "inline-block";
    });

    document.querySelector("#filter-coding").checked = false;
    document.querySelector("#filter-marketing").checked = false;

    let codingChecked = document.querySelectorAll(".coding-checked");
    codingChecked.forEach((element) => {
      element.style.background = "#343a40";
      element.style.color = "#fff";
    });
    var marketingChecked = document.querySelectorAll(".marketing-checked");
    marketingChecked.forEach((element) => {
      element.style.background = "#343a40";
      element.style.color = "#fff";
    });
  } else {
    showAllCards();
    let designChecked = document.querySelectorAll(".design-checked");
    designChecked.forEach((element) => {
      element.style.background = "#343a40";
      element.style.color = "#fff";
    });
  }
}

function hideAllCards() {
  let allCards = document.querySelectorAll(".card-hidden");

  allCards.forEach((card) => {
    card.style.display = "none";
  });
}

function showAllCards() {
  let allCards = document.querySelectorAll(".card-hidden");

  allCards.forEach((card) => {
    card.style.display = "inline-block";
  });
}

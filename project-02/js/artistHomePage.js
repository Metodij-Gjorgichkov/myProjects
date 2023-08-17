function artistHomePageAllfn() {
  showArtistName();
  dropDownMenu();
  showListItems();
  homeOptionClicked();
  chart();
}

function showArtistName() {
  const artistName = document.querySelector(".artistName");
  if (currentUser) {
    artistName.textContent = localStorage.getItem("artistNames");
    artistName.classList.add("logo-content");
  } else {
    location.hash = "";
  }
}

function homeOptionClicked() {
  const homeOption = document.querySelector("#homeOption");

  homeOption.addEventListener("click", () => {
    location.hash = "artistHomePage";
    toggled = false;
    menuList.style.display = "none";
  });
}
function dropDownMenu() {
  hamMenu.addEventListener("click", () => {
    if (toggled) {
      menuList.style.display = "none";
      toggled = false;
    } else {
      menuList.style.display = "block";
      menuList.style = "z-index: 111;";
      toggled = true;
    }
  });
}

function showListItems() {
  const artistItemsSold = document.querySelector("#itemsSold");
  const artistPublishedItems = document.querySelector("#publishedItems");
  const totalIncome = document.querySelector("#totalIncome");

  const filteredList = items.filter(
    (item) => item.artist === currentUser && item.isPublished
  );

  const soldItemsList = filteredList.filter(
    (item) => item.artist === currentUser && item.isPublished && item.dateSold
  );

  const numOfListItems = filteredList.length;
  const numberOfSoldItems = soldItemsList.length;

  let getNumbers = soldItemsList.map((item) => item.priceSold);
  let total = getNumbers.reduce((x, y) => x + y);

  artistItemsSold.textContent = numberOfSoldItems;
  artistPublishedItems.textContent = numOfListItems;
  totalIncome.textContent = `$${total}`;
}

function chart() {
  const filteredItems = items.filter(
    (item) => item.artist === currentUser && !!item.priceSold
  );
  const labels = generateDates(14);
  const last7 = document.querySelector("#last-7-days");
  const last14 = document.querySelector("#last-14-days");
  const last30 = document.querySelector("#last-30-days");
  const newData = labels.map((label) => {
    let sum = 0;
    filteredItems.forEach((item) => {
      if (formatDate(item.dateSold) === label) {
        sum += item.priceSold;
      }
    });
    return sum;
  });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Amount",
        backgroundColor: "#A16A5E",
        borderColor: "#A16A5E",
        data: newData,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: { indexAxis: "y" },
  };
  let myChart = new Chart(document.getElementById("myChart"), config);

  last7.addEventListener("click", function () {
    dataChart(7);
  });
  last14.addEventListener("click", function () {
    dataChart(14);
  });
  last30.addEventListener("click", function () {
    dataChart(30);
  });

  function dataChart(days) {
    const labels = generateDates(days);
    myChart.data.labels = labels;

    const Dates = labels.map((label) => {
      let sum = 0;
      filteredItems.forEach((item) => {
        if (formatDate(item.dateSold) === label) {
          sum += item.priceSold;
        }
      });
      return sum;
    });
    myChart.data.datasets[0].data = Dates;
    myChart.update();
  }
}

function generateDates(days) {
  const arr = [];

  const date = new Date();
  const msInDay = 24 * 60 * 60 * 1000;

  for (let i = 0; i < days; i++) {
    const newDate = new Date(date - i * msInDay);
    let modifiedDate = newDate.toLocaleDateString();
    arr.push(modifiedDate);
  }
  return arr;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB");
}

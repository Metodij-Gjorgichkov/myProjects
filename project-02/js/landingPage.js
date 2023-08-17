logoAndContent.addEventListener("click", () => {
  location.hash = "";
});

function populateSelect(selectItem) {
  const selectArtist = document.querySelector(selectItem);

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((user) => {
        selectArtist.innerHTML += `
          <option class="text-right" value="${user.name}" >${user.name}</option>
        `;
      });
      artistOptionsPopulated = true;

      selectArtist.addEventListener("change", function (e) {
        currentUser = e.target.value;
        localStorage.setItem("artistNames", currentUser);
        showArtistListofCards();
      });
    });
}

function showArtistListofCards() {
  const artistCardPopulater = document.querySelector(".artist-card-populater");

  const filterArtistCards = items.filter((item) =>
    item.artist.includes(currentUser)
  );
  artistCardPopulater.innerHTML = "";

  filterArtistCards.forEach((item) => {
    const artistCard = createArtistCard(item);

    artistCardPopulater.append(artistCard);
  });
}

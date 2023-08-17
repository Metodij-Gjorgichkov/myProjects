let currentUser;
let artistOptionsPopulated = false;
let toggled = false;
let isClicked = false;

// landingPage, navbar,  visitorHomePage, visitorFilterPage, artistHomePage, artistItemPage, artistAddNewItemPage, captureImagePopup
const landingPage = document.querySelector("#landingPage");
const visitorHomePage = document.querySelector("#visitorHomePage");
const visitorListingPage = document.querySelector("#visitorListingPage");
const visitorFiltersPage = document.querySelector("#visitorFiltersPage");
const artistHomePage = document.querySelector("#artistHomePage");
const artistItemPage = document.querySelector("#artistItemPage");
const artistAddNewItemPage = document.querySelector("#artistAddNewItemPage");
const captureImagePopup = document.querySelector("#captureImagePopup");
const auctionPage = document.querySelector("#auctionPage");
const logoAndContent = document.querySelector("#logoAndContent");
const getBack = document.querySelector("#getBack");
const hamMenu = document.querySelector("#hamMenu");
const menuList = document.querySelector("#menuList");
const vectorImg = document.querySelector("#vectorImg");
const bottomLine = document.querySelector("#bottomLine");
const filterImg = document.querySelector("#filterImg");
const checkMark = document.querySelector(".check-mark");
const exitIcon = document.querySelector(".exit-icon");

// auctionPage
let isItemAuctioning;
let highestBid = 0;
const liveAuctionOn = document.querySelector(".main-container");
const noLiveAuction = document.querySelector(".no-live-auction");
const getBackToHomePage = document.querySelector(".get-back");
const bidderColumn = document.querySelector(".bidder");
const biddingPriceInput = document.querySelector("#bidding-price");
const countDownElement = document.querySelector(".auction-seconds");
const confirmBidderPriceBtn = document.querySelector(".confirmBidderPrice");
const auctionText = document.querySelector(".auction-text");
let secondsRemaining = 2 * 60;

// captureImagePopup
let captureImage;
const captureCameraSnap = document.querySelector(".capture-camera-snap");
const snapTitle = document.querySelector(".snap-title");
const dashedBox = document.querySelector(".dashed-box");

// sign in page
const signInPage = document.querySelector("#signInPage");
const signInUsernameInput = document.querySelector("#signInUsernameInput");
const signInPasswordInput = document.querySelector("#signInPasswordInput");
const loginButton = document.querySelector(".loginButton");

// sign up page
const signUpPage = document.querySelector("#signUpPage");
const signUpPhoneNumberInput = document.querySelector(
  "#signUpPhoneNumberInput"
);
const signUpUsernameInput = document.querySelector("#signUpUsernameInput");
const signUpPasswordInput = document.querySelector("#signUpPasswordInput");
const signUpButton = document.querySelector(".signUpButton");

// signed in home page
const signedInHomePage = document.querySelector("#signedInHomePage");

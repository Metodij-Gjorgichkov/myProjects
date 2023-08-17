# Street Artists App

# StreetARTists is a web platform designed to empower street artists by providing them with a modern space to showcase their masterpieces and track their income. This application aims to address the challenges artists face in managing their artworks and online presence. With StreetARTists, artists can create profiles, list their creations, and participate in live auctions.

# Table of Contents

- Introduction
- Landing Page
- Visitor - Home Page
- Visitor - Listing Page
- Artist - Home Page
- Artist - Menu
- Artist - Items Page
- Artist - New/Edit Item
- Artist - Capture Image Popup
- Auctioning
- Technologies Used

# Introduction

StreetARTists is a revolutionary platform that bridges the gap between street artists and their audience. The application allows artists to efficiently manage their income tracking, view statistics, and create a professional online presence to attract a global audience.

# Landing Page

Join as Artist: Choose an artist from a dropdown list of options, linked to data from jsonplaceholder.typicode.com/users.
Join as Visitor: Redirect to the Visitor Home Page.

# Visitor - Home Page

Showcase for the platform with a banner and sliders.
Carousel for quick browsing.
Call-to-action button leading to the Visitor Listing Page.

# Visitor - Listing Page

Display listings of available items from different artists.
Filters for refining search by name, artist, price, type.
Apply filter to update listing.
Cards to display item information.
Cards rendered from the "items" array in data.js.
Only show items with "isPublished: true".
Floating filter icon to open/close filters panel.

# Artist - Home Page

Display artist-specific information.
Widgets for Total Items Sold, Total Income, Live Auctioning Item, and Chart.
Chart displays data based on quick picker options.
Clicking on chart options updates chart data.

# Artist - Menu

Slide-down panel with links to Home, Items, and Auction pages.
Artist - Items Page
Display all items of the logged-in artist.
Cards with Send to Auction, Publish/Unpublish, Remove, and Edit buttons.
Send to Auction sends item to live auction (only if no ongoing auction).
Publish/Unpublish toggles item visibility.
Remove removes the card and item from the list.
Edit opens the Artist Add/Edit Item Page in edit mode.

# Artist - New/Edit Item

Create a new item with image, title, description, type, price, and artist.
Edit existing items with pre-filled fields.
Captures image from device, stores it as the image property.

# Auctioning

Simulated live auction page.
Timer starts from 2:00 minutes.
Visitors can bid.
We need to reload the page to enter the visitor mode.
Item updated based on bidding responses.
Timer state stored in local storage for refresh persistence.

# Technologies Used

HTML5, CSS3, Bootstrap4 JavaScript
Chart.js library

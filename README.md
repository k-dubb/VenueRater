
Welcome to venueRater! An app where you can rate sporting and music venues (based on things like parking accessibility, food/drink options, cleanliness, overall experience, etc.) and save your favorites to access later. 
---

### Technologies used:

Node.js, JS, jQuery, AJAX, NoSQL- mongoose/MongoLab, incorporating the SeatGeek API, building my own API, Passport user auth, HTML, CSS, Semantic UI, Bootstrap, Heroku

---

### Approach taken:

I started with user stories to determine what we wanted our users to be able to do. I then ranked the user stories into MVP, On Deck, and Ice Box using Trello. Next, I drew out wireframes for my pages.

Drawing out the ERD was my next step. This helped me see the relationships between my data and assisted when I created the schema after setting up my NoSQL database in MongoLab.

I used AJAX to pull data from the SeatGeek API. In order to use this data on another page's view, I used the 'request' node module in my routes to make a htpp call.

---

### Unsolved problems:

My goal was to save a venue's "rates" and a user's "favorites" using my database and API I created. Since time was limited, I wasn't able to accomplish this YET. It is a work in progress and I do plan on adding these features in the future. I'd also like to show the average rating for a venue. 
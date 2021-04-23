/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  likeCounter() {
    this.numberOfLikes = +1;
  }
};
var tweet1 = new Tweet("Jane", "Grand Canyon", "17:00", 0, "Sooooooo cool", "tweet1");
var tweet2 = new Tweet("Ned", "Ski trip", "11:00", 69, "Feels like I'm wearin nothin at all!", "tweet2");
console.log(tweet1);
console.log(tweet2);

tweet1.likeCounter();
console.log(tweet1);

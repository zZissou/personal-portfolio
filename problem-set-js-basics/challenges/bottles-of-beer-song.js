/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE
function bottlesOfBeer(n) {
  for (var i = n; i > 0; i--) {
    if (i > 1) {
      console.log(i + "bottles of beer on the wall,");
      console.log(i + "bottles of beer!");
      console.log("Take one down and pass it around,");
    } else if (i === 1) {
      console.log(i + "bottle of beer on the wall,");
      console.log(i + "bottle of beer!");
      console.log(i + "take it down and keep it for yourself");
      console.log(i + "No more bottles of beer on the wall...");
    } else {
      console.log("I SAID THERE'S NO MORE");
    }
  }
}

//your JS code here. If required.
// Get a reference to the element with id="level"
var levelElement = document.getElementById("level");

// Traverse up the DOM tree to find the body element and count the number of levels
var level = 0;
var currentNode = levelElement;
while (currentNode.parentNode !== null && currentNode.parentNode.nodeName !== "BODY") {
  level++;
  currentNode = currentNode.parentNode;
}

// Print the result using the alert() method
alert("The level of the element is: " + level);
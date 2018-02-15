function findWaldo(arr, found) {
  arr.forEach(function(item, index) {
    if (item === "Waldo") {
      found(index);   // execute callback
    }
  });
}

function actionWhenFound(arr) {
  console.log("Found Waldo at Index: " + arr + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0; 
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i ++ 
}
// Write a for loop that prints out the contents of ingredients:
for (var d of ingredients) {
  console.log(d); 
} 
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var e = ingredients.length - 1; e > -1; e --) {
  console.log(ingredients[e]); 
}


var cart = [
    {
        "name": "apple",
        "price": 1.25,
        "quantity": 5
    },
    {
        "name": "kiwi",
        "price": 3.99,
        "quantity": 7
    },
    {
        "name": "orange",
        "price": 1.50,
        "quantity": 8
    },
]

// How would we determine how many types of items are in the cart? What if there are more than we can reasonably, manually count?
cart.length;
// Write the code necessary to access the number of apples
cart[0].quantity
apples.quantity;

// Write the code necessary to determine how much we spent on kiwis, in total
var kiwis = cart[1];
var totalSpentOnKiwis = kiwis.price * kiwis.quantity;

// Write the code to sum up the quantity of all items in the cart
var oranges = cart[2];
var quantityOfAllItems = apples.quantity + kiwis.quantity + oranges.quantity;

//Write the code necessary to sum of the quantity of all items (if we have a huge collection)
quantityOfAllItems = 0;
var fruit = cart[0];

//new value of quantity variable is its current value + fruit quantity
quantityOfAllItems = quantityOfAllItems + fruit.quantity;

// Write the code necessary to update the cost of each fruit to be 30% more.

// Write the code necessary to determine the average cost per item. Add price*quantity for each item together then divide by the total number.

// Write the code necessary to convert each item's price property into a string with a dollar sign like "$1.50"

// Write the code necessary to capitalize the first letter of each item's name property.


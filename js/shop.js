// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    for (i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i])
            break;
        }
    }
    document.getElementById("count_product").innerHTML = cartList.length
    console.log(cartList)

    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 2
function cleanCart() {
    cartList = [];
    document.getElementById("cart_list").innerHTML = cartList.length
    document.getElementById("count_product").innerHTML = cartList.length
    document.getElementById("total_price").innerHTML = total

}

// Exercise 3
function calculateTotal() {
    let total = 0
    let i = 0
    for (i = 0; i < cartList.length; i++) {
        total += cartList[i].price

    }
    document.getElementById("total_price").innerHTML = total
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart = [];
    for (let i = 0; i < cartList.length; i++) {

        const cartListItem = cartList[i];
        const cartItem = cart.find(element => element.id === cartListItem.id);

        if (cartItem === undefined) {
            cartListItem.quantity = 1
            cartListItem.subTotal = cartListItem.price;
            cart.push(cartListItem);
        }
        else {
            cartItem.quantity++;
            cartItem.subTotal = cartItem.price * cartItem.quantity;
        }


    }

    applyPromotionsCart();
    console.log(cart);

}





// Exercise 5
function applyPromotionsCart() {

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        item.subtotalWithDiscount = item.subTotal;
        if (item.id === 1 && item.quantity >= 3) {
            item.subtotalWithDiscount = 10 * item.quantity
        }

        if (item.id === 3 && item.quantity >= 10) {
            item.subtotalWithDiscount = item.price * item.quantity * 2 / 3
        }
        // Apply promotions to each item in the array "cart"
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    generateCart()
    calculateTotal()

    const table = document.getElementById("cart_list");
    table.innerHTML="";
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        // Create an empty <tr> element and add it to the 1st position of the table:
        const row = table.insertRow(0);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        const productName = row.insertCell(0);
        const productPrice = row.insertCell(1);
        const productQuantity = row.insertCell(2);
        const productSubTotal = row.insertCell(3);

        // Add some text to the new cells:
        productName.innerHTML = item.name ;
        productPrice.innerHTML = item.price;
        productQuantity.innerHTML = item.quantity;
        productSubTotal.innerHTML = item.subtotalWithDiscount;
        
    }
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}
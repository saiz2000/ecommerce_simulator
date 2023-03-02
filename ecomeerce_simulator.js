// SIMPLE SIMULADOR ECOMMERCE 


/*alert("Please enter the number of the product you would like to purchase. If you are finished, enter '0'.")
let selectedProduct = Number(prompt("1 - Keyboard $80.00, 2 - Electric handle $200.00, 3 - AirPods $300.00, 4 - Watch $100.00"));
let selectedQuantity
let totalCost = 0


const calculateCost = (quantity, price) => {
    return quantity * price
};

while (selectedProduct != 0) {
    switch(selectedProduct) {
        case 1:
            selectedQuantity = Number(prompt("You have selected a keyboard. Please enter the quantity you would like to purchase."));
            totalCost += calculateCost(selectedQuantity, 80.00);
            console.log(totalCost)
            break
        case 2:
            selectedQuantity = Number(prompt("You have selected an electric handle. Please enter the quantity you would like to purchase."));
            totalCost += calculateCost(selectedQuantity, 200.00);
            console.log(totalCost)
            break
        case 3:
            selectedQuantity = Number(prompt("You have selected AirPods. Please enter the quantity you would like to purchase."));
            totalCost += calculateCost(selectedQuantity, 300.00)
            console.log(totalCost)
            break
        case 4:
            selectedQuantity = Number(prompt("You have selected a watch. Please enter the quantity you would like to purchase."));
            totalCost += calculateCost(selectedQuantity, 100.00)
            console.log(totalCost)
            break
        default:
            alert("Invalid selection. Please try again.")
            break
    }
    selectedProduct = Number(prompt("1 - Keyboard $80.00, 2 - Electric handle $200.00, 3 - AirPods $300.00, 4 - Watch $100.00"))
    
}


alert("Your total purchase amount is: $" + totalCost)*/


// SECOND IMPLEMMENTATION //

const sneakers = [
    {
        id: 1,
        brand: 'jordan',
        model: 'retro 4',
        color: 'vage',
        price: 130.0
    },
    {
        id: 2,
        brand: 'nike',
        model: 'force one',
        color: 'white',
        price: 90.00
    },
    {
        id: 3,
        brand: 'adidas',
        model: 'superstar',
        color: 'golden',
        price: 110.00
    },
    {
        id: 4,
        brand: 'adidas',
        model: 'yessy (zebra)',
        color: 'white',
        price: 160.00,
    },
]

const cart = {
    items: [],
    totalCost: 0
    /*sneakersList: [],*/
}

/*const UserObject = {
    name: prompt('enter your name'),
    email: prompt('enter your email'),
    address: prompt('enter your adress'),
    pymtMethod: prompt('enter your payment method'),
}*/

/*const OrderObject = {
    user: '',
    sneakers: [],
    totalPrice: 0,
    status: ''
}*/


const addItemToCart = (item, quantity) => {
    cart.items.push({
        id: item.id,
        brand: item.brand,
        model: item.model,
        color: item.color,
        price: item.price,
        quantity: quantity,
    })
    cart.totalCost += item.price * quantity;
}

/*const displaySneakers = () => {
    for (sneaker of SneakerObjects) {
        console.log(sneaker)
    }
}*/
alert("Please enter the number of the sneaker you would like to purchase. If you are finished, enter '0'.")
let selectedSneaker = Number(prompt("1 - Jordan(retro 4) $130.0, 2 - nike(force one) $90.00, 3 - adidas(superstar) $110.00, 4 - Adidas(yessy'zebra') $110.00.  If you are finished, enter '0'.'")
)

let selectedQuantity

while (selectedSneaker !== 0) {
    const selectedSneakerObj = sneakers.find((sneakers) => sneakers.id === selectedSneaker)
    if (selectedSneakerObj) {
        selectedQuantity = Number(
            prompt(`You have selected ${selectedSneakerObj.brand}, ${selectedSneakerObj.model}, ${selectedSneakerObj.color}. Please enter the quantity you would like to purchase.`)
        )
        if (selectedQuantity > 0) {
            addItemToCart(selectedSneakerObj, selectedQuantity)
            console.table(cart.items)
        } else {
            alert("Invalid quantity. Please try again.")
        }
    } else {
        alert("Invalid selection. Please try again.")
    }
    selectedProduct = Number(prompt("1 - Jordan(retro 4) $130.0, 2 - nike(force one) $90.00, 3 - adidas(superstar) $110.00, 4 - Adidas(yessy'zebra') $110.00.  If you are finished, enter '0'.'"))
}

alert(`Your total purchase amount is: $${cart.totalCost}`)




// SIMULADOR ECOMMERCE




alert("Please enter the number of the product you would like to purchase. If you are finished, enter '0'.")
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


alert("Your total purchase amount is: $" + totalCost)
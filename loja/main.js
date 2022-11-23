//cart
let cartIcon = document.querySelector("#cart-icon")
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")

cartIcon.onclick = () => {
    cart.classList.add("active");
    updatetotal();
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};

//cart working
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
}
else {
    ready();
}

function ready() {
    //remove items from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove")
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    var quantityInput = document.getElementsByClassName("cart-quantity")
    for (var i = 0; i < quantityInput.length; i++){
        var input = quantityInput[i];
        input.addEventListener("change", quantityChanged);
    }
    //add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    //buy button work
    document
        .getElementsByClassName("btn-buy")[0]
        .addEventListener("click", buyButtonClicked);
}

function buyButtonClicked(event) {
    alert("Seu pedido foi recebido");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes) {
        cartContent.remove(cartContent.firstChild);
    }
    updatetotal();
}

//remove items from cart
function removeCartItem(event) {
    event.target.parentElement.remove();
    updatetotal();
}

//quantity changes
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}
//add to cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var title = shopProducts.getElementsByClassName("price")[0]
    var productImg = shopProducts.getElementsByClassName("product")
    console.log(title, price);
    addProductToCart(title, price, productImg);
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems
}


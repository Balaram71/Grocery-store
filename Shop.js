let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Dragon Fruit',
        image: 'dragon fruit.PNG',
        price: 120
    },
    {
        id: 2,
        name: 'Tomatos',
        image: 'tomato.PNG',
        price: 40
    },
    {
        id: 3,
        name: 'Milk ',
        image: 'milk.PNG',
        price: 70
    },
    {
        id: 4,
        name: 'Orange',
        image: 'Orange.PNG',
        price: 120
    },
    {
        id: 5,
        name: 'Avcado',
        image: 'https://cdn.glitch.global/a8647784-0593-44f7-9cb1-8661266e2337/Avcado.png?v=1700218288749',
        price: 80
    },
    {
        id: 6,
        name: 'Apple',
        image: 'https://cdn.glitch.global/a8647784-0593-44f7-9cb1-8661266e2337/apple.png?v=1700218270865',
        price: 190
    },
    {
        id: 7,
        name: 'Banana',
        image: 'https://cdn.glitch.global/a8647784-0593-44f7-9cb1-8661266e2337/banana.png?v=1700218270864',
        price: 120
    },
    {
        id: 8,
        name: 'Cauliflower',
        image: 'cauliflower.PNG',
        price: 30
    },
    {
        id: 9,
        name: 'Carrot',
        image: 'https://cdn.glitch.global/a8647784-0593-44f7-9cb1-8661266e2337/carrot.png?v=1700218288749',
        price: 99
    },
    {
        id: 10,
        name: 'Cabbage',
        image: 'cabbage.PNG',
        price: 40
    },
    {
        id: 11,
        name: 'Red Chillies',
        image: 'red papper.PNG',
        price: 80
    },
    {
        id: 12,
        name: 'Strawberry',
        image: 'strawberry.PNG',
        price: 120
    },
    {
        id: 11,
        name: 'Black grapes',
        image: 'blue grapes.PNG',
        price: 119
    },
    {
        id: 11,
        name: 'Green grapes',
        image: 'green grapes.PNG',
        price: 119
    },
    {
        id: 11,
        name: 'Broccoli',
        image: 'broccoli.PNG',
        price: 120
    },
    {
        id: 11,
        name: 'Green Beans',
        image: 'Green Beans.PNG',
        price: 80
    },
    {
        id: 11,
        name: 'Cashew',
        image: 'Cashews.PNG',
        price: 400
    },
    {
        id: 11,
        name: 'Black raisins',
        image: 'blckraisins.png',
        price: 180
    },
    {
        id: 11,
        name: 'Almonds',
        image: 'Almonds.PNG',
        price: 250
    },
    {
        id: 11,
        name: 'Chicken',
        image: 'chicken leg pieces.PNG',
        price: 240
    },
    {
        id: 11,
        name: 'Watermelon',
        image: 'watermelon.png',
        price: 250
    },
    {
        id: 11,
        name: 'Tomato ketchup',
        image: 'Tomato Ketchup.png',
        price: 250
    },
    {
        id: 11,
        name: 'Millet Noodles',
        image: 'Millet noodles.png',
        price: 250
    },
    {
        id: 11,
        name: 'TATA cooking Oil',
        image: 'oil.png',
        price: 250
    },
    {
        id: 11,
        name: 'Lichi',
        image: 'lichi.png',
        price: 250
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
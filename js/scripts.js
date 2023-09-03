let openShopping = document.querySelector(' .shopping');
let closeShopping = document.querySelector( '.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body =document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener( 'click' , ()=>{
    body.classList.remove('active')
})

let products = [
{
   id: 1,
   name: 'South Coast',
   image: 'slide_3.jpg',
   price: 12000
},


{
    id: 2,
    name: 'Pacific Coast',
    image: 'large-5.jpg',
    price: 10000
 },


 {
    id: 3,
    name: 'African Coast',
    image: 'msc-musica.jpg',
    price: 11000
 },


 {
    id: 4,
    name: 'European Coast',
    image: '263142.png',
    price: 8000
 },

 {
    id: 5,
    name: 'Atlantic Coast',
    image: 'Shipboard-Onbourd-Depts.webp',
    price: 9000
 }
];

let listCards = [];
function initApp(){
        products.forEach((value, key)=>{
         let newDiv = document.createElement('div');
         newDiv.classList.add('item');
           newDiv.innerHTML = `
              <img class="img22" src="image/${value.image}"/>
              <div class="title">${value.name}</div>
              <div class="price">R${value.price.toLocaleString()}</div>
              <button onclick="addToCard(${key})">Add to Card</button>
              `;
           list.appendChild(newDiv)
       })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key)=> {
         totalPrice =  totalPrice + value.price;
         count = count + value.quantity;

         if (value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
               <div><img src="assets/${value.image}"/></div>
               <div>${value.name}</div>
               <div> <h5>R</h5> ${value.price.toLocaleString()}</div>
               <div>
                    <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
               </div>
            `;
            listCard.appendChild(newDiv);
         }
    }) 
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
   if(quantity == 0){
      delete listCards[key];
   }
   else{
       listCards[key].quantity = quantity;
       listCards[key].price = quantity * products[key].price;

   }
   reloadCard();
}
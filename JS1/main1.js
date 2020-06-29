//Variables Globales

const likeBtn = Array.from(document.querySelectorAll(".like-btn"));
const minusBtn = Array.from(document.querySelectorAll(".minus-btn"));
const plusBtn = Array.from(document.querySelectorAll(".plus-btn"));
const quantity = Array.from(document.querySelectorAll(".product-quantity"));
const price = Array.from(document.querySelectorAll(".unit-price"));
const removeBtn = Array.from(document.querySelectorAll(".remove-btn"));
const totalPrice = document.querySelector(".total-price");

  //Like Btn---------------------------------------------------------------
 
//Change Color Function
function changeColor(el) {
  if (el.target.style.color !== "red") {
    el.target.style.color = "red";
  }
   else {
    el.target.style.color = "black";
  }
}
//Update Total-------------------------------------------------
function updateTotal() {
  let total = 0;
  for (let i = 0; i < quantity.length; i++) {
    total = total + quantity[i].innerText * price[i].innerText;
  }
  console.log("total" , total )

   totalPrice.innerText = total;
}
//minus btn-----------------------------------------------------
function decrement(el) {
  if (Number(el.target.nextElementSibling.innerText) < 1) {
    el.target.nextElementSibling.innerText = 0;
    return;
  } else {
    el.target.nextElementSibling.innerText =
      Number(el.target.nextElementSibling.innerText) - 1;
  }
  updateTotal();
}
// plus btn -----------------------------------------------------
function increment(el) {
  el.target.previousElementSibling.innerText =
    Number(el.target.previousElementSibling.innerText) + 1;
    updateTotal();
}
//remove listener--------------------------------------------------
/*function removeElement(el) {
  el.target.parentElement.parentElement.remove();
  quantity[i].innerText = 0;
 updateTotal();
 console.log(quantity[i].innerText)*/
// Loops-----------------------------------------------------------

for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener("click", changeColor);
}

for (let i = 0; i < minusBtn.length; i++) {
minusBtn[i].addEventListener("click", decrement);
}
for (let i = 0; i < plusBtn.length; i++) {
plusBtn[i].addEventListener("click", increment);
}
for (let i = 0; i < removeBtn.length; i++){
removeBtn[i].addEventListener("click", function () {
  removeBtn[i].parentElement.parentElement.remove()
  quantity[i].innerText = 0;
 updateTotal();
 console.log(quantity[i].innerText)});
}


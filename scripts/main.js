var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "img/sun.png";
  } else {
    icon.src = "img/jack-o-lantern.png";
  }
};

function totalCal(bill, numberOfPeople, tipPercentage) {
  let tip = bill * tipPercentage;
  //I need to add with parseFloat or else it will concat the numbers.
  let tipTotal = parseFloat(bill) + parseFloat(tip);
  let totalPerPerson = tipTotal / numberOfPeople;
  let totalPer = document.getElementById("totalPer");
  if (isNaN(totalPerPerson)) {
    totalPerPerson = 0;
  }
  //if total is not finite, in other words, infiite, total will be 0
  if (!isFinite(totalPerPerson)) {
    totalPerPerson = 0;
  }
  if (totalPerPerson > 99999) {
    totalPerPerson = 0;
    tipPerPerson = 0;
  }
  totalPer.innerHTML = "$" + parseFloat(totalPerPerson).toFixed(2);
}
//toFixed(2) makes the numbers only go to the hundrenth. 2 decimal points.
function tipsCal(bill, numberOfPeople, tipPercentage) {
  let tip = bill * tipPercentage;
  let tipPerPerson = tip / numberOfPeople;
  let tipPer = document.getElementById("tipPer");
  if (isNaN(tipPerPerson)) {
    tipPerPerson = 0;
  }
  //if tip is not finite, in other words, infiite, tip will be 0
  else if (!isFinite(tipPerPerson)) {
    tipPerPerson = 0;
  }
  if (tipPerPerson > 99999) {
    tipPerPerson = 0;
    totalPerPerson = 0;
  }
  tipPer.innerHTML = "$" + parseFloat(tipPerPerson).toFixed(2);
}
//I used if if in one and if else if on another to test. it can't be NaN and Infinity at the same time.

//if you press a percent button, it erases the custom amount. The custom percent input would become 0 and stay in the input. to fix this, I first make the custom input null. If I put 0, it will show the number 0, which wouldn't work.
let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    custom.value = (button.dataset.num * 100);
    let tipPercent = button.dataset.num;
    button.dataset.num;
    tipsCal(bill.value, nop.value, tipPercent);
    totalCal(bill.value, nop.value, tipPercent);
  });
});


//  document.querySelector(".button").classList.toggle("checked");
// button.classList.toggle("checked");
// var clicked = false;
// buttons.forEach((button) => {
// if(custom.value = (button.dataset.num)){
//   button.classList.toggle("checked")
// }
// clicked = true;
// })
//If you input anything in custom amount, the calculations happen here
let custom = document.querySelector(".custom");
custom.addEventListener("input", function () {
  if (custom.value > 100) {
    alert("please use less than 100%");
    custom.value = null;
  }
  if (custom.value < 0) {
    alert("Please, don't use negative numbers");
    custom.value = null;
  }
  let tipPercent = custom.value / 100;
  tipsCal(bill.value, nop.value, tipPercent);
  totalCal(bill.value, nop.value, tipPercent);
});
//If you input anything in number of people, the calculations happen here
let nop = document.getElementById("nop");
nop.addEventListener("input", function () {
  if (nop.value < 0) {
    alert("Please, don't use negative numbers.");
    nop.value = null;
  }
  let tipPercent = custom.value / 100;
  tipsCal(bill.value, nop.value, tipPercent);
  totalCal(bill.value, nop.value, tipPercent);
});
//If you input anything in bill amount, the calculations happen here
let bill = document.getElementById("bill");
bill.addEventListener("input", function () {
  if (bill.value < 0) {
    alert("please don't use negative numbers");
    bill.value = null;
  }
  let tipPercent = custom.value / 100;
  tipsCal(bill.value, nop.value, tipPercent);
  totalCal(bill.value, nop.value, tipPercent);
});

let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  custom.value = null;
  nop.value = null;
  bill.value = null;
  totalPer.innerHTML = "$0.00";
  tipPer.innerHTML = "$0.00";
});

// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     if ((document.getElementById("p5").checked = true)) {
//       document.getElementById("p10").checked = false;
//       document.getElementById("p15").checked = false;
//       document.getElementById("p20").checked = false;
//       document.getElementById("p30").checked = false;
//       console.log(document.getElementById("p5"));
//     }
//   });
// });
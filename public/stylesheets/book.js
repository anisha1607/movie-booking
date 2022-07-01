const container = document.querySelector('.xyz');
const seats = document.querySelectorAll('.a2 .seat:not(.occupied)');
const count = document.getElementById('count');
const selseats = document.getElementById('selseats');
const price = document.getElementById('price');
const array = [];
//rating = 6;
var price_seats = 0;
const popularity = 500;
var price_per_seat;

if (localStorage['rating']) {
let rating = localStorage.getItem('rating'); 


const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }
};

const updateSelectedSeatsCount = () => {
  const selectedSeats = document.querySelectorAll('.a2 .selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  if (array.length > 0) {
    document.getElementById("selseatsdiv").style.color = "#00ffff";
    selseats.innerText = "Selected seats: " + array.join();
  }
  else
    selseats.innerText = "";

  price_seats = selectedSeatsCount * price_per_seat;
  price.innerText = price_seats;
  localStorage.setItem('price', price_seats);
};

// Seat select event
container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    document.getElementById("selseats").innerText = "";

    e.target.classList.toggle('selected');
    let a = e.target.getAttribute("name");
    if (array.includes(a)) {
      var ind = array.indexOf(a);
      array.splice(ind, 1);
    }
    else{
      array.push(a);
    }
    localStorage.setItem('seats', array);
    updateSelectedSeatsCount();
    populateUI();
  }
});

function book() {
  if (array.length == 0) {
    document.getElementById("selseatsdiv").style.color = "#ff1a1a";
    alert("No seats selected! Kindly select atleast one seat before proceeding for payment!");
  }
  else {
    for (var i = 0; i < array.length; i++)
      document.getElementById(array[i]).className = "seat occupied";
    selseats.innerText = "";
    document.getElementById("selseatsdiv").style.color = "#66ff66";
    selseats.innerText = "Booked seats: " + array.join() + " successfully!";
    window.location = '/users/confirm';
  }
}

function loadseats() {
  setPrice(rating);
}

function setPrice(n) {
  price_per_seat = 200 * n / 10;
}

function calcBill() {
  var bill = 0;
  bill += document.getElementById("quantity1").value * 125;
  bill += document.getElementById("quantity2").value * 30;
  bill += document.getElementById("quantity3").value * 120;
  bill += document.getElementById("quantity4").value * 180;
  localStorage.setItem('addon',bill);
  return bill;
}

$(document).ready(function () {
  $(".quant").change(function () {
    $("#amount2").text(calcBill());
    $("#amount3").text(price_seats + calcBill());
    $(".pamount").css("margin-right", "30px");
  });

  $(container).click(function () {
    $("#amount1").text(price_seats);
    $("#amount3").text(price_seats + calcBill());
    $(".pamount").css("margin-right", "30px");
  });
});
}

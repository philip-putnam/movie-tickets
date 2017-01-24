// Back-end

function Ticket(movieName, discount, age) {
  this.movieName = movieName;
  this.discount = discount;
  this.age = age;
}

var dateToNumber = function(dateString) {
  var tempStr = dateString.match(/\d/g);
  var year = '';
  var month = '';
  var day = '';
  for (var index = 0; index < 4; index += 1) {
    year = year + tempStr[index];
  }
  year = parseInt(year);
  tempStr[0] = year;
  for (var index = 4; index < 6; index += 1) {
    month = month + tempStr[index];
  }
  month = parseInt(month);
  tempStr[1] = month;
  for (var index = 6; index < 8; index += 1) {
    day = day + tempStr[index];
  }
  day = parseInt(day);
  tempStr[2] = day;

  return tempStr;
};

var discountPrice = function(birthday) {
  var discountOrNot = true;
  if (birthday[0] > 1967) {
    discountOrNot = false;
  } else if (birthday[1] > 1) {
    dicountOrNot = false;
  } else if (birthday[2] > 24) {
    dicountOrNot = false;
  } else {
    discountOrNot = true;
  }

  return discountOrNot;
}

var ticketPrice = function(userTicket) {
  var basePrice = 12.50;
  if (userTicket.discount === "matinee") {
    basePrice -= 4.50;
  }
  if (userTicket.age === true) {
    basePrice -= 2.00;
  }

  return basePrice;
}

// Front-end

$(function(){
 $('form#splitForm').submit(function(event){
   event.preventDefault();
   var movieName = "split";
   var timeInputted = $('#split-select').val();
   var ageInputted = $('#split-born').val();
   var seniorDiscount = discountPrice(dateToNumber(ageInputted));
   var userTicket = new Ticket(movieName, timeInputted, seniorDiscount);
   alert(ticketPrice(userTicket));
 });

 $('form#xxxForm').submit(function(event){
   event.preventDefault();
   var movieName = "XXX: The Return of Xander Cage";
   var timeInputted = $('#xxx-select').val();
   var ageInputted = $('#xxx-born').val();

 });
});

document.addEventListener("DOMContentLoaded", function() {
   
    var seatButtons = document.querySelectorAll("#every_seat button");
    
  

    var seatLeftElement = document.getElementById("seat_left");
    var seatCounterElement = document.getElementById("seat_counter");
    var seatDetailsElement = document.getElementById("seat_pp");
  
  
    var availableSeats = 40; 
    var seatCounter = 0;
    var seatDetails = {
        seatName: "",
        seatClass: "",
        seatPrice: 0
      };
  

    function updateAvailableSeats() {
      seatLeftElement.textContent = availableSeats + " seats left";
      seatCounterElement.textContent = seatCounter;
    }
    function updateSeatDetails(seatName, seatClass, seatPrice) {
        seatDetails.seatName = seatName;
        seatDetails.seatClass = seatClass;
        seatDetails.seatPrice = seatPrice;
    
      
        seatDetailsElement.textContent = `Seat: ${seatName}, Class: ${seatClass}, Price: ${seatPrice}`;
      }
  

    function handleSeatClick(event) {
  
      event.currentTarget.classList.toggle("btn-active");
  

      var isSeatSelected = event.currentTarget.classList.contains("btn-active");
  
  
      if (isSeatSelected) {
        availableSeats++;
        seatCounter--;
        event.currentTarget.style.backgroundColor = "";
        var seatName = event.currentTarget.textContent;
      var seatClass = ""; 
      var seatPrice = 550; 

      
      updateSeatDetails(seatName, seatClass, seatPrice);
      } else {
        availableSeats--;
        seatCounter++;
        
        event.currentTarget.style.backgroundColor = "#1DD100";
       
        updateSeatDetails("", "", 0);
      }
      
  
     
      updateAvailableSeats();
    }
  
    
    seatButtons.forEach(function(button) {
      button.addEventListener("click", handleSeatClick);
    });
  
   
    updateAvailableSeats();
  });
  


  document.addEventListener("DOMContentLoaded", function() {
  
  const seatButtons = document.querySelectorAll(".seat-button");

  
  const seatNameElement = document.getElementById("seat_name");
  const seatClassElement = document.getElementById("seat_cls");
  const totalPriceElement = document.getElementById("seat_pp");

 
  let selectedSeats = [];
  let totalPrice = 0;

 
  function updateSeatDetails() {
    seatNameElement.textContent = "Seat: " + selectedSeats.join(", ");
    seatClassElement.textContent = "Class: Economy";
    totalPriceElement.textContent = "Total Price: " + totalPrice;
  }

 
  function handleSeatClick(event) {
    const seat = event.target.textContent;
    const seatPrice = 550; 

   
    if (selectedSeats.includes(seat)) {
      selectedSeats = selectedSeats.filter(selectedSeat => selectedSeat !== seat);
      totalPrice -= seatPrice;
    } else {
      selectedSeats.push(seat);
      totalPrice += seatPrice;
    }

    
    updateSeatDetails();
  }

 
  seatButtons.forEach(function(button) {
    button.addEventListener("click", handleSeatClick);
  });

  
  updateSeatDetails();
});
 
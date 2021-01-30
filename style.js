// FIRST AND ECONOMY CLASS TICKET COUNT AREA
function handleTicket(ticket, isIncrease){
   const ticketInput = document.getElementById(ticket + "-ticket-count");
   const ticketCount = parseInt(ticketInput.value);

   let ticketNewCount = ticketCount;
   if (isIncrease == true) {
      ticketNewCount = ticketCount + 1;
   }
   if (isIncrease == false && ticketCount > 0) {
      ticketNewCount = ticketCount - 1;
   }

   ticketInput.value = ticketNewCount;

   let totalTicket = 0;
   if(ticket == "economy"){
      totalTicket = ticketNewCount * 100;
   }
   if(ticket == "firstClass"){
      totalTicket = ticketNewCount * 150;
   }
   document.getElementById(ticket + "-total").innerText = totalTicket;
   calculateSubtotal();
}


// SUBTOTAL CALCULATION AREA
function calculateSubtotal() {
   const economyInput = document.getElementById("economy-ticket-count");
   const economyCount = parseInt(economyInput.value);

   const firstClassCount = getInputValue("firstClass")
   const subtotalPrice = economyCount * 100 + firstClassCount * 150;
   document.getElementById("subtotal-amount").innerText = subtotalPrice;

   // VAT CALCULATION
   const vat = subtotalPrice * 0.1;
   document.getElementById("vat-amount").innerText = vat;

   // GRAND TOTAL CALCULATION
   const grandTotal = subtotalPrice + vat;
   document.getElementById("total-amount").innerText = grandTotal;
   document.getElementById("priceAlert").innerHTML = "thank you! <br> <br> your total ticket price is: $" + grandTotal;
}


function getInputValue(ticket) {
   const ticketInput = document.getElementById(ticket + "-ticket-count");
   const ticketCount = parseInt(ticketInput.value);
   return ticketCount;
}



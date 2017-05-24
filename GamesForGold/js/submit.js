function displayPurchase() {
	var purchaseString = 
		"Success! Your game will be delivered to you shortly. Please review your receipt:" + "\n" + "\n" + 
		"Name: " + "\t\t\t" 		+ document.getElementById("firstname").value + " " + document.getElementById("lastname").value + "\n" +
		"Address: " + "\t\t\t" 		+ document.getElementById("address").value + " " + 
								document.getElementById("address2").value + " " + document.getElementById("state").value + " " + document.getElementById("city").value + " " + document.getElementById("postcode").value + "\n" +
		"Credit Card: " + "\t\t\t"  + document.getElementById("ccnum").value + " " + document.getElementById("expdate").value + "\n" + 
		"Game: " + "\t\t\t"		+ localStorage.getItem("name") + " " + localStorage.getItem("price");
	
	alert(purchaseString);
	window.location.href = "../../index.html";
}
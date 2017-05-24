function storeGameInfo(game) {
	var infoRow;
	
	//Get the relevant row
	switch(game) {
		case "Dark Souls 1" 					: infoRow = document.getElementById("game-list").rows[1].cells; break;
		case "Dark Souls 2" 					: infoRow = document.getElementById("game-list").rows[2].cells; break;
		case "Dark Souls 3" 					: infoRow = document.getElementById("game-list").rows[3].cells; break;
		case "Bloodborne"  						: infoRow = document.getElementById("game-list").rows[4].cells; break;
		case "Madden NFL 17" 					: infoRow = document.getElementById("game-list").rows[5].cells; break;
		case "Mario Kart 8"						: infoRow = document.getElementById("game-list").rows[6].cells; break;
		case "Super Smash Brothers Wii U"		: infoRow = document.getElementById("game-list").rows[7].cells; break;
		case "Star Wars Battlefront 2"			: infoRow = document.getElementById("game-list").rows[8].cells; break;
		case "Dead Space 3"						: infoRow = document.getElementById("game-list").rows[9].cells; break;
	}
	
	//Store row data in local storage so it can be accessed by multiple pages
	
	// Name
	localStorage.setItem("name", game);
	
	for (i = 0; i < infoRow.length; i++) {
		// Description
		if (infoRow[i].id == "desc") {
			localStorage.setItem("desc", infoRow[i].innerHTML);
		}
		// Price
		if (infoRow[i].id == "price") {
			localStorage.setItem("price", infoRow[i].innerHTML);
		}
		// Platform
		if (infoRow[i].id == "platform") {
			localStorage.setItem("platform", infoRow[i].innerHTML);
		}
	}
}


function modifyTable() {
	//Change entries of the table with the infoRow variable
	document.getElementById("price").innerHTML 		= localStorage.getItem("price");
	//document.getElementById("desc").innerHTML 		= localStorage.getItem("desc");
	document.getElementById("platform").innerHTML 	= localStorage.getItem("platform");
	document.getElementById("name").innerHTML		= localStorage.getItem("name");
	
	modifyGameCover();
} 

function modifyForm() {
	document.getElementById("game-name").innerHTML  = localStorage.getItem("name") + "! ";
	document.getElementById("cost").innerHTML		= localStorage.getItem("price");
	
	modifyGameCover();
}

function modifyGameCover() {
	var imageString = "game_covers/" + localStorage.getItem("name") + ".jpg";
	
	document.getElementById("game-cover").src 		= imageString;
}
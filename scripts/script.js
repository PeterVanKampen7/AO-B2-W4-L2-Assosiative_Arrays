window.onload = function(){	//Wacht tot de hele pagina is geladen voordat het JS script start
var run = true;

var orders = {
	fris : 0,
	bier : 0,
	wijn : 0,
	bitterballen : 0
}

const PRIJZEN = {
	fris : 2.5,
	bier : 1.75,
	wijn : 4,
	bitterballen : 0.25
}

var eindPrijzen = {
	fris : 0,
	bier : 0,
	wijn : 0,
	bitterballen : 0
}

while(run)
{
	var input = prompt("Welke bestelling wilt u toevoegen? (fris/bier/wijn/snack)").toLowerCase();
	if(input == "stop")
	{
		run = false;
		console.log(orders['fris']);
		rekening();
	}
	else if(input == "fris" || input == "bier" || input == "wijn")
	{
		addDrink(input);
	}
	else if(input == "snack")
	{
		addSnacks();
	}
	else
	{
		alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
	}

}

function addDrink(order)	//Een functie die het toevoegen van drankjes afhandeld. De functie vraagt om de hoeveelheid en slaat dat daarna op in een variabele.
{
	var amount = Number(prompt("Hoeveel "+order+" wilt u toevoegen aan uw bestelling?"));

	if(order == "fris")
	{
		orders.fris+=amount;
	}
	else if(order == "bier")
	{
		orders.bier+=amount;
	}
	else
	{
		orders.wijn+=amount;
	}
}

function addSnacks()	//Een functie die het toevoegen van bitterbalen afhandeld. De functie bepaald hoeveel bitterballen de klant wil en slaat dit op in een variabele
{
	var amount = Number(prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?"));
	if(amount == 8 || amount == 16)
	{
		var schalen = Number(prompt("Hoeveel schalen van "+amount+" bitterballen wilt u bestellen?"));
		orders.bitterballen += schalen * amount;
	}
	else
	{
		alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.");
		addSnacks();
	}
}

function rekening()	//Een functie die de rekening maakt en op het scherm zet.
{
	eindPrijzen.fris = prijzen("fris");	//Doormiddel van de prijzen functie word de totaal prijs per product bepaalt.
	eindPrijzen.bier = prijzen("bier");
	eindPrijzen.wijn = prijzen("wijn");
	eindPrijzen.bitterbal = prijzen("bitterballen"); 

	var writeLine = 1;	//Een variabele om bij te houden op welke regel van het scherm er geprint moet worden

	if(orders.fris != 0)	//Als er fris besteld is zet dit op de rekening
	{
		document.getElementById("item1").innerHTML = "Fris";
		document.getElementById("qty1").innerHTML = orders.fris;
		document.getElementById("prijs1").innerHTML = "\u20AC"+eindPrijzen.fris;
		writeLine++;
	}

	if(orders.bier != 0)	//Als er bier besteld is zet dit op de rekening op een nog lege lijn
	{
		if(writeLine == 1)
		{
			document.getElementById("item1").innerHTML = "Bier";
			document.getElementById("qty1").innerHTML = orders.bier;
			document.getElementById("prijs1").innerHTML = "\u20AC"+eindPrijzen.bier;
			writeLine++;
		}
		else
		{
			document.getElementById("item2").innerHTML = "Bier";
			document.getElementById("qty2").innerHTML = orders.bier;
			document.getElementById("prijs2").innerHTML = "\u20AC"+eindPrijzen.bier;
			writeLine++;
		}
	}

	if(orders.wijn != 0)	//Als er wijn besteld is zet dit op de rekening op een nog lege lijn
	{
		if(writeLine == 1)
		{
			document.getElementById("item1").innerHTML = "Wijn";
			document.getElementById("qty1").innerHTML = orders.wijn;
			document.getElementById("prijs1").innerHTML = "\u20AC"+eindPrijzen.wijn;
			writeLine++;
		}
		else if(writeLine == 2)
		{
			document.getElementById("item2").innerHTML = "Wijn";
			document.getElementById("qty2").innerHTML = orders.wijn;
			document.getElementById("prijs2").innerHTML = "\u20AC"+eindPrijzen.wijn;
			writeLine++;
		}
		else
		{
			document.getElementById("item3").innerHTML = "Wijn";
			document.getElementById("qty3").innerHTML = orders.wijn;
			document.getElementById("prijs3").innerHTML = "\u20AC"+eindPrijzen.wijn;
			writeLine++;
		}
	}

	if(orders.bitterballen != 0)	//Als er bitterballen besteld zijn zet dit op de rekening op een nog lege lijn
	{
		if(writeLine == 1)
		{
			document.getElementById("item1").innerHTML = "Bitterballen";
			document.getElementById("qty1").innerHTML = orders.bitterballen;
			document.getElementById("prijs1").innerHTML = "\u20AC"+eindPrijzen.bitterbal;
			writeLine++;
		}
		else if(writeLine == 2)
		{
			document.getElementById("item2").innerHTML = "Bitterballen";
			document.getElementById("qty2").innerHTML = orders.bitterballen;
			document.getElementById("prijs2").innerHTML = "\u20AC"+eindPrijzen.bitterbal;
			writeLine++;
		}
		else if(writeLine == 3)
		{
			document.getElementById("item3").innerHTML = "Bitterballen";
			document.getElementById("qty3").innerHTML = orders.bitterballen;
			document.getElementById("prijs3").innerHTML = "\u20AC"+eindPrijzen.bitterbal;
			writeLine++;
		}
		else
		{
			document.getElementById("item4").innerHTML = "Bitterballen";
			document.getElementById("qty4").innerHTML = orders.bitterballen;
			document.getElementById("prijs4").innerHTML = "\u20AC"+eindPrijzen.bitterbal;
			writeLine++;
		}
	}

	var totalQty = orders.fris + orders.bier + orders.wijn + orders.bitterballen;	//De totale hoeveelheid producten
	var totalPrijs = prijzen("totaal");		//De totaalprijs van de hele bestelling word bepaald doormiddel van een functie
											//De totaalprijs word op de rekening gezet op een nog lege lijn
	if(writeLine == 2)
	{
		document.getElementById("item2").innerHTML = "Totaal prijs";
		document.getElementById("qty2").innerHTML = totalQty;
		document.getElementById("prijs2").innerHTML = "\u20AC"+totalPrijs;
	}
	else if(writeLine == 3)
	{
		document.getElementById("item3").innerHTML = "Totaal prijs";
		document.getElementById("qty3").innerHTML = totalQty;
		document.getElementById("prijs3").innerHTML = "\u20AC"+totalPrijs;
	}
	else if(writeLine == 4)
	{
		document.getElementById("item4").innerHTML = "Totaal prijs";
		document.getElementById("qty4").innerHTML = totalQty;
		document.getElementById("prijs4").innerHTML = "\u20AC"+totalPrijs;
	}
	else
	{
		document.getElementById("item5").innerHTML = "Totaal prijs";
		document.getElementById("qty5").innerHTML = totalQty;
		document.getElementById("prijs5").innerHTML = "\u20AC"+totalPrijs;
	}
}

function prijzen(type)	//Een functie die het totaal en subtotaal van de bestelling uitrekend.
{
	if(type == "fris")
	{
		return orders.fris * PRIJZEN.fris;
	}
	else if(type == "bier")
	{
		return orders.bier * PRIJZEN.bier;
	}
	else if(type == "wijn")
	{
		return orders.wijn * PRIJZEN.wijn;
	}
	else if(type == "bitterballen")
	{
		return orders.bitterballen * PRIJZEN.bitterballen;
	}
	else if(type == "totaal")
	{
		return eindPrijzen.fris + eindPrijzen.bier + eindPrijzen.wijn + eindPrijzen.bitterbal;
	}
}
}
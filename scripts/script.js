window.onload = function(){	//Wacht tot de hele pagina is geladen voordat het JS script start
var run = true;

var fris = 0;	//Een set variabelen voor het bijhouden hoeveel er besteld is
var bier = 0;
var wijn = 0;
var bitterballen = 0;

var frisPrijs;	//Een set variabelen waar de totaal prijs per product in zal komen
var bierPrijs;
var wijnPrijs;
var bitterbalPrijs;

while(run)
{
	var input = prompt("Welke bestelling wilt u toevoegen? (fris/bier/wijn/snack)").toLowerCase();
	if(input == "stop")
	{
		run = false;
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
		fris+=amount;
	}
	else if(order == "bier")
	{
		bier+=amount;
	}
	else
	{
		wijn+=amount;
	}
}

function addSnacks()	//Een functie die het toevoegen van bitterbalen afhandeld. De functie bepaald hoeveel bitterballen de klant wil en slaat dit op in een variabele
{
	var amount = Number(prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?"));
	if(amount == 8 || amount == 16)
	{
		var schalen = Number(prompt("Hoeveel schalen van "+amount+" bitterballen wilt u bestellen?"));
		bitterballen += schalen * amount;
	}
	else
	{
		alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.");
		addSnacks();
	}

	console.log("bitterballen: "+bitterballen);
}

function rekening()	//Een functie die de rekening maakt en op het scherm zet.
{
	frisPrijs = prijzen("fris");	//Doormiddel van de prijzen functie word de totaal prijs per product bepaalt.
	bierPrijs = prijzen("bier");
	wijnPrijs = prijzen("wijn");
	bitterbalPrijs = prijzen("bitterballen"); 

	var writeLine = 1;	//Een variabele om bij te houden op welke regel van het scherm er geprint moet worden

	if(fris != 0)	//Als er fris besteld is zet dit op de rekening
	{
		document.getElementById("item1").innerHTML = "Fris";
		document.getElementById("qty1").innerHTML = fris;
		document.getElementById("prijs1").innerHTML = "\u20AC"+frisPrijs;
		writeLine++;
	}

	if(bier != 0)	//Als er bier besteld is zet dit op de rekening op een nog lege lijn
	{
		if(writeLine == 1)
		{
			document.getElementById("item1").innerHTML = "Bier";
			document.getElementById("qty1").innerHTML = bier;
			document.getElementById("prijs1").innerHTML = "\u20AC"+bierPrijs;
			writeLine++;
		}
		else
		{
			document.getElementById("item2").innerHTML = "Bier";
			document.getElementById("qty2").innerHTML = bier;
			document.getElementById("prijs2").innerHTML = "\u20AC"+bierPrijs;
			writeLine++;
		}
	}

	if(wijn != 0)	//Als er wijn besteld is zet dit op de rekening op een nog lege lijn
	{
		if(writeLine == 1)
		{
			document.getElementById("item1").innerHTML = "Wijn";
			document.getElementById("qty1").innerHTML = wijn;
			document.getElementById("prijs1").innerHTML = "\u20AC"+wijnPrijs;
			writeLine++;
		}
		else if(writeLine == 2)
		{
			document.getElementById("item2").innerHTML = "Wijn";
			document.getElementById("qty2").innerHTML = wijn;
			document.getElementById("prijs2").innerHTML = "\u20AC"+wijnPrijs;
			writeLine++;
		}
		else
		{
			document.getElementById("item3").innerHTML = "Wijn";
			document.getElementById("qty3").innerHTML = wijn;
			document.getElementById("prijs3").innerHTML = "\u20AC"+wijnPrijs;
			writeLine++;
		}
	}

	if(bitterballen != 0)	//Als er bitterballen besteld zijn zet dit op de rekening op een nog lege lijn
	{
		if(writeLine == 1)
		{
			document.getElementById("item1").innerHTML = "Bitterballen";
			document.getElementById("qty1").innerHTML = bitterballen;
			document.getElementById("prijs1").innerHTML = "\u20AC"+bitterbalPrijs;
			writeLine++;
		}
		else if(writeLine == 2)
		{
			document.getElementById("item2").innerHTML = "Bitterballen";
			document.getElementById("qty2").innerHTML = bitterballen;
			document.getElementById("prijs2").innerHTML = "\u20AC"+bitterbalPrijs;
			writeLine++;
		}
		else if(writeLine == 3)
		{
			document.getElementById("item3").innerHTML = "Bitterballen";
			document.getElementById("qty3").innerHTML = bitterballen;
			document.getElementById("prijs3").innerHTML = "\u20AC"+bitterbalPrijs;
			writeLine++;
		}
		else
		{
			document.getElementById("item4").innerHTML = "Bitterballen";
			document.getElementById("qty4").innerHTML = bitterballen;
			document.getElementById("prijs4").innerHTML = "\u20AC"+bitterbalPrijs;
			writeLine++;
		}
	}

	var totalQty = fris + bier + wijn + bitterballen;	//De totale hoeveelheid producten
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
		return fris * 2.5;
	}
	else if(type == "bier")
	{
		return bier * 1.75;
	}
	else if(type == "wijn")
	{
		return wijn * 4;
	}
	else if(type == "bitterballen")
	{
		return bitterballen * 0.25;
	}
	else if(type == "totaal")
	{
		return frisPrijs + bierPrijs + wijnPrijs + bitterbalPrijs;
	}
}
}
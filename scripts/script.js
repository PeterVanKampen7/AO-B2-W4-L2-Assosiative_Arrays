window.onload = function(){
var run = true;
var fris = 0;
var bier = 0;
var wijn = 0;
var bitterballen = 0;

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
		addOrder(input);
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

function addOrder(order)
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

	console.log("fris: "+fris);
	console.log("bier: "+bier);
	console.log("wijn: "+wijn);
}

function addSnacks()
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

function rekening()
{
	var frisPrijs = fris * 2.5;
	var bierPrijs = bier * 1.75;
	var wijnPrijs = wijn * 4;
	var bitterbalPrijs = bitterballen * 0.25;

	var writeLine = 1;

	if(fris != 0)
	{
		document.getElementById("item1").innerHTML = "Fris";
		document.getElementById("qty1").innerHTML = fris;
		document.getElementById("prijs1").innerHTML = frisPrijs;
		writeLine++;
	}

	if(bier != 0)
	{
		if(writeLine == 1)
		{
			document.getElementById("item1").innerHTML = "Bier";
			document.getElementById("qty1").innerHTML = bier;
			document.getElementById("prijs1").innerHTML = bierPrijs;
			writeLine++;
		}
		else
		{
			document.getElementById("item2").innerHTML = "Bier";
			document.getElementById("qty2").innerHTML = bier;
			document.getElementById("prijs2").innerHTML = bierPrijs;
			writeLine++;
		}
	}

	if(wijn != 0)
	{
		if(writeLine == 1)
		{
			document.getElementById("item1").innerHTML = "Wijn";
			document.getElementById("qty1").innerHTML = wijn;
			document.getElementById("prijs1").innerHTML = wijnPrijs;
			writeLine++;
		}
		else if(writeLine == 2)
		{
			document.getElementById("item2").innerHTML = "Wijn";
			document.getElementById("qty2").innerHTML = wijn;
			document.getElementById("prijs2").innerHTML = wijnPrijs;
			writeLine++;
		}
		else
		{
			document.getElementById("item3").innerHTML = "Wijn";
			document.getElementById("qty3").innerHTML = wijn;
			document.getElementById("prijs3").innerHTML = wijnPrijs;
			writeLine++;
		}
	}

	if(bitterballen != 0)
	{
		if(writeLine == 1)
		{
			document.getElementById("item1").innerHTML = "Bitterballen";
			document.getElementById("qty1").innerHTML = bitterballen;
			document.getElementById("prijs1").innerHTML = bitterbalPrijs;
			writeLine++;
		}
		else if(writeLine == 2)
		{
			document.getElementById("item2").innerHTML = "Bitterballen";
			document.getElementById("qty2").innerHTML = bitterballen;
			document.getElementById("prijs2").innerHTML = bitterbalPrijs;
			writeLine++;
		}
		else if(writeLine == 3)
		{
			document.getElementById("item3").innerHTML = "Bitterballen";
			document.getElementById("qty3").innerHTML = bitterballen;
			document.getElementById("prijs3").innerHTML = bitterbalPrijs;
			writeLine++;
		}
		else
		{
			document.getElementById("item4").innerHTML = "Bitterballen";
			document.getElementById("qty4").innerHTML = bitterballen;
			document.getElementById("prijs4").innerHTML = bitterbalPrijs;
			writeLine++;
		}
	}

	var totalQty = fris + bier + wijn + bitterballen;
	var totalPrijs = frisPrijs + bierPrijs + wijnPrijs + bitterbalPrijs;

	if(writeLine == 2)
	{
		document.getElementById("item2").innerHTML = "Totaal prijs";
		document.getElementById("qty2").innerHTML = totalQty;
		document.getElementById("prijs2").innerHTML = totalPrijs;
	}
	else if(writeLine == 3)
	{
		document.getElementById("item3").innerHTML = "Totaal prijs";
		document.getElementById("qty3").innerHTML = totalQty;
		document.getElementById("prijs3").innerHTML = totalPrijs;
	}
	else if(writeLine == 4)
	{
		document.getElementById("item4").innerHTML = "Totaal prijs";
		document.getElementById("qty4").innerHTML = totalQty;
		document.getElementById("prijs4").innerHTML = totalPrijs;
	}
	else
	{
		document.getElementById("item5").innerHTML = "Totaal prijs";
		document.getElementById("qty5").innerHTML = totalQty;
		document.getElementById("prijs5").innerHTML = totalPrijs;
	}
}
}
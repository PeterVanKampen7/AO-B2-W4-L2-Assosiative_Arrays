window.onload = function(){
var run = true;
var fris = 0;
var bier = 0;
var wijn = 0;

while(run)
{
	var input = prompt("Welke bestelling wilt u toevoegen? (fris/bier/wijn)").toLowerCase();
	if(input == "stop")
	{
		run = false;
		rekening();
	}
	else if(input == "fris" || input == "bier" || input == "wijn")
	{
		addOrder(input);
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

function rekening()
{
	var frisPrijs = fris * 2.5;
	var bierPrijs = bier * 1.75;
	var wijnPrijs = wijn * 4;

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

}
}
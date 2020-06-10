//Program to withdraw money from an ATM containing, e.g., notes of 50€*3, 20€*2 & 10€*2

var images = [];
images[50] = "50€.png";
images[20] = "20€.jpg";
images[10] = "10€.png";

class Notes
{
	constructor(v,q)
	{
		this.image = new Image();
		this.value = v;
		this.quantity = q;

		this.image.src = images[this.value];
	}
	show()
	{
		document.body.appendChild(this.image);
	}
}

var bankAccount = [];
var withdrawn = [];
bankAccount.push(new Notes(50,3));
bankAccount.push(new Notes(20,2));
bankAccount.push(new Notes(10,2));


var money = 0;
var bills = 0;
var div = 0;


function withdrawMoney()
{
	var t = document.getElementById("money");
	money = parseInt(t.value);
	// For loop on bankAccount array to check the value and quantity
	// of the notes we want to withdraw.
	for(var b of bankAccount)
	{
		if(money>0)
		{
			div = Math.floor(money/b.value);
			if(div>b.quantity)
			{
				bills = b.quantity;
			}
			else
			{
				bills = div;
			}
			withdrawn.push(new Notes(b.value,bills));
			money = money - (b.value * bills);
			b.quantity = b.quantity - bills
		}
	}
	// If conditional to check the withdrawn array (filled on the previous for loop)
	// and print the message of the withdrawn money.
	if(money > 0)
	{
		result.innerHTML = "There is no more money left";
	}
	else
	{
		for(var w of withdrawn)
		{
			if(w.quantity>0)
			{
				result.innerHTML = result.innerHTML + w.quantity + "notes of €" + w.value + "<br />";
				for(var c = 1; c<=w.quantity; c++) 
				{
					drawNotes.innerHTML = drawNotes.innerHTML +"<img src="+ w.image.src+"/> "
				}
			}
		}
	}
}

function clearAccount()
{
	withdrawn = [];
	result.innerHTML = " ";
	drawNotes.innerHTML = " ";
}

var result = document.getElementById("result");
var drawNotes = document.getElementById("notes");
var withdraw = document.getElementById("withdraw");
var clear = document.getElementById("clear");
withdraw.addEventListener("click", withdrawMoney);
clear.addEventListener("click", clearAccount);
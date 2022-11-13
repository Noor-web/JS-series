var myCars = [{

"name": "Axio 2018 WX8",

"priceLakh": 22.5
},

{
"name": "Premio 2015",

"priceLakh": 26
},

{
"name": "Rickshaw",

"priceLakh": 0.5
},

{
"name": "Civic 2019",

"priceLakh": 34.5
}
]
newCars = ""
for (var i = 0; i < myCars.length; i++) {
	if (myCars[i].name != "Rickshaw") {
		newCars= myCars[i].price
	}
}

console.log(newCars)

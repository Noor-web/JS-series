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
var totalPrice = 0
var newArr = myCars.filter(function(item){
	if( item.name != "Rickshaw") {
		return item.priceLakh += totalPrice
	}
})

console.log(totalPrice)




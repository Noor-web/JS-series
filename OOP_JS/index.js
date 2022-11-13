var Rectangle = function (width, height) {
	this.width = width
	this.height = height
	
	this.draw = function() {
		console.log("this is draw from height width")
		this.printProperties()
	}
	
	this.printProperties = function () {
		console.log("Hi, width is " + this.width)
		console.log("Hi, height is " + this.height)
	}
}

var rect2 = new Rectangle(10, 13)
rect2.draw()

function myFunc(c, d) {
	console.log(this)
	console.log(this.a + this.b + c + d)
}

myFunc.call({c: 40, b: 20, a: 10}, 7, 8)
myFunc.apply({c: 40, b: 20, a: 10}, [7, 8])

var কলা = [1, 2, 3, 4, 5, 6, 7, 8, 9]



var arr = [1, 2, 3, 4, 5, 6]

function myMap(arr, cb) {
	var newArr = []
	for ( var i = 0; i <arr.length; i++) {
		var temp = cb(arr[i], i, arr)
		newArr.push(temp)
	}
	return newArr
}
var qb = myMap(arr, function(value){
	return value * value * value
})

console.log(qb)
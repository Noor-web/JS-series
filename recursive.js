function devF (n) {
	
		if(n=== 1) {
			return 1
		}
	
	return n * devF(n-1)
}

console.log(devF(5))
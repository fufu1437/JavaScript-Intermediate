const promise = new Promise((resolve, reject) => {
	// resolve with 'hello'
	resolve('hello')
})

promise.then(value => console.log(value))

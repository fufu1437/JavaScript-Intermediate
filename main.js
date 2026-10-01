function* fib() {
	const f = [0, 1]
	let n = 0
	while(true) {
		if(n < 2) {
			yield f[n++]
			continue
		}
		f.push(f[n - 2] + f[n - 1])
		yield f[n]
		n++
	}
	// yield 0, 1, 1, 2, 3, 5, ... forever
}

const n = Number(require('fs').readFileSync(0, 'utf-8').trim())
const gen = fib()
for(let i = 0; i < n; i++) {
	console.log(gen.next().value)
}

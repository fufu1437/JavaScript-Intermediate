function makeAdder(x) {
	let x1 = x
	return (y) => x1 + y
}

const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
const x = Number(lines[0])
const y = Number(lines[1])
console.log(makeAdder(x)(y))

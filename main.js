async function main() {
	const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
	const promises = lines.map(line => Promise.resolve(Number(line)))
	// Use Promise.all and sum.
	const num = await Promise.all(promises)
	console.log(num.reduce((acc, v) => acc += v, 0))
}

main()

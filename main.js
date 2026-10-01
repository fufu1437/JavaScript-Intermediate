const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin })

rl.on("line", (line) => {
	const words = line.trim() === '' ? [] : line.split(' ')
	// 1. Count the words into a Map (word -> count).
	// 2. Turn the Map's entries into an array and sort it by word.
	// 3. Print one `word: count` line per entry.


	const counts = new Map()
	for(const w of words) {
		if(counts.has(w)) {
			counts.set(w, counts.get(w) + 1)
			continue
		}
		counts.set(w, 1)

	}
	// console.log()
	[...counts.entries()].sort().forEach(v => console.log(`${v[0]}: ${v[1]}`))
	rl.close()
})
rl.on("close", () => process.exit(0))

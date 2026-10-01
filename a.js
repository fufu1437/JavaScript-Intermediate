function* demo() {
	console.log('A')
	yield 1          // 暂停在这里
	console.log('B')
	yield 2          // 再暂停
	console.log('C')
}

const g = demo()
g.next()  // 打印 A，返回 {value: 1, done: false}
g.next()  // 打印 B，返回 {value: 2, done: false}
g.next()  // 打印 C，返回 {value: undefined, done: true}
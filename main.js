class Person {
	_first
	_last
	// constructor(first, last) storing _first and _last,
	// then firstName / lastName getters and setters,
	// then a fullName getter and a fullName setter that splits on a space.
	constructor(first, last) {
		this._first = first
		this._last = last
	}

	get firstName() {
		return this._first
	}
	set firstName(v) {
		this._first = v
	}

	get fullName() {
		return `${this._first} ${this._last}`
	}
	set fullName(v) {
		[this._first, this._last] = v.split(' ')
	}

	get lastName() {
		return this._last
	}
	set lastName(v) {
		this._last = v
	}

}

const p = new Person("Ada", "Lovelace")
console.log(p.fullName)
p.fullName = "Linus Torvalds"
console.log(p.firstName)
console.log(p.lastName)

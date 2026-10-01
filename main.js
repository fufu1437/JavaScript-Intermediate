const line = require('fs').readFileSync(0, 'utf-8').trimEnd()
// Build a regex that matches one digit, with the g flag, and use it to
// count every digit in `line`. Remember what .match returns when there is
// no match at all -- that case has to print 0, not crash.

console.log((line.match(/[0-9]/g) || []).length)


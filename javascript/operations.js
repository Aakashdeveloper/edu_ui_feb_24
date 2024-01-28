var a = "10"
var b = "5"

parseInt(a)
10
parseInt(b)
5
parseInt(a)+parseInt(b)
15
parseInt(a+b)
105


var a = "10.11"
var b = "5.45"

parseInt(a)+parseInt(b)
15
parseFloat(a)+parseFloat(b)
15.559999999999999

var a = "10"
var b = "5"
undefined
parseFloat(a)+parseFloat(b)
15

//es6
var a = "10.11"
var b = "5.45"
Number(a)+Number(b)
15.559999999999999

var a = "10"
var b = "5"
Number(a)+Number(b)
15

var a = "10a11"
var b = "a10b10"

parseInt(a)
10
parseInt(b)
NaN


Number(a)
NaN
Number(b)
NaN

//////////
** All the conditional operator will give you boolean output

= //assignment
== // compare the data
=== // compare the data and datatype

var a = 10 // assignment
var b = "10"

a == b  // compare the data
true
a===b  // compare the data and datatype
false

var a = 10 
var c = 20
a == c
false
a === c
false

var a = "10"
var b = "10"

a == b
true
a === b
true

var a = 10 
var c = 20
undefined
a > b
false
a < b
false
a !=b 
false
a >= b
true
a <= b
true
a => b
a => b


var a = 10
var b = true
var c = false

!a
false
!b
false
!c
true

var a = 1
var b = 0
!a
false

!b
true
var c = -1
!c
false

truthy> any number except 0, any string, true
falsy> 0, false, null, undefined


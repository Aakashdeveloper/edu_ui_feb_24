es5 > Ecma Script 5
es6 > Ecma Script 6

//////
Datatypes

String > "Hii" 'hey' `test` "10" 'true' "10a"
Number > 10 3535 234.242  .232
Boolean >true false

//es5

var a = 10
var b = "hii"
var c = true
undefined
typeof(a)
'number'
typeof(b)
'string'
typeof(c)
'boolean'
var d = "10"
undefined
typeof(d)
'string'
var e = 10.33
undefined
typeof(e)
'number'
var f = `true`

undefined
typeof(f)
'string'

/////////////////

var a = 10
var b = 5

a+b  (addition)
15
a-b
5
a*b
50
a/b
2
a%b
0
10%5
0
4%2
0
4%3
1
5%2
1
5%3
2
2%3
2
3%4
3

var a = "Hiii"
var b = "Javascript"

a+b (concat)
'HiiiJavascript'
a-b
NaN (not a number)
a*b
NaN

var a = "Hiii"
var b = 1
a+b
'Hiii1'
b+a
'1Hiii'
a-b
NaN
b-a
NaN

string + string = string
string + number = string
number + string = string
number + number = number

10+"20"+30
"1020"+30
'102030'

10+20+"30"
30+"30"
'3030'

"10"+20+30
"1020"+30
'102030'

10+"20"+30-1
'102030'-1
102029

10+20+"30"-1
'3030'-1
3029

"10"+20+30-1
'102030'-1
102029


"10"-1
9
"2"*8
16
"14"/"3"
4.666666666666667
"10a"-1
NaN
"2b"*8
NaN
"14c"/"3"
NaN
"14"+"3"
'143'
"10"+1
'101'


var a = true
var b = false
a+b
1

true+true
2

true-true
0


true is equal to 1
false is equal to 0

10+true
11
10/false
Infinity
"hi"+true
'hitrue'
"true"-"true"
NaN
"true"+"false"
'truefalse'
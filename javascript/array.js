// array is the collection of homogeneous datatype as well as hetrogenious

var a = [1,3,3532,354,2345,2,546] //array of number
var b = ["dvd","fsev","SD","wer"] // array of string
var c = [true,true,false,true,false] // array of boolean
var d = ["dd",35,true,"Dvd","rwf",4,false,2]


var city = ["Delhi","Mumbai","Amsterdam","Helsinki","Venice"]

city.length
5
city[0]
'Delhi'
city[1]
'Mumbai'
city[city.length-1]
'Venice'

var city = ["Delhi","Mumbai","Amsterdam","Helsinki","Venice"]
city.push("Boston")
6
city
(6) ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston']
city.push("Pune")
7
city
(7) ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']


var city = ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']

city.pop()
'Pune'
city
(6) ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston']
city.pop(2)
'Boston'
city.pop(100)
'Venice'
city
(4) ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki']
var city = ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']
'Delhi'
city.unshift('London')
7


push > add in the end
unshift > Add in the beginning
pop > remove last value
shift > remove the first value


var city = ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']
city 
(7) ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']
city.slice(1)
(6) ['Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']
city.slice(2)
(5) ['Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']
city.slice(2,5)
(3) ['Amsterdam', 'Helsinki', 'Venice']

Splice
splice(indexNumber,delete count,values)

var city = ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']

// remove 1 value from index number 2
city.splice(2,1)
['Amsterdam']

// Add 2 value on index number 4
city.splice(4,0,'Hongkong','Keev')


var city = ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']

// remove 1 value from index number 2
city.splice(2,1)
['Amsterdam']
16Third-party cookie will be blocked. Learn more in the Issues tab.
city.splice(4,0,'Hongkong','Keev')
[]
city
(8) ['Delhi', 'Mumbai', 'Helsinki', 'Venice', 'Hongkong', 'Keev', 'Boston', 'Pune']
city.slice(3,2,'Dublin')
[]
city
(8) ['Delhi', 'Mumbai', 'Helsinki', 'Venice', 'Hongkong', 'Keev', 'Boston', 'Pune']
city.splice(3,2,'Dublin')
(2) ['Venice', 'Hongkong']
city
(7) ['Delhi', 'Mumbai', 'Helsinki', 'Dublin', 'Keev', 'Boston', 'Pune']

var city = ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']
city.indexOf('London')
-1
city.indexOf('Delhi')
0
city.indexOf('Boston')
5
city.indexOf('Dublin')
-1


var a = ['a','b','c']
var b = [1,2,3,4]
undefined
a+b
'a,b,c1,2,3,4'
a.concat(b)
(7) ['a', 'b', 'c', 1, 2, 3, 4]

[...a,...b]
(7) ['a', 'b', 'c', 1, 2, 3, 4]

var c = [9,4,2,4]
var a = ['a','b',...c,'c']
a
(7) ['a', 'b', 9, 4, 2, 4, 'c']
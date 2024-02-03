var city = "lOnDOn"

city.toUpperCase()
'LONDON'
city.toLowerCase()
'london'


var city = "lOnDOn"
undefined
city.length
6
city.charAt(0)
'l'
city.charAt(1)
'O'
city.charAt(13)
''
city.charAt(3)
'D'
city.charAt(6)
''
city.charAt(5)
'n'
city.charAt(-1)
''
city.at(0)
'l'
city.at(-1)
'n'
city.at(-2)
'O'
city[0]
'l'
city[city.length-1]
'n'
city[city.length-2]
'O'

var name = "  Nikita  "
undefined
name.length
10
name.trim()
'Nikita'
var name = "  Nikita .  "
undefined
name.trim()
'Nikita .'

var a = "John"
var b = "john"
undefined
a == b
false
a.toUpperCase() == b.toUpperCase()
true


var city = "amStErDAm"

city.slice(1)
'mStErDAm'
city.slice(2)
'StErDAm'
city.slice(2,5)
'StE'
city.slice(1,6)
'mStEr'
city.slice(-1)
'm'
city.slice(-2)
'Am'
city.slice(0,-1)
'amStErDA'
city.slice(0,-2)
'amStErD'
city.slice(1,-2)
'mStErD'
city.slice(-2,1)

var city = "amStErDAm"
undefined
city.charAt(0)
'a'
city.charAt(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'

var city = "pARiS"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'

var a = "I am learning Javascript"

a.replace("Javascript","JS")
'I am learning JS'
var a = "Javascript I am learning Javascript"
undefined
a.replace("Javascript","JS")
'JS I am learning Javascript'
a.replaceAll("Javascript","JS")
'JS I am learning JS'
a.replaceAll(/Javascript/g,"JS")
'JS I am learning JS'

var name = "  Nikita .  "
name.replaceAll(" ","")
'Nikita.'
name.replaceAll(/ /g,"")
'Nikita.'
name.replace(/ /g,"")
'Nikita.'


var url = "https://github.com/Aakashdeveloper/Apiwithgo"

url.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'Apiwithgo']
var a = url.split('/')
undefined
a
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'Apiwithgo']
a[a.length-1]
'Apiwithgo'

var url = "https://github.com/Aakashdeveloper/PythonWithFlask"
var a = url.split('/')
a
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'PythonWithFlask']
a[a.length-1]
'PythonWithFlask'



var a = "Javascript I am learning Javascript"
a.split(' ')
(5) ['Javascript', 'I', 'am', 'learning', 'Javascript']

var a = "Javascript"
a.split('')
(10) ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
var a = ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
undefined
a.toString()
'J,a,v,a,s,c,r,i,p,t'
a.toString().replaceAll(',','')
'Javascript'


var a = 10
a.toString()
'10'
""+a
'10'
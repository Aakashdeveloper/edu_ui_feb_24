//map
var city = ["Delhi","Mumbai","Amsterdam","Helsinki","Venice"]

city.map((data) => {
    console.log(data)
})

var city = [1,2,3,4,5,6]
city.map((data) => {return data*2})
[2, 4, 6, 8, 10, 12]

var city = [1,2,3,4,5,6]
city.filter((data) => {return data>4})
[5, 6]
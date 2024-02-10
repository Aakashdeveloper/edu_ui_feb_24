const baseUrl = "http://3.17.216.66:4000"


const getCity = async() => {
    let response = await fetch(`${baseUrl}/location`,{method:'GET'})
    let data = await response.json()
    data.map((item) => {
        let elemenet = document.createElement('option') //<option></option>
        let text = document.createTextNode(item.state) //delhi
        elemenet.appendChild(text) //<option>Delhi</option>
        elemenet.value = item.state_id //<option value="1">Delhi</option>
        document.getElementById('city').appendChild(elemenet)
        //<select><option value="1">Delhi</option></select>
       })
}


const getRest = async() => {
    let cityId = document.getElementById('city').value;
    let rest = document.getElementById('restSelect');
    while(rest.length>0){
        rest.remove(0)
    }
    let response = await fetch(`${baseUrl}/restaurant?stateId=${cityId}`,{method:'GET'})
    let data = await response.json()
    data.map((item) => {
        let elemenet = document.createElement('option')
        let text = document.createTextNode(`${item.restaurant_name} | ${item.address}`)
        elemenet.appendChild(text)
        rest.appendChild(elemenet)
       })

}



// const getCity = () => {
//     fetch(`${baseUrl}/location`,{method:'GET'})
//     .then((res) => res.json())
//     .then((data) => {
//        data.map((item) => {
//         let elemenet = document.createElement('option') //<option></option>
//         let text = document.createTextNode(item.state) //delhi
//         elemenet.appendChild(text) //<option>Delhi</option>
//         elemenet.value = item.state_id //<option value="1">Delhi</option>
//         document.getElementById('city').appendChild(elemenet)
//         //<select><option value="1">Delhi</option></select>
//        })
//     })
// }
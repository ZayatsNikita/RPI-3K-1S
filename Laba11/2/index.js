function createTable(arrayObj){
    let table = document.createElement("table");
    document.body.appendChild(table);

    if (arrayObj.length) {
        let row = document.createElement("tr")
        table.appendChild(row);


        Object.keys(arrayObj[0]).forEach(function(v) {
            let cell = document.createElement("th");
            row.appendChild(cell);
            cell.innerHTML = v;
        });
    }

    for (let i = 0; i < arrayObj.length; i++) {
        let row = document.createElement("tr")
        table.appendChild(row);

        Object.keys(arrayObj[i]).forEach(function(key) {
            let cell = document.createElement("td");
            row.appendChild(cell);
            cell.innerHTML = arrayObj[i][key];
        });

    }
}


function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.onload = () => {
            if (xhr.status > 299) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })
}


$(function (){
    $('#get-data').click(function (){
        let startDate = $('#start-date').val().split('.').reverse().join('-')
        let endDate = $('#end-date').val().split('.').reverse().join('-')
        const requestURL = `https://www.nbrb.by/API/ExRates/Rates/Dynamics/145?startDate=${startDate}&endDate=${endDate}`
        sendRequest('GET', requestURL)
        .then(data => {
            const jdata = JSON.parse(data)
            createTable(jdata)
        })
        .catch(err => console.log(err))
    })
})
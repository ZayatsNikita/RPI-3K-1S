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

const requestURL = 'https://www.nbrb.by/api/exrates/currencies/46'

function sendRequest(method, url, body = null) {
    const xmlRequest = new XMLHttpRequest()

    xmlRequest.open(method, url)

    xmlRequest.onload = () => {
        if (xmlRequest.status != 200) {
            return xmlRequest.response
        } else {
            let data = xmlRequest.response
            const jdata = JSON.parse(data)
            createTable([jdata])

            return xmlRequest.response
        }
    }

    xmlRequest.send();
}
sendRequest('GET', requestURL)

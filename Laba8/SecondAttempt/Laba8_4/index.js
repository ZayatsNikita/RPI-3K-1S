let arrayObj = []

function getModal(){
    let modal = document.getElementById('myModal')
    modal.style.display = 'block'
    let span = document.getElementById('close')
    span.onclick = function (){
        modal.style.display = 'none'
    }
}

function Mouse(sensorModel, sensorType, title, connectionInterface, dpi){
    this.sensorModel = sensorModel;
    this.sensorType = sensorType;
    this.title = title;
    this.connectionInterface = connectionInterface;
    this.dpi = dpi;
}

function getData(){
    let sensorModel =  document.getElementById('sensorModel').value
    let sensorType = document.getElementById('sensorType').value
    let title = document.getElementById('title').value
    let connectionInterface = document.getElementById('connectionInterface').value
    let dpi = document.getElementById('dpi').value;

    return new Mouse(sensorModel, sensorType, title, connectionInterface, dpi)
}

document.getElementById('load-data').onclick = function (){
    arrayObj.push(getData())
    clearForm()
    document.getElementById('stats').textContent = 'Сохранено:    ' + arrayObj.length
    console.log(arrayObj)
}

document.getElementById('get-table').onclick = function (){
    function getTable(elementsForBody){
        let table = document.createElement("table");
        table.border = 1;
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        let headRow = document.createElement("tr");
        ["sensorModel", "sensorType", "title", "connectionInterface", "dPI"].forEach((elm) => {
            let th=document.createElement("th");
            th.appendChild(document.createTextNode(elm));
            headRow.appendChild(th);
        });
        thead.appendChild(headRow);
        table.appendChild(thead);
        elementsForBody.forEach((elm) => {
            let tr = document.createElement("tr");
            for (let x in elm) {  
                let td = document.createElement("td");
                td.appendChild(document.createTextNode(elm[x]))
                tr.appendChild(td);
            }
            tbody.appendChild(tr);  
        })
        table.appendChild(tbody);             
        return table;
    }

    document.getElementById("content").appendChild(getTable(arrayObj));

    closeForm()
}

function clearForm(){
    document.getElementById('sensorModel').value = '';
    document.getElementById('sensorType').value = '';
    document.getElementById('title').value = '';
    document.getElementById('connectionInterface').value = '';
    document.getElementById('dpi').value = '';
}

function closeForm(){
    let modal = document.getElementById('myModal')
    modal.style.display = 'none'
}

getModal()
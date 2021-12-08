function createTable(arrayObj){
    let table = $("<table></table>");
    $('#sub-content').append(table);
    if (arrayObj.length) {
        let row = $("<tr></tr>")
        table.append(row);


        Object.keys(arrayObj[0]).forEach(function(v) {
            let cell = $("<th></th>");
            row.append(cell);
            cell.html(v);
        });
    }

    for (let i = 0; i < arrayObj.length; i++) {
        let row = $("<tr></tr>")
        table.append(row);
        for(let j = 0, cell; j < arrayObj.length +1;j++){
            cell = $("<td></td>").addClass($('th').eq(j).text())
            cell.html(Object.values( arrayObj[i])[j] );
            row.append(cell);
        }
    }
}

function columnSort(columns){
    sorted = []
    columns.each(function (){
        sorted.push(($(this).text()))
    })
    sorted.sort();
    for (let i = 0; i < columns.length; i++){
        columns.eq(i).text(sorted[i])
    }
}

function Mouse(sensorType, tytle, sensorModel, dpi){
    this.sensorType = sensorType
    this.tytle = tytle
    this.sensorModel = sensorModel
    this.dpi = dpi
}

let mouse1 = new Mouse('lizer', 'mouse1', 'wer-32', 390);
let mouse2 = new Mouse('ball', 'mouse3', 'wer-33', 450);
let mouse3 = new Mouse('lizer', 'mouse2', 'wel-12', 410);

let mouses = [mouse1, mouse2, mouse3];

let mousesData = JSON.stringify(mouses)
localStorage.setItem('mousesData', mousesData)

$(function (){

    let data = JSON.parse(localStorage.getItem('mousesData'))
    createTable(data)
    Object.keys(data[0]).forEach(function(key) {

        $('th').each(function (){
            if($(this).text() === key){
                $(this).click(function (){
                    columnSort($('td.'+ key))
                })
            }
        })
    })

})
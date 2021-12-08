document.getElementById('reset').onclick = function (){
    location.reload()
}

document.getElementById('load').onclick = function (){
    let alignment = document.querySelector( 'input[name="alignments"]:checked')
    let lineParameters = document.getElementsByClassName('line')
    let color = document.getElementById('color')


    let line = document.getElementById('content')
    line.style.background = color.value
    line.style.width = lineParameters[0].value + 'px'
    line.style.height = lineParameters[1].value + 'px'
    position(line,alignment)
}

function position(line, alignment){
    if (alignment.value === 'CENTER'){
        line.style.margin = '0 auto auto auto'
    }
    if (alignment.value === 'RIGHT'){
        line.style.margin = '0 0 auto auto'
    }
    if (alignment.value === 'LEFT'){
        line.style.margin = 'auto 0 auto 0'
    }
}
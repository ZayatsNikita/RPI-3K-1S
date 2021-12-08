function bind(){
    let op = ''
    let systens = false
    let content = ''
    $('#numbers input').click(function (){

        if ($(this).val() === '='){
            let res;
                res = content.split(op)
                if (res.length > 1){
                    switch (op){
                        case '+':
                            content = (parseFloat(res[0])  + parseFloat(res[1])).toString()
                            $('#display').val(content)
                            break
                        case '-':
                            if (res.length > 2){
                                content = (parseFloat(-res[1]) - parseFloat(res[2])).toString()
                            }else {
                                content = (parseFloat(res[0]) - parseFloat(res[1])).toString()
                            }
                            $('#display').val(content)
                            break
                        case '*':
                            content = (parseFloat(res[0])  * parseFloat(res[1])).toString()
                            $('#display').val(content)
                            break
                        case '/':
                            content = (parseFloat(res[0])  / parseFloat(res[1])).toString()
                            $('#display').val(content)
                            break

                    }
            }
            systens = false
        }else {
            content += $(this).val()
            $('#display').val(content)
        }


    })
    $('#operations input').click(function (){
        if ($(this).val() === 'C'){
            content = ''
            $('#display').val('')
            systens = false
        }
        if ($(this).val() === '+'){
            if (!systens){
                content += ' + '
                $('#display').val(content)
            }
            else    {
                let res = content.split('+')
                content = (parseFloat(res[0]) + parseFloat(res[1])).toString() + ' + '
                $('#display').val(content)
            }
            op = '+'
            systens = true
        }
        if ($(this).val() === '-'){
            if (!systens){
                content += ' - '
                $('#display').val(content)
            }
            else {
                let res = content.split('-')
                if (res.length > 2){
                    content = (parseFloat(-res[1]) - parseFloat(res[2])).toString() + ' - '
                }else {
                    content = (parseFloat(res[0]) - parseFloat(res[1])).toString() + ' - '
                }

                $('#display').val(content)
            }
            op = '-'
            systens = true
        }


        if ($(this).val() === '*'){
            if (!systens){
                content += ' * '
                $('#display').val(content)
            }
            else {
                let res = content.split('*')
                console.log(res)
                content = (parseFloat(res[0]) * parseFloat(res[1])).toString() + ' * '
                $('#display').val(content)
            }
            op = '*'
            systens = true
        }

        if ($(this).val() === '/'){
            if (!systens){
                content += ' / '
                $('#display').val(content)
            }
            else {
                let res = content.split('*')
                console.log(res)
                content = (parseFloat(res[0]) / parseFloat(res[1])).toString() + ' / '
                $('#display').val(content)
            }
            op = '/'
            systens = true
        }
    })


    $(document).keyup(function(e) {
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            content += e.key
            $('#display').val(content)
        }

        // op - =
        if (e.key === '='){
            let res;
            res = content.split(op)
            if (res.length > 1){
                switch (op){
                    case '+':
                        content = (parseFloat(res[0])  + parseFloat(res[1])).toString()
                        $('#display').val(content)
                        break
                    case '-':
                        if (res.length > 2){
                            content = (parseFloat(-res[1]) - parseFloat(res[2])).toString()
                        }else {
                            content = (parseFloat(res[0]) - parseFloat(res[1])).toString()
                        }
                        $('#display').val(content)
                        break
                    case '*':
                        content = (parseFloat(res[0])  * parseFloat(res[1])).toString()
                        $('#display').val(content)
                        break
                    case '/':
                        content = (parseFloat(res[0])  / parseFloat(res[1])).toString()
                        $('#display').val(content)
                        break

                }
            }
            systens = false
        }
        //

        // op - [+,-,*,/]
        if (e.key === '+'){
            if (!systens){
                content += ' + '
                $('#display').val(content)
            }
            else    {
                let res = content.split('+')
                content = (parseFloat(res[0]) + parseFloat(res[1])).toString() + ' + '
                $('#display').val(content)
            }
            op = '+'
            systens = true
        }
        if (e.key === '-'){
            if (!systens){
                content += ' - '
                $('#display').val(content)
            }
            else {
                let res = content.split('-')
                if (res.length > 2){
                    content = (parseFloat(-res[1]) - parseFloat(res[2])).toString() + ' - '
                }else {
                    content = (parseFloat(res[0]) - parseFloat(res[1])).toString() + ' - '
                }

                $('#display').val(content)
            }
            op = '-'
            systens = true
        }


        if (e.key === '*'){
            if (!systens){
                content += ' * '
                $('#display').val(content)
            }
            else {
                let res = content.split('*')
                console.log(res)
                content = (parseFloat(res[0]) * parseFloat(res[1])).toString() + ' * '
                $('#display').val(content)
            }
            op = '*'
            systens = true
        }

        if (e.key === '/'){
            if (!systens){
                content += ' / '
                $('#display').val(content)
            }
            else {
                let res = content.split('*')
                console.log(res)
                content = (parseFloat(res[0]) / parseFloat(res[1])).toString() + ' / '
                $('#display').val(content)
            }
            op = '/'
            systens = true
        }

    });

    $('#save').click(function (){
        console.log(content)
        localStorage.setItem('Answ', JSON.stringify({Answ: content}))
    })
}


$(function (){
    bind()
})
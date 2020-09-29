function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var img = window.document.createElement('img')
    img.setAttribute('id','foto')
    var fAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('div2')
    var fsex = window.document.getElementsByName('radsex')
    var sexo = ''
    if(fsex[0].checked){
        sexo = 'masculino'
    }else if(fsex[1].checked){
        sexo = 'feminino'
    }else{
        window.alert('Sexo indefinido')
    }
    var idade = ano - Number(fAno.value)
    if (fAno.value.length == 0 || Number(fAno.value) > ano ){
        window.alert('[erro] Verifique seus dados e tente novamente')
    }else{
        if (idade < 3){
            img.setAttribute('src','bebe.png')
        }else if(idade < 11){
            if(sexo == 'masculino'){
                img.setAttribute ('src', 'criança.png')
            }else{
                img.setAttribute('src','criança_menina.png')
            }
        }else if(idade < 18){
            if(sexo == 'masculino'){
                img.setAttribute('src','adolescente_homem.png')
            }else{
                img.setAttribute('src','adolescente_mulher.png')
            }
        }else if(idade < 65){
            if(sexo == 'masculino'){
                img.setAttribute('src','adulto.png')
            }else{
                img.setAttribute('src','adulta.png')
            }
        }else if(idade < 100){
            if(sexo == 'masculino'){
                img.setAttribute('src','senhor.png')
            }else{
                img.setAttribute('src','senhora.png')
            }
        }else if(idade >=100){
            window.alert('Bicentenário')
        }else{
            window.alert('[erro] Verifique seus dados e tente novamente')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `O sexo é ${sexo} e a idade é ${idade}.`
        res.appendChild(img)
    }
}
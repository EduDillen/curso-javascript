function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Erro!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bboy.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'yman.png')
            } else if (idade < 40) {
                //Adulto
                img.setAttribute('src', 'aman.png')
            } else {
                //idoso
                img.setAttribute('src', 'oldman.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bgirl.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'ywoman.png')
            } else if (idade < 40) {
                //Adulto
                img.setAttribute('src', 'awoman.png')
            } else {
                //idoso
                img.setAttribute('src', 'oldwoman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}
//Pq a imagem dos bebes esta fora do formato ?
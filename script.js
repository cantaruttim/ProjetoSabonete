function verificar() {

    var res = document.querySelector('div#res')
    var produto = document.getElementsByName('produto')
    var selecao = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (produto[0].checked) {
        selecao = 'Chá de Bebê'
        img.setAttribute('src', 'elis_baby.jpeg')
    } else if (produto[1].checked) {
        selecao = 'Letras Individuais'
        img.setAttribute('src', 'letra_unica.jpeg')
    } else if (produto[2].checked) {
        selecao = 'Mulheres'
        img.setAttribute('src', 'flor_caixa.png')
    } else if (produto[3].checked) {
        selecao = 'Dia dos Namorados'
        img.setAttribute('src', 'coracoes.jpeg')
    }
    // res.style.textAlign = 'center'
    res.innerHTML = `A categoria de produtos selecionado foi:  ${selecao}`
    res.style.textAlign = 'center'
    res.appendChild(img)
}
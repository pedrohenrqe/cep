'use strict'

const cepInput = document.getElementById('cep')


const carregarCEP = (cepInfo) => {

    const address = document.getElementById('address').value = cepInfo.logradouro
    const neighborhood = document.getElementById('neighborhood').value = cepInfo.bairro
    const town = document.getElementById('town').value = cepInfo.localidade
    const state = document.getElementById('state').value = cepInfo.uf
}

const pegarCEP = async() => {

    let cepInput = document.getElementById('cep').value
    let cep = String(cepInput).replace('-', '')

    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const cepInfo = await response.json()
    
    carregarCEP(cepInfo)

}

cepInput.addEventListener('blur', pegarCEP)
cepInput.addEventListener('keyup', function(e) {
    
    if (e.key === 'Enter'){
        pegarCEP()
    }

})
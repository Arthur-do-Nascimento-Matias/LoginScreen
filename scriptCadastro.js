const cadastroForm = document.getElementById('cadastroForm')

cadastroForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = document.getElementById('nome').value
    const user = document.getElementById('user').value
    const password = document.getElementById('password').value

    fetch(`http://localhost:3000/cadastro?nome=${nome}&user=${user}&password=${password}`)
    .then(response => response.text())
    .then(dados => {
        document.getElementById('nome').value = ''
        document.getElementById('user').value = ''
        document.getElementById('password').value = ''
        alert(dados)
    })
})

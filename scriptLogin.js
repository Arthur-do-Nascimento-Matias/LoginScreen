const formLogin = document.getElementById('formLogin')

formLogin.addEventListener('submit', (event) => {
    event.preventDefault()

    const user = document.getElementById('user').value
    const password = document.getElementById('password').value

    fetch(`http://localhost:3000/login?user=${user}&password=${password}`)
    .then(response => response.text())
    .then(dados => {
        document.getElementById('user').value = ''
        document.getElementById('password').value = ''
        if(dados == 'ok') {
            window.location.href = 'logado.html'
        }
        else {
            alert(dados)
        }
    })
})

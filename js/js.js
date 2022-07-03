function Logar() {
  const login = document.getElementById('login_1').value
  const senha = document.getElementById('senha_1').value
  if (login == 'matheus' && senha == 'aragao') {
    window.alert('Login efetuado com sucesso')
    location.href = './home.html'
  } else {
    window.alert('error')
  }
}

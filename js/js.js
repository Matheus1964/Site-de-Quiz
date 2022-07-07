function Logar() {
  const login = document.getElementById('login_1').value
  const senha = document.getElementById('senha_1').value
  if (login == 'rafael' && senha == 'rafael') {
    window.alert('Login efetuado com sucesso')
    location.href = './home.html'
  } else {
    window.alert('error')
  }
}

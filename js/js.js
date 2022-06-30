function Logar() {
  const login = document.getElementById('login_1').value
  const senha = document.getElementById('senha_1').value
  if (login == 'Rafael' && senha == 'safadinha24') {
    window.alert('qualquer coisa')
    location.href = './index.html'
  } else {
    window.alert('error')
  }
}

import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="container">
    <h1>Cosmic Pulse 🚀</h1>
    <p>Your universe, your dashboard.</p>
    <p id="clock"></p>
  </main>
`

function updateClock() {
  document.querySelector('#clock').textContent =
    new Date().toLocaleTimeString()
}

updateClock()
setInterval(updateClock, 1000)
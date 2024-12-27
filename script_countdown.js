// Zielzeit setzen (3 Tage ab jetzt)
const targetDate = new Date().getTime() + (15 * 60 * 1000); // 15 Minuten in Millisekunden

// Funktion zum Aktualisieren des Countdowns
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Berechnung der Tage, Stunden, Minuten und Sekunden
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Countdown im richtigen Format anzeigen
  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Wenn der Countdown abgelaufen ist, zeigen wir eine Nachricht an
  if (distance < 0) {
    clearInterval(interval); // Stoppt den Countdown
    document.getElementById('countdown').innerHTML = "Zeit abgelaufen!";
  }
}

// Update jede Sekunde
const interval = setInterval(updateCountdown, 1000);

// Initialer Aufruf, um sofort mit der Anzeige zu starten
updateCountdown();

function spin() {
  var symbols = ['♠', '♥', '♦', '♣'];
  var resultElement = document.getElementById('result');
  var leverElement = document.getElementById('lever');
  
  leverElement.style.pointerEvents = 'none'; // Deaktiviert den Hebel während der Drehung
  
  var slot1 = Math.floor(Math.random() * symbols.length);
  var slot2 = Math.floor(Math.random() * symbols.length);
  var slot3 = Math.floor(Math.random() * symbols.length);
  
  var result = symbols[slot1] + ' ' + symbols[slot2] + ' ' + symbols[slot3];
  resultElement.innerHTML = result;
  
  setTimeout(function() {
    leverElement.style.pointerEvents = 'auto'; // Aktiviert den Hebel nach der Drehung
    resultElement.classList.remove('jackpot'); // Entfernt die Jackpot-Klasse, falls vorhanden
    
    if (slot1 === slot2 && slot2 === slot3) {
      resultElement.classList.add('jackpot'); // Fügt die Jackpot-Klasse hinzu
      resultElement.innerHTML += ' - Jackpot!';
    }
  }, 2000); // Warte 2 Sekunden, bevor der Hebel wieder aktiviert wird
}

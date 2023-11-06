document.addEventListener('DOMContentLoaded', function() {
    const keyDisplay = document.getElementById('keyDisplay');
    const keyCodeDisplay = document.getElementById('keyCodeDisplay');
    const keyHistoryList = document.getElementById('keyHistoryList');
    const clearHistoryButton = document.getElementById('clearHistoryButton');
    const keySound = document.getElementById('keySound');
    // Event listener to capture keypress
    document.addEventListener('keydown', function(event) {
        keyDisplay.textContent = event.key;
        keyCodeDisplay.textContent = event.keyCode;
        const li = document.createElement('li');
        li.textContent = `Key: ${event.key}, Key Code: ${event.keyCode}`;
        keyHistoryList.appendChild(li);
        // Play the key press sound
        keySound.currentTime = 0;
        keySound.play();
    });
    // Event listener to clear the key history
    clearHistoryButton.addEventListener('click', function() {
        keyHistoryList.innerHTML = '';
    });
 });
 
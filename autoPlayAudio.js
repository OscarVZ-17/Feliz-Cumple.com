document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playButton');
    var audio = document.getElementById('background-music');

    playButton.addEventListener('click', function() {
        audio.play().then(() => {
            // Optionally hide the play button after audio starts
            playButton.style.display = 'none';
        }).catch(error => {
            console.log('Play was prevented:', error);
        });
    });
});

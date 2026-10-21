const game = document.getElementById('game');

// Scale our fixed 1280x720 "canvas" to fit any screen
function fit() {
  const s = Math.min(innerWidth / 1280, innerHeight / 720);
  game.style.transform = `translate(-50%, -50%) scale(${s})`;
}
addEventListener('resize', fit);
fit();

game.textContent = 'Cricket Game';

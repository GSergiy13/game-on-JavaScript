const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');

window.addEventListener('keyup', function(event) {
  switch(event.code) {
    case 'ArrowUp':
        jump();
    break;
      // case 'ArrowDown':
      //   down();
      // break;
  }
});

function jump() {
  if(dino.classList !== 'jump') {
    dino.classList.add('jump');
  }

  setTimeout(() => {
    dino.classList.remove('jump');
  }, 400)
}

function down() {
  if(dino.classList !== 'down') {
    dino.classList.add('down');
  }

  setTimeout(() => {
    dino.classList.remove('down');
  }, 400)
}

setInterval(function() {
  let topDino = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let leftCactus = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  if(leftCactus < 12 && leftCactus > 0 && topDino >= 140) {
    alert('geme over')
  }
}, 10)
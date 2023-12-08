const colpit = document.getElementById('colpit');
let x = 0;
let y = 0;

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    const step = 10;

    switch (event.key) {
        case 'ArrowUp':
            y -= step;
            break;
        case 'ArrowDown':
            y += step;
            break;
        case 'ArrowLeft':
            x -= step;
            break;
        case 'ArrowRight':
            x += step;
            break;
        case 'R':
         
            x+=step+15;
            break;
        case 'L':
          
            x+=step-25;
            break;
        case 'E':
       
            y-=step+15;
            break;
        case 'W':
          
            y+=step+15;
            break;
        default:
            return;
    }

    moveColpit();
}

function rotateRight() {
    colpit.style.transform = 'rotate(90deg)';
}

function rotateLeft() {
    colpit.style.transform = 'rotate(-90deg)';
}

function flip() {
    colpit.style.transform = 'scaleX(-1)';
}

function moveColpit() {
    colpit.style.transform = `translate(${x}px, ${y}px)`;
}
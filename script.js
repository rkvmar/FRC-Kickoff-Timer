const container = document.querySelector(".container");

const time = new Date();

function updateCounter() {
    const targetDate = new Date('2025-01-04T00:00:00');
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        const milliseconds = Math.floor((timeDifference % 1000) / 1).toString().padStart(3, '0');
        container.innerHTML = `${days}:${hours}:${minutes}:${seconds}:${milliseconds}`;
    } else {
        container.innerHTML = "Its Kickoff Time!";
        doConfetti();
    }
}
setInterval(updateCounter, 1);
updateCounter();
function doConfetti() {
    confetti({
        particleCount: 200,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
    
      confetti({
        particleCount: 200,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
}
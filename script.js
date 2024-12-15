const container = document.querySelector(".container");
const header = document.querySelector(".header");
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
        header.style.display = "none";
        container.innerHTML = "Its Kickoff Time!";
        container.style.fontSize = "8vw";
        doConfetti();
        clearInterval(interval);
    }
}
const interval = setInterval(updateCounter, 1);
updateCounter();
function doConfetti() {
    confetti({
        particleCount: 500,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
    
      confetti({
        particleCount: 500,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
}
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
        const milliseconds = Math.floor((timeDifference % 1000) / 1);
        container.innerHTML = `${days}:${hours}:${minutes}:${seconds}:${milliseconds}`;
    } else {
        container.innerHTML = "Countdown has ended!";
    }
}
setInterval(updateCounter, 1);
updateCounter();
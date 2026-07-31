const heartButton = document.getElementById("heartButton");
const hiddenContent = document.getElementById("hiddenContent");
const loveSong = document.getElementById("loveSong");

heartButton.addEventListener("click", () => {

    hiddenContent.style.display = "block";

    if (loveSong) {
        loveSong.currentTime = 30;
        loveSong.play();
    }

    createHearts();

});
const startDate = new Date("2023-01-01T00:00:00");

function updateTimer() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}

setInterval(updateTimer,1000);

updateTimer();

function createHearts(){

    const hearts = document.getElementById("hearts");

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(20+Math.random()*20)+"px";

        hearts.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },8000);

    },400);

      }

function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = ["❤️","💖","💕","🌹","✨"][Math.floor(Math.random()*5)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random()*100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = (16 + Math.random()*20) + "px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";
        confetti.style.transition = "transform 4s linear, opacity 4s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.transform = "translateY(110vh) rotate(720deg)";
            confetti.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            confetti.remove();
        }, 4200);

    }

}

if (heartButton) {

    heartButton.addEventListener("click", () => {

        createConfetti();

    });

}

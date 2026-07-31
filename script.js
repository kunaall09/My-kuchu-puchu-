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

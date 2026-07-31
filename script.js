const password = "010123";

const passwordPage = document.getElementById("passwordPage");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const mainPage = document.getElementById("mainPage");

function showPage(page){
  passwordPage.classList.remove("active");
  question1.classList.remove("active");
  question2.classList.remove("active");
  mainPage.classList.remove("active");
  page.classList.add("active");
}

function checkPassword(){
  const value = document.getElementById("passwordInput").value.trim();

  if(value === password){
    showPage(question1);
  }else{
    document.getElementById("passwordError").innerText = "Wrong Password ❤️";
  }
}

function checkAnswer1(){
  const ans = document.getElementById("answer1").value.trim().toLowerCase();

  if(ans === "korea"){
    showPage(question2);
  }else{
    document.getElementById("answer1Error").innerText = "Hint: Korea ❤️";
  }
}

function checkAnswer2(){
  const ans = document.getElementById("answer2").value.trim().toLowerCase();

  if(ans.includes("jaan") &&
    (ans.includes("jada") || ans.includes("jyada") || ans.includes("zyada"))){
      showPage(mainPage);
  }else{
      document.getElementById("answer2Error").innerText = "Think Again ❤️";
  }
}  
}
const heartButton = document.getElementById("heartButton");
const hiddenContent = document.getElementById("hiddenContent");
const loveSong = document.getElementById("loveSong");

if (heartButton) {
    heartButton.addEventListener("click", () => {

    hiddenContent.style.display = "block";

    if (loveSong) {
        loveSong.currentTime = 30;
        loveSong.play();
    }

    createHearts();

});
}
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

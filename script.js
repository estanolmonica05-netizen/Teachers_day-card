// Typewriter message
const messageText =
  "thank you for teaching and guiding us maam! 🌟";
const messageEl = document.getElementById("message");
let i = 0;

function typeMessage() {
  if (i < messageText.length) {
    messageEl.innerHTML += messageText.charAt(i);
    i++;
    setTimeout(typeMessage, 50);
  }
}
typeMessage();

// Floating hearts animation
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 400);

// Surprise button
function showSurprise() {
  const surprises = [
    "📘 You taught us to dream big and stay kind!",
    "🌟 You’re not just a teacher, but a life-changer!",
    "💖 Your lessons live in our hearts forever!",
    "🎓 Thank you for making learning so joyful!",
  ];
  alert(surprises[Math.floor(Math.random() * surprises.length)]);
}

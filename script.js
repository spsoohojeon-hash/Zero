const button = document.getElementById("mainButton");
const result = document.getElementById("result");
const popup = document.getElementById("popup");
const ticker = document.querySelector(".ticker");
const floatingTexts = document.querySelectorAll(".floating");

let count = 0;

button.addEventListener("click", () => {
  
  count++;

  document.body.classList.add("crazy-mode");

  result.classList.remove("hidden");
  popup.classList.remove("hidden");
  ticker.classList.remove("hidden");

  floatingTexts.forEach((item) => {
    item.classList.remove("hidden");
  });

  result.textContent = "제로바보";
  button.textContent = `또 누르기 ${count}`;

  createEmojiRain();
  createRandomAds();
  startMovingUI();

  setTimeout(() => {
    popup.classList.add("hidden");
  }, 1700);
});

function createEmojiRain() {
  const emojis = [
    "🔥", "💥", "🎉", "🤑", "⚠️",
    "👁️", "🐟", "🌀", "📢", "💀",
    "🤯", "🥶", "🧃", "🦐", "✨"
  ];

  for (let i = 0; i < 35; i++) {
    const emoji = document.createElement("div");

    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.className = "emoji-rain";

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.top = "-60px";
    emoji.style.fontSize = Math.random() * 34 + 26 + "px";
    emoji.style.animationDuration = Math.random() * 1.6 + 1 + "s";
    emoji.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 3000);
  }
}

function createRandomAds() {
  const texts = [
    "지금 가입시 500원증정!",
    "제로바보!",
  ];

  for (let i = 0; i < 8; i++) {
    const ad = document.createElement("div");

    ad.textContent = texts[Math.floor(Math.random() * texts.length)];
    ad.className = "random-ad";

    ad.style.left = Math.random() * 85 + "vw";
    ad.style.top = Math.random() * 80 + "vh";

    document.body.appendChild(ad);

    setTimeout(() => {
      ad.remove();
    }, 2200);
  }
}

const style = document.createElement("style");

style.textContent = `
.emoji-rain {
  position: fixed;
  z-index: 60;
  pointer-events: none;
  animation-name: emojiFall;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

@keyframes emojiFall {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(115vh) rotate(1000deg) scale(1.3);
    opacity: 0;
  }
}

.random-ad {
  position: fixed;
  z-index: 55;
  padding: 10px 15px;
  background: white;
  color: red;
  border: 4px solid black;
  font-size: 22px;
  font-weight: 900;
  box-shadow: 0 0 25px yellow;
  animation: randomAdPop 0.25s infinite alternate;
  pointer-events: none;
}

@keyframes randomAdPop {
  from {
    transform: rotate(-8deg) scale(1);
  }
  to {
    transform: rotate(8deg) scale(1.18);
  }
}
`;

document.head.appendChild(style);

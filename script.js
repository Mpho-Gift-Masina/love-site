const rain = document.getElementById("rain");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const settingsBtn = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
const closeBtn = document.getElementById("closeBtn");
const applyBtn = document.getElementById("applyBtn");

let rainText = "I love you";
let textColor = "#ff8fbd";
let playing = false;

function createRainDrop() {
  const drop = document.createElement("div");
  drop.className = "drop";
  drop.textContent = rainText;

  drop.style.left = Math.random() * 100 + "vw";
  drop.style.fontSize = Math.random() * 14 + 14 + "px";
  drop.style.animationDuration = Math.random() * 3 + 3 + "s";
  drop.style.color = textColor;

  rain.appendChild(drop);

  setTimeout(() => {
    drop.remove();
  }, 6000);
}

setInterval(createRainDrop, 120);

musicBtn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    musicBtn.textContent = "⏸";
    playing = true;
  } else {
    music.pause();
    musicBtn.textContent = "▶";
    playing = false;
  }
});

settingsBtn.addEventListener("click", () => {
  settingsModal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  settingsModal.style.display = "none";
});

applyBtn.addEventListener("click", () => {
  const mainText = document.getElementById("textInput").value;
  rainText = document.getElementById("rainInput").value;
  textColor = document.getElementById("colorInput").value;

  document.getElementById("mainText").textContent = mainText;
  document.getElementById("mainText").style.color = textColor;

  settingsModal.style.display = "none";
});
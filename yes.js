const febHolidays = [
    "My dear girl, please feel it",
    "This is the cycle of love feel it good 😏❤️",
    "You are my friend,my love,my everything 😊",
    "And will be always ❤",
    " I love you❤️",
    "You're my everything ",
    "You are my soulmate ✨💕",
    "You are my princess 💕 ",
    "And of course... wait darling.....",
    "My cutest wife🤭",
    "I will always be there for you",
    "No matter how far we are🥰",
    "I promise I will never do anything wrong/bad with you🥺❤️",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl I have ever seen",
    "In one word, you're just perfect 🫠",
    "I'm the happiest boy to have you🥰",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy my love 🥺",
    "Im always with you no matter what🥺",
    "Never think your alone💓",
    "You are the most special person in my life🥰",
    "I don't want to lose you 😭",
    "I just want everything with you😭",
    "And i know you feel the same too😏💖",
    "You're the best my cutie!! 💖",
    "Whenever I talk with you I feel like I'm in heaven",
    "I love everything about you",
    "There are a lot of problems which may arise",
    "but we will overcome all of them 🥰",
    "This complete love cycle is just for you, ☺️💋",
    "my unconditional love,my princess katyusha💖",
    "Please take care of me and love me I'm just your small boy❤😁",
    "And at the end thank you for coming into my life and making it heaven💖",
    "You're the love of my life,",
    "I Love You So much❤️",
    "My sly cutie beautiful pretty awesome hot and sexy wifey😏🥵❤️",
    "(This is not the end,just I'm unable to program and write more words,maybe limited words but I will tell you else normally☺️)",
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
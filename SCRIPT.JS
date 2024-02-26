document.addEventListener("DOMContentLoaded", function () {
  const petals = document.querySelectorAll(".petal");
  let isOpen = false;

  function toggleFlower() {
    if (isOpen) {
      petals.forEach((petal, index) => {
        setTimeout(() => {
          petal.style.transform = "rotate(0deg)";
        }, index * 100);
      });
    } else {
      petals.forEach((petal, index) => {
        setTimeout(() => {
          petal.style.transform = "rotate(-60deg)";
        }, index * 100);
      });
    }
    isOpen = !isOpen;
  }

  setInterval(toggleFlower, 2000);
});

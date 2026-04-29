document.addEventListener("DOMContentLoaded", () => {
  const clock = document.getElementById("clock");

  setInterval(function () {
    if (clock) {
      let date = new Date();
      clock.innerHTML = date.toLocaleTimeString();
    }
  }, 1000);
});

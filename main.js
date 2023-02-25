let toggler = document.querySelector(".left-section .temp-toggle .toggle");
let tempValue = document.querySelector(".left-section .temp-value h1 span");

toggler.onclick = function ChangeTemprtureType(e) {
  if (e.target.innerHTML == "toggle_off") {
    e.target.innerHTML = "toggle_on";
    tempValue.innerHTML = parseInt(tempValue.innerHTML) + 33;
  } else if (e.target.innerHTML == "toggle_on") {
    e.target.innerHTML = "toggle_off";
    tempValue.innerHTML = parseInt(tempValue.innerHTML) - 33;
  }
};
// --------------------------------------
let transport = document.querySelectorAll(".left-section .transform span");
transport.forEach((span) => {
  span.addEventListener("click", (element) => {
    transport.forEach((span) => {
      span.classList.remove("active");
    });
    element.target.classList.add("active");
  });
});
// --------------------------------------

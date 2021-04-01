const container = document.querySelector(".container");
const pupilL = document.querySelector(".pupilL");
const pupilR = document.querySelector(".pupilR");

container.addEventListener("mousemove", (e) => {
  // val de départ *100 / valeur totale
  const x = `${(e.clientX * 100) / window.innerWidth}%`; // pos de la souri en x
  const y = `${(e.clientY * 100) / window.innerHeight}%`;

  for (let i = 0; i < 2; i++) {
    pupilL[i].style.left = x;
    pupilL[i].style.top = y;
    pupilL[i].style.transform = `translate(-${x}, -${y})`;
    pupilR[i].style.left = x;
    pupilR[i].style.top = y;
    pupilR[i].style.transform = `translate(-${x}, -${y})`;
  }
});

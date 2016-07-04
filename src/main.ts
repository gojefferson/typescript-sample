import { sayHello } from "./greet";

let mainBox: HTMLElement = document.getElementById("main-box");

function makeRectange(parent: HTMLElement) {
  let maxWidth: number = parent.offsetWidth;
  let maxHeight: number = parent.offsetHeight;

  let left: number = Math.random() * maxWidth;
  let top: number = Math.random() * maxHeight;
  let width: number = 20 + Math.random() * (maxWidth - left - 20) ;
  let height: number = 20 + Math.random() * (maxHeight - top - 20);

  let rectangle = document.createElement("div");
  rectangle.classList.add("rectangle");

  rectangle.style.left = `${left}px`;
  rectangle.style.top = `${top}px`;
  rectangle.style.width = `${width}px`;
  rectangle.style.height = `${height}px`;

  rectangle.style.backgroundColor = `hsl(${Math.random() * 360},100%, 75%)`;

  parent.appendChild(rectangle); 
  return rectangle;
}

function doRectanglesOverlap(r1: HTMLElement, r2: HTMLElement) {
  let r1Right = r1.offsetLeft + r1.offsetWidth;
  let r2Right = r2.offsetLeft + r2.offsetWidth;
  let r1Bottom = r1.offsetTop + r1.offsetHeight;
  let r2Bottom = r2.offsetTop + r2.offsetHeight;

  if (r2Right < r1.offsetLeft) return false;
  if (r2.offsetLeft > r1Right) return false;
  if (r2Bottom < r1.offsetTop) return false;
  if (r2.offsetTop > r1Bottom) return false;
  return true;
}

for (let i = 0; i < 300; i++) {
  makeRectange(mainBox);
}
import { sayHello } from "./greet";

let mainBox: HTMLElement = document.getElementById("main-box");


class Rectangle {
  width: number;
  height: number;
  element: HTMLElement;
  constructor(public left: number,
              public right: number,
              public top: number,
              public bottom: number) {
    this.width = right - left;
    this.height = bottom - top;
    let rectangle = document.createElement("div");
    rectangle.classList.add("rectangle");

    rectangle.style.left = `${this.left}px`;
    rectangle.style.top = `${this.top}px`;
    rectangle.style.width = `${this.width}px`;
    rectangle.style.height = `${this.height}px`;

    rectangle.style.backgroundColor = `hsl(${Math.random() * 360},100%, 60%)`;
    this.element = rectangle;
  }

  overlaps(r2: Rectangle) {
    if (r2.right < this.left) return false;
    if (r2.left > this.right) return false;
    if (r2.bottom < this.top) return false;
    if (r2.top > this.bottom) return false;
    return true;
  }
}

class BoardController {
  board: HTMLElement;
  items: Rectangle[];
  width: number;
  height: number;

  constructor(board: HTMLElement) {
    this.board = board;
    this.width = board.offsetWidth;
    this.height = board.offsetHeight;
    this.items = [];
  }

  newRandomRectange() {
    let left: number = Math.random() * this.width;
    let top: number = Math.random() * this.height;
    let width: number = 20 + Math.random() * (this.width - left - 20) ;
    let height: number = 20 + Math.random() * (this.height - top - 20);

    return new Rectangle(left, left+width, top, top+height);
  }

  checkNoOverlap(newRectangle: Rectangle) {
    for (let i = 0; i < this.items.length; i++) {
      if(newRectangle.overlaps(this.items[i])) {
        return false;
      }
    }
    return true;
  }

  placeRectangle(rectangle: Rectangle) {
    this.items.push(rectangle);
    this.board.appendChild(rectangle.element);
  }

  placeNRectangles(n: number) {
    for (let i = 0; i < n; i++) {
      let r = this.newRandomRectange();
      if (this.checkNoOverlap(r)) {
        this.placeRectangle(r);
      }
    }
  }
}

let boardApp = new BoardController(mainBox);

boardApp.placeNRectangles(3000);

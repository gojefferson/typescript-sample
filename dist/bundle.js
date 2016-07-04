(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
let mainBox = document.getElementById("main-box");
class Rectangle {
    constructor(left, right, top, bottom) {
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
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
    overlaps(r2) {
        if (r2.right < this.left)
            return false;
        if (r2.left > this.right)
            return false;
        if (r2.bottom < this.top)
            return false;
        if (r2.top > this.bottom)
            return false;
        return true;
    }
}
class BoardController {
    constructor(board) {
        this.board = board;
        this.width = board.offsetWidth;
        this.height = board.offsetHeight;
        this.items = [];
    }
    newRandomRectange() {
        let left = Math.random() * this.width;
        let top = Math.random() * this.height;
        let width = 20 + Math.random() * (this.width - left - 20);
        let height = 20 + Math.random() * (this.height - top - 20);
        return new Rectangle(left, left + width, top, top + height);
    }
    checkNoOverlap(newRectangle) {
        for (let i = 0; i < this.items.length; i++) {
            if (newRectangle.overlaps(this.items[i])) {
                return false;
            }
        }
        return true;
    }
    placeRectangle(rectangle) {
        this.items.push(rectangle);
        this.board.appendChild(rectangle.element);
    }
    placeNRectangles(n) {
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

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map

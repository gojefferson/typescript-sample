(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
let mainBox = document.getElementById("main-box");
function makeRectange(parent) {
    let maxWidth = parent.offsetWidth;
    let maxHeight = parent.offsetHeight;
    let left = Math.random() * maxWidth;
    let top = Math.random() * maxHeight;
    let width = 20 + Math.random() * (maxWidth - left - 20);
    let height = 20 + Math.random() * (maxHeight - top - 20);
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
function doRectanglesOverlap(r1, r2) {
    let r1Right = r1.offsetLeft + r1.offsetWidth;
    let r2Right = r2.offsetLeft + r2.offsetWidth;
    let r1Bottom = r1.offsetTop + r1.offsetHeight;
    let r2Bottom = r2.offsetTop + r2.offsetHeight;
    if (r2Right < r1.offsetLeft)
        return false;
    if (r2.offsetLeft > r1Right)
        return false;
    if (r2Bottom < r1.offsetTop)
        return false;
    if (r2.offsetTop > r1Bottom)
        return false;
    return true;
}
for (let i = 0; i < 300; i++) {
    makeRectange(mainBox);
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map

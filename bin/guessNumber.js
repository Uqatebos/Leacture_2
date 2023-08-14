#!/usr/bin/env node
const readline = require("readline");
const input = readline.createInterface(process.stdin);
const rngNumber = Math.round(Math.random() * 100);
input.on("close", () => console.log("Отгадано число: " + rngNumber));
console.log("Загадано число в диапазоне от 0 до 100");
input.on("line", (data) => {
  if (isNaN(data)) {
    console.log("Введено не число, введите заново");
  } else if (data < rngNumber) {
    console.log("Загаданное число больше");
  } else if (data > rngNumber) {
    console.log("Загаданное число меньше");
  } else if (data == rngNumber) {
    input.close();
  }
});

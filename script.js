// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let string;
// let arr = Array.from(buttons);

// arr.forEach(button => {
//   button.addEventListener('click', function (e) {
//     const target = e.target.innerHTML;
//     console.log(Number(e.target.innerHTML));
//     if (target == '=') {
//       string = eval(string);
//       input.value = string;
//     } else if (target == 'AC') {
//       string = '';
//       input.value = string;
//     } else if (target == 'DEL') {
//       string = string.substring(0, string.length - 1);
//       input.value = string;
//     } else {
//       string += target;
//       input.value = string;
//     }
//   });
// });

// document.addEventListener('keydown', function (e) {
//   //   console.log(e.key);
//   if (e.key == '1') input.value += '1';
// });
// // arr.forEach((button) => {
// //   button.addEventListener("click", (e) => {
// //     console.log("clickef");
// //   });
// // });

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const specialChars = ['+', '-', '*', '/', '%', '='];
let output = '';

const calculate = function (btnValue) {
  if (btnValue === '=' && output !== '') {
    output = eval(output.replace('%', '/100'));
  } else if (btnValue === 'AC') {
    output = '';
  } else if (btnValue === 'DEL') {
    output = output.toString().slice(0, -1);
  } else {
    if (output === '' && specialChars.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

buttons.forEach(button => {
  button.addEventListener('click', e => calculate(e.target.dataset.value));
});

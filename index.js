// const header = document.getElementById('countdown');
// const button = document.getElementById('startButton');
// let startTime = 10;

// header.innerHTML = `Start time: ${startTime}`;

// button.addEventListener('click', () => {
//     setInterval(() => {
//         if (startTime >= 0) {
//             header.innerHTML = `Start time: ${startTime}`;
//             startTime--;
//         }
//         else {
//             setTimeout(0);
//             header.innerHTML += '<p>Time up</p>'
//         }
//     }, 1000)
// });

let count = 0;
const intervalId = setInterval(() => {
  count += 1;
  console.log(count);
  if (count === 3) {
    clearInterval(intervalId);
  }
}, 1000);
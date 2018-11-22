const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

<<<<<<< HEAD
function init(e) {
=======
function init() {
  function onKeyDownHandler(e) {
>>>>>>> 89bf27d00d09e97eafc0eed2b6e4ed9a1534131a
    const key = e.key;
 
    if (key === codes[index]) {
      index++;
 
    if (index === codes.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
<<<<<<< HEAD
=======
}
>>>>>>> 89bf27d00d09e97eafc0eed2b6e4ed9a1534131a
}
init();

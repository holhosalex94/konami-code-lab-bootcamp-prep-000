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

function init(codes) {
   var index = 0;
  document.addEventListener('keydown', function (e) {
    const key = parseInt(e.detail || e.which);
 
    if (key === codes[index]) {
      index++;
 
    if (index === codes.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
}
init(codes);

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

function init() {

  var index = 0
  document.body.addEventListener('keydown', onKeyDownHandler);
   function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)
    console.log('key', key)
    for (let i = 0, l = codes.length; i < l; i++) {
     alert("Hurray!")
    }
  }
}	
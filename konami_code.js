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

  var index = 0;
        const getElement = document.querySelector('body');

        getElement.addEventListener('keydown', function(e) {
            if (codes[index] === e.which || codes[index] === e.detail) {
                index++;

                if (index === codes.length) {
                    alert("CHEAT EXECUTED!!");
                    index = 0;
                }
            } else {
                index = 0;
            }
        })
}	
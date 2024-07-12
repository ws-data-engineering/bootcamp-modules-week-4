const container = document.querySelector('.container');


function showDefaultNumbers() {
  for (let num = 0; num < container.children.length; num += 2) {
    container.children[num].innerHTML = `${num + 1}`;
  };
};

container.addEventListener('click', function (event) {
  const element = event.target;
  const num = element.dataset.number;
  container.children[num - 1].innerHTML = `${num}`;
  element.dataset.state = `displayed`;
});

showDefaultNumbers();
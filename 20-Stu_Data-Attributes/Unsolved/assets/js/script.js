const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  const element = event.target;
  const num = element.dataset.number;
  container.children[num - 1].innerHTML = `${num}`;
  element.dataset.state = `displayed`;
  // TODO: Complete function
});

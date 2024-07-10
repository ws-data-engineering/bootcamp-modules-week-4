// Access element using id
const articlesDiv = document.getElementById('articles');
const headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
function changeFontSize() {
    articlesDiv.children[0].children[1].style.fontSize = '50px';
};

function changeColor() {
    headerDiv.children[0].style.color = 'white';
};

changeFontSize();
changeColor();





const mainDiv = document.getElementById('main');

const buttons = document.getElementsByClassName('btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        for (let k = 0; k < mainDiv.children.length; k++) {
            mainDiv.children[k].classList.toggle('active');
        }
    })
}



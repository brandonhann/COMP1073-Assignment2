// constants for query selector

// function to change bg color from user input and add student id
function changeCustomColor() {
    const value = parseInt(document.getElementById('customNumber').value);

    if (isNaN(value)) { return; }

    if (value >= 0 && value <= 20) {
        document.body.style.backgroundColor = 'green';
    } else if (value > 20 && value <= 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (value > 40 && value <= 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (value > 60 && value <= 80) {
        document.body.style.backgroundColor = 'purple';
    } else if (value > 80 && value <= 100) {
        document.body.style.backgroundColor = 'yellow';
    } else {
        document.body.style.backgroundColor = 'red';
    }

    document.getElementById('myStudentId').textContent = "Student ID: 200547547";
}

// function to change bg color from random no.
function changeRandomColor() {
    var random = Math.floor(Math.random() * 100) + 1;
    document.getElementById('customNumber').value = random;
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    const select = document.getElementById('imageSelect');
    var images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

    for (let i of images) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
}

// function to change image
function changeImage() {
    const select = document.getElementById('imageSelect');
    var selectedImage = select.value;
    document.getElementById('images').src = `img/${selectedImage}`;
}

// event listeners for on click event of buttons and select
document.querySelector('.custColor').addEventListener('click', changeCustomColor);
document.querySelector('.randColor').addEventListener('click', changeRandomColor);

// event listeners for on change event of select
document.getElementById('imageSelect').addEventListener('change', changeImage);

addList();
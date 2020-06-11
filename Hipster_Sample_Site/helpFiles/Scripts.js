let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/HipsterIMG.jpg') {
      myImage.setAttribute ('src','images/Hipster2IMG.jpeg');
    } else {
      myImage.setAttribute ('src','images/HipsterIMG.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hipsters are cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hipsters are cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
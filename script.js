function taskOne() {
  let bgcolor = prompt('Please enter a color: ');
  document.body.style.backgroundColor = bgcolor;
}

function taskTwo() {
  let font = prompt('Please enter a font name');
  document.body.style.fontStyle = font;
}

function taskThree() {
  let align = prompt('Please enter an alignment');
  document.getElementsByTagName('h1')[0].style.textAlign = align;

}

function taskFour() {
  let bgcolor = prompt('Please enter a color: ');
  document.getElementsByTagName('p')[0].style.backgroundColor = bgcolor;
}

function taskFive() {
  let color = prompt('Please enter a color paragraph: ');
  let hrefs = prompt('Please enter a color for links');
  document.getElementsByTagName('p')[0].style.color = color;
  let links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    links[i].style.color = hrefs;
  }
}

function taskSix() {
  let fontSize = prompt('Please enter a font size');
  let color = prompt('Please enter a color');
  let boldness = prompt('Please enter a boldness value', 900);
  let dv = document.getElementsByTagName('div')[0];
  dv.style.fontSize = fontSize + 'px';
  dv.style.color = color;
  dv.style.fontWeight = boldness;
}

function taskSeven() {
  let marker = prompt('Please enter a marker type', 'square');
  document.querySelector('ul').style.listStyle = marker;
}

function taskEight() {
  let linkOne = prompt('Please enter link 1');
  let linkTwo = prompt('Please enter link 2');
  let linkThree = prompt('Please enter link 3');

  let one = document.getElementsByTagName('a')[0];
  one.textContent = linkOne;
  one.href = linkOne;

  let two = document.getElementsByTagName('a')[1];
  two.textContent = linkTwo;
  two.href = linkTwo;

  let three = document.getElementsByTagName('a')[2];
  three.textContent = linkThree;
  three.href = linkThree;
}
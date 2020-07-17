function taskOne() {
  color = ['red', 'blue', 'green'];
  let col = 0;
  document.getElementById('blockOne').addEventListener('mouseover', function () {
    event.target.style.backgroundColor = color[col];
    col++;
    if (col == color.length) {
      col = 0;
    }
  })
  document.getElementById('blockOne').addEventListener('mouseout', function () {
    event.target.style.backgroundColor = 'white';
  })
}
taskOne();

function taskTwo() {
  document.getElementById('blockTwo').addEventListener('mouseout', function () {
    event.target.style.backgroundColor = 'purple';
    document.getElementById('text').innerText = 'у мене є секрет';
    event.target.style.color = 'black';

  })
  document.getElementById('blockTwo').addEventListener('mouseover', function () {
    event.target.style.backgroundColor = 'yellow';
    document.getElementById('text').innerText = 'Хочеш знати який?';
    event.target.style.color = 'blue';

  })
  document.getElementById('blockTwo').addEventListener('mousedown', function () {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    document.getElementById('text').innerText = 'а я тобі не скажу!';
  })
  document.getElementById('blockTwo').addEventListener('mouseup', function () {
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'blue';
    document.getElementById('text').innerText = 'Хочеш знати який?';
  })

}
taskTwo();

function taskThree() {

  document.querySelectorAll('.blockThree').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
      let url = prompt('Please enter URL');

      event.target.style.background = "url('" + url + "')";
      // event.target.style.backgroundImage = "url('https://icons-for-free.com/iconfiles/png/512/32px+Free+Set+Camera-1320568209414231422.png')";
    })
  })

}
taskThree();


function taskFour() {
  document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', event => {
      let color = event.target.innerText;
      event.target.style.color = color;
    })
  })

}

taskFour();
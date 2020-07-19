let buttonText = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', '\]', '\\', 'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Space'];
let buttonTextCapital = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', '\]', '\\', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 'Space'];
let keyCode = ['192', '49', '50', '51', '52', '53', '54', '55', '56', '57', '48', '189', '187', '8', '9', '81', '87', '69', '82', '84', '89', '85', '73', '79', '80', '219', '221', '220', '20', '65', '83', '68', '70', '71', '72', '74', '75', '76', '186', '222', '13', '16', '90', '88', '67', '86', '66', '78', '77', '188', '190', '191', '16', '32'];
const keyboard = document.getElementsByClassName('keyboard');
const screen = document.getElementById('screen');
let capital = true;

function addButtons() {
  for (let i = 0; i < buttonText.length; i++) {
    let div = document.createElement('div');
    div.innerHTML = buttonText[i];
    div.setAttribute('class', 'button');
    div.classList.add(keyCode[i]);
    document.getElementById('keyboard').appendChild(div);
  }
}
addButtons();

function clickedEvent() {
  window.addEventListener('keydown', function (event) {
    let pressedCode = event.keyCode;
    if (document.getElementsByClassName(pressedCode)[0]) {
      document.getElementsByClassName(pressedCode)[0].classList.add("clicked");


      if (document.getElementsByClassName(pressedCode)[0] === document.getElementsByClassName('8')[0]) {
        let x = document.getElementById("screen").innerHTML;
        x = x.slice(0, -1);
        document.getElementById("screen").innerHTML = x;
      } else if (document.getElementsByClassName(pressedCode)[0] === document.getElementsByClassName('20')[0]) {
        //Caps lock
        if (capital === true) {
          toCapital();
          capital = false;
        } else {
          toLower();
          capital = true;
        }
        let x = event.key.key = ''.toUpperCase();
        screen.innerHTML += x;
        console.log(event);

      } else if (document.getElementsByClassName(pressedCode)[0] === document.getElementsByClassName('13')[0]) {
        //ENTER
        let x = document.getElementById("screen").innerHTML;
        let brk = document.getElementById('screen').innerHTML = "<br />";
        let nline = '<br>';
        let nnline = '\n';
        document.getElementById("screen").innerHTML = x + nline;
        console.log('Enter');
        console.log(x);
        console.log(event);

      } else if (document.getElementsByClassName(pressedCode)[0] === document.getElementsByClassName('16')[0]) {} else if (document.getElementsByClassName(pressedCode)[0] === document.getElementsByClassName('32')[0]) {
        //space
        screen.innerHTML += '&nbsp';
        console.log(event);
      } else {
        screen.innerHTML += event.key;
      }
    }
  })
  window.addEventListener('keyup', function (event) {
    let pressedCode = event.keyCode;
    document.getElementsByClassName(pressedCode)[0].classList.remove('clicked');
  })
}
clickedEvent();

function changeButtonSizes() {
  document.getElementsByClassName('192')[0].style.width = '30px'; //`
  document.getElementsByClassName('8')[0].style.width = '96px'; //backspace
  document.getElementsByClassName('9')[0].style.width = '50px'; //tab
  document.getElementsByClassName('220')[0].style.width = '75px'; //\
  document.getElementsByClassName('20')[0].style.width = '85px'; //caps
  document.getElementsByClassName('13')[0].style.width = '90px'; //enter
  document.getElementsByClassName('16')[0].style.width = '112px'; //l shift
  document.getElementsByClassName('16')[1].style.width = '112px'; // rshift
  document.getElementsByClassName('32')[0].style.width = '100%'; //space
}
changeButtonSizes();

function toCapital() {
  for (let i = 0; i < buttonText.length; i++) {
    let btns = document.getElementsByClassName('button');
    for (let i = 0; i < btns.length; i++) {
      btns[i].innerHTML = buttonTextCapital[i];
    }
  }
}

function toLower() {
  for (let i = 0; i < buttonText.length; i++) {
    let btns = document.getElementsByClassName('button');
    for (let i = 0; i < btns.length; i++) {
      btns[i].innerHTML = buttonText[i];
    }
  }
}
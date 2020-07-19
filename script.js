const colours = ['red', 'green', 'blue', 'purple', 'white', 'black', 'orange', 'yellow', 'pink'];
const images = ['https://images.unsplash.com/photo-1555852158-bd6a6d3ff258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1535053073254-1ffc1915425d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1591179536381-10f197e668d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1587004461774-8aeded0aadff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1568397624075-1130e1f0371a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1576136278393-178f2c8e63a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1587004485052-83cc1701315c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1586464836139-86553c751f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1587004461511-ded665a2e4b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
];
const TDs = document.querySelectorAll('td');

function cleantTDs() {
  for (let i = 0; i < TDs.length; i++) {
    TDs[i].style.backgroundColor = '';
    TDs[i].style.backgroundImage = '';
  }
}

function changeBgColor() {
  toggle();
  cleantTDs();
  tableColor(colours);
  clickEventsColor();
}

function changeBgImage() {
  cleantTDs();
  tableImages(images);
  clickEventsImages();
  toggle();
}

function tableColor(data) {
  for (let i = 0; i < TDs.length; i++) {
    TDs[i].style.backgroundColor = data[i];
  }
}

function clickEventsColor() {
  TDs.forEach(item => {
    item.addEventListener('click', event => {
      document.body.style.backgroundColor = event.target.style.backgroundColor;
    })
  })
}

function clickEventsImages() {
  TDs.forEach(item => {
    item.addEventListener('click', event => {
      console.log(event);
      document.body.style.backgroundImage = event.target.style.backgroundImage;
    })
  })
}

function tableImages(data) {
  for (let i = 0; i < TDs.length; i++) {
    TDs[i].style.backgroundImage = "url('" + data[i] + "')";
  }
}
var x = document.getElementById("table");

function toggle() {
  if (x.style.display === "none") {
    x.style.display = "table";
  } else {
    x.style.display = "none";
  }
}
toggle();
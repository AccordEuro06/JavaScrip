const mainMenu = [{
        name: 'Computer'
    },
    [{
            name: 'Local Drive C'
        },
        [{
            name: 'Windows'
        }, {
            name: 'Fonts'
        }], {
            name: 'ProgramFiles'
        }
    ]
];

let lineHTML = '<ul>';
let firstElement = true;

const menu = {
    get: function (Menu, ind) {
        if (!Array.isArray(Menu)) {
            Menu.show = true;
            if (ind === 0) {
                lineHTML += '<li class="plus">' + Menu.name + '</li>';
            } else {
                lineHTML += '<li class="window" >' + Menu.name + '</li>';
            }

        } else {

            for (let d = 0; d < Menu.length; d++) {
                menu.get(Menu[d], d);
                if (d === 0 && !firstElement) {
                    lineHTML += '<ul>';
                }
                firstElement = false;
            }
            lineHTML += '</ul>';
            return
        }
    }
}

menuSistem.onclick = function (event) {

    firstElement = true;
    lineHTML = '<ul>';
    let target = event.target;

    if (target.tagName === 'LI') {

            target.classList.toggle('plus');
            target.classList.toggle('minus');
    }
};
menu.get(mainMenu, 0);
lineHTML += '</ul>';

document.getElementById('menuSistem').innerHTML = lineHTML;
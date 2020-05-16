let names = ['Ivan', 'Petro', 'Sergiy', 'Oleh', 'Kate'];
let addB, input, del;
class Person {
    constructor(name) {
        this.name = name
    }

    init() {
        this.render();
        this.cacheDom();
        this.bindEvent();
    }

    cacheDom() {
        del = $('#del');
        addB = $('#addButton');
    }
    bindEvent() {
        addB.click(function(){
            addPersonName();
        });
        // addB.on('click', function () {
        //     addPersonName()
        // })
    }
    render() {
        names.forEach(element => {
            $('#list').append('<li>' + element + '<span id="del"> X </span></li>');
        });
    }
    addPersonName() {
        input = $('#inputName').val();
        alert(input);
        console.log(input);
        names.push(input);
        this.render();
    };

    delPersonName() {

    }
}
person = new Person();
person.init();
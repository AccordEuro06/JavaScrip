const People = (function () {
    const names = ['Ivan', 'Petro', 'Sergiy', 'Oleh', 'Kate'];
    let input, del, addB;

    function init() {
        render();
        cacheDom();
        bindEvent();
    }

    function cacheDom() {
        input = $('#inputName');
        del = $('.delete');
        addB = $('#addButton');
    }

    function bindEvent() {
        addB.prop("onclick", null).off("click");
        del.prop("onclick", null).off("click");
        addB.on('click', function () {
            addPersonName()
        });
        del.on('click', function () {
            delPersonName();
        })
    };

    function render() {
        $('#list').html('');
        names.forEach(element => {
            $('#list').append('<li> <span class="delete">' + element + ' -X- </span></li>');
        });
        cacheDom();
        bindEvent();
    }

    function addPersonName() {
        if (input.val() == '') {
            debugger;
            alert('input is empty');
        } else {
            names.push(input.val());
            input.val('');
        }
        render();
    }

    function delPersonName() {
        let deleted = $('.deleted').closest('li');
        let i = $('#list').find('li').index(deleted);
        names.splice(i, 1);
        render();
    }
    return {
        init: init
    }
})();
People.init();
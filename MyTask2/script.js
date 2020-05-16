let uthred = $('#uTurn');
let wolf = $('#wTurn');

uthred.hide();
wolf.show();
var count = 0;

$('td').click(function () {
    let classes = ['Xclass', 'Oclass'];
    if (count % 2 == 0) {
        $(this).addClass(classes[0]);
        count++;
        uthred.show();
        wolf.hide();
        check();

    } else if (count % 2 != 0) {
        $(this).addClass(classes[1]);
        count++;
        wolf.show();
        uthred.hide();
        check();
    }
    $("#counter").html("My current count is: " + count);
});

function check() {
    if (($('#a1').hasClass('Xclass') && $('#a2').hasClass('Xclass') && $('#a3').hasClass('Xclass')) ||
    ($('#a4').hasClass('Xclass') && $('#a5').hasClass('Xclass') && $('#a6').hasClass('Xclass')) ||
    ($('#a7').hasClass('Xclass') && $('#a8').hasClass('Xclass') && $('#a9').hasClass('Xclass')) ||
    ($('#a1').hasClass('Xclass') && $('#a4').hasClass('Xclass') && $('#a7').hasClass('Xclass')) ||
    ($('#a2').hasClass('Xclass') && $('#a5').hasClass('Xclass') && $('#a8').hasClass('Xclass')) ||
    ($('#a3').hasClass('Xclass') && $('#a6').hasClass('Xclass') && $('#a9').hasClass('Xclass')) ||
    ($('#a1').hasClass('Xclass') && $('#a5').hasClass('Xclass') && $('#a9').hasClass('Xclass')) ||
    ($('#third').hasClass('Xclass') && $('#fifth').hasClass('Xclass') && $('#a7').hasClass('Xclass'))) {
        alert(' Xs won the gam')
    }
    else if (($('#a1').hasClass('Oclass') && $('#a2').hasClass('Oclass') && $('#a3').hasClass('Oclass')) ||
    ($('#a4').hasClass('Oclass') && $('#a5').hasClass('Oclass') && $('#a6').hasClass('Oclass')) ||
    ($('#a7').hasClass('Oclass') && $('#a8').hasClass('Oclass') && $('#a9').hasClass('Oclass')) ||
    ($('#a1').hasClass('Oclass') && $('#a4').hasClass('Oclass') && $('#a7').hasClass('Oclass')) ||
    ($('#a2').hasClass('Oclass') && $('#a5').hasClass('Oclass') && $('#a8').hasClass('Oclass')) ||
    ($('#a3').hasClass('Oclass') && $('#a6').hasClass('Oclass') && $('#a9').hasClass('Oclass')) ||
    ($('#a1').hasClass('Oclass') && $('#a5').hasClass('Oclass') && $('#a9').hasClass('Oclass')) ||
    ($('#third').hasClass('Oclass') && $('#fifth').hasClass('Oclass') && $('#a7').hasClass('Oclass'))) {
        alert(' Os won the gam')
    }
}




// var count = 0;
// $("td").click(function () {
//     if (count % 2 == 0) {
//         uthred.show();
//         wolf.hide();
//         $('td').click(function () {
//             $(this).addClass("Xclass");
//         });
//     }
//     if (count % 2 != 0) {
//         wolf.show();
//         uthred.hide();
//         $('td').click(function () {
//             $(this).addClass("Oclass");
//         });
//     }
//     // count++;

//     $("#counter").html("My current count is: " + count);
// });
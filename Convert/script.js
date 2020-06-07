const PBAPI = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

const locales = ['en', 'eu', 'ru'];
const currencies = ['usd', 'eur', 'rub'];

const Convertation = (function () {

    var formatter = new Intl.NumberFormat('uk');

    function addOnClickEvents() {
        $('#btnSubmit').on('click', function () {
            if ($('#inputValue').val() === '') {
                wrongInputAlert();
                $('.convertedrate').html('');

            } else {
                ConvertToUah();
            }
        })
    }

    function wrongInputAlert() {
        $('#alert').css('display', 'inline');
        setTimeout(function () {
            $('#alert').css('display', 'none');
        }, 2000)
    }

    function getCurrencyRate() {
        $.getJSON(PBAPI, function (data) {
            data.forEach(function (curency) {
                if (curency.ccy == 'BTC') {

                } else {
                    $('.currencyRate').append(`<i>Currency:</i> <b>${curency.ccy}</b> - buy price: <b>${curency.buy}</b>, sale price: <b>${curency.sale}</b> <br />`);
                }
            })
        });
    }

    function ConvertToUah() {
        let inputValue = $('#inputValue').val();
        $.getJSON(PBAPI, function (data) {
            $('.convertedrate').html('');
            data.forEach(function (curency) {
                if (curency.ccy == 'BTC') {

                } else {
                    $('.convertedrate').append(` For <b>${formatter.format(inputValue)}</b> UAH you can buy <b>${formatter.format(inputValue / curency.buy)} - </b> in ${curency.ccy}<br /> `);
                }

            })
        });
    }



    function ConvertFunctions() {
        getCurrencyRate();
        addOnClickEvents();

    }

    return {
        ConvertFunctions: ConvertFunctions
    }
})();
Convertation.ConvertFunctions();
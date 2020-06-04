const PBAPI = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
let inputValue = 0;
let outputValue = 0;
let buyValue = 0;
let sellValue = 0;


const Convertation = (function () {
    function getDropDown() {
        fetch(PBAPI)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                console.log(data);
                data.forEach(function (curency) {
                    $('#currencyDropDownInput').append(`<option> ${curency.ccy} </option`);
                    $('#currencyDropDownInput').on('change', function () {
                        if ($('#currencyDropDownInput').val() == 'BTC') {
                            if ($('#currencyDropDownInput').val() == curency.ccy) {
                                buyValue = curency.buy;
                                sellValue = curency.sale;
                                console.log(curency.buy);
                                console.log(curency.sale)
                            }
                            $('#outputCurrency').val('USD');
                            // $('#inputedData').val('');
                        } else {
                            if ($('#currencyDropDownInput').val() == curency.ccy) {
                                buyValue = curency.buy;
                                sellValue = curency.sale;
                                console.log(curency.buy);
                                console.log(curency.sale)
                            }
                            $('#outputCurrency').val('UAH');
                            // $('#inputedData').val('');
                        }
                    });
                })
            });
    };

    function addEventListeners() {
        $('#inputedData').on('change', function () {
            inputValue = $('#inputedData').val();

        })
        $('#btnConvert').on('click', function () {
            console.log($('#currencyDropDownInput').val());
            console.log(inputValue);
            $('#outputedData').val(inputValue * sellValue);
        });
    }

    function ConvertFunctions() {
        getDropDown();
        addEventListeners();
    }

    return {
        ConvertFunctions: ConvertFunctions
    }
})();

Convertation.ConvertFunctions();
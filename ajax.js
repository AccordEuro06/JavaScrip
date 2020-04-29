function sendDataByGetMethod() {


    var userFirstName = document.getElementById("userFirstName").value;
    var userLastName = document.getElementById("userLastName").value;


    var url = '/user-data?userFirstName=' + userFirstName + '&userLastName=' + userLastName;

    promiseGetServerCall(url).then(
        function (responce) {
            console.log(responce);
            return (responce);
        },
        function (error) {
            alert(error);
        }).then(function (responce) {
            alert(responce);
        },
        function (error) {
            alert(error);
        });
}

function promiseGetServerCall(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error('Network Error'));
        };
        xhr.send();
    });
}

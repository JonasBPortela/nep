_today: function () {
    var myDate = document.querySelector(data);
    var today = new Date();
    myDate.value = today.toISOString().substr(0, 10);
}
var fecha = new Date();
var year = fecha.getFullYear();
var month = fecha.getMonth()+1;
var day = fecha.getDate();
var hour = fecha.getHours();
var minutes = fecha.getMinutes();

if(month < 10){
    month = '0' + month;
}

if(day < 10){
    day = '0' + day;
}
if(hour < 10){
    hour = '0' + hour;
}

if(minutes < 10){
    minutes = '0' + minutes;
}

document.querySelector('#fechaAct').innerHTML = day + '/' + month + '/' + year;
document.querySelector('#horaAct').innerHTML = hour + ':' + minutes;


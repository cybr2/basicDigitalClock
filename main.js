const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');


setInterval(() => {
    const time = new Date();

    hrs.innerHTML =(time.getHours() < 10 ? '0' : '') + time.getHours();
    min.innerHTML = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
    sec.innerHTML = (time.getSeconds() < 10 ? '0' : '') + time.getSeconds();
},1000)
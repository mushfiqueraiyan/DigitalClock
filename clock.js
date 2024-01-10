let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');


function startClcok(){

    const Today = new Date();
    let h = Today.getHours();
    let m = Today.getMinutes();
    let s = Today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;

    setTimeout(startClcok, 1000)
}

function checkTime(i){
    if(i<10){
        i = "0" + i;
    }

    return i
}

startClcok();
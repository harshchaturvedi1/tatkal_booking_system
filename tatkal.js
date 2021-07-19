
// passengers count
let MtoG = ['dicaprio', 'ronaldo', 'dhoni', 'lebron', 'chettri', 'rahul gandhi', 'babuBhaiya', 'jethala'];
let BtoG = ['dicaprio', 'ronaldo', 'dhoni', 'lebron', 'chettri', 'rahul gandhi', 'babuBhaiya', 'jethala'];
let PtoG = ['dicaprio', 'ronaldo', 'dhoni', 'lebron', 'chettri', 'rahul gandhi', 'babuBhaiya', 'jethala'];

// realtime train data inserting
let passengersCount = document.getElementById('containers');
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let train1 = document.createElement('p');
let train2 = document.createElement('p');
let train3 = document.createElement('p');

train1.innerHTML = `<h1>MtoG</h1>  ${MtoG.length}`;  //passengers cout for train1
train2.innerHTML = `<h1>BtoG</h1>  ${BtoG.length}`;//passengers cout for train2
train3.innerHTML = `<h1>PtoG</h1>  ${PtoG.length}`;//passengers cout for train3
div1.append(train1);
div2.append(train2);
div3.append(train3);
passengersCount.append(div1, div2, div3);

// checking for seat every one second later
async function checkSeat() {
    let promise = new Promise(function (resolve, reject) {
        setInterval(function () {
            if (MtoG.length < 4) {
                let name = 'train1';
                if (localStorage.getItem('train') == null)
                    localStorage.setItem('train', JSON.stringify(name));
                else {

                    localStorage.setItem('train', JSON.stringify(name));
                }
                resolve(window.location.href = 'booking.html');
            } else if (BtoG.length < 4) {
                let name = 'train2';
                if (localStorage.getItem('train') == null)
                    localStorage.setItem('train', JSON.stringify(name));
                else {
                    localStorage.setItem('train', JSON.stringify(name));
                }
                resolve(window.location.href = 'booking.html');
            } else if (PtoG.length < 4) {
                let name = 'train3';
                if (localStorage.getItem('train') == null)
                    localStorage.setItem('train', JSON.stringify(name));
                else {
                    localStorage.setItem('train', JSON.stringify(name));
                }
                resolve(window.location.href = 'booking.html')
            }
        }, 1000);
    });

    let res = await promise;
    alert(`The web page is taking you to ${res}`);
}
//random cancelling ticket function
function cancelTicket() {
    //generating random numbers
    let cancelling_speed1 = Math.ceil(Math.random() * 5);
    let cancelling_speed2 = Math.ceil(Math.random() * 5);
    let cancelling_speed3 = Math.ceil(Math.random() * 5);
    // console.log(cancelling_speed1, cancelling_speed2, cancelling_speed3)
    // for train 1
    setTimeout(function () {
        MtoG.pop();
        train1.innerHTML = `<h1>MtoG</h1>  ${MtoG.length}`;
    }, cancelling_speed1 * 1000);
    // for train 2
    setTimeout(function () {
        BtoG.pop()
        train2.innerHTML = `<h1>BtoG</h1>  ${BtoG.length}`;
    }, cancelling_speed2 * 1000);
    // for train 3
    setTimeout(function () {
        PtoG.pop();
        train3.innerHTML = `<h1>PtoG</h1>  ${PtoG.length}`;
    }, cancelling_speed3 * 1000);

    // if (MtoG.length == 0 || BtoG.length == 0 || PtoG.length == 0)
    //     clearInterval(interval);
}
var interval = setInterval(cancelTicket, 1000);

//random  ticket booking function
function bookTicket() {
    //generating random numbers
    let boookingName = ['dicaprio', 'ronaldo', 'dhoni', 'lebron', 'chettri', 'rahul gandhi', 'babuBhaiya', 'jethala'];
    let booking_speed1 = Math.ceil(Math.random() * 5);
    let booking_speed2 = Math.ceil(Math.random() * 5);
    let booking_speed3 = Math.ceil(Math.random() * 5);

    let booking1 = Math.ceil(Math.random() * 8);
    let booking2 = Math.ceil(Math.random() * 8);
    let booking3 = Math.ceil(Math.random() * 8);
    // console.log(cancelling_speed1, cancelling_speed2, cancelling_speed3)
    // for train 1
    setTimeout(function () {
        MtoG.push(boookingName[booking1]);
        train1.innerHTML = `<h1>MtoG</h1>  ${MtoG.length}`;
    }, booking_speed1 * 1000);
    // for train 2
    setTimeout(function () {
        BtoG.push(boookingName[booking2])
        train2.innerHTML = `<h1>BtoG</h1>  ${BtoG.length}`;
    }, booking_speed2 * 1000);
    // for train 3
    setTimeout(function () {
        PtoG.push(boookingName[booking3]);
        train3.innerHTML = `<h1>PtoG</h1>  ${PtoG.length}`;
    }, booking_speed3 * 1000);

    // if (MtoG.length == 0 || BtoG.length == 0 || PtoG.length == 0)
    //     clearInterval(interval);
}
var interval2 = setInterval(bookTicket, 2000);
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function slider() {
    var difficulty = document.getElementById("difficulty").value;
    if (difficulty == 1) {
        document.getElementById("difficulty-name").innerHTML = "Easy";
    }
    else if (difficulty == 2) {
        document.getElementById("difficulty-name").innerHTML = "Medium";
    }
    else if (difficulty == 3) {
        document.getElementById("difficulty-name").innerHTML = "Hard";
    }
}

var imgarray = randomiz()
var statearray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var lockarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var openarray = []
var score = 0;

function randomiz() {
    var max = 10, min = 1;
    var imgs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    for (var i = imgs.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = imgs[i];
        imgs[i] = imgs[j];
        imgs[j] = temp;
    }
    return imgs;
}

function forceshut(arr=[]) {
    for (var i = 0; i < arr.length; i++) {
        document.getElementById(`card${arr[i]+1}`).src = `dragon.jpg`;
        statearray[arr[i]] = 0;
    }
}

function forcelock() {
    for (var i = 0; i < statearray.length; i++) {
        lockarray[i] = 1;
    }
}

function matchcards() {
    if (openarray.length == 2) {
        if (imgarray[openarray[0]] === imgarray[openarray[1]]) {
            lockarray[openarray[0]] = 1;
            lockarray[openarray[1]] = 1;
            score++;
            openarray = [];
        }
        else {
            forceshut(openarray);
            openarray = [];
        }
        opencards = 0;
    }
    else if (openarray.length > 2) {
        forceshut(openarray);
        openarray = [];
    }
}

function wincondition() {
    for (var i = 0; i < statearray.length; i++) {
        if (statearray[i] === 0 || lockarray[i] === 0) return false;
    }
    return true;
}

function game() {
    var url = window.location.search;
    urlparams = new URLSearchParams(url);
    var level = parseInt(urlparams.get("difficulty"));
    opencards = 0;
    score = 0;
    document.getElementById("timer").innerHTML = timeformat(60 - 15*level);
    var timeleft = 60 - 15*level;
    var timer = setInterval(function () {
        timeleft -= 0.2;
        document.getElementById("timer").innerHTML = timeformat(Math.ceil(timeleft));
        if (timeleft <= 0 || wincondition()) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = `Score = ${score}`;
            forcelock();
        }
    }, 200);
}

function timeformat(secs) {
    var minutes = Math.floor((secs / 60));
    var seconds = secs - (minutes * 60);
    return `${minutes}:${seconds}`;
}

async function clickcard(num) {
    console.log(statearray);
    console.log(lockarray);
    if (lockarray[num-1] === 0) {
        var card = `card${num}`;
        // state 0 => front
        if (statearray[num-1] === 0) {
            document.getElementById(card).src = `jcm${imgarray[num-1]}.jpg`;
            statearray[num-1] = 1;
            openarray.push(num-1);
        }
        // state 1 => back
        else if (statearray[num-1] === 1) {
            document.getElementById(card).src = `dragon.jpg`;
            statearray[num-1] = 0;
            var index = openarray.indexOf(num-1);
            openarray.splice(index, 1);
        }
        // match cards
        await sleep(333);
        matchcards();
    }
}

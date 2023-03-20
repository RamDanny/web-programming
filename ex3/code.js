function checkch() {
    var salch = document.forms["regform"]["salch"].value;
    if (salch == "mr" || salch == "ms" || salch == "mrs" || salch == "dr") {
        document.getElementById("salcheck").style.display = "none";
    }
}

function checkname() {
    var namepat = /[A-Z]\s[A-Z][a-z]*(\s[A-Z][a-z]*)?/;
    var name = document.getElementById("name").value;
    if (namepat.test(name)) {
        document.forms["regform"]["name"].style = "border: 2px solid green; border-radius: 4px";
        document.getElementById("namcheck").style.display = "none";
    }
    else {
        window.alert("Enter a valid name!!");
    }
}

function checku() {
    var upat = /[a-zA-Z]+/;
    var uname = document.getElementById("uname").value;
    if (upat.test(uname)) {
        document.forms["regform"]["uname"].style = "border: 2px solid green; border-radius: 4px";
        document.getElementById("ucheck").style.display = "none";
    }
}

function checkp() {
    var pword = document.getElementById("pword").value;
    if (!/[a-z]/.test(pword)) {
        document.getElementById("passcheck").innerHTML = "Must contain lowercase character";
    }
    else if (!/[A-Z]/.test(pword)) {
        document.getElementById("passcheck").innerHTML = "Must contain uppercase character";
    }
    else if (!/[0-9]/.test(pword)) {
        document.getElementById("passcheck").innerHTML = "Must contain number";
    }
    else if (!/[\!\@\#\$\%\^\&\*\(\)\,\.\/\\\[\]\{\}\;\'\"\:\<\>\?]/.test(pword)) {
        document.getElementById("passcheck").innerHTML = "Must contain special character";
    }
    else if (pword.length < 8) {
        document.getElementById("passcheck").innerHTML = "Must be atleast 8 characters long";
    }
    else {
        document.getElementById("passcheck").style.display = "none";
    }
}

function checke() {
    var emailpat = /([a-zA-Z]{4}@some\.com)|([a-zA-Z]{3}\.[a-zA-Z]{3}@some\.org)|([a-zA-Z]{3}@some1\.some2\.net)/;
    var email = document.getElementById("email").value;
    if (emailpat.test(email)) {
        document.forms["regform"]["email"].style = "border: 2px solid green; border-radius: 4px";
        document.getElementById("emailcheck").style.display = "none";
    }
}

function checkdob() {
    var dob = document.getElementById("dob").value;
    var date1 = new Date(dob);
    var date2 = new Date();
    var diff = date2.getTime() - date1.getTime();
    var diffdays = diff / (1000 * 3600 * 24);
    var age = Math.floor(diffdays / 365);
    if (age >= 18 && age <= 35) {
        document.forms["regform"]["dob"].style = "border: 2px solid green; border-radius: 4px";
        document.getElementById("dobcheck").style.display = "none";
    }
}

function checkl() {
    var ch1 = document.getElementById("ch1en").checked;
    var ch2 = document.getElementById("ch2ta").checked;
    var ch3 = document.getElementById("ch3fr").checked;
    var ch4 = document.getElementById("ch4ot").checked;
    var ctr = 0;
    if (ch4) {
        document.getElementById("others").style.display = "inline-block";
    }
    else {
        document.getElementById("others").style.display = "none";
    }
    if (ch1) ctr++;
    if (ch2) ctr++;
    if (ch3) ctr++;
    if (ch4) ctr++;
    if (ctr >= 2) {
        document.getElementById("langcheck").style.display = "none";
    }
    else {
        document.getElementById("langcheck").style.display = "block";
    }
}

function final() {
    window.alert("Details have been submitted successfully");
}
